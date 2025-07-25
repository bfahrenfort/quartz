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
    generateSocialImages: false, // TODO: tweak and enable
    theme: {
      fontOrigin: "local",
      cdnCaching: false,
      typography: {
        header: "Atkinson Mono",
        body: "Inter",
        code: "Fira Code",
      },
      colors: {
        lightMode: {
          light: "#f0f0f2", // Backg
          lightgray: "#d8d8da", // Code Backg
          gray: "#868889", // Unread nodes and subtitles
          darkgray: "#202225", // Text
          dark: "#202225", // Code text
          secondary: "#027b1f", // Links, title, and current node
          tertiary: "#185ecd", // Visited nodes
          highlight: "rgba(143, 159, 169, 0.15)",
          textHighlight: "#fff23688",
        },
        darkMode: {
          light: "#202225", // Backg
          lightgray: "#383b3d", // Code Backg
          gray: "#686D82", // Unread nodes and subtitles
          darkgray: "#f0f0f2", // Text
          dark: "#f0f0f2", // Code text
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
