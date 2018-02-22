# Contribution instruction

The [README.md](../README.md) gives you adequate information on how to clone boilerplate files, install dependencies and launch the development server.

Once you have done that, this documents will give you the necessary idea about developing this project. However, This document does not teach you anything about the framework and libraries we use, you should learn them from elsewhere.


## Tech Stack
Here are the packages that we used in the project. You may need the knowledge of some of them when you are writing code in this project. However, the best way to have a complete list of dependencies is to see [package.json](../package.json).

### Core
- [React](https://reactjs.org/) for building UIs.
- [React Routor](https://github.com/ReactTraining/react-router) to do routing.
- [Webpack](https://webpack.js.org/) as bundler and building script.
- [css-modules](https://github.com/css-modules/css-modules) for css, read [styling](documents/css.md) to find more.

### Testing
- [Jest](http://facebook.github.io/jest/)
- [Enzyme](http://airbnb.io/enzyme/)

### Linting
- [ESLint](http://eslint.org/)

## Project Structure
- You will write the application in `app` folder. This should be the folder that you spend most of your time.

### `app/`
We will use a [component-containers](https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0). Please put stateful component in the `containers` folder, and `components/` contains dumb React components which depend on containers for data. *Container components care about how things work, while components care about how things look.*

Treating single pages (e.g. the Homepage) as containers and their parts as components is a reasonable strategy.

### `internals/`
The internals settings of the app.

### `server/`
The development (and later production) server.
