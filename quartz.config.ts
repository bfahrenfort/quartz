import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

/**
 * Quartz 4.0 Configuration
 *
 * See https://quartz.jzhao.xyz/configuration for more information.
 */
const config: QuartzConfig = {
  configuration: {
    defaultDateType: "modified",
    pageTitle: "🌱 Projects 🌓 Privacy",
    enableSPA: true,
    enablePopovers: false, // https://github.com/jackyzha0/quartz/issues/890
    analytics: null,
    locale: "en-US",
    baseUrl: "be-far.com",
    ignorePatterns: ["private", "**/templates"],
    theme: {
      fontOrigin: "googleFonts",
      cdnCaching: true,
      typography: {
        header: "Monaspace Neon",
        body: "Inter",
        code: "Fira Code",
      },
      colors: {
        lightMode: {
          light: "#F2F2F2", // Backg
          lightgray: "#bcc0cc", // Code Backg
          gray: "#8c8fa1", // Unread nodes and subtitles
          darkgray: "#45485f", // Text
          dark: "#4c4f69", // Code text
          secondary: "#325738", // Links, title, and current node
          tertiary: "#0E8390", // Visited nodes
          highlight: "rgba(143, 159, 169, 0.15)",
          textHighlight: "#fff23688",
        },
        darkMode: {
          light: "#131829", // Backg
          lightgray: "#70778F", // Code Backg
          gray: "#686D82", // Unread nodes and subtitles
          darkgray: "#cdd6f4", // Text
          dark: "#D2DAF5", // Code text
          secondary: "#a6e3a1", // Links, title, and current node
          tertiary: "#89dceb", // Visited nodes
          highlight: "rgba(143, 159, 169, 0.15)",
          textHighlight: "#b3aa0288",
        },
      },
    },
  },
  plugins: {
    transformers: [
      Plugin.FrontMatter(),
      Plugin.CreatedModifiedDate({
        priority: ["frontmatter", "git"],
      }),
      Plugin.SyntaxHighlighting({
        theme: {
          light: "github-light",
          dark: "github-dark",
        },
        keepBackground: false,
      }),
      Plugin.ObsidianFlavoredMarkdown({ enableInHtmlEmbed: false }),
      Plugin.GitHubFlavoredMarkdown(),
      Plugin.TableOfContents(),
      Plugin.CrawlLinks({
        markdownLinkResolution: "shortest",
        substitutions: [
          [
            /Qx!(.+)/, // External quartz link, form Qx!https://quartz.jzhao.xyz
            {
              type: "element",
              tagName: "img",
              properties: {
                src: "/static/external-quartz.png",
                style: "max-width:1em;max-height:1em;margin:0px 2px",
              },
              children: [],
            },
          ],
          [/Dg!(.*)/, "🪴"], // Digital gardens, Dg!https://maggieappleton.com/
        ],
      }),
      Plugin.Description(),
      Plugin.Remark42({
        host: "https://be-far.com/comments",
        site_id: "remark",
        theme: "dark",
        no_footer: true,
      }),
      Plugin.Latex({ renderEngine: "katex" }),
    ],
    filters: [Plugin.RemoveDrafts()],
    emitters: [
      Plugin.AliasRedirects(),
      Plugin.ComponentResources(),
      Plugin.ContentPage(),
      Plugin.FolderPage(),
      Plugin.TagPage(),
      Plugin.ContentIndex({
        enableSiteMap: true,
        enableRSS: true,
        rssFullHtml: true,
        rssLimit: 50,
        feedDirectories: ["index", "Updates"], // For a feed for only pages in content/Folder/, add "Folder" to the array
      }),
      Plugin.Assets(),
      Plugin.Static(),
      Plugin.NotFoundPage(),
    ],
  },
}

export default config
