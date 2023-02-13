"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunk_1_"] = self["webpackChunk_1_"] || []).push([["index"],{

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ \"./node_modules/lodash/lodash.js\");\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);\n\n\nfunction component() {\n  const element = document.createElement(\"div\");\n  const button = document.createElement(\"button\");\n  const br = document.createElement(\"br\");\n\n  button.innerHTML = \"Click me and look at the console!\";\n  element.innerHTML = lodash__WEBPACK_IMPORTED_MODULE_0___default().join([\"Hello\", \"webpack\"], \" \");\n  element.appendChild(br);\n  element.appendChild(button);\n\n  // Note that because a network request is involved, some indication\n  // of loading would need to be shown in a production-level site/app.\n  button.onclick = (e) =>\n    __webpack_require__.e(/*! import() | print */ \"print\").then(__webpack_require__.bind(__webpack_require__, /*! ./print */ \"./src/print.js\")).then((module) => {\n      const print = module.default;\n\n      print();\n    });\n\n  return element;\n}\n\ndocument.body.appendChild(component());\n\n\n//# sourceURL=webpack://1._%E8%B5%B7%E6%AD%A5/./src/index.js?");

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["shared"], () => (__webpack_exec__("./src/index.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);