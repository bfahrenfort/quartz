---
title: Passkeys - Almost Usable
tags:
  - foss
  - seedling
  - security
date: 2024-08-31
lastmod: 2025-04-02
draft: false
---
Six months ago, I set out to replace passwords with passkeys everywhere I was able to, and store them in a software password manager along with a hardware authenticator to ensure cross-platform access to my logins. Here are my thoughts on the process, and some interesting cases.
- { *Six months ago, I set out to write this article, and only finally did so now. -ed* }

## Passkeys/FIDO2/U2F as a Concept
These three are all terms for the same thing. 

Passwords are insecure because there are inherent tradeoffs associated with their use. Cybersecurity crash course: length is the largest predictor of security. Most people gravitate towards shorter passwords due to having to remember them, and will prefer leaving 2FA disabled to speed up their login. 
- Those interested in the many vulnerabilities of passwords beyond just length, as well as band-aid fixes which are either currently in practice or inadvisable, should read the "Authentication" section of the [NIST Digital Identity Guidelines](https://pages.nist.gov/800-63-FAQ/). 

FIDO 2 is a protocol that attempts to solve the many problems with passwords.
- You don't have to remember a passkey,
- It's fast,
- It can't be copied if you fall victim to phishing,
- It's long and cryptographically resistant, and
- It can provide the same guarantees as 2FA without the inconvenience.
	- ...In the right authentication flow—see [[#Interesting Examples]]!

In practice, you create an individual passkey at the touch of a button when you create an account, or add it to an existing account. Each passkey is unique, it's statistically improbable (read: fuhgeddaboutit) that you have the same passkey for two accounts. Using the passkey is tied to an authentication mechanism unique to you like a biometric or a separate device, so you have to prove that it's really you to access it (not just someone who got ahold of the device). There are ecosystems to sync passkeys so you can log in on multiple devices, and you or an attacker can never see what a passkey really is.

> [!warning] Post-Quantum and Passkeys: Spooky Speculation at a Distance
> At present, passkeys are not quantum resistant. Google [previously developed](https://spectrum.ieee.org/fido2-security-key) an implementation that combines post-quantum cryptography with the FIDO2 spec, and FIDO [published](https://fidoalliance.org/white-paper-addressing-fido-alliances-technologies-in-post-quantum-world/) a whitepaper that outlines their objectives for moving forward in that direction. The controversy with Google's approach has been [documented](https://soatok.blog/2022/01/27/the-controversy-surrounding-hybrid-cryptography/) by people who know way more about this subject than me; along with a long [list](https://soatok.blog/tag/post-quantum-cryptography/) of concerns which security researchers need to pay attention to when going post-quantum.


## Obligatory XKCD 927
![transcript from explain xkcd. Caption above the panels: How Standards Proliferate, See: A/C chargers, character encodings, instant messaging, etc. A text-only panel. Situation: There are 14 competing standards. Cueball and Ponytail stand facing each other. Cueball: 14?! Ridiculous! We need to develop one universal standard that covers everyone's use cases. Ponytail: Yeah! Another text-only panel. The word "Soon:" appears in its own box at the upper left of the panel. Soon: Situation: There are 15 competing standards.](https://imgs.xkcd.com/comics/standards.png)
## Reality
There is no competing standards problem with FIDO2 and another standard *per se*, but adoption is quite sparse, and methods vary. What I found the most irritating is that passkeys were often treated as a normal alternative login method instead of a password alternative; for some authentication flows either is sufficient to log in. So, in those instances, having a passkey set would 

I was able to use both software passkeys stored in a password manager and a hardware YubiKey in various sites. However, some logins would only let me use one or the other, and I couldn't find any logic as to why some apps only let me set passkeys in the password manager or others would only let me use my hardware authenticator.

Of course, moving my logins to the password manager means that passwords and passkeys are of equal convenience, but it also means that the password logins aren't strictly as secure. I did start setting passwords to be long, pseudorandom strings generated automatically by the password manager, which does increase their security beyond what I could generate because my human brain no longer has to remember them. This also means that there's no possibility of any accidental use of the same password on two accounts, so I'm hardened against credential stuffing as well.
## Interesting Examples
**Rare shoutout to Microsoft** for being the only service provider I found that has the option to "go passwordless" and literally delete the password, which on other platforms could be cracked at any later date.

GitHub allows login with passkey, and will accept it as a 2FA method for verifying a password login or to enter sudo mode. This is the best I can realistically hope for in a modern FIDO2 implementation.

![[Attachments/github-fido.png]]

I don't have an image, but eBay forced me to set a passkey with a pop-up on the mobile app, and promptly never asked for it as 2FA or provided an option to log in with it. I guess the hype cycle passed?

The target app asked me to set a passkey, but once I did, I couldn't find the option to use it to log in (I wasn't presented with it at the time of testing).

This has thankfully been fixed, but when I first tried to set a passkey as 2FA on my Mastodon, it would only accept a hardware passkey on creation, and only a software passkey on authentication.

PayPal seems to think that the only way to use passkeys is on-device; despite having one stored in a password manager, sometimes when I access it on another device it prompts me to create another because the original was created on my phone. I recognize I’m using a third party manager but even with iCloud it syncs across devices, so I don’t know why they chose this model. 

## Further Reading
Here's the most useful passkey compatibility database I've found. [link](https://www.passkeys.io/who-supports-passkeys)