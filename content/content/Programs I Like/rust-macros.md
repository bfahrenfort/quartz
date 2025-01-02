---
title: "🦀 Rust Macros: Enough to be Dangerous"
tags:
  - "#programming"
  - misc
  - seedling
date: 2024-02-28
lastmod: 2024-08-31
---
Rust's [[Programs I Like/functional-programming|functional patterns]] are great, but sometimes you need to get weird. What if you want to construct a struct type, but you (the programmer) don't know what types the fields will be while you're writing this? Rust has you covered in situations just like this one.

It's important to note that **Rust does not have runtime dynamic typing**. All of this must be done at compile time. That's where the macro system comes in. Unlike C-style macros, it's not pure substitution, it's much more powerful: Rust inserts your code into the AST-manipulation step of the compiler. Rather than `rustc`, *you* parse the tokens and make your own types from them to then generate new tokens to pass to the compiler.
## Prerequisites
See the [Rust Book on procedural macros](https://doc.rust-lang.org/reference/procedural-macros.html). The syntax there is much more complicated because it uses `macro_rules!()`, but pay attention to what a crate has to have to use the macro features and the various types of macros.
## Cardinal syntax
Now, let's ignore the builtin `proc_macro` crate in favor of `proc_quote`. This crate's `quote` macro is the meat of a procedural macro, as it returns what becomes actual code at compile time (a TokenStream). Its expansions are limited but very powerful. Here's a simple example with boilerplate stripped out:

```rust
let name = &input.ident;
let output = quote! {
	impl #name {
		pub fn hello_world() -> String {
			"Hello World".to_string()
		}
	}
};
```

This macro creates a function at compile time as a member of the struct in `input` 's implementation that returns a `String` from the slice "Hello World". It expands `name` into the name of the input struct with the `#` operator. 

There's also a way to iterate `Vec<>` inside macros with the `*` repetition operator. This operator has two parts, a body and a separator, but I couldn't find a satisfactory tutorial online. Here's my attempt:
```rust
quote!{
	#(let #some_vec = 5;) *
}
```

Here, everything inside the `#()`  parenthetical will be repeatedly generated for each element of `some_vec`, with `#some_vec` expanding to the element at the current index. Presumably it contains the `Ident` s of some variable names of type `i32` that we want to declare and assign 5 to all of them in our macro. An expansion might look like:
```rust
let x = 5; let y = 5; let z = 5;
```

Note that there will not be a space after the last semicolon, because the space is only a separator (goes between the elements), where the semicolon is part of the body (goes in every element).
## \#\[proc_macro_derive()\]
[Rust traits](https://doc.rust-lang.org/book/ch10-02-traits.html) are powerful inheritance-like features that let the compiler know it can expect the "deriving" types to behave in the same way. What if you could generate trait implementations with a macro on the deriving type?

Note that the only thing that can be expanded inside a `quote!` is a base identifier. This is because you can do something like `#newtype_field_name.0` and the `.0` will remain in the generated code. Let's look at a more complicated example that uses that property along with the iterative :
```rust
#[proc_macro_derive()]
//...some boilerplate and parsing of the input struct
// stmts: Vec<Ident> containing the name of every field of the deriving (input) type that is also present in SomeType

let name = &input.ident;
let output = quote! {
	impl #name {
		pub fn from(f: SomeType) -> #name {
			#name {
				#(#stmts: f.#stmts), *
			}
		}
	}
};
```

This `from` method assumes that every field of SomeType is present in the input type and implements automatic conversion without needing to know either type's full implementation, just because the input type wanted to derive the trait `From`

### Further Reading
A good case study on deriving proc macros is my project `rsgistry`, which exports several with full boilerplate using `syn` and `quote!` for viewing [here](https://github.com/bfahrenfort/rsgistry/tree/main/macros) with details in the [[Projects/rsgistry|garden entry]].