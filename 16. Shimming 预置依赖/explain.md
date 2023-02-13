### 细粒度 Shimming

```js
一些遗留模块依赖的 this 指向的是 window 对象。在接下来的用例中，调整我们的 index.js：

 function component() {
   const element = document.createElement('div');
   element.innerHTML = join(['Hello', 'webpack'], ' ');

   // 假设我们处于 `window` 上下文
   this.alert('Hmmm, this probably isn\'t a great idea...')

   return element;
 }

 document.body.appendChild(component());
```

> 当模块运行在 CommonJS 上下文中，这将会变成一个问题，也就是说此时的 this 指向的是 module.exports。在这种情况下，你可以通过使用 imports-loader 覆盖 this 指向：

> 需要配置 webpack.config.js

```js
const path = require("path");
const webpack = require("webpack");

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
  },
  module: {
    rules: [
      {
        test: require.resolve("./src/index.js"),
        use: "imports-loader?wrapper=window",
      },
    ],
  },
  plugins: [
    new webpack.ProvidePlugin({
      join: ["lodash", "join"],
    }),
  ],
};
```

### 全局 Exports

```js
如果遇到只有变量的库, 这些变量并没有导出, 可以使用 exports-loader 导出
 const path = require('path');
 const webpack = require('webpack');

 module.exports = {
   entry: './src/index.js',
   output: {
     filename: 'main.js',
     path: path.resolve(__dirname, 'dist'),
   },
   module: {
     rules: [
       {
         test: require.resolve('./src/index.js'),
         use: 'imports-loader?wrapper=window',
       },
      {
        test: require.resolve('./src/globals.js'),
        use:
          'exports-loader?type=commonjs&exports=file,multiple|helpers.parse|parse',
      },
     ],
   },
   plugins: [
     new webpack.ProvidePlugin({
       join: ['lodash', 'join'],
     }),
   ],
 };
```
