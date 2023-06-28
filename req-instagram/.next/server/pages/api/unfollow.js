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
exports.id = "pages/api/unfollow";
exports.ids = ["pages/api/unfollow"];
exports.modules = {

/***/ "multer":
/*!*************************!*\
  !*** external "multer" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("multer");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("path");

/***/ }),

/***/ "(api)/./src/pages/api/config.js":
/*!*********************************!*\
  !*** ./src/pages/api/config.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   findFileByName: () => (/* binding */ findFileByName),\n/* harmony export */   rootDir: () => (/* binding */ rootDir),\n/* harmony export */   upload: () => (/* binding */ upload)\n/* harmony export */ });\n/* harmony import */ var multer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! multer */ \"multer\");\n/* harmony import */ var multer__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(multer__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! fs */ \"fs\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nconst storage = multer__WEBPACK_IMPORTED_MODULE_0___default().diskStorage({\n    destination: (req, file, cb)=>{\n        cb(null, \"uploads/\");\n    },\n    filename: (req, file, cb)=>{\n        cb(null, file.originalname);\n    }\n});\nconst upload = multer__WEBPACK_IMPORTED_MODULE_0___default()({\n    storage\n});\n// Klasör ve dosya yolumuz\nconst rootDir = \"./uploads\";\nfunction findFileByName(dirPath, fileName) {\n    if (!fs__WEBPACK_IMPORTED_MODULE_1___default().existsSync(dirPath)) {\n        throw new Error(\"Klas\\xf6r bulunamadı.\");\n    }\n    const files = fs__WEBPACK_IMPORTED_MODULE_1___default().readdirSync(dirPath);\n    for (const file of files){\n        const filePath = path__WEBPACK_IMPORTED_MODULE_2___default().join(dirPath, file);\n        const stat = fs__WEBPACK_IMPORTED_MODULE_1___default().statSync(filePath);\n        if (stat.isDirectory()) {\n            const foundFilePath = findFileByName(filePath, fileName);\n            if (foundFilePath) {\n                return foundFilePath;\n            }\n        } else if (stat.isFile() && file === fileName) {\n            return filePath;\n        }\n    }\n    return null;\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvcGFnZXMvYXBpL2NvbmZpZy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBNEI7QUFDUjtBQUNJO0FBR3hCLE1BQU1HLFVBQVVILHlEQUFrQkksQ0FBQztJQUNqQ0MsYUFBYSxDQUFDQyxLQUFLQyxNQUFNQztRQUN2QkEsR0FBRyxNQUFNO0lBQ1g7SUFDQUMsVUFBVSxDQUFDSCxLQUFLQyxNQUFNQztRQUNwQkEsR0FBRyxNQUFNRCxLQUFLRztJQUNoQjtBQUNGO0FBRU8sTUFBTUMsU0FBU1gsNkNBQU1BLENBQUM7SUFBRUc7QUFBUSxHQUFHO0FBRTFDLDBCQUEwQjtBQUNuQixNQUFNUyxVQUFVLFlBQVk7QUFHNUIsU0FBU0MsZUFBZUMsT0FBTyxFQUFFQyxRQUFRO0lBQzlDLElBQUksQ0FBQ2Qsb0RBQWFlLENBQUNGLFVBQVU7UUFDM0IsTUFBTSxJQUFJRyxNQUFNO0lBQ2xCO0lBRUEsTUFBTUMsUUFBUWpCLHFEQUFja0IsQ0FBQ0w7SUFFN0IsS0FBSyxNQUFNUCxRQUFRVyxNQUFPO1FBQ3hCLE1BQU1FLFdBQVdsQixnREFBU21CLENBQUNQLFNBQVNQO1FBQ3BDLE1BQU1lLE9BQU9yQixrREFBV3NCLENBQUNIO1FBRXpCLElBQUlFLEtBQUtFLGVBQWU7WUFDdEIsTUFBTUMsZ0JBQWdCWixlQUFlTyxVQUFVTDtZQUMvQyxJQUFJVSxlQUFlO2dCQUNqQixPQUFPQTtZQUNUO1FBQ0YsT0FBTyxJQUFJSCxLQUFLSSxZQUFZbkIsU0FBU1EsVUFBVTtZQUM3QyxPQUFPSztRQUNUO0lBQ0Y7SUFFQSxPQUFPO0FBQ1QiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXEtaW5zdGFncmFtLy4vc3JjL3BhZ2VzL2FwaS9jb25maWcuanM/Yjc3MSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbXVsdGVyIGZyb20gXCJtdWx0ZXJcIjsgXG5pbXBvcnQgZnMgZnJvbSBcImZzXCI7XG5pbXBvcnQgcGF0aCBmcm9tIFwicGF0aFwiO1xuXG5cbmNvbnN0IHN0b3JhZ2UgPSBtdWx0ZXIuZGlza1N0b3JhZ2Uoe1xuICBkZXN0aW5hdGlvbjogKHJlcSwgZmlsZSwgY2IpID0+IHtcbiAgICBjYihudWxsLCBcInVwbG9hZHMvXCIpO1xuICB9LFxuICBmaWxlbmFtZTogKHJlcSwgZmlsZSwgY2IpID0+IHtcbiAgICBjYihudWxsLCBmaWxlLm9yaWdpbmFsbmFtZSk7XG4gIH0sXG59KTtcblxuZXhwb3J0IGNvbnN0IHVwbG9hZCA9IG11bHRlcih7IHN0b3JhZ2UgfSk7XG5cbi8vIEtsYXPDtnIgdmUgZG9zeWEgeW9sdW11elxuZXhwb3J0IGNvbnN0IHJvb3REaXIgPSAnLi91cGxvYWRzJztcblxuXG5leHBvcnQgZnVuY3Rpb24gZmluZEZpbGVCeU5hbWUoZGlyUGF0aCwgZmlsZU5hbWUpIHtcbiAgaWYgKCFmcy5leGlzdHNTeW5jKGRpclBhdGgpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdLbGFzw7ZyIGJ1bHVuYW1hZMSxLicpO1xuICB9XG5cbiAgY29uc3QgZmlsZXMgPSBmcy5yZWFkZGlyU3luYyhkaXJQYXRoKTtcblxuICBmb3IgKGNvbnN0IGZpbGUgb2YgZmlsZXMpIHtcbiAgICBjb25zdCBmaWxlUGF0aCA9IHBhdGguam9pbihkaXJQYXRoLCBmaWxlKTtcbiAgICBjb25zdCBzdGF0ID0gZnMuc3RhdFN5bmMoZmlsZVBhdGgpO1xuXG4gICAgaWYgKHN0YXQuaXNEaXJlY3RvcnkoKSkge1xuICAgICAgY29uc3QgZm91bmRGaWxlUGF0aCA9IGZpbmRGaWxlQnlOYW1lKGZpbGVQYXRoLCBmaWxlTmFtZSk7XG4gICAgICBpZiAoZm91bmRGaWxlUGF0aCkge1xuICAgICAgICByZXR1cm4gZm91bmRGaWxlUGF0aDtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKHN0YXQuaXNGaWxlKCkgJiYgZmlsZSA9PT0gZmlsZU5hbWUpIHtcbiAgICAgIHJldHVybiBmaWxlUGF0aDtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gbnVsbDtcbn1cblxuIl0sIm5hbWVzIjpbIm11bHRlciIsImZzIiwicGF0aCIsInN0b3JhZ2UiLCJkaXNrU3RvcmFnZSIsImRlc3RpbmF0aW9uIiwicmVxIiwiZmlsZSIsImNiIiwiZmlsZW5hbWUiLCJvcmlnaW5hbG5hbWUiLCJ1cGxvYWQiLCJyb290RGlyIiwiZmluZEZpbGVCeU5hbWUiLCJkaXJQYXRoIiwiZmlsZU5hbWUiLCJleGlzdHNTeW5jIiwiRXJyb3IiLCJmaWxlcyIsInJlYWRkaXJTeW5jIiwiZmlsZVBhdGgiLCJqb2luIiwic3RhdCIsInN0YXRTeW5jIiwiaXNEaXJlY3RvcnkiLCJmb3VuZEZpbGVQYXRoIiwiaXNGaWxlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./src/pages/api/config.js\n");

/***/ }),

/***/ "(api)/./src/pages/api/unfollow.js":
/*!***********************************!*\
  !*** ./src/pages/api/unfollow.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./config */ \"(api)/./src/pages/api/config.js\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! fs */ \"fs\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nfunction handler(req, res) {\n    if (req.method === \"GET\") {\n        const filePath = (0,_config__WEBPACK_IMPORTED_MODULE_0__.findFileByName)(path__WEBPACK_IMPORTED_MODULE_2___default().join(process.cwd(), _config__WEBPACK_IMPORTED_MODULE_0__.rootDir), \"recently_unfollowed_accounts.json\");\n        if (filePath) {\n            fs__WEBPACK_IMPORTED_MODULE_1___default().readFile(filePath, (err, data)=>{\n                if (err) return res.status(200).send({\n                    message: \"error File!!!\"\n                });\n                const jsonData = JSON.parse(data);\n                return res.status(200).send(jsonData);\n            });\n        } else {\n            return res.status(200).send({\n                message: \"null upload folder\"\n            });\n        }\n    } else {\n    // return res.status(405).json({message: \"Method not allowed!\"})\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvcGFnZXMvYXBpL3VuZm9sbG93LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFtRDtBQUMvQjtBQUNJO0FBRVQsU0FBU0ksUUFBUUMsR0FBRyxFQUFFQyxHQUFHO0lBQ3RDLElBQUlELElBQUlFLFdBQVcsT0FBTztRQUN4QixNQUFNQyxXQUFXUCx1REFBY0EsQ0FBQ0UsZ0RBQVNNLENBQUNDLFFBQVFDLE9BQU9YLDRDQUFPQSxHQUFHO1FBQ25FLElBQUlRLFVBQVU7WUFDWk4sa0RBQVdVLENBQUNKLFVBQVUsQ0FBQ0ssS0FBS0M7Z0JBQzFCLElBQUlELEtBQUssT0FBT1AsSUFBSVMsT0FBTyxLQUFLQyxLQUFLO29CQUFFQyxTQUFTO2dCQUFnQjtnQkFDaEUsTUFBTUMsV0FBV0MsS0FBS0MsTUFBTU47Z0JBQzVCLE9BQU9SLElBQUlTLE9BQU8sS0FBS0MsS0FBS0U7WUFDOUI7UUFDRixPQUFPO1lBQ0wsT0FBT1osSUFBSVMsT0FBTyxLQUFLQyxLQUFLO2dCQUFFQyxTQUFTO1lBQXFCO1FBQzlEO0lBQ0YsT0FBTztJQUNMLGdFQUFnRTtJQUNsRTtBQUNGIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVxLWluc3RhZ3JhbS8uL3NyYy9wYWdlcy9hcGkvdW5mb2xsb3cuanM/NDkzMiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyByb290RGlyLCBmaW5kRmlsZUJ5TmFtZSB9IGZyb20gXCIuL2NvbmZpZ1wiO1xuaW1wb3J0IGZzIGZyb20gXCJmc1wiO1xuaW1wb3J0IHBhdGggZnJvbSBcInBhdGhcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaGFuZGxlcihyZXEsIHJlcykge1xuICBpZiAocmVxLm1ldGhvZCA9PT0gXCJHRVRcIikge1xuICAgIGNvbnN0IGZpbGVQYXRoID0gZmluZEZpbGVCeU5hbWUocGF0aC5qb2luKHByb2Nlc3MuY3dkKCksIHJvb3REaXIpLCBcInJlY2VudGx5X3VuZm9sbG93ZWRfYWNjb3VudHMuanNvblwiKTtcbiAgICBpZiAoZmlsZVBhdGgpIHtcbiAgICAgIGZzLnJlYWRGaWxlKGZpbGVQYXRoLCAoZXJyLCBkYXRhKSA9PiB7XG4gICAgICAgIGlmIChlcnIpIHJldHVybiByZXMuc3RhdHVzKDIwMCkuc2VuZCh7IG1lc3NhZ2U6IFwiZXJyb3IgRmlsZSEhIVwiIH0pO1xuICAgICAgICBjb25zdCBqc29uRGF0YSA9IEpTT04ucGFyc2UoZGF0YSk7XG4gICAgICAgIHJldHVybiByZXMuc3RhdHVzKDIwMCkuc2VuZChqc29uRGF0YSk7XG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoMjAwKS5zZW5kKHsgbWVzc2FnZTogXCJudWxsIHVwbG9hZCBmb2xkZXJcIiB9KTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgLy8gcmV0dXJuIHJlcy5zdGF0dXMoNDA1KS5qc29uKHttZXNzYWdlOiBcIk1ldGhvZCBub3QgYWxsb3dlZCFcIn0pXG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJyb290RGlyIiwiZmluZEZpbGVCeU5hbWUiLCJmcyIsInBhdGgiLCJoYW5kbGVyIiwicmVxIiwicmVzIiwibWV0aG9kIiwiZmlsZVBhdGgiLCJqb2luIiwicHJvY2VzcyIsImN3ZCIsInJlYWRGaWxlIiwiZXJyIiwiZGF0YSIsInN0YXR1cyIsInNlbmQiLCJtZXNzYWdlIiwianNvbkRhdGEiLCJKU09OIiwicGFyc2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./src/pages/api/unfollow.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./src/pages/api/unfollow.js"));
module.exports = __webpack_exports__;

})();