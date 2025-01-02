---
title: "Window(s) to the Archive: Customization"
tags:
  - project
  - difficulty-moderate
  - customization
  - productivity
  - powertoys
date: 2024-03-24
lastmod: 2024-03-24
draft: false
---
# Editor's Note
I found this while going through my google docs. It seems to be an incomplete list of software utils and cosmetic tweaks I'd made to Windows from back when I used it actively. If you're interested in the atrocities of Windows customization, feel free to give it a read. There are a few convenience programs in here as well.
# Some Random Ranting And an Incomplete List of Programs

- GET YOURSELF A NONSTANDARD PACKAGE MANAGER IF YOU DON’T RUN LINUX. Brew and Chocolatey are highly recommended for macs and windows. They make everything so much easier and it’ll look cooler.
- GET YOURSELF A CUSTOMIZATION MANAGER. It’ll save so much time. On linux you’re pretty out of luck, everything is window-manager or desktop-environment dependent, so you’re gonna have to google (gasp) for how to customize a distro. However, Windows has tons of tools like Rainmeter.
- GET YOURSELF SOME NONSTANDARD PROGRAMS. Don’t like how your taskbar looks on linux? Plank that stuff. Hate windows update? WinAero Tweaker. Linus Tech Tips has so many videos on programs that make your life easier.
- [https://www.youtube.com/c/LinusTechTips/search?query=windows%2010%7C11](https://www.youtube.com/c/LinusTechTips/search?query=windows%2010%7C11)
- [https://brew.sh/
- [https://chocolatey.org/
- [https://www.rainmeter.net/](https://www.rainmeter.net/)
- [https://launchpad.net/plank
- [https://winaero.com/](https://winaero.com/)
- [https://albertlauncher.github.io/](https://albertlauncher.github.io/)
	- { *For GNOME, see the Searchlight extension -ed.* }
- [https://keypirinha.com/](https://keypirinha.com/)
	- { *Obsoleted by PowerToys Run -ed.* }
# Programs That Lend Themselves Very Well to Customizing
- Literally all of Linux
- [https://code.visualstudio.com/](https://code.visualstudio.com/)
- [https://www.microsoft.com/en-us/p/windows-terminal/9n0dx20hk701?activetab=pivot:overviewtab](https://www.microsoft.com/en-us/p/windows-terminal/9n0dx20hk701?activetab=pivot:overviewtab)
- [https://www.mozilla.org/en-US/firefox/new/
- [https://notepad-plus-plus.org/](https://notepad-plus-plus.org/)
- [https://github.com/neovim/neovim](https://github.com/neovim/neovim)

And up next:

## How I Did PowerShell

OG:
![[Attachments/ps-pre.png]]

Result:

![[Attachments/ps-post.png]]

Install Windows Terminal: [https://www.microsoft.com/en-us/p/windows-terminal/9n0dx20hk701?activetab=pivot:overviewtab](https://www.microsoft.com/en-us/p/windows-terminal/9n0dx20hk701?activetab=pivot:overviewtab)

NOTE: recommend installing PowerShell Core and using that as the default profile instead of Windows Powershell. WP is outdated; pwsh gets constant updates and has more quality of life features like &&, ||, etc.

Install Oh My Posh: [https://ohmyposh.dev/](https://ohmyposh.dev/)

Allow PS to run scripts that you create and don’t sign:
```powershell
Set-ExecutionPolicy -ExecutionPolicy Unrestricted
```

Open/create your profile script:
```powershell
notepad $PROFILE
```
Contents of the profile script Microsoft.PowerShell_profile.ps1:
```powershell
oh-my-posh --init --shell pwsh --config ~\M3P-edited.omp.json | Invoke-Expression # M3P-edited.omp.json is my theme based on M365Princess, you can get your own on ohmyposh's website  
if ([bool](([System.Security.Principal.WindowsIdentity]::GetCurrent()).groups -match "S-1-5-32-544"))  
{  
    $Host.UI.RawUI.WindowTitle = "Admin: Windows PrettyShell"  
}  
else  
{  
    $Host.UI.RawUI.WindowTitle = "Windows PrettyShell"  
}
```
Contents of ~\M3P-edited.omp.json:
```json
{  
  "$schema": "https://raw.githubusercontent.com/JanDeDobbeleer/oh-my-posh/main/themes/schema.json",  
  "blocks": [  
    {  
      "alignment": "left",  
      "segments": [  
        {  
          "background": "#9A348E",  
          "foreground": "#ffffff",  
          "leading_diamond": "\ue0b6",  
          "properties": {  
            "template": "{{ .UserName }} "  
          },  
          "style": "diamond",  
          "type": "session"  
        },  
        {  
          "background": "#341948",  
          "foreground": "#ffffff",  
          "powerline_symbol": "\ue0b0",  
          "properties": {  
            "folder_separator_icon": "\\",  
            "style": "full",  
            "template": " {{ .Path }} "  
          },  
          "style": "powerline",  
          "type": "path"  
        },  
        {  
          "background": "#FCA17D",  
          "foreground": "#ffffff",  
          "powerline_symbol": "\ue0b0",  
          "properties": {  
            "branch_icon": "",  
            "fetch_stash_count": true,  
            "fetch_status": false,  
            "fetch_upstream_icon": true,  
            "template": " \u279c ({{ .UpstreamIcon }}{{ .HEAD }}{{ if gt .StashCount 0 }} \uf692 {{ .StashCount }}{{ end }}) "  
          },  
          "style": "powerline",  
          "type": "git"  
        },  
        {  
          "background": "#86BBD8",  
          "foreground": "#ffffff",  
          "powerline_symbol": "\ue0b0",  
          "properties": {  
            "template": " \ue718 {{ if .PackageManagerIcon }}{{ .PackageManagerIcon }} {{ end }}{{ .Full }} "  
          },  
          "style": "powerline",  
          "type": "node"  
        },  
        {  
          "background": "#33658A",  
          "foreground": "#ffffff",  
          "properties": {  
            "template": " \u2665 {{ .CurrentDate | date .Format }} ",  
            "time_format": "15:04"  
          },  
          "style": "diamond",  
          "trailing_diamond": "\ue0b4",  
          "type": "time"  
        }  
      ],  
      "type": "prompt"  
    }  
  ],  
  "final_space": true,  
  "version": 1  
}
```
Install DTMono Nerd Font (link is a direct download) and set to your font in Windows Terminal: [https://github.com/ryanoasis/nerd-fonts/releases/download/v2.1.0/DaddyTimeMono.zip](https://github.com/ryanoasis/nerd-fonts/releases/download/v2.1.0/DaddyTimeMono.zip)

# How I did the Windows Shell

Install Customizer God
Download Lumicons
Take ownership of the C:\Windows\SystemResources directory and the file C:\Windows\System32\imageres.dll 
Replace imageres.dll with the one provided by Lumicons
Open SystemResources\imageres.dll.mun in Customizer God and modify to your liking
Restart windows explorer and maybe your computer

Result:
![[Attachments/shell-post.jpeg]]