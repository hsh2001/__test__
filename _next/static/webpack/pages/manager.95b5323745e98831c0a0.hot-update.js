webpackHotUpdate_N_E("pages/manager",{

/***/ "./components/manager/SideBar.tsx":
/*!****************************************!*\
  !*** ./components/manager/SideBar.tsx ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _styles_colors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../styles/colors */ \"./styles/colors.ts\");\n/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Button */ \"./components/Button.tsx\");\n\n\n\nvar _jsxFileName = \"/Users/seung-hyunhwang/Dropbox/git/web/components/manager/SideBar.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\nvar SidBarContainer = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].div.withConfig({\n  displayName: \"SideBar__SidBarContainer\",\n  componentId: \"y76ugi-0\"\n})([\"background-color:\", \";color:\", \";min-height:100vh;overflow-y:scroll;p{padding-left:1rem;margin:1rem auto;color:#d9e1e8;}\"], _styles_colors__WEBPACK_IMPORTED_MODULE_3__[\"sideBarBackgroundColor\"], _styles_colors__WEBPACK_IMPORTED_MODULE_3__[\"sideBarFontColor\"]);\n_c = SidBarContainer;\nvar StoreSelect = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].select.withConfig({\n  displayName: \"SideBar__StoreSelect\",\n  componentId: \"y76ugi-1\"\n})([\"display:block;border:0;border-radius:0;padding:0.5rem;width:90%;margin:1rem auto;\"]);\n_c2 = StoreSelect;\nvar MenuItem = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].div.withConfig({\n  displayName: \"SideBar__MenuItem\",\n  componentId: \"y76ugi-2\"\n})([\"cursor:pointer;border-left:4px solid #2b90d9;padding:1rem 2rem;color:#fff;font-weight:800;\", \";\"], function (_ref) {\n  var chooseen = _ref.chooseen;\n  return chooseen ? Object(styled_components__WEBPACK_IMPORTED_MODULE_2__[\"css\"])([\"background-color:rgba(0,0,0,0.01);\"]) : Object(styled_components__WEBPACK_IMPORTED_MODULE_2__[\"css\"])([\"border-left-color:transparent;color:#d9e1e8;\"]);\n});\n_c3 = MenuItem;\n\nvar MenuContainer = function MenuContainer(_ref2) {\n  var children = _ref2.children;\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(Line, {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 54,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      children: children\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 55,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true);\n};\n\n_c4 = MenuContainer;\nvar Line = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].div.withConfig({\n  displayName: \"SideBar__Line\",\n  componentId: \"y76ugi-3\"\n})([\"width:90%;margin:1rem auto;border-bottom:1px solid #d9e1e8;\"]);\n_c5 = Line;\nvar Profile = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].div.withConfig({\n  displayName: \"SideBar__Profile\",\n  componentId: \"y76ugi-4\"\n})([\"text-align:center;canvas{width:80%;border-radius:100%;margin:1rem auto;background-color:#fff;}\"]);\n_c6 = Profile;\n\nfunction clickLogout() {\n  alert('그건 아직 구현안됐어용');\n}\n\nfunction clickChangeMarket(event) {\n  var value = event.target.value;\n  alert(\"\\uC544\\uC9C1 \\uD14D\\uC2A4\\uD2B8\\uB9CC \\uBC14\\uB00C\\uACE0 \\uAC12\\uB4E4\\uC740 \\uC548\\uBC14\\uAEF4\\uC6A9 \".concat(value));\n}\n\nvar SidBar = function SidBar() {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(1),\n      menu = _useState[0],\n      setMenu = _useState[1];\n\n  var onMenuClick = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useCallback\"])(function (menu) {\n    setMenu(menu);\n  }, []);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(SidBarContainer, {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(Profile, {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"canvas\", {\n        width: 500,\n        height: 500\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 96,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n        children: \"\\uD669\\uC2B9\\uD604\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 97,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_Button__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n        onClick: clickLogout,\n        children: \"\\uB85C\\uADF8\\uC544\\uC6C3\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 98,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 95,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(MenuContainer, {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n        children: \"\\uC9C0\\uC810 \\uC120\\uD0DD\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 102,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(StoreSelect, {\n        onChange: clickChangeMarket,\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"option\", {\n          value: \"1\",\n          children: \"\\uC804\\uCCB4\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 104,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"option\", {\n          value: \"2\",\n          children: \"\\uCC9C\\uC548\\uC810\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 105,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"option\", {\n          value: \"3\",\n          children: \"\\uBD80\\uC0B0\\uC810\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 106,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"option\", {\n          value: \"4\",\n          children: \"\\uC628\\uB77C\\uC778\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 107,\n          columnNumber: 11\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 103,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 101,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(MenuContainer, {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n        children: \"\\uD310\\uB9E4 / \\uB9E4\\uC785\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 112,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(MenuItem, {\n        chooseen: menu === 1,\n        onClick: function onClick() {\n          return onMenuClick(1);\n        },\n        children: \"\\uC694\\uCCAD\\uD655\\uC778\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 113,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(MenuItem, {\n        chooseen: menu === 2,\n        onClick: function onClick() {\n          return onMenuClick(2);\n        },\n        children: \"\\uD1B5\\uACC4\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 116,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 111,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(MenuContainer, {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n        children: \"\\uAE30\\uD0C0\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 122,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(MenuItem, {\n        chooseen: menu === 3,\n        onClick: function onClick() {\n          return onMenuClick(3);\n        },\n        children: \"\\uBA54\\uB2741\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 123,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(MenuItem, {\n        chooseen: menu === 4,\n        onClick: function onClick() {\n          return onMenuClick(4);\n        },\n        children: \"\\uBA54\\uB2742\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 126,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(MenuItem, {\n        chooseen: menu === 5,\n        onClick: function onClick() {\n          return onMenuClick(5);\n        },\n        children: \"\\uBA54\\uB2743\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 129,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 121,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(MenuContainer, {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n        children: \"\\uAE30\\uD0C0\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 135,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(MenuItem, {\n        chooseen: menu === 6,\n        onClick: function onClick() {\n          return onMenuClick(6);\n        },\n        children: \"\\uBA54\\uB2741\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 136,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(MenuItem, {\n        chooseen: menu === 7,\n        onClick: function onClick() {\n          return onMenuClick(7);\n        },\n        children: \"\\uBA54\\uB2742\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 139,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(MenuItem, {\n        chooseen: menu === 8,\n        onClick: function onClick() {\n          return onMenuClick(8);\n        },\n        children: \"\\uBA54\\uB2743\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 142,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 134,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 94,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(SidBar, \"m8FDmCaZcqDQuadQX/8ZDTIT9k4=\");\n\n_c7 = SidBar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (SidBar);\n\nvar _c, _c2, _c3, _c4, _c5, _c6, _c7;\n\n$RefreshReg$(_c, \"SidBarContainer\");\n$RefreshReg$(_c2, \"StoreSelect\");\n$RefreshReg$(_c3, \"MenuItem\");\n$RefreshReg$(_c4, \"MenuContainer\");\n$RefreshReg$(_c5, \"Line\");\n$RefreshReg$(_c6, \"Profile\");\n$RefreshReg$(_c7, \"SidBar\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9tYW5hZ2VyL1NpZGVCYXIudHN4PzQzODkiXSwibmFtZXMiOlsiU2lkQmFyQ29udGFpbmVyIiwic3R5bGVkIiwiZGl2Iiwic2lkZUJhckJhY2tncm91bmRDb2xvciIsInNpZGVCYXJGb250Q29sb3IiLCJTdG9yZVNlbGVjdCIsInNlbGVjdCIsIk1lbnVJdGVtIiwiY2hvb3NlZW4iLCJjc3MiLCJNZW51Q29udGFpbmVyIiwiY2hpbGRyZW4iLCJMaW5lIiwiUHJvZmlsZSIsImNsaWNrTG9nb3V0IiwiYWxlcnQiLCJjbGlja0NoYW5nZU1hcmtldCIsImV2ZW50IiwidmFsdWUiLCJ0YXJnZXQiLCJTaWRCYXIiLCJ1c2VTdGF0ZSIsIm1lbnUiLCJzZXRNZW51Iiwib25NZW51Q2xpY2siLCJ1c2VDYWxsYmFjayJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBO0FBS0E7QUFFQSxJQUFNQSxlQUFlLEdBQUdDLHlEQUFNLENBQUNDLEdBQVY7QUFBQTtBQUFBO0FBQUEsaUlBQ0NDLHFFQURELEVBRVZDLCtEQUZVLENBQXJCO0tBQU1KLGU7QUFhTixJQUFNSyxXQUFXLEdBQUdKLHlEQUFNLENBQUNLLE1BQVY7QUFBQTtBQUFBO0FBQUEseUZBQWpCO01BQU1ELFc7QUFTTixJQUFNRSxRQUFRLEdBQUdOLHlEQUFNLENBQUNDLEdBQVY7QUFBQTtBQUFBO0FBQUEsd0dBT1Y7QUFBQSxNQUFHTSxRQUFILFFBQUdBLFFBQUg7QUFBQSxTQUNBQSxRQUFRLEdBQ0pDLDZEQURJLDJDQUlKQSw2REFKSSxrREFEUjtBQUFBLENBUFUsQ0FBZDtNQUFNRixROztBQWtCTixJQUFNRyxhQUF1QixHQUFHLFNBQTFCQSxhQUEwQixRQUFrQjtBQUFBLE1BQWZDLFFBQWUsU0FBZkEsUUFBZTtBQUNoRCxzQkFDRTtBQUFBLDRCQUNFLHFFQUFDLElBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGLGVBRUU7QUFBQSxn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QUFBQTtBQUFBO0FBQUEsYUF4Q0Y7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUF1REQsQ0E5REQ7O0dBQU1KLE07O01BQUFBLE07QUFnRVNBLHFFQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9tYW5hZ2VyL1NpZGVCYXIudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hhbmdlRXZlbnQsIHVzZUNhbGxiYWNrLCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBzdHlsZWQsIHsgY3NzIH0gZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuXG5pbXBvcnQge1xuICBwcmltYXJ5Q29sb3IsXG4gIHNpZGVCYXJCYWNrZ3JvdW5kQ29sb3IsXG4gIHNpZGVCYXJGb250Q29sb3IsXG59IGZyb20gJy4uLy4uL3N0eWxlcy9jb2xvcnMnO1xuaW1wb3J0IEJ1dHRvbiBmcm9tICcuLi9CdXR0b24nO1xuXG5jb25zdCBTaWRCYXJDb250YWluZXIgPSBzdHlsZWQuZGl2YFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAke3NpZGVCYXJCYWNrZ3JvdW5kQ29sb3J9O1xuICBjb2xvcjogJHtzaWRlQmFyRm9udENvbG9yfTtcbiAgbWluLWhlaWdodDogMTAwdmg7XG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcblxuICBwIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDFyZW07XG4gICAgbWFyZ2luOiAxcmVtIGF1dG87XG4gICAgY29sb3I6ICNkOWUxZTg7XG4gIH1cbmA7XG5cbmNvbnN0IFN0b3JlU2VsZWN0ID0gc3R5bGVkLnNlbGVjdGBcbiAgZGlzcGxheTogYmxvY2s7XG4gIGJvcmRlcjogMDtcbiAgYm9yZGVyLXJhZGl1czogMDtcbiAgcGFkZGluZzogMC41cmVtO1xuICB3aWR0aDogOTAlO1xuICBtYXJnaW46IDFyZW0gYXV0bztcbmA7XG5cbmNvbnN0IE1lbnVJdGVtID0gc3R5bGVkLmRpdjx7IGNob29zZWVuOiBib29sZWFuIH0+YFxuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJvcmRlci1sZWZ0OiA0cHggc29saWQgIzJiOTBkOTtcbiAgcGFkZGluZzogMXJlbSAycmVtO1xuICBjb2xvcjogI2ZmZjtcbiAgZm9udC13ZWlnaHQ6IDgwMDtcblxuICAkeyh7IGNob29zZWVuIH0pID0+XG4gICAgY2hvb3NlZW5cbiAgICAgID8gY3NzYFxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4wMSk7XG4gICAgICAgIGBcbiAgICAgIDogY3NzYFxuICAgICAgICAgIGJvcmRlci1sZWZ0LWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICAgICAgICBjb2xvcjogI2Q5ZTFlODtcbiAgICAgICAgYH07XG5gO1xuXG5jb25zdCBNZW51Q29udGFpbmVyOiBSZWFjdC5GQyA9ICh7IGNoaWxkcmVuIH0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPExpbmUgLz5cbiAgICAgIDxkaXY+e2NoaWxkcmVufTwvZGl2PlxuICAgIDwvPlxuICApO1xufTtcblxuY29uc3QgTGluZSA9IHN0eWxlZC5kaXZgXG4gIHdpZHRoOiA5MCU7XG4gIG1hcmdpbjogMXJlbSBhdXRvO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2Q5ZTFlODtcbmA7XG5cbmNvbnN0IFByb2ZpbGUgPSBzdHlsZWQuZGl2YFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG5cbiAgY2FudmFzIHtcbiAgICB3aWR0aDogODAlO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XG4gICAgbWFyZ2luOiAxcmVtIGF1dG87XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgfVxuYDtcblxuZnVuY3Rpb24gY2xpY2tMb2dvdXQoKSB7XG4gIGFsZXJ0KCfqt7jqsbQg7JWE7KeBIOq1rO2YhOyViOuQkOyWtOyaqScpO1xufVxuXG5mdW5jdGlvbiBjbGlja0NoYW5nZU1hcmtldChldmVudDogQ2hhbmdlRXZlbnQ8SFRNTFNlbGVjdEVsZW1lbnQ+KSB7XG4gIGNvbnN0IHsgdmFsdWUgfSA9IGV2ZW50LnRhcmdldDtcbiAgYWxlcnQoYOyVhOyngSDthY3siqTtirjrp4wg67CU64CM6rOgIOqwkuuTpOydgCDslYjrsJTqu7TsmqkgJHt2YWx1ZX1gKTtcbn1cblxuY29uc3QgU2lkQmFyOiBSZWFjdC5GQyA9ICgpID0+IHtcbiAgY29uc3QgW21lbnUsIHNldE1lbnVdID0gdXNlU3RhdGUoMSk7XG5cbiAgY29uc3Qgb25NZW51Q2xpY2sgPSB1c2VDYWxsYmFjaygobWVudSkgPT4ge1xuICAgIHNldE1lbnUobWVudSk7XG4gIH0sIFtdKTtcblxuICByZXR1cm4gKFxuICAgIDxTaWRCYXJDb250YWluZXI+XG4gICAgICA8UHJvZmlsZT5cbiAgICAgICAgPGNhbnZhcyB3aWR0aD17NTAwfSBoZWlnaHQ9ezUwMH0gLz5cbiAgICAgICAgPHA+7Zmp7Iq57ZiEPC9wPlxuICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9e2NsaWNrTG9nb3V0fT7roZzqt7jslYTsm4M8L0J1dHRvbj5cbiAgICAgIDwvUHJvZmlsZT5cblxuICAgICAgPE1lbnVDb250YWluZXI+XG4gICAgICAgIDxwPuyngOygkCDshKDtg508L3A+XG4gICAgICAgIDxTdG9yZVNlbGVjdCBvbkNoYW5nZT17Y2xpY2tDaGFuZ2VNYXJrZXR9PlxuICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCIxXCI+7KCE7LK0PC9vcHRpb24+XG4gICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjJcIj7sspzslYjsoJA8L29wdGlvbj5cbiAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiM1wiPuu2gOyCsOygkDwvb3B0aW9uPlxuICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCI0XCI+7Jio65287J24PC9vcHRpb24+XG4gICAgICAgIDwvU3RvcmVTZWxlY3Q+XG4gICAgICA8L01lbnVDb250YWluZXI+XG5cbiAgICAgIDxNZW51Q29udGFpbmVyPlxuICAgICAgICA8cD7tjJDrp6QgLyDrp6TsnoU8L3A+XG4gICAgICAgIDxNZW51SXRlbSBjaG9vc2Vlbj17bWVudSA9PT0gMX0gb25DbGljaz17KCkgPT4gb25NZW51Q2xpY2soMSl9PlxuICAgICAgICAgIOyalOyyre2ZleyduFxuICAgICAgICA8L01lbnVJdGVtPlxuICAgICAgICA8TWVudUl0ZW0gY2hvb3NlZW49e21lbnUgPT09IDJ9IG9uQ2xpY2s9eygpID0+IG9uTWVudUNsaWNrKDIpfT5cbiAgICAgICAgICDthrXqs4RcbiAgICAgICAgPC9NZW51SXRlbT5cbiAgICAgIDwvTWVudUNvbnRhaW5lcj5cblxuICAgICAgPE1lbnVDb250YWluZXI+XG4gICAgICAgIDxwPuq4sO2DgDwvcD5cbiAgICAgICAgPE1lbnVJdGVtIGNob29zZWVuPXttZW51ID09PSAzfSBvbkNsaWNrPXsoKSA9PiBvbk1lbnVDbGljaygzKX0+XG4gICAgICAgICAg66mU64m0MVxuICAgICAgICA8L01lbnVJdGVtPlxuICAgICAgICA8TWVudUl0ZW0gY2hvb3NlZW49e21lbnUgPT09IDR9IG9uQ2xpY2s9eygpID0+IG9uTWVudUNsaWNrKDQpfT5cbiAgICAgICAgICDrqZTribQyXG4gICAgICAgIDwvTWVudUl0ZW0+XG4gICAgICAgIDxNZW51SXRlbSBjaG9vc2Vlbj17bWVudSA9PT0gNX0gb25DbGljaz17KCkgPT4gb25NZW51Q2xpY2soNSl9PlxuICAgICAgICAgIOuplOuJtDNcbiAgICAgICAgPC9NZW51SXRlbT5cbiAgICAgIDwvTWVudUNvbnRhaW5lcj5cblxuICAgICAgPE1lbnVDb250YWluZXI+XG4gICAgICAgIDxwPuq4sO2DgDwvcD5cbiAgICAgICAgPE1lbnVJdGVtIGNob29zZWVuPXttZW51ID09PSA2fSBvbkNsaWNrPXsoKSA9PiBvbk1lbnVDbGljayg2KX0+XG4gICAgICAgICAg66mU64m0MVxuICAgICAgICA8L01lbnVJdGVtPlxuICAgICAgICA8TWVudUl0ZW0gY2hvb3NlZW49e21lbnUgPT09IDd9IG9uQ2xpY2s9eygpID0+IG9uTWVudUNsaWNrKDcpfT5cbiAgICAgICAgICDrqZTribQyXG4gICAgICAgIDwvTWVudUl0ZW0+XG4gICAgICAgIDxNZW51SXRlbSBjaG9vc2Vlbj17bWVudSA9PT0gOH0gb25DbGljaz17KCkgPT4gb25NZW51Q2xpY2soOCl9PlxuICAgICAgICAgIOuplOuJtDNcbiAgICAgICAgPC9NZW51SXRlbT5cbiAgICAgIDwvTWVudUNvbnRhaW5lcj5cbiAgICA8L1NpZEJhckNvbnRhaW5lcj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFNpZEJhcjtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/manager/SideBar.tsx\n");

/***/ })

})