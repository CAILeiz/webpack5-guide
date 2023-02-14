const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = (env) => {
  console.log("env", env);
  return {
    entry: {
      home: ["./src/home.js", "./src/home.scss"],
      account: ["./src/account.js", "./src/account.scss"],
    },
    output: {
      filename: "[name].js",
      clean: true,
    },
    module: {
      rules: [
        {
          test: /\.scss$/,
          use: [
            // fallback to style-loader in development
            env.mode === "dev" ? "style-loader" : MiniCssExtractPlugin.loader,
            "css-loader",
            "sass-loader",
          ],
        },
      ],
    },
    plugins: [
      new MiniCssExtractPlugin({
        filename: "[name].css",
      }),
    ],
  };
};
