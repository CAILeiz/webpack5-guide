const path = require("path");

module.exports = (env) => {
  // Use env.<YOUR VARIABLE> here:
  console.log("env", env);
  // 1. env 输出
  // {
  //   WEBPACK_BUNDLE: true,
  //   WEBPACK_BUILD: true,
  //   goal: 'local',
  //   production: true
  // }

  return {
    entry: "./src/index.js",
    output: {
      filename: "main.js",
      path: path.resolve(__dirname, "dist"),
    },
  };
};
