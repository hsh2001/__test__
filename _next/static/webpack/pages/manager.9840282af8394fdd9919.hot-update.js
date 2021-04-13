webpackHotUpdate_N_E("pages/manager",{

/***/ "./components/manager/SideBar.tsx":
/*!****************************************!*\
  !*** ./components/manager/SideBar.tsx ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _styles_colors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../styles/colors */ \"./styles/colors.ts\");\n/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Button */ \"./components/Button.tsx\");\n\n\n\nvar _jsxFileName = \"/Users/seung-hyunhwang/Dropbox/git/web/components/manager/SideBar.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\nvar SidBarContainer = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].div.withConfig({\n  displayName: \"SideBar__SidBarContainer\",\n  componentId: \"y76ugi-0\"\n})([\"padding:1rem;background-color:\", \";color:\", \";min-height:100vh;overflow-y:scroll;p{padding-left:1rem;margin:1rem auto;color:#fff;}\"], _styles_colors__WEBPACK_IMPORTED_MODULE_3__[\"sideBarBackgroundColor\"], _styles_colors__WEBPACK_IMPORTED_MODULE_3__[\"sideBarFontColor\"]);\n_c = SidBarContainer;\nvar StoreSelect = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].select.withConfig({\n  displayName: \"SideBar__StoreSelect\",\n  componentId: \"y76ugi-1\"\n})([\"display:block;border:0;border-radius:0;padding:0.5rem;width:90%;margin:1rem auto;\"]);\n_c2 = StoreSelect;\nvar MenuItem = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].div.withConfig({\n  displayName: \"SideBar__MenuItem\",\n  componentId: \"y76ugi-2\"\n})([\"cursor:pointer;border-left:4px solid #2b90d9;padding:1rem 2rem;color:#fff;\", \";\"], function (_ref) {\n  var chooseen = _ref.chooseen;\n  return chooseen ? Object(styled_components__WEBPACK_IMPORTED_MODULE_2__[\"css\"])([\"font-weight:800;background-color:rgba(0,0,0,0.04);\"]) : Object(styled_components__WEBPACK_IMPORTED_MODULE_2__[\"css\"])([\"border-left-color:transparent;color:#d9e1e8;\"]);\n});\n_c3 = MenuItem;\n\nvar MenuContainer = function MenuContainer(_ref2) {\n  var children = _ref2.children,\n      title = _ref2.title;\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(Line, {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 58,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n        children: title\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 60,\n        columnNumber: 9\n      }, _this), children]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 59,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true);\n};\n\n_c4 = MenuContainer;\nvar Line = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].div.withConfig({\n  displayName: \"SideBar__Line\",\n  componentId: \"y76ugi-3\"\n})([\"width:90%;margin:1rem auto;border-bottom:1px solid #d9e1e8;\"]);\n_c5 = Line;\nvar Profile = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].div.withConfig({\n  displayName: \"SideBar__Profile\",\n  componentId: \"y76ugi-4\"\n})([\"text-align:center;img{width:80%;height:auto;border-radius:100%;margin:1rem auto;background-color:#fff;}\"]);\n_c6 = Profile;\n\nfunction clickLogout() {\n  alert('그건 아직 구현안됐어용');\n}\n\nfunction clickChangeMarket(event) {\n  var value = event.target.value;\n  alert(\"\\uC544\\uC9C1 \\uD14D\\uC2A4\\uD2B8\\uB9CC \\uBC14\\uB00C\\uACE0 \\uAC12\\uB4E4\\uC740 \\uC548\\uBC14\\uAEF4\\uC6A9 \".concat(value));\n}\n\nvar SidBar = function SidBar() {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(1),\n      menu = _useState[0],\n      setMenu = _useState[1];\n\n  var onMenuClick = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useCallback\"])(function (menu) {\n    setMenu(menu);\n  }, []);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(SidBarContainer, {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(Profile, {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n        src: '/images/user.png',\n        width: 500,\n        height: 500\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 104,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n        children: \"\\uD669\\uC2B9\\uD604\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 105,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_Button__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n        onClick: clickLogout,\n        children: \"\\uB85C\\uADF8\\uC544\\uC6C3\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 106,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 103,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(MenuContainer, {\n      title: \"\\uC9C0\\uC810 \\uC120\\uD0DD\",\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(StoreSelect, {\n        onChange: clickChangeMarket,\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"option\", {\n          value: \"1\",\n          children: \"\\uC804\\uCCB4\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 111,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"option\", {\n          value: \"2\",\n          children: \"\\uCC9C\\uC548\\uC810\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 112,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"option\", {\n          value: \"3\",\n          children: \"\\uBD80\\uC0B0\\uC810\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 113,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"option\", {\n          value: \"4\",\n          children: \"\\uC628\\uB77C\\uC778\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 114,\n          columnNumber: 11\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 110,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 109,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(MenuContainer, {\n      title: \"\\uD310\\uB9E4 / \\uB9E4\\uC785\",\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(MenuItem, {\n        chooseen: menu === 1,\n        onClick: function onClick() {\n          return onMenuClick(1);\n        },\n        children: \"\\uC694\\uCCAD\\uD655\\uC778\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 119,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(MenuItem, {\n        chooseen: menu === 2,\n        onClick: function onClick() {\n          return onMenuClick(2);\n        },\n        children: \"\\uD1B5\\uACC4\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 122,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 118,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(MenuContainer, {\n      title: \"\\uAE30\\uD0C0\",\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(MenuItem, {\n        chooseen: menu === 3,\n        onClick: function onClick() {\n          return onMenuClick(3);\n        },\n        children: \"\\uBA54\\uB2741\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 128,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(MenuItem, {\n        chooseen: menu === 4,\n        onClick: function onClick() {\n          return onMenuClick(4);\n        },\n        children: \"\\uBA54\\uB2742\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 131,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(MenuItem, {\n        chooseen: menu === 5,\n        onClick: function onClick() {\n          return onMenuClick(5);\n        },\n        children: \"\\uBA54\\uB2743\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 134,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 127,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(MenuContainer, {\n      title: \"\\uAE30\\uD0C0\",\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(MenuItem, {\n        chooseen: menu === 6,\n        onClick: function onClick() {\n          return onMenuClick(6);\n        },\n        children: \"\\uBA54\\uB2741\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 140,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(MenuItem, {\n        chooseen: menu === 7,\n        onClick: function onClick() {\n          return onMenuClick(7);\n        },\n        children: \"\\uBA54\\uB2742\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 143,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(MenuItem, {\n        chooseen: menu === 8,\n        onClick: function onClick() {\n          return onMenuClick(8);\n        },\n        children: \"\\uBA54\\uB2743\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 146,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 139,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 102,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(SidBar, \"m8FDmCaZcqDQuadQX/8ZDTIT9k4=\");\n\n_c7 = SidBar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (SidBar);\n\nvar _c, _c2, _c3, _c4, _c5, _c6, _c7;\n\n$RefreshReg$(_c, \"SidBarContainer\");\n$RefreshReg$(_c2, \"StoreSelect\");\n$RefreshReg$(_c3, \"MenuItem\");\n$RefreshReg$(_c4, \"MenuContainer\");\n$RefreshReg$(_c5, \"Line\");\n$RefreshReg$(_c6, \"Profile\");\n$RefreshReg$(_c7, \"SidBar\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9tYW5hZ2VyL1NpZGVCYXIudHN4PzQzODkiXSwibmFtZXMiOlsiU2lkQmFyQ29udGFpbmVyIiwic3R5bGVkIiwiZGl2Iiwic2lkZUJhckJhY2tncm91bmRDb2xvciIsInNpZGVCYXJGb250Q29sb3IiLCJTdG9yZVNlbGVjdCIsInNlbGVjdCIsIk1lbnVJdGVtIiwiY2hvb3NlZW4iLCJjc3MiLCJNZW51Q29udGFpbmVyIiwiY2hpbGRyZW4iLCJ0aXRsZSIsIkxpbmUiLCJQcm9maWxlIiwiY2xpY2tMb2dvdXQiLCJhbGVydCIsImNsaWNrQ2hhbmdlTWFya2V0IiwiZXZlbnQiLCJ2YWx1ZSIsInRhcmdldCIsIlNpZEJhciIsInVzZVN0YXRlIiwibWVudSIsInNldE1lbnUiLCJvbk1lbnVDbGljayIsInVzZUNhbGxiYWNrIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUVBLElBQU1BLGVBQWUsR0FBR0MseURBQU0sQ0FBQ0MsR0FBVjtBQUFBO0FBQUE7QUFBQSwySUFFQ0MscUVBRkQsRUFHVkMsK0RBSFUsQ0FBckI7S0FBTUosZTtBQWNOLElBQU1LLFdBQVcsR0FBR0oseURBQU0sQ0FBQ0ssTUFBVjtBQUFBO0FBQUE7QUFBQSx5RkFBakI7TUFBTUQsVztBQVNOLElBQU1FLFFBQVEsR0FBR04seURBQU0sQ0FBQ0MsR0FBVjtBQUFBO0FBQUE7QUFBQSx3RkFNVjtBQUFBLE1BQUdNLFFBQUgsUUFBR0EsUUFBSDtBQUFBLFNBQ0FBLFFBQVEsR0FDSkMsNkRBREksMkRBS0pBLDZEQUxJLGtEQURSO0FBQUEsQ0FOVSxDQUFkO01BQU1GLFE7O0FBc0JOLElBQU1HLGFBQTJDLEdBQUcsU0FBOUNBLGFBQThDLFFBRzFCO0FBQUEsTUFGeEJDLFFBRXdCLFNBRnhCQSxRQUV3QjtBQUFBLE1BRHhCQyxLQUN3QixTQUR4QkEsS0FDd0I7QUFDeEIsc0JBQ0U7QUFBQSw0QkFDRSxxRUFB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QUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFQRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFyQ0Y7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFtREQsQ0ExREQ7O0dBQU1KLE07O01BQUFBLE07QUE0RFNBLHFFQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9tYW5hZ2VyL1NpZGVCYXIudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hhbmdlRXZlbnQsIFByb3BzV2l0aENoaWxkcmVuLCB1c2VDYWxsYmFjaywgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgc3R5bGVkLCB7IGNzcyB9IGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcblxuaW1wb3J0IHsgc2lkZUJhckJhY2tncm91bmRDb2xvciwgc2lkZUJhckZvbnRDb2xvciB9IGZyb20gJy4uLy4uL3N0eWxlcy9jb2xvcnMnO1xuaW1wb3J0IEJ1dHRvbiBmcm9tICcuLi9CdXR0b24nO1xuXG5jb25zdCBTaWRCYXJDb250YWluZXIgPSBzdHlsZWQuZGl2YFxuICBwYWRkaW5nOiAxcmVtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAke3NpZGVCYXJCYWNrZ3JvdW5kQ29sb3J9O1xuICBjb2xvcjogJHtzaWRlQmFyRm9udENvbG9yfTtcbiAgbWluLWhlaWdodDogMTAwdmg7XG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcblxuICBwIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDFyZW07XG4gICAgbWFyZ2luOiAxcmVtIGF1dG87XG4gICAgY29sb3I6ICNmZmY7XG4gIH1cbmA7XG5cbmNvbnN0IFN0b3JlU2VsZWN0ID0gc3R5bGVkLnNlbGVjdGBcbiAgZGlzcGxheTogYmxvY2s7XG4gIGJvcmRlcjogMDtcbiAgYm9yZGVyLXJhZGl1czogMDtcbiAgcGFkZGluZzogMC41cmVtO1xuICB3aWR0aDogOTAlO1xuICBtYXJnaW46IDFyZW0gYXV0bztcbmA7XG5cbmNvbnN0IE1lbnVJdGVtID0gc3R5bGVkLmRpdjx7IGNob29zZWVuOiBib29sZWFuIH0+YFxuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJvcmRlci1sZWZ0OiA0cHggc29saWQgIzJiOTBkOTtcbiAgcGFkZGluZzogMXJlbSAycmVtO1xuICBjb2xvcjogI2ZmZjtcblxuICAkeyh7IGNob29zZWVuIH0pID0+XG4gICAgY2hvb3NlZW5cbiAgICAgID8gY3NzYFxuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA4MDA7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjA0KTtcbiAgICAgICAgYFxuICAgICAgOiBjc3NgXG4gICAgICAgICAgYm9yZGVyLWxlZnQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgICAgICAgIGNvbG9yOiAjZDllMWU4O1xuICAgICAgICBgfTtcbmA7XG5cbnR5cGUgTWVudUNvbnRhaW5lclByb3BzID0gUHJvcHNXaXRoQ2hpbGRyZW48e1xuICB0aXRsZTogc3RyaW5nO1xufT47XG5cbmNvbnN0IE1lbnVDb250YWluZXI6IFJlYWN0LkZDPE1lbnVDb250YWluZXJQcm9wcz4gPSAoe1xuICBjaGlsZHJlbixcbiAgdGl0bGUsXG59OiBNZW51Q29udGFpbmVyUHJvcHMpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPExpbmUgLz5cbiAgICAgIDxkaXY+XG4gICAgICAgIDxwPnt0aXRsZX08L3A+XG4gICAgICAgIHtjaGlsZHJlbn1cbiAgICAgIDwvZGl2PlxuICAgIDwvPlxuICApO1xufTtcblxuY29uc3QgTGluZSA9IHN0eWxlZC5kaXZgXG4gIHdpZHRoOiA5MCU7XG4gIG1hcmdpbjogMXJlbSBhdXRvO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2Q5ZTFlODtcbmA7XG5cbmNvbnN0IFByb2ZpbGUgPSBzdHlsZWQuZGl2YFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG5cbiAgaW1nIHtcbiAgICB3aWR0aDogODAlO1xuICAgIGhlaWdodDogYXV0bztcbiAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xuICAgIG1hcmdpbjogMXJlbSBhdXRvO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIH1cbmA7XG5cbmZ1bmN0aW9uIGNsaWNrTG9nb3V0KCkge1xuICBhbGVydCgn6re46rG0IOyVhOyngSDqtaztmITslYjrkJDslrTsmqknKTtcbn1cblxuZnVuY3Rpb24gY2xpY2tDaGFuZ2VNYXJrZXQoZXZlbnQ6IENoYW5nZUV2ZW50PEhUTUxTZWxlY3RFbGVtZW50Pikge1xuICBjb25zdCB7IHZhbHVlIH0gPSBldmVudC50YXJnZXQ7XG4gIGFsZXJ0KGDslYTsp4Eg7YWN7Iqk7Yq466eMIOuwlOuAjOqzoCDqsJLrk6TsnYAg7JWI67CU6ru07JqpICR7dmFsdWV9YCk7XG59XG5cbmNvbnN0IFNpZEJhcjogUmVhY3QuRkMgPSAoKSA9PiB7XG4gIGNvbnN0IFttZW51LCBzZXRNZW51XSA9IHVzZVN0YXRlKDEpO1xuXG4gIGNvbnN0IG9uTWVudUNsaWNrID0gdXNlQ2FsbGJhY2soKG1lbnUpID0+IHtcbiAgICBzZXRNZW51KG1lbnUpO1xuICB9LCBbXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8U2lkQmFyQ29udGFpbmVyPlxuICAgICAgPFByb2ZpbGU+XG4gICAgICAgIDxpbWcgc3JjPXsnL2ltYWdlcy91c2VyLnBuZyd9IHdpZHRoPXs1MDB9IGhlaWdodD17NTAwfSAvPlxuICAgICAgICA8cD7tmansirntmIQ8L3A+XG4gICAgICAgIDxCdXR0b24gb25DbGljaz17Y2xpY2tMb2dvdXR9PuuhnOq3uOyVhOybgzwvQnV0dG9uPlxuICAgICAgPC9Qcm9maWxlPlxuXG4gICAgICA8TWVudUNvbnRhaW5lciB0aXRsZT1cIuyngOygkCDshKDtg51cIj5cbiAgICAgICAgPFN0b3JlU2VsZWN0IG9uQ2hhbmdlPXtjbGlja0NoYW5nZU1hcmtldH0+XG4gICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjFcIj7soITssrQ8L29wdGlvbj5cbiAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiMlwiPuyynOyViOygkDwvb3B0aW9uPlxuICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCIzXCI+67aA7IKw7KCQPC9vcHRpb24+XG4gICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjRcIj7smKjrnbzsnbg8L29wdGlvbj5cbiAgICAgICAgPC9TdG9yZVNlbGVjdD5cbiAgICAgIDwvTWVudUNvbnRhaW5lcj5cblxuICAgICAgPE1lbnVDb250YWluZXIgdGl0bGU9XCLtjJDrp6QgLyDrp6TsnoVcIj5cbiAgICAgICAgPE1lbnVJdGVtIGNob29zZWVuPXttZW51ID09PSAxfSBvbkNsaWNrPXsoKSA9PiBvbk1lbnVDbGljaygxKX0+XG4gICAgICAgICAg7JqU7LKt7ZmV7J24XG4gICAgICAgIDwvTWVudUl0ZW0+XG4gICAgICAgIDxNZW51SXRlbSBjaG9vc2Vlbj17bWVudSA9PT0gMn0gb25DbGljaz17KCkgPT4gb25NZW51Q2xpY2soMil9PlxuICAgICAgICAgIO2GteqzhFxuICAgICAgICA8L01lbnVJdGVtPlxuICAgICAgPC9NZW51Q29udGFpbmVyPlxuXG4gICAgICA8TWVudUNvbnRhaW5lciB0aXRsZT1cIuq4sO2DgFwiPlxuICAgICAgICA8TWVudUl0ZW0gY2hvb3NlZW49e21lbnUgPT09IDN9IG9uQ2xpY2s9eygpID0+IG9uTWVudUNsaWNrKDMpfT5cbiAgICAgICAgICDrqZTribQxXG4gICAgICAgIDwvTWVudUl0ZW0+XG4gICAgICAgIDxNZW51SXRlbSBjaG9vc2Vlbj17bWVudSA9PT0gNH0gb25DbGljaz17KCkgPT4gb25NZW51Q2xpY2soNCl9PlxuICAgICAgICAgIOuplOuJtDJcbiAgICAgICAgPC9NZW51SXRlbT5cbiAgICAgICAgPE1lbnVJdGVtIGNob29zZWVuPXttZW51ID09PSA1fSBvbkNsaWNrPXsoKSA9PiBvbk1lbnVDbGljayg1KX0+XG4gICAgICAgICAg66mU64m0M1xuICAgICAgICA8L01lbnVJdGVtPlxuICAgICAgPC9NZW51Q29udGFpbmVyPlxuXG4gICAgICA8TWVudUNvbnRhaW5lciB0aXRsZT1cIuq4sO2DgFwiPlxuICAgICAgICA8TWVudUl0ZW0gY2hvb3NlZW49e21lbnUgPT09IDZ9IG9uQ2xpY2s9eygpID0+IG9uTWVudUNsaWNrKDYpfT5cbiAgICAgICAgICDrqZTribQxXG4gICAgICAgIDwvTWVudUl0ZW0+XG4gICAgICAgIDxNZW51SXRlbSBjaG9vc2Vlbj17bWVudSA9PT0gN30gb25DbGljaz17KCkgPT4gb25NZW51Q2xpY2soNyl9PlxuICAgICAgICAgIOuplOuJtDJcbiAgICAgICAgPC9NZW51SXRlbT5cbiAgICAgICAgPE1lbnVJdGVtIGNob29zZWVuPXttZW51ID09PSA4fSBvbkNsaWNrPXsoKSA9PiBvbk1lbnVDbGljayg4KX0+XG4gICAgICAgICAg66mU64m0M1xuICAgICAgICA8L01lbnVJdGVtPlxuICAgICAgPC9NZW51Q29udGFpbmVyPlxuICAgIDwvU2lkQmFyQ29udGFpbmVyPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgU2lkQmFyO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/manager/SideBar.tsx\n");

/***/ })

})