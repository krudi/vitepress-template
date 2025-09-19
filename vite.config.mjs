import { resolve } from 'path'

/** @type {import('vite').UserConfig} */
export default {
    server: {
        fs: {
            allow: ['..'],
        },
    },
    resolve: {
        alias: [
            {
                find: '~',
                replacement: resolve(__dirname, './docs')
            },
        ]
    }
}
