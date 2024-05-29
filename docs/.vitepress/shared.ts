import { defineConfig, HeadConfig } from 'vitepress'

export const shared = defineConfig({
  title: 'vitepress-template',
  cleanUrls: true,
  lastUpdated: true,
  markdown: {
    lineNumbers: true
  },
  sitemap: {
    hostname: 'http://localhost:5173'
  },
  transformHead: ({ pageData }) => {
    const head: HeadConfig[] = []

    head.push(['meta', { name: 'keywords', content: pageData.frontmatter.keywords }])
    head.push(['meta', { name: 'creator', content: pageData.frontmatter.creator }])
    head.push(['meta', { name: 'publisher', content: pageData.frontmatter.publisher }])
    head.push(['meta', { name: 'author', content: pageData.frontmatter.author }])
    head.push(['meta', { property: 'og:title', content: pageData.frontmatter.title }])
    head.push(['meta', { property: 'og:description', content: pageData.frontmatter.description }])
    head.push(['meta', { property: 'og:locale', content: pageData.frontmatter.locale }])
    head.push(['meta', { name: 'twitter:title', content: pageData.frontmatter.title }])
    head.push(['meta', { name: 'twitter:description', content: pageData.frontmatter.description }])

    return head
  },
  head: [
    ['meta', { charset: 'utf-8' }],
    ['meta', { name: 'referrer', content: 'no-referrer-when-downgrade' }],
    ['meta', { name: 'viewport', content: 'width=device-width, initial-scale=1' }],
    ['meta', { name: 'application-name', content: 'vitepress-template' }],
    ['meta', { name: 'generator', content: 'Vite' }],
    ['meta', { name: 'referrer', content: 'origin-when-cross-origin' }],
    ['meta', { name: 'color-scheme', content: 'light' }],
    ['meta', { name: 'format-detection', content: 'telephone=no, address=no, email=no' }],
    ['meta', { name: 'theme-color', media: '(prefers-color-scheme: light)', content: 'white' }],
    ['meta', { name: 'theme-color', media: '(prefers-color-scheme: dark)', content: 'black' }],
    ['meta', { property: 'og:url', content: 'http://localhost:5173' }],
    ['meta', { property: 'og:site_name', content: 'vitepress-template' }],
    ['meta', { property: 'og:image:url', content: 'http://localhost:5173/meta-tags/page-view.webp' }],
    ['meta', { property: 'og:image:width', content: '1800' }],
    ['meta', { property: 'og:image:height', content: '1600' }],
    ['meta', { property: 'og:image:alt', content: 'Alternative description' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { name: 'twitter:site:id', content: '1467726470533754880' }],
    ['meta', { name: 'twitter:creator', content: '@twitter' }],
    ['meta', { name: 'twitter:creator:id', content: '1467726470533754880' }],
    ['meta', { name: 'twitter:card', content: 'app' }],
    ['meta', { name: 'twitter:image', content: 'http://localhost:5173/meta-tags/page-view.webP/' }],
    ['meta', { property: 'twitter:image:width', content: '1800' }],
    ['meta', { property: 'twitter:image:height', content: '1600' }],
    ['meta', { name: 'twitter:image:alt', content: 'Alternative description' }],
    ['meta', { name: 'robots', content: 'noindex, follow, nocache' }],
    ['meta', { name: 'referrer', content: 'no-referrer-when-downgrade' }],
    ['meta', { name: 'googlebot', content: 'index, nofollow, noimageindex, max-video-preview:-1, max-image-preview:large, max-snippet:-1' }],
    ['link', { rel: 'canonical', href: 'http://localhost:5173' }],
    ['link', { rel: 'alternate', hreflang: 'en-US', href: 'http://localhost:5173' }],
    ['link', { rel: 'alternate', media: 'only screen and (max-width: 600px)', href: `/meta-tags/page-view.webp` }],
    ['link', { rel: 'manifest', href: '/manifest.webmanifest' }],
    ['link', { rel: 'shortcut icon', href: '/favicons/vite-favicon.svg', type: 'svg+xml' }],
    ['link', { rel: 'icon', href: '/favicons/vite-favicon.svg', type: 'svg+xml' }],
    ['link', { rel: 'apple-touch-icon', sizes: '180x180', href: '/favicons/vite-apple-touch.svg' }]
  ],
  themeConfig: {
    logo: './images/general/logo.svg',
    outline: 'deep',
    aside: true,
    socialLinks: [
      {
        icon: 'github',
        link: 'https://github.com/krudi/vitepress-template'
      }
    ],
  }
})
