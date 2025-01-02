---
title: eGPU Passthrough with VFIO
tags:
  - project
  - seedling
  - difficulty-advanced
  - linux
date: 2024-03-17
lastmod: 2024-03-18
draft: false
---
I dabbled in running a Windows 11 KVM under an Arch Linux host on my laptop and passing my 3060 Ti eGPU to the vm. Here's how it went.

## Bottom Line
It works! Here are the **fact takeaways**:
- The Framework Laptop 13 11th gen's motherboard separates a Thunderbolt 3 eGPU into its own IOMMU group that only contains the card, its audio device, and the Thunderbolt controller.
	- There are two Thunderbolt controllers on the mobo (one per side), I'm unsure what would happen if there were two TB devices on one controller. All my tests were with one TB device per controller.
- PCI passthrough to the VM works without a hitch once you find the right IDs.
- As long as the VM is shut off when you do it, you can hot-plug and -unplug the eGPU since the driver it binds to isn't a video driver.

And **my thoughts**:
- It's just too much trouble on a laptop.
- This setup is even more CPU bound than normal eGPU. The windows VM frequently pegs at 100% CPU (partially a Windows issue tbf), and I couldn't even run a game on it without it freezing. I'd need to retest on a higher spec CPU to be certain that this isn't workable for me.
## Method
I followed [Archwiki - PCI Passthrough through OVMF](https://wiki.archlinux.org/title/PCI_passthrough_via_OVMF). Be sure to follow the steps that require you to modify the modules included in your initramfs + their dependencies, **as well as** the module configuration with modprobe config files.

Kernel arguments: `intel_iommu=on iommu=pt modprobe.blacklist=noveau,nvidia,nvidia_modeset,nvidia_drm vfio_pci.ids=8086:1576,10de:2489,10de:228b systemd.mask=all-ways-egpu-boot-vga.service,all-ways-egpu-shutdown.service,all-ways-egpu-set-compositor.service`
- The 3 PCI IDs are the card, its audio device, and the Thunderbolt bridge.
- If your host isn't already setup to use the NVIDIA card in Linux, you probably only need `intel_iommu=on iommu=pt modprobe.blacklist=noveau vfio_pci.ids=8086:1576,10de:2489,10de:228b`.
## Next Steps
Since the performance is subpar, I think messing with Linux hotplug will be more worthwhile. The PCI arguments on egpu.io cause my system to crash so I need to spend like a day troubleshooting that at some point. When I do, I'll make another entry on it.