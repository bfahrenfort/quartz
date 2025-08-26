---
title: Generative AI
tags:
  - ai
  - glossary
  - essay
  - legal
  - programming
  - toc
date: 2024-11-02
lastmod: 2025-08-09
draft: false
---
Generative AI models from different sources are architected in a variety of different ways, but they all boil down to one abstract process: tuning an absurdly massive number of parameters to values that produce the most desirable output. (note: [CGP Grey's video on AI](https://www.youtube.com/watch?v=R9OHn5ZF4Uo) and its follow-up are mainly directed towards neural networks, but do apply to LLMs, and do a great job illustrating this). This process requires a gargantuan stream of data to use to calibrate those parameters and then test the model.
- Sidebar: you're nearly guaranteed not to find the optimal combination of several billion parameters, each tunable to several decimals. When I say "desirable," I really mean "good enough." One way of achieving incremental progress to "good enough" is called gradient descent, and it's a foundational visualization of how AI learns, but [it is](https://arxiv.org/abs/2212.07677) and [it isn't](https://arxiv.org/abs/2310.08540) the whole picture.

> [!info] Part of a [[Misc/ai-prologue#Further Reading|Series on AI]].

Generative AI resembles a Chinese Room. [The Chinese Room](https://plato.stanford.edu/entries/chinese-room/) is a philosophical exercise authored by John Searle where the (in context, American) subject is locked in a room and receives symbols in Chinese slipped under the door. A computer program tells the subject what Chinese outputs to send back out under the door based on patterns and combinations of the input. The subject does not understand Chinese. Yet to an observer of Searle's room, it **appears** as if whoever is inside it has a firm understanding of the language.

Searle's exercise was at the time an extension of the Turing test. He designed it to refute the theory of "Strong AI." At the time that theory was well-named, but today the AI it was talking about is not even considered AI by most. Throughout computing history, the term AI has been used to refer to many different ideas at the bleeding edge of computer science: Turing machines (a fancy theoretical tape recorder), decision tables (Excel on steroids), ML (yes/no, confidence), neural networks (flowcharting on steroids), and now large language modeling. So AI in itself has always been a misnomer; where Searle's AI referred to Turing machines, this entry refers to tokenization- or diffusion- based transformer models as generative AI.

The hypothetical Strong AI was a computer program capable of understanding its inputs and outputs, and importantly *why* it took each action to solve a problem, with the ability to apply that understanding to new problems (much like our modern conception of Artificial General Intelligence). A Weak AI, on the other hand, is just the Chinese Room: taking inputs and producing outputs among defined rules. Searle reasoned that the "understanding" of a Strong AI was inherently biological, thus one could not presently exist.
- Note that some computer science sources like [IBM](https://www.ibm.com/topics/strong-ai) have taken to using Strong AI to denote only AGI, which was a sufficient, not necessary quality of a philosophical "intelligent" intelligence like the kind Searle contemplated.
### Causes for concern
Here are some of the many actualized and potential misuses of AI:
- Election fraud and misleading voters, including even **more** corporate influence on US elections ([not hypothetical](https://www.washingtonpost.com/elections/2024/01/18/ai-tech-biden/) [in the slightest](https://web.archive.org/web/20240131220028/https://openai.com/careers/elections-program-manager), [and knowingly unethical](https://www.npr.org/2024/01/19/1225573883/politicians-lobbyists-are-banned-from-using-chatgpt-for-official-campaign-busine))
	- [Claiming](https://www.washingtonpost.com/politics/2024/03/13/trump-video-ai-truth-social/) misleading voters? 
	- { *ed.: although this gives us the glorious schadenfreude of "I HATE TAYLOR SWIFT!"* }
- Other fraud, like telemarketing/robocalls, phishing, etc
- Competition with actual artists and authors (I am VERY excited to see where trademark law evolves around trademarking one's art or literary style. Currently, the arguments are weak)
- Obsoletes human online workforces in tech support, translation, etc
- [[Essays/plagiarism#1 Revealing what's behind the curtain|🅿️ Reinforces systemic bias]]
- [Violates the GDPR on a technological level](https://www.theregister.com/2024/04/29/openai_hit_by_gdpr_complaint/)
	- I also think being unable to delete personal data that it *has* acquired and not just hallucinated is a big problem generally.

## Training
Training is a deterministic process. It's a pure, one-way, data-to-model transformation (one part of the process for which "transformer models" are named). The words are ingested and converted into one of various types of formal representations to comprise the model. It's important to remember that given a specific work and a step of the training process, it's always possible to calculate by hand the resulting state of the model after training on that work (although, with large numbers, and large models, that's just infeasible for time reasons). The "black box" that's often discussed in connection with AI refers to the final state of the model, when it's no longer possible to tell what effects the data ingested at earlier steps had on the model. In fact, models that you can run on your own computer are often distributed in the format of a one-way sequence of matrix operations which have been decomposed from the full architecture of the model, which is quite inscrutable. 

Training can't be analogized to human learning processes, because when an AI trains by "reading" something, it isn't reading for the *forest*; it's reading for the *trees*. In the model, if some words are more frequently associated together, then that association is more "correct" to generate in a given scenario than other options. A parameter sometimes called "temperature" determines how far the model will stray from the correct next word. And the only data to determine whether an association *is* correct would be that training input. This means that an AI trains only on the words as they are on the page. Training can't have some external indicator of semantics that a secondary natural-language processor on the generation side could. If it could, it would need some encoding—some expression—that it turns the facts into. Instead, it just incorporates the word as it read it in, and the data about the body of text it was contained in. 

Some transformer models include a structure called a Multi-Layer Perceptron ("MLP" { *training is magic -ed*. }), which is often simplified as "the place where the AI stores facts." However, it's just another matrix-based component of the model with different math that makes it better at preserving a type of word associations: Mathematically, most word generation is linear (really linear-and-tomfoolery but whatever) on the probability-of-occurrence scale. An MLP corrects this mathematical limitation by adding "layers" of matrices that roughly preserve associations in non-linearly separable data, a class which *includes* facts. As such, it makes the model perform better if MLPs get more authority over the output of the model in portions of the output where it makes sense to give it that control (and determining that "where" is yet another black box of training). If you've ever seen an AI hallucinate a falsehood in the next sentence after it's been trained on the correct answer, you know that the MLP isn't really storing facts.
- Phrases like "authority over the output" really belong in a generation section. It's probably an intuitive enough concept to be included here without further context though.
- Sidebar: There are, of course, additional math components bolted on top to improve the "hallucinates a falsehood in the next sentence after training on the correct answer" issue. To solidify the fact that generative AI training cannot be likened to a human's capacity to process and store information, you could take this MLP argument its logical extreme and demonstrate that self-attention (or any sort of attention component, really) is a human-architected instruction, not a substitute for human short-term memory. 

As such, idea and expression are meaningless distinctions to AI.

[[Misc/training-copyright|Training AI may be copyright infringement]]. If it is, perhaps the biggest legal question surrounding AI is: [[Essays/normative-ai#Fair Use|does AI training count as fair use?]]
## Other Related Technical Details
While the above describes the process and results of training, there are some other parts of training that are vaguely relevant to legal claims.

Namely, when you train an AI, you train it on the content of the book, not the cover/publisher information/acknowledgements/etc. Some of that is considered "copyright management information", and removal of that CMI can be the basis for another claim under the DMCA.
### Detour: Garbage In, Garbage Out

<img src="/Attachments/common_crap.svg" alt="Common Crawl logo edited to say 'common crap' instead" style="padding:0% 5%">

A very big middle finger to the Common Crawl dataset, whose CCBot still tries to scrape this website. [[Projects/Obsidian/digital-garden#Block the bot traffic!|Block the bot traffic]]. If I had the time or motivation, I would find a way to instead of blocking these bots, redirect them to an AI generated fanfiction featuring characters from The Bee Movie.

> [!info]
> Another middle finger to Perplexity, whose scraper with agent PerplexityBot will:
> 1. Try to access nonexistent URLs on my site until fail2ban blocks it
> 2. Try to access a real URL while blocked
> 3. Recognize that it's been blocked and switch to the next IP address on its AWS subnet (18.97.9.xx)

> [!info] Even Angrier Info
> *Another* middle finger to Perplexity, who has been [caught](https://blog.cloudflare.com/perplexity-is-using-stealth-undeclared-crawlers-to-evade-website-no-crawl-directives/) using unidentified scrapers to access content.
> 
> `Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36` is the string.
> 
> `grep "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36" /var/log/nginx/* | wc -l` shows 34 instances in 1 week. Some of these are IP blocked automatically; the ones on the AWS subnet get through. Most are requests for a favicon on a microservice; none have attempted to access my web content yet.

## Generation
Generative AI training, for LLMs, creates a sophisticated next-word predictor that generates text based on the words it has read and written previously. 

In the case of image models, it creates an interpolator that starts from a noise pattern and moves ("diffuses") values until they resemble portions of its training data. Specifically, portions which it has been told have roughly parallel expression to the prompt given to it by the user.

This is the reason that the term "hallucination" is misleading: **all AI-generated text is "hallucinated."** some of it just happens to be "shaped" like reliable information. Many discrete procedures are bolted on to the back of the model to bring the reliability numbers up, but they do nothing to affect the originality of the work.

[[Misc/generation-copyright|Generated output may infringe the training data]].
## Other/emerging terminology
"Retrieval-augmented generation" (RAG) partitions off a specific set of a model's training data as the "knowledge body", which the model will attempt to copy-paste from when responding to your questions. It's implemented by skewing the weights of the training data to favor the knowledge body, and then using the output to search in the knowledge body for its source. In other words, the AI isn't saying "I got this information from this source", it's going "here is a statement" and then before outputting the statement to the user, it plugs it into an exact-match search of its dataset to find original.

"Deep document understanding" is the name of a tool to classify regions of a file. It's a misnomer, this is not in and of itself an 'understanding' any more than drawing circles around your tax return boxes would be.

"Large reasoning models" (LRMs) are LLMs that use "repeated sampling" to generate multiple responses to one query. They then use a reinforcement learner to decide which of these responses is more...responsive. Then, they generate a slew of steps which could be used to reach that response, and a learner picks which procedure looks the most correct. This isn't reasoning. And formally, we now have [verification](https://arxiv.org/abs/2508.01191v2) that these models are unable to apply the supposed reasoning patterns the model has "learned" to questions outside their training domain, that steps in the output do not correlate to the final answer, and that the presence of steps in the output does not change the final answer.
## Further Reading
- If you're *really* interested in the math behind an LLM (like I am, haha), [here's a great introduction to the plumbing of a transformer model](https://santhoshkolloju.github.io/transformers/).
	- And mathematically, it's a bad architecture for incremental performance in its use case because it is incapable of correlating text understanding. [Token Embeddings Violate the Manifold Hypothesis](https://arxiv.org/abs/2504.01002)
- [Pivot to AI](https://pivot-to-ai.com/) is a hilariously snarky newsletter (and RSS feed!) that lampoons AI and particularly AI hype for what it is.
- [The AI Con](https://thecon.ai/) is a well-researched book covering the AI hype cycle, how it came to be, the ideas it is premised on, and why it will fail. 
- Read about the problems that generative AI is causing at the [Distributed AI Research Institute](https://www.dair-institute.org/). DAIR members also contributed to The AI Con above.
- These findings are discussed elsewhere in the AI pages, but [USCO Guidance Part 1](https://www.copyright.gov/ai/Copyright-and-Artificial-Intelligence-Part-1-Digital-Replicas-Report.pdf) and [USCO Guidance Part 2](https://www.copyright.gov/ai/Copyright-and-Artificial-Intelligence-Part-2-Copyrightability-Report.pdf) are generally good resources. My reservations which I question about the documents themselves are in [[Misc/usco-guidance|USCO Guidance]].
- Part of a series on AI.
	- [[Misc/training-copyright|Copyright applied to training]]
	- [[Misc/generation-copyright|Copyright applied to output]]
	- [[Essays/normative-ai|Why copyright ought to be applied to AI]]
	- [[Misc/ai-integrity|Academic Integrity and AI]]
	- [[Essays/no-ai-fraud-act|No AI FRAUD Act bill, Section 230, and platforms]]

Okay, so ChatGPT lies, right? Well if we invert GenAI, it would make a /gen AI lmao