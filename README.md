# vitepress-template

A template with VitePress with many add-ons and useful features.

## Quick start

> **Note**
> You need [Node.js](https://github.com/nodejs) on your computer before running

1. First clone this repository and navigate into your project directory
2. `copy .env-example .env` - copy the **.env** file
3. Install the dependencies: `npm run install`
4. Run the development server: `npm run dev`

## Starting development mode

To launch the project in development mode with hot module replacement

- `npm run dev`: to compile application and serve it to the browser

_You can view the development server at <http://localhost:5173>_

## Starting production mode

Build and optimize your application with [Vite](https://github.com/vitejs/vite) for production

- `npm run build`: build for production with minification

## Starting preview mode

The option shows the current changes, that are made in development mode to check that everything works before deploying the condo to production

- `npm run preview`: shows a live project preview

## Commands for linting/fixing files

Navigate into your project directory and start your preview mode up

- `npm run lint:js`: lints [JavaScript](https://www.javascript.com) files
  - `npm run lint:js:fix`: to eliminate all possible errors
- `npm run lint:files`: lints configuration files with [Prettier](https://github.com/prettier/prettier)
  - `npm run lint:files:fix`: to eliminate all possible errors
- `npm run lint:markdown`: - lints markdown files with [markdownlint-cli](https://www.npmjs.com/package/markdownlint-cli)
  - `npm run lint:markdown`: to eliminate all possible errors
- `npm run lint:full` - to run all lints commands above
- `npm run lint:full:fix` - to run all lints all commands above and fix those automatically

## Additional information

- `npx npm-check-updates` - to check if some [npm](https://www.npmjs.com) packages are needed
- `npx npm-check-updates -u` - to upgrade all [npm](https://www.npmjs.com) packages
