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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"fetchPostViewed\": function() { return /* binding */ fetchPostViewed; }\n/* harmony export */ });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n\nconst fetchPostViewed = ()=>{\n    return (dispatch)=>{\n        axios__WEBPACK_IMPORTED_MODULE_0__[\"default\"].get(\"http://localhost:3001/postsviewed\").then((response)=>{\n            if (response.data && response.data.impressions_history_posts_seen.length > 0) {\n                const postsVieweds = response.data.impressions_history_posts_seen.map((item)=>{\n                    return item;\n                });\n                console.log(postsVieweds);\n                dispatch({\n                    type: \"POSTSVIEWED\",\n                    payload: postsVieweds\n                });\n            }\n        }).catch((err)=>{\n            console.log(err);\n        });\n    };\n};\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc3RvcmUvYWN0aW9ucy9wb3N0dmlld2VkLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQTBCO0FBRW5CLE1BQU1DLGtCQUFrQixJQUFNO0lBQ25DLE9BQU8sQ0FBQ0MsV0FBYTtRQUNuQkYsaURBQ00sQ0FBQyxxQ0FDSkksSUFBSSxDQUFDLENBQUNDLFdBQWE7WUFDbEIsSUFBSUEsU0FBU0MsSUFBSSxJQUFJRCxTQUFTQyxJQUFJLENBQUNDLDhCQUE4QixDQUFDQyxNQUFNLEdBQUcsR0FBRztnQkFFNUUsTUFBTUMsZUFBZUosU0FBU0MsSUFBSSxDQUFDQyw4QkFBOEIsQ0FBQ0csR0FBRyxDQUFDLENBQUNDLE9BQVM7b0JBQzlFLE9BQU9BO2dCQUNUO2dCQUNBQyxRQUFRQyxHQUFHLENBQUNKO2dCQUNaUCxTQUFTO29CQUFFWSxNQUFNO29CQUFlQyxTQUFTTjtnQkFBYTtZQUN4RCxDQUFDO1FBQ0gsR0FDQ08sS0FBSyxDQUFDLENBQUNDLE1BQVE7WUFDZEwsUUFBUUMsR0FBRyxDQUFDSTtRQUNkO0lBQ0o7QUFDRixFQUFFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9zdG9yZS9hY3Rpb25zL3Bvc3R2aWV3ZWQuanM/NWExNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5cbmV4cG9ydCBjb25zdCBmZXRjaFBvc3RWaWV3ZWQgPSAoKSA9PiB7XG4gIHJldHVybiAoZGlzcGF0Y2gpID0+IHtcbiAgICBheGlvc1xuICAgICAgLmdldChcImh0dHA6Ly9sb2NhbGhvc3Q6MzAwMS9wb3N0c3ZpZXdlZFwiKVxuICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgIGlmIChyZXNwb25zZS5kYXRhICYmIHJlc3BvbnNlLmRhdGEuaW1wcmVzc2lvbnNfaGlzdG9yeV9wb3N0c19zZWVuLmxlbmd0aCA+IDApIHtcblxuICAgICAgICAgIGNvbnN0IHBvc3RzVmlld2VkcyA9IHJlc3BvbnNlLmRhdGEuaW1wcmVzc2lvbnNfaGlzdG9yeV9wb3N0c19zZWVuLm1hcCgoaXRlbSkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIGl0ZW07XG4gICAgICAgICAgfSk7XG4gICAgICAgICAgY29uc29sZS5sb2cocG9zdHNWaWV3ZWRzKVxuICAgICAgICAgIGRpc3BhdGNoKHsgdHlwZTogXCJQT1NUU1ZJRVdFRFwiLCBwYXlsb2FkOiBwb3N0c1ZpZXdlZHMgfSk7XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgICAuY2F0Y2goKGVycikgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xuICAgICAgfSk7XG4gIH07XG59O1xuIl0sIm5hbWVzIjpbImF4aW9zIiwiZmV0Y2hQb3N0Vmlld2VkIiwiZGlzcGF0Y2giLCJnZXQiLCJ0aGVuIiwicmVzcG9uc2UiLCJkYXRhIiwiaW1wcmVzc2lvbnNfaGlzdG9yeV9wb3N0c19zZWVuIiwibGVuZ3RoIiwicG9zdHNWaWV3ZWRzIiwibWFwIiwiaXRlbSIsImNvbnNvbGUiLCJsb2ciLCJ0eXBlIiwicGF5bG9hZCIsImNhdGNoIiwiZXJyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/store/actions/postviewed.js\n"));

/***/ })

});