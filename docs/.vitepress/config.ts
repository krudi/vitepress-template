import { defineConfig } from 'vitepress'
import { name, description, keywords, website, github } from './settings'
import { nav } from './nav'
import { sidebar } from './sidebar'

export default defineConfig({
  title: name,
  description: description,
  cleanUrls: true,
  lastUpdated: true,
  markdown: {
    lineNumbers: true
  },
  head: [
    ['meta', { name: 'referrer', content: 'no-referrer-when-downgrade' }],
    [
      'meta',
      { name: 'viewport', content: 'width=device-width, initial-scale=1' }
    ],
    ['meta', { name: 'application-name', content: name }],
    ['meta', { name: 'generator', content: 'Vite' }],
    ['meta', { name: 'keywords', content: `${keywords}` }],
    ['meta', { name: 'referrer', content: 'origin-when-cross-origin' }],
    ['meta', { name: 'color-scheme', content: 'light' }],
    ['meta', { name: 'creator', content: 'Creator' }],
    ['meta', { name: 'publisher', content: 'Publisher' }],
    [
      'meta',
      {
        name: 'format-detection',
        content: 'telephone=no, address=no, email=no'
      }
    ],
    [
      'meta',
      {
        name: 'theme-color',
        media: '(prefers-color-scheme: light)',
        content: 'white'
      }
    ],
    [
      'meta',
      {
        name: 'theme-color',
        media: '(prefers-color-scheme: dark)',
        content: 'black'
      }
    ],
    ['meta', { name: 'author', content: 'Author' }],
    ['link', { rel: 'author', href: `${website}` }],
    ['meta', { property: 'og:title', content: name }],
    ['meta', { property: 'og:description', content: `${description}` }],
    ['meta', { property: 'og:url', content: `${website}` }],
    ['meta', { property: 'og:site_name', content: name }],
    ['meta', { property: 'og:locale', content: 'en-US' }],
    [
      'meta',
      {
        property: 'og:image:url',
        content: `${website}/meta-tags/page-view.webp`
      }
    ],
    ['meta', { property: 'og:image:width', content: '1800' }],
    ['meta', { property: 'og:image:height', content: '1600' }],
    ['meta', { property: 'og:image:alt', content: 'Alternative description' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { name: 'twitter:site:id', content: '1467726470533754880' }],
    ['meta', { name: 'twitter:creator', content: '@twitter' }],
    ['meta', { name: 'twitter:creator:id', content: '1467726470533754880' }],
    ['meta', { name: 'twitter:title', content: name }],
    ['meta', { name: 'twitter:description', content: `${description}` }],
    ['meta', { name: 'twitter:card', content: 'app' }],
    [
      'meta',
      { name: 'twitter:image', content: `${website}/meta-tags/page-view.webp` }
    ],
    ['meta', { property: 'twitter:image:width', content: '1800' }],
    ['meta', { property: 'twitter:image:height', content: '1600' }],
    ['meta', { name: 'twitter:image:alt', content: 'Alternative description' }],
    ['meta', { name: 'robots', content: 'noindex, follow, nocache' }],
    ['meta', { name: 'referrer', content: 'no-referrer-when-downgrade' }],
    [
      'meta',
      {
        name: 'googlebot',
        content:
          'index, nofollow, noimageindex, max-video-preview:-1, max-image-preview:large, max-snippet:-1'
      }
    ],
    ['link', { rel: 'canonical', href: `${website}` }],
    ['link', { rel: 'alternate', hreflang: 'en-US', href: `${website}` }],
    [
      'link',
      {
        rel: 'alternate',
        media: 'only screen and (max-width: 600px)',
        href: `/meta-tags/page-view.webp`
      }
    ],
    ['link', { rel: 'manifest', href: '/manifest.webmanifest' }],
    [
      'link',
      {
        rel: 'shortcut icon',
        href: '/favicons/vite-favicon.svg',
        type: 'svg+xml'
      }
    ],
    [
      'link',
      { rel: 'icon', href: '/favicons/vite-favicon.svg', type: 'svg+xml' }
    ],
    [
      'link',
      {
        rel: 'apple-touch-icon',
        sizes: '180x180',
        href: '/favicons/vite-apple-touch.svg'
      }
    ]
  ],
  themeConfig: {
    logo: './images/general/logo.svg',
    siteTitle: 'Documentation',
    outlineTitle: 'Navigation',
    outline: 'deep',
    aside: true,
    langMenuLabel: 'Change Language',
    returnToTopLabel: 'Return to top',
    sidebarMenuLabel: 'Menu',
    darkModeSwitchLabel: 'Appearance',
    lastUpdatedText: 'Updated Date',
    search: {
      provider: 'local'
    },
    editLink: {
      pattern: `${github}/edit/main/docs/:path`,
      text: 'Edit this page on GitHub'
    },
    nav: nav(),
    sidebar: sidebar(),
    socialLinks: [{ icon: 'github', link: `${github}` }],
    docFooter: {
      prev: 'Previous Page',
      next: 'Next Page'
    },
    footer: {
      message: 'Documentation Template',
      copyright: 'vitepress-template'
    }
  }
})
