"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.jsx":
/*!*************************!*\
  !*** ./pages/index.jsx ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_canvas_draw__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-canvas-draw */ \"./node_modules/react-canvas-draw/es/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\n\nconst Index = ()=>{\n    _s();\n    const firstCanvas = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);\n    const secondCanvas = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);\n    const handleClick = ()=>{\n        const data = firstCanvas.current.getSaveData();\n        secondCanvas.current.loadSaveData(data);\n        console.log(data);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"Hello World\"\n            }, void 0, false, {\n                fileName: \"/home/jhosbel/Proyectos/Draw/pages/index.jsx\",\n                lineNumber: 17,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"buttom\", {\n                onClick: handleClick,\n                children: \"Save Drawing\"\n            }, void 0, false, {\n                fileName: \"/home/jhosbel/Proyectos/Draw/pages/index.jsx\",\n                lineNumber: 18,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_canvas_draw__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                brushRadius: 1,\n                hideGrid: false,\n                catenaryColor: \"red\",\n                style: {\n                    border: \"1px solid #000\"\n                },\n                ref: firstCanvas\n            }, void 0, false, {\n                fileName: \"/home/jhosbel/Proyectos/Draw/pages/index.jsx\",\n                lineNumber: 19,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_canvas_draw__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                ref: secondCanvas,\n                hideGrid: true,\n                disabled: true\n            }, void 0, false, {\n                fileName: \"/home/jhosbel/Proyectos/Draw/pages/index.jsx\",\n                lineNumber: 27,\n                columnNumber: 14\n            }, undefined)\n        ]\n    }, void 0, true);\n};\n_s(Index, \"DghGvjm1sa+YBbLLpME+udjMhlo=\");\n_c = Index;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Index);\nvar _c;\n$RefreshReg$(_c, \"Index\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qc3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBMEM7QUFDWjtBQUU5QixNQUFNRSxRQUFRLElBQU07O0lBRWhCLE1BQU1DLGNBQWNGLDZDQUFNQSxDQUFDLElBQUk7SUFDL0IsTUFBTUcsZUFBZUgsNkNBQU1BLENBQUMsSUFBSTtJQUVoQyxNQUFNSSxjQUFjLElBQU07UUFDdEIsTUFBTUMsT0FBT0gsWUFBWUksT0FBTyxDQUFDQyxXQUFXO1FBQzVDSixhQUFhRyxPQUFPLENBQUNFLFlBQVksQ0FBQ0g7UUFDbENJLFFBQVFDLEdBQUcsQ0FBQ0w7SUFDaEI7SUFFQSxxQkFDSTs7MEJBQ0ksOERBQUNNOzBCQUFHOzs7Ozs7MEJBQ0osOERBQUNDO2dCQUFPQyxTQUFTVDswQkFBYzs7Ozs7OzBCQUMvQiw4REFBQ0wseURBQVVBO2dCQUNWZSxhQUFhO2dCQUNiQyxVQUFVLEtBQUs7Z0JBQ2ZDLGVBQWM7Z0JBQ2RDLE9BQU87b0JBQUNDLFFBQVE7Z0JBQWdCO2dCQUNoQ0MsS0FBS2pCOzs7Ozs7MEJBR0wsOERBQUNILHlEQUFVQTtnQkFDWG9CLEtBQUtoQjtnQkFDTFksVUFBVSxJQUFJO2dCQUNkSyxVQUFVLElBQUk7Ozs7Ozs7O0FBSTNCO0dBOUJNbkI7S0FBQUE7QUFnQ04sK0RBQWVBLEtBQUtBLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanN4PzdmZmQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IENhbnZhc0RyYXcgZnJvbSAncmVhY3QtY2FudmFzLWRyYXcnXG5pbXBvcnQgeyB1c2VSZWYgfSBmcm9tICdyZWFjdCdcblxuY29uc3QgSW5kZXggPSAoKSA9PiB7XG5cbiAgICBjb25zdCBmaXJzdENhbnZhcyA9IHVzZVJlZihudWxsKVxuICAgIGNvbnN0IHNlY29uZENhbnZhcyA9IHVzZVJlZihudWxsKVxuXG4gICAgY29uc3QgaGFuZGxlQ2xpY2sgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGRhdGEgPSBmaXJzdENhbnZhcy5jdXJyZW50LmdldFNhdmVEYXRhKClcbiAgICAgICAgc2Vjb25kQ2FudmFzLmN1cnJlbnQubG9hZFNhdmVEYXRhKGRhdGEpXG4gICAgICAgIGNvbnNvbGUubG9nKGRhdGEpXG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPD5cbiAgICAgICAgICAgIDxoMT5IZWxsbyBXb3JsZDwvaDE+XG4gICAgICAgICAgICA8YnV0dG9tIG9uQ2xpY2s9e2hhbmRsZUNsaWNrfSA+U2F2ZSBEcmF3aW5nPC9idXR0b20+XG4gICAgICAgICAgICA8Q2FudmFzRHJhd1xuICAgICAgICAgICAgIGJydXNoUmFkaXVzPXsxfVxuICAgICAgICAgICAgIGhpZGVHcmlkPXtmYWxzZX1cbiAgICAgICAgICAgICBjYXRlbmFyeUNvbG9yPVwicmVkXCJcbiAgICAgICAgICAgICBzdHlsZT17e2JvcmRlcjogJzFweCBzb2xpZCAjMDAwJ319XG4gICAgICAgICAgICAgcmVmPXtmaXJzdENhbnZhc31cbiAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgXG4gICAgICAgICAgICAgPENhbnZhc0RyYXdcbiAgICAgICAgICAgICByZWY9e3NlY29uZENhbnZhc31cbiAgICAgICAgICAgICBoaWRlR3JpZD17dHJ1ZX1cbiAgICAgICAgICAgICBkaXNhYmxlZD17dHJ1ZX1cbiAgICAgICAgICAgICAvPlxuICAgICAgICA8Lz5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEluZGV4Il0sIm5hbWVzIjpbIkNhbnZhc0RyYXciLCJ1c2VSZWYiLCJJbmRleCIsImZpcnN0Q2FudmFzIiwic2Vjb25kQ2FudmFzIiwiaGFuZGxlQ2xpY2siLCJkYXRhIiwiY3VycmVudCIsImdldFNhdmVEYXRhIiwibG9hZFNhdmVEYXRhIiwiY29uc29sZSIsImxvZyIsImgxIiwiYnV0dG9tIiwib25DbGljayIsImJydXNoUmFkaXVzIiwiaGlkZUdyaWQiLCJjYXRlbmFyeUNvbG9yIiwic3R5bGUiLCJib3JkZXIiLCJyZWYiLCJkaXNhYmxlZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.jsx\n"));

/***/ })

});