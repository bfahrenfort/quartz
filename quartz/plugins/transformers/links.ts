import { QuartzTransformerPlugin } from "../types"
import {
  FullSlug,
  RelativeURL,
  SimpleSlug,
  TransformOptions,
  stripSlashes,
  simplifySlug,
  splitAnchor,
  transformLink,
} from "../../util/path"
import path from "path"
import { visit } from "unist-util-visit"
import { ElementContent, Root } from "hast"

type Sub = [RegExp, Appendable]
type Appendable = (Image | Emoji | Path) & Tagged
type Tagged = { type: "image" | "emoji" | "path" }
type Image = { src: string }
type Emoji = { text: string }
type Path = {
  code: string
  viewbox: string
}
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
export function Path(path: Path): Appendable {
  return path as Path & { type: "path" } // This errors if path is uncast. what
}

interface Options {
  /** How to resolve Markdown paths */
  markdownLinkResolution: TransformOptions["strategy"]
  /** Strips folders from a link so that it looks nice */
  prettyLinks: boolean
  openLinksInNewTab: boolean
  lazyLoad: boolean
  externalLinkIcon: boolean
  substitutions?: Sub[]
}

const defaultOptions: Options = {
  markdownLinkResolution: "absolute",
  prettyLinks: true,
  openLinksInNewTab: false,
  lazyLoad: false,
  externalLinkIcon: true,
}

export const CrawlLinks: QuartzTransformerPlugin<Partial<Options>> = (userOpts) => {
  const opts = { ...defaultOptions, ...userOpts }
  return {
    name: "LinkProcessing",
    htmlPlugins(ctx) {
      return [
        () => {
          return (tree: Root, file) => {
            const curSlug = simplifySlug(file.data.slug!)
            const outgoing: Set<SimpleSlug> = new Set()

            const transformOptions: TransformOptions = {
              strategy: opts.markdownLinkResolution,
              allSlugs: ctx.allSlugs,
            }

            visit(tree, "element", (node, _index, _parent) => {
              // rewrite all links
              if (
                node.tagName === "a" &&
                node.properties &&
                typeof node.properties.href === "string"
              ) {
                const href = node.properties.href
                let dest = href as RelativeURL
                let refIcon: ElementContent | null = null
                let matched = false
                // bfahrenfort: the 'every' lambda is like a foreach that allows continue/break
                opts.substitutions?.every(([regex, sub]) => {
                  const parts = href.match(regex)
                  if (parts == null) return true // continue

                  matched = true
                  dest = parts.slice(1).join("") as RelativeURL
                  switch (sub.type) {
                    case "image":
                      refIcon = {
                        type: "element",
                        tagName: "img",
                        properties: {
                          src: (sub as Image).src as FullSlug,
                          style: "max-width:1em;max-height:1em",
                        },
                        children: [],
                      }
                      break
                    case "emoji":
                      refIcon = { type: "text", value: (sub as Emoji).text }
                      break
                    case "path":
                      let vector = sub as Path
                      refIcon = {
                        type: "element",
                        tagName: "svg",
                        properties: {
                          "aria-hidden": "true",
                          class: "external-icon",
                          style: "max-width:1em;max-height:1em",
                          viewBox: vector.viewbox,
                        },
                        children: [
                          {
                            type: "element",
                            tagName: "path",
                            properties: {
                              d: vector.code,
                            },
                            children: [],
                          },
                        ],
                      }
                      break
                  }
                  return false // break
                })
                node.properties.href = dest
                const classes = (node.properties.className ?? []) as string[]
                const isExternal = URL.canParse(dest)
                classes.push(isExternal || matched ? "external" : "internal")

                if ((isExternal && opts.externalLinkIcon) || matched) {
                  node.children.push(
                    refIcon != null
                      ? refIcon
                      : {
                          type: "element",
                          tagName: "svg",
                          properties: {
                            "aria-hidden": "true",
                            class: "external-icon",
                            style: "max-width:0.8em;max-height:0.8em",
                            viewBox: "0 0 512 512",
                          },
                          children: [
                            {
                              type: "element",
                              tagName: "path",
                              properties: {
                                d: "M320 0H288V64h32 82.7L201.4 265.4 178.7 288 224 333.3l22.6-22.6L448 109.3V192v32h64V192 32 0H480 320zM32 32H0V64 480v32H32 456h32V480 352 320H424v32 96H64V96h96 32V32H160 32z",
                              },
                              children: [],
                            },
                          ],
                        },
                  )
                }

                // Check if the link has alias text
                if (
                  node.children.length === 1 &&
                  node.children[0].type === "text" &&
                  node.children[0].value !== dest
                ) {
                  // Add the 'alias' class if the text content is not the same as the href
                  classes.push("alias")
                }
                node.properties.className = classes

                if (isExternal && opts.openLinksInNewTab) {
                  node.properties.target = "_blank"
                }

                // don't process external links or intra-document anchors
                const isInternal = !(URL.canParse(dest) || dest.startsWith("#"))
                if (isInternal) {
                  dest = node.properties.href = transformLink(
                    file.data.slug!,
                    dest,
                    transformOptions,
                  )

                  // url.resolve is considered legacy
                  // WHATWG equivalent https://nodejs.dev/en/api/v18/url/#urlresolvefrom-to
                  const url = new URL(dest, "https://base.com/" + stripSlashes(curSlug, true))
                  const canonicalDest = url.pathname
                  let [destCanonical, _destAnchor] = splitAnchor(canonicalDest)
                  if (destCanonical.endsWith("/")) {
                    destCanonical += "index"
                  }

                  // need to decodeURIComponent here as WHATWG URL percent-encodes everything
                  const full = decodeURIComponent(stripSlashes(destCanonical, true)) as FullSlug
                  const simple = simplifySlug(full)
                  outgoing.add(simple)
                  node.properties["data-slug"] = full
                }

                // rewrite link internals if prettylinks is on
                if (
                  opts.prettyLinks &&
                  isInternal &&
                  node.children.length === 1 &&
                  node.children[0].type === "text" &&
                  !node.children[0].value.startsWith("#")
                ) {
                  node.children[0].value = path.basename(node.children[0].value)
                }
              }

              // transform all other resources that may use links
              if (
                ["img", "video", "audio", "iframe"].includes(node.tagName) &&
                node.properties &&
                typeof node.properties.src === "string"
              ) {
                if (opts.lazyLoad) {
                  node.properties.loading = "lazy"
                }

                if (!URL.canParse(node.properties.src)) {
                  let dest = node.properties.src as RelativeURL
                  console.log(dest)
                  dest = node.properties.src = transformLink(
                    file.data.slug!,
                    dest,
                    transformOptions,
                  )
                  console.log(dest)
                  node.properties.src = dest
                }
              }
            })

            file.data.links = [...outgoing]
          }
        },
      ]
    },
  }
}

declare module "vfile" {
  interface DataMap {
    links: SimpleSlug[]
  }
}
