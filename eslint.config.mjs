import globals from 'globals';
import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';
import prettierConfig from 'eslint-config-prettier';
import importSortPlugin from 'eslint-plugin-simple-import-sort';

const typeScriptConfig = [
    ...tseslint.configs.recommended,
    {
        languageOptions: {
            parser: tseslint.parser
        },
    },
    {
        files: ['**/*.{js,cjs,mjs}'],
        ...tseslint.configs.disableTypeChecked,
    },
];

const importSortConfig = {
  plugins: {
    'simple-import-sort': importSortPlugin,
  },
  rules: {
    'simple-import-sort/imports': 'error',
    'simple-import-sort/exports': 'error',
  },
};

export default tseslint.config(
    {
        ignores: [
            'dist',
            'dev-dist',
            'public',
            'node_modules'
        ],
    },
    {
        languageOptions: {
            globals: {
                ...globals.node
            }
        }
    },
    {
        files: ['**/*.{js,jsx,cjs,mjs,ts,tsx,mts}'],
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
    },
    eslint.configs.recommended,
    ...typeScriptConfig,
    prettierConfig,
    importSortConfig
);
