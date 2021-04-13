webpackHotUpdate_N_E("pages/manager",{

/***/ "./components/manager/SideBar.tsx":
/*!****************************************!*\
  !*** ./components/manager/SideBar.tsx ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/dist/client/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _styles_colors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../styles/colors */ \"./styles/colors.ts\");\n/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Button */ \"./components/Button.tsx\");\n\n\n\nvar _jsxFileName = \"/Users/seung-hyunhwang/Dropbox/git/web/components/manager/SideBar.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\nvar SidBarContainer = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].div.withConfig({\n  displayName: \"SideBar__SidBarContainer\",\n  componentId: \"y76ugi-0\"\n})([\"padding:1rem;background-color:\", \";color:\", \";min-height:100vh;overflow-y:scroll;p{padding-left:1rem;margin:1rem auto;color:#fff;}\"], _styles_colors__WEBPACK_IMPORTED_MODULE_4__[\"sideBarBackgroundColor\"], _styles_colors__WEBPACK_IMPORTED_MODULE_4__[\"sideBarFontColor\"]);\n_c = SidBarContainer;\nvar StoreSelect = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].select.withConfig({\n  displayName: \"SideBar__StoreSelect\",\n  componentId: \"y76ugi-1\"\n})([\"display:block;border:0;border-radius:0;padding:0.5rem;width:90%;margin:1rem auto;\"]);\n_c2 = StoreSelect;\nvar MenuItem = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].div.withConfig({\n  displayName: \"SideBar__MenuItem\",\n  componentId: \"y76ugi-2\"\n})([\"cursor:pointer;border-left:4px solid #2b90d9;padding:1rem 2rem;color:#fff;\", \";\"], function (_ref) {\n  var chooseen = _ref.chooseen;\n  return chooseen ? Object(styled_components__WEBPACK_IMPORTED_MODULE_3__[\"css\"])([\"font-weight:800;background-color:rgba(0,0,0,0.04);\"]) : Object(styled_components__WEBPACK_IMPORTED_MODULE_3__[\"css\"])([\"border-left-color:transparent;color:#d9e1e8;\"]);\n});\n_c3 = MenuItem;\n\nvar MenuContainer = function MenuContainer(_ref2) {\n  var children = _ref2.children,\n      title = _ref2.title;\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(Line, {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 60,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n        children: title\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 62,\n        columnNumber: 9\n      }, _this), children]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 61,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true);\n};\n\n_c4 = MenuContainer;\nvar Line = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].div.withConfig({\n  displayName: \"SideBar__Line\",\n  componentId: \"y76ugi-3\"\n})([\"width:90%;margin:1rem auto;border-bottom:1px solid #d9e1e8;\"]);\n_c5 = Line;\nvar Profile = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].div.withConfig({\n  displayName: \"SideBar__Profile\",\n  componentId: \"y76ugi-4\"\n})([\"text-align:center;img{width:80%;height:auto;border-radius:100%;margin:1rem auto;background-color:#fff;}\"]);\n_c6 = Profile;\n\nfunction clickLogout() {\n  alert('그건 아직 구현안됐어용');\n}\n\nfunction clickChangeMarket(event) {\n  var value = event.target.value;\n  alert(\"\\uC544\\uC9C1 \\uD14D\\uC2A4\\uD2B8\\uB9CC \\uBC14\\uB00C\\uACE0 \\uAC12\\uB4E4\\uC740 \\uC548\\uBC14\\uAEF4\\uC6A9 \".concat(value));\n}\n\nvar SidBar = function SidBar() {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(1),\n      menu = _useState[0],\n      setMenu = _useState[1];\n\n  var onMenuClick = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useCallback\"])(function (menu) {\n    setMenu(menu);\n  }, []);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(SidBarContainer, {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(Profile, {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n        src: '/images/user.png',\n        width: 500,\n        height: 500\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 106,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n        children: \"\\uD669\\uC2B9\\uD604\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 107,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_Button__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n        onClick: clickLogout,\n        children: \"\\uB85C\\uADF8\\uC544\\uC6C3\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 108,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 105,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(MenuContainer, {\n      title: \"\\uC9C0\\uC810 \\uC120\\uD0DD\",\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(StoreSelect, {\n        onChange: clickChangeMarket,\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"option\", {\n          value: \"1\",\n          children: \"\\uC804\\uCCB4\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 113,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"option\", {\n          value: \"2\",\n          children: \"\\uCC9C\\uC548\\uC810\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 114,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"option\", {\n          value: \"3\",\n          children: \"\\uBD80\\uC0B0\\uC810\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 115,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"option\", {\n          value: \"4\",\n          children: \"\\uC628\\uB77C\\uC778\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 116,\n          columnNumber: 11\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 112,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 111,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(MenuContainer, {\n      title: \"\\uD310\\uB9E4 / \\uB9E4\\uC785\",\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(MenuItem, {\n        chooseen: menu === 1,\n        onClick: function onClick() {\n          onMenuClick(1), next_router__WEBPACK_IMPORTED_MODULE_1___default.a.push('/manager/request');\n        },\n        children: \"\\uC694\\uCCAD\\uD655\\uC778\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 121,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(MenuItem, {\n        chooseen: menu === 2,\n        onClick: function onClick() {\n          return onMenuClick(2);\n        },\n        children: \"\\uD1B5\\uACC4\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 129,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 120,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(MenuContainer, {\n      title: \"\\uAE30\\uD0C0\",\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(MenuItem, {\n        chooseen: menu === 3,\n        onClick: function onClick() {\n          return onMenuClick(3);\n        },\n        children: \"\\uBA54\\uB2741\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 135,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(MenuItem, {\n        chooseen: menu === 4,\n        onClick: function onClick() {\n          return onMenuClick(4);\n        },\n        children: \"\\uBA54\\uB2742\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 138,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(MenuItem, {\n        chooseen: menu === 5,\n        onClick: function onClick() {\n          return onMenuClick(5);\n        },\n        children: \"\\uBA54\\uB2743\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 141,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 134,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(MenuContainer, {\n      title: \"\\uAE30\\uD0C0\",\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(MenuItem, {\n        chooseen: menu === 6,\n        onClick: function onClick() {\n          return onMenuClick(6);\n        },\n        children: \"\\uBA54\\uB2741\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 147,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(MenuItem, {\n        chooseen: menu === 7,\n        onClick: function onClick() {\n          return onMenuClick(7);\n        },\n        children: \"\\uBA54\\uB2742\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 150,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(MenuItem, {\n        chooseen: menu === 8,\n        onClick: function onClick() {\n          return onMenuClick(8);\n        },\n        children: \"\\uBA54\\uB2743\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 153,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 146,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 104,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(SidBar, \"m8FDmCaZcqDQuadQX/8ZDTIT9k4=\");\n\n_c7 = SidBar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (SidBar);\n\nvar _c, _c2, _c3, _c4, _c5, _c6, _c7;\n\n$RefreshReg$(_c, \"SidBarContainer\");\n$RefreshReg$(_c2, \"StoreSelect\");\n$RefreshReg$(_c3, \"MenuItem\");\n$RefreshReg$(_c4, \"MenuContainer\");\n$RefreshReg$(_c5, \"Line\");\n$RefreshReg$(_c6, \"Profile\");\n$RefreshReg$(_c7, \"SidBar\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9tYW5hZ2VyL1NpZGVCYXIudHN4PzQzODkiXSwibmFtZXMiOlsiU2lkQmFyQ29udGFpbmVyIiwic3R5bGVkIiwiZGl2Iiwic2lkZUJhckJhY2tncm91bmRDb2xvciIsInNpZGVCYXJGb250Q29sb3IiLCJTdG9yZVNlbGVjdCIsInNlbGVjdCIsIk1lbnVJdGVtIiwiY2hvb3NlZW4iLCJjc3MiLCJNZW51Q29udGFpbmVyIiwiY2hpbGRyZW4iLCJ0aXRsZSIsIkxpbmUiLCJQcm9maWxlIiwiY2xpY2tMb2dvdXQiLCJhbGVydCIsImNsaWNrQ2hhbmdlTWFya2V0IiwiZXZlbnQiLCJ2YWx1ZSIsInRhcmdldCIsIlNpZEJhciIsInVzZVN0YXRlIiwibWVudSIsInNldE1lbnUiLCJvbk1lbnVDbGljayIsInVzZUNhbGxiYWNrIiwiUm91dGVyIiwicHVzaCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRUEsSUFBTUEsZUFBZSxHQUFHQyx5REFBTSxDQUFDQyxHQUFWO0FBQUE7QUFBQTtBQUFBLDJJQUVDQyxxRUFGRCxFQUdWQywrREFIVSxDQUFyQjtLQUFNSixlO0FBY04sSUFBTUssV0FBVyxHQUFHSix5REFBTSxDQUFDSyxNQUFWO0FBQUE7QUFBQTtBQUFBLHlGQUFqQjtNQUFNRCxXO0FBU04sSUFBTUUsUUFBUSxHQUFHTix5REFBTSxDQUFDQyxHQUFWO0FBQUE7QUFBQTtBQUFBLHdGQU1WO0FBQUEsTUFBR00sUUFBSCxRQUFHQSxRQUFIO0FBQUEsU0FDQUEsUUFBUSxHQUNKQyw2REFESSwyREFLSkEsNkRBTEksa0RBRFI7QUFBQSxDQU5VLENBQWQ7TUFBTUYsUTs7QUFzQk4sSUFBTUcsYUFBMkMsR0FBRyxTQUE5Q0EsYUFBOEMsUUFHMUI7QUFBQSxNQUZ4QkMsUUFFd0IsU0FGeEJBLFFBRXdCO0FBQUEsTUFEeEJDLEtBQ3dCLFNBRHhCQSxLQUN3QjtBQUN4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QyxlQUFPLEVBQUU7QUFBQSxpQkFBTUUsV0FBVyxDQUFDLENBQUQsQ0FBakI7QUFBQSxTQUF6QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQVBGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQTFDRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQXdERCxDQS9ERDs7R0FBTUosTTs7TUFBQUEsTTtBQWlFU0EscUVBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL21hbmFnZXIvU2lkZUJhci50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUm91dGVyIGZyb20gJ25leHQvcm91dGVyJztcblxuaW1wb3J0IHsgQ2hhbmdlRXZlbnQsIFByb3BzV2l0aENoaWxkcmVuLCB1c2VDYWxsYmFjaywgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgc3R5bGVkLCB7IGNzcyB9IGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcblxuaW1wb3J0IHsgc2lkZUJhckJhY2tncm91bmRDb2xvciwgc2lkZUJhckZvbnRDb2xvciB9IGZyb20gJy4uLy4uL3N0eWxlcy9jb2xvcnMnO1xuaW1wb3J0IEJ1dHRvbiBmcm9tICcuLi9CdXR0b24nO1xuXG5jb25zdCBTaWRCYXJDb250YWluZXIgPSBzdHlsZWQuZGl2YFxuICBwYWRkaW5nOiAxcmVtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAke3NpZGVCYXJCYWNrZ3JvdW5kQ29sb3J9O1xuICBjb2xvcjogJHtzaWRlQmFyRm9udENvbG9yfTtcbiAgbWluLWhlaWdodDogMTAwdmg7XG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcblxuICBwIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDFyZW07XG4gICAgbWFyZ2luOiAxcmVtIGF1dG87XG4gICAgY29sb3I6ICNmZmY7XG4gIH1cbmA7XG5cbmNvbnN0IFN0b3JlU2VsZWN0ID0gc3R5bGVkLnNlbGVjdGBcbiAgZGlzcGxheTogYmxvY2s7XG4gIGJvcmRlcjogMDtcbiAgYm9yZGVyLXJhZGl1czogMDtcbiAgcGFkZGluZzogMC41cmVtO1xuICB3aWR0aDogOTAlO1xuICBtYXJnaW46IDFyZW0gYXV0bztcbmA7XG5cbmNvbnN0IE1lbnVJdGVtID0gc3R5bGVkLmRpdjx7IGNob29zZWVuOiBib29sZWFuIH0+YFxuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJvcmRlci1sZWZ0OiA0cHggc29saWQgIzJiOTBkOTtcbiAgcGFkZGluZzogMXJlbSAycmVtO1xuICBjb2xvcjogI2ZmZjtcblxuICAkeyh7IGNob29zZWVuIH0pID0+XG4gICAgY2hvb3NlZW5cbiAgICAgID8gY3NzYFxuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA4MDA7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjA0KTtcbiAgICAgICAgYFxuICAgICAgOiBjc3NgXG4gICAgICAgICAgYm9yZGVyLWxlZnQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgICAgICAgIGNvbG9yOiAjZDllMWU4O1xuICAgICAgICBgfTtcbmA7XG5cbnR5cGUgTWVudUNvbnRhaW5lclByb3BzID0gUHJvcHNXaXRoQ2hpbGRyZW48e1xuICB0aXRsZTogc3RyaW5nO1xufT47XG5cbmNvbnN0IE1lbnVDb250YWluZXI6IFJlYWN0LkZDPE1lbnVDb250YWluZXJQcm9wcz4gPSAoe1xuICBjaGlsZHJlbixcbiAgdGl0bGUsXG59OiBNZW51Q29udGFpbmVyUHJvcHMpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPExpbmUgLz5cbiAgICAgIDxkaXY+XG4gICAgICAgIDxwPnt0aXRsZX08L3A+XG4gICAgICAgIHtjaGlsZHJlbn1cbiAgICAgIDwvZGl2PlxuICAgIDwvPlxuICApO1xufTtcblxuY29uc3QgTGluZSA9IHN0eWxlZC5kaXZgXG4gIHdpZHRoOiA5MCU7XG4gIG1hcmdpbjogMXJlbSBhdXRvO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2Q5ZTFlODtcbmA7XG5cbmNvbnN0IFByb2ZpbGUgPSBzdHlsZWQuZGl2YFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG5cbiAgaW1nIHtcbiAgICB3aWR0aDogODAlO1xuICAgIGhlaWdodDogYXV0bztcbiAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xuICAgIG1hcmdpbjogMXJlbSBhdXRvO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIH1cbmA7XG5cbmZ1bmN0aW9uIGNsaWNrTG9nb3V0KCkge1xuICBhbGVydCgn6re46rG0IOyVhOyngSDqtaztmITslYjrkJDslrTsmqknKTtcbn1cblxuZnVuY3Rpb24gY2xpY2tDaGFuZ2VNYXJrZXQoZXZlbnQ6IENoYW5nZUV2ZW50PEhUTUxTZWxlY3RFbGVtZW50Pikge1xuICBjb25zdCB7IHZhbHVlIH0gPSBldmVudC50YXJnZXQ7XG4gIGFsZXJ0KGDslYTsp4Eg7YWN7Iqk7Yq466eMIOuwlOuAjOqzoCDqsJLrk6TsnYAg7JWI67CU6ru07JqpICR7dmFsdWV9YCk7XG59XG5cbmNvbnN0IFNpZEJhcjogUmVhY3QuRkMgPSAoKSA9PiB7XG4gIGNvbnN0IFttZW51LCBzZXRNZW51XSA9IHVzZVN0YXRlKDEpO1xuXG4gIGNvbnN0IG9uTWVudUNsaWNrID0gdXNlQ2FsbGJhY2soKG1lbnUpID0+IHtcbiAgICBzZXRNZW51KG1lbnUpO1xuICB9LCBbXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8U2lkQmFyQ29udGFpbmVyPlxuICAgICAgPFByb2ZpbGU+XG4gICAgICAgIDxpbWcgc3JjPXsnL2ltYWdlcy91c2VyLnBuZyd9IHdpZHRoPXs1MDB9IGhlaWdodD17NTAwfSAvPlxuICAgICAgICA8cD7tmansirntmIQ8L3A+XG4gICAgICAgIDxCdXR0b24gb25DbGljaz17Y2xpY2tMb2dvdXR9PuuhnOq3uOyVhOybgzwvQnV0dG9uPlxuICAgICAgPC9Qcm9maWxlPlxuXG4gICAgICA8TWVudUNvbnRhaW5lciB0aXRsZT1cIuyngOygkCDshKDtg51cIj5cbiAgICAgICAgPFN0b3JlU2VsZWN0IG9uQ2hhbmdlPXtjbGlja0NoYW5nZU1hcmtldH0+XG4gICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjFcIj7soITssrQ8L29wdGlvbj5cbiAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiMlwiPuyynOyViOygkDwvb3B0aW9uPlxuICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCIzXCI+67aA7IKw7KCQPC9vcHRpb24+XG4gICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjRcIj7smKjrnbzsnbg8L29wdGlvbj5cbiAgICAgICAgPC9TdG9yZVNlbGVjdD5cbiAgICAgIDwvTWVudUNvbnRhaW5lcj5cblxuICAgICAgPE1lbnVDb250YWluZXIgdGl0bGU9XCLtjJDrp6QgLyDrp6TsnoVcIj5cbiAgICAgICAgPE1lbnVJdGVtXG4gICAgICAgICAgY2hvb3NlZW49e21lbnUgPT09IDF9XG4gICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgb25NZW51Q2xpY2soMSksIFJvdXRlci5wdXNoKCcvbWFuYWdlci9yZXF1ZXN0Jyk7XG4gICAgICAgICAgfX1cbiAgICAgICAgPlxuICAgICAgICAgIOyalOyyre2ZleyduFxuICAgICAgICA8L01lbnVJdGVtPlxuICAgICAgICA8TWVudUl0ZW0gY2hvb3NlZW49e21lbnUgPT09IDJ9IG9uQ2xpY2s9eygpID0+IG9uTWVudUNsaWNrKDIpfT5cbiAgICAgICAgICDthrXqs4RcbiAgICAgICAgPC9NZW51SXRlbT5cbiAgICAgIDwvTWVudUNvbnRhaW5lcj5cblxuICAgICAgPE1lbnVDb250YWluZXIgdGl0bGU9XCLquLDtg4BcIj5cbiAgICAgICAgPE1lbnVJdGVtIGNob29zZWVuPXttZW51ID09PSAzfSBvbkNsaWNrPXsoKSA9PiBvbk1lbnVDbGljaygzKX0+XG4gICAgICAgICAg66mU64m0MVxuICAgICAgICA8L01lbnVJdGVtPlxuICAgICAgICA8TWVudUl0ZW0gY2hvb3NlZW49e21lbnUgPT09IDR9IG9uQ2xpY2s9eygpID0+IG9uTWVudUNsaWNrKDQpfT5cbiAgICAgICAgICDrqZTribQyXG4gICAgICAgIDwvTWVudUl0ZW0+XG4gICAgICAgIDxNZW51SXRlbSBjaG9vc2Vlbj17bWVudSA9PT0gNX0gb25DbGljaz17KCkgPT4gb25NZW51Q2xpY2soNSl9PlxuICAgICAgICAgIOuplOuJtDNcbiAgICAgICAgPC9NZW51SXRlbT5cbiAgICAgIDwvTWVudUNvbnRhaW5lcj5cblxuICAgICAgPE1lbnVDb250YWluZXIgdGl0bGU9XCLquLDtg4BcIj5cbiAgICAgICAgPE1lbnVJdGVtIGNob29zZWVuPXttZW51ID09PSA2fSBvbkNsaWNrPXsoKSA9PiBvbk1lbnVDbGljayg2KX0+XG4gICAgICAgICAg66mU64m0MVxuICAgICAgICA8L01lbnVJdGVtPlxuICAgICAgICA8TWVudUl0ZW0gY2hvb3NlZW49e21lbnUgPT09IDd9IG9uQ2xpY2s9eygpID0+IG9uTWVudUNsaWNrKDcpfT5cbiAgICAgICAgICDrqZTribQyXG4gICAgICAgIDwvTWVudUl0ZW0+XG4gICAgICAgIDxNZW51SXRlbSBjaG9vc2Vlbj17bWVudSA9PT0gOH0gb25DbGljaz17KCkgPT4gb25NZW51Q2xpY2soOCl9PlxuICAgICAgICAgIOuplOuJtDNcbiAgICAgICAgPC9NZW51SXRlbT5cbiAgICAgIDwvTWVudUNvbnRhaW5lcj5cbiAgICA8L1NpZEJhckNvbnRhaW5lcj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFNpZEJhcjtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/manager/SideBar.tsx\n");

/***/ })

})