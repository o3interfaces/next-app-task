"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/products/page",{

/***/ "(app-pages-browser)/./app/products/page.js":
/*!******************************!*\
  !*** ./app/products/page.js ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\nconst page = ()=>{\n    _s();\n    const [data, setData] = useState(null);\n    useEffect(()=>{\n        const fetchData = async ()=>{\n            try {\n                const response = await fetch(\"https://dummyjson.com/products\");\n                const result = await response.json();\n                // Log the data to the console\n                console.log(\"Fetched Data:\", result);\n                setData(result.products);\n            } catch (error) {\n                console.error(\"Error fetching data:\", error);\n            }\n        };\n        fetchData();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"Product Data\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Projects\\\\next-app-task\\\\app\\\\products\\\\page.js\",\n                lineNumber: 27,\n                columnNumber: 13\n            }, undefined),\n            data ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                children: data.map((d)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                children: d.title\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Projects\\\\next-app-task\\\\app\\\\products\\\\page.js\",\n                                lineNumber: 32,\n                                columnNumber: 29\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: d.description\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Projects\\\\next-app-task\\\\app\\\\products\\\\page.js\",\n                                lineNumber: 33,\n                                columnNumber: 29\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                fileName: \"C:\\\\Projects\\\\next-app-task\\\\app\\\\products\\\\page.js\",\n                                lineNumber: 34,\n                                columnNumber: 29\n                            }, undefined)\n                        ]\n                    }, d.id, true, {\n                        fileName: \"C:\\\\Projects\\\\next-app-task\\\\app\\\\products\\\\page.js\",\n                        lineNumber: 31,\n                        columnNumber: 25\n                    }, undefined))\n            }, void 0, false, {\n                fileName: \"C:\\\\Projects\\\\next-app-task\\\\app\\\\products\\\\page.js\",\n                lineNumber: 29,\n                columnNumber: 17\n            }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: \"Loading Products...\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Projects\\\\next-app-task\\\\app\\\\products\\\\page.js\",\n                lineNumber: 39,\n                columnNumber: 17\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Projects\\\\next-app-task\\\\app\\\\products\\\\page.js\",\n        lineNumber: 26,\n        columnNumber: 9\n    }, undefined);\n};\n_s(page, \"fQZRxy/+nAZ7NLS1X4dVhrlp8Go=\");\n/* harmony default export */ __webpack_exports__[\"default\"] = (page);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9wcm9kdWN0cy9wYWdlLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUNtRDtBQUVuRCxNQUFNRyxPQUFPOztJQUNULE1BQU0sQ0FBQ0MsTUFBTUMsUUFBUSxHQUFHQyxTQUFTO0lBRWpDQyxVQUFVO1FBQ04sTUFBTUMsWUFBWTtZQUNkLElBQUk7Z0JBQ0EsTUFBTUMsV0FBVyxNQUFNQyxNQUFNO2dCQUM3QixNQUFNQyxTQUFTLE1BQU1GLFNBQVNHLElBQUk7Z0JBRWxDLDhCQUE4QjtnQkFDOUJDLFFBQVFDLEdBQUcsQ0FBQyxpQkFBaUJIO2dCQUU3Qk4sUUFBUU0sT0FBT0ksUUFBUTtZQUMzQixFQUFFLE9BQU9DLE9BQU87Z0JBQ1pILFFBQVFHLEtBQUssQ0FBQyx3QkFBd0JBO1lBQzFDO1FBQ0o7UUFFQVI7SUFDSixHQUFHLEVBQUU7SUFFTCxxQkFDSSw4REFBQ1M7OzBCQUNHLDhEQUFDQzswQkFBRzs7Ozs7O1lBQ0hkLHFCQUNHLDhEQUFDZTswQkFDSWYsS0FBS2dCLEdBQUcsQ0FBQyxDQUFDQyxrQkFDUCw4REFBQ0o7OzBDQUNHLDhEQUFDSzswQ0FBSUQsRUFBRUUsS0FBSzs7Ozs7OzBDQUNaLDhEQUFDQzswQ0FBR0gsRUFBRUksV0FBVzs7Ozs7OzBDQUNqQiw4REFBQ0M7Ozs7Ozt1QkFIS0wsRUFBRU0sRUFBRTs7Ozs7Ozs7OzBDQVF0Qiw4REFBQ0g7MEJBQUU7Ozs7Ozs7Ozs7OztBQUluQjtHQXZDTXJCO0FBeUNOLCtEQUFlQSxJQUFJQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9wcm9kdWN0cy9wYWdlLmpzPzQzMzUiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCJcclxuaW1wb3J0IFJlYWN0LCB7IFVzZVN0YXRlLCBVc2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcblxyXG5jb25zdCBwYWdlID0gKCkgPT4ge1xyXG4gICAgY29uc3QgW2RhdGEsIHNldERhdGFdID0gdXNlU3RhdGUobnVsbCk7XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBjb25zdCBmZXRjaERhdGEgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKCdodHRwczovL2R1bW15anNvbi5jb20vcHJvZHVjdHMnKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyBMb2cgdGhlIGRhdGEgdG8gdGhlIGNvbnNvbGVcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdGZXRjaGVkIERhdGE6JywgcmVzdWx0KTtcclxuXHJcbiAgICAgICAgICAgICAgICBzZXREYXRhKHJlc3VsdC5wcm9kdWN0cyk7XHJcbiAgICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBmZXRjaGluZyBkYXRhOicsIGVycm9yKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIGZldGNoRGF0YSgpO1xyXG4gICAgfSwgW10pO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPGgxPlByb2R1Y3QgRGF0YTwvaDE+XHJcbiAgICAgICAgICAgIHtkYXRhID8gKFxyXG4gICAgICAgICAgICAgICAgPHVsPlxyXG4gICAgICAgICAgICAgICAgICAgIHtkYXRhLm1hcCgoZCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGtleT17ZC5pZH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDI+e2QudGl0bGV9PC9oMj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPntkLmRlc2NyaXB0aW9ufTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxicj48L2JyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICA8cD5Mb2FkaW5nIFByb2R1Y3RzLi4uPC9wPlxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHBhZ2U7Il0sIm5hbWVzIjpbIlJlYWN0IiwiVXNlU3RhdGUiLCJVc2VFZmZlY3QiLCJwYWdlIiwiZGF0YSIsInNldERhdGEiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsImZldGNoRGF0YSIsInJlc3BvbnNlIiwiZmV0Y2giLCJyZXN1bHQiLCJqc29uIiwiY29uc29sZSIsImxvZyIsInByb2R1Y3RzIiwiZXJyb3IiLCJkaXYiLCJoMSIsInVsIiwibWFwIiwiZCIsImgyIiwidGl0bGUiLCJwIiwiZGVzY3JpcHRpb24iLCJiciIsImlkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/products/page.js\n"));

/***/ })

});