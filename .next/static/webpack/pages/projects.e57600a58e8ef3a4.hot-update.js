"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/projects",{

/***/ "./pages/projects/index.js":
/*!*********************************!*\
  !*** ./pages/projects/index.js ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; },\n/* harmony export */   \"default\": function() { return /* binding */ projects; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_ProjectComponents_Projects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/ProjectComponents/Projects */ \"./components/ProjectComponents/Projects.js\");\n/* harmony import */ var _styles_ProjectStyles_Projects_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../styles/ProjectStyles/Projects.module.css */ \"./styles/ProjectStyles/Projects.module.css\");\n/* harmony import */ var _styles_ProjectStyles_Projects_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_ProjectStyles_Projects_module_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _components_NavBar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/NavBar */ \"./components/NavBar.js\");\n/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-icons/fa */ \"./node_modules/react-icons/fa/index.esm.js\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next-auth/react */ \"./node_modules/next-auth/react/index.js\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nvar __N_SSP = true;\nfunction projects(param) {\n    var _$projects = param.projects;\n    _s();\n    var ref = (0,next_auth_react__WEBPACK_IMPORTED_MODULE_3__.useSession)(), session = ref.data, status = ref.status;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_ProjectStyles_Projects_module_css__WEBPACK_IMPORTED_MODULE_4___default().pageContainer),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_NavBar__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                address: status == \"authenticated\" ? session.userData.address : \"\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\jrdaz\\\\NextJS_App\\\\pages\\\\projects\\\\index.js\",\n                lineNumber: 11,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: {\n                    position: \"relative\"\n                },\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_fa__WEBPACK_IMPORTED_MODULE_5__.FaRegPlusSquare, {\n                    style: {\n                        position: \"absolute\",\n                        right: \"4%\",\n                        bottom: \"2%\"\n                    },\n                    size: 30,\n                    fill: \"#028a68b4\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\jrdaz\\\\NextJS_App\\\\pages\\\\projects\\\\index.js\",\n                    lineNumber: 13,\n                    columnNumber: 17\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\jrdaz\\\\NextJS_App\\\\pages\\\\projects\\\\index.js\",\n                lineNumber: 12,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_ProjectStyles_Projects_module_css__WEBPACK_IMPORTED_MODULE_4___default().projectsContainer),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ProjectComponents_Projects__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                    projects: _$projects\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\jrdaz\\\\NextJS_App\\\\pages\\\\projects\\\\index.js\",\n                    lineNumber: 17,\n                    columnNumber: 17\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\jrdaz\\\\NextJS_App\\\\pages\\\\projects\\\\index.js\",\n                lineNumber: 15,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\jrdaz\\\\NextJS_App\\\\pages\\\\projects\\\\index.js\",\n        lineNumber: 10,\n        columnNumber: 9\n    }, this);\n};\n_s(projects, \"ujwIunAD3hlHFoJLG3BNiDLiMqM=\", false, function() {\n    return [\n        next_auth_react__WEBPACK_IMPORTED_MODULE_3__.useSession\n    ];\n});\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9wcm9qZWN0cy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBOztBQUFtRTtBQUNBO0FBQ3ZCO0FBQ0k7QUFDSjs7QUFFN0IsU0FBU0ssUUFBUSxDQUFDLEtBQVksRUFBRTtRQUFkLFVBQVUsR0FBVixLQUFZLENBQVZBLFFBQVE7O0lBQ3ZDLElBQWtDRCxHQUFZLEdBQVpBLDJEQUFVLEVBQUUsRUFBdENFLE9BQWEsR0FBYUYsR0FBWSxDQUF0Q0UsSUFBSSxFQUFXRSxNQUFNLEdBQUtKLEdBQVksQ0FBdkJJLE1BQU07SUFDN0IscUJBQ0ksOERBQUNDLEtBQUc7UUFBQ0MsU0FBUyxFQUFFVCxnR0FBb0I7OzBCQUNoQyw4REFBQ0MsMERBQU07Z0JBQUNVLE9BQU8sRUFBRUosTUFBTSxJQUFJLGVBQWUsR0FBR0QsT0FBTyxDQUFDTSxRQUFRLENBQUNELE9BQU8sR0FBRyxFQUFFOzs7OztvQkFBSTswQkFDOUUsOERBQUNILEtBQUc7Z0JBQUNLLEtBQUssRUFBRTtvQkFBRUMsUUFBUSxFQUFFLFVBQVU7aUJBQUU7MEJBQ2hDLDRFQUFDWiwyREFBZTtvQkFBQ1csS0FBSyxFQUFFO3dCQUFFQyxRQUFRLEVBQUUsVUFBVTt3QkFBRUMsS0FBSyxFQUFFLElBQUk7d0JBQUVDLE1BQU0sRUFBRSxJQUFJO3FCQUFHO29CQUFFQyxJQUFJLEVBQUUsRUFBRTtvQkFBRUMsSUFBSSxFQUFDLFdBQVc7Ozs7O3dCQUFHOzs7OztvQkFDekc7MEJBQ04sOERBQUNWLEtBQUc7Z0JBQUNDLFNBQVMsRUFBRVQsb0dBQXdCOzBCQUVwQyw0RUFBQ0QsOEVBQVE7b0JBQUNLLFFBQVEsRUFBRUEsVUFBUTs7Ozs7d0JBQUk7Ozs7O29CQUM5Qjs7Ozs7O1lBQ0gsQ0FDVDtDQUNMO0dBZHVCQSxRQUFROztRQUNNRCx1REFBVSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9wcm9qZWN0cy9pbmRleC5qcz80N2Q1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBQcm9qZWN0cyBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9Qcm9qZWN0Q29tcG9uZW50cy9Qcm9qZWN0c1wiO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuLi8uLi9zdHlsZXMvUHJvamVjdFN0eWxlcy9Qcm9qZWN0cy5tb2R1bGUuY3NzXCJcclxuaW1wb3J0IE5hdkJhciBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9OYXZCYXJcIlxyXG5pbXBvcnQgeyBGYVJlZ1BsdXNTcXVhcmUgfSBmcm9tIFwicmVhY3QtaWNvbnMvZmFcIlxyXG5pbXBvcnQgeyB1c2VTZXNzaW9uIH0gZnJvbSBcIm5leHQtYXV0aC9yZWFjdFwiXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBwcm9qZWN0cyh7IHByb2plY3RzIH0pIHtcclxuICAgIGNvbnN0IHsgZGF0YTogc2Vzc2lvbiwgc3RhdHVzIH0gPSB1c2VTZXNzaW9uKClcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5wYWdlQ29udGFpbmVyfT5cclxuICAgICAgICAgICAgPE5hdkJhciBhZGRyZXNzPXtzdGF0dXMgPT0gXCJhdXRoZW50aWNhdGVkXCIgPyBzZXNzaW9uLnVzZXJEYXRhLmFkZHJlc3MgOiBcIlwifSAvPlxyXG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IHBvc2l0aW9uOiBcInJlbGF0aXZlXCIgfX0+XHJcbiAgICAgICAgICAgICAgICA8RmFSZWdQbHVzU3F1YXJlIHN0eWxlPXt7IHBvc2l0aW9uOiBcImFic29sdXRlXCIsIHJpZ2h0OiBcIjQlXCIsIGJvdHRvbTogXCIyJVwiLCB9fSBzaXplPXszMH0gZmlsbD1cIiMwMjhhNjhiNFwiIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnByb2plY3RzQ29udGFpbmVyfT5cclxuXHJcbiAgICAgICAgICAgICAgICA8UHJvamVjdHMgcHJvamVjdHM9e3Byb2plY3RzfSAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2RpdiA+XHJcbiAgICApO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0U2VydmVyU2lkZVByb3BzID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goXCJodHRwOi8vbG9jYWxob3N0OjMwMDAvYXBpL3Byb2plY3RzXCIpO1xyXG5cclxuICAgIGNvbnN0IHByb2plY3RzID0gYXdhaXQgcmVzLmpzb24oKTtcclxuICAgIC8qICAgICBjb25zb2xlLmxvZyhwcm9qZWN0cyk7ICovXHJcbiAgICByZXR1cm4gKHtcclxuICAgICAgICBwcm9wczoge1xyXG4gICAgICAgICAgICBwcm9qZWN0c1xyXG4gICAgICAgIH1cclxuICAgIH0pXHJcbn1cclxuIl0sIm5hbWVzIjpbIlByb2plY3RzIiwic3R5bGVzIiwiTmF2QmFyIiwiRmFSZWdQbHVzU3F1YXJlIiwidXNlU2Vzc2lvbiIsInByb2plY3RzIiwiZGF0YSIsInNlc3Npb24iLCJzdGF0dXMiLCJkaXYiLCJjbGFzc05hbWUiLCJwYWdlQ29udGFpbmVyIiwiYWRkcmVzcyIsInVzZXJEYXRhIiwic3R5bGUiLCJwb3NpdGlvbiIsInJpZ2h0IiwiYm90dG9tIiwic2l6ZSIsImZpbGwiLCJwcm9qZWN0c0NvbnRhaW5lciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/projects/index.js\n"));

/***/ })

});