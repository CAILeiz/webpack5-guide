### 基于环境设置

```js
import webpack from "webpack";

// 尝试使用环境变量，否则使用根路径
const ASSET_PATH = process.env.ASSET_PATH || "/";

export default {
  output: {
    publicPath: ASSET_PATH,
  },

  plugins: [
    // 这可以帮助我们在代码中安全地使用环境变量
    new webpack.DefinePlugin({
      "process.env.ASSET_PATH": JSON.stringify(ASSET_PATH),
    }),
  ],
};
```

### 在运行时设置

另一个可能出现的情况是，需要在运行时设置 publicPath。webpack 暴露了一个名为 **webpack_public_path** 的全局变量。所以在应用程序的 entry point 中，可以直接如下设置：

```js
__webpack_public_path__ = process.env.ASSET_PATH;
```

### Automatic publicPath $#automaticpublicPath

```js

有可能你事先不知道 publicPath 是什么，webpack 会自动根据 import.meta.url、document.currentScript、script.src 或者 self.location 变量设置 publicPath。你需要做的是将 output.publicPath 设为 'auto'：

// webpack.config.js 配置
module.exports = {
  output: {
    publicPath: 'auto',
  },
};
```
