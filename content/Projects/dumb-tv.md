---
title: Operation Dumb TV
tags:
  - project
  - difficulty-easy
  - repair
  - framework
date: 2025-07-25
lastmod: 2025-08-10
draft: false
---
> [!question] "Can I pay extra for there not to be an app?"
> Yes.

If I had connected my fancy new 4K TV to WiFi, it would have:
- Phoned home
- Automatically updated
- Turned on a microphone in the remote and a microphone in the screen
	- Sent the audio stream to Google
- Turned on a camera in the screen
- Periodically taken screenshots of everything that comes on the screen
	- Sold the resulting info to data brokers for targeted advertising

I'm not happy with a product that does that. Instead, I took my old Framework Laptop mainboard from [[Projects/my-computer|My Computer]], put it in a cooler master case, and turned into a Linux-powered theater PC, controlled with a regular keyboard and mouse. All the functionality of a smart TV with none of the tracking. Story of install documented in the [[#Write-up]], but the end result is 
## Specs
### Hardware
- Framework i5-1135g7 (Batch 6)
- 1x16GB DDR4
- 250GB boot nvme
- 1TB expansion card media storage (placeholder for NAS)
### OS
- EndeavourOS
- Plasma 6
- Grub2
- `xe` mesa driver
### Software
- Jellyfin: connection to a real media server for streaming video
- Floorp: Firefox fork
	- AI nonsense stripped out by default, similar to Librewolf
	- PWA support and hardware acceleration for YouTube, Twitch, etc
- UxPlay: AirPlay streaming (arguments `-fs -vd vaapih264dec` for most seamless results)
- KDE Connect: lazy remote control, using your phone as the remote
- Spotify: Flatpak streaming music client
- Presently, Plasma defaults for playing on-device music and videos
## Write-up
The hardware for this project was mostly from the guts of my Framework laptop, which I upgraded last year. I kept the mainboard around in case I had a use for it, and a TV seemed like a great project.

OS install process went without a hitch. I've often sold EndeavourOS as "baby arch", or when you want Arch features (namely the AUR) with sensible defaults and none of the bring-up. 
- [Archinstall](https://wiki.archlinux.org/title/Archinstall) is still going to be more intensive and unfamiliar than a Calamares platform for most users. And anyone who would benefit from Archinstall would greatly benefit from following the classic Arch installation guide instead.

Endeavour unfortunately comes with a few knowledge checks if you do start digging into the files, as changes have been made to alleviate maintenance burden. In particular, `dracut` has replaced `mkinitcpio` for the initramfs, which will change how you have to approach kernel modules. If you need to change things like early KMS, guides made for Fedora will be more helpful than those made for Arch. It also seems that systemd-boot is the default, but since I enjoy the snapshot-boot ability of btrfs, I went with grub instead.

The first hangup was audio, it seems like the 11th gen Intel board has audio handshake issues with hdmi. It's still intermittent and unsolved, I've tried multiple solutions on the driver and software side. In Linux, no one can hear you scream.
- The `sof-firmware` package for Arch is installed
- Kernel flag for intel iommu groups had no effect
- Kernel module parameter for dsp driver had no effect

UxPlay required modifications to get running. The default package installs a system service, but that couldn't find dbus or the wayland display. Installing it as a user service solved that issue. However, user services can't depend on system services, so I also had to remove the `avahi-daemon` requirement in the service. Make sure to install the deprecated `gstreamer-vaapi` if you want hardware acceleration, `gstreamer-va` was not sufficient.
## Further Reading
Framework has a blog post from before the launch of the first laptop called [In Defense of Dumb TVs](https://frame.work/blog/in-defense-of-dumb-tvs), making this an almost poetic use of the mainboard.