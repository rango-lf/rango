import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

/**
 * Quartz 4 Configuration
 *
 * See https://quartz.jzhao.xyz/configuration for more information.
 */
const config: QuartzConfig = {
  configuration: {
    pageTitle: "rango lf",
    pageTitleSuffix: "rango lf",
    enableSPA: true,
    enablePopovers: true,
    analytics: {
      provider: "plausible",
    },
    locale: "en-US",
    baseUrl: "rango lf",
    ignorePatterns: ["private", "templates", ".obsidian"],
    defaultDateType: "modified",
    theme: {
      fontOrigin: "googleFonts",
      cdnCaching: true,
      typography: {
        header: "VT323",
        body: "IBM Plex Mono",
        code: "IBM Plex Mono",
      },
      colors: {
        lightMode: {
          light:      "#dddddd",   // window background (classic Mac gray)
          lightgray:  "#aaaaaa",   // borders / dividers
          gray:       "#888888",   // secondary text
          darkgray:   "#222222",   // body text
          dark:       "#000000",   // headings / strong text
          secondary:  "#000080",   // links / accents (classic Mac blue)
          tertiary:   "#0000aa",   // hover accents
          highlight:  "rgba(0, 0, 128, 0.12)", // selection / highlight
          textHighlight: "#ffff00",
        },
        darkMode: {
          light:      "#1a1a2e",
          lightgray:  "#333355",
          gray:       "#7777aa",
          darkgray:   "#ccccdd",
          dark:       "#ffffff",
          secondary:  "#88aaff",
          tertiary:   "#aaccff",
          highlight:  "rgba(136, 170, 255, 0.15)",
          textHighlight: "#ffffaa",
        },
      },
    },
  },
  plugins: {
    transformers: [
      Plugin.FrontMatter(),
      Plugin.CreatedModifiedDate({
        priority: ["frontmatter", "git", "filesystem"],
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
      Plugin.CrawlLinks({ markdownLinkResolution: "shortest" }),
      Plugin.Description(),
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
      }),
      Plugin.Assets(),
      Plugin.Static(),
      Plugin.Favicon(),
      Plugin.NotFoundPage(),
      // Comment out CustomOgImages to speed up build time
      Plugin.CustomOgImages(),
    ],
  },
}

export default config
