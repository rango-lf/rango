import { PageLayout, SharedLayout } from "./quartz/cfg"
import * as Component from "./quartz/components"

// components shared across all pages
export const sharedPageComponents: SharedLayout = {
  head: Component.Head(),
  header: [],
  afterBody: [],
  footer: Component.Footer({
    links: {
       GitHub: "https://github.com/rango-lf",
      "Email": "mailto:rango.leefu@mail.utoronto.ca",
      "Linkedin": "https://www.linkedin.com/in/rango-lee-fu-7351b52b7/"
    },
    }),
}

// components for pages that display a single page (e.g. a single note)
export const defaultContentPageLayout: PageLayout = {
  beforeBody: [
    Component.ConditionalRender({
      component: Component.Breadcrumbs(),
      condition: (page) => page.fileData.slug !== "index",
    }),
    Component.ArticleTitle(),
    Component.ContentMeta(),
    Component.TagList(),
  ],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Flex({
      components: [
        {
          Component: Component.Search(),
          grow: true,
        },
        { Component: Component.Darkmode() },
        { Component: Component.ReaderMode() },
      ],
    }),
    Component.Explorer(),
  ],
  right: [
    Component.Graph(),
    Component.TableOfContents(),
    Component.Backlinks(),
    right: [
  Component.Graph(),
  Component.TableOfContents(),
  Component.Backlinks(),
  Component.Html({
    html: `<div style="display: flex; align-items: center; gap: 15px; background-color: #f5f5f5; padding: 5px 15px; border-radius: 8px; border: 1px solid #ddd;">
  <a href="https://WebRing.skule.ca/#https://rango-lf.github.io/rango-lf/?nav=prev" style="color: #333; text-decoration: none; font-size: 16px;">←</a>
  <a href="https://WebRing.skule.ca/#https://rango-lf.github.io/rango-lf/" target="_blank">
    <img src="https://WebRing.skule.ca/img/icon.svg" alt="SKULE WebRing" style="width: 34px; height: 24px; margin-bottom: -6px"/>
  </a>
  <a href="https://WebRing.skule.ca/#https://rango-lf.github.io/rango-lf/?nav=next" style="color: #333; text-decoration: none; font-size: 16px;">→</a>
</div>`
  }),
],
  ],
}

// components for pages that display lists of pages  (e.g. tags or folders)
export const defaultListPageLayout: PageLayout = {
  beforeBody: [Component.Breadcrumbs(), Component.ArticleTitle(), Component.ContentMeta()],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Flex({
      components: [
        {
          Component: Component.Search(),
          grow: true,
        },
        { Component: Component.Darkmode() },
      ],
    }),
    Component.Explorer(),
  ],
  right: [],
}
