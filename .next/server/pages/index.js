"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./pages/index.jsx":
/*!*************************!*\
  !*** ./pages/index.jsx ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_canvas_draw__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-canvas-draw */ \"react-canvas-draw\");\n/* harmony import */ var react_canvas_draw__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_canvas_draw__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nconst Index = ()=>{\n    const firstCanvas = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);\n    const secondCanvas = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);\n    const handleClick = ()=>{\n        const data = firstCanvas.current.getSaveData();\n        secondCanvas.current.loadSaveData(data);\n        console.log(data);\n    };\n    const clear = ()=>{\n        firstCanvas.current.clear();\n    };\n    const undo = ()=>{\n        firstCanvas.current.undo();\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"Hello World\"\n            }, void 0, false, {\n                fileName: \"/home/jhosbel/Proyectos/Draw/pages/index.jsx\",\n                lineNumber: 25,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"buttom\", {\n                onClick: handleClick,\n                children: \"Save Drawing\"\n            }, void 0, false, {\n                fileName: \"/home/jhosbel/Proyectos/Draw/pages/index.jsx\",\n                lineNumber: 26,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"buttom\", {\n                onClick: clear,\n                children: \"Clear\"\n            }, void 0, false, {\n                fileName: \"/home/jhosbel/Proyectos/Draw/pages/index.jsx\",\n                lineNumber: 27,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"buttom\", {\n                onClick: undo,\n                children: \"Undo\"\n            }, void 0, false, {\n                fileName: \"/home/jhosbel/Proyectos/Draw/pages/index.jsx\",\n                lineNumber: 28,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_canvas_draw__WEBPACK_IMPORTED_MODULE_1___default()), {\n                brushRadius: 1,\n                hideGrid: false,\n                catenaryColor: \"red\",\n                style: {\n                    border: \"1px solid #000\"\n                },\n                ref: firstCanvas\n            }, void 0, false, {\n                fileName: \"/home/jhosbel/Proyectos/Draw/pages/index.jsx\",\n                lineNumber: 29,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_canvas_draw__WEBPACK_IMPORTED_MODULE_1___default()), {\n                ref: secondCanvas,\n                hideGrid: true,\n                disabled: true\n            }, void 0, false, {\n                fileName: \"/home/jhosbel/Proyectos/Draw/pages/index.jsx\",\n                lineNumber: 37,\n                columnNumber: 14\n            }, undefined)\n        ]\n    }, void 0, true);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Index);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qc3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBMEM7QUFDWjtBQUU5QixNQUFNRSxRQUFRLElBQU07SUFFaEIsTUFBTUMsY0FBY0YsNkNBQU1BLENBQUMsSUFBSTtJQUMvQixNQUFNRyxlQUFlSCw2Q0FBTUEsQ0FBQyxJQUFJO0lBRWhDLE1BQU1JLGNBQWMsSUFBTTtRQUN0QixNQUFNQyxPQUFPSCxZQUFZSSxPQUFPLENBQUNDLFdBQVc7UUFDNUNKLGFBQWFHLE9BQU8sQ0FBQ0UsWUFBWSxDQUFDSDtRQUNsQ0ksUUFBUUMsR0FBRyxDQUFDTDtJQUNoQjtJQUVBLE1BQU1NLFFBQVEsSUFBTTtRQUNoQlQsWUFBWUksT0FBTyxDQUFDSyxLQUFLO0lBQzdCO0lBRUEsTUFBTUMsT0FBTyxJQUFNO1FBQ2ZWLFlBQVlJLE9BQU8sQ0FBQ00sSUFBSTtJQUM1QjtJQUVBLHFCQUNJOzswQkFDSSw4REFBQ0M7MEJBQUc7Ozs7OzswQkFDSiw4REFBQ0M7Z0JBQU9DLFNBQVNYOzBCQUFjOzs7Ozs7MEJBQy9CLDhEQUFDVTtnQkFBT0MsU0FBU0o7MEJBQVE7Ozs7OzswQkFDekIsOERBQUNHO2dCQUFPQyxTQUFTSDswQkFBTzs7Ozs7OzBCQUN4Qiw4REFBQ2IsMERBQVVBO2dCQUNWaUIsYUFBYTtnQkFDYkMsVUFBVSxLQUFLO2dCQUNmQyxlQUFjO2dCQUNkQyxPQUFPO29CQUFDQyxRQUFRO2dCQUFnQjtnQkFDaENDLEtBQUtuQjs7Ozs7OzBCQUdMLDhEQUFDSCwwREFBVUE7Z0JBQ1hzQixLQUFLbEI7Z0JBQ0xjLFVBQVUsSUFBSTtnQkFDZEssVUFBVSxJQUFJOzs7Ozs7OztBQUkzQjtBQUVBLGlFQUFlckIsS0FBS0EsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL2RyYXcvLi9wYWdlcy9pbmRleC5qc3g/N2ZmZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQ2FudmFzRHJhdyBmcm9tICdyZWFjdC1jYW52YXMtZHJhdydcbmltcG9ydCB7IHVzZVJlZiB9IGZyb20gJ3JlYWN0J1xuXG5jb25zdCBJbmRleCA9ICgpID0+IHtcblxuICAgIGNvbnN0IGZpcnN0Q2FudmFzID0gdXNlUmVmKG51bGwpXG4gICAgY29uc3Qgc2Vjb25kQ2FudmFzID0gdXNlUmVmKG51bGwpXG5cbiAgICBjb25zdCBoYW5kbGVDbGljayA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgZGF0YSA9IGZpcnN0Q2FudmFzLmN1cnJlbnQuZ2V0U2F2ZURhdGEoKVxuICAgICAgICBzZWNvbmRDYW52YXMuY3VycmVudC5sb2FkU2F2ZURhdGEoZGF0YSlcbiAgICAgICAgY29uc29sZS5sb2coZGF0YSlcbiAgICB9XG5cbiAgICBjb25zdCBjbGVhciA9ICgpID0+IHtcbiAgICAgICAgZmlyc3RDYW52YXMuY3VycmVudC5jbGVhcigpXG4gICAgfVxuXG4gICAgY29uc3QgdW5kbyA9ICgpID0+IHtcbiAgICAgICAgZmlyc3RDYW52YXMuY3VycmVudC51bmRvKClcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8PlxuICAgICAgICAgICAgPGgxPkhlbGxvIFdvcmxkPC9oMT5cbiAgICAgICAgICAgIDxidXR0b20gb25DbGljaz17aGFuZGxlQ2xpY2t9ID5TYXZlIERyYXdpbmc8L2J1dHRvbT5cbiAgICAgICAgICAgIDxidXR0b20gb25DbGljaz17Y2xlYXJ9ID5DbGVhcjwvYnV0dG9tPlxuICAgICAgICAgICAgPGJ1dHRvbSBvbkNsaWNrPXt1bmRvfSA+VW5kbzwvYnV0dG9tPlxuICAgICAgICAgICAgPENhbnZhc0RyYXdcbiAgICAgICAgICAgICBicnVzaFJhZGl1cz17MX1cbiAgICAgICAgICAgICBoaWRlR3JpZD17ZmFsc2V9XG4gICAgICAgICAgICAgY2F0ZW5hcnlDb2xvcj1cInJlZFwiXG4gICAgICAgICAgICAgc3R5bGU9e3tib3JkZXI6ICcxcHggc29saWQgIzAwMCd9fVxuICAgICAgICAgICAgIHJlZj17Zmlyc3RDYW52YXN9XG4gICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgIDxDYW52YXNEcmF3XG4gICAgICAgICAgICAgcmVmPXtzZWNvbmRDYW52YXN9XG4gICAgICAgICAgICAgaGlkZUdyaWQ9e3RydWV9XG4gICAgICAgICAgICAgZGlzYWJsZWQ9e3RydWV9XG4gICAgICAgICAgICAgLz5cbiAgICAgICAgPC8+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBJbmRleCJdLCJuYW1lcyI6WyJDYW52YXNEcmF3IiwidXNlUmVmIiwiSW5kZXgiLCJmaXJzdENhbnZhcyIsInNlY29uZENhbnZhcyIsImhhbmRsZUNsaWNrIiwiZGF0YSIsImN1cnJlbnQiLCJnZXRTYXZlRGF0YSIsImxvYWRTYXZlRGF0YSIsImNvbnNvbGUiLCJsb2ciLCJjbGVhciIsInVuZG8iLCJoMSIsImJ1dHRvbSIsIm9uQ2xpY2siLCJicnVzaFJhZGl1cyIsImhpZGVHcmlkIiwiY2F0ZW5hcnlDb2xvciIsInN0eWxlIiwiYm9yZGVyIiwicmVmIiwiZGlzYWJsZWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.jsx\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react-canvas-draw":
/*!************************************!*\
  !*** external "react-canvas-draw" ***!
  \************************************/
/***/ ((module) => {

module.exports = require("react-canvas-draw");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/index.jsx"));
module.exports = __webpack_exports__;

})();