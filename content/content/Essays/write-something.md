---
title: You should write on the internet!
tags:
  - essay
  - seedling
  - writing
  - difficulty-easy
date: 2024-10-13
lastmod: 2024-10-13
draft: false
---
Writing: it's ~~quick~~, it's ~~easy~~, and it's free\*.
- \* terms and conditions apply

It's often said about AI content that you shouldn't be bothered to read what nobody could be bothered to write. But the reverse is true, and I have a deep respect for anyone that does take the time and conscious effort to express themselves in long- or medium-form.

If you've been considering putting up a website, this is your sign to go and do it! The tools in the space are now incredibly mature, and there are many user-friendly options and tiers of tech involvement to choose between. But none of that is important. Your content is what's important. 

Here are some suggestions:
## Write to inform
You might want to generate awareness of your viewpoint or experiences for consideration. If you're already using a microblogging site for this, I'm certain your audience will appreciate making your thoughts available in multiple forms through your website. 

If you're interested in creating infotainment like I am, consider adopting the [academish voice](https://inkandswitch.notion.site/Academish-Voice-0d8126b3be5545d2a21705ceedb5dd45). I read quite a bit of content in this space, and it's much more comfortable to consume when using even a loose style guide along these lines.
## Write to collect
This is a large part of [[Essays/why-i-garden|why I garden]]. Digital gardening in particular promotes making your acquired knowledge accessible and searchable. I find it also makes me more organized when I talk about these concepts with other people. 

This merges well with ideas like [zettelkasten notetaking](https://zettelkasten.de/introduction/) or other atomic note processes, where your knowledge is already structured in a way that's easy to abstract over.
### Detour: The importance of control
As I said, your content is what's important. But that also means access to your content is important. Much like I don't have opinions on what style of writing you should adopt, I don't have opinions on what software/tool you use to publish it, **except**: make sure that you have some way to ensure continuing access to that content. This means being able to move it in the unfortunate event that you're no longer able to use your current solution, or if you just want to move it to a new platform for any other reason.

> [!important] **Protect your content**
> You almost certainly don't want AI scraping your content for training. If you're able, you should:
> - configure robots.txt to tell AI scrapers to ignore your site
> - ban AI scrapers from seeing your site at all: [[Projects/Obsidian/digital-garden#Block the bot traffic!|here's how I do it]]
> - stop suspicious activity with [fail2ban](https://github.com/fail2ban/fail2ban)
> - if your domain is through CloudFlare, [block AI scrapers](https://blog.cloudflare.com/declaring-your-aindependence-block-ai-bots-scrapers-and-crawlers-with-a-single-click/)

## Resources
Large lists where you can find a bunch of projects to compare.
- [awesome-selfhosted: Blogging](https://github.com/awesome-selfhosted/awesome-selfhosted?Tab=readme-ov-file#blogging-platforms)
- [awesome-static-generators](https://github.com/myles/awesome-static-generators?tab=readme-ov-file#blogs)

And here's some top picks I've curated from the above, in order of increasing difficulty/involvement. Note that they're all above a threshold level of tech involvement, because I won't engage with riskier options like Notion, Obsidian Publish, Substack, or WordPress. You're welcome to explore those options if they fit your needs though!
- [Quartz (this site!)](https://quartz.jzhao.xyz/); TypeScript and Markdown ([[Projects/Obsidian/digital-garden|how I do it]])
	- Nicole van der Hoeven's [excellent video tutorial](https://www.youtube.com/watch?v=6s6DT1yN4dw)
- [Jekyll](https://jekyllrb.com/); Ruby and Markdown
- [Ghost](https://ghost.org/); professional Medium alternative with a focus on social media integration
	- Here's how to migrate from WordPress to the much saner Ghost platform. [Guide](https://ghost.org/docs/migration/wordpress/)
- [capital-Small Web](https://ar.al/2020/08/07/what-is-the-small-web/) tools like [Kitten](https://codeberg.org/kitten/app) and [Domain](https://codeberg.org/domain/app)