"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./src/store/reducers/postsviewed.js":
/*!*******************************************!*\
  !*** ./src/store/reducers/postsviewed.js ***!
  \*******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\nconst initialState = {\n    postsViewed: []\n};\nconst postsViewedReducer = function() {\n    let state = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : initialState, action = arguments.length > 1 ? arguments[1] : void 0;\n    switch(action.type){\n        case \"GET\":\n            console.log(action.payload);\n            const postsViewedPayload = action.payload;\n            const postsViewedDatas = postsViewedPayload.map((posts)=>{\n                return posts;\n            });\n            if (postsViewedDatas.length === 0) {\n                console.log(\"reducers recents error\");\n            }\n            // console.log(recentDatas)\n            return {\n                ...state,\n                postsviewed: postsViewedDatas\n            };\n        default:\n            return state;\n    }\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (postsViewedReducer);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc3RvcmUvcmVkdWNlcnMvcG9zdHN2aWV3ZWQuanMuanMiLCJtYXBwaW5ncyI6IjtBQUFBLE1BQU1BLGVBQWU7SUFDakJDLGFBQWEsRUFBRTtBQUNuQjtBQUVBLE1BQU1DLHFCQUFxQixXQUFrQztRQUFqQ0MseUVBQVFILGNBQWNJO0lBQzlDLE9BQVFBLE9BQU9DLElBQUk7UUFDZixLQUFLO1lBQ0RDLFFBQVFDLEdBQUcsQ0FBQ0gsT0FBT0ksT0FBTztZQUMxQixNQUFNQyxxQkFBcUJMLE9BQU9JLE9BQU87WUFDekMsTUFBTUUsbUJBQW1CRCxtQkFBbUJFLEdBQUcsQ0FBQyxDQUFDQyxRQUFVO2dCQUFFLE9BQU9BO1lBQUs7WUFDekUsSUFBSUYsaUJBQWlCRyxNQUFNLEtBQUssR0FBRztnQkFDL0JQLFFBQVFDLEdBQUcsQ0FBQztZQUNoQixDQUFDO1lBQ0QsMkJBQTJCO1lBQzNCLE9BQU87Z0JBQUMsR0FBR0osS0FBSztnQkFBRVcsYUFBYUo7WUFBZ0I7UUFDbkQ7WUFDSSxPQUFPUDtJQUNmO0FBQ0o7QUFFQSwrREFBZUQsa0JBQWtCQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9zdG9yZS9yZWR1Y2Vycy9wb3N0c3ZpZXdlZC5qcz9jMDEzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcbiAgICBwb3N0c1ZpZXdlZDogW11cbn1cblxuY29uc3QgcG9zdHNWaWV3ZWRSZWR1Y2VyID0gKHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb24pID0+IHtcbiAgICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgICAgIGNhc2UgXCJHRVRcIjpcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGFjdGlvbi5wYXlsb2FkKVxuICAgICAgICAgICAgY29uc3QgcG9zdHNWaWV3ZWRQYXlsb2FkID0gYWN0aW9uLnBheWxvYWQ7XG4gICAgICAgICAgICBjb25zdCBwb3N0c1ZpZXdlZERhdGFzID0gcG9zdHNWaWV3ZWRQYXlsb2FkLm1hcCgocG9zdHMpID0+IHsgcmV0dXJuIHBvc3RzfSlcbiAgICAgICAgICAgIGlmIChwb3N0c1ZpZXdlZERhdGFzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdyZWR1Y2VycyByZWNlbnRzIGVycm9yJylcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHJlY2VudERhdGFzKVxuICAgICAgICAgICAgcmV0dXJuIHsuLi5zdGF0ZSwgcG9zdHN2aWV3ZWQ6IHBvc3RzVmlld2VkRGF0YXN9XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICByZXR1cm4gc3RhdGU7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBwb3N0c1ZpZXdlZFJlZHVjZXI7Il0sIm5hbWVzIjpbImluaXRpYWxTdGF0ZSIsInBvc3RzVmlld2VkIiwicG9zdHNWaWV3ZWRSZWR1Y2VyIiwic3RhdGUiLCJhY3Rpb24iLCJ0eXBlIiwiY29uc29sZSIsImxvZyIsInBheWxvYWQiLCJwb3N0c1ZpZXdlZFBheWxvYWQiLCJwb3N0c1ZpZXdlZERhdGFzIiwibWFwIiwicG9zdHMiLCJsZW5ndGgiLCJwb3N0c3ZpZXdlZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/store/reducers/postsviewed.js\n"));

/***/ })

});