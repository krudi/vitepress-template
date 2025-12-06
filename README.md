# vitepress-template

A template with VitePress with many add-ons and useful features.

## Quick start

> **Note** You need to have [Node.js](https://github.com/nodejs) installed on your computer before running this project.

1. First clone this repository and navigate into your project directory
2. `copy .env-example .env` - copy the **.env** file
3. Install the dependencies: `npm run install`
4. Run the development server: `npm run dev`

## Starting development mode

To launch the project in development mode with hot module replacement.

- `npm run dev`: to compile application and serve it to the browser

_You can view the development server at <http://localhost:5173>_

## Starting production mode

Build and optimize your application with [Vite](https://github.com/vitejs/vite) for production.

- `npm run build`: build for production with minification

## Starting preview mode

The option shows the current changes, that are made in development mode to check that everything works before deploying
the condo to production.

- `npm run preview`: shows a live project preview

## Commands for linting/fixing files

Navigate into your project directory and start your preview mode up.

- `npm run lint:eslint`: lints [JavaScript](https://www.javascript.com) files
    - `npm run lint:eslint:fix`: to eliminate all possible errors
