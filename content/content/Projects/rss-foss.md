---
title: Toward RSS
tags:
  - foss
  - project
  - seedling
date: 2024-02-14
lastmod: 2024-11-14
---
RSS (+ derivative Atom) is the most convenient and privacy-conscious way to subscribe to a website, social media account, and more. No site analytics, no page loading, no Javascript, no ads. All the website can see is that you pulled one file from it, but you can still read all the content that you wanted from the website in a compact format. RSS isn't dead (despite [suggestions to the contrary haha](https://rss-is-dead.lol)), but it's woefully underused. Admittedly, it lacks **economic incentives** for major websites to adopt it because it runs contrary to the modern idea of a content farm. But the **convenience for users** in its familiarity and centralization both greatly increase the quality of a user's experience on the internet. 

I'm a contributor on [[Projects/Obsidian/digital-garden|Quartz]]'s RSS feature, and I personally use a selfhosted feed reader for a lot of my news. It's streamlined my day because everything I want to see is all in one place.
## Vision
These are my personal directional goals for RSS contribution. As a whole, I want RSS to be used more frequently by everyone, websites and users alike. It should be accessible to those less familiar with the underlying tech, but still provide powerful customization for power readers.

On the implementation side, RSS is traditionally a one-site-one-feed feature. I want this to change, and granularity is key. In line with improving the user experience, I'd like to present the user with only what they want to see. If I could do something dynamic with custom feed concatenation, I absolutely would, but it's pushing the limits of the static-site medium that I use as my playground.

And when designing a feed reader, user convenience is paramount. I think that if there's a use case that's sufficiently intuitive to someone curious about RSS, users will demand proper integration from larger sites. Otherwise, the sites risk losing large swaths of revenue to competing sites, which would provide the economic incentive necessary for change. More than any interesting implementations web developers add to the feed generation itself, *this* is what would reverse the decline in usage.
### Use Cases and the Case from Users
What any individual (developer, user, or both) cares about in an RSS integration is bound to differ. I'm not a fan of HN for actually resolving the issue in discussion in a thread, but there are some comments that evaluate different implementations for different use cases (read: bikeshed) that we can pay attention to when implementing others. [Ask HN: Is RSS Dead?](https://news.ycombinator.com/item?id=22497184)

If you're a user and interested in starting to use RSS, check out my [[Programs I Like/rss-readers|list of suggested RSS readers]].
### Detour: Evolving Standards?
I'm less certain that there's a need for an RSS 3.0 or similar evolution. RSS Module syntax allows pretty robust extensions for use cases that weren't concrete at the time of RSS 2.0. 

> [!info]
> **Development - Implementation** section to be written.

## Roadmap
Here's what I'm doing and what I will be doing in future.
- [ ] **Right now:** get [#866 - Per-Folder RSS Feeds (Quartz)](https://github.com/jackyzha0/quartz/pull/866) features implemented and merged
- [x] Convert feed generation for Quartz from summaries into full-text HTML content items
	- Oops, this is already a thing, haha.
- [ ] Add link tags to Quartz pages for easy feed discovery 
	- This is done by hand in the index page on my site, but I should PR to do it programmatically.
	- Make sure it covers subdirectories as well.
- [ ] Deeper study into user preferences to determine a direction
- Connect with others passionate about reversing the RSS decline