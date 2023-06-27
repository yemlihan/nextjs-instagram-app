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
exports.id = "pages/api/upload";
exports.ids = ["pages/api/upload"];
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

/***/ "(api)/./src/pages/api/upload.js":
/*!*********************************!*\
  !*** ./src/pages/api/upload.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   config: () => (/* binding */ config),\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./config */ \"(api)/./src/pages/api/config.js\");\n\nfunction handler(req, res) {\n    if (req.method === \"POST\") {\n        const uploadFiles = _config__WEBPACK_IMPORTED_MODULE_0__.upload.array(\"files\");\n        uploadFiles(req, res, (error)=>{\n            if (error) {\n                console.error(error);\n                return res.status(500).json({\n                    error: \"Dosya y\\xfckleme hatası.\"\n                });\n            }\n            const files = req.files;\n            if (!files || files.length === 0) {\n                return res.status(400).json({\n                    error: \"Y\\xfcklenen dosya bulunamadı.\"\n                });\n            }\n            res.send({\n                items: req.files,\n                message: \"Successful\"\n            });\n        });\n    } else if (req.method === \"GET\") {}\n}\nconst config = {\n    api: {\n        bodyParser: false\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvcGFnZXMvYXBpL3VwbG9hZC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBa0M7QUFFbkIsU0FBU0MsUUFBUUMsR0FBRyxFQUFFQyxHQUFHO0lBQ3RDLElBQUlELElBQUlFLFdBQVcsUUFBUTtRQUN6QixNQUFNQyxjQUFjTCwyQ0FBTUEsQ0FBQ00sTUFBTTtRQUNqQ0QsWUFBWUgsS0FBS0MsS0FBSyxDQUFDSTtZQUNyQixJQUFJQSxPQUFPO2dCQUNUQyxRQUFRRCxNQUFNQTtnQkFDZCxPQUFPSixJQUFJTSxPQUFPLEtBQUtDLEtBQUs7b0JBQUVILE9BQU87Z0JBQXdCO1lBQy9EO1lBRUEsTUFBTUksUUFBUVQsSUFBSVM7WUFDbEIsSUFBSSxDQUFDQSxTQUFTQSxNQUFNQyxXQUFXLEdBQUc7Z0JBQ2hDLE9BQU9ULElBQUlNLE9BQU8sS0FBS0MsS0FBSztvQkFBRUgsT0FBTztnQkFBNkI7WUFDcEU7WUFFQUosSUFBSVUsS0FBSztnQkFBRUMsT0FBT1osSUFBSVM7Z0JBQU9JLFNBQVM7WUFBYTtRQUNyRDtJQUNGLE9BQU8sSUFBSWIsSUFBSUUsV0FBVyxPQUFPLENBQ2pDO0FBQ0Y7QUFFTyxNQUFNWSxTQUFTO0lBQ3BCQyxLQUFLO1FBQUVDLFlBQVk7SUFBTTtBQUMzQixFQUFFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVxLWluc3RhZ3JhbS8uL3NyYy9wYWdlcy9hcGkvdXBsb2FkLmpzPzUzMzQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXBsb2FkIH0gZnJvbSBcIi4vY29uZmlnXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGhhbmRsZXIocmVxLCByZXMpIHtcbiAgaWYgKHJlcS5tZXRob2QgPT09IFwiUE9TVFwiKSB7XG4gICAgY29uc3QgdXBsb2FkRmlsZXMgPSB1cGxvYWQuYXJyYXkoXCJmaWxlc1wiKTtcbiAgICB1cGxvYWRGaWxlcyhyZXEsIHJlcywgKGVycm9yKSA9PiB7XG4gICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XG4gICAgICAgIHJldHVybiByZXMuc3RhdHVzKDUwMCkuanNvbih7IGVycm9yOiBcIkRvc3lhIHnDvGtsZW1lIGhhdGFzxLEuXCIgfSk7XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGZpbGVzID0gcmVxLmZpbGVzO1xuICAgICAgaWYgKCFmaWxlcyB8fCBmaWxlcy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNDAwKS5qc29uKHsgZXJyb3I6IFwiWcO8a2xlbmVuIGRvc3lhIGJ1bHVuYW1hZMSxLlwiIH0pO1xuICAgICAgfVxuXG4gICAgICByZXMuc2VuZCh7IGl0ZW1zOiByZXEuZmlsZXMsIG1lc3NhZ2U6IFwiU3VjY2Vzc2Z1bFwiIH0pO1xuICAgIH0pO1xuICB9IGVsc2UgaWYgKHJlcS5tZXRob2QgPT09IFwiR0VUXCIpIHtcbiAgfVxufVxuXG5leHBvcnQgY29uc3QgY29uZmlnID0ge1xuICBhcGk6IHsgYm9keVBhcnNlcjogZmFsc2UgfSxcbn07XG4iXSwibmFtZXMiOlsidXBsb2FkIiwiaGFuZGxlciIsInJlcSIsInJlcyIsIm1ldGhvZCIsInVwbG9hZEZpbGVzIiwiYXJyYXkiLCJlcnJvciIsImNvbnNvbGUiLCJzdGF0dXMiLCJqc29uIiwiZmlsZXMiLCJsZW5ndGgiLCJzZW5kIiwiaXRlbXMiLCJtZXNzYWdlIiwiY29uZmlnIiwiYXBpIiwiYm9keVBhcnNlciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./src/pages/api/upload.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./src/pages/api/upload.js"));
module.exports = __webpack_exports__;

})();