# Example of using webR in a Vue 3 application.

This repo contains an example of using webR as part of a Vue.js application, originally bootstrapped with [create-vue](https://github.com/vuejs/create-vue).

TypeScript source code showing how to load webR so that it can be accessed globally in any component can be found in the file `src/main.ts`. An example of using webR in a component to produce output for display can be found in the file `src/components/WebRTable.vue`.

This example loads webR into the page, obtains a copy of the `mtcars` dataset, and then [converts the dataset into a JavaScript representation](https://docs.r-wasm.org/webr/latest/convert-r-to-js.html) using `toObject()`. The HTML template associated with this component constructs a table displaying the dataset once webR has been loaded and the `mtcars` data is available.

The project configuration in `vite.config.ts` has been set up so that the app is served with the recommended cross-origin isolation headers set during development. The same HTTP headers should be set on the hosting web server once the application has been build and deployed to production. 

In addition, fallback worker scripts have been placed in the `public` folder so that if the page is not cross-origin isolated, webR will instead fall back to using a service worker for channel communication. Further information about cross-origin isolation and serving pages with webR can be found in the [webR documentation](https://docs.r-wasm.org/webr/latest/serving.html).

## Project Setup

First, clone this repo and `cd` into the new directory. Then run,

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```
