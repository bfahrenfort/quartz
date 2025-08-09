---
title: Neural Network
tags:
  - ai
  - programming
  - glossary
  - misc
date: 2024-11-03
lastmod: 2025-08-06
draft: false
---
A neural network in computer science is a directed graph of nodes, each containing a weight (number). There are multiple "layers" of nodes ("neurons"): an input layer with a node for each input parameter, an output layer with nodes for possible outputs, and any number of layers in between. Each layer is influenced by the one before it. The manner in which the previous layer influences the next is determined by training. 

The value at a node depends on:
- The values at the nodes previous layers which the present node is connected to;
- Each value from backward connections being modified by the "weights" stored at the current node for each of those connections; and
- The overall "bias" number of the present node applied to each of the modified values (like weights, but only one weight that applies to all of its forward connections). 

"Backpropagation" is how the network updates its weights in a near-optimal way, by trying to estimate what changes to the weights will have the most effect on the correctness of the output. The process takes the functions which compute how a value changes going forward through the network from the input to the output, and multiplies them with each other and their derivatives to create a change value. Mathematically, this is the chain rule from calculus: you can express the derivative of a nested function application $f(g(x))$ as $f'(g(x))g'(x)$, so if you think of each layer of the network being a deeper level of function nesting, you just go down the chain from back to front, evaluating the innermost functions first. As the type of network gets more complex (like if a node has more outgoing connections than just to the next layer), this math gets more complex as well.

As is everything in data science, it's a misnomer, because it's meant to be an analogy for an interconnected web of synapses in our brains if you look at a drawing of it on a whiteboard. In reality, the mechanics of its implementation are nothing like how a human brain processes information.

## Further Reading
[Scott Spencer - Neural Networks: The Real Basics](https://web.archive.org/web/20210421074546/https://ssp3nc3r.github.io/post/neural-networks-the-real-basics/)
- Archive link because the math is broken on live.