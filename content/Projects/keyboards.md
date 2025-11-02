---
title: A Mechanical Keyboard Journey
tags:
  - diy
  - keyboard
  - programming
  - difficulty-easy
  - seedling
draft: false
date: 2024-07-25
lastmod: 2025-10-25
---
> [!hint] Shoutout
> I'm not sponsored, but I highly recommend [milktooth](https://milktooth.com) for your keyboard enthusiast needs. US stock and built by a real mech keeb enthusiast, as well as extremely competitive pricing even with tariffs. 

## The Problem and The Solution

I have three areas where I use keyboards. My home desk, and my work. 

At home, I had a "gaming keyboard", which was starting to become unbearable. It had generation 1 "silent" switches, which were both loud and uncomfortable to type on. Not to mention the awful software (Corsair iCue, my beloathed). I did enjoy its ergonomics outside of the way the switches felt, but that wasn't enough to justify attempting to retrofit the nearly 10-year-old soldered keyboard. Enter:

![[Attachments/panda.png|A red panda-themed keyboard on a fruit themed deskmat.]]

And at work, I had a generic membrane keyboard that always felt off no matter how I positioned it. The replacement:

![[Attachments/notion.png|An off-white keyboard with colorful modifiers and some Vim position arrow keys on the home row on the same food themed deskmat.]]

I did what I do best, and I hyperfixated. I built both of these keyboards within a month of each other, and I'm very happy with them! 

In late 2025, I built a third keeb for [[Projects/dumb-tv|my TV which is actually a computer]]. Here's what that looks like:

![[Attachments/nosignal.png|A television test pattern-themed keyboard with pink switches resting on a dark wooden coffee table. Partially in the picture is a Go board.]]

## Build Details
There are three basic components to a keyboard build:
### Switches

I've previously tested all different kinds of switches.  A switch's sound and feel falls into three different categories:
- Linear: Most people will have experienced this with a cheap HP membrane keyboard at their work or school. For those that haven't, it's a much longer travel compared to the flat, short press of a laptop keyboard or similar "scissor switch" keyboards. The amount of force needed to press it down is the same throughout the keypress.
- Tactile: Unlike a linear switch, somewhere in the keystroke, a tactile switch will feature a 'bump' where the force required increases and decreases. A **D-shape** bump will be in the middle of the stroke, a **P-shape** bump will be at the end of the stroke. 
	- I think a D-shape should be called a thorn bump, but I'm weird.
- Clicky: instead of the tactile bump, where the change is mostly in feel (and the added force of the bump makes *you* cause the noise), clicky switches have a separate metal tang that gets compressed and snapped against another piece of metal during the stroke. This produces a sharp metallic sound and unique feel that some people enjoy.
#### What I chose
Personally, I like a subset of linear switches known as *silent* linear switches. The silent switch uses some form of dampening, like a silicone gel bumper, inside the switch to minimize the sound of the stem against the housing. Of course, this typically comes with some tradeoff in the typing feel. All of the keyboards I built use different silent linear switches. 

For my home keyboard, I chose the [Invokeys Nightshade](https://invokeys.com/products/invokeys-x-alas-nightshade-switches). They have excellent feel, much better than I would expect for a silent switch. A pleasure to type on.

![An artistic shot of a keyboard switch on top of a flower.](https://invokeys.com/cdn/shop/files/Alas_x_Invokeys_Nightshade_Silent_Switches_Closeup.jpg?v=1743630805&width=1946)

For my work keyboard, I originally chose the [Outemu Honey Peach v3](https://chosfox.com/products/outemu-silent-honey-peach-switch). They are some of the best switches for real silence out there, typing sounds like a rush of air. However, they feel both mushy and scratchy at the same time. 

![](https://chosfox.com/cdn/shop/files/4_f8baf9ce-ff2e-44b8-afc9-244f5641fe93.jpg?v=1715315100&width=1280)

I later upgraded to the TTC Silent Frozen V2. These were just a hair louder but feel *amazing* in comparison. Not as good as my beloved nightshades.

![](https://res.cloudinary.com/milktooth/image/upload/v1708484233/switch-photos/Silent%20Frozen%20%28V2%29/Silent_Frozen_4_p5976y.jpg)

And for my TV keyboard, I got the new HMX Silent Sakuras, a new linear option. HMX is known as a must-have vendor for amazing sounding tactiles, and their linear silent switches are no slouch. These are the best sounding switches I own. Those thocks you envision when watching switch test videos, or maybe that one viral video of the thockiest keyboard in existence? That's what these sound like to type on in a heavy aluminum case. I have the V2, which is this without the box on the stem:

![](https://res.cloudinary.com/milktooth/image/upload/c_limit,w_2048/f_auto/q_auto/v1717824912/switch-photos/Silent%20Sakura/Silent_Sakura_1_ioj4h6?_a=BAVAZGE70)
### Keycaps - Material Girl
There's not really that much to say here; caps are personal preference on what aesthetic and profile you like.

Profile wise, the most common is Cherry, aka CYL (and its close cousin OEM). Anythin g else is more exotic, but might be more comfortable for you! I just use cherry. Look at the keyboard from the side to determine its profile, here are a few common ones:
![](https://preview.redd.it/8s8i0e61nec61.png?auto=webp&s=6a47db60ca1c44282f7b4a80985df284aeabda29)

Material wise, PBT is common for keycaps with dye sublimated (read: chemically painted) legends, and ABS is common on doubleshot (two-step) processes, including shine through legends. ABS also sounds slightly clackier, but it's very minor in my opinion.
### Boards
Choosing a board boils down to balancing the look of the case with the size and features of your circuit board. Reddit was helpful in finding options, but Keychron is generally the premium and well supported option.

Whatever you do, if you want one that's customizable, make sure you confirm the vendor is being nice and publishing their sources as required by the license. [QMK License Violations](https://github.com/qmk/qmk_firmware/blob/master/docs/license_violations.md)


## Further reading
There's a somewhat active community around DIY keyboards, but moreso for secondary inputs like macro pads and stream decks. I particularly like the writeup for the [Moogle Matrix Macropad](https://mommidearest.github.io/Keyboard-Diary/2024/02/29/Moogle-Matrix.html).