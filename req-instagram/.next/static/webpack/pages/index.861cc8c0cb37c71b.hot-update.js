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

/***/ "./src/store/actions/postviewed.js":
/*!*****************************************!*\
  !*** ./src/store/actions/postviewed.js ***!
  \*****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"fetchPostViewed\": function() { return /* binding */ fetchPostViewed; }\n/* harmony export */ });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n\nconst fetchPostViewed = ()=>{\n    return (dispatch)=>{\n        axios__WEBPACK_IMPORTED_MODULE_0__[\"default\"].get(\"http://localhost:3001/postsviewed\").then((response)=>{\n            if (response.data && response.data.length > 0) {\n                const postsViewed = response.data.map((item)=>{\n                    return item;\n                });\n                dispatch({\n                    type: \"POSTSVIEWED\",\n                    payload: postsViewed\n                });\n            }\n        }).catch((err)=>{\n            console.log(err);\n        });\n    };\n};\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc3RvcmUvYWN0aW9ucy9wb3N0dmlld2VkLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQTBCO0FBRW5CLE1BQU1DLGtCQUFrQixJQUFNO0lBQ25DLE9BQU8sQ0FBQ0MsV0FBYTtRQUNuQkYsaURBQ00sQ0FBQyxxQ0FDSkksSUFBSSxDQUFDLENBQUNDLFdBQWE7WUFDbEIsSUFBSUEsU0FBU0MsSUFBSSxJQUFJRCxTQUFTQyxJQUFJLENBQUNDLE1BQU0sR0FBRyxHQUFHO2dCQUM3QyxNQUFNQyxjQUFjSCxTQUFTQyxJQUFJLENBQUNHLEdBQUcsQ0FBQyxDQUFDQyxPQUFTO29CQUM5QyxPQUFPQTtnQkFDVDtnQkFFQVIsU0FBUztvQkFBRVMsTUFBTTtvQkFBZUMsU0FBU0o7Z0JBQVk7WUFDdkQsQ0FBQztRQUNILEdBQ0NLLEtBQUssQ0FBQyxDQUFDQyxNQUFRO1lBQ2RDLFFBQVFDLEdBQUcsQ0FBQ0Y7UUFDZDtJQUNKO0FBQ0YsRUFBRSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvc3RvcmUvYWN0aW9ucy9wb3N0dmlld2VkLmpzPzVhMTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuXG5leHBvcnQgY29uc3QgZmV0Y2hQb3N0Vmlld2VkID0gKCkgPT4ge1xuICByZXR1cm4gKGRpc3BhdGNoKSA9PiB7XG4gICAgYXhpb3NcbiAgICAgIC5nZXQoXCJodHRwOi8vbG9jYWxob3N0OjMwMDEvcG9zdHN2aWV3ZWRcIilcbiAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICBpZiAocmVzcG9uc2UuZGF0YSAmJiByZXNwb25zZS5kYXRhLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICBjb25zdCBwb3N0c1ZpZXdlZCA9IHJlc3BvbnNlLmRhdGEubWFwKChpdGVtKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gaXRlbTtcbiAgICAgICAgICB9KTtcblxuICAgICAgICAgIGRpc3BhdGNoKHsgdHlwZTogXCJQT1NUU1ZJRVdFRFwiLCBwYXlsb2FkOiBwb3N0c1ZpZXdlZCB9KTtcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKGVycik7XG4gICAgICB9KTtcbiAgfTtcbn07XG4iXSwibmFtZXMiOlsiYXhpb3MiLCJmZXRjaFBvc3RWaWV3ZWQiLCJkaXNwYXRjaCIsImdldCIsInRoZW4iLCJyZXNwb25zZSIsImRhdGEiLCJsZW5ndGgiLCJwb3N0c1ZpZXdlZCIsIm1hcCIsIml0ZW0iLCJ0eXBlIiwicGF5bG9hZCIsImNhdGNoIiwiZXJyIiwiY29uc29sZSIsImxvZyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/store/actions/postviewed.js\n"));

/***/ })

});