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
exports.id = "pages/api/projects/[contractAddress]";
exports.ids = ["pages/api/projects/[contractAddress]"];
exports.modules = {

/***/ "@prisma/client":
/*!*********************************!*\
  !*** external "@prisma/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ }),

/***/ "(api)/./lib/prisma.js":
/*!***********************!*\
  !*** ./lib/prisma.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);\n\nlet prisma;\nif (false) {} else {\n    if (!global.prisma) {\n        global.prisma = new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient();\n    }\n    prisma = global.prisma;\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (prisma);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9saWIvcHJpc21hLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUE4QztBQUU5QyxJQUFJQyxNQUFNO0FBRVYsSUFBSUMsS0FBcUMsRUFBRSxFQUUxQyxNQUFNO0lBQ0gsSUFBSSxDQUFDQyxNQUFNLENBQUNGLE1BQU0sRUFBRTtRQUNoQkUsTUFBTSxDQUFDRixNQUFNLEdBQUcsSUFBSUQsd0RBQVksRUFBRSxDQUFDO0tBQ3RDO0lBQ0RDLE1BQU0sR0FBR0UsTUFBTSxDQUFDRixNQUFNLENBQUM7Q0FDMUI7QUFFRCxpRUFBZUEsTUFBTSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYXBwdGVzdC8uL2xpYi9wcmlzbWEuanM/NzUxNSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQcmlzbWFDbGllbnQgfSBmcm9tICdAcHJpc21hL2NsaWVudCc7XHJcblxyXG5sZXQgcHJpc21hO1xyXG5cclxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbicpIHtcclxuICAgIHByaXNtYSA9IG5ldyBQcmlzbWFDbGllbnQoKTtcclxufSBlbHNlIHtcclxuICAgIGlmICghZ2xvYmFsLnByaXNtYSkge1xyXG4gICAgICAgIGdsb2JhbC5wcmlzbWEgPSBuZXcgUHJpc21hQ2xpZW50KCk7XHJcbiAgICB9XHJcbiAgICBwcmlzbWEgPSBnbG9iYWwucHJpc21hO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBwcmlzbWE7Il0sIm5hbWVzIjpbIlByaXNtYUNsaWVudCIsInByaXNtYSIsInByb2Nlc3MiLCJnbG9iYWwiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./lib/prisma.js\n");

/***/ }),

/***/ "(api)/./pages/api/projects/[contractAddress].js":
/*!*************************************************!*\
  !*** ./pages/api/projects/[contractAddress].js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var _lib_prisma__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../lib/prisma */ \"(api)/./lib/prisma.js\");\n\nasync function handler(req, res) {\n    if (req.method === \"GET\") {\n        const { contractAddress  } = req.query;\n        let project = await _lib_prisma__WEBPACK_IMPORTED_MODULE_0__[\"default\"].project.findUnique({\n            where: {\n                contractAddress: contractAddress\n            }\n        });\n        res.send(project);\n    } else {\n        res.status = 403;\n        res.send({\n            ERR: \"Invalid Request\"\n        });\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvcHJvamVjdHMvW2NvbnRyYWN0QWRkcmVzc10uanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBeUM7QUFFMUIsZUFBZUMsT0FBTyxDQUFDQyxHQUFHLEVBQUVDLEdBQUcsRUFBRTtJQUM1QyxJQUFJRCxHQUFHLENBQUNFLE1BQU0sS0FBSyxLQUFLLEVBQUU7UUFDdEIsTUFBTSxFQUFFQyxlQUFlLEdBQUUsR0FBR0gsR0FBRyxDQUFDSSxLQUFLO1FBQ3JDLElBQUlDLE9BQU8sR0FBRyxNQUFNUCxzRUFBeUIsQ0FBQztZQUMxQ1MsS0FBSyxFQUFFO2dCQUNISixlQUFlLEVBQUVBLGVBQWU7YUFDbkM7U0FDSixDQUFDO1FBQ0ZGLEdBQUcsQ0FBQ08sSUFBSSxDQUFDSCxPQUFPLENBQUMsQ0FBQztLQUNyQixNQUFNO1FBQ0hKLEdBQUcsQ0FBQ1EsTUFBTSxHQUFHLEdBQUcsQ0FBQztRQUNqQlIsR0FBRyxDQUFDTyxJQUFJLENBQUM7WUFBRUUsR0FBRyxFQUFFLGlCQUFpQjtTQUFFLENBQUMsQ0FBQztLQUN4QztDQUNKIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYXBwdGVzdC8uL3BhZ2VzL2FwaS9wcm9qZWN0cy9bY29udHJhY3RBZGRyZXNzXS5qcz82N2VmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBwcmlzbWEgZnJvbSBcIi4uLy4uLy4uL2xpYi9wcmlzbWFcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGhhbmRsZXIocmVxLCByZXMpIHtcclxuICAgIGlmIChyZXEubWV0aG9kID09PSBcIkdFVFwiKSB7XHJcbiAgICAgICAgY29uc3QgeyBjb250cmFjdEFkZHJlc3MgfSA9IHJlcS5xdWVyeTtcclxuICAgICAgICBsZXQgcHJvamVjdCA9IGF3YWl0IHByaXNtYS5wcm9qZWN0LmZpbmRVbmlxdWUoe1xyXG4gICAgICAgICAgICB3aGVyZToge1xyXG4gICAgICAgICAgICAgICAgY29udHJhY3RBZGRyZXNzOiBjb250cmFjdEFkZHJlc3NcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJlcy5zZW5kKHByb2plY3QpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICByZXMuc3RhdHVzID0gNDAzO1xyXG4gICAgICAgIHJlcy5zZW5kKHsgRVJSOiBcIkludmFsaWQgUmVxdWVzdFwiIH0pO1xyXG4gICAgfVxyXG59Il0sIm5hbWVzIjpbInByaXNtYSIsImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJtZXRob2QiLCJjb250cmFjdEFkZHJlc3MiLCJxdWVyeSIsInByb2plY3QiLCJmaW5kVW5pcXVlIiwid2hlcmUiLCJzZW5kIiwic3RhdHVzIiwiRVJSIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/projects/[contractAddress].js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/projects/[contractAddress].js"));
module.exports = __webpack_exports__;

})();