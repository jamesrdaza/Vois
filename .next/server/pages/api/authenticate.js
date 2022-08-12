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
exports.id = "pages/api/authenticate";
exports.ids = ["pages/api/authenticate"];
exports.modules = {

/***/ "@prisma/client":
/*!*********************************!*\
  !*** external "@prisma/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ }),

/***/ "ethers":
/*!*************************!*\
  !*** external "ethers" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("ethers");

/***/ }),

/***/ "(api)/./lib/prisma.js":
/*!***********************!*\
  !*** ./lib/prisma.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);\n\nlet prisma;\nif (false) {} else {\n    if (!global.prisma) {\n        global.prisma = new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient();\n    }\n    prisma = global.prisma;\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (prisma);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9saWIvcHJpc21hLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUE4QztBQUU5QyxJQUFJQyxNQUFNO0FBRVYsSUFBSUMsS0FBcUMsRUFBRSxFQUUxQyxNQUFNO0lBQ0gsSUFBSSxDQUFDQyxNQUFNLENBQUNGLE1BQU0sRUFBRTtRQUNoQkUsTUFBTSxDQUFDRixNQUFNLEdBQUcsSUFBSUQsd0RBQVksRUFBRSxDQUFDO0tBQ3RDO0lBQ0RDLE1BQU0sR0FBR0UsTUFBTSxDQUFDRixNQUFNLENBQUM7Q0FDMUI7QUFFRCxpRUFBZUEsTUFBTSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYXBwdGVzdC8uL2xpYi9wcmlzbWEuanM/NzUxNSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQcmlzbWFDbGllbnQgfSBmcm9tICdAcHJpc21hL2NsaWVudCc7XHJcblxyXG5sZXQgcHJpc21hO1xyXG5cclxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbicpIHtcclxuICAgIHByaXNtYSA9IG5ldyBQcmlzbWFDbGllbnQoKTtcclxufSBlbHNlIHtcclxuICAgIGlmICghZ2xvYmFsLnByaXNtYSkge1xyXG4gICAgICAgIGdsb2JhbC5wcmlzbWEgPSBuZXcgUHJpc21hQ2xpZW50KCk7XHJcbiAgICB9XHJcbiAgICBwcmlzbWEgPSBnbG9iYWwucHJpc21hO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBwcmlzbWE7Il0sIm5hbWVzIjpbIlByaXNtYUNsaWVudCIsInByaXNtYSIsInByb2Nlc3MiLCJnbG9iYWwiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./lib/prisma.js\n");

/***/ }),

/***/ "(api)/./pages/api/authenticate/index.js":
/*!*****************************************!*\
  !*** ./pages/api/authenticate/index.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var _lib_prisma__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../lib/prisma */ \"(api)/./lib/prisma.js\");\n/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ethers */ \"ethers\");\n/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(ethers__WEBPACK_IMPORTED_MODULE_1__);\n\n\n// Make more secure with nonce and possibly generating random string\nconst messageToSign = \"In order to verify please sign this message\";\nasync function handler(req, res) {\n    const { address , signedMessage  } = req.body;\n    console.log(req.body);\n    // Get address from sign request\n    let recoveredAddress = ethers__WEBPACK_IMPORTED_MODULE_1__.ethers.utils.recoverAddress(ethers__WEBPACK_IMPORTED_MODULE_1__.ethers.utils.hashMessage(messageToSign), signedMessage).toLowerCase();\n    // Compare sent address to recovered address\n    if (address === recoveredAddress) {\n        try {\n            // Check for user if !exist create\n            const user = await _lib_prisma__WEBPACK_IMPORTED_MODULE_0__[\"default\"].user.upsert({\n                where: {\n                    address: address\n                },\n                update: {\n                    address: address\n                },\n                create: {\n                    address: address\n                }\n            });\n            if (!user) {\n                throw \"Error Verifying/Creating User\";\n            }\n            // Setting expire time for session\n            let currentDate = Date.now();\n            let expireDate = new Date(currentDate + 120 * 60000);\n            let expireDateISO = expireDate.toISOString();\n            let expireDateTime = new Date(expireDateISO);\n            // Change to upsert\n            const sesh = await _lib_prisma__WEBPACK_IMPORTED_MODULE_0__[\"default\"].session.create({\n                data: {\n                    address: user.address,\n                    expiresAt: expireDateTime\n                }\n            });\n            if (!sesh) {\n                throw \"Error Creating Session\";\n            }\n            // Responses\n            res.statusCode = 200;\n            res.send({\n                sessionToken: sesh.sessionToken,\n                expiresAt: expireDateTime\n            });\n        } catch (err) {\n            console.log(err);\n            res.statusCode = 500;\n            res.json({\n                ERR: \"Something went wrong\"\n            });\n        }\n    } else {\n        res.statusCode = 403;\n        res.json({\n            ERR: \"SIGNATURE NOT VALID\"\n        });\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvYXV0aGVudGljYXRlL2luZGV4LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBeUM7QUFDVDtBQUVoQyxvRUFBb0U7QUFDcEUsTUFBTUUsYUFBYSxHQUFHLDZDQUE2QztBQUVwRCxlQUFlQyxPQUFPLENBQUNDLEdBQUcsRUFBRUMsR0FBRyxFQUFFO0lBQzVDLE1BQU0sRUFBRUMsT0FBTyxHQUFFQyxhQUFhLEdBQUUsR0FBR0gsR0FBRyxDQUFDSSxJQUFJO0lBQzNDQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ04sR0FBRyxDQUFDSSxJQUFJLENBQUMsQ0FBQztJQUV0QixnQ0FBZ0M7SUFDaEMsSUFBSUcsZ0JBQWdCLEdBQUdWLCtEQUEyQixDQUFDQSw0REFBd0IsQ0FBQ0MsYUFBYSxDQUFDLEVBQUVLLGFBQWEsQ0FBQyxDQUFDUSxXQUFXLEVBQUU7SUFFeEgsNENBQTRDO0lBQzVDLElBQUlULE9BQU8sS0FBS0ssZ0JBQWdCLEVBQUU7UUFDOUIsSUFBSTtZQUNBLGtDQUFrQztZQUNsQyxNQUFNSyxJQUFJLEdBQUcsTUFBTWhCLCtEQUFrQixDQUFDO2dCQUNsQ2tCLEtBQUssRUFBRTtvQkFDSFosT0FBTyxFQUFFQSxPQUFPO2lCQUNuQjtnQkFDRGEsTUFBTSxFQUFFO29CQUNKYixPQUFPLEVBQUVBLE9BQU87aUJBQ25CO2dCQUNEYyxNQUFNLEVBQUU7b0JBQ0pkLE9BQU8sRUFBRUEsT0FBTztpQkFDbkI7YUFDSixDQUFDO1lBRUYsSUFBSSxDQUFDVSxJQUFJLEVBQUU7Z0JBQ1AsTUFBTSwrQkFBK0IsQ0FBQzthQUN6QztZQUVELGtDQUFrQztZQUNsQyxJQUFJSyxXQUFXLEdBQUdDLElBQUksQ0FBQ0MsR0FBRyxFQUFFO1lBQzVCLElBQUlDLFVBQVUsR0FBRyxJQUFJRixJQUFJLENBQUNELFdBQVcsR0FBRyxHQUFHLEdBQUcsS0FBSyxDQUFDO1lBQ3BELElBQUlJLGFBQWEsR0FBR0QsVUFBVSxDQUFDRSxXQUFXLEVBQUU7WUFDNUMsSUFBSUMsY0FBYyxHQUFHLElBQUlMLElBQUksQ0FBQ0csYUFBYSxDQUFDO1lBRTVDLG1CQUFtQjtZQUNuQixNQUFNRyxJQUFJLEdBQUcsTUFBTTVCLGtFQUFxQixDQUFDO2dCQUNyQzhCLElBQUksRUFBRTtvQkFDRnhCLE9BQU8sRUFBRVUsSUFBSSxDQUFDVixPQUFPO29CQUNyQnlCLFNBQVMsRUFBRUosY0FBYztpQkFDNUI7YUFDSixDQUFDO1lBRUYsSUFBSSxDQUFDQyxJQUFJLEVBQUU7Z0JBQ1AsTUFBTSx3QkFBd0IsQ0FBQzthQUNsQztZQUNELFlBQVk7WUFDWnZCLEdBQUcsQ0FBQzJCLFVBQVUsR0FBRyxHQUFHLENBQUM7WUFDckIzQixHQUFHLENBQUM0QixJQUFJLENBQUM7Z0JBQUVDLFlBQVksRUFBRU4sSUFBSSxDQUFDTSxZQUFZO2dCQUFFSCxTQUFTLEVBQUVKLGNBQWM7YUFBRSxDQUFDLENBQUM7U0FDNUUsQ0FBQyxPQUFPUSxHQUFHLEVBQUU7WUFDVjFCLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDeUIsR0FBRyxDQUFDLENBQUM7WUFDakI5QixHQUFHLENBQUMyQixVQUFVLEdBQUcsR0FBRyxDQUFDO1lBQ3JCM0IsR0FBRyxDQUFDK0IsSUFBSSxDQUFDO2dCQUFFQyxHQUFHLEVBQUUsc0JBQXNCO2FBQUUsQ0FBQyxDQUFDO1NBQzdDO0tBQ0osTUFBTTtRQUNIaEMsR0FBRyxDQUFDMkIsVUFBVSxHQUFHLEdBQUcsQ0FBQztRQUNyQjNCLEdBQUcsQ0FBQytCLElBQUksQ0FBQztZQUFFQyxHQUFHLEVBQUUscUJBQXFCO1NBQUUsQ0FBQyxDQUFDO0tBQzVDO0NBQ0oiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hcHB0ZXN0Ly4vcGFnZXMvYXBpL2F1dGhlbnRpY2F0ZS9pbmRleC5qcz85ODkxIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBwcmlzbWEgZnJvbSBcIi4uLy4uLy4uL2xpYi9wcmlzbWFcIjtcclxuaW1wb3J0IHsgZXRoZXJzIH0gZnJvbSBcImV0aGVyc1wiO1xyXG5cclxuLy8gTWFrZSBtb3JlIHNlY3VyZSB3aXRoIG5vbmNlIGFuZCBwb3NzaWJseSBnZW5lcmF0aW5nIHJhbmRvbSBzdHJpbmdcclxuY29uc3QgbWVzc2FnZVRvU2lnbiA9IFwiSW4gb3JkZXIgdG8gdmVyaWZ5IHBsZWFzZSBzaWduIHRoaXMgbWVzc2FnZVwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gaGFuZGxlcihyZXEsIHJlcykge1xyXG4gICAgY29uc3QgeyBhZGRyZXNzLCBzaWduZWRNZXNzYWdlIH0gPSByZXEuYm9keTtcclxuICAgIGNvbnNvbGUubG9nKHJlcS5ib2R5KTtcclxuXHJcbiAgICAvLyBHZXQgYWRkcmVzcyBmcm9tIHNpZ24gcmVxdWVzdFxyXG4gICAgbGV0IHJlY292ZXJlZEFkZHJlc3MgPSBldGhlcnMudXRpbHMucmVjb3ZlckFkZHJlc3MoZXRoZXJzLnV0aWxzLmhhc2hNZXNzYWdlKG1lc3NhZ2VUb1NpZ24pLCBzaWduZWRNZXNzYWdlKS50b0xvd2VyQ2FzZSgpO1xyXG5cclxuICAgIC8vIENvbXBhcmUgc2VudCBhZGRyZXNzIHRvIHJlY292ZXJlZCBhZGRyZXNzXHJcbiAgICBpZiAoYWRkcmVzcyA9PT0gcmVjb3ZlcmVkQWRkcmVzcykge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIC8vIENoZWNrIGZvciB1c2VyIGlmICFleGlzdCBjcmVhdGVcclxuICAgICAgICAgICAgY29uc3QgdXNlciA9IGF3YWl0IHByaXNtYS51c2VyLnVwc2VydCh7XHJcbiAgICAgICAgICAgICAgICB3aGVyZToge1xyXG4gICAgICAgICAgICAgICAgICAgIGFkZHJlc3M6IGFkZHJlc3NcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB1cGRhdGU6IHtcclxuICAgICAgICAgICAgICAgICAgICBhZGRyZXNzOiBhZGRyZXNzXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgY3JlYXRlOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgYWRkcmVzczogYWRkcmVzc1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KVxyXG5cclxuICAgICAgICAgICAgaWYgKCF1c2VyKSB7XHJcbiAgICAgICAgICAgICAgICB0aHJvdyBcIkVycm9yIFZlcmlmeWluZy9DcmVhdGluZyBVc2VyXCI7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vIFNldHRpbmcgZXhwaXJlIHRpbWUgZm9yIHNlc3Npb25cclxuICAgICAgICAgICAgbGV0IGN1cnJlbnREYXRlID0gRGF0ZS5ub3coKTtcclxuICAgICAgICAgICAgbGV0IGV4cGlyZURhdGUgPSBuZXcgRGF0ZShjdXJyZW50RGF0ZSArIDEyMCAqIDYwMDAwKTtcclxuICAgICAgICAgICAgbGV0IGV4cGlyZURhdGVJU08gPSBleHBpcmVEYXRlLnRvSVNPU3RyaW5nKCk7XHJcbiAgICAgICAgICAgIGxldCBleHBpcmVEYXRlVGltZSA9IG5ldyBEYXRlKGV4cGlyZURhdGVJU08pO1xyXG5cclxuICAgICAgICAgICAgLy8gQ2hhbmdlIHRvIHVwc2VydFxyXG4gICAgICAgICAgICBjb25zdCBzZXNoID0gYXdhaXQgcHJpc21hLnNlc3Npb24uY3JlYXRlKHtcclxuICAgICAgICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgICAgICAgICBhZGRyZXNzOiB1c2VyLmFkZHJlc3MsXHJcbiAgICAgICAgICAgICAgICAgICAgZXhwaXJlc0F0OiBleHBpcmVEYXRlVGltZSxcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSlcclxuXHJcbiAgICAgICAgICAgIGlmICghc2VzaCkge1xyXG4gICAgICAgICAgICAgICAgdGhyb3cgXCJFcnJvciBDcmVhdGluZyBTZXNzaW9uXCI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy8gUmVzcG9uc2VzXHJcbiAgICAgICAgICAgIHJlcy5zdGF0dXNDb2RlID0gMjAwO1xyXG4gICAgICAgICAgICByZXMuc2VuZCh7IHNlc3Npb25Ub2tlbjogc2VzaC5zZXNzaW9uVG9rZW4sIGV4cGlyZXNBdDogZXhwaXJlRGF0ZVRpbWUgfSk7XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICAgICAgICAgIHJlcy5zdGF0dXNDb2RlID0gNTAwO1xyXG4gICAgICAgICAgICByZXMuanNvbih7IEVSUjogXCJTb21ldGhpbmcgd2VudCB3cm9uZ1wiIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcmVzLnN0YXR1c0NvZGUgPSA0MDM7XHJcbiAgICAgICAgcmVzLmpzb24oeyBFUlI6IFwiU0lHTkFUVVJFIE5PVCBWQUxJRFwiIH0pO1xyXG4gICAgfVxyXG59Il0sIm5hbWVzIjpbInByaXNtYSIsImV0aGVycyIsIm1lc3NhZ2VUb1NpZ24iLCJoYW5kbGVyIiwicmVxIiwicmVzIiwiYWRkcmVzcyIsInNpZ25lZE1lc3NhZ2UiLCJib2R5IiwiY29uc29sZSIsImxvZyIsInJlY292ZXJlZEFkZHJlc3MiLCJ1dGlscyIsInJlY292ZXJBZGRyZXNzIiwiaGFzaE1lc3NhZ2UiLCJ0b0xvd2VyQ2FzZSIsInVzZXIiLCJ1cHNlcnQiLCJ3aGVyZSIsInVwZGF0ZSIsImNyZWF0ZSIsImN1cnJlbnREYXRlIiwiRGF0ZSIsIm5vdyIsImV4cGlyZURhdGUiLCJleHBpcmVEYXRlSVNPIiwidG9JU09TdHJpbmciLCJleHBpcmVEYXRlVGltZSIsInNlc2giLCJzZXNzaW9uIiwiZGF0YSIsImV4cGlyZXNBdCIsInN0YXR1c0NvZGUiLCJzZW5kIiwic2Vzc2lvblRva2VuIiwiZXJyIiwianNvbiIsIkVSUiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/authenticate/index.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/authenticate/index.js"));
module.exports = __webpack_exports__;

})();