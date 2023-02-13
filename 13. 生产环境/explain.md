## 如何设置 process.env.NODE_ENV 原创

### webpack4 之前可以使用 DefinePlugin 插件配置

````js
    plugins: [
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
        })
    ]
    ```
````

### webpack4 之后根据 mode 来设置 process.env.NODE_ENV

> mode: 'development'

### 文档

> webpack 文档 https://webpack.docschina.org/guides/production/
> 设置 process.env.NODE_ENV https://blog.51cto.com/u_15516257/5808535
