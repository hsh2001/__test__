webpackHotUpdate_N_E("pages/manager",{

/***/ "./components/manager/SideBar.tsx":
/*!****************************************!*\
  !*** ./components/manager/SideBar.tsx ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _styles_colors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../styles/colors */ \"./styles/colors.ts\");\n/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Button */ \"./components/Button.tsx\");\n\n\n\nvar _jsxFileName = \"/Users/seung-hyunhwang/Dropbox/git/web/components/manager/SideBar.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\nvar SidBarContainer = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].div.withConfig({\n  displayName: \"SideBar__SidBarContainer\",\n  componentId: \"y76ugi-0\"\n})([\"background-color:\", \";color:#fff;min-height:100vh;overflow-y:scroll;p{padding-left:1rem;margin:1rem auto;}\"], _styles_colors__WEBPACK_IMPORTED_MODULE_3__[\"sideBarBackgroundColor\"]);\n_c = SidBarContainer;\nvar StoreSelect = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].select.withConfig({\n  displayName: \"SideBar__StoreSelect\",\n  componentId: \"y76ugi-1\"\n})([\"display:block;border:0;border-radius:0;width:90%;margin:1rem auto;\"]);\n_c2 = StoreSelect;\nvar MenuItem = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].div.withConfig({\n  displayName: \"SideBar__MenuItem\",\n  componentId: \"y76ugi-2\"\n})([\"border-left:4px solid \", \";padding:1rem 2rem;color:#fff;font-weight:800;\", \";\"], _styles_colors__WEBPACK_IMPORTED_MODULE_3__[\"primaryColor\"], function (_ref) {\n  var chooseen = _ref.chooseen;\n  return chooseen ? Object(styled_components__WEBPACK_IMPORTED_MODULE_2__[\"css\"])([\"background-color:rgba(0,0,0,0.2);\"]) : Object(styled_components__WEBPACK_IMPORTED_MODULE_2__[\"css\"])([\"border-left-color:transparent;\"]);\n});\n_c3 = MenuItem;\n\nvar MenuContainer = function MenuContainer(_ref2) {\n  var children = _ref2.children;\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(Line, {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 46,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      children: \"children\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 47,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true);\n};\n\n_c4 = MenuContainer;\nvar Line = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].div.withConfig({\n  displayName: \"SideBar__Line\",\n  componentId: \"y76ugi-3\"\n})([\"width:90%;margin:1rem auto;border-bottom:1px solid #777;\"]);\n_c5 = Line;\nvar Profile = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].div.withConfig({\n  displayName: \"SideBar__Profile\",\n  componentId: \"y76ugi-4\"\n})([\"text-align:center;canvas{width:80%;border-radius:100%;margin:1rem auto;background-color:#fff;}\"]);\n_c6 = Profile;\n\nfunction clickLogout() {\n  alert('그건 아직 구현안됐어용');\n}\n\nfunction clickChangeMarket(event) {\n  var value = event.target.value;\n  alert(\"\\uC544\\uC9C1 \\uD14D\\uC2A4\\uD2B8\\uB9CC \\uBC14\\uB00C\\uACE0 \\uAC12\\uB4E4\\uC740 \\uC548\\uBC14\\uAEF4\\uC6A9 \".concat(value));\n}\n\nvar SidBar = function SidBar() {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(1),\n      menu = _useState[0],\n      setMenu = _useState[1];\n\n  var onMenuClick = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useCallback\"])(function (menu) {\n    setMenu(menu);\n  }, []);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(SidBarContainer, {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(Profile, {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"canvas\", {\n        width: 500,\n        height: 500\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 88,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n        children: \"\\uD669\\uC2B9\\uD604\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 89,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_Button__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n        onClick: clickLogout,\n        children: \"\\uB85C\\uADF8\\uC544\\uC6C3\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 90,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 87,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(Line, {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 93,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n        children: \"\\uC9C0\\uC810 \\uC120\\uD0DD\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 95,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(StoreSelect, {\n        onChange: clickChangeMarket,\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"option\", {\n          value: \"1\",\n          children: \"\\uC804\\uCCB4\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 97,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"option\", {\n          value: \"2\",\n          children: \"\\uCC9C\\uC548\\uC810\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 98,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"option\", {\n          value: \"3\",\n          children: \"\\uBD80\\uC0B0\\uC810\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 99,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"option\", {\n          value: \"4\",\n          children: \"\\uC628\\uB77C\\uC778\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 100,\n          columnNumber: 11\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 96,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 94,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(Line, {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 104,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n        children: \"\\uD310\\uB9E4 / \\uB9E4\\uC785\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 106,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(MenuItem, {\n        chooseen: menu === 1,\n        onClick: function onClick() {\n          return onMenuClick(1);\n        },\n        children: \"\\uC694\\uCCAD\\uD655\\uC778\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 107,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(MenuItem, {\n        chooseen: menu === 2,\n        onClick: function onClick() {\n          return onMenuClick(2);\n        },\n        children: \"\\uD1B5\\uACC4\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 110,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 105,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(MenuContainer, {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n        children: \"\\uAE30\\uD0C0\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 116,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(MenuItem, {\n        chooseen: menu === 3,\n        onClick: function onClick() {\n          return onMenuClick(3);\n        },\n        children: \"\\uBA54\\uB2741\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 117,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(MenuItem, {\n        chooseen: menu === 4,\n        onClick: function onClick() {\n          return onMenuClick(4);\n        },\n        children: \"\\uBA54\\uB2742\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 120,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(MenuItem, {\n        chooseen: menu === 5,\n        onClick: function onClick() {\n          return onMenuClick(5);\n        },\n        children: \"\\uBA54\\uB2743\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 123,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 115,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(MenuContainer, {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n        children: \"\\uAE30\\uD0C0\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 129,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(MenuItem, {\n        chooseen: menu === 6,\n        onClick: function onClick() {\n          return onMenuClick(6);\n        },\n        children: \"\\uBA54\\uB2741\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 130,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(MenuItem, {\n        chooseen: menu === 7,\n        onClick: function onClick() {\n          return onMenuClick(7);\n        },\n        children: \"\\uBA54\\uB2742\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 133,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(MenuItem, {\n        chooseen: menu === 8,\n        onClick: function onClick() {\n          return onMenuClick(8);\n        },\n        children: \"\\uBA54\\uB2743\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 136,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 128,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 86,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(SidBar, \"m8FDmCaZcqDQuadQX/8ZDTIT9k4=\");\n\n_c7 = SidBar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (SidBar);\n\nvar _c, _c2, _c3, _c4, _c5, _c6, _c7;\n\n$RefreshReg$(_c, \"SidBarContainer\");\n$RefreshReg$(_c2, \"StoreSelect\");\n$RefreshReg$(_c3, \"MenuItem\");\n$RefreshReg$(_c4, \"MenuContainer\");\n$RefreshReg$(_c5, \"Line\");\n$RefreshReg$(_c6, \"Profile\");\n$RefreshReg$(_c7, \"SidBar\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9tYW5hZ2VyL1NpZGVCYXIudHN4PzQzODkiXSwibmFtZXMiOlsiU2lkQmFyQ29udGFpbmVyIiwic3R5bGVkIiwiZGl2Iiwic2lkZUJhckJhY2tncm91bmRDb2xvciIsIlN0b3JlU2VsZWN0Iiwic2VsZWN0IiwiTWVudUl0ZW0iLCJwcmltYXJ5Q29sb3IiLCJjaG9vc2VlbiIsImNzcyIsIk1lbnVDb250YWluZXIiLCJjaGlsZHJlbiIsIkxpbmUiLCJQcm9maWxlIiwiY2xpY2tMb2dvdXQiLCJhbGVydCIsImNsaWNrQ2hhbmdlTWFya2V0IiwiZXZlbnQiLCJ2YWx1ZSIsInRhcmdldCIsIlNpZEJhciIsInVzZVN0YXRlIiwibWVudSIsInNldE1lbnUiLCJvbk1lbnVDbGljayIsInVzZUNhbGxiYWNrIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUVBLElBQU1BLGVBQWUsR0FBR0MseURBQU0sQ0FBQ0MsR0FBVjtBQUFBO0FBQUE7QUFBQSxtSEFDQ0MscUVBREQsQ0FBckI7S0FBTUgsZTtBQVlOLElBQU1JLFdBQVcsR0FBR0gseURBQU0sQ0FBQ0ksTUFBVjtBQUFBO0FBQUE7QUFBQSwwRUFBakI7TUFBTUQsVztBQVFOLElBQU1FLFFBQVEsR0FBR0wseURBQU0sQ0FBQ0MsR0FBVjtBQUFBO0FBQUE7QUFBQSxzRkFDYUssMkRBRGIsRUFNVjtBQUFBLE1BQUdDLFFBQUgsUUFBR0EsUUFBSDtBQUFBLFNBQ0FBLFFBQVEsR0FDSkMsNkRBREksMENBSUpBLDZEQUpJLG9DQURSO0FBQUEsQ0FOVSxDQUFkO01BQU1ILFE7O0FBZ0JOLElBQU1JLGFBQXVCLEdBQUcsU0FBMUJBLGFBQTBCLFFBQWtCO0FBQUEsTUFBZkMsUUFBZSxTQUFmQSxRQUFlO0FBQ2hELHNCQUNFO0FBQUEsNEJBQ0UscUVBQUMsSUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREYsZUFFRTtBQUFBO0FBQUE7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U0FBekM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFSRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUExQ0Y7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUF5REQsQ0FoRUQ7O0dBQU1KLE07O01BQUFBLE07QUFrRVNBLHFFQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9tYW5hZ2VyL1NpZGVCYXIudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hhbmdlRXZlbnQsIHVzZUNhbGxiYWNrLCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBzdHlsZWQsIHsgY3NzIH0gZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuXG5pbXBvcnQgeyBwcmltYXJ5Q29sb3IsIHNpZGVCYXJCYWNrZ3JvdW5kQ29sb3IgfSBmcm9tICcuLi8uLi9zdHlsZXMvY29sb3JzJztcbmltcG9ydCBCdXR0b24gZnJvbSAnLi4vQnV0dG9uJztcblxuY29uc3QgU2lkQmFyQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcbiAgYmFja2dyb3VuZC1jb2xvcjogJHtzaWRlQmFyQmFja2dyb3VuZENvbG9yfTtcbiAgY29sb3I6ICNmZmY7XG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xuICBvdmVyZmxvdy15OiBzY3JvbGw7XG5cbiAgcCB7XG4gICAgcGFkZGluZy1sZWZ0OiAxcmVtO1xuICAgIG1hcmdpbjogMXJlbSBhdXRvO1xuICB9XG5gO1xuXG5jb25zdCBTdG9yZVNlbGVjdCA9IHN0eWxlZC5zZWxlY3RgXG4gIGRpc3BsYXk6IGJsb2NrO1xuICBib3JkZXI6IDA7XG4gIGJvcmRlci1yYWRpdXM6IDA7XG4gIHdpZHRoOiA5MCU7XG4gIG1hcmdpbjogMXJlbSBhdXRvO1xuYDtcblxuY29uc3QgTWVudUl0ZW0gPSBzdHlsZWQuZGl2PHsgY2hvb3NlZW46IGJvb2xlYW4gfT5gXG4gIGJvcmRlci1sZWZ0OiA0cHggc29saWQgJHtwcmltYXJ5Q29sb3J9O1xuICBwYWRkaW5nOiAxcmVtIDJyZW07XG4gIGNvbG9yOiAjZmZmO1xuICBmb250LXdlaWdodDogODAwO1xuXG4gICR7KHsgY2hvb3NlZW4gfSkgPT5cbiAgICBjaG9vc2VlblxuICAgICAgPyBjc3NgXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjIpO1xuICAgICAgICBgXG4gICAgICA6IGNzc2BcbiAgICAgICAgICBib3JkZXItbGVmdC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgICAgIGB9O1xuYDtcblxuY29uc3QgTWVudUNvbnRhaW5lcjogUmVhY3QuRkMgPSAoeyBjaGlsZHJlbiB9KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxMaW5lIC8+XG4gICAgICA8ZGl2PmNoaWxkcmVuPC9kaXY+XG4gICAgPC8+XG4gICk7XG59O1xuXG5jb25zdCBMaW5lID0gc3R5bGVkLmRpdmBcbiAgd2lkdGg6IDkwJTtcbiAgbWFyZ2luOiAxcmVtIGF1dG87XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjNzc3O1xuYDtcblxuY29uc3QgUHJvZmlsZSA9IHN0eWxlZC5kaXZgXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcblxuICBjYW52YXMge1xuICAgIHdpZHRoOiA4MCU7XG4gICAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgICBtYXJnaW46IDFyZW0gYXV0bztcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICB9XG5gO1xuXG5mdW5jdGlvbiBjbGlja0xvZ291dCgpIHtcbiAgYWxlcnQoJ+q3uOqxtCDslYTsp4Eg6rWs7ZiE7JWI65CQ7Ja07JqpJyk7XG59XG5cbmZ1bmN0aW9uIGNsaWNrQ2hhbmdlTWFya2V0KGV2ZW50OiBDaGFuZ2VFdmVudDxIVE1MU2VsZWN0RWxlbWVudD4pIHtcbiAgY29uc3QgeyB2YWx1ZSB9ID0gZXZlbnQudGFyZ2V0O1xuICBhbGVydChg7JWE7KeBIO2FjeyKpO2KuOunjCDrsJTrgIzqs6Ag6rCS65Ok7J2AIOyViOuwlOq7tOyaqSAke3ZhbHVlfWApO1xufVxuXG5jb25zdCBTaWRCYXI6IFJlYWN0LkZDID0gKCkgPT4ge1xuICBjb25zdCBbbWVudSwgc2V0TWVudV0gPSB1c2VTdGF0ZSgxKTtcblxuICBjb25zdCBvbk1lbnVDbGljayA9IHVzZUNhbGxiYWNrKChtZW51KSA9PiB7XG4gICAgc2V0TWVudShtZW51KTtcbiAgfSwgW10pO1xuXG4gIHJldHVybiAoXG4gICAgPFNpZEJhckNvbnRhaW5lcj5cbiAgICAgIDxQcm9maWxlPlxuICAgICAgICA8Y2FudmFzIHdpZHRoPXs1MDB9IGhlaWdodD17NTAwfSAvPlxuICAgICAgICA8cD7tmansirntmIQ8L3A+XG4gICAgICAgIDxCdXR0b24gb25DbGljaz17Y2xpY2tMb2dvdXR9PuuhnOq3uOyVhOybgzwvQnV0dG9uPlxuICAgICAgPC9Qcm9maWxlPlxuXG4gICAgICA8TGluZSAvPlxuICAgICAgPGRpdj5cbiAgICAgICAgPHA+7KeA7KCQIOyEoO2DnTwvcD5cbiAgICAgICAgPFN0b3JlU2VsZWN0IG9uQ2hhbmdlPXtjbGlja0NoYW5nZU1hcmtldH0+XG4gICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjFcIj7soITssrQ8L29wdGlvbj5cbiAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiMlwiPuyynOyViOygkDwvb3B0aW9uPlxuICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCIzXCI+67aA7IKw7KCQPC9vcHRpb24+XG4gICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjRcIj7smKjrnbzsnbg8L29wdGlvbj5cbiAgICAgICAgPC9TdG9yZVNlbGVjdD5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8TGluZSAvPlxuICAgICAgPGRpdj5cbiAgICAgICAgPHA+7YyQ66ekIC8g66ek7J6FPC9wPlxuICAgICAgICA8TWVudUl0ZW0gY2hvb3NlZW49e21lbnUgPT09IDF9IG9uQ2xpY2s9eygpID0+IG9uTWVudUNsaWNrKDEpfT5cbiAgICAgICAgICDsmpTssq3tmZXsnbhcbiAgICAgICAgPC9NZW51SXRlbT5cbiAgICAgICAgPE1lbnVJdGVtIGNob29zZWVuPXttZW51ID09PSAyfSBvbkNsaWNrPXsoKSA9PiBvbk1lbnVDbGljaygyKX0+XG4gICAgICAgICAg7Ya16rOEXG4gICAgICAgIDwvTWVudUl0ZW0+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPE1lbnVDb250YWluZXI+XG4gICAgICAgIDxwPuq4sO2DgDwvcD5cbiAgICAgICAgPE1lbnVJdGVtIGNob29zZWVuPXttZW51ID09PSAzfSBvbkNsaWNrPXsoKSA9PiBvbk1lbnVDbGljaygzKX0+XG4gICAgICAgICAg66mU64m0MVxuICAgICAgICA8L01lbnVJdGVtPlxuICAgICAgICA8TWVudUl0ZW0gY2hvb3NlZW49e21lbnUgPT09IDR9IG9uQ2xpY2s9eygpID0+IG9uTWVudUNsaWNrKDQpfT5cbiAgICAgICAgICDrqZTribQyXG4gICAgICAgIDwvTWVudUl0ZW0+XG4gICAgICAgIDxNZW51SXRlbSBjaG9vc2Vlbj17bWVudSA9PT0gNX0gb25DbGljaz17KCkgPT4gb25NZW51Q2xpY2soNSl9PlxuICAgICAgICAgIOuplOuJtDNcbiAgICAgICAgPC9NZW51SXRlbT5cbiAgICAgIDwvTWVudUNvbnRhaW5lcj5cblxuICAgICAgPE1lbnVDb250YWluZXI+XG4gICAgICAgIDxwPuq4sO2DgDwvcD5cbiAgICAgICAgPE1lbnVJdGVtIGNob29zZWVuPXttZW51ID09PSA2fSBvbkNsaWNrPXsoKSA9PiBvbk1lbnVDbGljayg2KX0+XG4gICAgICAgICAg66mU64m0MVxuICAgICAgICA8L01lbnVJdGVtPlxuICAgICAgICA8TWVudUl0ZW0gY2hvb3NlZW49e21lbnUgPT09IDd9IG9uQ2xpY2s9eygpID0+IG9uTWVudUNsaWNrKDcpfT5cbiAgICAgICAgICDrqZTribQyXG4gICAgICAgIDwvTWVudUl0ZW0+XG4gICAgICAgIDxNZW51SXRlbSBjaG9vc2Vlbj17bWVudSA9PT0gOH0gb25DbGljaz17KCkgPT4gb25NZW51Q2xpY2soOCl9PlxuICAgICAgICAgIOuplOuJtDNcbiAgICAgICAgPC9NZW51SXRlbT5cbiAgICAgIDwvTWVudUNvbnRhaW5lcj5cbiAgICA8L1NpZEJhckNvbnRhaW5lcj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFNpZEJhcjtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/manager/SideBar.tsx\n");

/***/ })

})