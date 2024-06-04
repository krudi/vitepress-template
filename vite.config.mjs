import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
    server: {
        fs: {
            allow: ['..'],
        },
    },
    resolve: {
        alias: [
            {
                find: '@',
                replacement: resolve(__dirname, './docs')
            },
            {
                find: '~',
                replacement: resolve(__dirname, './docs')
            }
        ]
    }
})
