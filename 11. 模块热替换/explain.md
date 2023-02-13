## 启用 HMR 两种方式

### 使用 webpack-dev-server

- 配置 devServer.hot: true
- 使用 module.hot.accept 来监听文件

> 问题: dom 事件绑定旧的函数
> 解决: 重新执行渲染

### 使用 Node.js API

- 配置 entry

```js
  entry: [
    // Runtime code for hot module replacement
    'webpack/hot/dev-server.js',
    // Dev server client for web socket transport, hot and live reload logic
    'webpack-dev-server/client/index.js?hot=true&live-reload=true',
    // Your entry
    './src/index.js',
  ],
```

- 创建编辑器

```js
const compiler = webpack(config);
```

- 获取 server 并启动

```js
const compiler = webpack(config);

(async () => {
  await server.start();
  console.log("dev server is running");
})();
```
