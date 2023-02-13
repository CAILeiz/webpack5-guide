import { CONSTANT, variable } from "../src/module.js";
// 导入由其他模块导出的“绑定”
// 这些绑定是动态的. 这里并非获取到了值的副本
// 而是当将要访问“variable”时
// 再从导入的模块中获取当前值

import * as module from "../src/module.js";
module.fun();
// 导入包含所有导出内容的“命名空间对象”

import theDefaultValue from "../src/module.js";
// 导入 `default` 导出的快捷方式

console.log("CONSTANT, variable", CONSTANT, variable);
console.log("module", module);
// module 参数
// const module = {
//   CONSTANT: 42,
//   a: undefined,
//   b: undefined,
//   c: undefined,
//   default: 131, // *****
//   fun: ƒn(),
//   variable: 42,
// };

console.log("theDefaultValue", theDefaultValue);
