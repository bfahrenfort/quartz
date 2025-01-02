---
title: "Theories of Copyright: AI Output"
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
A [[Atomic/gen-ai|generative AI]]'s output may infringe its training data.

First, generated output is certainly not copyrightable. The US is extremely strict when it comes to the human authorship requirement for protection. If an AI is seen as the creator, the requirement is obviously not satisfied. And the human "pushing the button" probably isn't enough either. But does the output infringe the training data? It depends.
## Human Authorship
According to the US Copyright Office, AI-generated works do not satisfy the human authorship requirement. This makes them uncopyrightable, but more importantly, it also gives legal weight to the distinction between the human and AI learning process. 
## Summaries
This is probably the most direct non-technical refutation of the "AI understands what it trains on" argument possible. I also think it's the most important aspect of current generative models for me to highlight. **The question**: If an AI can't understand what it reads, how does it choose what parts of a work should be included in a summary of that work? A book, an article, an email?

Once again, the answer is mere probability. In training, the model is told what word to come after a word is more "correct" by how many times that sequence of words occurs in its training data. And in generation, if more of the work mentions a particular subject than the actual conclusion of the work, the subject given most attention will be what the model includes in a summary.

Empirical evidence of this fact can be found in the excellent post, [When ChatGPT Summarizes, it Actually does Nothing of the Kind](https://ea.rna.nl/2024/05/27/when-chatgpt-summarises-it-actually-does-nothing-of-the-kind/). It's funny how this single approach is responsible for nearly all of the problems with generative AI, from the decidedly unartistic way it "creates" to its [[Essays/plagiarism##1 Revealing what's behind the curtain|🅿️ majoritarian bent]].
## Dr. Edgecase, or how I learned to stop worrying (about AI) and love the gig worker
So how do corporations try to solve the problem? Human-performed [microtasks](https://hal.science/hal-02554196/document). 

AI can get things wrong, that's not new. Take a look at this:

![[limmygpt.png|Question for chatgpt: Which is heavier, 2kg of feathers or 1kg of lead? Answer: Even though it might sound counterintuitive, 1 kilogram of lead is heavier than 2 kilograms of feathers...]]
Slight variance in semantics, same answer because it's the most popular string of words to respond to that pattern of a prompt. Again, nothing new. Yet GPT-4 will get it right. This probably isn't due to an advancement in the model. My theory is that OpenAI looks at the failures published on the internet (sites like ShareGPT, Twitter, etc) and has remote validation gig workers ([already a staple in AI](https://www.businessinsider.com/amazons-just-walk-out-actually-1-000-people-in-india-2024-4)) "correct" the model's responses to that sort of query. In effect, corporations could be exploiting ([yes, exploiting](https://www.noemamag.com/the-exploited-labor-behind-artificial-intelligence/)) developing countries to create a massive **network of edge cases** to fix the actual model's plausible-sounding-yet-wrong responses. 
- This paragraph does border on conspiracy theory. However, which is more likely:
	- Company in the competitive business of *wow*ing financial backers leverages existing business contacts to massively boost user-facing performance of their product as a whole at little added cost; or
	- Said company finds a needle of improvement over their last haystack in an even *bigger* haystack that enables the most expensive facet of their product to do more of the work.

> [!question]
> I won't analyze this today, but who owns the human authored content of these edge cases? They're *probably* expressive and copyrightable.

## Expression and Infringement
It can be said that anything a human produces is just a recombination of everything that person's ever read. Similarly, that process is a simplified understanding of how an AI trains.

However, everything a *person* has ever read is stored as concepts, floating around in their brain. My brain doesn't have a specific person's explanation of a transformer model architecture prepped, or even particular phrases from that explanation. It has a "visual" (sorry folks with aphantasia) and emotional linkage of **ideas**, that other regions of my brain leverage vocabulary to put to paper when I explain it. An AI stores words that occurred in its corpus that can be considered responsive to the prompt. It may also have words that succeeded the prompt as the next portion in a containing work of both the prompt and the output. N-grams, not neurons.

The key difference: talking about a human brain making a work by recombining its input is **metaphor**; talking about an AI recombining a work is **technologically accurate**. A chatbot goes to look at the secret code and shows you the photograph it corresponds to when you ask it to. 

Naturally, there are occurrences where a human and an AI would reach approximately the same factual response if you asked them the same question. So what makes some of AI output infringement? The same thing that makes some human responses copyright infringement: reproduction of a copyrighted work. But the difference is that some human responses would be copyrightable in themselves because they don't copy "enough" of a specific work to be considered an infringing reproduction of the expression.
- "enough" is messy by design. Expressive works take so many forms that it's a fool's errand to try and cover all edge cases, that's what we have judges for. 
- Some of the pertinent "enough" reproductions are: word-for-word copy and paste or reupload; infringing derivatives, and reproduction of style+tone.
- One of the ways to avoid an "enough" ruling is, of course, [[Essays/normative-ai#Fair Use|Fair use]]. I'd argue that fair use allows you to reproduce quantitatively larger portions of a work without infringement, but it does literally encode a quantity factor because you can consider the amount of the work reproduced.


## Detour: An Alternative Argument
There's a more concise and less squishy argument that generative AI output infringes on its training dataset. 

Recall that AI output taken right from the model (straight from the horse's mouth) is [not copyrightable according to USCO](https://www.federalregister.gov/documents/2023/03/16/2023-05321/copyright-registration-guidance-works-containing-material-generated-by-artificial-intelligence). If the model's input is copyrighted, and the output can't be copyrighted, then there's nothing in the AI "black box" that adds to the final product, so it's literally *just* the training data reproduced and recombined. Et voila, infringement.

This argument is not without its drawbacks. First, it does not say that anything uncopyrightable will infringe something else. It does, however, mean that the defendant's likelihood of prevailing on a fair use defense could be minimal.

Additionally, the simpler argument makes damages infinitely harder to prove. Okay, you're infringing; *whose work*? How much? It would effectively shift the complexity of analysis onto the backend. Where typically parties will employ a damages expert (a statistician, an accountant, or otherwise), they'll also have to find a data scientist to testify along the lines of "x% of the dataset being from y source equals z% in the output" so the damages expert can use that information. So even though it's a simpler argument, it requires breaking a lot more new ground.

Note that there are many conclusions in the USCO guidance (and my favorite analogy, that genAI is like a commission artist), so you should definitely read the whole thing if you're looking for a complete understanding of the (very scarce) actual legal coverage of AI issues so far.
## Further Reading
- Sibling entry on [[Misc/training-copyright|training and copyright]]
- Who should be responsible for the harm caused by a generated work? [[Essays/normative-ai#Who's holding the bag?]]