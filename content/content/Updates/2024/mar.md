---
title: 03/24 - Summary of Changes
draft: false
tags:
  - "#update"
date: 2024-03-01
lastmod: 2024-03-31
---
## Housekeeping
Howdy, y'all. I've now been maintaining this garden for about 6 months, and I've definitely found a rhythm!

*Trump v. Anderson* got a decision, and it's about what I expected. I'm not a Supreme Court scholar (I just moonlight as a reactionary haha), so here's someone who **is** to explain the catastropic effects. Unfortunately on Substack, [Steve Vladeck's One First: The Shoddy Politics of Trump v. Anderson](https://stevevladeck.substack.com/p/70-the-three-biggest-problems-with)

Turns out `liblzma` and `xz` had a backdoor from `xz-utils` (affected versions 5.6.0 and 5.6.1) that took years to set up. The circumstances that allowed it to go unnoticed are a product of problems with open-source culture that I don't feel qualified to write on. Technical write-up by a Gentoo dev is [here](https://gist.github.com/thesamesam/223949d5a074ebc3dce9ee78baad9e27). 
- When the backdoor got discovered, I was on a weekend trip to LA. The scramble to find ssh keys and downgrade my servers' `xz` packages was pretty funny. Imagine someone back from a night out, somewhat inebriated, and rummaging through laundry in their hotel room for a Yubikey to ssh into the servers from their phone.

I'm also trying to improve my writing style, because I struggle with conveying high-tech, informed entertainment for all audiences. **Suggestions appreciated**, so please consider my more verbose opinions on tech in this garden a continuing work-in-progress until I find a voice I'm happy with.
## Pages
- Making significant headway on the AI infringement essay. **Status 80%**, I might just publish soon after some heavy edits to curb verbosity.
- Seedling: [[Resources/law-students|Resources for Law Students]] (extracted from [[Essays/law-school|Law School is Broken]], new section added)
- Seedling: [[Projects/vfio-pci|eGPU Passthrough]]
- New(?): [[Projects/windows-archive|Window(s) to the Archive: Customization]]
- Content update: [[Projects/rss-foss|Toward RSS]]
- Content update: [[Essays/on-linux|The Linux Experience]]
- Content update (which breaks readability a little): [[Essays/plagiarism|Plagiarism is Bad, Actually]]
- Content update (small): [[Essays/no-ai-fraud-act|Critics are Wrong about the No AI FRAUD Act]]
## Status Updates
- Fixed the license on the repo, it mistakenly identified my written content as MIT-licensed.
- Added RSS feeds to the homepage's metadata, which should allow better integration with auto-discovery tools such as [RSS Is Dead](https://rss-is-dead.lol).