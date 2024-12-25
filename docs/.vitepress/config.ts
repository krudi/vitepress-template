import { defineConfig } from 'vitepress';

import { de } from './locales/de';
import { en } from './locales/en';
import { shared } from './shared';

export default defineConfig({
    ...shared,
    locales: {
        root: {
            link: '/',
            label: 'English',
            ...en,
        },
        de: {
            link: '/de/',
            label: 'Deutsch',
            ...de,
        },
    },
});
