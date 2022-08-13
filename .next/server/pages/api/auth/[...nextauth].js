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
exports.id = "pages/api/auth/[...nextauth]";
exports.ids = ["pages/api/auth/[...nextauth]"];
exports.modules = {

/***/ "@next-auth/prisma-adapter":
/*!********************************************!*\
  !*** external "@next-auth/prisma-adapter" ***!
  \********************************************/
/***/ ((module) => {

module.exports = require("@next-auth/prisma-adapter");

/***/ }),

/***/ "@prisma/client":
/*!*********************************!*\
  !*** external "@prisma/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ }),

/***/ "next-auth":
/*!****************************!*\
  !*** external "next-auth" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("next-auth");

/***/ }),

/***/ "next-auth/providers/credentials":
/*!**************************************************!*\
  !*** external "next-auth/providers/credentials" ***!
  \**************************************************/
/***/ ((module) => {

module.exports = require("next-auth/providers/credentials");

/***/ }),

/***/ "next-auth/react":
/*!**********************************!*\
  !*** external "next-auth/react" ***!
  \**********************************/
/***/ ((module) => {

module.exports = require("next-auth/react");

/***/ }),

/***/ "siwe":
/*!***********************!*\
  !*** external "siwe" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("siwe");

/***/ }),

/***/ "(api)/./lib/prisma.js":
/*!***********************!*\
  !*** ./lib/prisma.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);\n\nlet prisma;\nif (false) {} else {\n    if (!global.prisma) {\n        global.prisma = new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient();\n    }\n    prisma = global.prisma;\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (prisma);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9saWIvcHJpc21hLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUE4QztBQUU5QyxJQUFJQyxNQUFNO0FBRVYsSUFBSUMsS0FBcUMsRUFBRSxFQUUxQyxNQUFNO0lBQ0gsSUFBSSxDQUFDQyxNQUFNLENBQUNGLE1BQU0sRUFBRTtRQUNoQkUsTUFBTSxDQUFDRixNQUFNLEdBQUcsSUFBSUQsd0RBQVksRUFBRSxDQUFDO0tBQ3RDO0lBQ0RDLE1BQU0sR0FBR0UsTUFBTSxDQUFDRixNQUFNLENBQUM7Q0FDMUI7QUFFRCxpRUFBZUEsTUFBTSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYXBwdGVzdC8uL2xpYi9wcmlzbWEuanM/NzUxNSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQcmlzbWFDbGllbnQgfSBmcm9tICdAcHJpc21hL2NsaWVudCc7XHJcblxyXG5sZXQgcHJpc21hO1xyXG5cclxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbicpIHtcclxuICAgIHByaXNtYSA9IG5ldyBQcmlzbWFDbGllbnQoKTtcclxufSBlbHNlIHtcclxuICAgIGlmICghZ2xvYmFsLnByaXNtYSkge1xyXG4gICAgICAgIGdsb2JhbC5wcmlzbWEgPSBuZXcgUHJpc21hQ2xpZW50KCk7XHJcbiAgICB9XHJcbiAgICBwcmlzbWEgPSBnbG9iYWwucHJpc21hO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBwcmlzbWE7Il0sIm5hbWVzIjpbIlByaXNtYUNsaWVudCIsInByaXNtYSIsInByb2Nlc3MiLCJnbG9iYWwiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./lib/prisma.js\n");

/***/ }),

/***/ "(api)/./pages/api/auth/[...nextauth].js":
/*!*****************************************!*\
  !*** ./pages/api/auth/[...nextauth].js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ auth)\n/* harmony export */ });\n/* harmony import */ var _lib_prisma__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../lib/prisma */ \"(api)/./lib/prisma.js\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth */ \"next-auth\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-auth/providers/credentials */ \"next-auth/providers/credentials\");\n/* harmony import */ var next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next-auth/react */ \"next-auth/react\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var siwe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! siwe */ \"siwe\");\n/* harmony import */ var siwe__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(siwe__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _next_auth_prisma_adapter__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @next-auth/prisma-adapter */ \"@next-auth/prisma-adapter\");\n/* harmony import */ var _next_auth_prisma_adapter__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_next_auth_prisma_adapter__WEBPACK_IMPORTED_MODULE_5__);\n\n\n\n\n\n\nasync function auth(req, res) {\n    const providers = [\n        next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_2___default()({\n            name: \"Ethereum\",\n            credentials: {\n                message: {\n                    label: \"Message\",\n                    type: \"text\",\n                    placeholder: \"0x0\"\n                },\n                signature: {\n                    label: \"Signature\",\n                    type: \"text\",\n                    placeholder: \"0x0\"\n                }\n            },\n            async authorize (credentials) {\n                try {\n                    const siwe = new siwe__WEBPACK_IMPORTED_MODULE_4__.SiweMessage(JSON.parse(credentials?.message || \"{}\"));\n                    const nextAuthUrl = process.env.NEXTAUTH_URL;\n                    if (!nextAuthUrl) {\n                        return null;\n                    }\n                    const nextAuthHost = new URL(nextAuthUrl).host;\n                    if (siwe.domain !== nextAuthHost) {\n                        return null;\n                    }\n                    if (siwe.nonce !== await (0,next_auth_react__WEBPACK_IMPORTED_MODULE_3__.getCsrfToken)({\n                        req\n                    })) {\n                        return null;\n                    }\n                    await siwe.validate(credentials.signature || \"\");\n                    //https://github.com/prisma/docs/issues/640\n                    let userData = await _lib_prisma__WEBPACK_IMPORTED_MODULE_0__[\"default\"].user.upsert({\n                        where: {\n                            address: siwe.address\n                        },\n                        update: {},\n                        create: {\n                            address: siwe.address\n                        }\n                    });\n                    /* console.log(userData); */ return userData;\n                } catch (e) {\n                    /*   console.err(e); */ return null;\n                }\n            }\n        }), \n    ];\n    const isDefaultSigninPage = req.method === \"GET\" && req.query.nextauth.includes(\"signin\");\n    // Hide Sign-In with Ethereum from default sign page\n    if (isDefaultSigninPage) {\n        providers.pop();\n    }\n    return await next_auth__WEBPACK_IMPORTED_MODULE_1___default()(req, res, {\n        providers,\n        jwt: {\n            maxAge: 3600\n        },\n        session: {\n            strategy: \"jwt\"\n        },\n        secret: process.env.NEXTAUTH_SECRET,\n        callbacks: {\n            async jwt ({ token , user  }) {\n                // Gets called multiple times so need to check if user exists\n                if (user) {\n                    token.userData = user;\n                }\n                return token;\n            },\n            async session ({ session , token  }) {\n                // Must pass through jwt first to pass to session\n                if (token.userData) {\n                    session.userData = token.userData;\n                    console.log(session);\n                }\n                return session;\n            }\n        }\n    });\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUF5QztBQUNUO0FBQ2lDO0FBQ25CO0FBQ1o7QUFDd0I7QUFFM0MsZUFBZU0sSUFBSSxDQUFDQyxHQUFHLEVBQUVDLEdBQUcsRUFBRTtJQUN6QyxNQUFNQyxTQUFTLEdBQUc7UUFDZFAsc0VBQW1CLENBQUM7WUFDaEJRLElBQUksRUFBRSxVQUFVO1lBQ2hCQyxXQUFXLEVBQUU7Z0JBQ1RDLE9BQU8sRUFBRTtvQkFDTEMsS0FBSyxFQUFFLFNBQVM7b0JBQ2hCQyxJQUFJLEVBQUUsTUFBTTtvQkFDWkMsV0FBVyxFQUFFLEtBQUs7aUJBQ3JCO2dCQUNEQyxTQUFTLEVBQUU7b0JBQ1BILEtBQUssRUFBRSxXQUFXO29CQUNsQkMsSUFBSSxFQUFFLE1BQU07b0JBQ1pDLFdBQVcsRUFBRSxLQUFLO2lCQUNyQjthQUNKO1lBQ0QsTUFBTUUsU0FBUyxFQUFDTixXQUFXLEVBQUU7Z0JBQ3pCLElBQUk7b0JBQ0EsTUFBTU8sSUFBSSxHQUFHLElBQUlkLDZDQUFXLENBQUNlLElBQUksQ0FBQ0MsS0FBSyxDQUFDVCxXQUFXLEVBQUVDLE9BQU8sSUFBSSxJQUFJLENBQUMsQ0FBQztvQkFFdEUsTUFBTVMsV0FBVyxHQUFHQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0MsWUFBWTtvQkFDNUMsSUFBSSxDQUFDSCxXQUFXLEVBQUU7d0JBQ2QsT0FBTyxJQUFJO3FCQUNkO29CQUVELE1BQU1JLFlBQVksR0FBRyxJQUFJQyxHQUFHLENBQUNMLFdBQVcsQ0FBQyxDQUFDTSxJQUFJO29CQUM5QyxJQUFJVCxJQUFJLENBQUNVLE1BQU0sS0FBS0gsWUFBWSxFQUFFO3dCQUM5QixPQUFPLElBQUk7cUJBQ2Q7b0JBQ0QsSUFBSVAsSUFBSSxDQUFDVyxLQUFLLEtBQU0sTUFBTTFCLDZEQUFZLENBQUM7d0JBQUVJLEdBQUc7cUJBQUUsQ0FBQyxFQUFHO3dCQUM5QyxPQUFPLElBQUk7cUJBQ2Q7b0JBQ0QsTUFBTVcsSUFBSSxDQUFDWSxRQUFRLENBQUNuQixXQUFXLENBQUNLLFNBQVMsSUFBSSxFQUFFLENBQUMsQ0FBQztvQkFFakQsMkNBQTJDO29CQUMzQyxJQUFJZSxRQUFRLEdBQUcsTUFBTS9CLCtEQUFrQixDQUFDO3dCQUNwQ2tDLEtBQUssRUFBRTs0QkFDSEMsT0FBTyxFQUFFakIsSUFBSSxDQUFDaUIsT0FBTzt5QkFDeEI7d0JBQ0RDLE1BQU0sRUFBRSxFQUFFO3dCQUNWQyxNQUFNLEVBQUU7NEJBQ0pGLE9BQU8sRUFBRWpCLElBQUksQ0FBQ2lCLE9BQU87eUJBQ3hCO3FCQUNKLENBQUM7b0JBQ0YsMEJBQTBCLEdBRTFCLE9BQVFKLFFBQVEsQ0FBRTtpQkFDckIsQ0FBQyxPQUFPTyxDQUFDLEVBQUU7b0JBQ1IscUJBQXFCLEdBQ3JCLE9BQU8sSUFBSTtpQkFDZDthQUNKO1NBQ0osQ0FBQztLQUNMO0lBRUQsTUFBTUMsbUJBQW1CLEdBQ3JCaEMsR0FBRyxDQUFDaUMsTUFBTSxLQUFLLEtBQUssSUFBSWpDLEdBQUcsQ0FBQ2tDLEtBQUssQ0FBQ0MsUUFBUSxDQUFDQyxRQUFRLENBQUMsUUFBUSxDQUFDO0lBRWpFLG9EQUFvRDtJQUNwRCxJQUFJSixtQkFBbUIsRUFBRTtRQUNyQjlCLFNBQVMsQ0FBQ21DLEdBQUcsRUFBRTtLQUNsQjtJQUVELE9BQU8sTUFBTTNDLGdEQUFRLENBQUNNLEdBQUcsRUFBRUMsR0FBRyxFQUFFO1FBQzVCQyxTQUFTO1FBQ1RvQyxHQUFHLEVBQUU7WUFDREMsTUFBTSxFQUFFLElBQUk7U0FDZjtRQUNEQyxPQUFPLEVBQUU7WUFDTEMsUUFBUSxFQUFFLEtBQUs7U0FDbEI7UUFDREMsTUFBTSxFQUFFM0IsT0FBTyxDQUFDQyxHQUFHLENBQUMyQixlQUFlO1FBQ25DQyxTQUFTLEVBQUU7WUFDUCxNQUFNTixHQUFHLEVBQUMsRUFBRU8sS0FBSyxHQUFFcEIsSUFBSSxHQUFFLEVBQUU7Z0JBQ3ZCLDZEQUE2RDtnQkFDN0QsSUFBSUEsSUFBSSxFQUFFO29CQUNOb0IsS0FBSyxDQUFDckIsUUFBUSxHQUFHQyxJQUFJLENBQUM7aUJBQ3pCO2dCQUNELE9BQU9vQixLQUFLO2FBQ2Y7WUFDRCxNQUFNTCxPQUFPLEVBQUMsRUFBRUEsT0FBTyxHQUFFSyxLQUFLLEdBQUUsRUFBRTtnQkFDOUIsaURBQWlEO2dCQUNqRCxJQUFJQSxLQUFLLENBQUNyQixRQUFRLEVBQUU7b0JBQ2hCZ0IsT0FBTyxDQUFDaEIsUUFBUSxHQUFHcUIsS0FBSyxDQUFDckIsUUFBUSxDQUFDO29CQUNsQ3NCLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDUCxPQUFPLENBQUMsQ0FBQztpQkFDeEI7Z0JBQ0QsT0FBT0EsT0FBTzthQUNqQjtTQUNKO0tBQ0osQ0FBQztDQUNMIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYXBwdGVzdC8uL3BhZ2VzL2FwaS9hdXRoL1suLi5uZXh0YXV0aF0uanM/NTI3ZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgcHJpc21hIGZyb20gXCIuLi8uLi8uLi9saWIvcHJpc21hXCI7XHJcbmltcG9ydCBOZXh0QXV0aCBmcm9tIFwibmV4dC1hdXRoXCJcclxuaW1wb3J0IENyZWRlbnRpYWxzUHJvdmlkZXIgZnJvbSBcIm5leHQtYXV0aC9wcm92aWRlcnMvY3JlZGVudGlhbHNcIlxyXG5pbXBvcnQgeyBnZXRDc3JmVG9rZW4gfSBmcm9tIFwibmV4dC1hdXRoL3JlYWN0XCJcclxuaW1wb3J0IHsgU2l3ZU1lc3NhZ2UgfSBmcm9tIFwic2l3ZVwiXHJcbmltcG9ydCB7IFByaXNtYUFkYXB0ZXIgfSBmcm9tICdAbmV4dC1hdXRoL3ByaXNtYS1hZGFwdGVyJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGF1dGgocmVxLCByZXMpIHtcclxuICAgIGNvbnN0IHByb3ZpZGVycyA9IFtcclxuICAgICAgICBDcmVkZW50aWFsc1Byb3ZpZGVyKHtcclxuICAgICAgICAgICAgbmFtZTogXCJFdGhlcmV1bVwiLFxyXG4gICAgICAgICAgICBjcmVkZW50aWFsczoge1xyXG4gICAgICAgICAgICAgICAgbWVzc2FnZToge1xyXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsOiBcIk1lc3NhZ2VcIixcclxuICAgICAgICAgICAgICAgICAgICB0eXBlOiBcInRleHRcIixcclxuICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcjogXCIweDBcIixcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBzaWduYXR1cmU6IHtcclxuICAgICAgICAgICAgICAgICAgICBsYWJlbDogXCJTaWduYXR1cmVcIixcclxuICAgICAgICAgICAgICAgICAgICB0eXBlOiBcInRleHRcIixcclxuICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcjogXCIweDBcIixcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGFzeW5jIGF1dGhvcml6ZShjcmVkZW50aWFscykge1xyXG4gICAgICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBzaXdlID0gbmV3IFNpd2VNZXNzYWdlKEpTT04ucGFyc2UoY3JlZGVudGlhbHM/Lm1lc3NhZ2UgfHwgXCJ7fVwiKSlcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbmV4dEF1dGhVcmwgPSBwcm9jZXNzLmVudi5ORVhUQVVUSF9VUkw7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFuZXh0QXV0aFVybCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbnVsbFxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbmV4dEF1dGhIb3N0ID0gbmV3IFVSTChuZXh0QXV0aFVybCkuaG9zdFxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChzaXdlLmRvbWFpbiAhPT0gbmV4dEF1dGhIb3N0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBudWxsXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChzaXdlLm5vbmNlICE9PSAoYXdhaXQgZ2V0Q3NyZlRva2VuKHsgcmVxIH0pKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbnVsbFxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBhd2FpdCBzaXdlLnZhbGlkYXRlKGNyZWRlbnRpYWxzLnNpZ25hdHVyZSB8fCBcIlwiKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLy9odHRwczovL2dpdGh1Yi5jb20vcHJpc21hL2RvY3MvaXNzdWVzLzY0MFxyXG4gICAgICAgICAgICAgICAgICAgIGxldCB1c2VyRGF0YSA9IGF3YWl0IHByaXNtYS51c2VyLnVwc2VydCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdoZXJlOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhZGRyZXNzOiBzaXdlLmFkZHJlc3MsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHVwZGF0ZToge30sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNyZWF0ZToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWRkcmVzczogc2l3ZS5hZGRyZXNzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAvKiBjb25zb2xlLmxvZyh1c2VyRGF0YSk7ICovXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAodXNlckRhdGEpO1xyXG4gICAgICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIC8qICAgY29uc29sZS5lcnIoZSk7ICovXHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG51bGxcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICB9KSxcclxuICAgIF1cclxuXHJcbiAgICBjb25zdCBpc0RlZmF1bHRTaWduaW5QYWdlID1cclxuICAgICAgICByZXEubWV0aG9kID09PSBcIkdFVFwiICYmIHJlcS5xdWVyeS5uZXh0YXV0aC5pbmNsdWRlcyhcInNpZ25pblwiKVxyXG5cclxuICAgIC8vIEhpZGUgU2lnbi1JbiB3aXRoIEV0aGVyZXVtIGZyb20gZGVmYXVsdCBzaWduIHBhZ2VcclxuICAgIGlmIChpc0RlZmF1bHRTaWduaW5QYWdlKSB7XHJcbiAgICAgICAgcHJvdmlkZXJzLnBvcCgpXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGF3YWl0IE5leHRBdXRoKHJlcSwgcmVzLCB7XHJcbiAgICAgICAgcHJvdmlkZXJzLFxyXG4gICAgICAgIGp3dDoge1xyXG4gICAgICAgICAgICBtYXhBZ2U6IDM2MDBcclxuICAgICAgICB9LFxyXG4gICAgICAgIHNlc3Npb246IHtcclxuICAgICAgICAgICAgc3RyYXRlZ3k6IFwiand0XCIsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBzZWNyZXQ6IHByb2Nlc3MuZW52Lk5FWFRBVVRIX1NFQ1JFVCxcclxuICAgICAgICBjYWxsYmFja3M6IHtcclxuICAgICAgICAgICAgYXN5bmMgand0KHsgdG9rZW4sIHVzZXIgfSkge1xyXG4gICAgICAgICAgICAgICAgLy8gR2V0cyBjYWxsZWQgbXVsdGlwbGUgdGltZXMgc28gbmVlZCB0byBjaGVjayBpZiB1c2VyIGV4aXN0c1xyXG4gICAgICAgICAgICAgICAgaWYgKHVzZXIpIHtcclxuICAgICAgICAgICAgICAgICAgICB0b2tlbi51c2VyRGF0YSA9IHVzZXI7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdG9rZW5cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgYXN5bmMgc2Vzc2lvbih7IHNlc3Npb24sIHRva2VuIH0pIHtcclxuICAgICAgICAgICAgICAgIC8vIE11c3QgcGFzcyB0aHJvdWdoIGp3dCBmaXJzdCB0byBwYXNzIHRvIHNlc3Npb25cclxuICAgICAgICAgICAgICAgIGlmICh0b2tlbi51c2VyRGF0YSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHNlc3Npb24udXNlckRhdGEgPSB0b2tlbi51c2VyRGF0YTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhzZXNzaW9uKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJldHVybiBzZXNzaW9uXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgfSxcclxuICAgIH0pXHJcbn0iXSwibmFtZXMiOlsicHJpc21hIiwiTmV4dEF1dGgiLCJDcmVkZW50aWFsc1Byb3ZpZGVyIiwiZ2V0Q3NyZlRva2VuIiwiU2l3ZU1lc3NhZ2UiLCJQcmlzbWFBZGFwdGVyIiwiYXV0aCIsInJlcSIsInJlcyIsInByb3ZpZGVycyIsIm5hbWUiLCJjcmVkZW50aWFscyIsIm1lc3NhZ2UiLCJsYWJlbCIsInR5cGUiLCJwbGFjZWhvbGRlciIsInNpZ25hdHVyZSIsImF1dGhvcml6ZSIsInNpd2UiLCJKU09OIiwicGFyc2UiLCJuZXh0QXV0aFVybCIsInByb2Nlc3MiLCJlbnYiLCJORVhUQVVUSF9VUkwiLCJuZXh0QXV0aEhvc3QiLCJVUkwiLCJob3N0IiwiZG9tYWluIiwibm9uY2UiLCJ2YWxpZGF0ZSIsInVzZXJEYXRhIiwidXNlciIsInVwc2VydCIsIndoZXJlIiwiYWRkcmVzcyIsInVwZGF0ZSIsImNyZWF0ZSIsImUiLCJpc0RlZmF1bHRTaWduaW5QYWdlIiwibWV0aG9kIiwicXVlcnkiLCJuZXh0YXV0aCIsImluY2x1ZGVzIiwicG9wIiwiand0IiwibWF4QWdlIiwic2Vzc2lvbiIsInN0cmF0ZWd5Iiwic2VjcmV0IiwiTkVYVEFVVEhfU0VDUkVUIiwiY2FsbGJhY2tzIiwidG9rZW4iLCJjb25zb2xlIiwibG9nIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/auth/[...nextauth].js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/auth/[...nextauth].js"));
module.exports = __webpack_exports__;

})();