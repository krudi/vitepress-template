import { type Config } from "prettier";

const config: Config = {
    printWidth: 80,
    tabWidth: 4,
    useTabs: false,
    semi: true,
    singleQuote: true,
    trailingComma: 'none',
    bracketSpacing: true,
    arrowParens: 'always',
    bracketSameLine: false,
    singleAttributePerLine: true,
    insertPragma: false,
    proseWrap: 'always',
};

export default config;
