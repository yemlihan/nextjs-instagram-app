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
exports.id = "pages/api/recent";
exports.ids = ["pages/api/recent"];
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

/***/ "(api)/./src/pages/api/recent.js":
/*!*********************************!*\
  !*** ./src/pages/api/recent.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./config */ \"(api)/./src/pages/api/config.js\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! fs */ \"fs\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nfunction handler(req, res) {\n    if (req.method === \"GET\") {\n        const filePath = (0,_config__WEBPACK_IMPORTED_MODULE_0__.findFileByName)(path__WEBPACK_IMPORTED_MODULE_2___default().join(process.cwd(), _config__WEBPACK_IMPORTED_MODULE_0__.rootDir), \"recent_follow_requests.json\");\n        if (filePath) {\n            fs__WEBPACK_IMPORTED_MODULE_1___default().readFile(filePath, (err, data)=>{\n                if (err) return res.status(200).send({\n                    message: \"error File!!!\"\n                });\n                const jsonData = JSON.parse(data);\n                return res.status(200).send(jsonData);\n            });\n        } else {\n            return res.status(200).send({\n                message: \"null upload folder\"\n            });\n        }\n    } else {\n    // return res.status(405).json({message: \"Method not allowed!\"})\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvcGFnZXMvYXBpL3JlY2VudC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBbUQ7QUFDL0I7QUFDSTtBQUVULFNBQVNJLFFBQVFDLEdBQUcsRUFBRUMsR0FBRztJQUN0QyxJQUFJRCxJQUFJRSxXQUFXLE9BQU87UUFDeEIsTUFBTUMsV0FBV1AsdURBQWNBLENBQUNFLGdEQUFTTSxDQUFDQyxRQUFRQyxPQUFPWCw0Q0FBT0EsR0FBRztRQUNuRSxJQUFJUSxVQUFVO1lBQ1pOLGtEQUFXVSxDQUFDSixVQUFVLENBQUNLLEtBQUtDO2dCQUMxQixJQUFJRCxLQUFLLE9BQU9QLElBQUlTLE9BQU8sS0FBS0MsS0FBSztvQkFBRUMsU0FBUztnQkFBZ0I7Z0JBQ2hFLE1BQU1DLFdBQVdDLEtBQUtDLE1BQU1OO2dCQUM1QixPQUFPUixJQUFJUyxPQUFPLEtBQUtDLEtBQUtFO1lBQzlCO1FBQ0YsT0FBTztZQUNMLE9BQU9aLElBQUlTLE9BQU8sS0FBS0MsS0FBSztnQkFBRUMsU0FBUztZQUFxQjtRQUM5RDtJQUNGLE9BQU87SUFDTCxnRUFBZ0U7SUFDbEU7QUFDRiIsInNvdXJjZXMiOlsid2VicGFjazovL3JlcS1pbnN0YWdyYW0vLi9zcmMvcGFnZXMvYXBpL3JlY2VudC5qcz82OWM2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHJvb3REaXIsIGZpbmRGaWxlQnlOYW1lIH0gZnJvbSBcIi4vY29uZmlnXCI7XG5pbXBvcnQgZnMgZnJvbSBcImZzXCI7XG5pbXBvcnQgcGF0aCBmcm9tIFwicGF0aFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBoYW5kbGVyKHJlcSwgcmVzKSB7XG4gIGlmIChyZXEubWV0aG9kID09PSBcIkdFVFwiKSB7XG4gICAgY29uc3QgZmlsZVBhdGggPSBmaW5kRmlsZUJ5TmFtZShwYXRoLmpvaW4ocHJvY2Vzcy5jd2QoKSwgcm9vdERpciksIFwicmVjZW50X2ZvbGxvd19yZXF1ZXN0cy5qc29uXCIpO1xuICAgIGlmIChmaWxlUGF0aCkge1xuICAgICAgZnMucmVhZEZpbGUoZmlsZVBhdGgsIChlcnIsIGRhdGEpID0+IHtcbiAgICAgICAgaWYgKGVycikgcmV0dXJuIHJlcy5zdGF0dXMoMjAwKS5zZW5kKHsgbWVzc2FnZTogXCJlcnJvciBGaWxlISEhXCIgfSk7XG4gICAgICAgIGNvbnN0IGpzb25EYXRhID0gSlNPTi5wYXJzZShkYXRhKTtcbiAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoMjAwKS5zZW5kKGpzb25EYXRhKTtcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gcmVzLnN0YXR1cygyMDApLnNlbmQoeyBtZXNzYWdlOiBcIm51bGwgdXBsb2FkIGZvbGRlclwiIH0pO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICAvLyByZXR1cm4gcmVzLnN0YXR1cyg0MDUpLmpzb24oe21lc3NhZ2U6IFwiTWV0aG9kIG5vdCBhbGxvd2VkIVwifSlcbiAgfVxufVxuIl0sIm5hbWVzIjpbInJvb3REaXIiLCJmaW5kRmlsZUJ5TmFtZSIsImZzIiwicGF0aCIsImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJtZXRob2QiLCJmaWxlUGF0aCIsImpvaW4iLCJwcm9jZXNzIiwiY3dkIiwicmVhZEZpbGUiLCJlcnIiLCJkYXRhIiwic3RhdHVzIiwic2VuZCIsIm1lc3NhZ2UiLCJqc29uRGF0YSIsIkpTT04iLCJwYXJzZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./src/pages/api/recent.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./src/pages/api/recent.js"));
module.exports = __webpack_exports__;

})();