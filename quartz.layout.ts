import { PageLayout, SharedLayout } from "./quartz/cfg"
import * as Component from "./quartz/components"

// components shared across all pages
export const sharedPageComponents: SharedLayout = {
  head: Component.Head(),
  header: [],
  afterBody: [Component.Graph(), Component.Backlinks()],
  footer: Component.Footer({
    links: {
      "Source code": "https://github.com/bfahrenfort/quartz",
      RSS: "https://be-far.com/index.xml",
    },
    //remark_config: config.plugins.transformers.find((e) => {e.name === "Remark42"})?.options
  }),
}

// components for pages that display a single page (e.g. a single note)
export const defaultContentPageLayout: PageLayout = {
  beforeBody: [
    Component.Breadcrumbs(),
    Component.ArticleTitle(),
    Component.ContentMeta(),
    Component.TagList(),
  ],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Search(),
    Component.Darkmode(),
    Component.DesktopOnly(
      Component.Explorer({
        sortFn: (a, b) => {
          const emojis =
            /([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g
          const a_name = a.name.replace(emojis, "").trim()
          const a_dname = a.displayName.replace(emojis, "").trim()
          const b_name = b.name.replace(emojis, "").trim()
          const b_dname = b.displayName.replace(emojis, "").trim()
          // Sort order: folders first, then files. Sort folders and files alphabetically
          if (/^.*Home$/.test(a_dname)) {
            return -1
          }
          if (/^.*Home$/.test(b_dname)) {
            return 1
          }
          if ((!a.file && !b.file) || (a.file && b.file)) {
            // numeric: true: Whether numeric collation should be used, such that "1" < "2" < "10"
            // sensitivity: "base": Only strings that differ in base letters compare as unequal. Examples: a ≠ b, a = á, a = A
            return a_dname.localeCompare(b_dname, undefined, {
              numeric: true,
              sensitivity: "base",
            })
          }
          if (a.file && !b.file) {
            return 1
          } else {
            return -1
          }
        },
      }),
    ),
    //Component.TableOfContents(),
  ],
  right: [
    //Component.MobileOnly(Component.Explorer()),
    Component.TableOfContents(),
  ],
}

// components for pages that display lists of pages  (e.g. tags or folders)
export const defaultListPageLayout: PageLayout = {
  beforeBody: [Component.Breadcrumbs(), Component.ArticleTitle(), Component.ContentMeta()],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Search(),
    Component.Darkmode(),
    Component.Explorer(),
  ],
  right: [],
}
