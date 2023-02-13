export const CONSTANT = 42;

export let variable = 42;
// 对外暴露的变量为只读
// 无法从外部修改

export function fun() {
  console.log("fun");
}

let a, b, other;
export { a, b, other as c };

function more() {
  return 125;
}

export default 1 + 2 + 3 + more();
