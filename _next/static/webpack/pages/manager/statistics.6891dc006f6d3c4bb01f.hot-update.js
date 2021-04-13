webpackHotUpdate_N_E("pages/manager/statistics",{

/***/ "./components/manager/SideBar.tsx":
/*!****************************************!*\
  !*** ./components/manager/SideBar.tsx ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/dist/client/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _styles_colors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../styles/colors */ \"./styles/colors.ts\");\n/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Button */ \"./components/Button.tsx\");\n\n\n\nvar _jsxFileName = \"/Users/seung-hyunhwang/Dropbox/git/web/components/manager/SideBar.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\nvar SidBarContainer = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].div.withConfig({\n  displayName: \"SideBar__SidBarContainer\",\n  componentId: \"y76ugi-0\"\n})([\"padding:1rem;background-color:\", \";color:\", \";min-height:100vh;overflow-y:scroll;p{padding-left:1rem;margin:1rem auto;color:#fff;}\"], _styles_colors__WEBPACK_IMPORTED_MODULE_4__[\"sideBarBackgroundColor\"], _styles_colors__WEBPACK_IMPORTED_MODULE_4__[\"sideBarFontColor\"]);\n_c = SidBarContainer;\nvar StoreSelect = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].select.withConfig({\n  displayName: \"SideBar__StoreSelect\",\n  componentId: \"y76ugi-1\"\n})([\"display:block;border:0;border-radius:0;padding:0.5rem;width:90%;margin:1rem auto;\"]);\n_c2 = StoreSelect;\nvar MenuItem = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].div.withConfig({\n  displayName: \"SideBar__MenuItem\",\n  componentId: \"y76ugi-2\"\n})([\"cursor:pointer;border-left:4px solid #2b90d9;padding:1rem 2rem;color:#fff;\", \";\"], function (_ref) {\n  var chooseen = _ref.chooseen;\n  return chooseen ? Object(styled_components__WEBPACK_IMPORTED_MODULE_3__[\"css\"])([\"font-weight:800;background-color:rgba(0,0,0,0.04);\"]) : Object(styled_components__WEBPACK_IMPORTED_MODULE_3__[\"css\"])([\"border-left-color:transparent;color:#d9e1e8;\"]);\n});\n_c3 = MenuItem;\n\nvar MenuContainer = function MenuContainer(_ref2) {\n  var children = _ref2.children,\n      title = _ref2.title;\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(Line, {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 67,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n        children: title\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 69,\n        columnNumber: 9\n      }, _this), children]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 68,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true);\n};\n\n_c4 = MenuContainer;\nvar Line = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].div.withConfig({\n  displayName: \"SideBar__Line\",\n  componentId: \"y76ugi-3\"\n})([\"width:90%;margin:1rem auto;border-bottom:1px solid #d9e1e8;\"]);\n_c5 = Line;\nvar Profile = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].div.withConfig({\n  displayName: \"SideBar__Profile\",\n  componentId: \"y76ugi-4\"\n})([\"text-align:center;img{width:80%;height:auto;border-radius:100%;margin:1rem auto;background-color:#fff;}\"]);\n_c6 = Profile;\n\nfunction clickLogout() {\n  alert('그건 아직 구현안됐어용');\n}\n\nfunction clickChangeMarket(event) {\n  var value = event.target.value;\n  alert(\"\\uC544\\uC9C1 \\uD14D\\uC2A4\\uD2B8\\uB9CC \\uBC14\\uB00C\\uACE0 \\uAC12\\uB4E4\\uC740 \\uC548\\uBC14\\uAEF4\\uC6A9 \".concat(value));\n}\n\nvar SideBar = function SideBar() {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(),\n      menu = _useState[0],\n      setMenu = _useState[1];\n\n  var onMenuClick = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useCallback\"])(function (menu) {\n    setMenu(menu);\n  }, []);\n  Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useEffect\"])(function () {\n    console.log(next_router__WEBPACK_IMPORTED_MODULE_1___default.a.pathname);\n  }, []);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(SidBarContainer, {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(Profile, {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n        src: '/images/user.png',\n        width: 500,\n        height: 500\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 117,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n        children: \"\\uD669\\uC2B9\\uD604\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 118,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_Button__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n        onClick: clickLogout,\n        children: \"\\uB85C\\uADF8\\uC544\\uC6C3\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 119,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 116,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(MenuContainer, {\n      title: \"\\uC9C0\\uC810 \\uC120\\uD0DD\",\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(StoreSelect, {\n        onChange: clickChangeMarket,\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"option\", {\n          value: \"1\",\n          children: \"\\uC804\\uCCB4\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 124,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"option\", {\n          value: \"2\",\n          children: \"\\uCC9C\\uC548\\uC810\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 125,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"option\", {\n          value: \"3\",\n          children: \"\\uBD80\\uC0B0\\uC810\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 126,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"option\", {\n          value: \"4\",\n          children: \"\\uC628\\uB77C\\uC778\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 127,\n          columnNumber: 11\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 123,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 122,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(MenuContainer, {\n      title: \"\\uD310\\uB9E4 / \\uB9E4\\uC785\",\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(MenuItem, {\n        chooseen: menu === 1,\n        onClick: function onClick() {\n          onMenuClick(1);\n          next_router__WEBPACK_IMPORTED_MODULE_1___default.a.push('/manager/request');\n        },\n        children: \"\\uC694\\uCCAD\\uD655\\uC778\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 132,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(MenuItem, {\n        chooseen: menu === 2,\n        onClick: function onClick() {\n          onMenuClick(2);\n          next_router__WEBPACK_IMPORTED_MODULE_1___default.a.push('/manager/statistics');\n        },\n        children: \"\\uD1B5\\uACC4\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 141,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 131,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(MenuContainer, {\n      title: \"\\uAE30\\uD0C0\",\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(MenuItem, {\n        chooseen: menu === 3,\n        onClick: function onClick() {\n          return onMenuClick(3);\n        },\n        children: \"\\uBA54\\uB2741\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 153,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(MenuItem, {\n        chooseen: menu === 4,\n        onClick: function onClick() {\n          return onMenuClick(4);\n        },\n        children: \"\\uBA54\\uB2742\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 156,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(MenuItem, {\n        chooseen: menu === 5,\n        onClick: function onClick() {\n          return onMenuClick(5);\n        },\n        children: \"\\uBA54\\uB2743\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 159,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 152,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(MenuContainer, {\n      title: \"\\uAE30\\uD0C0\",\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(MenuItem, {\n        chooseen: menu === 6,\n        onClick: function onClick() {\n          return onMenuClick(6);\n        },\n        children: \"\\uBA54\\uB2741\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 165,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(MenuItem, {\n        chooseen: menu === 7,\n        onClick: function onClick() {\n          return onMenuClick(7);\n        },\n        children: \"\\uBA54\\uB2742\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 168,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(MenuItem, {\n        chooseen: menu === 8,\n        onClick: function onClick() {\n          return onMenuClick(8);\n        },\n        children: \"\\uBA54\\uB2743\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 171,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 164,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 115,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(SideBar, \"6PKNm33tsojFtNyhcvnFXTihuQA=\");\n\n_c7 = SideBar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (SideBar);\n\nvar _c, _c2, _c3, _c4, _c5, _c6, _c7;\n\n$RefreshReg$(_c, \"SidBarContainer\");\n$RefreshReg$(_c2, \"StoreSelect\");\n$RefreshReg$(_c3, \"MenuItem\");\n$RefreshReg$(_c4, \"MenuContainer\");\n$RefreshReg$(_c5, \"Line\");\n$RefreshReg$(_c6, \"Profile\");\n$RefreshReg$(_c7, \"SideBar\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9tYW5hZ2VyL1NpZGVCYXIudHN4PzQzODkiXSwibmFtZXMiOlsiU2lkQmFyQ29udGFpbmVyIiwic3R5bGVkIiwiZGl2Iiwic2lkZUJhckJhY2tncm91bmRDb2xvciIsInNpZGVCYXJGb250Q29sb3IiLCJTdG9yZVNlbGVjdCIsInNlbGVjdCIsIk1lbnVJdGVtIiwiY2hvb3NlZW4iLCJjc3MiLCJNZW51Q29udGFpbmVyIiwiY2hpbGRyZW4iLCJ0aXRsZSIsIkxpbmUiLCJQcm9maWxlIiwiY2xpY2tMb2dvdXQiLCJhbGVydCIsImNsaWNrQ2hhbmdlTWFya2V0IiwiZXZlbnQiLCJ2YWx1ZSIsInRhcmdldCIsIlNpZGVCYXIiLCJ1c2VTdGF0ZSIsIm1lbnUiLCJzZXRNZW51Iiwib25NZW51Q2xpY2siLCJ1c2VDYWxsYmFjayIsInVzZUVmZmVjdCIsImNvbnNvbGUiLCJsb2ciLCJSb3V0ZXIiLCJwYXRobmFtZSIsInB1c2giXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7QUFFQTtBQU9BO0FBRUE7QUFDQTtBQUVBLElBQU1BLGVBQWUsR0FBR0MseURBQU0sQ0FBQ0MsR0FBVjtBQUFBO0FBQUE7QUFBQSwySUFFQ0MscUVBRkQsRUFHVkMsK0RBSFUsQ0FBckI7S0FBTUosZTtBQWNOLElBQU1LLFdBQVcsR0FBR0oseURBQU0sQ0FBQ0ssTUFBVjtBQUFBO0FBQUE7QUFBQSx5RkFBakI7TUFBTUQsVztBQVNOLElBQU1FLFFBQVEsR0FBR04seURBQU0sQ0FBQ0MsR0FBVjtBQUFBO0FBQUE7QUFBQSx3RkFNVjtBQUFBLE1BQUdNLFFBQUgsUUFBR0EsUUFBSDtBQUFBLFNBQ0FBLFFBQVEsR0FDSkMsNkRBREksMkRBS0pBLDZEQUxJLGtEQURSO0FBQUEsQ0FOVSxDQUFkO01BQU1GLFE7O0FBc0JOLElBQU1HLGFBQTJDLEdBQUcsU0FBOUNBLGFBQThDLFFBRzFCO0FBQUEsTUFGeEJDLFFBRXdCLFNBRnhCQSxRQUV3QjtBQUFBLE1BRHhCQyxLQUN3QixTQUR4QkEsS0FDd0I7QUFDeEIsc0JBQ0U7QUFBQSw0QkFDRSxxRUFBQyxJQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERixlQUVFO0FBQUEsOEJBQ0U7QUFBQSxrQkFBSUE7QUFBSjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREYsRUFFR0QsUUFGSDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFGRjtBQUFBLGtCQURGO0FBU0QsQ0FiRDs7TUFBTUQsYTtBQWVOLElBQU1HLElBQUksR0FBR1oseURBQU0sQ0FBQ0MsR0FBVjtBQUFBO0FBQUE7QUFBQSxtRUFBVjtNQUFNVyxJO0FBTU4sSUFBTUMsT0FBTyxHQUFHYix5REFBTSxDQUFDQyxHQUFWO0FBQUE7QUFBQTtBQUFBLCtHQUFiO01BQU1ZLE87O0FBWU4sU0FBU0MsV0FBVCxHQUF1QjtBQUNyQkMsT0FBSyxDQUFDLGNBQUQsQ0FBTDtBQUNEOztBQUVELFNBQVNDLGlCQUFULENBQTJCQyxLQUEzQixFQUFrRTtBQUFBLE1BQ3hEQyxLQUR3RCxHQUM5Q0QsS0FBSyxDQUFDRSxNQUR3QyxDQUN4REQsS0FEd0Q7QUFFaEVILE9BQUssZ0hBQXlCRyxLQUF6QixFQUFMO0FBQ0Q7O0FBRUQsSUFBTUUsT0FBaUIsR0FBRyxTQUFwQkEsT0FBb0IsR0FBTTtBQUFBOztBQUFBLGtCQUNOQyxzREFBUSxFQURGO0FBQUEsTUFDdkJDLElBRHVCO0FBQUEsTUFDakJDLE9BRGlCOztBQUc5QixNQUFNQyxXQUFXLEdBQUdDLHlEQUFXLENBQUMsVUFBQ0gsSUFBRCxFQUFVO0FBQ3hDQyxXQUFPLENBQUNELElBQUQsQ0FBUDtBQUNELEdBRjhCLEVBRTVCLEVBRjRCLENBQS9CO0FBSUFJLHlEQUFTLENBQUMsWUFBTTtBQUNkQyxXQUFPLENBQUNDLEdBQVIsQ0FBWUMsa0RBQU0sQ0FBQ0MsUUFBbkI7QUFDRCxHQUZRLEVBRU4sRUFGTSxDQUFUO0FBSUEsc0JBQ0UscUVBQUMsZUFBRDtBQUFBLDRCQUNFLHFFQUFDLE9BQUQ7QUFBQSw4QkFDRTtBQUFLLFdBQUcsRUFBRSxrQkFBVjtBQUE4QixhQUFLLEVBQUUsR0FBckM7QUFBMEMsY0FBTSxFQUFFO0FBQWxEO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERixlQUVFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRkYsZUFHRSxxRUFBQywrQ0FBRDtBQUFRLGVBQU8sRUFBRWhCLFdBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBSEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREYsZUFPRSxxRUFBQyxhQUFEO0FBQWUsV0FBSyxFQUFDLDJCQUFyQjtBQUFBLDZCQUNFLHFFQUFDLFdBQUQ7QUFBYSxnQkFBUSxFQUFFRSxpQkFBdkI7QUFBQSxnQ0FDRTtBQUFRLGVBQUssRUFBQyxHQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURGLGVBRUU7QUFBUSxlQUFLLEVBQUMsR0FBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFGRixlQUdFO0FBQVEsZUFBSyxFQUFDLEdBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBSEYsZUFJRTtBQUFRLGVBQUssRUFBQyxHQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFQRixlQWdCRSxxRUFBQyxhQUFEO0FBQWUsV0FBSyxFQUFDLDZCQUFyQjtBQUFBLDhCQUNFLHFFQUFDLFFBQUQ7QUFDRSxnQkFBUSxFQUFFTSxJQUFJLEtBQUssQ0FEckI7QUFFRSxlQUFPLEVBQUUsbUJBQU07QUFDYkUscUJBQVcsQ0FBQyxDQUFELENBQVg7QUFDQUssNERBQU0sQ0FBQ0UsSUFBUCxDQUFZLGtCQUFaO0FBQ0QsU0FMSDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGLGVBVUUscUVBQUMsUUFBRDtBQUNFLGdCQUFRLEVBQUVULElBQUksS0FBSyxDQURyQjtBQUVFLGVBQU8sRUFBRSxtQkFBTTtBQUNiRSxxQkFBVyxDQUFDLENBQUQsQ0FBWDtBQUNBSyw0REFBTSxDQUFDRSxJQUFQLENBQVkscUJBQVo7QUFDRCxTQUxIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBVkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBaEJGLGVBcUNFLHFFQUFDLGFBQUQ7QUFBZSxXQUFLLEVBQUMsY0FBckI7QUFBQSw4QkFDRSxxRUFBQyxRQUFEO0FBQVUsZ0JBQVEsRUFBRVQsSUFBSSxLQUFLLENBQTdCO0FBQWdDLGVBQU8sRUFBRTtBQUFBLGlCQUFNRSxXQUFXLENBQUMsQ0FBRCxDQUFqQjtBQUFBLFNBQXpDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREYsZUFJRSxxRUFBQyxRQUFEO0FBQVUsZ0JBQVEsRUFBRUYsSUFBSSxLQUFLLENBQTdCO0FBQWdDLGVBQU8sRUFBRTtBQUFBLGlCQUFNRSxXQUFXLENBQUMsQ0FBRCxDQUFqQjtBQUFBLFNBQXpDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBSkYsZUFPRSxxRUFBQyxRQUFEO0FBQVUsZ0JBQVEsRUFBRUYsSUFBSSxLQUFLLENBQTdCO0FBQWdDLGVBQU8sRUFBRTtBQUFBLGlCQUFNRSxXQUFXLENBQUMsQ0FBRCxDQUFqQjtBQUFBLFNBQXpDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBUEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBckNGLGVBaURFLHFFQUFDLGFBQUQ7QUFBZSxXQUFLLEVBQUMsY0FBckI7QUFBQSw4QkFDRSxxRUFBQyxRQUFEO0FBQVUsZ0JBQVEsRUFBRUYsSUFBSSxLQUFLLENBQTdCO0FBQWdDLGVBQU8sRUFBRTtBQUFBLGlCQUFNRSxXQUFXLENBQUMsQ0FBRCxDQUFqQjtBQUFBLFNBQXpDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREYsZUFJRSxxRUFBQyxRQUFEO0FBQVUsZ0JBQVEsRUFBRUYsSUFBSSxLQUFLLENBQTdCO0FBQWdDLGVBQU8sRUFBRTtBQUFBLGlCQUFNRSxXQUFXLENBQUMsQ0FBRCxDQUFqQjtBQUFBLFNBQXpDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBSkYsZUFPRSxxRUFBQyxRQUFEO0FBQVUsZ0JBQVEsRUFBRUYsSUFBSSxLQUFLLENBQTdCO0FBQWdDLGVBQU8sRUFBRTtBQUFBLGlCQUFNRSxXQUFXLENBQUMsQ0FBRCxDQUFqQjtBQUFBLFNBQXpDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBUEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBakRGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBK0RELENBMUVEOztHQUFNSixPOztNQUFBQSxPO0FBNEVTQSxzRUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvbWFuYWdlci9TaWRlQmFyLnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5leHRQYWdlIH0gZnJvbSAnbmV4dCc7XG5pbXBvcnQgUm91dGVyIGZyb20gJ25leHQvcm91dGVyJztcblxuaW1wb3J0IHtcbiAgQ2hhbmdlRXZlbnQsXG4gIFByb3BzV2l0aENoaWxkcmVuLFxuICB1c2VDYWxsYmFjayxcbiAgdXNlRWZmZWN0LFxuICB1c2VTdGF0ZSxcbn0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHN0eWxlZCwgeyBjc3MgfSBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5cbmltcG9ydCB7IHNpZGVCYXJCYWNrZ3JvdW5kQ29sb3IsIHNpZGVCYXJGb250Q29sb3IgfSBmcm9tICcuLi8uLi9zdHlsZXMvY29sb3JzJztcbmltcG9ydCBCdXR0b24gZnJvbSAnLi4vQnV0dG9uJztcblxuY29uc3QgU2lkQmFyQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcbiAgcGFkZGluZzogMXJlbTtcbiAgYmFja2dyb3VuZC1jb2xvcjogJHtzaWRlQmFyQmFja2dyb3VuZENvbG9yfTtcbiAgY29sb3I6ICR7c2lkZUJhckZvbnRDb2xvcn07XG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xuICBvdmVyZmxvdy15OiBzY3JvbGw7XG5cbiAgcCB7XG4gICAgcGFkZGluZy1sZWZ0OiAxcmVtO1xuICAgIG1hcmdpbjogMXJlbSBhdXRvO1xuICAgIGNvbG9yOiAjZmZmO1xuICB9XG5gO1xuXG5jb25zdCBTdG9yZVNlbGVjdCA9IHN0eWxlZC5zZWxlY3RgXG4gIGRpc3BsYXk6IGJsb2NrO1xuICBib3JkZXI6IDA7XG4gIGJvcmRlci1yYWRpdXM6IDA7XG4gIHBhZGRpbmc6IDAuNXJlbTtcbiAgd2lkdGg6IDkwJTtcbiAgbWFyZ2luOiAxcmVtIGF1dG87XG5gO1xuXG5jb25zdCBNZW51SXRlbSA9IHN0eWxlZC5kaXY8eyBjaG9vc2VlbjogYm9vbGVhbiB9PmBcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBib3JkZXItbGVmdDogNHB4IHNvbGlkICMyYjkwZDk7XG4gIHBhZGRpbmc6IDFyZW0gMnJlbTtcbiAgY29sb3I6ICNmZmY7XG5cbiAgJHsoeyBjaG9vc2VlbiB9KSA9PlxuICAgIGNob29zZWVuXG4gICAgICA/IGNzc2BcbiAgICAgICAgICBmb250LXdlaWdodDogODAwO1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4wNCk7XG4gICAgICAgIGBcbiAgICAgIDogY3NzYFxuICAgICAgICAgIGJvcmRlci1sZWZ0LWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICAgICAgICBjb2xvcjogI2Q5ZTFlODtcbiAgICAgICAgYH07XG5gO1xuXG50eXBlIE1lbnVDb250YWluZXJQcm9wcyA9IFByb3BzV2l0aENoaWxkcmVuPHtcbiAgdGl0bGU6IHN0cmluZztcbn0+O1xuXG5jb25zdCBNZW51Q29udGFpbmVyOiBSZWFjdC5GQzxNZW51Q29udGFpbmVyUHJvcHM+ID0gKHtcbiAgY2hpbGRyZW4sXG4gIHRpdGxlLFxufTogTWVudUNvbnRhaW5lclByb3BzKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxMaW5lIC8+XG4gICAgICA8ZGl2PlxuICAgICAgICA8cD57dGl0bGV9PC9wPlxuICAgICAgICB7Y2hpbGRyZW59XG4gICAgICA8L2Rpdj5cbiAgICA8Lz5cbiAgKTtcbn07XG5cbmNvbnN0IExpbmUgPSBzdHlsZWQuZGl2YFxuICB3aWR0aDogOTAlO1xuICBtYXJnaW46IDFyZW0gYXV0bztcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkOWUxZTg7XG5gO1xuXG5jb25zdCBQcm9maWxlID0gc3R5bGVkLmRpdmBcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuXG4gIGltZyB7XG4gICAgd2lkdGg6IDgwJTtcbiAgICBoZWlnaHQ6IGF1dG87XG4gICAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgICBtYXJnaW46IDFyZW0gYXV0bztcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICB9XG5gO1xuXG5mdW5jdGlvbiBjbGlja0xvZ291dCgpIHtcbiAgYWxlcnQoJ+q3uOqxtCDslYTsp4Eg6rWs7ZiE7JWI65CQ7Ja07JqpJyk7XG59XG5cbmZ1bmN0aW9uIGNsaWNrQ2hhbmdlTWFya2V0KGV2ZW50OiBDaGFuZ2VFdmVudDxIVE1MU2VsZWN0RWxlbWVudD4pIHtcbiAgY29uc3QgeyB2YWx1ZSB9ID0gZXZlbnQudGFyZ2V0O1xuICBhbGVydChg7JWE7KeBIO2FjeyKpO2KuOunjCDrsJTrgIzqs6Ag6rCS65Ok7J2AIOyViOuwlOq7tOyaqSAke3ZhbHVlfWApO1xufVxuXG5jb25zdCBTaWRlQmFyOiBSZWFjdC5GQyA9ICgpID0+IHtcbiAgY29uc3QgW21lbnUsIHNldE1lbnVdID0gdXNlU3RhdGUoKTtcblxuICBjb25zdCBvbk1lbnVDbGljayA9IHVzZUNhbGxiYWNrKChtZW51KSA9PiB7XG4gICAgc2V0TWVudShtZW51KTtcbiAgfSwgW10pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc29sZS5sb2coUm91dGVyLnBhdGhuYW1lKTtcbiAgfSwgW10pO1xuXG4gIHJldHVybiAoXG4gICAgPFNpZEJhckNvbnRhaW5lcj5cbiAgICAgIDxQcm9maWxlPlxuICAgICAgICA8aW1nIHNyYz17Jy9pbWFnZXMvdXNlci5wbmcnfSB3aWR0aD17NTAwfSBoZWlnaHQ9ezUwMH0gLz5cbiAgICAgICAgPHA+7Zmp7Iq57ZiEPC9wPlxuICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9e2NsaWNrTG9nb3V0fT7roZzqt7jslYTsm4M8L0J1dHRvbj5cbiAgICAgIDwvUHJvZmlsZT5cblxuICAgICAgPE1lbnVDb250YWluZXIgdGl0bGU9XCLsp4DsoJAg7ISg7YOdXCI+XG4gICAgICAgIDxTdG9yZVNlbGVjdCBvbkNoYW5nZT17Y2xpY2tDaGFuZ2VNYXJrZXR9PlxuICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCIxXCI+7KCE7LK0PC9vcHRpb24+XG4gICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjJcIj7sspzslYjsoJA8L29wdGlvbj5cbiAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiM1wiPuu2gOyCsOygkDwvb3B0aW9uPlxuICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCI0XCI+7Jio65287J24PC9vcHRpb24+XG4gICAgICAgIDwvU3RvcmVTZWxlY3Q+XG4gICAgICA8L01lbnVDb250YWluZXI+XG5cbiAgICAgIDxNZW51Q29udGFpbmVyIHRpdGxlPVwi7YyQ66ekIC8g66ek7J6FXCI+XG4gICAgICAgIDxNZW51SXRlbVxuICAgICAgICAgIGNob29zZWVuPXttZW51ID09PSAxfVxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgIG9uTWVudUNsaWNrKDEpO1xuICAgICAgICAgICAgUm91dGVyLnB1c2goJy9tYW5hZ2VyL3JlcXVlc3QnKTtcbiAgICAgICAgICB9fVxuICAgICAgICA+XG4gICAgICAgICAg7JqU7LKt7ZmV7J24XG4gICAgICAgIDwvTWVudUl0ZW0+XG4gICAgICAgIDxNZW51SXRlbVxuICAgICAgICAgIGNob29zZWVuPXttZW51ID09PSAyfVxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgIG9uTWVudUNsaWNrKDIpO1xuICAgICAgICAgICAgUm91dGVyLnB1c2goJy9tYW5hZ2VyL3N0YXRpc3RpY3MnKTtcbiAgICAgICAgICB9fVxuICAgICAgICA+XG4gICAgICAgICAg7Ya16rOEXG4gICAgICAgIDwvTWVudUl0ZW0+XG4gICAgICA8L01lbnVDb250YWluZXI+XG5cbiAgICAgIDxNZW51Q29udGFpbmVyIHRpdGxlPVwi6riw7YOAXCI+XG4gICAgICAgIDxNZW51SXRlbSBjaG9vc2Vlbj17bWVudSA9PT0gM30gb25DbGljaz17KCkgPT4gb25NZW51Q2xpY2soMyl9PlxuICAgICAgICAgIOuplOuJtDFcbiAgICAgICAgPC9NZW51SXRlbT5cbiAgICAgICAgPE1lbnVJdGVtIGNob29zZWVuPXttZW51ID09PSA0fSBvbkNsaWNrPXsoKSA9PiBvbk1lbnVDbGljayg0KX0+XG4gICAgICAgICAg66mU64m0MlxuICAgICAgICA8L01lbnVJdGVtPlxuICAgICAgICA8TWVudUl0ZW0gY2hvb3NlZW49e21lbnUgPT09IDV9IG9uQ2xpY2s9eygpID0+IG9uTWVudUNsaWNrKDUpfT5cbiAgICAgICAgICDrqZTribQzXG4gICAgICAgIDwvTWVudUl0ZW0+XG4gICAgICA8L01lbnVDb250YWluZXI+XG5cbiAgICAgIDxNZW51Q29udGFpbmVyIHRpdGxlPVwi6riw7YOAXCI+XG4gICAgICAgIDxNZW51SXRlbSBjaG9vc2Vlbj17bWVudSA9PT0gNn0gb25DbGljaz17KCkgPT4gb25NZW51Q2xpY2soNil9PlxuICAgICAgICAgIOuplOuJtDFcbiAgICAgICAgPC9NZW51SXRlbT5cbiAgICAgICAgPE1lbnVJdGVtIGNob29zZWVuPXttZW51ID09PSA3fSBvbkNsaWNrPXsoKSA9PiBvbk1lbnVDbGljayg3KX0+XG4gICAgICAgICAg66mU64m0MlxuICAgICAgICA8L01lbnVJdGVtPlxuICAgICAgICA8TWVudUl0ZW0gY2hvb3NlZW49e21lbnUgPT09IDh9IG9uQ2xpY2s9eygpID0+IG9uTWVudUNsaWNrKDgpfT5cbiAgICAgICAgICDrqZTribQzXG4gICAgICAgIDwvTWVudUl0ZW0+XG4gICAgICA8L01lbnVDb250YWluZXI+XG4gICAgPC9TaWRCYXJDb250YWluZXI+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBTaWRlQmFyO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/manager/SideBar.tsx\n");

/***/ })

})