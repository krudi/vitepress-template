import path, { resolve } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

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
                replacement: resolve(__dirname, './docs'),
            },
        ],
    },
};
