---
title: A Working Latex Install that Doesn't Suck
tags:
  - linux
  - difficulty-easy
  - programming
  - writing
date: 2024-08-15
lastmod: 2024-08-15
draft: false
---
$\LaTeX$ is a programming language and environment well-suited to academic writing (and it can be embedded in Quartz, too!). There are many different ways to use it in your work. The absolute easiest will be [Overleaf](https://overleaf.com), an online collaborative editor with many document templates and all common packages available. But for more specific use cases, or offline work, a latex "distribution" can be installed on your computer for you to manage your own packages. 

Now, system packages are seamless install-wise, but for latex distros specifically, they can be hard to navigate, especially on a distro like Arch which has rearranged its latex packages. Below is my guide for a no-frills, opinionated, "I want to use LaTeX" installation, complete with explanations for all the choices along the way.

## TLDR

```sh
$ sudo pacman --needed -S texlive-basic texlive-bin texlive-binextra texlive-bibtexextra texlive-latex texlive-latexrecommended okular neovim
$ nvim afile.tex
$ pdflatex afile.tex
```

## SETUP

```bash
$ sudo pacman -Qsq ".*texlive.*|.*latex.*" # List all installed packages matching the regex
texlive-basic
texlive-bibtexextra
texlive-bin
texlive-binextra
texlive-latex
texlive-latexrecommended
$
```

Installing all of the above will allow you to create `.tex` files and compile them to various outputs (PDF, HTML) with `latex file.tex` or `pdflatex file.tex`. 

Install `texstudio` for a seamlessly integrated editor. Otherwise, read on for an [[Programs I Like/code-editors#Neovim|nvim]] configuration recipe.

If you're like me and like to modify where a program stores things to comport with the XDG basedir spec, please review the [table of environment variables](https://wiki.archlinux.org/title/TeX_Live#texmf_trees_and_Kpathsea) on the archwiki.
## Editor
[VimTeX](https://github.com/lervag/vimtex) is a great plugin supporting live view, inverse search, and more. Lazy config:

```lua
{
	"lervag/vimtex",
	lazy = false,
	init = function()
		vim.g.vimtex_view_method = "general"
	end,
},
```

It also requires global variables to be set up correctly for its features:

```lua
-- Your nvim distro may have a native way to set globals, may also be done with vimscript
-- Modify both lines as needed for your chosen viewer
vim.g.vimtex_view_general_viewer = "okular"
vim.g.vimtex_view_general_options = "--unique file:@pdf#src:@line@tex" -- Goes in Okular -> Options -> Configure Okular -> Editor -> Custom -> command
```

## Explanation of packages
First off, I use TeXlive over MikTeX for security and feature reasons. I recommend `pdflatex` because of the [comparison by Overleaf](https://www.overleaf.com/learn/latex/Articles/The_TeX_family_tree%3A_LaTeX%2C_pdfTeX%2C_XeTeX%2C_LuaTeX_and_ConTeXt). And Okular is a fairly feature-packed but still performant pdf viewer/annotator, pretty common over Vimtex's other supported alternatives like Zathura and muPDF.

Certain packages house the basic commands used to configure your install or generate files. Use `sudo pacman -F $(which someprogram)` to learn which package installs a specific command. Those are:

```
texlive-basic
texlive-bin
texlive-binextra
```

The *TeX* packages needed to generate most files are housed in other *arch* packages. You can find which CPAN is in which arch package with `tlmgr info thepackagename | grep collection`. It'll return `collection-somename`, which means that you need to install `texlive-somename` with pacman. I needed to install all these to resolve warnings and errors:

```
texlive-bibtexextra
texlive-latex
texlive-latexrecommended
```

Hope that helps!