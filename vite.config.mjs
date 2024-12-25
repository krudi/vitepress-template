import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
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
})
