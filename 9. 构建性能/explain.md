## 通用环境

### loader

1. 将 loader 应用于最少数量的必要模块, eg:

```js
module.exports = {
  //...
  module: {
    rules: [
      {
        test: /\.js$/,
        include: path.resolve(__dirname, "src"),
        loader: "babel-loader",
      },
    ],
  },
};
```

### 解析

1. 减少 resolve.modules, resolve.extensions, resolve.mainFiles, resolve.descriptionFiles 中条目数量，因为他们会增加文件系统调用的次数。
2. 如果你不使用 symlinks（例如 npm link 或者 yarn link），可以设置 resolve.symlinks: false。
3. 如果你使用自定义 resolve plugin 规则，并且没有指定 context 上下文，可以设置 resolve.cacheWithContext: false。

### DLL

> 使用 DllPlugin 为更改不频繁的代码生成单独的编译结果。这可以提高应用程序的编译速度，尽管它增加了构建过程的复杂度。

1. 小即是快(smaller = faster)

- 使用数量更少/体积更小的 library。
- 在多页面应用程序中使用 SplitChunksPlugin。
- 在多页面应用程序中使用 SplitChunksPlugin ，并开启 async 模式。
- 移除未引用代码。
- 只编译你当前正在开发的那些代码。

2. worker 池(worker pool)
   thread-loader 可以将非常消耗资源的 loader 分流给一个 worker pool。
   <br/>
   <span style="color: yellow">
   注: 不要使用太多的 worker，因为 Node.js 的 runtime 和 loader 都有启动开销。最小化 worker 和 main process(主进程) 之间的模块传输。进程间通讯(IPC, inter process communication)是非常消耗资源的。
   </span>
3. 持久化缓存

- 在 webpack 配置中使用 cache 选项。使用 package.json 中的 "postinstall" 清除缓存目录。

## 开发环境

### 增量编译

1. 使用 webpack 的 watch mode(监听模式)。而不使用其他工具来 watch 文件和调用 webpack 。内置的 watch mode 会记录时间戳并将此信息传递给 compilation 以使缓存失效。
2. 在某些配置环境中，watch mode 会回退到 poll mode(轮询模式)。监听许多文件会导致 CPU 大量负载。在这些情况下，可以使用 watchOptions.poll 来增加轮询的间隔时间。

### 在内存中编译

1. 下面几个工具通过在内存中（而不是写入磁盘）编译和 serve 资源来提高性能：

- webpack-dev-server
- webpack-hot-middleware
- webpack-dev-middleware

### Devtool

1. 需要注意的是不同的 devtool 设置，会导致性能差异。

- "eval" 具有最好的性能，但并不能帮助你转译代码。
- 如果你能接受稍差一些的 map 质量，可以使用 cheap-source-map 变体配置来提高性能
- 使用 eval-source-map 变体配置进行增量编译。

### 避免在生产环境下才会用到的工具

1. 某些 utility, plugin 和 loader 都只用于生产环境。例如，在开发环境下使用 TerserPlugin 来 minify(压缩) 和 mangle(混淆破坏) 代码是没有意义的。通常在开发环境下，应该排除以下这些工具：

- TerserPlugin
- [fullhash]/[chunkhash]/[contenthash]
- AggressiveSplittingPlugin
- AggressiveMergingPlugin
- ModuleConcatenationPlugin

## 生产环境

### Source Maps

source map 相当消耗资源。你真的需要它们？

## 工具相关问题

### 下列工具存在某些可能会降低构建性能的问题：

1. Babel 最小化项目中的 preset/plugin 数量。
2. TypeScript

- 在单独的进程中使用 fork-ts-checker-webpack-plugin 进行类型检查。
- 配置 loader 跳过类型检查。
- 使用 ts-loader 时，设置 happyPackMode: true / transpileOnly: true。

3. Sass

- node-sass 中有个来自 Node.js 线程池的阻塞线程的 bug。 当使用 thread-loader 时，需要设置 workerParallelJobs: 2。
