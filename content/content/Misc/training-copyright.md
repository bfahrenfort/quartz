---
title: "Theories of Copyright: AI Training"
tags:
  - ai
  - legal
  - copyright
  - essay
  - misc
date: 2024-11-02
lastmod: 2024-11-02
draft: true
---
Generative AI training may be [[Resources/copyright|copyright]] infringement.

> [!info] *mea culpa*
> It's very difficult to keep discussions of training and generation separate because they're related concepts. They do not directly flow from one another though, so I've done my best to divide the subject.

I think that reasoning about the implications of how an AI stores data requires a complete understanding of the technical foundation, which [[Atomic/gen-ai#Training|Generative AI#Training]] tries to lay out. Every legal hypothesis about training except fair use is in this section.

First, I think a very convoluted analogy is helpful. Let's say I publish a book. Every page of this book is a different photograph. Some of the photos are public domain, but the vast majority are copyrighted, and I don't have authorization to publish those ones. Now, I don't just put the photos on the page directly; that would be copyright infringement! Instead, each page is a secret code that I derive from the photo (and all other photos already in the book) that I can decipher to show you the photo (if you ask me to, after you've bought the book). Is my book still copyright infringment?
- Alternatively, I let you download the instructions on how to access a photo from the secret codes in the book onto your computer. Now, if an artist uses these instructions and gets their own photo, and they sue me, did I injure them or did they injure themselves?
	- This analogy relates to the standing argument in *Doe v. GitHub*.
- Related but ludicrous: suppose I'm not selling the book. I bought prints of all these photographs for myself, and if you ask me to, I'll show you a photograph that I bought. But since I only bought one photograph, if I'm showing you the photograph I bought, I can't be showing it to someone else at the same time. This *is* considered copyright infringement?!?! At least, that's what *Hachette v. Internet Archive* tells us. 

In copyright, reproduction of expression is infringement. And I believe that inputting a work into a generative AI creates an infringing derivative of the work, because it reproduces both the facts and expression of that work in a way that you could do by hand. Eventually, the model is effectively a compilation of all works passed in. Finally—on a related topic—there is nothing copyrightable in how the model has arranged the works in that compilation, even if every work trained on is authorized. 

Recall that training on a work incorporates its facts and the way the author expressed those facts into the model. When the training process takes a model and extracts weights on the words within, it's first reproducing copyrightable expression, and then creating something directly from the expression. You can analogize the model at this point to a translation (a [specifically recognized](https://www.law.cornell.edu/uscode/text/17/101#:~:text=preexisting%20works%2C%20such%20as%20a%20translation) type of derivative) into a language the AI can understand. But where a normal translation would be copyrightable (if authorized) because the human translating a work has to make expressive choices and no two translations are exactly equal, an AI's model would not be. A given AI will always produce the same translation for a work it's been given, it's not a creative process. Even if every work trained on expressly authorized data, I don't think the resulting AI model would be copyrightable. And absent authorization, it's infringement.
- Nerdy sidebar: I desperately want Adobe to sue someone for appropriating their new model now so I can see if this theory holds up. The fight might turn on an anti-circumvention question, because if it's not a copyrightable work, there's no claim from circumventing protections on that work.

As the AI training scales and amasses even more works, it starts to look like a compilation, another type of derivative work. Normally, the expressive component of an authorized compilation is in the arrangement of the works. Here, the specific process of arrangement is predetermined, and encompasses only uncopyrightable material. I wasn't able to find precedent on whether a deterministically-assembled compilation of uncopyrightable derivatives passes the bar for protection, but that just doesn't sound good. Maybe there's some creativity in the process of creating the algorithms for layering the model (related: is code art?). 

The common thread running through this and many [[Essays/normative-ai|normative]] points that because the iteration is on such a gargantuan scale, it discounts the fact that you could (over a period of years) theoretically recreate the exact compilation by hand following the AI's steps, and that the arrangement is completely fungible in that way. This is one facet of how GenAI is well suited to helping a person avoid liability.
### Detour: point for the observant
The idea and expression being indistinguishable to an AI may make one immediately think of merger doctrine. That argument looks like: the idea inherent in the work trained on merges with its expression, so that segment of the training data must not be copyrightable. However, that argument would not be a correct reading of the doctrine. [*Ets-Hokin v. Skyy Spirits, Inc.*](https://casetext.com/case/ets-hokin-v-skyy-spirits-inc) suggests that the doctrine is more about disregarding the types of works that are low-expressivity by default, and that this "merger" is just a nice name to remember the actual test by. Confusing name, easy doctrine.
- Yet somehow this doctrine doesn't extend to RGB colors. I'll die on the hill that you shouldn't be able to copyright a hex code the same way you can't copyright an executable binary. I know, small specific part of US copyright doctrine that I'm sympathetic to arguments against, moving on.
### Real-world exposure
The Northern District of California has actually considered the above infringing-derivative argument in *Kadrey v. Meta*. They called it "nonsensical", and based on how it was presented in that case, I don't blame them. I'd have some serious difficulty compressing this entry into something a judge could read (even ignoring court rule word limits) or that I could orate concisely to a jury. I'm open to suggestions on a more digestible way to persuade people of this point.
## Further Reading
[[Misc/generation-copyright|Sibling entry on AI generation]]