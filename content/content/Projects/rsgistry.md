---
title: 🦀 rsgistry
tags:
  - foss
  - "#rust"
  - programming
  - project
  - difficulty-easy
  - seedling
date: 2024-02-28
lastmod: 2024-02-28
---
[Repository](https://github.com/bfahrenfort/rsgistry)

I have a vision that all should take to write a customized, full-stack, ready-to-deploy registry web app for your packages or community extensions is editing a single type.  Stylized as r\/\[es\]\/gistry, the app is geared towards reducing the overhead required for your community to be able to share their work built for-use-with or on-top-of your project. More info to come soon.

This entry will be a technical overview of my implementation choices and program design. Documentation on actually using the codebase will be hosted in the repository. Enjoy!
- Sidebar: this was advanced for me but it will (hopefully) be extremely easy for someone with limited coding knowledge to fork and deploy in a way that supports their use case.
## Background
I’ve run into the same ecosystem problem in about three different spaces now: there’s a really robust system for **community extensions, but no real way to share them**. Either they’re too trivial for individual GitHub repositories, too non-tech-oriented, or still need some additional metadata hosted online in order to have a good API consumer UX. Thus, I’m adapting a test project into a batteries-included codebase for hosting a registry. API is in Axum and set up to be hosted for free on Shuttle, unsure about the frontend as of yet but looking at Leptos.

...The name stylization is just a regex joke, but it has the added benefit of teaching you how to pronounce it.
## Implementation Details
### Macros
I'm cultivating a tidbit on [[Programs I Like/rust-macros|Rust Macros]], so feel free to read for a practical introduction to the topic.

This program works by generating multiple model types, their helper functions, and sql queries all from a single type at compile time.