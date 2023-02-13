const { file, parse } = require("./globals.js");

console.log("file, parse", file, parse);
function component() {
  const element = document.createElement("div");

  // lodash（目前通过一个 script 引入）对于执行这一行是必需的
  element.innerHTML = join(["Hello", "webpack"], " ");
  // 假设我们处于 `window` 上下文

  return element;
}

document.body.appendChild(component());
