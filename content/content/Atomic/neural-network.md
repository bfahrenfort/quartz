---
title: Neural Network
tags:
  - ai
  - programming
  - glossary
  - misc
date: 2024-11-03
lastmod: 2024-11-14
draft: true
---
A neural network in computer science is a directed graph of nodes, each containing a weight (number). There are multiple "layers" of nodes ("neurons"): an input layer with a node for each input parameter, an output layer with nodes for possible outputs, and any number of layers in between. Each layer is influenced by the one before it. The manner in which the previous layer influences the next is determined by training. 

The value at a node depends on:
- The values at the nodes previous layers which the present node is connected to;
- Modified by the "weights" stored at the current node for each of those connections; and
- The overall "bias" number of the present node (like a weight forced on its connections to the next layer). 

==backpropagation==

As is everything in data science, it's a misnomer, because it's meant to be an analogy for an interconnected web of synapses in our brains if you look at a drawing of it on a whiteboard. In reality, the mechanics of its implementation are nothing like how a human brain processes information.

## Further Reading
[Scott Spencer - Neural Networks: The Real Basics](http://web.archive.org/web/20210421074546/https://ssp3nc3r.github.io/post/neural-networks-the-real-basics/)
- Archive link because the math is broken on live.