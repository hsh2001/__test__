webpackHotUpdate_N_E("pages/manager/statistics",{

/***/ "./components/manager/SideBar.tsx":
/*!****************************************!*\
  !*** ./components/manager/SideBar.tsx ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/dist/client/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _styles_colors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../styles/colors */ \"./styles/colors.ts\");\n/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Button */ \"./components/Button.tsx\");\n\n\n\nvar _jsxFileName = \"/Users/seung-hyunhwang/Dropbox/git/web/components/manager/SideBar.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\nvar SidBarContainer = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].div.withConfig({\n  displayName: \"SideBar__SidBarContainer\",\n  componentId: \"y76ugi-0\"\n})([\"padding:1rem;background-color:\", \";color:\", \";min-height:100vh;overflow-y:scroll;p{padding-left:1rem;margin:1rem auto;color:#fff;}\"], _styles_colors__WEBPACK_IMPORTED_MODULE_4__[\"sideBarBackgroundColor\"], _styles_colors__WEBPACK_IMPORTED_MODULE_4__[\"sideBarFontColor\"]);\n_c = SidBarContainer;\nvar StoreSelect = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].select.withConfig({\n  displayName: \"SideBar__StoreSelect\",\n  componentId: \"y76ugi-1\"\n})([\"display:block;border:0;border-radius:0;padding:0.5rem;width:90%;margin:1rem auto;\"]);\n_c2 = StoreSelect;\nvar MenuItem = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].div.withConfig({\n  displayName: \"SideBar__MenuItem\",\n  componentId: \"y76ugi-2\"\n})([\"cursor:pointer;border-left:4px solid #2b90d9;padding:1rem 2rem;color:#fff;\", \";\"], function (_ref) {\n  var chooseen = _ref.chooseen;\n  return chooseen ? Object(styled_components__WEBPACK_IMPORTED_MODULE_3__[\"css\"])([\"font-weight:800;background-color:rgba(0,0,0,0.04);\"]) : Object(styled_components__WEBPACK_IMPORTED_MODULE_3__[\"css\"])([\"border-left-color:transparent;color:#d9e1e8;\"]);\n});\n_c3 = MenuItem;\n\nvar MenuContainer = function MenuContainer(_ref2) {\n  var children = _ref2.children,\n      title = _ref2.title;\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(Line, {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 67,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n        children: title\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 69,\n        columnNumber: 9\n      }, _this), children]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 68,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true);\n};\n\n_c4 = MenuContainer;\nvar Line = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].div.withConfig({\n  displayName: \"SideBar__Line\",\n  componentId: \"y76ugi-3\"\n})([\"width:90%;margin:1rem auto;border-bottom:1px solid #d9e1e8;\"]);\n_c5 = Line;\nvar Profile = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].div.withConfig({\n  displayName: \"SideBar__Profile\",\n  componentId: \"y76ugi-4\"\n})([\"text-align:center;img{width:80%;height:auto;border-radius:100%;margin:1rem auto;background-color:#fff;}\"]);\n_c6 = Profile;\n\nfunction clickLogout() {\n  alert('그건 아직 구현안됐어용');\n}\n\nfunction clickChangeMarket(event) {\n  var value = event.target.value;\n  alert(\"\\uC544\\uC9C1 \\uD14D\\uC2A4\\uD2B8\\uB9CC \\uBC14\\uB00C\\uACE0 \\uAC12\\uB4E4\\uC740 \\uC548\\uBC14\\uAEF4\\uC6A9 \".concat(value));\n}\n\nvar SideBar = function SideBar() {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(),\n      menu = _useState[0],\n      setMenu = _useState[1];\n\n  var onMenuClick = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useCallback\"])(function (menu) {\n    setMenu(menu);\n  }, []);\n  Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useEffect\"])(function () {\n    var menu = {\n      request: 1,\n      statistics: 2\n    }[next_router__WEBPACK_IMPORTED_MODULE_1___default.a.pathname.replace('/manager/', '')];\n\n    if (menu) {\n      setMenu();\n    }\n  }, []);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(SidBarContainer, {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(Profile, {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n        src: '/images/user.png',\n        width: 500,\n        height: 500\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 124,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n        children: \"\\uD669\\uC2B9\\uD604\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 125,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_Button__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n        onClick: clickLogout,\n        children: \"\\uB85C\\uADF8\\uC544\\uC6C3\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 126,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 123,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(MenuContainer, {\n      title: \"\\uC9C0\\uC810 \\uC120\\uD0DD\",\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(StoreSelect, {\n        onChange: clickChangeMarket,\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"option\", {\n          value: \"1\",\n          children: \"\\uC804\\uCCB4\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 131,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"option\", {\n          value: \"2\",\n          children: \"\\uCC9C\\uC548\\uC810\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 132,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"option\", {\n          value: \"3\",\n          children: \"\\uBD80\\uC0B0\\uC810\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 133,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"option\", {\n          value: \"4\",\n          children: \"\\uC628\\uB77C\\uC778\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 134,\n          columnNumber: 11\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 130,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 129,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(MenuContainer, {\n      title: \"\\uD310\\uB9E4 / \\uB9E4\\uC785\",\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(MenuItem, {\n        chooseen: menu === 1,\n        onClick: function onClick() {\n          onMenuClick(1);\n          next_router__WEBPACK_IMPORTED_MODULE_1___default.a.push('/manager/request');\n        },\n        children: \"\\uC694\\uCCAD\\uD655\\uC778\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 139,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(MenuItem, {\n        chooseen: menu === 2,\n        onClick: function onClick() {\n          onMenuClick(2);\n          next_router__WEBPACK_IMPORTED_MODULE_1___default.a.push('/manager/statistics');\n        },\n        children: \"\\uD1B5\\uACC4\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 148,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 138,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(MenuContainer, {\n      title: \"\\uAE30\\uD0C0\",\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(MenuItem, {\n        chooseen: menu === 3,\n        onClick: function onClick() {\n          return onMenuClick(3);\n        },\n        children: \"\\uBA54\\uB2741\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 160,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(MenuItem, {\n        chooseen: menu === 4,\n        onClick: function onClick() {\n          return onMenuClick(4);\n        },\n        children: \"\\uBA54\\uB2742\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 163,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(MenuItem, {\n        chooseen: menu === 5,\n        onClick: function onClick() {\n          return onMenuClick(5);\n        },\n        children: \"\\uBA54\\uB2743\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 166,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 159,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(MenuContainer, {\n      title: \"\\uAE30\\uD0C0\",\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(MenuItem, {\n        chooseen: menu === 6,\n        onClick: function onClick() {\n          return onMenuClick(6);\n        },\n        children: \"\\uBA54\\uB2741\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 172,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(MenuItem, {\n        chooseen: menu === 7,\n        onClick: function onClick() {\n          return onMenuClick(7);\n        },\n        children: \"\\uBA54\\uB2742\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 175,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(MenuItem, {\n        chooseen: menu === 8,\n        onClick: function onClick() {\n          return onMenuClick(8);\n        },\n        children: \"\\uBA54\\uB2743\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 178,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 171,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 122,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(SideBar, \"6PKNm33tsojFtNyhcvnFXTihuQA=\");\n\n_c7 = SideBar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (SideBar);\n\nvar _c, _c2, _c3, _c4, _c5, _c6, _c7;\n\n$RefreshReg$(_c, \"SidBarContainer\");\n$RefreshReg$(_c2, \"StoreSelect\");\n$RefreshReg$(_c3, \"MenuItem\");\n$RefreshReg$(_c4, \"MenuContainer\");\n$RefreshReg$(_c5, \"Line\");\n$RefreshReg$(_c6, \"Profile\");\n$RefreshReg$(_c7, \"SideBar\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9tYW5hZ2VyL1NpZGVCYXIudHN4PzQzODkiXSwibmFtZXMiOlsiU2lkQmFyQ29udGFpbmVyIiwic3R5bGVkIiwiZGl2Iiwic2lkZUJhckJhY2tncm91bmRDb2xvciIsInNpZGVCYXJGb250Q29sb3IiLCJTdG9yZVNlbGVjdCIsInNlbGVjdCIsIk1lbnVJdGVtIiwiY2hvb3NlZW4iLCJjc3MiLCJNZW51Q29udGFpbmVyIiwiY2hpbGRyZW4iLCJ0aXRsZSIsIkxpbmUiLCJQcm9maWxlIiwiY2xpY2tMb2dvdXQiLCJhbGVydCIsImNsaWNrQ2hhbmdlTWFya2V0IiwiZXZlbnQiLCJ2YWx1ZSIsInRhcmdldCIsIlNpZGVCYXIiLCJ1c2VTdGF0ZSIsIm1lbnUiLCJzZXRNZW51Iiwib25NZW51Q2xpY2siLCJ1c2VDYWxsYmFjayIsInVzZUVmZmVjdCIsInJlcXVlc3QiLCJzdGF0aXN0aWNzIiwiUm91dGVyIiwicGF0aG5hbWUiLCJyZXBsYWNlIiwicHVzaCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTtBQUVBO0FBT0E7QUFFQTtBQUNBO0FBRUEsSUFBTUEsZUFBZSxHQUFHQyx5REFBTSxDQUFDQyxHQUFWO0FBQUE7QUFBQTtBQUFBLDJJQUVDQyxxRUFGRCxFQUdWQywrREFIVSxDQUFyQjtLQUFNSixlO0FBY04sSUFBTUssV0FBVyxHQUFHSix5REFBTSxDQUFDSyxNQUFWO0FBQUE7QUFBQTtBQUFBLHlGQUFqQjtNQUFNRCxXO0FBU04sSUFBTUUsUUFBUSxHQUFHTix5REFBTSxDQUFDQyxHQUFWO0FBQUE7QUFBQTtBQUFBLHdGQU1WO0FBQUEsTUFBR00sUUFBSCxRQUFHQSxRQUFIO0FBQUEsU0FDQUEsUUFBUSxHQUNKQyw2REFESSwyREFLSkEsNkRBTEksa0RBRFI7QUFBQSxDQU5VLENBQWQ7TUFBTUYsUTs7QUFzQk4sSUFBTUcsYUFBMkMsR0FBRyxTQUE5Q0EsYUFBOEMsUUFHMUI7QUFBQSxNQUZ4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QUFnQyxlQUFPLEVBQUU7QUFBQSxpQkFBTUUsV0FBVyxDQUFDLENBQUQsQ0FBakI7QUFBQSxTQUF6QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGLGVBSUUscUVBQUMsUUFBRDtBQUFVLGdCQUFRLEVBQUVGLElBQUksS0FBSyxDQUE3QjtBQUFnQyxlQUFPLEVBQUU7QUFBQSxpQkFBTUUsV0FBVyxDQUFDLENBQUQsQ0FBakI7QUFBQSxTQUF6QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUpGLGVBT0UscUVBQUMsUUFBRDtBQUFVLGdCQUFRLEVBQUVGLElBQUksS0FBSyxDQUE3QjtBQUFnQyxlQUFPLEVBQUU7QUFBQSxpQkFBTUUsV0FBVyxDQUFDLENBQUQsQ0FBakI7QUFBQSxTQUF6QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQVBGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQWpERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQStERCxDQWpGRDs7R0FBTUosTzs7TUFBQUEsTztBQW1GU0Esc0VBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL21hbmFnZXIvU2lkZUJhci50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZXh0UGFnZSB9IGZyb20gJ25leHQnO1xuaW1wb3J0IFJvdXRlciBmcm9tICduZXh0L3JvdXRlcic7XG5cbmltcG9ydCB7XG4gIENoYW5nZUV2ZW50LFxuICBQcm9wc1dpdGhDaGlsZHJlbixcbiAgdXNlQ2FsbGJhY2ssXG4gIHVzZUVmZmVjdCxcbiAgdXNlU3RhdGUsXG59IGZyb20gJ3JlYWN0JztcbmltcG9ydCBzdHlsZWQsIHsgY3NzIH0gZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuXG5pbXBvcnQgeyBzaWRlQmFyQmFja2dyb3VuZENvbG9yLCBzaWRlQmFyRm9udENvbG9yIH0gZnJvbSAnLi4vLi4vc3R5bGVzL2NvbG9ycyc7XG5pbXBvcnQgQnV0dG9uIGZyb20gJy4uL0J1dHRvbic7XG5cbmNvbnN0IFNpZEJhckNvbnRhaW5lciA9IHN0eWxlZC5kaXZgXG4gIHBhZGRpbmc6IDFyZW07XG4gIGJhY2tncm91bmQtY29sb3I6ICR7c2lkZUJhckJhY2tncm91bmRDb2xvcn07XG4gIGNvbG9yOiAke3NpZGVCYXJGb250Q29sb3J9O1xuICBtaW4taGVpZ2h0OiAxMDB2aDtcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xuXG4gIHAge1xuICAgIHBhZGRpbmctbGVmdDogMXJlbTtcbiAgICBtYXJnaW46IDFyZW0gYXV0bztcbiAgICBjb2xvcjogI2ZmZjtcbiAgfVxuYDtcblxuY29uc3QgU3RvcmVTZWxlY3QgPSBzdHlsZWQuc2VsZWN0YFxuICBkaXNwbGF5OiBibG9jaztcbiAgYm9yZGVyOiAwO1xuICBib3JkZXItcmFkaXVzOiAwO1xuICBwYWRkaW5nOiAwLjVyZW07XG4gIHdpZHRoOiA5MCU7XG4gIG1hcmdpbjogMXJlbSBhdXRvO1xuYDtcblxuY29uc3QgTWVudUl0ZW0gPSBzdHlsZWQuZGl2PHsgY2hvb3NlZW46IGJvb2xlYW4gfT5gXG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgYm9yZGVyLWxlZnQ6IDRweCBzb2xpZCAjMmI5MGQ5O1xuICBwYWRkaW5nOiAxcmVtIDJyZW07XG4gIGNvbG9yOiAjZmZmO1xuXG4gICR7KHsgY2hvb3NlZW4gfSkgPT5cbiAgICBjaG9vc2VlblxuICAgICAgPyBjc3NgXG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMDQpO1xuICAgICAgICBgXG4gICAgICA6IGNzc2BcbiAgICAgICAgICBib3JkZXItbGVmdC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgICAgICAgY29sb3I6ICNkOWUxZTg7XG4gICAgICAgIGB9O1xuYDtcblxudHlwZSBNZW51Q29udGFpbmVyUHJvcHMgPSBQcm9wc1dpdGhDaGlsZHJlbjx7XG4gIHRpdGxlOiBzdHJpbmc7XG59PjtcblxuY29uc3QgTWVudUNvbnRhaW5lcjogUmVhY3QuRkM8TWVudUNvbnRhaW5lclByb3BzPiA9ICh7XG4gIGNoaWxkcmVuLFxuICB0aXRsZSxcbn06IE1lbnVDb250YWluZXJQcm9wcykgPT4ge1xuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8TGluZSAvPlxuICAgICAgPGRpdj5cbiAgICAgICAgPHA+e3RpdGxlfTwvcD5cbiAgICAgICAge2NoaWxkcmVufVxuICAgICAgPC9kaXY+XG4gICAgPC8+XG4gICk7XG59O1xuXG5jb25zdCBMaW5lID0gc3R5bGVkLmRpdmBcbiAgd2lkdGg6IDkwJTtcbiAgbWFyZ2luOiAxcmVtIGF1dG87XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZDllMWU4O1xuYDtcblxuY29uc3QgUHJvZmlsZSA9IHN0eWxlZC5kaXZgXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcblxuICBpbWcge1xuICAgIHdpZHRoOiA4MCU7XG4gICAgaGVpZ2h0OiBhdXRvO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XG4gICAgbWFyZ2luOiAxcmVtIGF1dG87XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgfVxuYDtcblxuZnVuY3Rpb24gY2xpY2tMb2dvdXQoKSB7XG4gIGFsZXJ0KCfqt7jqsbQg7JWE7KeBIOq1rO2YhOyViOuQkOyWtOyaqScpO1xufVxuXG5mdW5jdGlvbiBjbGlja0NoYW5nZU1hcmtldChldmVudDogQ2hhbmdlRXZlbnQ8SFRNTFNlbGVjdEVsZW1lbnQ+KSB7XG4gIGNvbnN0IHsgdmFsdWUgfSA9IGV2ZW50LnRhcmdldDtcbiAgYWxlcnQoYOyVhOyngSDthY3siqTtirjrp4wg67CU64CM6rOgIOqwkuuTpOydgCDslYjrsJTqu7TsmqkgJHt2YWx1ZX1gKTtcbn1cblxuY29uc3QgU2lkZUJhcjogUmVhY3QuRkMgPSAoKSA9PiB7XG4gIGNvbnN0IFttZW51LCBzZXRNZW51XSA9IHVzZVN0YXRlKCk7XG5cbiAgY29uc3Qgb25NZW51Q2xpY2sgPSB1c2VDYWxsYmFjaygobWVudSkgPT4ge1xuICAgIHNldE1lbnUobWVudSk7XG4gIH0sIFtdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IG1lbnUgPSB7XG4gICAgICByZXF1ZXN0OiAxLFxuICAgICAgc3RhdGlzdGljczogMixcbiAgICB9W1JvdXRlci5wYXRobmFtZS5yZXBsYWNlKCcvbWFuYWdlci8nLCAnJyldO1xuXG4gICAgaWYgKG1lbnUpIHtcbiAgICAgIHNldE1lbnUoKTtcbiAgICB9XG4gIH0sIFtdKTtcblxuICByZXR1cm4gKFxuICAgIDxTaWRCYXJDb250YWluZXI+XG4gICAgICA8UHJvZmlsZT5cbiAgICAgICAgPGltZyBzcmM9eycvaW1hZ2VzL3VzZXIucG5nJ30gd2lkdGg9ezUwMH0gaGVpZ2h0PXs1MDB9IC8+XG4gICAgICAgIDxwPu2ZqeyKue2YhDwvcD5cbiAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXtjbGlja0xvZ291dH0+66Gc6re47JWE7JuDPC9CdXR0b24+XG4gICAgICA8L1Byb2ZpbGU+XG5cbiAgICAgIDxNZW51Q29udGFpbmVyIHRpdGxlPVwi7KeA7KCQIOyEoO2DnVwiPlxuICAgICAgICA8U3RvcmVTZWxlY3Qgb25DaGFuZ2U9e2NsaWNrQ2hhbmdlTWFya2V0fT5cbiAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiMVwiPuyghOyytDwvb3B0aW9uPlxuICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCIyXCI+7LKc7JWI7KCQPC9vcHRpb24+XG4gICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjNcIj7rtoDsgrDsoJA8L29wdGlvbj5cbiAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiNFwiPuyYqOudvOyduDwvb3B0aW9uPlxuICAgICAgICA8L1N0b3JlU2VsZWN0PlxuICAgICAgPC9NZW51Q29udGFpbmVyPlxuXG4gICAgICA8TWVudUNvbnRhaW5lciB0aXRsZT1cIu2MkOunpCAvIOunpOyehVwiPlxuICAgICAgICA8TWVudUl0ZW1cbiAgICAgICAgICBjaG9vc2Vlbj17bWVudSA9PT0gMX1cbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICBvbk1lbnVDbGljaygxKTtcbiAgICAgICAgICAgIFJvdXRlci5wdXNoKCcvbWFuYWdlci9yZXF1ZXN0Jyk7XG4gICAgICAgICAgfX1cbiAgICAgICAgPlxuICAgICAgICAgIOyalOyyre2ZleyduFxuICAgICAgICA8L01lbnVJdGVtPlxuICAgICAgICA8TWVudUl0ZW1cbiAgICAgICAgICBjaG9vc2Vlbj17bWVudSA9PT0gMn1cbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICBvbk1lbnVDbGljaygyKTtcbiAgICAgICAgICAgIFJvdXRlci5wdXNoKCcvbWFuYWdlci9zdGF0aXN0aWNzJyk7XG4gICAgICAgICAgfX1cbiAgICAgICAgPlxuICAgICAgICAgIO2GteqzhFxuICAgICAgICA8L01lbnVJdGVtPlxuICAgICAgPC9NZW51Q29udGFpbmVyPlxuXG4gICAgICA8TWVudUNvbnRhaW5lciB0aXRsZT1cIuq4sO2DgFwiPlxuICAgICAgICA8TWVudUl0ZW0gY2hvb3NlZW49e21lbnUgPT09IDN9IG9uQ2xpY2s9eygpID0+IG9uTWVudUNsaWNrKDMpfT5cbiAgICAgICAgICDrqZTribQxXG4gICAgICAgIDwvTWVudUl0ZW0+XG4gICAgICAgIDxNZW51SXRlbSBjaG9vc2Vlbj17bWVudSA9PT0gNH0gb25DbGljaz17KCkgPT4gb25NZW51Q2xpY2soNCl9PlxuICAgICAgICAgIOuplOuJtDJcbiAgICAgICAgPC9NZW51SXRlbT5cbiAgICAgICAgPE1lbnVJdGVtIGNob29zZWVuPXttZW51ID09PSA1fSBvbkNsaWNrPXsoKSA9PiBvbk1lbnVDbGljayg1KX0+XG4gICAgICAgICAg66mU64m0M1xuICAgICAgICA8L01lbnVJdGVtPlxuICAgICAgPC9NZW51Q29udGFpbmVyPlxuXG4gICAgICA8TWVudUNvbnRhaW5lciB0aXRsZT1cIuq4sO2DgFwiPlxuICAgICAgICA8TWVudUl0ZW0gY2hvb3NlZW49e21lbnUgPT09IDZ9IG9uQ2xpY2s9eygpID0+IG9uTWVudUNsaWNrKDYpfT5cbiAgICAgICAgICDrqZTribQxXG4gICAgICAgIDwvTWVudUl0ZW0+XG4gICAgICAgIDxNZW51SXRlbSBjaG9vc2Vlbj17bWVudSA9PT0gN30gb25DbGljaz17KCkgPT4gb25NZW51Q2xpY2soNyl9PlxuICAgICAgICAgIOuplOuJtDJcbiAgICAgICAgPC9NZW51SXRlbT5cbiAgICAgICAgPE1lbnVJdGVtIGNob29zZWVuPXttZW51ID09PSA4fSBvbkNsaWNrPXsoKSA9PiBvbk1lbnVDbGljayg4KX0+XG4gICAgICAgICAg66mU64m0M1xuICAgICAgICA8L01lbnVJdGVtPlxuICAgICAgPC9NZW51Q29udGFpbmVyPlxuICAgIDwvU2lkQmFyQ29udGFpbmVyPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgU2lkZUJhcjtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/manager/SideBar.tsx\n");

/***/ })

})