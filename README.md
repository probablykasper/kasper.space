# v6.kasper.space

[![Netlify Status](https://api.netlify.com/api/v1/badges/c9f7d228-db14-4dc5-97f2-7a2e25675b65/deploy-status)](https://app.netlify.com/sites/kasper-space/deploys)

v6 of my personal website

<p align="center">
    <img src="https://raw.githubusercontent.com/probablykasper/v6.kasper.space/master/Screenshot.png">
</p>

## Dev Instructions

### Get started

1. Install [Node.js](https://nodejs.org/)
2. Run `npm install`

I recommend using the [VSCode](https://code.visualstudio.com) text editor with the [Vetur](https://marketplace.visualstudio.com/items?itemName=octref.vetur), [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) and [Sass](https://marketplace.visualstudio.com/items?itemName=Syler.sass-indented) extensions.

The website is built with [Nuxt.js](https://nuxtjs.org) and [Vue.js](https://vuejs.org/).

The master branch is continually deployed through [Netlify](https://netlify.com).

### Commands

Start dev server:

```
$ npm run start
```

Build into /dist:

```
$ npm run build
```

Lint the project:

```
$ npm run lint
```

Lint and fix fixable errors/warnings:

```
$ npm run lint-fix
```

### Adding artworks

To add an image to the Art page, place it in the `/static/art/items` folder. Resize the images to 500x500 (e.g using macOS Preview), and then convert it to a 95% quality jpg.
