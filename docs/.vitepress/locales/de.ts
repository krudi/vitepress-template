import { defineConfig } from 'vitepress'
import { generateSidebar } from 'vitepress-sidebar'

export const de = defineConfig({
  lang: 'de-DE',
  description: 'Eine Vorlage mit VitePress mit vielen Add-ons und nützlichen Funktionen.',
  themeConfig: {
    siteTitle: 'Dokumentation',
    outlineTitle: 'Navigation',
    langMenuLabel: 'Sprache ändern',
    returnToTopLabel: 'Zurück nach oben',
    sidebarMenuLabel: 'Menu',
    darkModeSwitchLabel: 'Erscheinungsbild',
    lastUpdatedText: 'Aktualisiertes Datum',
    editLink: {
      pattern: 'https://github.com/krudi/vitepress-template/edit/main/docs/:path',
      text: 'Diese Seite auf GitHub bearbeiten'
    },
    nav: [
      {
        text: 'Startseite',
        link: '/en/'
      },
    ],
    sidebar: generateSidebar({
      useTitleFromFrontmatter: true,
      capitalizeEachWords: true,
      documentRootPath: '/docs/',
      scanStartPath: '/de/',
      rootGroupText: 'Inhalt',
      excludeFolders: ['en'],
    }),
    docFooter: {
      prev: 'Vorherige Seite',
      next: 'Nächste Seite'
    },
    footer: {
      message: 'Dokumentationsvorlage',
      copyright: 'vitepress-template'
    }
  }
})
