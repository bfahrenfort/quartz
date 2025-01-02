---
title: My Terminal Roundup
tags:
  - linux
  - foss
  - programming
date: 2024-09-01
lastmod: 2024-09-01
draft: false
---
I...have a problem.

![[Attachments/terminal-illnesses.png|A folder of applications on my computer containing nine different terminal and shell programs.]]

Because of my desire for [[Atomic/friction|low-friction]] software, I'm always looking for a terminal that I can pop in and out of for its specific purpose. All of the above are worth touching on when I get time, but two have emerged as perfect for my use case.
## Run-And-Done: ddterm
[ddterm](https://extensions.gnome.org/extension/3780/ddterm/) is a GNOME shell extension for a "Quake-style terminal." This means that when you press a keybind, the already-in-the-background terminal drops down from the top of the screen above all other windows, ready to go to work. It mimics the behavior of the in-game console of the video game Quake, which is where it gets its name. You've seen similar behavior if you've ever pressed the grave (\`) key in Counter-Strike or Team Fortress 2. My keybind is Alt+grave—although the common one is F12—and pressing it pops up:

![[Attachments/ddterm.png]]

Because it's just *right there*, this makes the terminal much easier to use for me. Very often when I'm using my computer I need to run one command and ignore it in the background for a while, like installing a package or pushing to a git repository. Sometimes I even find it faster to do file management with the Quake terminal rather than open up GNOME's file explorer Nautilus. A Quake terminal also isn't too bad for editing files quickly with nano or [[Programs I Like/code-editors#Neovim|Neovim]].

I chose ddterm because it's highly configurable, actively maintained, and improving its native support for Wayland. It also lets me easily start with a custom command (tmux), so I can ignore its built-in tab workflows for something more universal.

Previously, I used the program Guake for this purpose. However, it began to show its age when it lost integration with some of my crucial programs (again, tmux), broke on Wayland, and even started losing performance.
## Programming: Alacritty
Blazing fast, minimal, and stable. Before terminals, my obsession was IDE frontends for my text editor of choice, [[Programs I Like/code-editors#Neovim|Neovim]]. Nvim-qt, neovide, fvim, and several others all proved too slow, too ugly, or too unstable to use properly. Eventually, I abandoned graphical programs in favor of a good terminal:

![[Attachments/alacritty.png]]

Since I removed window decorations for a better looking editor, I pre-set the window size through Alacritty's config, and move it around via a grab key. Using it with tmux (and tmux's nvim integration plugins) lets me use tmux splits instead of nvim windows, which gives me a split workflow that translates beyond just programming and into my sysadmin tasks.

The *one* downside is that there are no ligatures, nor will there ever be. It's a little sad when I use Haskell or Gleam, but it just means I need to be on the lookout for a new terminal...the brainrot is never-ending.
- Kitty has ligatures, but has actually-broken italic rendering and the maintainer's replies to requests to fix that issue were very offputting. So not only would it be even more unusable in a similar "wontfix" way, I'm also not inclined to support that project.
## Future
I asked around, and I've been [enthusiastically recommended](https://social.treehouse.systems/@be_far/113184285138213653) to try WezTerm for my use case.
## Further Reading
For the Windows curious, Windows Terminal is the "everything program" that I started on and which gave me the desire to find replacements on Linux. A while ago, I dug up and archived [[Projects/windows-archive#How I Did PowerShell|my customization recommendations for Windows Terminal]].