import { defineConfig } from 'vitepress';

import { metaTags } from './meta-tags';
import { transformPageData } from './meta-tags-dynamic';

export const shared = defineConfig({
    title: 'vitepress-template',
    cleanUrls: true,
    lastUpdated: true,
    ignoreDeadLinks: [/^https?:\/\/localhost/],
    markdown: {
        lineNumbers: true
    },
    sitemap: {
        hostname: 'http://localhost:5173'
    },
    head: metaTags,
    transformPageData: transformPageData,
    themeConfig: {
        logo: './images/general/logo.svg',
        outline: 'deep',
        aside: true,
        socialLinks: [
            {
                icon: 'github',
                link: 'https://github.com/krudi/vitepress-template'
            }
        ]
    },
});
