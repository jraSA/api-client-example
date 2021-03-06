# api-client-example

![CI/CD](https://github.com/jraSA/api-client-example/workflows/api-client-example%20pipeline/badge.svg)
[![codecov](https://codecov.io/gh/jraSA/api-client-example/branch/master/graph/badge.svg?token=7QFE1W5SDL)](https://codecov.io/gh/jraSA/api-client-example)
![License](https://img.shields.io/github/license/dyarleniber/react-workflow-gh-actions)
## Table of Contents

- [About](#about)
- [Running tests](#running_test)
- [Publishing](#publishing)
- [Installing](#installing)

## About <a name = "about"></a>

A very simple example of a api client using NodeJS and TypeScript. This could be used as a boilerplate for more complex projects.


## Running tests  <a name = "running_test"></a>


### UT
```
npm run test
```
### Coverage
```
npm run test:coverage
```
### Testing build
```
npm run test-build
```

## Publishing <a name = "publishing"></a>

The `package.json` is configured to run `npm run ci` before publish by using `prepublishOnly`. This a list of commands for local publish.
### Publish patch
```
npm run publish-patch
```
### Publish minor version
```
npm run publish-minor
```
### Publish major version
```
npm run publish-major
```

## Installing <a name = "installing"></a>

```
npm i api-client-example
```
