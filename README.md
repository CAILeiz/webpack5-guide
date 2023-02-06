# webpack5-guide

webpack5 官网指南代码，看指南、习代码、便操作、好记忆~

1. 如果你想要了解 HtmlWebpackPlugin 插件提供的全部的功能和选项，你就应该阅读 HtmlWebpackPlugin 仓库中的源码。

2. manifest
   你可能会很感兴趣，webpack 和 webpack 插件似乎“知道”应该生成哪些文件。答案是，webpack 通过 manifest，可以追踪所有模块到输出 bundle 之间的映射。如果你想要知道如何以其他方式来控制 webpack 输出，了解 manifest 是个好的开始。
   通过 WebpackManifestPlugin 插件，可以将 manifest 数据提取为一个 json 文件以供使用。
   我们不会在此展示一个如何在项目中使用此插件的完整示例，你可以在 manifest 概念页面深入阅读，以及在 缓存 指南中，了解它与长效缓存有何关系。

时间线记录:

2023/2/6 17:50:42

- 4. 开发环境 完成一半, 前三点已完成
