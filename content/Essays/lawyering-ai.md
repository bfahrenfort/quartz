---
title: Oh God, The Legal Profession Isn't Ready For AI
tags:
  - ai
  - legal
  - essay
  - productivity
date: 2025-10-25
lastmod: 2025-11-02
draft: false
---
> [!warning] A "brief" reminder
> This site houses my own opinion, it does not reflect the opinions of my employer. Boy does it ever not reflect the opinions of my employer.
## Introduction
The pressure to use AI in legal practice is mounting. For the reasons expressed below, I'm confident that pressure is purely marketing nonsense, and not because of any real benefit to practice. At its core, AI is not a tool like any the legal field has adapted to in the past. It is a nonsense machine, and we should treat it as such.

This is not a comprehensive article. I want to provide the rough outline of my sources for my position. These should apply to any field which has a) a personnel structure which is incongruent with the tech field, and b) a high value attached to critical thinking and reasoned judgement.
## The legal field is not the tech field
==WIP==
- There aren't a whole lot of tasks which are merely annoying obstacles to doing the work; many tasks *are* the work
- Job market architecture differences
- What has caused productivity gains across both
## Literature review
Again, this isn't comprehensive. These are just some of the most striking numbers/results in academic literature. Because of how abysmal the numbers are, my conjecture is that further research into how to reform corporate structures and internal processes to make use of the tools as they are would yield minimal returns at best.

This [survey across Denmark administrative labor records](https://papers.ssrn.com/sol3/papers.cfm?abstract_id=5219933) finds that:
- GenAI is the fastest technology adoption in history, even quicker than the internet.
- But in professional industries, AI saves 2.8% of work hours.
- Legal professionals specifically reported that they spent more time completing the compliance work created by AI usage and creating AI organizational policies than they actually did using it for drafting. In other words, AI created more tasks than it did reduce work.
- 10% of Danish law firms forbade the use of generative AI.

Expert knowledge workers can estimate the time it will take to complete a task with [a variance of 1%.](https://www.sciencedirect.com/science/article/abs/pii/S0263786398000623) Expert software engineers also estimated that they would be 20-30% faster with the use of AI. [But they were 19% slower than doing the task without AI.](https://arxiv.org/abs/2507.09089)

MIT's Media Lab [monitored the brain activity](https://arxiv.org/pdf/2506.08872v1) of humans, humans using search engines, and humans using AI. They found that:
- Using AI for drafting bypasses your memory processes and makes you a worse reviewer than you would be when revising your own written work. 
- Using AI is a lot of effort, and users had to iterate and devise arbitrary bounds just so that they could personally make sense of what the AI put out.
- ChatGPT could write a shotgun essay, but humans can write a rifle-shot essay.
- Subsequent iterations were preferred regardless of whether ChatGPT or a human did the prior iteration.
- { *this one has completely nerd sniped me and I want to create inference learner tooling for analysis of human work in a latent embedding space. -ed.* } For most of the essay "prompts" (but not in the AI sense of the word), the word content of the AI-assisted essays and the human-only essays registered in distant regions of a token embedding space. The clumsy brain analogy is that this is like two people used two different regions of their brain to write an essay on the same topic. My conclusion is that what AI writes isn't going to align with what humans want, but given machine bias (explained later), you'll accept it anyway and that's a bad thing.
- The human writers showed clear indications of a learning process through subsequent revisions; the AI users exhibited signs of "cognitive offloading" and did not engage their critical thinking processes. Cognitive offloading got **worse** the more the person used AI for subsequent essays on different topics.
- Those who used search engines were **fully satisfied** with their essays, rather than the GenAI and brain only groups.
- (this is my best effort at interpreting a paper in a domain I'm *very* unfamiliar with) The search engine brainwaves suggested more focus on integration of facts than the LLM or brain only, and the search engine brainwaves involved less intensive internal coordination activity than either other group. In sum, search engines redistributed cognitive load in productive ways without having to marshal the context they were working with.

And further, MIT finds that [95% of generative AI pilots fail.](https://mlq.ai/media/quarterly_decks/v0.1_State_of_AI_in_Business_2025_Report.pdf) Why? Because external tools aren't good enough beyond the most basic activities. And internal tools fall short of the mark for their marketed purpose.
## Where the law goes wrong with AI
### Unsuitable technology
As a general rule, Large Language Models are unsuited to any task requiring facts or reasoning, because the AI can understand neither. There have been many technological innovations "bolted on" to the underlying transformer model architecture to attempt to mitigate this fundamental shortcoming, but it doesn't make that problem go away. See also [[Atomic/gen-ai|Generative AI]].

As it applies to the legal field, that means that any task conducted with the use of AI is merely words that does not have a ground truth. *That is worse than useless*. In the simplest terms: Truth of legal rules is important to humans. Truth of legal rules is not even in an AI's frame of reference.
### Fallacies and biases
This would by *why* AI output is worse than useless to the legal profession.

First, AI is a bias encoder. And worse, it's a blind bias encoder. You as a user of AI have no indication of when your subtle phrasing of your prompt includes minute differences which nudge the context window ever so slightly into the realm of some nonsense concurrence that half a dozen law professors wrote amici supporting.

Compounding the bias encoder issue, your ability as a competent user to check an AI's work is psychologically hampered. The content did come from a human. And that content had a context that would allow you to make conclusions about its veracity. But from the context is gone. To your brain, anything the AI says appears as the output of an unbiased machine. First, *this makes these tools dangerous.* By using AI, you're blinding yourself to essential information. Second, this perspective divorced from context makes you psychologically default to assigning authority what the AI says, just like how we assign authority to what can be found on Google.

Both of these issues are why I struggle to accept any use of AI no matter how strong the proponent's caveat of "you just have to check everything it says" is. 
### Unsuitable use cases
Let's walk through an arbitrary matter. I want to impress that the faults and incidences in this section are exemplary. They are not the responsibility of a particular company. *This is just how the technology is.*
#### Documenting facts.
A police report written with AI, where [it is almost impossible to tell who wrote what](https://www.politico.com/newsletters/digital-future-daily/2024/09/04/axon-ai-police-reports-00177331). Or [with such meager audit trails that they may as well be nonexistent.](https://www.eff.org/deeplinks/2025/07/axons-draft-one-designed-defy-transparency) But even then, [using AI didn't save any time.](https://alaskapublic.org/news/2024-12-04/anchorage-police-not-moving-forward-with-using-ai-to-write-reports-for-now) So all it does is make the evidentiary record worse.

Cybercrime investigations [based on entirely hallucinated facts.](https://www.wired.com/story/cybercheck-crime-reports-prosecutions/) They looked real enough that nobody bothered to check. But just check everything it says, right?
#### Researching case law.
There are too many occurrences to list when talking about hallucinated cases being used in filings. Big law is not immune - [at least two global firms have been caught.](https://cyberlaw.stanford.edu/blog/2025/10/whos-submitting-ai-tainted-filings-in-court/)

But even then, how can you be sure you're looking in the right direction? AI doesn't challenge the question. An AI can apply the content of its dataset to the content of its context window. (as discussed above, an AI has no concept of "law" or "facts".)
- Again, this isn't a case for "just use it and double-check." I can ask a toddler if the railroad company staff was negligent in pushing a man carrying explosives and double-check their answer, too. But that time spent waiting for their answer is time wasted. How does putting a Step Zero in front of the research I was going to do anyway save me time?
#### Discovery.
I have had the displeasure of testing retrieval augmented generation models in discovery personally. 

The reason search terms were proposed as a discovery negotiation line item is because they are concrete. If you've crafted them well, you can use reliable statistical methods to be *certain* that you've captured a reasonable percentage of the dataset.

On the other hand, when you use an AI for your research in a discovery database, you have no way to tell how big its context window is, what documents it is forgetting, or any other issues with its output. In what way can this be argued to satisfy your obligations as a party to discovery?

RAG specifically is just *bad* for searching, too. It tends to glom onto the one term in your prompt which has been identified in its knowledge base as significant due to its frequency. Which means the output will be a factual overview of that term rather than what you were actually searching for. Even if told to cite sources from the database, you'll usually receive the base factual documents related to the basic information about that term rather than specific relevant documents.

Further, this disregards a massive body of research into discovery keyword indices and search which has been developed in response to the problems with discovery tooling. I think these techniques address the issues which AI is marketed to much better than the AI tooling can.

There's also the statistic that iterating on a search query provides insane improvements to precision and recall for the first few iterations. This is because your initial idea of how to search for something is usually a little misguided, but the human brain is *really* good at iterating on something it can control when it has the information of input (your search string) and output (your result). So far, we have not seen the same sort of iteration improvement capability for writing AI prompts.
- In fact, many of the attorneys I know that use AI will have a "god prompt" that they copy-paste and tweak. Which means even less human involvement, less critical thinking, and less chance of a relevant result.
#### As an advocate (Bruce Schneier, don't make me come over there).
==WIP==
#### Final judgment.
==WIP==
#### Others.
==WIP==
- Transactional
- Advisory work
- The regulatory space
### Learning by doing
I think the idea of experiential learning showcases why AI is particularly unfit for the legal field in general. Rather than looking at specific uses, I want to explain the concept of value in more detail.

When you first make contact with a law firm, the firm is at a net zero on you. And that number goes into the red by the day. All the time spent recruiting and interviewing is time that is not being charged to a client by the attorneys you meet. At most firms, recruiting and administrative staff will shoulder some of this cost, but they are also paid living salaries. Offering summer positions at market rate, complete with all the expenses that come with, are more on the balance sheet. Even if you accept an offer and start, your value to the company only makes incremental progress on that number at first. And this is the way that the corporate legal world has operated for decades. 

The reason this model is profitable is because all this money spent is an investment in new talent (and tax reasons). In five years, the expectation is that you are as productive, as profitable, and as marketable as someone with five years of legal experience.

So when partners discuss how they see AI as capable of accomplishing the tasks of a first-year attorney, it sounds to me like their view of a subordinate attorney is a "black box" where money goes in and productivity comes out. But this view seems to disregard how the entire purpose of a first-year attorney is to learn, to grow and be more useful than a first-year attorney later. That's something AI cannot do.

In the legal field, the maxim of "you get out what you put in" is still very relevant. Those who are actively invested in their work and seeking out solutions and new problems are going to be the most valuable as they ramp up to be in the green. You have to learn the skills to be able to zoom out and make partner.

Ultimately, I think the process of learning the skills is something partners fond of AI have forgotten. Once your cognitive biases are informed by an understanding of the law shaped by decades of experience, the need to do more traditionally delegated work to build that understanding just isn't present anymore. But the flip side of that coin is that when it's time to retire, if all your juniors did is delegate to AI, there will be no one with your level of experience to replace you. As a result, I cannot understand why *anyone* would heavily encourage first-years to use AI.
## What the law gets right
I hope to expand this section in future. There are certain parts of the legal field which have paid special attention to the use of AI, and have had to be much more fair in their treatment of the technology in order to do their jobs.

First, evidence. The idea of a fabricated video as evidence of a crime is a horrific, Orwellian thought. Judges have recognized this, and there are a host of courts around the country who have all adopted local rules to ensure that evidence is properly authenticated in the age of AI.

Authentication and veracity are the research interest of the Honorable Judge Xavier Rodriguez, who has written about his approach to evidence authentication [here](https://www.thesedonaconference.org/sites/default/files/announcements/Artificial-Intelligence-and-the-Practice-of-Law-Xavier-Rodriguez_1.pdf). This is informed in part by the ideas of Maura Grossman, who [presents](https://www.moep.uscourts.gov/sites/moed/files/documents/Grossman%20-%20Fundamentsls%20of%20AI%2C%20GenAI%2C%20and%20Deepfakes.pdf) on this topic often.

- Local rules - AI authentication (judges' views)
- Punishments (your Honor, my client pleads "whoopsie-daisy")

## Problem: Pushy clients
==WIP==
## The future of AI in the legal field
At a general level, the job of a trained advocate is not going away. Here's what I'm excited about. This will be a much more technical section, feel free to skip if you're not interested.

I think in-context single continuous data stream learners on an architecture that isn't a transformer model will *actually* revolutionize ML. Pretrained models at the scale of contemporary commercial products aren't useful because GIGO and "more data, better results" both don't hold for sufficiently large amounts of data. Instead, those two assertions are dependent on scaling laws, in that increased performance requires compute power and available data to scale in tandem. Couple this with the fact that a transformer model's theory of self-attention means you have to bolt on "context windows" and all sorts of other nonsense to get any usable output. These components aren't AI. And the end result of this stack is a miserable little pile of numbers which still thinks that Joe Biden is president.

The solution is developing algorithms for which scaling laws don't hold; that is, algorithms which scale with compute more so than data available (and can thus make more efficient use of more compute on the same data). At this point, we might be able to make progress towards tuning these algorithms to actually differentiate facts in ways that can be stored in something resembling a human's episodic memory. If this happens, *then* the practice of law changes forever. 
- Note that this process of training is still deterministic, and in my approximation, models won't be actually comparable to the human brain for at least a couple decades beyond this advancement.

The requirements of this change are steep. The current entire ML ecosystem is built on libraries (numpy) and hardware (FP16) which lock in the scaling laws. I actually believe that the longer transformer models are the cultural sensation, the longer it will take for us to make advancements in ML disciplines which would actually bring meaningful productivity growth. 
## Further Reading
This has absolutely no relation to law at present, but I found a study saying "the most consistent predictors of AI use were aversive personality traits (e.g. Machiavellianism, narcissism, psychopathy)". Let's not make the reputation of attorneys as arrogant assholes any worse. [Liebert](https://www.liebertpub.com/doi/10.1177/21522715251379987)