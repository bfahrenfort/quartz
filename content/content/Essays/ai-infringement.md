---
title: "[ARCHIVED] Generative AI: Bad Faith Copyright Infringement"
tags:
  - essay
  - ai
  - legal
  - copyright
date: 2023-11-04
draft: true
lastmod: 2024-09-06
---
> [!info] I’m looking for input!
> Critique my points and make your own arguments. That’s what the comments section is for. 

> [!warning]
> CW: US law and politics; memes
> 
> **This site contains my own opinion in a personal capacity, and is not legal advice, nor is it representative of anyone else's opinion.** Not every citation is an endorsement, and none of the authors I cite have endorsed this work.

I've seen many news articles and opinion pieces recently that support training generative AI and LLMs (such as ChatGPT/GPT-4, LLaMa, and Midjourney) on the broader internet as well as more traditional copyrighted works. The general sentiment from the industry and some critics is that training should not consider the copyright holders for all of the above. For now, this will be less of a response to any one article and more of a collection of points of consideration that tie together common threads in public perception. I intend for this to become comprehensive over time.

My opinion here boils down to three main points. **Under existing US law**:
- Training a generative AI model on copyrightable subject matter without authorization is copyright infringement (and the proprietors of the model should be responsible);
- Generating something based on copyrightable subject matter is copyright infringement (and the proprietors and users of the model should each be able to be held responsible); and
- Fair use is not a defense to either of the above.

I discuss policy and speculative points at the end of this entry. Certain policy points are instead made in my [[Essays/plagiarism|🅿️ essay on plagiarism]], and links to that entry will be labeled with 🅿️.
## Prologue: why these arguments are popping up
<img src="/Attachments/but-he-can.jpg" alt="'I know, but he can' meme, with the RIAA defeating AI art for independent illustrators" style="height: 30em;margin: 0% 25%" loading="lazy">

In short, there's a growing sentiment against copyright in general. Copyright can enable centralization of rights when paired with a capitalist economy, which is what we've historically experienced with the advent of copyright repositories like record labels and publishing companies. It's even statutorily enshrined as the "work-for-hire" doctrine. AI has the potential to be an end-run around these massive corporations' rights, which many see as a benefit.

However, this argument forgets that intangible rights are not *yet* so centralized that independent rights-holders have ceased to exist. While AI will indeed affect central rights-holders, it will also harm individual creators and diminish the bargaining power of those that choose to work with central institutions. I see AI as a neutral factor to the disestablishment of copyright. Due to my roots in the indie music and open-source communities, I'd much rather keep their/our/**your** present rights intact.

Unfortunately, because US copyright law is so easily abused, I think the most likely outcome is that publishers/centralized rights holders get their due, and individual creators get the shaft. This makes me sympathetic to arguments against specific parts of the US's copyright regime as enforced by the courts, such as the DMCA or the statutory language of fair use. We as a voting population have the power to compel our representatives to enact reforms that take the threat of ultimate centralization into account. We can even work to break down what's already here. But I don't think that AI should be the impetus for arguments against the system as a whole.

Finally, remember that perfect is the enemy of good enough. While we're having these discussions about how to regulate GenAI, unregulated use is causing real economic and personal harm to creators and underrepresented minorities.
## The Tech/Legal Argument
Fair warning, this section is going to be the most law-heavy, and probably pretty tech-heavy too. Feel free to skip [[#The First Amendment and the "Right to Read"|-> straight to the policy debates.]] 

The field is notoriously paywalled, but I'll try to link to publicly available versions of my sources whenever possible. Please don't criticize my sources in this section unless I actually can't rely on it (*i.e.*, a case has been overruled or a statute has been repealed/amended). This is my interpretation of what's here, and again, not legal advice or a professional opinion. **Seek legal counsel before acting/refraining from action re: AI**. Whether a case is binding on you personally doesn't weigh in on whether its holding is the nationally accepted view.

The core tenet of copyright is that it protects original expression, which the Constitution authorizes regulation of as "works of authorship." This means **you can't copyright facts**. It also results in two logical ends of the spectrum of arguments made by plaintiffs (seeking protection) and defendants (arguing that enforcement is unnecessary in their case). For example, you can't be sued for using the formula you read in a math textbook, but if you scan that math textbook into a PDF, you might be found liable for infringement because your reproduction contains the way the author wrote and arranged the words and formulas on the page. 

By far the most common legal argument against training as infringement is that the AI only extracts facts, not the author's expression, from a work. But that position assumes that the AI is capable of first differentiating the two, and then separating them in a way analogous to the human mind's.
### Training

<img src="/Attachments/common_crap.svg" alt="Common Crawl logo edited to say 'common crap' instead" style="padding:0% 5%">

Everything AI starts with a dataset. And most AI models will start with the easiest, most freely available resource: the internet. Hundreds of different scrapers exist with the goal of collecting as much of the internet as possible to train modern AI (or previously, machine learners, neural networks, or even just classifiers/cluster models). I think that just acquiring data without authorization to train an AI on it is copyright infringement standing by itself.

> [!info]
> Acquiring data for training is an unethical mess even independent of copyright concerns. **In human terms**, scrapers like Common Crawl will take what they want, without asking (unless you know the magic word to make it go away, or just [[Projects/Obsidian/digital-garden#Block the bot traffic!|block it from the get-go]] like I do), and without providing immediately useful services in return like a search engine. For more information on the ethics of AI datasets, read my take on [[Essays/plagiarism#AI shouldn't disregard the need for attribution|🅿️ the need for AI attribution]], and have a look at the work of [Dr. Damien Williams](https://scholar.google.com/citations?user=riv547sAAAAJ&hl=en) ([Mastodon](https://ourislandgeorgia.net/@Wolven)).

The first reason that it's copyright infringement? [*MAI Systems v. Peak Computer*](https://casetext.com/case/mai-systems-corp-v-peak-computer-inc). It holds that RAM copying (ie, moving a file from somewhere to a computer's memory) is an unlicensed copy. As of today, it's still good law, for some reason. Every single file you open in Word or a PDF reader; or any webpage in your browser, is moved to your memory before it gets displayed on the screen. Bring it up at trivia night: just using your computer is copyright infringement! It's silly and needs to be overruled going forward, but it's what we have right now. And it means that a bot drinking from the firehose is committing infringement on a massive scale. 
- I'm very aware that this is a silly argument, but it is an argument and it is precedent.
#### The Actual Tech
But then a company actually has to train an AI on that data. What copyright issues does that entail? First, let's talk about The Chinese Room.

[The Chinese Room](https://plato.stanford.edu/entries/chinese-room/) is a philosophical exercise authored by John Searle where the (in context, American) subject is locked in a room and receives symbols in Chinese slipped under the door. A computer program tells the subject what Chinese outputs to send back out under the door based on patterns and combinations of the input. The subject does not understand Chinese. Yet to an observer of Searle's room, it **appears** as if whoever is inside it has a firm understanding of the language.

Searle's exercise was at the time an extension of the Turing test. He designed it to refute the theory of "Strong AI." At the time that theory was well-named, but today the AI it was talking about is not even considered AI by most. The hypothetical Strong AI was a computer program capable of understanding its inputs and outputs, and importantly *why* it took each action to solve a problem, with the ability to apply that understanding to new problems (much like our modern conception of Artificial General Intelligence). A Weak AI, on the other hand, is just the Chinese Room: taking inputs and producing outputs among defined rules. Searle reasoned that the "understanding" of a Strong AI was inherently biological, thus one could not presently exist.
- Note that some computer science sources like [IBM](https://www.ibm.com/topics/strong-ai) have taken to using Strong AI to denote only AGI, which was a sufficient, not necessary quality of a philosophical "intelligent" intelligence like the kind Searle contemplated.

Generative AI models from different sources are architected in a variety of different ways, but they all boil down to one abstract process: tuning an absurdly massive number of parameters to values that produce the most desirable output. (note: [CGP Grey's video on AI](https://www.youtube.com/watch?v=R9OHn5ZF4Uo) and its follow-up are mainly directed towards neural networks, but do apply to LLMs, and do a great job illustrating this). This process requires a gargantuan stream of data to use to calibrate those parameters and then test the model. How it parses that incoming data suggests that, even if we ignore the method of acquisition, the AI model still infringes the input.
- Sidebar: you're nearly guaranteed not to find the optimal combination of several billion parameters, each tunable to several decimals. When I say "desirable," I really mean "good enough."

At the risk of bleeding the [[#Generation]] section into this one, generative AI training creates a sophisticated next-word predictor based on the words it has read and written previously.

This training is deterministic. It's a pure, one-way, data-to-model transformation (one part of the process for which "transformer models" are named). The words are ingested and converted into one of various types of formal representations to comprise the model. It's important to remember that given a specific work and a step of the training process, it's always possible to calculate by hand the resulting state of the model after training on that work. The "black box" that's often discussed in connection with AI refers to the final state of the model, when it's no longer possible to tell what effects the data ingested at earlier steps had on the model.

In the model, if some words are more frequently associated together, then that association is more "correct" to generate in a given scenario than other options. A parameter sometimes called "temperature" determines how far the model will stray from the correct next word. And the only data to determine whether an association *is* correct would be that training input. This means that an AI trains only on the words as they are on the page. Training can't have some external indicator of semantics that a secondary natural-language processor on the generation side could. If it could, it would need some encoding—some expression—that it turns the facts into. Instead, it just incorporates the word as it read it in, and the data about the body of text it was contained in. Training thus can't be analogized to human learning processes, because **when an AI trains by "reading" something, it isn't reading for the *forest*; it's reading for the *trees***. Idea and expression are meaningless distinctions to AI.

As such, modern generative AI, like the statistical data models and machine learners before it, is a Weak AI. And weak AIs use weak AI data. Here's how that translates to copyright.
- Sidebar: this point doesn't consider an AI's ability to summarize a work since the section focuses on how the *training* inputs are used rather than how the output is generated from real input. This is why I didn't want to get into generation in this section. It's confusing, but training and generation are merely linked concepts rather than direct results of each other when talking about machine learning. Especially when you introduce concepts like temperature in order to simulate creativity.
- ...I'll talk about that in the next section.
#### "The Law Part"
All of the previous analysis has been to establish how an AI receives data so that I can reason about how it *stores* that data. Every legal hypothesis about training except fair use is in this section, which is located in [[#Fair Use|Policy: Fair Use]].

First, I think a very convoluted analogy is helpful here. Let's say I publish a book. Every page of this book is a different photograph. Some of the photos are public domain, but the vast majority are copyrighted, and I don't have authorization to publish those ones. Now, I don't just put the photos on the page directly; that would be copyright infringement! Instead, each page is a secret code that I derive from the photo (and all other photos already in the book) that I can decipher to show you the photo (if you ask me to, after you've bought the book). Is my book still copyright infringment?
- Alternatively, I let you download the instructions on how to access a photo from the secret codes in the book onto your computer. Now, if an artist uses these instructions and gets their own photo, and they sue me, did I injure them or did they injure themselves?
	- This analogy relates to the standing argument in *Doe v. GitHub*.
- Related but ludicrous: suppose I'm not selling the book. I bought prints of all these photographs for myself, and if you ask me to, I'll show you a photograph that I bought. But since I only bought one photograph, if I'm showing you the photograph I bought, I can't be showing it to someone else at the same time. This *is* considered copyright infringement?!?! At least, that's what *Hachette v. Internet Archive* tells us. 

In copyright, reproduction of expression is infringement. And I believe that inputting a work into a generative AI creates an infringing derivative of the work, because it reproduces both the facts and expression of that work in a way that you could do by hand. Eventually, the model is effectively a compilation of all works passed in. Finally—on a related topic—there is nothing copyrightable in how the model has arranged the works in that compilation, even if every work trained on is authorized. 

Recall that training on a work incorporates its facts and the way the author expressed those facts into the model. When the training process takes a model and extracts weights on the words within, it's first reproducing copyrightable expression, and then creating something directly from the expression. You can analogize the model at this point to a translation (a [specifically recognized](https://www.law.cornell.edu/uscode/text/17/101#:~:text=preexisting%20works%2C%20such%20as%20a%20translation) type of derivative) into a language the AI can understand. But where a normal translation would be copyrightable (if authorized) because the human translating a work has to make expressive choices and no two translations are exactly equal, an AI's model would not be. A given AI will always produce the same translation for a work it's been given, it's not a creative process. Even if every work trained on expressly authorized data, I don't think the resulting AI model would be copyrightable. And absent authorization, it's infringement.
- I desperately want Adobe to sue someone for appropriating their new model now so I can see if this theory holds up. The fight might turn on an anti-circumvention question, because if it's not a copyrightable work, there's no claim from circumventing protections on that work.

As the AI training scales and amasses even more works, it starts to look like a compilation, another type of derivative work. Normally, the expressive component of an authorized compilation is in the arrangement of the works. Here, the specific process of arrangement is predetermined, and encompasses only uncopyrightable material. I wasn't able to find precedent on whether a deterministically-assembled compilation of uncopyrightable derivatives passes the bar for protection, but that just doesn't sound good. Maybe there's some creativity in the process of creating the algorithms for layering the model (related: is code art?). 
- There's a thread running through this and a few other points that because the iteration is on such a gargantuan scale, it discounts the fact that you could (over a period of years) theoretically recreate the exact compilation by hand following the AI's steps, and that the arrangement is completely fungible in that way. This is one facet of how GenAI is well suited to helping a person avoid liability. More in the [[#Policy]] section.

The Northern District of California has actually considered this infringing-derivative argument in *Kadrey v. Meta*. They called it "nonsensical", and based on how it was presented in that case, I don't blame them. Looking at how much technical setup I needed to properly make this argument, I'd have some serious difficulty compressing this all into something a judge could read (even ignoring court rule word limits) or that I could orate concisely to a jury. I'm open to suggestions on a more digestible way to persuade people of this point, since the *Kadrey* plaintiffs also failed.
#### Detour: point for the observant
The idea and expression being indistinguishable to an AI may make one immediately think of merger doctrine. That argument looks like: the idea inherent in the work trained on merges with its expression, so that segment of the training data must not be copyrightable. However, that argument would not be a correct reading of the doctrine. [*Ets-Hokin v. Skyy Spirits, Inc.*](https://casetext.com/case/ets-hokin-v-skyy-spirits-inc) suggests that the doctrine is more about disregarding the types of works that are low-expressivity by default, and that this "merger" is just a nice name to remember the actual test by. Confusing name, easy doctrine.
- Yet somehow this doctrine doesn't extend to RGB colors. I'll die on the hill that you shouldn't be able to copyright a hex code the same way you can't copyright an executable binary. I know, small specific part of US copyright doctrine that I'm sympathetic to arguments against, moving on.
### Generation
The model itself is only one side of the legal AI coin. What of the output? First, it's certainly not copyrightable. The US is extremely strict when it comes to the human authorship requirement for protection. If an AI is seen as the creator, the requirement is obviously not satisfied. And the human "pushing the button" probably isn't enough either. But does the output infringe the training data? It depends.
#### Human Authorship
As an initial matter, AI-generated works do not satisfy the human authorship requirement. This makes them uncopyrightable, but more importantly, it also gives legal weight to the distinction between the human and AI learning process. Like I mentioned in the training section, it's very difficult to keep discussions of training and generation separate because they're related concepts, and this argument is a perfect example of that challenge.
#### Summaries
This is probably the most direct non-technical refutation of the "AI understands what it trains on" argument possible. I also think it's the most important aspect of current generative models for me to highlight. **The question**: If an AI can't understand what it reads, how does it choose what parts of a work should be included in a summary of that work? A book, an article, an email?

Once again, the answer is mere probability. In training, the model is told what word to come after a word is more "correct" by how many times that sequence of words occurs in its training data. And in generation, if more of the work mentions a particular subject than the actual conclusion of the work, the subject given most attention will be what the model includes in a summary.

Empirical evidence of this fact can be found in the excellent post, [When ChatGPT Summarizes, it Actually does Nothing of the Kind](https://ea.rna.nl/2024/05/27/when-chatgpt-summarises-it-actually-does-nothing-of-the-kind/). It's funny how this single approach is responsible for nearly all of the problems with generative AI, from the decidedly unartistic way it "creates" to its [[Essays/plagiarism##1 Revealing what's behind the curtain|🅿️ majoritarian bent]]. I don't want this sort of technology to take any place in daily life.
#### Dr. Edgecase, or how I learned to stop worrying (about AI) and love the gig worker
So how do corporations try to solve the problem? Human-performed [microtasks](https://hal.science/hal-02554196/document). 

AI can get things wrong, that's not new. Take a look at this:

![[limmygpt.png|Question for chatgpt: Which is heavier, 2kg of feathers or 1kg of lead? Answer: Even though it might sound counterintuitive, 1 kilogram of lead is heavier than 2 kilograms of feathers...]]
Slight variance in semantics, same answer because it's the most popular string of words to respond to that pattern of a prompt. Again, nothing new. Yet GPT-4 will get it right. This probably isn't due to an advancement in the model. My theory is that OpenAI looks at the failures published on the internet (sites like ShareGPT, Twitter, etc) and has remote validation gig workers ([already a staple in AI](https://www.businessinsider.com/amazons-just-walk-out-actually-1-000-people-in-india-2024-4)) "correct" the model's responses to that sort of query. In effect, corporations could be exploiting ([yes, exploiting](https://www.noemamag.com/the-exploited-labor-behind-artificial-intelligence/)) developing countries to create a massive **network of edge cases** to fix the actual model's plausible-sounding-yet-wrong responses. 
- This paragraph does border on conspiracy theory. However, which is more likely:
	- Company in the competitive business of *wow*ing financial backers leverages existing business contacts to massively boost user-facing performance of their product as a whole at little added cost; or
	- Said company finds a needle of improvement over their last haystack in an even *bigger* haystack that enables the most expensive facet of their product to do more of the work.

> [!question]
> I won't analyze this today, but who owns the human authored content of these edge cases? They're *probably* expressive and copyrightable.

#### Expression and Infringement; "The law part" again
It can be said that anything a human produces is just a recombination of everything that person's ever read. Similarly, that process is a simplified understanding of how an AI trains.

However, everything a *person* has ever read is stored as concepts, floating around in their brain. My brain doesn't have a specific person's explanation of a transformer model architecture prepped, or even particular phrases from that explanation. It has a "visual" and emotional linkage of **ideas**, that other regions of my brain leverage vocabulary to put to paper when I explain it. An AI stores words that occurred in its corpus that can be considered responsive to the prompt. It may also have words that succeeded the prompt as the next portion in a containing work of both the prompt and the output. N-grams, not neurons.

The key difference: talking about a human brain making a work by recombining its input is **metaphor**; talking about an AI recombining a work is **technologically accurate**. A chatbot goes to look at the secret code and shows you the photograph it corresponds to when you ask it to. 

Naturally, there are occurrences where a human and an AI would reach approximately the same factual response if you asked them the same question. So what makes some of AI output infringement? The same thing that makes some human responses copyright infringement: reproduction of a copyrighted work. But the difference is that some human responses would be copyrightable in themselves because they don't reproduce enough of a specific work or multiple works to be considered either an ordinary derivative or a compilation derivative. ==ughthis is hardddd==
#### Detour: actual harm caused by specific uses of AI models
My bet for a strong factor when courts start applying fair use tests to AI output: **harm**. { *and I actually wrote this before the [[Essays/no-ai-fraud-act|No AI FRAUD Act]]'s negligible-harm provision was published, -ed.* } Here's a quick list of uses that probably do cause harm, some of them maybe even harmful *per se* (definitely harmful without even looking at specific facts).
- Election fraud and misleading voters, including even **more** corporate influence on US elections ([not hypothetical](https://www.washingtonpost.com/elections/2024/01/18/ai-tech-biden/) [in the slightest](https://web.archive.org/web/20240131220028/https://openai.com/careers/elections-program-manager), [and knowingly unethical](https://www.npr.org/2024/01/19/1225573883/politicians-lobbyists-are-banned-from-using-chatgpt-for-official-campaign-busine))
	- [Claiming](https://www.washingtonpost.com/politics/2024/03/13/trump-video-ai-truth-social/) misleading voters? 
- Other fraud, like telemarketing/robocalls, phishing, etc
- Competition with actual artists and authors (I am VERY excited to see where trademark law evolves around trademarking one's art or literary style. Currently, the arguments are weak and listed in the mini-argument section.)
- Obsoletes human online workforces in tech support, translation, etc
- [[Essays/plagiarism##1 Revealing what's behind the curtain|🅿️ Reinforces systemic bias]]
- [Violates the GDPR on a technological level](https://www.theregister.com/2024/04/29/openai_hit_by_gdpr_complaint/)
	- I also think being unable to delete personal data that it *has* acquired and not just hallucinated is a big problem generally
#### Detour 2: An Alternative Argument
There's a more concise and less squishy argument that generative AI output infringes on its training dataset. 

Recall that AI output taken right from the model (straight from the horse's mouth) is [not copyrightable according to USCO](https://www.federalregister.gov/documents/2023/03/16/2023-05321/copyright-registration-guidance-works-containing-material-generated-by-artificial-intelligence). If the model's input is copyrighted, and the output can't be copyrighted, then there's nothing in the AI "black box" that adds to the final product, so it's literally *just* the training data reproduced and recombined. Et voila, infringement.

This isn't to say that anything uncopyrightable will infringe something else, but it does mean that the defendant's likelihood of prevailing on a fair use defense could be minimal. Additionally, the simpler argument makes damages infinitely harder to prove in terms of apportionment. 

Note that there are many conclusions in the USCO guidance, so you should definitely read the whole thing if you're looking for a complete understanding of the (very scarce) actual legal coverage of AI issues so far.
### Where do we go from here?
Well, getting to evaluation of the above by courts would be a start. Right now, courts are ducking AI issues left and right on standing and pleading grounds. Once there's more solid coverage of the legal arguments on the merits, whether the law *should* be enforced will become prudent.
# Policy
These arguments will be more or less persuasive to different people. I think there's a lot more room for discussion here because they become relevant to the future direction of the law as well as current enforcement. The most important debate is up first, but the others are not particularly ordered.

> [!info] Section Under Construction
> More topics under this section forthcoming! I work and edit in an alternate document and copy over sections as I finish them.

## Fair Use
In modern copyright practice, this defense seems to be the pivotal question. It's probably going to be the exact same in AI.

Whenever a legal doctrine has strong roots in collective consciousness and policy, there's an epistemological question about how to approach the issue. The debate asks: in the abstract, should the courts protect what *descriptively is* considered within the bounds of protection, or what *ought to be* recognized by society as deserving protection? 
- Nerd sidebar: This debate is common in criminal law. For example, examine the reasonable expectation of privacy. *Are* members of the public actually concerned with police access to the data on their phone or do they think they have nothing to hide? *Should* they be? Recent cases on searches and third party access trend towards analysis under the latter, more paternalistic position.

In fair use, the first ("empirical") perspective teaches that fair use should only extend to concepts analogous to prior enforcement which has been accepted in the collective consciousness. In contrast, the second ("normative") perspective would disregard comparison with enforcement in favor of comparison with societal values. 

Because it's such an alien technology to the law, I'd argue that generative AI's fair use should be analyzed in view of the normative approach. But even under that approach, I don't think AI training or generation should be considered fair use.

US fair use doctrine has four factors, of which three can speak to whether it ought to be enforced.
### Purpose and character of the use
Training is conducted at a massive scale. Earlier, I mentioned the firehose. 

But for generated output, this factor gets messier. Criticism or comment? Of/on who/what? I can think of one use that would be fair use, but only to defend the person using the model to generate text: criticism of the model itself, or demonstration that it can reproduce copyrighted works. Not to mention if a publisher actually sued a person for *using* a generative AI, that would Streisand Effect the hell out of whatever was generated.
### Nature of training data

### Market value; competition
And most importantly (especially in recent years), let's talk about the competitive position of an AI model. This is directly linked to the notion that AI harms independent artists, and is the strongest reason for enforcement of copyright against AI in my opinion. 

Interestingly, I think the USCO Guidance [[#Detour 2 An Alternative Argument|talked about in the Generation section]] is instructive. It analogizes prompting a model to commissioning art, which applies well to a discussion of competition. AI lets me find an artist and say to them, "I want a Warhol, but I don't want to pay Warhol prices"; or "I want to read Harry Potter, but I don't want to give J.K. Rowling my money \[for good reason\]." The purpose of AI's "work product" is solely to compete with human output. 

A problem I have not researched in detail is the level of competency in alternative needed to prove that an infringing use does compete with the underlying work. Today, many people see AI as the intermediate step on the scale between the average proficiency of an individual at any given task (painting, photography, poetry, *shudder* legal matters) and that of an expert in that field. Does AI need to be "on the level" of that expert in order to be considered a competitor? It certainly makes a stronger argument for infringment if they are, like with creative mediums. But does this hold up with legal advice, where it will produce output but (in my opinion) sane professionals should tell you that AI doesn't know the first thing about the field? 

Note that there are very valid criticisms with being resistant to a technology solely because of the "AI is gonna take our jobs" sentiment. I think there are real parallels between that worry and a merits analysis of the competition factor. So if you find those criticisms persuasive, that would probably mean that you disagree with my evaluation of this factor.
## Who's holding the bag?
WIP https://www.wsj.com/tech/ai/the-ai-industry-is-steaming-toward-a-legal-iceberg-5d9a6ac1?st=5rjze6ic54rocro&reflink=desktopwebshare_permalink
### Detour: Section 230 (*again*)
Well, here it is once more. I think that you can identify a strangely inverse relationship between fair use and § 230 immunity. If the content is directly what was put in (and is not fair use), then it's user content, and Section 230 immunity applies. If the content by an AI is *not* just the user's content and is in fact transformative fair use, then it's the website's content, not user content, and the website can be sued for the effects of their AI. Someone makes an investment decision based on the recommendation of ChatGPT? Maybe it's financial advice. I won't bother with engaging the effects further here. I have written about § 230 and AI [[no-ai-fraud-act#00230: Incentive to Kill|elsewhere]], albeit in reference to AI-generated user content *hosted* by the platform.
## The First Amendment and the "Right to Read"
This argument favors allowing GAI to train on the entire corpus of the internet, copyright- and attribution-free, and bootstraps GAI output into being lawful as well. The position most commonly taken is that the First Amendment protects a citizen's right to information, and that there should be an analogous right for generative AI.

The right to read, at least in spirit, is still being enforced today. Even the 5th Circuit (!!!) believes that this particular flavor of First Amendment claim will be likely to succeed on appeal after prevailing at the trial level. [*Book People v. Wong*](https://law.justia.com/cases/federal/appellate-courts/ca5/23-50668/23-50668-2024-01-17.html), No. 23-50668 (5th Cir. 2024) (not an AI case). It also incorporates principles from intellectual property law. Notably, this argument states that one can read the content of a work without diminishing the value of the author's expression (*i.e.*, ideas aren't copyrightable). As such, the output of an AI is not taking anything from an author that a human wouldn't take when writing something based on their knowledge. 

I take issue with the argument on two points that stem from the same technological foundation.

First, as a policy point, the argument incorrectly humanizes current generative AI. There are no characteristics of current GAI that would warrant the analogy between a human reading a webpage and an AI training on that webpage. Even emerging tools like the improperly named [Deep Document Understanding](https://github.com/infiniflow/ragflow/blob/main/deepdoc/README.md)—which claim to ingest documents "as \[a\] human being"—are just classifiers on stochastic data at the technical level, and are not actual "understanding."

Second, and more technically, [[#Training|the training section]] above is my case for why an AI does not learn in the same way that a human does in the eyes of copyright law. ==more==

But for both of these points,  I can see where the confusion comes from. The previous leap in machine learning was called "neural networks", which definitely evokes a feeling that it has something to do with the human brain. Even more so when the techniques from neural network learners are used extensively in transformer models (that's those absurd numbers of parameters mentioned earlier).
## Mini-arguments
A list of smaller points that would cast doubt on the general zeitgeist around the AI boom that I found compelling. These may be someone else's undeveloped opinion, or it might be a point that I don't think I could contribute to in a valuable way. Many are spread across the fediverse; others are blog posts or articles. Others still would be better placed a Further Reading section, ~~but I don't like to tack on more than one post-script-style heading.~~ { *ed.: [[#Further Reading|so that was a fucking lie]]* }
- [Cartoonist Dorothy’s emotional story re: midjourney and exploitation against author intent](https://socel.net/@catandgirl/111766715711043428)
- [Misinformation worries](https://mas.to/@gminks/111768883732550499)
- [Large Language Monkeys](https://arxiv.org/abs/2407.21787): another very new innovation in generative AI is called "repeated sampling." It literally just has the AI generate output multiple times and decide among those which is the most correct. This is more stochastic nonsense, and again not how a human learns, despite OpenAI marketing GPT-o1 (which uses the technique) as being capable of reason.
- Stronger over time
	- One of the lauded features of bleeding-edge AI is its increasingly perfect recall from a dataset. So you're saying that as AI gets more advanced, it'll be easier for it to exactly reproduce what it was trained on? Sounds like an even better case for copyright infringement.
- Inevitable harm
	- Temperature and the very fact that word generation is used mean that there's no way to completely eliminate hallucination, so truth in AI is unobtainable. [Xu, et al.](https://arxiv.org/abs/2401.11817)
- Unfair competition
	- This doctrine is a catch-all for claims that don't fit neatly into any of the IP categories, but where someone is still being wronged by a competitor. I see two potential arguments here. 
		- First, you could make a case for the way data is scraped from the internet being so comprehensive that there's no way to compete with it by using more fair/ethical methods. This could allow a remedy that mandates AI be trained using some judicially devised (or hey, how about we get Congress involved if they don't like the judicial mechanism), ethical procedure. The arguments are weaker, but they could be persuasive to the right judge.
		- Second, AI work product is on balance massively cheaper than hiring humans, but has little other benefit, and causes many adverse effects. A pure cost advantage providing windfall for one company but not others could also be unfair. Again, it's very weak right now in my opinion.\
	- A further barrier to unfair competition is the doctrine of **copyright preemption**, which procedurally prevents many extensions of state or federal unfair competition law.
## Further Reading
- If you're *really* interested in the math behind an LLM (like I am, haha), [here's a great introduction to the plumbing of a transformer model](https://santhoshkolloju.github.io/transformers/). This is way deeper into the tech than any legal analysis needs to go, but I'm putting it in here for the tech nerds and the people who want proof that an AI doesn't think or understand like a human.
- [Pivot to AI](https://pivot-to-ai.com/) is a hilariously snarky newsletter (and RSS feed!) that lampoons AI and particularly AI hype for what it is.
- Copyleft advocate Cory Doctorow has written a piece on [why copyright is the wrong vehicle to respond to AI](https://pluralistic.net/2024/05/13/spooky-action-at-a-close-up/#invisible-hand). Reply-guying his technical facts and legal conclusions is left as an exercise for the reader; I articulated [[#Training#The Actual Tech|that]] [[#Generation|background]] in this write-up as comprehensively as I could so that readers can reference it to evaluate the conclusions of other works. What's more interesting is his take on the non-fair use parts of the [[#Policy|normative]] debate. This entry holds my conclusions on why copyright *can* be enforced against AI; reasonable minds can and should differ on whether it *ought to* be.
- [TechDirt has a great article](https://www.techdirt.com/2023/11/29/lets-not-flip-sides-on-ip-maximalism-because-of-ai/) that highlights the history of and special concerns around fair use. I do think that it's possible to regulate AI via copyright without implicating these issues, however. And note that I don't believe that AI training is fair use, for the many reasons above.