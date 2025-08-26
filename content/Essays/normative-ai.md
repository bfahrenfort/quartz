---
title: Why Copyright Should Apply to Generative AI
tags:
  - essay
  - seedling
  - ai
  - legal
date: 2024-11-02
lastmod: 2025-08-10
draft: false
---
Reasonable minds can and should differ on whether copyright ought to be enforced against [[Atomic/gen-ai|GenAI]]. I think it should be. 

> [!info] Part of a [[Misc/ai-prologue#Further Reading|Series on AI]].


The most important debate is up first, but the others are not particularly ordered.

> [!info] Under Construction
> More topics under this section forthcoming! I work and edit in an alternate document and copy over sections as I finish them.
> Brief teasers:
> - online artists' assumption of the risk
> - economic incentives
> - roadblocks to enforcement
> - the effect on truth
> - AI in professions with ethical requirements upon practitioners (this may have to be its own essay)

## Fair Use
In modern copyright practice, this defense seems to be the pivotal question. It's probably going to be the exact same in AI.

Note that this doctrine is likely to be the second question answered by the courts. This analysis would only come into play once a court determines that the model does indeed train on works as a whole, not the facts. 

I choose to link training fair use and generation fair use. Generation "uses" the works as encoded in the statistical model, which were naturally part of the data used for training. Technologically, they aren't different "uses" of the same data, they're just steps in a process (you're always going to generate with a trained model). Thus, if training is found to be fair use, generation would be fair use as well. **However**, there are arguments for fair use that would absolve the user who generated the content, yet still hold the proprietor of the model liable! This is another facet of copyright that needs to be uniquely applied to AI, as infringement can be analyzed bilaterally, yet fair use is more complex and intertwined.

Whenever a legal doctrine has strong roots in collective consciousness and policy, there's an epistemological question about how to approach the issue. The debate asks: in the abstract, should the courts protect what *descriptively is* considered within the bounds of protection, or what *ought to be* recognized by society as deserving protection? 
- Nerd sidebar: This debate is common in criminal law. For example, examine the reasonable expectation of privacy. *Are* members of the public actually concerned with police access to the data on their phone or do they think they have nothing to hide? *Should* they be? Recent cases on searches and third party access trend towards analysis under the latter, more paternalistic position.

In fair use, the first ("empirical") perspective teaches that fair use should only extend to concepts analogous to prior enforcement which has been accepted in the collective consciousness. In contrast, the second ("normative") perspective would disregard comparison with enforcement in favor of comparison with societal values. 

Because it's such an alien technology to the law, I'd argue that generative AI's fair use should be analyzed in view of the normative approach. Even so, I don't think AI training or generation should be considered fair use.

US fair use doctrine has four factors, of which two can most speak to whether it ought to be enforced.
### Purpose and character of the use
Training is conducted at a massive scale. Earlier, I mentioned the firehose. This isn't relevant to the (not discussed) amount-and-substantiality factor because that operates on a per-work basis.

First, *why* is the model being produced? It's for the sole purpose of regurgitation of works. This sets AI training apart from other massive scraping, such as for search engines. "deep linking" to a webpage is functionally different from copying its content; [*Ticketmaster v. Tickets.com* pages 5-6](https://opencasebook.org/casebooks/409-an-open-internet-law-casebook/resources/6.4.2-ticketmaster-corp-v-ticketscom-inc/). The service that search engines provide is also different: leading people to the content of the deep links (and, naturally, making money in the process using the data you inadvertently give the search engine when using it).

Next, let's look at how it's encoded. The key link between training and generation is that a trained model infringes the input for reproducing its expression as a compilation derivative, because it can be used to generate a literal reproduction of that expression. Not all of these "reproductions of expression" are direct copy-pastes of the words on the page, but the most striking ones are. 

But for generated output, this factor gets messier. Is the work "criticism or comment"? Of/on who/what? I can think of one use that would be fair use, but only to defend the person using the model to generate text: criticism of the model itself, or demonstration that it can reproduce copyrighted works. Not to mention, if a publisher actually sued a person for *using* a generative AI, that would Streisand Effect the hell out of whatever was generated.

The primary argument in favor of fair use on this point is that the use is transformative; that its use differs so significantly from the original that it can be fairly considered an entirely new work. Importantly, a use should not be considered transformative when it could serve as a substitute for the original, because then it serves effectively the same purpose. And that is exactly what purpose generative AI serve. 

First, look at how [Pew Research reports](https://www.pewresearch.org/short-reads/2025/07/22/google-users-are-less-likely-to-click-on-links-when-an-ai-summary-appears-in-the-results/) that a mere 8% of Google search users would click on a link if their search displayed an AI overview. An LLM, serving as a substitute for the ground truth of its data. In informational purposes, LLMs supersede the use of their data in fact.

Then, consider entertainment: When an artist or writer seeks to entertain, their creative process is visible through the content and the style of the work. AI training encodes both content and style, and generation will have the hallmarks of both. Whatever an AI generates for entertainment cannot be considered "new" or "original" because of the formal requirements of AI training. So even more than just superseding entertainment uses, I would argue that AI output for entertainment *is* the original expressive works. 

### Market value, or competition
And most importantly (especially in recent years), the competitive position of an AI model pits it directly against artists and authors at the same commercial stage. This is directly linked to the notion that AI harms independent artists, and is the strongest reason for enforcement of copyright against AI in my opinion. 

The weakness of this factor is that for generated works, it ties the **entire** technological context together. First, mere competition would not be enough to defeat this factor. Working back to front, the final step which may result in fair use for some generated AI works is that they must compete *by* infringing. This means the model must be *capable* of reproducing expressive works; which requires the technical understanding that models necessarily encode the expressive content of works; which requires that they were reproduced in that format via training. 

Interestingly, I think the USCO Guidance [[#Detour 2 An Alternative Argument|talked about in the Generation section]] is instructive. It analogizes prompting a model to commissioning art, which applies well to a discussion of competition. AI lets me find an "artist" and say to them, "I want a Warhol, but I don't want to pay Warhol prices"; or "I want to read Harry Potter, but I don't want to give J.K. Rowling my money \[for good reason\]." The purpose of AI's "work product" is solely to compete with human output. 
- "I want a contract, but I can't afford a lawyer."
- "I want a website, but I don't know how to program."

And AI output need not infringe to compete; two textbooks from different authors on the same subject clearly compete without infringement.

I am convinced that the presumption of harm used in *Hachette* applies to AI, or at least to AI training. That case concerned the Internet Archive making books they had physically purchased available for digital lending. Market effect, and more importantly, the harm to the plaintiff-publishers, was presumed, because infringement was a mere copying for a commercial { *no, a use doesn't need to make money to be commercial. -ed.* } purpose. AI training is such a copying. The harm which results is that the licensing revenues the authors, publishers, and artists would otherwise receive go unpaid. 

I'm less convinced the presumption applies to generation, so I am in agreement with *Kadrey* that the plaintiffs in that case needed to show empirical harm for this factor to be concluded in their favor with respect to generation in particular.

A problem I have not researched in detail is the level of competency in an alternative that a plaintiff needs to prove in order to establish that the infringer does compete with the underlying work. Today, many people see AI as the intermediate step on the scale between the average proficiency of an individual at any given task (painting, photography, poetry, *shudder* legal matters) and that of an expert in that field. Does AI need to be "on the level" of that expert in order to be considered a competitor? It certainly makes a stronger argument for infringement if they are, like with creative mediums. But does this hold up with legal advice, where it will produce output but (in my opinion) sane professionals should tell you that AI doesn't know the first thing about the field? 

Professionals might not even see AI as a competitor. Say a client comes to a software engineer and says "I made a website with AI, can you look it over and touch it up?" That poor engineer's first impression is that the work will take significantly longer, since it is now entirely the worst task of all: code review. Nonetheless, I think the professionals' opinion and the actual competitive potential shouldn't be considered. The important fact is that **genAI has the impression of an alternative, and does indeed lead consumers of individual and enterprise levels to use it instead of a human**, regardless of its efficacy. Also, if we believe AI promoters, these tools will only improve and eventually be good enough to *actually* replace professionals. So I don't think any argument could be made in good faith that AI output does not compete for fair use purposes because it's not as good as human work.

Finally, I believe the most important consideration regarding the market effect is the complete lack of **any** *quid pro quo*. This isn't a formal consideration in doctrine, but it is what distinguishes AI training liability from landmark online-platforms-and-copyright-fair-use case law. It was very clear that uses such as Google's thumbnail images in *Perfect 10* provide a benefit to the rights holder—exposure to the interested public. In fact, this is what search engines monetize via ad placement. AI writings in general do not provide any benefit. In information, nobody is going to buy an O'Reilly's textbook because of what they could source for free from an AI. (This is another area where, if AI promoters are to be believed, will only become more accurate over time!). And in entertainment, nobody is buying Robert Frost *after* they read something written in his style by an AI; the timeline is backwards in that use case. Even with image generation, if a commission artist is provided with GenAI as a mockup, that's no better than any other references a client could provide (and might leave a bad taste in the artist's mouth, if it isn't outright worse than photo or composition references).

Note that there are very valid criticisms of people who are resistant to a technology solely because of the "AI is gonna take our jobs" sentiment. The key to resolving that tension in my opinion is remembering that AI actually isn't that effective or helpful to most people, and only increases their workload. It's not *going* to replace the real work in the long run, but it is being *marketed* as such, and if you can present evidence that the marketing has worked to your disadvantage, then generation can't satisfy fair use. So if you're persuaded that AI skepticism is just FUD over potentially losing one's job, that would probably mean that you disagree with my evaluation of this factor.
### Final thoughts on fair use
I didn't see fit to engage with it in detail here, but amount and substantiality of the use would probably have some effect on AI depending on plaintiff. The framing observed in briefings of *Kadrey* and other cases is that "high-quality writing" is the commodity. If that's the case, individual artists would have a stronger argument against fair use of their work scraped from the internet, as a much larger proportion of their total "corpus" of works has been appropriated for training. Compare this with publishers as plaintiffs, some of whom have licensed their entire catalogs to AI companies, but it is less certain that an AI company can acquire the entirety of a publisher's "high-quality" works through other means. However slight, this could mean writers see more success than publishers in protecting their works. Quite a contrary result to lawsuits in other domains.
- It's worth mentioning that the court in *Kadrey* didn't identify this contour, it is just my speculation.

You'll also notice that the "nature of the work" factor is missing here, and that's just because it tends to be largely irrelevant. In modern doctrine, if your work is copyrightable, it satisfies this factor. *Google Books* and *Hachette* both go over this in detail to lay out the history of this factor.

As mentioned above, the fact training is conducted on the scale of "the approximate sum total of human experience" doesn't strictly weigh in on the fair use factors that concern other types of quantities. I think that fact alone highlights that copyright isn't a 100% perfect fit for regulating AI. I don't think it means copyright is a bad vehicle, because any application of existing law to a) a new technology and/or b) an economy of \[absurd\] scale is going to be a little rough. Nevertheless, the point of a fair use analysis is to consider all the factors, so it's worth highlighting this incongruency between the law and the tech.
- The judge in *Kadrey* did consider the fact that Meta had downloaded close to 36 *Terabytes* of books, but only with reference to the fact they were pirated. I'm curious if potentially an early draft of the opinion wanted to work this in but dismissed the idea for lack of support. 
## Who's holding the bag?
At some point, this AI experiment is going to go very wrong. Someone is going to use AI to cause harm, whether knowingly or negligently, and there will be a lawsuit. AI could be attractive to corporate employees, because in some cases, it may allow them to dodge accountability for the decisions that were made by AI. But should that hold up legally?

The two potential wrongdoers are the proprietor of the AI model and the entity that used the AI model for the alleged harm. Clearly, the user of the model is not responsible for any training-related issues, but their use of the AI is at least in part responsible for any injuries resulting from their use of that AI. "The AI did it" is a psychological avoidance of liability, but I don't think it should be a legal one. This is even more apparent in professions where the professional is expected to carry out a duty of loyalty or heightened care to the client; you wouldn't want a doctor to say "the AI told me to amputate". As to generation, the user and the proprietor should be held jointly responsible.

Another issue is when a third-party intermediary is involved. Many AI services are mere "orchestrators" which allow you to centralize your API keys for various models in one place, or interact with certain models in different ways. Many of these facilitators are just frontends for another platform's model; in that case, they would probably be entitled to Section 230 immunity (see below). If the service is prompting the model in addition to the user, or allowing you to configure workflows to use the model output, then they might be held responsible for some part of the harm as a result.
### Detour: Section 230 (*again*)
Well, here it is once more. When the proprietor is a website (or, really, an "interactive computer service"), and a service user uses the model in a way that results in harm, it will invariably involve a Section 230 issue.

I think that you can identify a strangely inverse relationship between fair use and § 230 immunity. If the content is directly what was put in (and is not fair use), then it's user content, and Section 230 immunity applies. If the content by an AI is *not* just the user's content and is in fact transformative fair use, then it's the website's content, not user content, and the website can be sued for the effects of their AI. Someone makes an investment decision based on the recommendation of ChatGPT? Maybe it's financial advice. I won't bother with engaging the effects further here. I have written about § 230 and AI [[no-ai-fraud-act#00230: Incentive to Kill|elsewhere]], albeit in reference to AI-generated user content *hosted* by the platform.

There's also the tension between Section 230 and the First Amendment. Much like the fair use question, if content is not fair use, it's not the platform's speech, and the platform cannot claim First Amendment protection. But if the content is fair use, the platform is adopting it as its own, and might be entitled to First Amendment protection.
- This was most illustrated by *Garcia v. Character Technologies*, the wrongful death case against character-dot-ai. Character and Alphabet claimed both Section 230 and First Amendment defenses, which the judge has thus far regarded with suspicion.
## The First Amendment and the "Right to Read"
This argument favors allowing GAI to train on the entire corpus of the internet, copyright- and attribution-free. This bootstraps GAI output into being lawful as well, because it upends the market effect factor—training is consumption, not competition. The position most commonly taken is that the First Amendment protects a citizen's right to access information, and that there should be an analogous right for generative AI.

The right to read, at least in spirit, is still being enforced today. Even the 5th Circuit (!!!) believed that this particular flavor of First Amendment claim would be likely to succeed on appeal after prevailing at the trial level. [*Book People v. Wong*](https://law.justia.com/cases/federal/appellate-courts/ca5/23-50668/23-50668-2024-01-17.html), No. 23-50668 (5th Cir. 2024) (not an AI case). It also incorporates principles from intellectual property law. Notably, this argument states that one can read the content of a work without diminishing the value of the author's expression (*i.e.*, ideas aren't copyrightable). As such, the output of an AI is not taking anything from an author that a human wouldn't take when writing something based on their knowledge. 

I take issue with the argument on two points that stem from the same technological foundation.

First, as a policy point, the argument incorrectly humanizes current generative AI. There are no characteristics of current GAI that would warrant the analogy between a human reading a webpage and an AI training on that webpage. Even emerging tools like the improperly named [Deep Document Understanding](https://github.com/infiniflow/ragflow/blob/main/deepdoc/README.md) —which claim to ingest documents "as \[a\] human being"—are just probabilistic classifiers on data at the technical level, and are not actual "understanding."

Second, and more technically, [[Atomic/gen-ai#Training|the training section]] is my case for why an AI does not learn in the same way that a human does in the eyes of copyright law. It also [[Misc/generation-copyright#Expression and Infringement|stores that information differently]].

But for both of these points,  I can see where the confusion comes from. The previous leap in machine learning was called "[[Atomic/neural-network|neural networks]]", which definitely evokes a feeling that it has something to do with the human brain. Even more so when the techniques from neural net learners are used extensively in transformer models (that's those absurd numbers of parameters mentioned earlier).
## Points of concern, or "watch this space"
These are smaller points that would cast doubt on the general zeitgeist around the AI boom that I found compelling. These may be someone else's undeveloped opinion, or it might be a point that I don't think I could contribute to in a valuable way. Many are spread across the fediverse; others are blog posts or articles. Others still would be better placed a Further Reading section, ~~but I don't like to tack on more than one post-script-style heading.~~ { *ed.: [[#Further Reading|so that was a fucking lie]]* }. If any become more temporally relevant, I may expand on them.
- [Cartoonist Dorothy’s emotional story re: midjourney and exploitation against author intent](https://socel.net/@catandgirl/111766715711043428)
- [Misinformation worries](https://mas.to/@gminks/111768883732550499)
- [Large Language Monkeys](https://arxiv.org/abs/2407.21787): another very new innovation in generative AI is called "repeated sampling." It literally just has the AI generate output multiple times and decide among those which is the most correct. This is more stochastic nonsense, and again not how a human learns, despite OpenAI marketing GPT-o1 (which uses the technique) as being capable of reason. See also [[Atomic/gen-ai#Other/emerging terminology|emerging AI technology]]
- Inevitable harm
	- Temperature and the very fact that word generation is used mean that there's no way to completely eliminate hallucination, so truth in AI is unobtainable. [Xu, et al.](https://arxiv.org/abs/2401.11817)
- Unfair competition
	- This doctrine is a catch-all for claims that don't fit neatly into any of the IP categories, but where someone is still being wronged by a competitor. I see two potential arguments here. 
		- First, you could make a case for the way data is scraped from the internet being so comprehensive that there's no way to compete with it by using more fair/ethical methods. This could allow a remedy that mandates AI be trained using some judicially devised (or hey, how about we get Congress involved if they don't like the judicial mechanism), ethical procedure. The arguments are weaker, but they could be persuasive to the right judge.
		- Second, AI work product is on balance massively cheaper than hiring humans, but has little other benefit, and causes many adverse effects. A pure cost advantage providing windfall for one company but not others could also be unfair. Again, it's very weak right now in my opinion.
	- A further barrier to unfair competition is the doctrine of **copyright preemption**, which procedurally prevents many extensions of state or federal unfair competition law.
## Further Reading
- Copyleft advocate Cory Doctorow has written a piece on [why copyright is the wrong vehicle to respond to AI](https://pluralistic.net/2024/05/13/spooky-action-at-a-close-up/#invisible-hand). Reply-guying his technical facts and legal conclusions is left as an exercise for the reader; if you do, feel free to reference my [[Atomic/gen-ai|technical explanation]]. What's most interesting is his take on the non-fair use parts of the normative debate.
- [TechDirt has a great article](https://www.techdirt.com/2023/11/29/lets-not-flip-sides-on-ip-maximalism-because-of-ai/) that highlights the history of and special concerns around fair use. I do think that it's possible to regulate AI via copyright without implicating these issues, however. And note that I don't believe that AI training is fair use, for the many reasons expressed elsewhere.