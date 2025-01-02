---
title: Learning Linux
tags:
  - linux
  - resources
  - difficulty-moderate
date: 2023-09-28
lastmod: 2024-06-08
---
> [!info] Help me out!
> I'm looking to expand this article. Comment your suggestions for what newcomers to Linux should take a look at below!

## The Situation
Microsoft's release of Recall on Windows is a security **nightmare**. It's easily accessed by hackers, it promotes domestic abuse, and it spells the full forced\* integration of data-Hoovering AI "features" into the home and enterprise  computing.
- \*: Enterprise has a hidden policy setting to disable it, for now. Additionally, you *can* disable some AI features on home computers, but Windows has a history of re-enabling disabled features on update, and you can't disable automatic updates without breaking other features like Visual Studio and the Microsoft Store.


Microsoft has left many in search of an alternative operating system that doesn't intrude on their privacy by default. That alternative is **Linux**. 

Traditionally, the Linux community is known for being hostile to newcomers. But in response to this event, I've seen a lot of people commit to being much more open with their knowledge. I'd love to also share my knowledge on the subject. 

> [!info] Need [[digital-garden#Using this Site|help navigating]] my site?

## Scope
I've been daily driving Linux for a combined total of 1.5 years, chronicled [[Essays/on-linux|here]]. I want this entry to serve as a starting point that explains Linux from zero, but I'll try to avoid reinventing the wheel. Many people have written or produced content on . It'll be updated over time. If anything is confusing or if I miss an important topic, please let me know! A [[Atomic/what-is-a-garden|digital garden]] is an iterative process.
## Basic knowledge
Linux is designed for someone already familiar with one variant to be able to make certain assumptions about any other Linux system. This is more of a guideline to modern design choices than an actual rule. 
### What the operating system is
A wise internet user once said, "**what you're referring to as Linux is in fact GNU/Linux, or as I've recently taken to calling it, GNU 'plus' Linux**..."

Jokes aside, there's a grain of truth in that statement. Linux—the operating system as a whole—is a collection of moving parts that all work alongside each other to display what you see on the screen. These include:
- The Kernel (the Linux in "GNU + Linux")
- A shell
- A graphical interface
- Device drivers
- A filesystem
- Networking
- Processes running in the background to keep all of the above updated or responsive
- Representations of your hardware components to the system in software
- The actual programs you (the **user**) run, like web browsers and terminals

Many of these are compartmentalized and can only interact with each other in well-defined ways. This document is going to focus on the parts you'll touch the most as an everyday user: primarily userspace 

Linux grew out of a collection of operating system standards called POSIX. Most of those standards pertain to how the system behaves when you interact with it through a [[Atomic/shell#The Terminal|terminal]]. But when the open source community got involved with its development, its design had to evolve in a way that could satisfy group "consensus," and could handle many groups developing all its different facets asynchronously.

### Installing programs


{ *more currently in the works -ed.* }

## Additional Resources
### Further Reading
The No Starch Press books on Linux are extremely good resources on the formal design of the operating system in the modern day. I based a lot of the content in this entry on How Linux Works by Brian Ward.

Please seek out other independent bloggers who document their own linux journeys and learn from them. Chances are they're a lot more articulate about the subject than me. But if you'd like to hear my continued thoughts, I've written many miscellaneous pages on [linux](/tags/linux). And if you want to do what I do, you could start with the [more beginner-friendly projects I've undertaken](/tags/difficulty-easy). I wish you the best in becoming a Linux power user!
### Youtubers
**Check "most popular" on these channels for the most informative content.**

-  [DistroTube](https://www.youtube.com/@DistroTube/videos): Covers a variety of small topics within linux, as well as lots of top-10 style content for distros and programs.
-  [The Linux Experiment](https://www.youtube.com/@TheLinuxEXP/videos): Great weekly news source on the state of Linux and open source projects. Also publishes comparison videos for sets of programs, and the occasional distro tier list.
- [Chris Titus Tech](https://www.youtube.com/@ChrisTitusTech/): Goes pretty in-depth on specific programs (web browsers, code editors, etc) and makes the occasional tutorial. Also tier lists, but his opinions on tier lists are not really suited to new users.
- [Brodie Robertson](https://www.youtube.com/@BrodieRobertson): Reviewer on the bleeding edge. Don't take his advice if you want a daily driver (and ensure to actually explore the controversies that he makes you aware of), but he keeps on top of everything major in the Linux community. Good **podcast** channel at [Tech Over Tea](https://www.youtube.com/@TechOverTea).