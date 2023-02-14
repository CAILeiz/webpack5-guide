## 资源模块

> 官网链接 https://webpack.docschina.org/guides/asset-modules/#general-asset-type >
> <br/>

<br/>
前言:
<br/>

- 资源模块(asset module)是一种模块类型，它允许使用资源文件（字体，图标等）而无需配置额外 loader。

- 在 webpack 5 之前，通常使用：

  - raw-loader 将文件导入为字符串
  - url-loader 将文件作为 data URI 内联到 bundle 中
  - file-loader 将文件发送到输出目录

- 资源模块类型(asset module type)，通过添加 4 种新的模块类型，来替换所有这些 loader：
  - asset/resource 发送一个单独的文件并导出 URL。之前通过使用 file-loader 实现。
  - asset/inline 导出一个资源的 data URI。之前通过使用 url-loader 实现。
  - asset/source 导出资源的源代码。之前通过使用 raw-loader 实现。
  - asset 在导出一个 data URI 和发送一个单独的文件之间自动选择。之前通过使用 url-loader，并且配置资源体积限制实现。

### Resource 资源

> 所有 .png 文件都将被发送到输出目录，并且其路径将被注入到 bundle 中，除此之外，你可以为它们自定义 outputPath 和 publicPath 属性。

```js
// webpack.config.js;

const path = require("path");

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
  },
  module: {
    rules: [
      {
        test: /\.png/,
        type: "asset/resource",
      },
    ],
  },
};

src / index.js;

import mainImage from "./images/main.png";

img.src = mainImage; // '/dist/151cfcfa1bd74779aadb.png'
```

### 自定义输出文件名

> Rule.generator.filename 与 output.assetModuleFilename 相同，并且仅适用于 asset 和 asset/resource 模块类型。 \*\*\*\*\*

> 默认情况下，asset/resource 模块以 [hash][ext][query] 文件名发送到输出目录。

```js

可以通过在 webpack 配置中设置 output.assetModuleFilename 来修改此模板字符串：

// 1. output.assetModuleFilename输出, webpack.config.js

const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
   assetModuleFilename: 'images/[hash][ext][query]'
  },
  module: {
    rules: [
      {
        test: /\.png/,
        type: 'asset/resource'
      }
    ]
  },
};


// 另一种自定义输出文件名的方式是，将某些资源发送到指定目录：
// 2. Rule.generator.filename 输出
const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
   assetModuleFilename: 'images/[hash][ext][query]'
  },
  module: {
    rules: [
      {
        test: /\.png/,
        type: 'asset/resource'
     }
     },
     {
       test: /\.html/,
       type: 'asset/resource',
       generator: {
         filename: 'static/[hash][ext][query]'
       }
     }
    ]
  },
};

// 使用此配置，所有 html 文件都将被发送到输出目录中的 static 目录中。

```

### inline 资源(inlining asset)

```js
// webpack.config.js 配置

const path = require("path");

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
  },
  module: {
    rules: [
      {
        test: /\.svg/,
        type: "asset/inline",
      },
    ],
  },
};
// src / index.js 配置

import mainImage from "./images/main.png";
import metroMap from "./images/metro.svg";

img.src = mainImage; // '/dist/151cfcfa1bd74779aadb.png'
block.style.background = `url(${metroMap})`; // url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDo...vc3ZnPgo=)
// 所有 .svg 文件都将作为 data URI 注入到 bundle 中。
```

### 自定义 data URI 生成器

> webpack 输出的 data URI，默认是呈现为使用 Base64 算法编码的文件内容。

> 如果要使用自定义编码算法，则可以指定一个自定义函数来编码文件内容：

```js
// webpack.config.js

const path = require("path");
const svgToMiniDataURI = require("mini-svg-data-uri");

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
  },
  module: {
    rules: [
      {
        test: /\.svg/,
        type: "asset/inline",
        generator: {
          dataUrl: (content) => {
            content = content.toString();
            return svgToMiniDataURI(content);
          },
        },
      },
    ],
  },
};

// 现在，所有 .svg 文件都将通过 mini-svg-data-uri 包进行编码。
```

### source 资源(source asset)

```js
// 1. webpack.config.js 配置
const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
       test: /\.txt/,
       type: 'asset/source',
      }
    ]
};

// 2. src/example.txt 配置
'Hello world'

// 3. src/index.js 配置
import exampleText from './example.txt';
block.textContent = exampleText; // 'Hello world'
// 4. 最后 所有 .txt 文件将原样注入到 bundle 中。
```

### URL 资源

> 当使用 new URL('./path/to/asset', import.meta.url)，webpack 也会创建资源模块。

```js
// 1. src/index.js
const logo = new URL("./logo.svg", import.meta.url);

// 根据你配置中 target 的不同，webpack 会将上述代码编译成不同结果：
// target: web
new URL(
  __webpack_public_path__ + "logo.svg",
  document.baseURI || self.location.href
);

// target: webworker
new URL(__webpack_public_path__ + "logo.svg", self.location);

// target: node, node-webkit, nwjs, electron-main, electron-renderer, electron-preload, async-node
new URL(
  __webpack_public_path__ + "logo.svg",
  require("url").pathToFileUrl(__filename)
);

// 2. 自 webpack 5.38.0 起，Data URLs 也支持在 new URL() 中使用了：

// src/index.js 配置
const url = new URL("data:,", import.meta.url);
console.log(url.href === "data:,");
console.log(url.protocol === "data:");
console.log(url.pathname === ",");
```

### 通用资源类型

- 默认配置:

  - 现在，webpack 将按照默认条件，自动地在 resource 和 inline 之间进行选择：小于 8kb 的文件，将会视为 inline 模块类型，否则会被视为 resource 模块类型。

- 自定义资源大小配置
  - 可以通过在 webpack 配置的 module rule 层级中，设置 Rule.parser.dataUrlCondition.maxSize 选项来修改此条件：

```js
// 1. 默认配置
// webpack.config.js

const path = require("path");

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
  },
  module: {
    rules: [
      {
        test: /\.txt/,
        type: "asset",
      },
    ],
  },
};
```

```js
// 1. 自定义资源大小配置
// webpack.config.js
const path = require("path");

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
  },
  module: {
    rules: [
      {
        test: /\.txt/,
        type: "asset",
        parser: {
          dataUrlCondition: {
            maxSize: 4 * 1024, // 4kb
          },
        },
      },
    ],
  },
};
```

### Disable emitting assets

> 对于像服务器端渲染这样的用例，你可能想要禁用发射资产，这在 Rule.generator 下的 emit 选项是可行的:

```js
module.exports = {
  // …
  module: {
    rules: [
      {
        test: /\.png$/i,
        type: "asset/resource",
        generator: {
          emit: false,
        },
      },
    ],
  },
};
```
