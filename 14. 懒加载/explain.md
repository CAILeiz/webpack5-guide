## bundle 分析(bundle analysis)

一旦开始分离代码，一件很有帮助的事情是，分析输出结果来检查模块在何处结束。 官方分析工具 是一个不错的开始。还有一些其他社区支持的可选项：

- webpack-chart: webpack stats 可交互饼图。
- webpack-visualizer: 可视化并分析你的 bundle，检查哪些模块占用空间，哪些可能是重复使用的。
- webpack-bundle-analyzer：一个 plugin 和 CLI 工具，它将 bundle 内容展示为一个便捷的、交互式、可缩放的树状图形式。
- webpack bundle optimize helper：这个工具会分析你的 bundle，并提供可操作的改进措施，以减少 bundle 的大小。
- bundle-stats：生成一个 bundle 报告（bundle 大小、资源、模块），并比较不同构建之间的结果。
