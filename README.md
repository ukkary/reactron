## React + Typescript + Styled Component + Mobx Templates
Simple and Clean Web+Electron Single Page Architecture

### Initialize
```
$ npm install
```

### Contains
- [x] [React](https://facebook.github.io/react/) 
- [x] [Mobx](https://github.com/mobxjs/mobx)
- [x] [styled-components](https://github.com/styled-components/styled-components)
- [x] [Axios](https://github.com/axios/axios)
- [x] [Store](https://github.com/marcuswestin/store.js)
- [x] [js-cookie](https://github.com/js-cookie/js-cookie)

### Build tools
- [x] [electron](https://electronjs.org/)
- [x] [webpack](https://webpack.github.io)
  - [x] [extract-text-webpack-plugin](https://github.com/webpack-contrib/extract-text-webpack-plugin)
  - [x] [html-webpack-plugin](https://github.com/jantimon/html-webpack-plugin)
  - [x] [webpack-cleanup-plugin](https://github.com/gpbl/webpack-cleanup-plugin)
- [x] [autobind-decorator](https://github.com/andreypopp/autobind-decorator)
- [x] [tslint](https://palantir.github.io/tslint/)


### Run Web
On your local, run
```
$ npm run start
```

or 

```
$ npm run build:dev
$ npm run build
```
to build static scripts

## Run Electron
```
$ electron dist/index.html
```
