import { HeadConfig } from 'vitepress';

export const metaTags: HeadConfig[] = [
    [
        'meta',
        {
            charset: 'utf-8',
        },
    ],
    [
        'meta',
        {
            name: 'viewport',
            content: 'width=device-width, initial-scale=1, maximum-scale=3',
        },
    ],
    [
        'meta',
        {
            name: 'application-name',
            content: 'vitepress-template',
        },
    ],
    [
        'meta',
        {
            name: 'author',
            content: 'Patryk Kudlik',
        },
    ],
    [
        'meta',
        {
            name: 'creator',
            content: 'Patryk Kudlik',
        },
    ],
    [
        'meta',
        {
            name: 'publisher',
            content: 'Patryk Kudlik',
        },
    ],
    [
        'link',
        {
            rel: 'canonical',
            href: process.env.VITEPRESS_PUBLIC_SITE_URL ?? 'http://localhost:5173',
        },
    ],
    [
        'meta',
        {
            name: 'referrer',
            content: 'origin-when-cross-origin',
        },
    ],
    [
        'meta',
        {
            name: 'color-scheme',
            content: 'dark light',
        },
    ],
    [
        'meta',
        {
            name: 'format-detection',
            content: 'telephone=no, address=no, email=no',
        },
    ],
    [
        'meta',
        {
            property: 'og:url',
            content: process.env.VITEPRESS_PUBLIC_SITE_URL ?? 'http://localhost:5173',
        },
    ],
    [
        'meta',
        {
            property: 'og:site_name',
            content: 'vitepress-template',
        },
    ],
    [
        'meta',
        {
            property: 'og:image:url',
            content: `${process.env.VITEPRESS_PUBLIC_SITE_URL ?? 'http://localhost:5173'}/meta-tags/page-view.png`,
        },
    ],
    [
        'meta',
        {
            property: 'og:image:width',
            content: '1800',
        },
    ],
    [
        'meta',
        {
            property: 'og:image:height',
            content: '1600',
        },
    ],
    [
        'meta',
        {
            property: 'og:image:alt',
            content: 'Alternative description',
        },
    ],
    [
        'meta',
        {
            property: 'og:type',
            content: 'website',
        },
    ],
    [
        'meta',
        {
            name: 'twitter:site',
            content: '@twitter',
        },
    ],
    [
        'meta',
        {
            name: 'twitter:creator',
            content: '@twitter',
        },
    ],
    [
        'meta',
        {
            name: 'twitter:card',
            content: 'app',
        },
    ],
    [
        'meta',
        {
            name: 'twitter:image',
            content: `${process.env.VITEPRESS_PUBLIC_SITE_URL ?? 'http://localhost:5173'}/meta-tags/page-view.png`,
        },
    ],
    [
        'meta',
        {
            name: 'twitter:image:alt',
            content: 'Alternative description',
        },
    ],
    [
        'meta',
        {
            name: 'robots',
            content: 'index,follow',
        },
    ],
    [
        'meta',
        {
            name: 'googlebot',
            content: 'index, nofollow, noimageindex, max-video-preview:-1, max-image-preview:large, max-snippet:-1',
        },
    ],
    [
        'meta',
        {
            name: 'google-site-verification',
            content: 'Q9rK2mA0ZxWcE4B_HY8nLJpUoFqGdS7V5tI1eM6l3',
        },
    ],
    [
        'link',
        {
            rel: 'shortcut icon',
            href: '/favicons/favicon.ico',
        },
    ],
    [
        'link',
        {
            rel: 'apple-touch-icon',
            sizes: '57x57',
            href: '/favicons/apple-icon-57x57.png',
        },
    ],
    [
        'link',
        {
            rel: 'apple-touch-icon',
            sizes: '60x60',
            href: '/favicons/apple-icon-60x60.png',
        },
    ],
    [
        'link',
        {
            rel: 'apple-touch-icon',
            sizes: '72x72',
            href: '/favicons/apple-icon-72x72.png',
        },
    ],
    [
        'link',
        {
            rel: 'apple-touch-icon',
            sizes: '76x76',
            href: '/favicons/apple-icon-76x76.png',
        },
    ],
    [
        'link',
        {
            rel: 'apple-touch-icon',
            sizes: '114x114',
            href: '/favicons/apple-icon-114x114.png',
        },
    ],
    [
        'link',
        {
            rel: 'apple-touch-icon',
            sizes: '120x120',
            href: '/favicons/apple-icon-120x120.png',
        },
    ],
    [
        'link',
        {
            rel: 'apple-touch-icon',
            sizes: '144x144',
            href: '/favicons/apple-icon-144x144.png',
        },
    ],
    [
        'link',
        {
            rel: 'apple-touch-icon',
            sizes: '152x152',
            href: '/favicons/apple-icon-152x152.png',
        },
    ],
    [
        'link',
        {
            rel: 'apple-touch-icon',
            sizes: '180x180',
            href: '/favicons/apple-icon-180x180.png',
        },
    ],
    [
        'link',
        {
            rel: 'icon',
            type: 'image/png',
            sizes: '512x512',
            href: '/favicons/favicon-512x512.png',
        },
    ],
    [
        'link',
        {
            rel: 'icon',
            type: 'image/png',
            sizes: '192x192',
            href: '/favicons/android-icon-192x192.png',
        },
    ],
    [
        'link',
        {
            rel: 'icon',
            type: 'image/png',
            sizes: '144x144',
            href: '/favicons/favicon-144x144.png',
        },
    ],
    [
        'link',
        {
            rel: 'icon',
            type: 'image/png',
            sizes: '96x96',
            href: '/favicons/favicon-96x96.png',
        },
    ],
    [
        'link',
        {
            rel: 'icon',
            type: 'image/png',
            sizes: '72x72',
            href: '/favicons/favicon-72x72.png',
        },
    ],
    [
        'link',
        {
            rel: 'icon',
            type: 'image/png',
            sizes: '48x48',
            href: '/favicons/favicon-48x48.png',
        },
    ],
    [
        'link',
        {
            rel: 'icon',
            type: 'image/png',
            sizes: '36x36',
            href: '/favicons/favicon-36x36.png',
        },
    ],
    [
        'link',
        {
            rel: 'icon',
            type: 'image/png',
            sizes: '32x32',
            href: '/favicons/favicon-32x32.png',
        },
    ],
    [
        'link',
        {
            rel: 'icon',
            type: 'image/png',
            sizes: '16x16',
            href: '/favicons/favicon-16x16.png',
        },
    ],
    [
        'meta',
        {
            name: 'msapplication-config',
            content: 'browserconfig.xml',
        },
    ],
    [
        'meta',
        {
            name: 'msapplication-TileImage',
            content: '/favicons/ms-icon-144x144.png',
        },
    ],
    [
        'meta',
        {
            name: 'msapplication-TileColor',
            content: '#ffffff',
        },
    ],
    [
        'meta',
        {
            name: 'theme-color',
            content: '#ffffff',
        },
    ],
    [
        'link',
        {
            rel: 'manifest',
            href: '/manifest.json',
        },
    ],
];
