import { defineConfig } from 'vitepress'

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
                link: '/'
            },
        ],
        sidebar: [
            {
                text: 'Sidebar',
                items: [
                    {
                        text: 'Startseite',
                        link: '/'
                    },
                    {
                        text: 'Guide (Beispiele für Markdown-Syntax)',
                        link: '/guide/markdown-examples'
                    },
                ]
            },
        ],
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
