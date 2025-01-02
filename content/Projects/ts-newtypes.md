---
title: Newtypes in Typescript
tags:
  - programming
  - difficulty-easy
  - project
date: 2024-12-23
lastmod: 2024-12-23
draft: false
---
These are a few behaviors I've implemented when contributing to [[Projects/Obsidian/digital-garden|Quartz]] and other typescript projects when I'm looking for the flexibility of giving the user a few options that I want to represent distinctly, but have similar or overlapping "shapes" in that they're all strings, all numbers, etc.

I place the code snippets on this page only in the public domain. License for other pages may (and does) vary.
## The situation
Let's say we have a type which there are multiple different categories for. Sometimes, we might want to define a function that does different things based on what kind of vehicle it is. Other times, we might want to validate that the user can actually never pass in a motorcycle to a function that expects a car, etc.
## Traditional type guards
This approach works well when you know that the types have different names for values or some values that don't overlap.
```ts
type Vehicle = Car | Motorcycle
type Car = { make: string, model: string, doors: number }
type Motorcycle = { make: string, model: string, seats: number }

function isCar(e: Vehicle): boolean {
	return Object.hasOwn(e, "doors")
}
function isMotorcycle(e: Vehicle): boolean {
	return Object.hasOwn(e, "seats")
}

function doSomething(e: Vehicle) {
	if (isCar(e)) { console.log("car") }
	else if (isMotorcycle(e)) { console.log("motorcycle") }
	else { console.log("unknown vehicle") }
}
```
## Validation with formal tagged types
Here, the types have identical primitive types, and we need to ensure a programmer down the line doesn't pass one to a function that expects the other. [This issue on the Typescript repo](https://github.com/Microsoft/TypeScript/issues/4895#issuecomment-401067935) explains the implementation very well, with use of a generic parameter tag created with  `Symbol()` to discriminate the types at runtime.
## My take on discriminating unions
This enables ergonomics like Rust tuple structs, which I think are very intuitive. The types defined can overlap or not; doesn't matter. The end result is that anything of the union type can be constructed intuitively, especially for types that contain a single value, and in your code you can easily modify behavior based on each. There's also no need to write type guards. Of course, whether tracking your own `type` field is worth it in your use case will determine whether it's viable to use this approach.
```ts
type Appendable = (Image | Emoji) & Tag
type Tag = { type: "image" | "emoji" }

type Image = { src: string }
type Emoji = { text: string }

export function Image(src: string | Image): Appendable {
  if (typeof src == "object") {
    return src as Image & { type: "image" }
  }
  return { src: src, type: "image" }
}
export function Emoji(text: string | Emoji): Appendable {
  if (typeof text == "object") {
    return text as Emoji & { type: "emoji" }
  }
  return { text: text, type: "emoji" }
}

export function doSomething(e: Appendable) {
	switch(e.type) {
		case "image":
			break
		case "emoji":
			break
	}
}

// Someone else can write these easily:
doSomething(Image("https://site.com/image.png"))
doSomething(Emoji("🪴"))
```