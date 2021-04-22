[![npm](https://img.shields.io/npm/v/vuepress-plugin-define)](https://www.npmjs.com/package/vuepress-plugin-define)

# vuepress-plugin-define

Bring your configurations from `.env` into VuePress markdown files.

## How to Usage?

### 1. Installation

```sh
yarn add vuepress-plugin-define

# Or with npm
npm install vuepress-plugin-define
```

### 2. Setup

[Use plugins from a dependency](https://vuepress.vuejs.org/plugin/using-a-plugin.html#use-plugins-from-a-dependency).

```js
module.exports = {
  plugins: ['define'],
}
```

### 3. Use variables

By default, the variable will be replaced with the value of the environment variable, you can also create a `.env` related file to customize the value of the variable.

```
# Example

Home: <const name="HOME" />
```

You can specify env variables by placing the following files in your project root, same with [vue-cli](https://cli.vuejs.org/guide/mode-and-env.html#environment-variables):

```
.env                # loaded in all cases
.env.local          # loaded in all cases, ignored by git
.env.[mode]         # only loaded in specified mode
.env.[mode].local   # only loaded in specified mode, ignored by git
```

### 4. Options

By default, the content in the code block will not be converted. If you want to use `<const name="YOUR VARIABLE" />` in the code block, you can set `forceConvert: Boolean` to convert it like this:

```js
module.exports = {
  plugins: [
    [
      'define',
      {
        forceConvert: true,
      },
    ],
  ],
}
```

---

> [sqrtthree.com](http://sqrtthree.com/) &nbsp;&middot;&nbsp;
> GitHub [@sqrthree](https://github.com/sqrthree) &nbsp;&middot;&nbsp;
> Twitter [@sqrtthree](https://twitter.com/sqrtthree)
