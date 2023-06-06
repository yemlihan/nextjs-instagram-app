(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 8393:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ App)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./src/styles/globals.css
var globals = __webpack_require__(108);
// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__(6022);
;// CONCATENATED MODULE: external "@reduxjs/toolkit"
const toolkit_namespaceObject = require("@reduxjs/toolkit");
;// CONCATENATED MODULE: ./src/store/reducers/recent.js
const initialState = {
    recents: []
};
const recentReducer = (state = initialState, action)=>{
    switch(action.type){
        case "RECENT":
            const recentPayload = action.payload;
            const recentDatas = recentPayload.map((recent)=>{
                return recent;
            });
            if (recentDatas.length === 0) {
                console.log("reducers recents error");
            }
            // console.log(recentDatas)
            return {
                ...state,
                recents: recentDatas
            };
        default:
            return state;
    }
};
/* harmony default export */ const recent = (recentReducer);

;// CONCATENATED MODULE: ./src/store/reducers/gtfollowers.js
const gtfollowers_initialState = {
    gts: []
};
const gtsReducer = (state = gtfollowers_initialState, action)=>{
    switch(action.type){
        case "GTS":
            const gtsPayload = action.payload;
            const gtsDatas = gtsPayload.map((gt)=>{
                return gt;
            });
            if (gtsDatas.length === 0) {
                console.log("reducers recents error");
            }
            // console.log(recentDatas)
            return {
                ...state,
                gts: gtsDatas
            };
        default:
            return state;
    }
};
/* harmony default export */ const gtfollowers = (gtsReducer);

;// CONCATENATED MODULE: ./src/store/reducers/unfollowed.js
const unfollowed_initialState = {
    unfollows: []
};
const unfollowReducer = (state = unfollowed_initialState, action)=>{
    switch(action.type){
        case "UNFOLLOW":
            const unfollowPayload = action.payload;
            const unfollowDatas = unfollowPayload.map((unf)=>{
                return unf;
            });
            if (unfollowDatas.length === 0) {
                console.log("reducers unfollow error");
            }
            return {
                ...state,
                unfollows: unfollowDatas
            };
        default:
            return state;
    }
};
/* harmony default export */ const unfollowed = (unfollowReducer);

;// CONCATENATED MODULE: ./src/store/reducers/postsviewed.js
const postsviewed_initialState = {
    postsViewed: []
};
const postsViewedReducer = (state = postsviewed_initialState, action)=>{
    switch(action.type){
        case "POSTSVIEWED":
            const postsViewedPayload = action.payload;
            const postsViewedDatas = postsViewedPayload.map((posts)=>{
                return posts;
            });
            if (postsViewedDatas.length === 0) {
                console.log("reducers recents error");
            }
            return {
                ...state,
                postsViewed: postsViewedDatas
            };
        default:
            return state;
    }
};
/* harmony default export */ const postsviewed = (postsViewedReducer);

;// CONCATENATED MODULE: ./src/store/index.js





const store = (0,toolkit_namespaceObject.configureStore)({
    reducer: {
        recent: recent,
        gts: gtfollowers,
        unfollow: unfollowed,
        postsviewed: postsviewed
    }
});
/* harmony default export */ const src_store = (store);

;// CONCATENATED MODULE: ./src/pages/_app.js




function App({ Component , pageProps  }) {
    return /*#__PURE__*/ jsx_runtime_.jsx(external_react_redux_.Provider, {
        store: src_store,
        children: /*#__PURE__*/ jsx_runtime_.jsx(Component, {
            ...pageProps
        })
    });
}


/***/ }),

/***/ 108:
/***/ (() => {



/***/ }),

/***/ 6022:
/***/ ((module) => {

"use strict";
module.exports = require("react-redux");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(8393));
module.exports = __webpack_exports__;

})();