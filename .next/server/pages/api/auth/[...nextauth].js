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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ auth)\n/* harmony export */ });\n/* harmony import */ var _lib_prisma__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../lib/prisma */ \"(api)/./lib/prisma.js\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth */ \"next-auth\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-auth/providers/credentials */ \"next-auth/providers/credentials\");\n/* harmony import */ var next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next-auth/react */ \"next-auth/react\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var siwe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! siwe */ \"siwe\");\n/* harmony import */ var siwe__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(siwe__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\nasync function auth(req, res) {\n    const providers = [\n        next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_2___default()({\n            name: \"Ethereum\",\n            credentials: {\n                message: {\n                    label: \"Message\",\n                    type: \"text\",\n                    placeholder: \"0x0\"\n                },\n                signature: {\n                    label: \"Signature\",\n                    type: \"text\",\n                    placeholder: \"0x0\"\n                }\n            },\n            async authorize (credentials) {\n                try {\n                    const siwe = new siwe__WEBPACK_IMPORTED_MODULE_4__.SiweMessage(JSON.parse(credentials?.message || \"{}\"));\n                    const nextAuthUrl = process.env.NEXTAUTH_URL;\n                    if (!nextAuthUrl) {\n                        return null;\n                    }\n                    const nextAuthHost = new URL(nextAuthUrl).host;\n                    if (siwe.domain !== nextAuthHost) {\n                        return null;\n                    }\n                    if (siwe.nonce !== await (0,next_auth_react__WEBPACK_IMPORTED_MODULE_3__.getCsrfToken)({\n                        req\n                    })) {\n                        return null;\n                    }\n                    await siwe.validate(credentials.signature || \"\");\n                    //https://github.com/prisma/docs/issues/640\n                    let userData = await _lib_prisma__WEBPACK_IMPORTED_MODULE_0__[\"default\"].user.upsert({\n                        where: {\n                            address: siwe.address\n                        },\n                        update: {},\n                        create: {\n                            address: siwe.address\n                        }\n                    });\n                    /* console.log(userData); */ return userData;\n                } catch (e) {\n                    console.error(e);\n                    return null;\n                }\n            }\n        }), \n    ];\n    const isDefaultSigninPage = req.method === \"GET\" && req.query.nextauth.includes(\"signin\");\n    // Hide Sign-In with Ethereum from default sign page\n    if (isDefaultSigninPage) {\n        providers.pop();\n    }\n    return await next_auth__WEBPACK_IMPORTED_MODULE_1___default()(req, res, {\n        providers,\n        jwt: {\n            maxAge: 3600\n        },\n        session: {\n            strategy: \"jwt\"\n        },\n        secret: process.env.NEXTAUTH_SECRET,\n        callbacks: {\n            async jwt ({ token , user  }) {\n                // Gets called multiple times so need to check if user exists\n                if (user) {\n                    token.userData = user;\n                }\n                return token;\n            },\n            async session ({ session , token  }) {\n                // Must pass through jwt first to pass to session\n                if (token.userData) {\n                    session.userData = token.userData;\n                /* console.log(session); */ }\n                return session;\n            }\n        }\n    });\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBeUM7QUFDVDtBQUNpQztBQUNuQjtBQUNaO0FBRW5CLGVBQWVLLElBQUksQ0FBQ0MsR0FBRyxFQUFFQyxHQUFHLEVBQUU7SUFDekMsTUFBTUMsU0FBUyxHQUFHO1FBQ2ROLHNFQUFtQixDQUFDO1lBQ2hCTyxJQUFJLEVBQUUsVUFBVTtZQUNoQkMsV0FBVyxFQUFFO2dCQUNUQyxPQUFPLEVBQUU7b0JBQ0xDLEtBQUssRUFBRSxTQUFTO29CQUNoQkMsSUFBSSxFQUFFLE1BQU07b0JBQ1pDLFdBQVcsRUFBRSxLQUFLO2lCQUNyQjtnQkFDREMsU0FBUyxFQUFFO29CQUNQSCxLQUFLLEVBQUUsV0FBVztvQkFDbEJDLElBQUksRUFBRSxNQUFNO29CQUNaQyxXQUFXLEVBQUUsS0FBSztpQkFDckI7YUFDSjtZQUNELE1BQU1FLFNBQVMsRUFBQ04sV0FBVyxFQUFFO2dCQUN6QixJQUFJO29CQUNBLE1BQU1PLElBQUksR0FBRyxJQUFJYiw2Q0FBVyxDQUFDYyxJQUFJLENBQUNDLEtBQUssQ0FBQ1QsV0FBVyxFQUFFQyxPQUFPLElBQUksSUFBSSxDQUFDLENBQUM7b0JBRXRFLE1BQU1TLFdBQVcsR0FBR0MsT0FBTyxDQUFDQyxHQUFHLENBQUNDLFlBQVk7b0JBQzVDLElBQUksQ0FBQ0gsV0FBVyxFQUFFO3dCQUNkLE9BQU8sSUFBSTtxQkFDZDtvQkFFRCxNQUFNSSxZQUFZLEdBQUcsSUFBSUMsR0FBRyxDQUFDTCxXQUFXLENBQUMsQ0FBQ00sSUFBSTtvQkFDOUMsSUFBSVQsSUFBSSxDQUFDVSxNQUFNLEtBQUtILFlBQVksRUFBRTt3QkFDOUIsT0FBTyxJQUFJO3FCQUNkO29CQUNELElBQUlQLElBQUksQ0FBQ1csS0FBSyxLQUFNLE1BQU16Qiw2REFBWSxDQUFDO3dCQUFFRyxHQUFHO3FCQUFFLENBQUMsRUFBRzt3QkFDOUMsT0FBTyxJQUFJO3FCQUNkO29CQUNELE1BQU1XLElBQUksQ0FBQ1ksUUFBUSxDQUFDbkIsV0FBVyxDQUFDSyxTQUFTLElBQUksRUFBRSxDQUFDLENBQUM7b0JBRWpELDJDQUEyQztvQkFDM0MsSUFBSWUsUUFBUSxHQUFHLE1BQU05QiwrREFBa0IsQ0FBQzt3QkFDcENpQyxLQUFLLEVBQUU7NEJBQ0hDLE9BQU8sRUFBRWpCLElBQUksQ0FBQ2lCLE9BQU87eUJBQ3hCO3dCQUNEQyxNQUFNLEVBQUUsRUFBRTt3QkFDVkMsTUFBTSxFQUFFOzRCQUNKRixPQUFPLEVBQUVqQixJQUFJLENBQUNpQixPQUFPO3lCQUN4QjtxQkFDSixDQUFDO29CQUNGLDBCQUEwQixHQUUxQixPQUFRSixRQUFRLENBQUU7aUJBQ3JCLENBQUMsT0FBT08sQ0FBQyxFQUFFO29CQUNSQyxPQUFPLENBQUNDLEtBQUssQ0FBQ0YsQ0FBQyxDQUFDLENBQUM7b0JBQ2pCLE9BQU8sSUFBSTtpQkFDZDthQUNKO1NBQ0osQ0FBQztLQUNMO0lBRUQsTUFBTUcsbUJBQW1CLEdBQ3JCbEMsR0FBRyxDQUFDbUMsTUFBTSxLQUFLLEtBQUssSUFBSW5DLEdBQUcsQ0FBQ29DLEtBQUssQ0FBQ0MsUUFBUSxDQUFDQyxRQUFRLENBQUMsUUFBUSxDQUFDO0lBRWpFLG9EQUFvRDtJQUNwRCxJQUFJSixtQkFBbUIsRUFBRTtRQUNyQmhDLFNBQVMsQ0FBQ3FDLEdBQUcsRUFBRTtLQUNsQjtJQUVELE9BQU8sTUFBTTVDLGdEQUFRLENBQUNLLEdBQUcsRUFBRUMsR0FBRyxFQUFFO1FBQzVCQyxTQUFTO1FBQ1RzQyxHQUFHLEVBQUU7WUFDREMsTUFBTSxFQUFFLElBQUk7U0FDZjtRQUNEQyxPQUFPLEVBQUU7WUFDTEMsUUFBUSxFQUFFLEtBQUs7U0FDbEI7UUFDREMsTUFBTSxFQUFFN0IsT0FBTyxDQUFDQyxHQUFHLENBQUM2QixlQUFlO1FBQ25DQyxTQUFTLEVBQUU7WUFDUCxNQUFNTixHQUFHLEVBQUMsRUFBRU8sS0FBSyxHQUFFdEIsSUFBSSxHQUFFLEVBQUU7Z0JBQ3ZCLDZEQUE2RDtnQkFDN0QsSUFBSUEsSUFBSSxFQUFFO29CQUNOc0IsS0FBSyxDQUFDdkIsUUFBUSxHQUFHQyxJQUFJLENBQUM7aUJBQ3pCO2dCQUNELE9BQU9zQixLQUFLO2FBQ2Y7WUFDRCxNQUFNTCxPQUFPLEVBQUMsRUFBRUEsT0FBTyxHQUFFSyxLQUFLLEdBQUUsRUFBRTtnQkFDOUIsaURBQWlEO2dCQUNqRCxJQUFJQSxLQUFLLENBQUN2QixRQUFRLEVBQUU7b0JBQ2hCa0IsT0FBTyxDQUFDbEIsUUFBUSxHQUFHdUIsS0FBSyxDQUFDdkIsUUFBUSxDQUFDO2dCQUNsQyx5QkFBeUIsSUFDNUI7Z0JBQ0QsT0FBT2tCLE9BQU87YUFDakI7U0FDSjtLQUNKLENBQUM7Q0FDTCIsInNvdXJjZXMiOlsid2VicGFjazovL2FwcHRlc3QvLi9wYWdlcy9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdLmpzPzUyN2YiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHByaXNtYSBmcm9tIFwiLi4vLi4vLi4vbGliL3ByaXNtYVwiO1xyXG5pbXBvcnQgTmV4dEF1dGggZnJvbSBcIm5leHQtYXV0aFwiXHJcbmltcG9ydCBDcmVkZW50aWFsc1Byb3ZpZGVyIGZyb20gXCJuZXh0LWF1dGgvcHJvdmlkZXJzL2NyZWRlbnRpYWxzXCJcclxuaW1wb3J0IHsgZ2V0Q3NyZlRva2VuIH0gZnJvbSBcIm5leHQtYXV0aC9yZWFjdFwiXHJcbmltcG9ydCB7IFNpd2VNZXNzYWdlIH0gZnJvbSBcInNpd2VcIlxyXG5cclxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gYXV0aChyZXEsIHJlcykge1xyXG4gICAgY29uc3QgcHJvdmlkZXJzID0gW1xyXG4gICAgICAgIENyZWRlbnRpYWxzUHJvdmlkZXIoe1xyXG4gICAgICAgICAgICBuYW1lOiBcIkV0aGVyZXVtXCIsXHJcbiAgICAgICAgICAgIGNyZWRlbnRpYWxzOiB7XHJcbiAgICAgICAgICAgICAgICBtZXNzYWdlOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw6IFwiTWVzc2FnZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6IFwidGV4dFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyOiBcIjB4MFwiLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHNpZ25hdHVyZToge1xyXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsOiBcIlNpZ25hdHVyZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6IFwidGV4dFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyOiBcIjB4MFwiLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgYXN5bmMgYXV0aG9yaXplKGNyZWRlbnRpYWxzKSB7XHJcbiAgICAgICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHNpd2UgPSBuZXcgU2l3ZU1lc3NhZ2UoSlNPTi5wYXJzZShjcmVkZW50aWFscz8ubWVzc2FnZSB8fCBcInt9XCIpKVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBuZXh0QXV0aFVybCA9IHByb2Nlc3MuZW52Lk5FWFRBVVRIX1VSTDtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoIW5leHRBdXRoVXJsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBudWxsXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBuZXh0QXV0aEhvc3QgPSBuZXcgVVJMKG5leHRBdXRoVXJsKS5ob3N0XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHNpd2UuZG9tYWluICE9PSBuZXh0QXV0aEhvc3QpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG51bGxcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHNpd2Uubm9uY2UgIT09IChhd2FpdCBnZXRDc3JmVG9rZW4oeyByZXEgfSkpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBudWxsXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGF3YWl0IHNpd2UudmFsaWRhdGUoY3JlZGVudGlhbHMuc2lnbmF0dXJlIHx8IFwiXCIpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAvL2h0dHBzOi8vZ2l0aHViLmNvbS9wcmlzbWEvZG9jcy9pc3N1ZXMvNjQwXHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHVzZXJEYXRhID0gYXdhaXQgcHJpc21hLnVzZXIudXBzZXJ0KHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2hlcmU6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFkZHJlc3M6IHNpd2UuYWRkcmVzcyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdXBkYXRlOiB7fSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgY3JlYXRlOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhZGRyZXNzOiBzaXdlLmFkZHJlc3NcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgIC8qIGNvbnNvbGUubG9nKHVzZXJEYXRhKTsgKi9cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuICh1c2VyRGF0YSk7XHJcbiAgICAgICAgICAgICAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihlKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbnVsbFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIH0pLFxyXG4gICAgXVxyXG5cclxuICAgIGNvbnN0IGlzRGVmYXVsdFNpZ25pblBhZ2UgPVxyXG4gICAgICAgIHJlcS5tZXRob2QgPT09IFwiR0VUXCIgJiYgcmVxLnF1ZXJ5Lm5leHRhdXRoLmluY2x1ZGVzKFwic2lnbmluXCIpXHJcblxyXG4gICAgLy8gSGlkZSBTaWduLUluIHdpdGggRXRoZXJldW0gZnJvbSBkZWZhdWx0IHNpZ24gcGFnZVxyXG4gICAgaWYgKGlzRGVmYXVsdFNpZ25pblBhZ2UpIHtcclxuICAgICAgICBwcm92aWRlcnMucG9wKClcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gYXdhaXQgTmV4dEF1dGgocmVxLCByZXMsIHtcclxuICAgICAgICBwcm92aWRlcnMsXHJcbiAgICAgICAgand0OiB7XHJcbiAgICAgICAgICAgIG1heEFnZTogMzYwMFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc2Vzc2lvbjoge1xyXG4gICAgICAgICAgICBzdHJhdGVneTogXCJqd3RcIixcclxuICAgICAgICB9LFxyXG4gICAgICAgIHNlY3JldDogcHJvY2Vzcy5lbnYuTkVYVEFVVEhfU0VDUkVULFxyXG4gICAgICAgIGNhbGxiYWNrczoge1xyXG4gICAgICAgICAgICBhc3luYyBqd3QoeyB0b2tlbiwgdXNlciB9KSB7XHJcbiAgICAgICAgICAgICAgICAvLyBHZXRzIGNhbGxlZCBtdWx0aXBsZSB0aW1lcyBzbyBuZWVkIHRvIGNoZWNrIGlmIHVzZXIgZXhpc3RzXHJcbiAgICAgICAgICAgICAgICBpZiAodXNlcikge1xyXG4gICAgICAgICAgICAgICAgICAgIHRva2VuLnVzZXJEYXRhID0gdXNlcjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJldHVybiB0b2tlblxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBhc3luYyBzZXNzaW9uKHsgc2Vzc2lvbiwgdG9rZW4gfSkge1xyXG4gICAgICAgICAgICAgICAgLy8gTXVzdCBwYXNzIHRocm91Z2ggand0IGZpcnN0IHRvIHBhc3MgdG8gc2Vzc2lvblxyXG4gICAgICAgICAgICAgICAgaWYgKHRva2VuLnVzZXJEYXRhKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2Vzc2lvbi51c2VyRGF0YSA9IHRva2VuLnVzZXJEYXRhO1xyXG4gICAgICAgICAgICAgICAgICAgIC8qIGNvbnNvbGUubG9nKHNlc3Npb24pOyAqL1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHNlc3Npb25cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICB9LFxyXG4gICAgfSlcclxufSJdLCJuYW1lcyI6WyJwcmlzbWEiLCJOZXh0QXV0aCIsIkNyZWRlbnRpYWxzUHJvdmlkZXIiLCJnZXRDc3JmVG9rZW4iLCJTaXdlTWVzc2FnZSIsImF1dGgiLCJyZXEiLCJyZXMiLCJwcm92aWRlcnMiLCJuYW1lIiwiY3JlZGVudGlhbHMiLCJtZXNzYWdlIiwibGFiZWwiLCJ0eXBlIiwicGxhY2Vob2xkZXIiLCJzaWduYXR1cmUiLCJhdXRob3JpemUiLCJzaXdlIiwiSlNPTiIsInBhcnNlIiwibmV4dEF1dGhVcmwiLCJwcm9jZXNzIiwiZW52IiwiTkVYVEFVVEhfVVJMIiwibmV4dEF1dGhIb3N0IiwiVVJMIiwiaG9zdCIsImRvbWFpbiIsIm5vbmNlIiwidmFsaWRhdGUiLCJ1c2VyRGF0YSIsInVzZXIiLCJ1cHNlcnQiLCJ3aGVyZSIsImFkZHJlc3MiLCJ1cGRhdGUiLCJjcmVhdGUiLCJlIiwiY29uc29sZSIsImVycm9yIiwiaXNEZWZhdWx0U2lnbmluUGFnZSIsIm1ldGhvZCIsInF1ZXJ5IiwibmV4dGF1dGgiLCJpbmNsdWRlcyIsInBvcCIsImp3dCIsIm1heEFnZSIsInNlc3Npb24iLCJzdHJhdGVneSIsInNlY3JldCIsIk5FWFRBVVRIX1NFQ1JFVCIsImNhbGxiYWNrcyIsInRva2VuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/auth/[...nextauth].js\n");

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