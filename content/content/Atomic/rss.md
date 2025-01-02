---
title: RSS
tags:
  - rss
  - foss
  - meta
  - glossary
  - difficulty-easy
date: 2024-11-26
lastmod: 2024-11-26
draft: false
---
RSS, or Really Simple Syndication, is the most convenient and privacy-conscious way to subscribe to a website, social media account, and more. No site analytics, no page loading, no Javascript, no ads. All the website can see is that you pulled one file from it, but you can still read all the content that you wanted from the website in a compact format. 

On the technology side, think of a social media account. When you scroll someone's posts on their account page, the website is getting those posts from a database. But what if it only stored the X most recent posts' content and metadata, and put them in an easy to access text file that users cache locally rather than requiring complicated backend infrastructure? That's RSS. 
- And in fact, on the Fediverse, [there's an RSS feed for every Mastodon account](https://fedi.tips/following-mastodon-and-fediverse-accounts-through-rss/).

This makes it good for uses like news or podcasts, which don't need to incentivize engagement after you see new content.

RSS isn't dead (despite [suggestions to the contrary haha](https://rss-is-dead.lol)).

There is also a derivative of RSS called Atom which accomplishes much of the same things with slightly different syntax.

## Getting started with RSS - User
Find an [[Programs I Like/rss-readers|RSS reader]] and go to a web page you'd like to follow. 

They might advertise that they have a feed (perhaps with an icon like this: <img class="bf-icon" src="https://upload.wikimedia.org/wikipedia/en/4/43/Feed-icon.svg">). If not, try pasting the homepage link into your feed reader to let it auto-discover the feeds, or click your "add to RSS" bookmark if the reader had you set one up.

If all else fails, they still might have a feed! Try these links and if one shows up a page that isn't just the homepage again or a "this page doesn't exist", then paste it into your feed reader (common feed names):
- `site.com/index.xml`
- `site.com/index.rss`
- `site.com/feed.xml`
- `site.com/feed.rss`
- `site.com/rss.xml`

You can also turn email lists into RSS feeds to unclutter your email with [Kill The Newsletter](https://kill-the-newsletter.com). 
## RSS for developers
I contribute to RSS feed integration, read my thoughts on it [[Projects/rss-foss|here]].