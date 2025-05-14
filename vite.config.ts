import { resolve } from 'path'
import type { UserConfig } from 'vite'

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
} satisfies UserConfig
