import globals from 'globals';
import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';
import prettierConfig from 'eslint-config-prettier';

export default tseslint.config(
    {
        ignores: [
            'dist',
            'dev-dist',
            'public',
            'node_modules'
        ],
    },
    eslint.configs.recommended,
    ...tseslint.configs.recommended,
    prettierConfig,
    {
        languageOptions: {
            globals: {
                ...globals.node
            }
        }
    },
    {
        files: ['**/*.{js,cjs,mjs,ts,mts}'],
        rules: {
            'quotes': [
                'error',
                'single'
            ],
            'quote-props': [
                'error',
                'consistent'
            ],
            'import/prefer-default-export': 'off',
            'import/no-anonymous-default-export': 'off'
        }
    }
);
