---
title: Secure Boot on Arch Linux
tags:
  - project
  - linux
  - difficulty-advanced
date: 2025-08-26
lastmod: 2025-08-26
draft: false
---
[[Projects/my-computer|My Computer]] is now using secure boot and automatically decrypting the whole-volume-encrypted root filesystem. 
## Setup
> [!info] Devices
> You'll have to replace the device paths if you follow this writeup.
> -  `/dev/nvme0n1p1` is my EFI system partition, aka boot partition.
> -  `/dev/nvme0n1p5` is a LUKS encrypted btrfs filesystem with many subvolumes. This config and my previous encryption config both open it to `/dev/mapper/rootfs`, which will contain the decrypted filesystem.
> -  `/dev/nvme0n1p6` is a swap partition, opened later in the boot process by `/etc/crypttab` to `/dev/mapper/swap`.

You'll need an Arch Linux install with any filesystem; I used btrfs. Your boot drive should be on the same storage device as the root filesystem, otherwise LUKS doesn't support the configuration. Obviously, this should be encrypted with LUKS with at least one passphrase so you can make changes to the configuration.
- Make sure your `/etc/fstab` is opening the subvolumes from the mapper decrypted volume, not the LUKS encrypted volume directly.

Your computer will need a TPM2.0, and the option to reset it to "setup mode" in the UEFI. For Framework laptops specifically, see [[#Detour: Framework Specific Bug|the note on setup mode]].

At this point, your device should have secure boot disabled.

I also had encrypted swap set up. This was not affected by the addition of secure boot because I set it up using these lines in these files:
```sh
# /etc/crypttab
swap /dev/nvme0n1p6 /dev/urandom swap,offset=2048,cipher=aes-xts-plain64,size=256

# /etc/fstab
/dev/mapper/swap    none        swap        defaults    0 0
```
## Write-up
### Initcpio changes
The first step was replacing the `udev` initcpio hook with `systemd`. The archwiki has a [really convenient table](https://wiki.archlinux.org/title/Mkinitcpio#Common_hooks) for making the change; here's my before and after. I needed to keep `base` because otherwise `fsck` would complain about missing `/bin/sh`. If `filesystems` can't autodetect your filesystem, you'll need to manually specify that module too.

```sh
#HOOKS=(base udev autodetect microcode modconf kms keyboard keymap consolefont block encrypt btrfs filesystems fsck grub-btrfs-overlayfs)
HOOKS=(base systemd autodetect microcode modconf kms keyboard sd-vconsole block sd-encrypt filesystems fsck grub-btrfs-overlayfs)
```

From using udev to unlock the device, I had these kernel parameters that would no longer be effective, so I removed them:
```
cryptdevice=/dev/nvme0n1p5:rootfs resume=/dev/mapper/swap
```

The archwiki says there are [systemd specific alternatives](https://wiki.archlinux.org/title/Dm-crypt/System_configuration#Using_systemd-cryptsetup-generator), but I was able to tweak the initramfs to avoid needing any kernel parameters for LUKS or autodecrypt.

I then reinstalled `grub` with the tpm module. Edit the directory and bootloader id for your specific install.
- h/t [CachyOS's guide and scripts](https://wiki.cachyos.org/configuration/secure_boot_setup/)
```
sudo grub-install --target=x86_64-efi --efi-directory=/boot --bootloader-id=GRUB --modules="tpm" --disable-shim-lock
```

Finally for the systemd changes, I replaced the kernel arguments with this file:
```
# /etc/crypttab.initramfs
rootfs  UUID=XXXXX-XXXXXXXXXXXXXXXXX  none  tpm2-device=auto
```

You can find the UUID of your LUKS encrypted drive with `sudo blkid -o list` (for me, as `/dev/nvme0n1p5`).

Rebuild the initcpio (`sudo mkinitcpio -P`) with the new hooks and the new crypttab.initramfs and you're ready to continue. Of course, right now there is no key stored in the TPM, so it will failover to a passphrase on every boot.
#### Detour: Framework Specific Bug
**The "enable setup mode" toggle in the Framework UEFI does not work properly.** You will have to manually delete PK, KEK, and DB entries to make `sbctl` see it as being in setup mode.
- [This forum post](https://community.frame.work/t/cant-enable-secure-boot-setup-mode/57683/6?u=be_far) describes the solution, but not very well. Here are the exact steps I followed.
> [!hint] If you've already tried it and found this post after running into an issue with sbctl:
> 1. I'm sorry to hear that :P
> 2. Reboot to UEFI manually (as systemctl reboot to firmware won't work in this state)
> 	- probably by restarting and spamming F2 on boot
> 3. Reset the TPM to factory settings, as opposed to resetting to setup mode
> 4. Exit saving changes and re-enter the UEFI (spam F2 again)
> 5. Continue with the below

If you have not yet tried the option to put the tpm in setup mode (or just followed the above callout):
1. In the UEFI TPM options, arrow down to PK, select "delete PK" and delete all entries
2. Arrow down to KEK, select "delete KEK" and delete all entries
3. Arrow down to **DB**, select "delete certificate" and delete all entries
4. **DO NOT DELETE ANY** "DBX" entries. If you do, follow the above callout and try steps 1-3 here again.
5. Exit saving changes and boot back into Linux!
### Signing your own kernel for secure boot
I used `sbctl` to create my own signing key. Again, h/t [CachyOS's guide and scripts](https://wiki.cachyos.org/configuration/secure_boot_setup/).

First, if you have a Windows install, you need to enroll their keys. `sudo sbctl enroll-keys --microsoft`. If this errors out, you haven't followed the instructions in this section properly.

You can then sign your `vmlinuz` files and your grub `.efi` files with `sudo sbctl sign /boot/path/to/those`. CachyOS provides a [script](https://github.com/CachyOS/CachyOS-Settings/blob/master/usr/bin/sbctl-batch-sign) which you can use to automatically find these files, or just do it manually if you know where all of those are (not recommended, as some distros put vmlinuz files in weird places in your boot partition). `sudo sbctl verify` shows what files are signed; for me it has a lot of errors but the important files (my grub efi binary and my two vmlinuz files for two different kernels) successfully verify right at the top of the log. 
- Note that `sbctl sign-all` just re-signs all files in the locations of files it has previously signed; it's not a substitute for the first signing which you're performing right now.

You can now enable secure boot and boot your linux install!
### The Important Part: Enrolling LUKS Key to TPM
See [archwiki](https://wiki.archlinux.org/title/Systemd-cryptenroll#Trusted_Platform_Module).
```
sudo systemd-cryptenroll --wipe-slot tpm2 --tpm2-device auto --tpm2-pcrs "3+5+7+11+14+15" /dev/nvme0n1p5
```

And now, if your initramfs is set up with systemd and the right files, it will "just work".

This must be done after adding your key, since the prep for adding your keys wipes the tpm. 

The PCRs can be found in `man systemd-cryptenroll`, each number is a different condition which can "trip" and require inputting the passphrase instead of taking a key from the TPM. The default is `"7"`, the manual recommends `"7+11+14"` at a minimum; I attempted to use `"1"` but, much like Windows with Bitlocker+TPM, this made it trip every time I removed my egpu. If you also have an egpu system, don't add `1` to your pcrs.
### Framework Specific Firmware Keys
You will also need to enroll the DB and KEK of your vendor if you ever want to update the firmware/uefi on your laptop with fwupd or otherwise, since firmware updates run as efi binaries. I used [this method](https://community.frame.work/t/secureboot-setup-mode/14889/11?u=be_far), a la downloading `.der` files, renaming them to `.cer`, copying them to the EFI partition, enrolling them from UEFI.
## Next Steps
I'm not interested in it, but some people have managed to get hibernate working with this setup too. [Framework forums](https://community.frame.work/t/guide-fedora-36-hibernation-with-enabled-secure-boot-and-full-disk-encryption-fde-decrypting-over-tpm2/25474/28) - the kernel patch from the OP is kind of old, so someone lower down in the thread updated it. 
- Imo, suspend is power efficient enough with arch and `auto-cpufreq` that you shouldn't need hibernate.
- This is an extremely advanced feature, requiring you to compile your own kernel. Even I'm not that extra (...anymore. I did compile Zen once on Fedora but immediately found a PPA for it and used that instead until I dropped it for cachy kernels)