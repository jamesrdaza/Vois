"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/dashboard",{

/***/ "./pages/dashboard.js":
/*!****************************!*\
  !*** ./pages/dashboard.js ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_Dashboard_module_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles/Dashboard.module.scss */ \"./styles/Dashboard.module.scss\");\n/* harmony import */ var _styles_Dashboard_module_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_Dashboard_module_scss__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _components_NavBar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/NavBar */ \"./components/NavBar.js\");\n/* harmony import */ var _components_Trending_TrendingList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Trending/TrendingList */ \"./components/Trending/TrendingList.js\");\n/* harmony import */ var _components_DashNotifications_DashNotificationList__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/DashNotifications/DashNotificationList */ \"./components/DashNotifications/DashNotificationList.js\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next-auth/react */ \"./node_modules/next-auth/react/index.js\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_4__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n// TEMP DATA \nvar trendingTest = [\n    {\n        name: \"TEST1\"\n    },\n    {\n        name: \"TEST2\"\n    },\n    {\n        name: \"TEST3\"\n    },\n    {\n        name: \"TEST1\"\n    },\n    {\n        name: \"TEST2\"\n    },\n    {\n        name: \"TEST3\"\n    },\n    {\n        name: \"TEST1\"\n    },\n    {\n        name: \"TEST2\"\n    },\n    {\n        name: \"TEST3\"\n    },\n    {\n        name: \"TEST1\"\n    },\n    {\n        name: \"TEST2\"\n    },\n    {\n        name: \"TEST3\"\n    },\n    {\n        name: \"TEST1\"\n    },\n    {\n        name: \"TEST2\"\n    },\n    {\n        name: \"TEST3\"\n    }, \n];\nvar notifications = [\n    {\n        title: \"TEST TITLE\"\n    },\n    {\n        title: \"TEST TITLE\"\n    },\n    {\n        title: \"TEST TITLE\"\n    },\n    {\n        title: \"TEST TITLE\"\n    },\n    {\n        title: \"TEST TITLE\"\n    },\n    {\n        title: \"TEST TITLE\"\n    },\n    {\n        title: \"TEST TITLE\"\n    },\n    {\n        title: \"TEST TITLE\"\n    },\n    {\n        title: \"TEST TITLE\"\n    },\n    {\n        title: \"TEST TITLE\"\n    },\n    {\n        title: \"TEST TITLE\"\n    },\n    {\n        title: \"TEST TITLE\"\n    },\n    {\n        title: \"TEST TITLE\"\n    },\n    {\n        title: \"TEST TITLE\"\n    },\n    {\n        title: \"TEST TITLE\"\n    },\n    {\n        title: \"TEST TITLE\"\n    }\n];\nvar HotProjects = [\n    {\n        projectName: \"TEST NAME\"\n    },\n    {\n        projectName: \"TEST NAME\"\n    },\n    {\n        projectName: \"TEST NAME\"\n    },\n    {\n        projectName: \"TEST NAME\"\n    },\n    {\n        projectName: \"TEST NAME\"\n    },\n    {\n        projectName: \"TEST NAME\"\n    },\n    {\n        projectName: \"TEST NAME\"\n    },\n    {\n        projectName: \"TEST NAME\"\n    },\n    {\n        projectName: \"TEST NAME\"\n    },\n    {\n        projectName: \"TEST NAME\"\n    },\n    {\n        projectName: \"TEST NAME\"\n    },\n    {\n        projectName: \"TEST NAME\"\n    },\n    {\n        projectName: \"TEST NAME\"\n    }, \n];\nfunction Dashboard() {\n    _s();\n    var ref = (0,next_auth_react__WEBPACK_IMPORTED_MODULE_4__.useSession)(), session = ref.data, status = ref.status;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_Dashboard_module_scss__WEBPACK_IMPORTED_MODULE_5___default().dashboardContainer),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_NavBar__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                address: status == \"authenticated\" ? session.sessionInfo.address : \"\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\jrdaz\\\\NextJS_App\\\\pages\\\\dashboard.js\",\n                lineNumber: 66,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_Dashboard_module_scss__WEBPACK_IMPORTED_MODULE_5___default().mainContent),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_Dashboard_module_scss__WEBPACK_IMPORTED_MODULE_5___default().mainSection),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: (_styles_Dashboard_module_scss__WEBPACK_IMPORTED_MODULE_5___default().header),\n                                children: \"Trending Posts\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\jrdaz\\\\NextJS_App\\\\pages\\\\dashboard.js\",\n                                lineNumber: 69,\n                                columnNumber: 21\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Trending_TrendingList__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                trendingItems: trendingTest\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\jrdaz\\\\NextJS_App\\\\pages\\\\dashboard.js\",\n                                lineNumber: 72,\n                                columnNumber: 21\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\jrdaz\\\\NextJS_App\\\\pages\\\\dashboard.js\",\n                        lineNumber: 68,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_Dashboard_module_scss__WEBPACK_IMPORTED_MODULE_5___default().sideSection),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: (_styles_Dashboard_module_scss__WEBPACK_IMPORTED_MODULE_5___default().upcomingNotifications),\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: (_styles_Dashboard_module_scss__WEBPACK_IMPORTED_MODULE_5___default().header),\n                                        children: \"Notifications\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\jrdaz\\\\NextJS_App\\\\pages\\\\dashboard.js\",\n                                        lineNumber: 76,\n                                        columnNumber: 25\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_DashNotifications_DashNotificationList__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                        notifications: notifications\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\jrdaz\\\\NextJS_App\\\\pages\\\\dashboard.js\",\n                                        lineNumber: 79,\n                                        columnNumber: 25\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\jrdaz\\\\NextJS_App\\\\pages\\\\dashboard.js\",\n                                lineNumber: 75,\n                                columnNumber: 21\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: (_styles_Dashboard_module_scss__WEBPACK_IMPORTED_MODULE_5___default().space)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\jrdaz\\\\NextJS_App\\\\pages\\\\dashboard.js\",\n                                lineNumber: 81,\n                                columnNumber: 21\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: (_styles_Dashboard_module_scss__WEBPACK_IMPORTED_MODULE_5___default().topDay),\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: (_styles_Dashboard_module_scss__WEBPACK_IMPORTED_MODULE_5___default().header),\n                                    children: \"Hot Projects\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\jrdaz\\\\NextJS_App\\\\pages\\\\dashboard.js\",\n                                    lineNumber: 83,\n                                    columnNumber: 25\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\jrdaz\\\\NextJS_App\\\\pages\\\\dashboard.js\",\n                                lineNumber: 82,\n                                columnNumber: 21\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\jrdaz\\\\NextJS_App\\\\pages\\\\dashboard.js\",\n                        lineNumber: 74,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\jrdaz\\\\NextJS_App\\\\pages\\\\dashboard.js\",\n                lineNumber: 67,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\jrdaz\\\\NextJS_App\\\\pages\\\\dashboard.js\",\n        lineNumber: 65,\n        columnNumber: 9\n    }, this);\n}\n_s(Dashboard, \"ujwIunAD3hlHFoJLG3BNiDLiMqM=\", false, function() {\n    return [\n        next_auth_react__WEBPACK_IMPORTED_MODULE_4__.useSession\n    ];\n});\n_c = Dashboard;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Dashboard);\nvar _c;\n$RefreshReg$(_c, \"Dashboard\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QkFBQ2lCLE9BQU8sRUFBRUosTUFBTSxJQUFJLGVBQWUsR0FBR0QsT0FBTyxDQUFDTSxXQUFXLENBQUNELE9BQU8sR0FBRyxFQUFFOzs7OztvQkFBSTswQkFDakYsOERBQUNILEtBQUc7Z0JBQUNDLFNBQVMsRUFBRWhCLGtGQUFrQjs7a0NBQzlCLDhEQUFDZSxLQUFHO3dCQUFDQyxTQUFTLEVBQUVoQixrRkFBa0I7OzBDQUM5Qiw4REFBQ2UsS0FBRztnQ0FBQ0MsU0FBUyxFQUFFaEIsNkVBQWE7MENBQUUsZ0JBRS9COzs7OztvQ0FBTTswQ0FDTiw4REFBQ0UseUVBQVk7Z0NBQUNxQixhQUFhLEVBQUVsQixZQUFZOzs7OztvQ0FBSTs7Ozs7OzRCQUMzQztrQ0FDTiw4REFBQ1UsS0FBRzt3QkFBQ0MsU0FBUyxFQUFFaEIsa0ZBQWtCOzswQ0FDOUIsOERBQUNlLEtBQUc7Z0NBQUNDLFNBQVMsRUFBRWhCLDRGQUE0Qjs7a0RBQ3hDLDhEQUFDZSxLQUFHO3dDQUFDQyxTQUFTLEVBQUVoQiw2RUFBYTtrREFBRSxlQUUvQjs7Ozs7NENBQU07a0RBQ04sOERBQUNHLDBGQUFvQjt3Q0FBQ0ksYUFBYSxFQUFFQSxhQUFhOzs7Ozs0Q0FBSTs7Ozs7O29DQUNwRDswQ0FDTiw4REFBQ1EsS0FBRztnQ0FBQ0MsU0FBUyxFQUFFaEIsNEVBQVk7Ozs7O29DQUFROzBDQUNwQyw4REFBQ2UsS0FBRztnQ0FBQ0MsU0FBUyxFQUFFaEIsNkVBQWE7MENBQ3pCLDRFQUFDZSxLQUFHO29DQUFDQyxTQUFTLEVBQUVoQiw2RUFBYTs4Q0FBRSxjQUUvQjs7Ozs7d0NBQU07Ozs7O29DQUNKOzs7Ozs7NEJBQ0o7Ozs7OztvQkFDSjs7Ozs7O1lBQ0osQ0FDUjtDQUNMO0dBN0JRVyxTQUFTOztRQUNvQlAsdURBQVU7OztBQUR2Q08sS0FBQUEsU0FBUztBQStCbEIsK0RBQWVBLFNBQVMsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9kYXNoYm9hcmQuanM/MGU1MCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVzIGZyb20gXCIuLi9zdHlsZXMvRGFzaGJvYXJkLm1vZHVsZS5zY3NzXCI7XHJcbmltcG9ydCBOYXZCYXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvTmF2QmFyXCI7XHJcbmltcG9ydCBUcmVuZGluZ0xpc3QgZnJvbSBcIi4uL2NvbXBvbmVudHMvVHJlbmRpbmcvVHJlbmRpbmdMaXN0XCI7XHJcbmltcG9ydCBEYXNoTm90aWZpY2F0aW9uTGlzdCBmcm9tIFwiLi4vY29tcG9uZW50cy9EYXNoTm90aWZpY2F0aW9ucy9EYXNoTm90aWZpY2F0aW9uTGlzdFwiO1xyXG5pbXBvcnQgeyB1c2VTZXNzaW9uIH0gZnJvbSBcIm5leHQtYXV0aC9yZWFjdFwiO1xyXG5cclxuLy8gVEVNUCBEQVRBIFxyXG5cclxuY29uc3QgdHJlbmRpbmdUZXN0ID0gW1xyXG4gICAgeyBuYW1lOiBcIlRFU1QxXCIgfSxcclxuICAgIHsgbmFtZTogXCJURVNUMlwiIH0sXHJcbiAgICB7IG5hbWU6IFwiVEVTVDNcIiB9LFxyXG4gICAgeyBuYW1lOiBcIlRFU1QxXCIgfSxcclxuICAgIHsgbmFtZTogXCJURVNUMlwiIH0sXHJcbiAgICB7IG5hbWU6IFwiVEVTVDNcIiB9LFxyXG4gICAgeyBuYW1lOiBcIlRFU1QxXCIgfSxcclxuICAgIHsgbmFtZTogXCJURVNUMlwiIH0sXHJcbiAgICB7IG5hbWU6IFwiVEVTVDNcIiB9LFxyXG4gICAgeyBuYW1lOiBcIlRFU1QxXCIgfSxcclxuICAgIHsgbmFtZTogXCJURVNUMlwiIH0sXHJcbiAgICB7IG5hbWU6IFwiVEVTVDNcIiB9LFxyXG4gICAgeyBuYW1lOiBcIlRFU1QxXCIgfSxcclxuICAgIHsgbmFtZTogXCJURVNUMlwiIH0sXHJcbiAgICB7IG5hbWU6IFwiVEVTVDNcIiB9LFxyXG5dXHJcblxyXG5jb25zdCBub3RpZmljYXRpb25zID0gW1xyXG4gICAgeyB0aXRsZTogXCJURVNUIFRJVExFXCIgfSxcclxuICAgIHsgdGl0bGU6IFwiVEVTVCBUSVRMRVwiIH0sXHJcbiAgICB7IHRpdGxlOiBcIlRFU1QgVElUTEVcIiB9LFxyXG4gICAgeyB0aXRsZTogXCJURVNUIFRJVExFXCIgfSxcclxuICAgIHsgdGl0bGU6IFwiVEVTVCBUSVRMRVwiIH0sXHJcbiAgICB7IHRpdGxlOiBcIlRFU1QgVElUTEVcIiB9LFxyXG4gICAgeyB0aXRsZTogXCJURVNUIFRJVExFXCIgfSxcclxuICAgIHsgdGl0bGU6IFwiVEVTVCBUSVRMRVwiIH0sXHJcbiAgICB7IHRpdGxlOiBcIlRFU1QgVElUTEVcIiB9LFxyXG4gICAgeyB0aXRsZTogXCJURVNUIFRJVExFXCIgfSxcclxuICAgIHsgdGl0bGU6IFwiVEVTVCBUSVRMRVwiIH0sXHJcbiAgICB7IHRpdGxlOiBcIlRFU1QgVElUTEVcIiB9LFxyXG4gICAgeyB0aXRsZTogXCJURVNUIFRJVExFXCIgfSxcclxuICAgIHsgdGl0bGU6IFwiVEVTVCBUSVRMRVwiIH0sXHJcbiAgICB7IHRpdGxlOiBcIlRFU1QgVElUTEVcIiB9LFxyXG4gICAgeyB0aXRsZTogXCJURVNUIFRJVExFXCIgfVxyXG5dXHJcblxyXG5jb25zdCBIb3RQcm9qZWN0cyA9IFtcclxuICAgIHsgcHJvamVjdE5hbWU6IFwiVEVTVCBOQU1FXCIgfSxcclxuICAgIHsgcHJvamVjdE5hbWU6IFwiVEVTVCBOQU1FXCIgfSxcclxuICAgIHsgcHJvamVjdE5hbWU6IFwiVEVTVCBOQU1FXCIgfSxcclxuICAgIHsgcHJvamVjdE5hbWU6IFwiVEVTVCBOQU1FXCIgfSxcclxuICAgIHsgcHJvamVjdE5hbWU6IFwiVEVTVCBOQU1FXCIgfSxcclxuICAgIHsgcHJvamVjdE5hbWU6IFwiVEVTVCBOQU1FXCIgfSxcclxuICAgIHsgcHJvamVjdE5hbWU6IFwiVEVTVCBOQU1FXCIgfSxcclxuICAgIHsgcHJvamVjdE5hbWU6IFwiVEVTVCBOQU1FXCIgfSxcclxuICAgIHsgcHJvamVjdE5hbWU6IFwiVEVTVCBOQU1FXCIgfSxcclxuICAgIHsgcHJvamVjdE5hbWU6IFwiVEVTVCBOQU1FXCIgfSxcclxuICAgIHsgcHJvamVjdE5hbWU6IFwiVEVTVCBOQU1FXCIgfSxcclxuICAgIHsgcHJvamVjdE5hbWU6IFwiVEVTVCBOQU1FXCIgfSxcclxuICAgIHsgcHJvamVjdE5hbWU6IFwiVEVTVCBOQU1FXCIgfSxcclxuXVxyXG5cclxuZnVuY3Rpb24gRGFzaGJvYXJkKCkge1xyXG4gICAgY29uc3QgeyBkYXRhOiBzZXNzaW9uLCBzdGF0dXMgfSA9IHVzZVNlc3Npb24oKVxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmRhc2hib2FyZENvbnRhaW5lcn0+XHJcbiAgICAgICAgICAgIDxOYXZCYXIgYWRkcmVzcz17c3RhdHVzID09IFwiYXV0aGVudGljYXRlZFwiID8gc2Vzc2lvbi5zZXNzaW9uSW5mby5hZGRyZXNzIDogXCJcIn0gLz5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5tYWluQ29udGVudH0gPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5tYWluU2VjdGlvbn0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5oZWFkZXJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBUcmVuZGluZyBQb3N0c1xyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxUcmVuZGluZ0xpc3QgdHJlbmRpbmdJdGVtcz17dHJlbmRpbmdUZXN0fSAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnNpZGVTZWN0aW9ufT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnVwY29taW5nTm90aWZpY2F0aW9uc30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaGVhZGVyfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIE5vdGlmaWNhdGlvbnNcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxEYXNoTm90aWZpY2F0aW9uTGlzdCBub3RpZmljYXRpb25zPXtub3RpZmljYXRpb25zfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuc3BhY2V9PjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudG9wRGF5fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5oZWFkZXJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgSG90IFByb2plY3RzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRGFzaGJvYXJkOyJdLCJuYW1lcyI6WyJzdHlsZXMiLCJOYXZCYXIiLCJUcmVuZGluZ0xpc3QiLCJEYXNoTm90aWZpY2F0aW9uTGlzdCIsInVzZVNlc3Npb24iLCJ0cmVuZGluZ1Rlc3QiLCJuYW1lIiwibm90aWZpY2F0aW9ucyIsInRpdGxlIiwiSG90UHJvamVjdHMiLCJwcm9qZWN0TmFtZSIsIkRhc2hib2FyZCIsImRhdGEiLCJzZXNzaW9uIiwic3RhdHVzIiwiZGl2IiwiY2xhc3NOYW1lIiwiZGFzaGJvYXJkQ29udGFpbmVyIiwiYWRkcmVzcyIsInNlc3Npb25JbmZvIiwibWFpbkNvbnRlbnQiLCJtYWluU2VjdGlvbiIsImhlYWRlciIsInRyZW5kaW5nSXRlbXMiLCJzaWRlU2VjdGlvbiIsInVwY29taW5nTm90aWZpY2F0aW9ucyIsInNwYWNlIiwidG9wRGF5Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/dashboard.js\n"));

/***/ })

});