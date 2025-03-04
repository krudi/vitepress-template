import { HeadConfig } from 'vitepress';

export const metaTags: HeadConfig[] = [
    ['meta', { charset: 'utf-8' }],
    [
        'meta',
        { name: 'viewport', content: 'width=device-width, initial-scale=1, maximum-scale=3' }
    ],
    ['meta', { name: 'application-name', content: 'vitepress-template' }],
    ['meta', { name: 'referrer', content: 'origin-when-cross-origin' }],
    ['meta', { name: 'color-scheme', content: 'dark light' }],
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
    ['meta', { property: 'og:url', content: 'http://localhost:5173' }],
    ['meta', { property: 'og:site_name', content: 'vitepress-template' }],
    [
        'meta',
        {
            property: 'og:image:url',
            content: 'http://localhost:5173/meta-tags/page-view.webp'
        }
    ],
    ['meta', { property: 'og:image:width', content: '1800' }],
    ['meta', { property: 'og:image:height', content: '1600' }],
    ['meta', { property: 'og:image:alt', content: 'Alternative description' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { name: 'twitter:site', content: '@twitter' }],
    ['meta', { name: 'twitter:creator', content: '@twitter' }],
    ['meta', { name: 'twitter:creator:id', content: '1467726470533754880' }],
    ['meta', { name: 'twitter:card', content: 'app' }],
    [
        'meta',
        {
            name: 'twitter:image',
            content: 'http://localhost:5173/meta-tags/page-view.webP/'
        }
    ],
    ['meta', { name: 'twitter:image:alt', content: 'Alternative description' }],
    ['meta', { name: 'robots', content: 'index,follow' }],
    [
        'meta',
        {
            name: 'googlebot',
            content:
                'index, nofollow, noimageindex, max-video-preview:-1, max-image-preview:large, max-snippet:-1'
        }
    ],
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
    ],
    [
        'link',
        {
            rel: 'manifest',
            href: '/manifest.json'
        }
    ]
];
