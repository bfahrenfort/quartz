---
title: Automation and the Law
tags:
  - legal
  - programming
  - difficulty-easy
  - project
  - python
  - powertoys
date: 2024-07-08
lastmod: 2024-07-13
draft: false
---
I think that knowing or having access to the knowledge to learn basic automation is valuable to the practice of law, and this entry is real-world proof of that. None of that "Here's how AI can increase your productivity!" nonsense. Even if you don't want to spend the time learning to code, decomposing the task at hand into a sequence of steps can help you plan how to attack it or spot areas to improve your efficiency.

> [!hint]
> If you're interested in learning automation, I'd recommend either Python or Microsoft Power Automate. Python is my favorite general purpose programming language (and the subject of this entry), and Power Automate is a very user-friendly graphical automation program for windows as part of the PowerToys package. Either can be picked up in a couple of weekends. Or if the Rust community is to be believed, [over your lunch break](https://lunch.rs/).

I work at a law firm as a summer associate. (reminder that **none of the opinions on this site reflect those of my employer**). And that means being occasionally assigned grunt work.

Case in point: Today, I was asked to research info on semiconductors from product documentation. The other side had produced a list of products (not just the accused instrumentalities), and someone at my firm had compiled their names, manufacturers, and product numbers from the Request for Production ("RFP") into a spreadsheet. This spreadsheet was **500 rows long**. 

My job was to:

- Google search each product number
- Find the documentation
- Grab the one number we needed for every line and add it to the spreadsheet
- If the number was above a certain threshold, mark that in the spreadsheet

Doing this for 500 rows would have taken days of my time. And this wasn't the only matter I was working on; I had about four balls in the air on the week this took place. 

But the stars aligned.
- The product documentation was available in plaintext on the manufacturer's website;
- The part numbers were nicely laid out in a spreadsheet; and
- The website links were easily computer generated with the information before me.
## Mindset
Those three facts in conjunction where what tipped off my brain that this could be automated. Each represents a different component of the task at hand. My brain works like this due to my computer science education, but it can be gained through experience or consciously applied if you're willing to do so. Each of these three components are explained below.
- Sidebar: there's also the baseline knowledge that a spreadsheet is easily automatable. You can theoretically step through the elements of a Word document or PDF in code, but it limits your options for what automation platform you choose, and requires MUCH more background knowledge of Microsoft/Adobe internals to make work. Spreadsheets, .txt, and .csv are the formats that instantly come to mind because they can be consumed in succesive/"iterative" bite size chunks by a program (your automation). 
## Structure
The potentially-ethically-protected code is left as an exercise for the reader, but my process and dependencies are described below. The outline of what I wanted the computer to do for me was taking shape before I even downloaded a Python interpreter.

```
Read the spreadsheet with the part numbers into a representation of that spreadsheet inside the program
For each part number...
    Create a website link by substituting in the part number into a template
    Grab the page at that link
    Find the data I wanted, since it's in the same place on every page
    modify the representation of the spreadsheet with the data
Write the representation of the spreadsheet out into a real spreadsheet file
```

The component model used here is what I'd consider the most important part of learning automation.

At the component level, this program looks very simple, which allows you to write a very simple implementation of the steps needed. That's solely because of how the data and the parameters are stored for input. Tacking on more components to retrieve containers of the information and finding the information in those containers would add complexity. So if faced with the choice, I prefer to manually convert a bad format for automation into a better one rather than try to wrangle what I want in code.
## Product documentation, or the data
I'm working a bit backwards here, but the data is goal, or the information needed to obtain/output by the automation.

If the data is on a website in plain text, you can probably just take it with automation software if you give it the link and where to look. You can verify this by opening the browser's inspector (F12 on Chrome and Firefox) and selecting the HTML element with the data on the page. It's easiest if that element has a unique id or class, but combinations of class + element positioning in the hierarchy can also work, and if not then you can even go more advanced with relative element positioning and content queries. 

- The relevant easily googleable concepts for each of those approaches are **css selectors**, **xpath**, and **jQuery**, in increasing order of finickiness.

This project needed jQuery, as I needed the element next on the page after the title of the data I needed (so I queried for an element containing the text, and then got the next element from that position).

Python has a community library called `pyquery`, which abstracts jQuery into native python function calls.
## Part numbers, or the parameters

This is the information necessary to tell your automation how to get to the data. In this case, each part number had a specific datasheet benchmark associated with it, and it was the only portion of the URL that changed (see below), so 

Python has a massively popular library called `pandas`, which is used for working with large datasets and commonly seen in AI training. An optional dependency allows pandas to read in data from Excel spreadsheets. I then iterated over the product number row of the spreadsheet to be able to perform my acquisition and storage for every product number in the sheet.
## Website links, or the acquisition.

There's always going to be at least one intermediate step using the parameters to pull the data into your program. Here, it was creating a URL and downloading the webpage from it.

The URLs looked like this:

```
https://somewebsite.com/documentation/partnumber#specifications
```

So I used an **f-string** expression in python to go from template -> URL and then queried from the URL:

```python
# read part number from spreadsheet, let's say...
pNumber = 'ABC' # performed for every part number in the sheet

f'https://somewebsite.com/documentation/{pNumber}#specifications' 
# the above will return:
'https://somewebsite.com/documentation/ABC#specifications'

# get the webpage, run jQuery according to parameters, repeat this whole process for every part number
```
## Final thoughts
This would have taken days of my time manually, which is probably why I was assigned it (low-rate worker for higher-hour work saves the client money). Instead, I billed one hour creating the script, hit run, and went to the bathroom. When I came back, I had the data. 

I could have automated the marking process as well, but there turned out to be some messiness with some data on the site being "5 to 30" or similar instead of just "5", so I did that myself. It took me maybe 5 minutes with manual use of Excel filters and all the other things I'm actually supposed to be good at for my job. 

My component model very similar to how educational programs teach children how to code, with imperative steps "written" using blocks that each accomplish a function in a sequence. I hope that it inspires you to look at your work assignments with a similar thought process. It's simple, sure. But sometimes that small simplicity leads to big cost and time savings in an immediate, tangible way.