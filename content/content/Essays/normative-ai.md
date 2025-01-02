---
title: Why Copyright Should Apply to Generative AI
tags:
  - essay
  - seedling
  - ai
  - legal
date: 2024-11-02
lastmod: 2024-11-02
draft: true
---
Reasonable minds can and should differ on whether copyright ought to be enforced against [[Atomic/gen-ai|GenAI]]. I think it should be. 

The most important debate is up first, but the others are not particularly ordered.

> [!info] Under Construction
> More topics under this section forthcoming! I work and edit in an alternate document and copy over sections as I finish them.
> Brief teasers:
> - online artists' assumption of the risk
> - economic incentives
> - roadblocks to enforcement
> - the effect on truth

## Fair Use
In modern copyright practice, this defense seems to be the pivotal question. It's probably going to be the exact same in AI.

I choose to link training fair use and generation fair use. Generation "uses" the works as encoded in the statistical model, which were naturally part of the data used for training. Technologically, they aren't different "uses" of the same data, they're just steps in a process (you're always going to generate with a trained model). Thus, if training is found to be fair use, generation would be fair use as well. **However**, there are arguments for fair use that would absolve the user who generated the content, yet still hold the proprietor of the model liable! This is another facet of copyright that needs to be uniquely applied to AI, as infringement is bilateral, yet fair use is more complex.

Whenever a legal doctrine has strong roots in collective consciousness and policy, there's an epistemological question about how to approach the issue. The debate asks: in the abstract, should the courts protect what *descriptively is* considered within the bounds of protection, or what *ought to be* recognized by society as deserving protection? 
- Nerd sidebar: This debate is common in criminal law. For example, examine the reasonable expectation of privacy. *Are* members of the public actually concerned with police access to the data on their phone or do they think they have nothing to hide? *Should* they be? Recent cases on searches and third party access trend towards analysis under the latter, more paternalistic position.

In fair use, the first ("empirical") perspective teaches that fair use should only extend to concepts analogous to prior enforcement which has been accepted in the collective consciousness. In contrast, the second ("normative") perspective would disregard comparison with enforcement in favor of comparison with societal values. 

Because it's such an alien technology to the law, I'd argue that generative AI's fair use should be analyzed in view of the normative approach. Even so, I don't think AI training or generation should be considered fair use.

US fair use doctrine has four factors, of which two can most speak to whether it ought to be enforced.
### Purpose and character of the use
Training is conducted at a massive scale. Earlier, I mentioned the firehose. This isn't relevant to the (not discussed) amount-and-substantiality factor because that operates on a per-work basis.

First, *why* is the model being produced? It's for the sole purpose of regurgitation of works. This sets AI training apart from other massive scraping, such as for search engines. "deep linking" to a webpage is functionally different from copying its content; [*Ticketmaster v. Tickets.com* pages 5-6](https://casetext.com/case/ticketmaster-corp-v-ticketscom-inc). The service that search engines provide is also different: leading people to the content of the deep links (and, naturally, making money in the process using the data you inadvertently give the search engine when using it).

Next, let's look at how it's encoded. The key link between training and generation is that a trained model infringes the input for reproducing its expression as a compilation derivative, because it can be used to generate a literal reproduction of that expression. Not all of these "reproductions of expression" are direct copy-pastes of the words on the page, but the most striking ones are. 

But for generated output, this factor gets messier. Is the work "criticism or comment"? Of/on who/what? I can think of one use that would be fair use, but only to defend the person using the model to generate text: criticism of the model itself, or demonstration that it can reproduce copyrighted works. Not to mention, if a publisher actually sued a person for *using* a generative AI, that would Streisand Effect the hell out of whatever was generated.
### Market value, or competition
And most importantly (especially in recent years), let's talk about the competitive position of an AI model. This is directly linked to the notion that AI harms independent artists, and is the strongest reason for enforcement of copyright against AI in my opinion. 



Interestingly, I think the USCO Guidance [[#Detour 2 An Alternative Argument|talked about in the Generation section]] is instructive. It analogizes prompting a model to commissioning art, which applies well to a discussion of competition. AI lets me find an artist and say to them, "I want a Warhol, but I don't want to pay Warhol prices"; or "I want to read Harry Potter, but I don't want to give J.K. Rowling my money \[for good reason\]." The purpose of AI's "work product" is solely to compete with human output. 
- "I want a contract, but I can't afford a lawyer."
- "I want a website, but I don't know how to program."

A problem I have not researched in detail is the level of competency in an alternative that a plaintiff needs to prove in order to establish that the infringer does compete with the underlying work. Today, many people see AI as the intermediate step on the scale between the average proficiency of an individual at any given task (painting, photography, poetry, *shudder* legal matters) and that of an expert in that field. Does AI need to be "on the level" of that expert in order to be considered a competitor? It certainly makes a stronger argument for infringment if they are, like with creative mediums. But does this hold up with legal advice, where it will produce output but (in my opinion) sane professionals should tell you that AI doesn't know the first thing about the field? 

Professionals might not even see AI as a competitor. Say a client comes to a software engineer and says "I made a website with AI, can you look it over and touch it up?" That poor engineer's first impression is that the work will take significantly longer, since it is now entirely the worst task of all: code review. Nonetheless, I think the professionals' opinion and the actual competitive potential shouldn't be considered. The important fact is that **genAI has the impression of an alternative, and does indeed lead consumers of individual and enterprise levels to use it instead of a human**, regardless of its efficacy.

Note that there are very valid criticisms of being resistant to a technology solely because of the "AI is gonna take our jobs" sentiment. I think there are real parallels between that worry and a merits analysis of the competition factor. So if you're persuaded that AI skepticism is FUD over potentially losing one's job, that would probably mean that you disagree with my evaluation of this factor.
### Final thoughts on fair use
I didn't see fit to engage with it in detail here, but amount and substantiality of the use would probably have some effect on AI depending on plaintiff. ==BIG PUBLISHER VS ARTIST?==
## Who's holding the bag?
 https://www.wsj.com/tech/ai/the-ai-industry-is-steaming-toward-a-legal-iceberg-5d9a6ac1?St=5rjze6ic54rocro&reflink=desktopwebshare_permalink
At some point, this AI experiment is going to go very wrong. Someone is going to use AI to cause harm, whether knowingly or negligently, and there will be a lawsuit. AI could be attractive to corporate employees, because in some cases, it may allow them to dodge accountability for the decisions that were made by AI. But should that hold up legally?

The two potential wrongdoers are the proprietor of the AI model and the entity that used the AI model for the alleged harm. ==WIP==
### Detour: Section 230 (*again*)
Well, here it is once more. When the proprietor is a website (or, really, an "interactive computer service"), and a service user uses the model in a way that results in harm, it will invariably involve a Section 230 issue.

I think that you can identify a strangely inverse relationship between fair use and § 230 immunity. If the content is directly what was put in (and is not fair use), then it's user content, and Section 230 immunity applies. If the content by an AI is *not* just the user's content and is in fact transformative fair use, then it's the website's content, not user content, and the website can be sued for the effects of their AI. Someone makes an investment decision based on the recommendation of ChatGPT? Maybe it's financial advice. I won't bother with engaging the effects further here. I have written about § 230 and AI [[no-ai-fraud-act#00230: Incentive to Kill|elsewhere]], albeit in reference to AI-generated user content *hosted* by the platform.
## The First Amendment and the "Right to Read"
This argument favors allowing GAI to train on the entire corpus of the internet, copyright- and attribution-free, and bootstraps GAI output into being lawful as well. The position most commonly taken is that the First Amendment protects a citizen's right to information, and that there should be an analogous right for generative AI.

The right to read, at least in spirit, is still being enforced today. Even the 5th Circuit (!!!) believed that this particular flavor of First Amendment claim would be likely to succeed on appeal after prevailing at the trial level. [*Book People v. Wong*](https://law.justia.com/cases/federal/appellate-courts/ca5/23-50668/23-50668-2024-01-17.html), No. 23-50668 (5th Cir. 2024) (not an AI case). It also incorporates principles from intellectual property law. Notably, this argument states that one can read the content of a work without diminishing the value of the author's expression (*i.e.*, ideas aren't copyrightable). As such, the output of an AI is not taking anything from an author that a human wouldn't take when writing something based on their knowledge. 

I take issue with the argument on two points that stem from the same technological foundation.

First, as a policy point, the argument incorrectly humanizes current generative AI. There are no characteristics of current GAI that would warrant the analogy between a human reading a webpage and an AI training on that webpage. Even emerging tools like the improperly named [Deep Document Understanding](https://github.com/infiniflow/ragflow/blob/main/deepdoc/README.md) —which claim to ingest documents "as \[a\] human being"—are just classifiers on stochastic data at the technical level, and are not actual "understanding."

Second, and more technically, [[Atomic/gen-ai#Training|the training section]] is my case for why an AI does not learn in the same way that a human does in the eyes of copyright law. ==more==

But for both of these points,  I can see where the confusion comes from. The previous leap in machine learning was called "[[Atomic/neural-network|neural networks]]", which definitely evokes a feeling that it has something to do with the human brain. Even more so when the techniques from neural network learners are used extensively in transformer models (that's those absurd numbers of parameters mentioned earlier).
## Points of concern, or "watch this space"
These are smaller points that would cast doubt on the general zeitgeist around the AI boom that I found compelling. These may be someone else's undeveloped opinion, or it might be a point that I don't think I could contribute to in a valuable way. Many are spread across the fediverse; others are blog posts or articles. Others still would be better placed a Further Reading section, ~~but I don't like to tack on more than one post-script-style heading.~~ { *ed.: [[#Further Reading|so that was a fucking lie]]* }. If any become more temporally relevant, I may expand on them.
- [Cartoonist Dorothy’s emotional story re: midjourney and exploitation against author intent](https://socel.net/@catandgirl/111766715711043428)
- [Misinformation worries](https://mas.to/@gminks/111768883732550499)
- [Large Language Monkeys](https://arxiv.org/abs/2407.21787): another very new innovation in generative AI is called "repeated sampling." It literally just has the AI generate output multiple times and decide among those which is the most correct. This is more stochastic nonsense, and again not how a human learns, despite OpenAI marketing GPT-o1 (which uses the technique) as being capable of reason. See also [[Atomic/gen-ai#Other/emerging terminology|emerging AI technology]]
- Stronger over time
	- One of the lauded features of bleeding-edge AI is its increasingly perfect recall from a dataset. So you're saying that as AI gets more advanced, it'll be easier for it to exactly reproduce what it was trained on? Sounds like an even better case for copyright infringement.
- Inevitable harm
	- Temperature and the very fact that word generation is used mean that there's no way to completely eliminate hallucination, so truth in AI is unobtainable. [Xu, et al.](https://arxiv.org/abs/2401.11817)
- Unfair competition
	- This doctrine is a catch-all for claims that don't fit neatly into any of the IP categories, but where someone is still being wronged by a competitor. I see two potential arguments here. 
		- First, you could make a case for the way data is scraped from the internet being so comprehensive that there's no way to compete with it by using more fair/ethical methods. This could allow a remedy that mandates AI be trained using some judicially devised (or hey, how about we get Congress involved if they don't like the judicial mechanism), ethical procedure. The arguments are weaker, but they could be persuasive to the right judge.
		- Second, AI work product is on balance massively cheaper than hiring humans, but has little other benefit, and causes many adverse effects. A pure cost advantage providing windfall for one company but not others could also be unfair. Again, it's very weak right now in my opinion.
	- A further barrier to unfair competition is the doctrine of **copyright preemption**, which procedurally prevents many extensions of state or federal unfair competition law.
## Further Reading
- Copyleft advocate Cory Doctorow has written a piece on [why copyright is the wrong vehicle to respond to AI](https://pluralistic.net/2024/05/13/spooky-action-at-a-close-up/#invisible-hand). Reply-guying his technical facts and legal conclusions is left as an exercise for the reader; if you do, feel free to reference my [[Atomic/gen-ai|technical explanation]]. What's most interesting is his take on the non-fair use parts of the normative debate.
- [TechDirt has a great article](https://www.techdirt.com/2023/11/29/lets-not-flip-sides-on-ip-maximalism-because-of-ai/) that highlights the history of and special concerns around fair use. I do think that it's possible to regulate AI via copyright without implicating these issues, however. And note that I don't believe that AI training is fair use, for the many reasons above.