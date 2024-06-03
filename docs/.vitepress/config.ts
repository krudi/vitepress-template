import { defineConfig } from 'vitepress'
import { withPwa } from '@vite-pwa/vitepress'
import { shared } from './shared'
import { en } from './locales/en'
import { de } from './locales/de'

export default withPwa(defineConfig({
    ...shared,
    locales: {
        root: {
            link: '/',
            label: 'English',
            ...en
        },
        de: {
            link: '/de/',
            label: 'Deutsch',
            ...de
        }
    },
}))
