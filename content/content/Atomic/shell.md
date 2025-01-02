---
title: UNIX Shell
tags:
  - linux
  - resources
  - misc
  - glossary
date: 2024-06-08
lastmod: 2024-09-01
---
The UNIX shell is a layer in between you and the operating system kernel (page on that todo!). Through shell programs, you can navigate, edit, and manipulate the files and peripherals on your computer. It's like a portal to what's really happening behind all the graphics.

## Shell and Shell Accessories
It's important to note that the shell is, at its core, just another user program. You can run multiple shells at once, including shells of different types. Shells *inside* shells are also fair game. 
## The Terminal
This is also a shell accessory, but it's the main one. It's a graphical program or window that displays some information about the state of the current shell and lets you interact with that shell. Typically, it starts a new shell inside its window when it opens.

Historically, terminals were a hardware component of a computer. They were just keyboard and monitor combos that could display text printed out to them over serial from the real computer (think WarGames style) or feed text and commands back in from the keyboard. In most consumer cases the computer was just a circuit board inside a case, but a terminal could be hooked up to a room-sized supercomputer as well. Modern day terminals serve much the same purpose, just printing out what the shell wants to tell you.
- Sidebar: and even further back, terminals were "teletype" instead of being a monitor: a typewriter plus a machine that could click the typewriter keys to output from the computer. [The original UNIX was written on teletype](https://flickr.com/photos/9479603@N02/3311745151).

When you open a terminal, you'll see a **terminal prompt** on the left side. This tells you information like the current **directory**. Below are some examples: a default prompt, and my highly customized one.

![[Attachments/default-prompt.png]]

![[Attachments/customized-prompt.png]]

Customizing the prompt not only makes your shell look nicer, it gives you more control over what information you see. 

> [!hint]
> My dotfiles are available [on GitHub](https://github.com/bfahrenfort/dots), including [this zsh theme](https://github.com/bfahrenfort/dots/blob/arch/.local/share/oh-my-zsh/custom/themes/fino-edited.zsh-theme).