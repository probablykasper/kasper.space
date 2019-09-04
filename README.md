# v6.kasper.space

v6 of my personal website

## Dev Instructions

### Get started

1. Install [Node.js](https://nodejs.org/)
2. Run `npm install`

I recommend using the [VSCode](https://code.visualstudio.com) text editor with the [Vetur](https://marketplace.visualstudio.com/items?itemName=octref.vetur), [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) and [Sass](https://marketplace.visualstudio.com/items?itemName=Syler.sass-indented) extensions.

The website is built with [Nuxt.js](https://nuxtjs.org) and [Vue.js](https://vuejs.org/).

### Commands

Start dev server:

```
$ npm run start
```

Build into /dist:

```
$ npm run build
```

Build and commit with a tag, which will trigger deployment. `<version>` can be `patch`, `minor`, `major` or a specific version number:

```
$ npm run deploy <version>
```

Lint the project:

```
$ npm run lint
```

Lint and fix fixable errors/warnings:

```
$ npm run lint-fix
```
