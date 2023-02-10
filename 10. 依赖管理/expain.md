## 带表达式的 require 语句

> 如果你的 request 含有表达式(expressions)，就会创建一个上下文(context)，因为在编译时(compile time)并不清楚 具体 导入哪个模块。

1. 示例，考虑到我们有包含 .ejs 文件的如下目录结构：

example_directory
│
└───template
│ │ table.ejs
│ │ table-row.ejs
│ │
│ └───directory
│ │ another.ejs

2. 当台下的 require() 调用被评估解析：

```js
require('./template/' + name + '.ejs');
webpack 解析 require() 调用，然后提取出如下一些信息：

Directory: ./template
Regular expression: /^.\*\.ejs$/
context module
```

解释: 会生成一个 context module(上下文模块)。它包含 目录下的所有模块 的引用，如果一个 request 符合正则表达式，就能 require 进来。该 context module 包含一个 map（映射）对象，会把 requests 翻译成对应的模块 id。（译者注：request 参考概念术语 ）

```js
示例 map（映射）:
{
  "./table.ejs": 42,
  "./table-row.ejs": 43,
  "./directory/another.ejs": 44
}
```

此 context module 还包含一些访问这个 map 对象的 runtime 逻辑。
这意味着 webpack 能够支持动态地 require，但会导致所有可能用到的模块都包含在 bundle 中。

## require.context

> 可以给这个函数传入三个参数：一个要搜索的目录，一个标记表示是否还搜索其子目录， 以及一个匹配文件的正则表达式。

Webpack 会在构建中解析代码中的 require.context() 。

```js
语法如下：

require.context(
  directory,
  (useSubdirectories = true),
  (regExp = /^\.\/.*$/),
  (mode = 'sync')
);
```

应用场景:

```js
const files = require.context("./", true, /index.vue$/);
console.log("files", files, files.keys());
const config = files.keys().reduce((obj, path) => {
  if (path !== "./index.vue") {
    const dft = files(path).default;
    console.log("dft", dft);
    obj[dft.name] = dft;
  }
  return obj;
}, {});
console.log("config", config);
export default config;
```
