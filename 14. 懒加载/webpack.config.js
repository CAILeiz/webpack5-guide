// 1. 防止重复(prevent duplication)
// 1.1 入口依赖
// 配置 dependOn option 选项，这样可以在多个 chunk 之间共享模块：

const path = require("path");
module.exports = {
  mode: "development",
  entry: {
    index: {
      import: "./src/index.js",
      dependOn: "shared",
    },
    another: {
      import: "./src/another-module.js",
      dependOn: "shared",
    },
    shared: "lodash",
  },
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
  optimization: {
    runtimeChunk: "single",
  },
};

// 1.2 SplitChunksPlugin
// const path = require("path");
// module.exports = {
//   mode: "development",
//   entry: {
//     index: "./src/index.js",
//     another: "./src/another-module.js",
//   },
//   output: {
//     filename: "[name].bundle.js",
//     path: path.resolve(__dirname, "dist"),
//     clean: true,
//   },
//   optimization: {
//     splitChunks: {
//       chunks: "all",
//     },
//   },
// };

// 2. 动态导入(dynamic import)
// 当涉及到动态代码拆分时，webpack 提供了两个类似的技术。
// 第一种，也是推荐选择的方式是，使用符合 ECMAScript 提案 的 import() 语法 来实现动态导入。
// 第二种，则是 webpack 的遗留功能，使用 webpack 特定的 require.ensure。

// const path = require("path");
// module.exports = {
//   mode: "development",
//   entry: {
//     dsyImport: "./src/dsyImport.js",
//   },
//   output: {
//     filename: "[name].bundle.js",
//     path: path.resolve(__dirname, "dist"),
//     clean: true,
//   },
// };

// 3. 预获取/预加载模块(prefetch/preload module)
// Webpack v4.6.0+ 增加了对预获取和预加载的支持。
// 在声明 import 时，使用下面这些内置指令，可以让 webpack 输出 "resource hint(资源提示)"，来告知浏览器：

// 3.1 prefetch(预获取)：将来某些导航下可能需要的资源
// eg: import(/* webpackPrefetch: true */ './path/to/LoginModal.js');
// 这会生成 <link rel="prefetch" href="login-modal-chunk.js"> 并追加到页面头部，指示着浏览器在闲置时间预取 login-modal-chunk.js 文件。
// features:
// 3.1.1 prefetch chunk 会在父 chunk 加载结束后开始加载。
// 3.1.2 prefetch chunk 在浏览器闲置时下载。
// 3.1.3 prefetch chunk 会用于未来的某个时刻。

// 3.2 preload(预加载)：当前导航下可能需要资源
// eg: import(/* webpackPreload: true */ 'ChartingLibrary');
// features:
// 3.2.1 preload chunk 会在父 chunk 加载时，以并行方式开始加载。
// 3.2.2 preload chunk 具有中等优先级，并立即下载。
// 3.2.3 preload chunk 会在父 chunk 中立即请求，用于当下时刻。
