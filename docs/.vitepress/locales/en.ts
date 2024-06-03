import { defineConfig } from 'vitepress'

export const en = defineConfig({
    lang: 'en-US',
    description: 'A template with VitePress with many add-ons and useful features.',
    themeConfig: {
        siteTitle: 'Documentation',
        outlineTitle: 'Navigation',
        langMenuLabel: 'Change Language',
        returnToTopLabel: 'Return to top',
        sidebarMenuLabel: 'Menu',
        darkModeSwitchLabel: 'Appearance',
        lastUpdatedText: 'Updated Date',
        editLink: {
            pattern: 'https://github.com/krudi/vitepress-template/edit/main/docs/:path',
            text: 'Edit this page on GitHub'
        },
        nav: [
            {
                text: 'Home',
                link: '/de/'
            },
        ],
        sidebar: [
            {
                text: 'Sidebar',
                items: [
                    {
                        text: 'Home',
                        link: '/'
                    },
                    {
                        text: 'Guide (Markdown Examples)',
                        link: '/guide/markdown-examples'
                    },
                ]
            },
        ],
        search: {
            provider: 'local',
            options: {
                locales: {
                    en: {
                        translations: {
                            button: {
                                buttonText: 'buttonText',
                                buttonAriaLabel: 'buttonAriaLabel'
                            },
                            modal: {
                                noResultsText: 'noResultsText',
                                resetButtonTitle: 'resetButtonTitle',
                                footer: {
                                    selectText: 'selectText',
                                    navigateText: 'navigateText'
                                }
                            }
                        }
                    }
                }
            }
        },
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
