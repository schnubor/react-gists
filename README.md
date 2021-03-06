# react-gists
[![Build Status](https://travis-ci.org/schnubor/react-gists.svg?branch=master)](https://travis-ci.org/schnubor/react-gists)
[![license](https://img.shields.io/github/license/mashape/apistatus.svg)]()

Embed Github Gists into your React application. Compatible with React 16.

![gists](https://i.imgur.com/LYCGSHW.png)

## Installation

```
npm install --save react-gists
```

## Usage

Import:
```js
import Gist from 'react-gists'
```

All files:
```js
<Gist id="1234asdf"/>
```

Specific file:
```js
<Gist id="1234asdf" file="example.js"/>
```

## Demo

You can run the demo locally by cloning this repo and follow these steps from within the cloned directory:

- `cd demo`
- `yarn install`
- `yarn start`
- A local server should be running on http://localhost:3000

## License

MIT

