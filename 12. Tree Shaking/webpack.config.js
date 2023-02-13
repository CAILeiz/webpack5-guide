const path = require("path");
const webpack = require("webpack");

const HtmlWebpackPlugin = require("html-webpack-plugin");

// console.log("process.env.NODE_ENV", process.env.NODE_ENV);
module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "12. Tree Shaking",
    }),
    // new webpack.DefinePlugin({
    //   "process.env.NODE_ENV": JSON.stringify(process.env.NODE_ENV),
    // }),
  ],
  // mode: "development",
  // optimization: {
  //   usedExports: true,
  // },
  mode: "production", // 压缩输出结果
};

// process.env options
// processEnv = {
//   MANPATH:
//     "/opt/homebrew/share/man:/usr/share/man:/usr/local/share/man:/opt/homebrew/share/man::",
//   TERM_PROGRAM: "vscode",
//   NODE: "/usr/local/bin/node",
//   INIT_CWD: "/Users/ryanzhou/Desktop/webpack5-guide/12. Tree Shaking",
//   TERM: "xterm-256color",
//   SHELL: "/bin/zsh",
//   npm_config_metrics_registry: "https://registry.npm.taobao.org/",
//   HOMEBREW_REPOSITORY: "/opt/homebrew",
//   TMPDIR: "/var/folders/_v/9chy9cw155q8nh49ffs_pqr40000gn/T/",
//   npm_config_global_prefix: "/usr/local",
//   TERM_PROGRAM_VERSION: "1.75.1",
//   ZDOTDIR: "/Users/ryanzhou",
//   ORIGINAL_XDG_CURRENT_DESKTOP: "undefined",
//   MallocNanoZone: "0",
//   COLOR: "1",
//   npm_config_noproxy: "",
//   npm_config_registry: "https://registry.npm.taobao.org/",
//   npm_config_local_prefix:
//     "/Users/ryanzhou/Desktop/webpack5-guide/12. Tree Shaking",
//   ZSH: "/Users/ryanzhou/.oh-my-zsh",
//   USER: "ryanzhou",
//   COMMAND_MODE: "unix2003",
//   npm_config_globalconfig: "/usr/local/etc/npmrc",
//   SSH_AUTH_SOCK: "/private/tmp/com.apple.launchd.4rpqW3cYDH/Listeners",
//   __CF_USER_TEXT_ENCODING: "0x1F5:0x19:0x34",
//   npm_execpath: "/usr/local/lib/node_modules/npm/bin/npm-cli.js",
//   PAGER: "less",
//   LSCOLORS: "Gxfxcxdxbxegedabagacad",
//   PATH: "/Users/ryanzhou/Desktop/webpack5-guide/12. Tree Shaking/node_modules/.bin:/Users/ryanzhou/Desktop/webpack5-guide/node_modules/.bin:/Users/ryanzhou/Desktop/node_modules/.bin:/Users/ryanzhou/node_modules/.bin:/Users/node_modules/.bin:/node_modules/.bin:/usr/local/lib/node_modules/npm/node_modules/@npmcli/run-script/lib/node-gyp-bin:/opt/homebrew/bin:/opt/homebrew/sbin:/usr/local/bin:/System/Cryptexes/App/usr/bin:/usr/bin:/bin:/usr/sbin:/sbin:/opt/homebrew/bin:/opt/homebrew/sbin",
//   npm_package_json:
//     "/Users/ryanzhou/Desktop/webpack5-guide/12. Tree Shaking/package.json",
//   _: "/Users/ryanzhou/Desktop/webpack5-guide/12. Tree Shaking/node_modules/.bin/webpack",
//   LaunchInstanceID: "E6F5E645-0C4C-4FC7-BFC8-22123FBC4D83",
//   npm_config_userconfig: "/Users/ryanzhou/.npmrc",
//   npm_config_init_module: "/Users/ryanzhou/.npm-init.js",
//   USER_ZDOTDIR: "/Users/ryanzhou",
//   __CFBundleIdentifier: "com.microsoft.VSCode",
//   npm_command: "run-script",
//   PWD: "/Users/ryanzhou/Desktop/webpack5-guide/12. Tree Shaking",
//   npm_lifecycle_event: "build",
//   EDITOR: "vi",
//   npm_package_name: "1. 起步",
//   LANG: "zh_CN.UTF-8",
//   VSCODE_GIT_ASKPASS_EXTRA_ARGS: "--ms-enable-electron-run-as-node",
//   XPC_FLAGS: "0x0",
//   npm_config_node_gyp:
//     "/usr/local/lib/node_modules/npm/node_modules/node-gyp/bin/node-gyp.js",
//   npm_package_version: "1.0.0",
//   XPC_SERVICE_NAME: "0",
//   VSCODE_INJECTION: "1",
//   SHLVL: "2",
//   HOME: "/Users/ryanzhou",
//   VSCODE_GIT_ASKPASS_MAIN:
//     "/Applications/Visual Studio Code.app/Contents/Resources/app/extensions/git/dist/askpass-main.js",
//   HOMEBREW_PREFIX: "/opt/homebrew",
//   npm_config_cache: "/Users/ryanzhou/.npm",
//   LESS: "-R",
//   LOGNAME: "ryanzhou",
//   npm_lifecycle_script: "webpack",
//   VSCODE_GIT_IPC_HANDLE:
//     "/var/folders/_v/9chy9cw155q8nh49ffs_pqr40000gn/T/vscode-git-5041ddfb66.sock",
//   npm_config_user_agent:
//     "npm/8.19.2 node/v16.14.2 darwin arm64 workspaces/false",
//   VSCODE_GIT_ASKPASS_NODE:
//     "/Applications/Visual Studio Code.app/Contents/Frameworks/Code Helper (Plugin).app/Contents/MacOS/Code Helper (Plugin)",
//   GIT_ASKPASS:
//     "/Applications/Visual Studio Code.app/Contents/Resources/app/extensions/git/dist/askpass.sh",
//   INFOPATH: "/opt/homebrew/share/info:/opt/homebrew/share/info:",
//   HOMEBREW_CELLAR: "/opt/homebrew/Cellar",
//   SECURITYSESSIONID: "186ad",
//   npm_node_execpath: "/usr/local/bin/node",
//   npm_config_prefix: "/usr/local",
//   COLORTERM: "truecolor",
// };
