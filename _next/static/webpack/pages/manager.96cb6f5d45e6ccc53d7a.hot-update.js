webpackHotUpdate_N_E("pages/manager",{

/***/ "./components/manager/SideBar.tsx":
/*!****************************************!*\
  !*** ./components/manager/SideBar.tsx ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _styles_colors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../styles/colors */ \"./styles/colors.ts\");\n/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Button */ \"./components/Button.tsx\");\n\n\nvar _jsxFileName = \"/Users/seung-hyunhwang/Dropbox/git/web/components/manager/SideBar.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\nvar SidBarContainer = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].div.withConfig({\n  displayName: \"SideBar__SidBarContainer\",\n  componentId: \"y76ugi-0\"\n})([\"background-color:\", \";color:#fff;min-height:100vh;text-align:center;\"], _styles_colors__WEBPACK_IMPORTED_MODULE_3__[\"sideBarBackgroundColor\"]);\n_c = SidBarContainer;\nvar StoreSelect = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].select.withConfig({\n  displayName: \"SideBar__StoreSelect\",\n  componentId: \"y76ugi-1\"\n})([\"display:block;border:0;border-radius:0;width:90%;margin:1rem auto;\"]);\n_c2 = StoreSelect;\nvar MenuItem = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].div.withConfig({\n  displayName: \"SideBar__MenuItem\",\n  componentId: \"y76ugi-2\"\n})([\"border-left:4px solid \", \";padding:1rem 2rem;color:#fff;font-weight:800;text-align:left;\", \";\"], _styles_colors__WEBPACK_IMPORTED_MODULE_3__[\"primaryColor\"], function (_ref) {\n  var chooseen = _ref.chooseen;\n  return chooseen ? Object(styled_components__WEBPACK_IMPORTED_MODULE_2__[\"css\"])([\"background-color:rgba(0,0,0,0.2);\"]) : Object(styled_components__WEBPACK_IMPORTED_MODULE_2__[\"css\"])([\"border-left-color:transparent;\"]);\n});\n_c3 = MenuItem;\nvar Line = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].div.withConfig({\n  displayName: \"SideBar__Line\",\n  componentId: \"y76ugi-3\"\n})([\"width:90%;margin:1rem auto;border-bottom:1px solid #777;\"]);\n_c4 = Line;\nvar Profile = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].div.withConfig({\n  displayName: \"SideBar__Profile\",\n  componentId: \"y76ugi-4\"\n})([\"text-align:center;canvas{width:80%;border-radius:100%;margin:1rem auto;background-color:#fff;}\"]);\n_c5 = Profile;\n\nfunction clickLogout() {\n  alert('그건 아직 구현안됐어용');\n}\n\nfunction clickChangeMarket(event) {\n  alert('아직 텍스트만 바뀌고 값들은 안바껴용');\n}\n\nvar SidBar = function SidBar() {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(1),\n      menu = _useState[0],\n      setMenu = _useState[1];\n\n  var onMenuClick = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useCallback\"])(function (menu) {\n    setMenu(menu);\n  }, []);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(SidBarContainer, {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(Profile, {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"canvas\", {\n        width: 500,\n        height: 500\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 74,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n        children: \"\\uD669\\uC2B9\\uD604\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 75,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_Button__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n        onClick: clickLogout,\n        children: \"\\uB85C\\uADF8\\uC544\\uC6C3\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 76,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 73,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(Line, {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 79,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n        children: \"\\uC9C0\\uC810 \\uC120\\uD0DD\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 82,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(StoreSelect, {\n        onChange: clickChangeMarket,\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"option\", {\n          value: \"\",\n          children: \"\\uC804\\uCCB4\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 84,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"option\", {\n          value: \"\",\n          children: \"\\uCC9C\\uC548\\uC810\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 85,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"option\", {\n          value: \"\",\n          children: \"\\uBD80\\uC0B0\\uC810\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 86,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"option\", {\n          value: \"\",\n          children: \"\\uC628\\uB77C\\uC778\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 87,\n          columnNumber: 11\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 83,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 81,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(Line, {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 91,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(MenuItem, {\n      chooseen: menu === 0,\n      onClick: function onClick() {\n        return onMenuClick(0);\n      },\n      children: \"\\uBA54\\uB274\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 93,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(MenuItem, {\n      chooseen: menu === 1,\n      onClick: function onClick() {\n        return onMenuClick(1);\n      },\n      children: \"\\uC694\\uCCAD\\uD655\\uC778\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 96,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(MenuItem, {\n      chooseen: menu === 2,\n      onClick: function onClick() {\n        return onMenuClick(2);\n      },\n      children: \"\\uC885\\uD569\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 99,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 72,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(SidBar, \"m8FDmCaZcqDQuadQX/8ZDTIT9k4=\");\n\n_c6 = SidBar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (SidBar);\n\nvar _c, _c2, _c3, _c4, _c5, _c6;\n\n$RefreshReg$(_c, \"SidBarContainer\");\n$RefreshReg$(_c2, \"StoreSelect\");\n$RefreshReg$(_c3, \"MenuItem\");\n$RefreshReg$(_c4, \"Line\");\n$RefreshReg$(_c5, \"Profile\");\n$RefreshReg$(_c6, \"SidBar\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9tYW5hZ2VyL1NpZGVCYXIudHN4PzQzODkiXSwibmFtZXMiOlsiU2lkQmFyQ29udGFpbmVyIiwic3R5bGVkIiwiZGl2Iiwic2lkZUJhckJhY2tncm91bmRDb2xvciIsIlN0b3JlU2VsZWN0Iiwic2VsZWN0IiwiTWVudUl0ZW0iLCJwcmltYXJ5Q29sb3IiLCJjaG9vc2VlbiIsImNzcyIsIkxpbmUiLCJQcm9maWxlIiwiY2xpY2tMb2dvdXQiLCJhbGVydCIsImNsaWNrQ2hhbmdlTWFya2V0IiwiZXZlbnQiLCJTaWRCYXIiLCJ1c2VTdGF0ZSIsIm1lbnUiLCJzZXRNZW51Iiwib25NZW51Q2xpY2siLCJ1c2VDYWxsYmFjayJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUVBLElBQU1BLGVBQWUsR0FBR0MseURBQU0sQ0FBQ0MsR0FBVjtBQUFBO0FBQUE7QUFBQSw2RUFDQ0MscUVBREQsQ0FBckI7S0FBTUgsZTtBQU9OLElBQU1JLFdBQVcsR0FBR0gseURBQU0sQ0FBQ0ksTUFBVjtBQUFBO0FBQUE7QUFBQSwwRUFBakI7TUFBTUQsVztBQVFOLElBQU1FLFFBQVEsR0FBR0wseURBQU0sQ0FBQ0MsR0FBVjtBQUFBO0FBQUE7QUFBQSxzR0FDYUssMkRBRGIsRUFPVjtBQUFBLE1BQUdDLFFBQUgsUUFBR0EsUUFBSDtBQUFBLFNBQ0FBLFFBQVEsR0FDSkMsNkRBREksMENBSUpBLDZEQUpJLG9DQURSO0FBQUEsQ0FQVSxDQUFkO01BQU1ILFE7QUFpQk4sSUFBTUksSUFBSSxHQUFHVCx5REFBTSxDQUFDQyxHQUFWO0FBQUE7QUFBQTtBQUFBLGdFQUFWO01BQU1RLEk7QUFNTixJQUFNQyxPQUFPLEdBQUdWLHlEQUFNLENBQUNDLEdBQVY7QUFBQTtBQUFBO0FBQUEsc0dBQWI7TUFBTVMsTzs7QUFXTixTQUFTQyxXQUFULEdBQXVCO0FBQ3JCQyxPQUFLLENBQUMsY0FBRCxDQUFMO0FBQ0Q7O0FBRUQsU0FBU0MsaUJBQVQsQ0FBMkJDLEtBQTNCLEVBQXlFO0FBQ3ZFRixPQUFLLENBQUMsc0JBQUQsQ0FBTDtBQUNEOztBQUVELElBQU1HLE1BQWdCLEdBQUcsU0FBbkJBLE1BQW1CLEdBQU07QUFBQTs7QUFBQSxrQkFDTEMsc0RBQVEsQ0FBQyxDQUFELENBREg7QUFBQSxNQUN0QkMsSUFEc0I7QUFBQSxNQUNoQkMsT0FEZ0I7O0FBRzdCLE1BQU1DLFdBQVcsR0FBR0MseURBQVcsQ0FBQyxVQUFDSCxJQUFELEVBQVU7QUFDeENDLFdBQU8sQ0FBQ0QsSUFBRCxDQUFQO0FBQ0QsR0FGOEIsRUFFNUIsRUFGNEIsQ0FBL0I7QUFJQSxzQkFDRSxxRUFBQyxlQUFEO0FBQUEsNEJBQ0UscUVBQUMsT0FBRDtBQUFBLDhCQUNFO0FBQVEsYUFBSyxFQUFFLEdBQWY7QUFBb0IsY0FBTSxFQUFFO0FBQTVCO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERixlQUVFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRkYsZUFHRSxxRUFBQywrQ0FBRDtBQUFRLGVBQU8sRUFBRU4sV0FBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFIRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERixlQU9FLHFFQUFDLElBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQVBGLGVBU0U7QUFBQSw4QkFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGLGVBRUUscUVBQUMsV0FBRDtBQUFhLGdCQUFRLEVBQUVFLGlCQUF2QjtBQUFBLGdDQUNFO0FBQVEsZUFBSyxFQUFDLEVBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREYsZUFFRTtBQUFRLGVBQUssRUFBQyxFQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUZGLGVBR0U7QUFBUSxlQUFLLEVBQUMsRUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFIRixlQUlFO0FBQVEsZUFBSyxFQUFDLEVBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBSkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBVEYsZUFtQkUscUVBQUMsSUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBbkJGLGVBcUJFLHFFQUFDLFFBQUQ7QUFBVSxjQUFRLEVBQUVJLElBQUksS0FBSyxDQUE3QjtBQUFnQyxhQUFPLEVBQUU7QUFBQSxlQUFNRSxXQUFXLENBQUMsQ0FBRCxDQUFqQjtBQUFBLE9BQXpDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBckJGLGVBd0JFLHFFQUFDLFFBQUQ7QUFBVSxjQUFRLEVBQUVGLElBQUksS0FBSyxDQUE3QjtBQUFnQyxhQUFPLEVBQUU7QUFBQSxlQUFNRSxXQUFXLENBQUMsQ0FBRCxDQUFqQjtBQUFBLE9BQXpDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBeEJGLGVBMkJFLHFFQUFDLFFBQUQ7QUFBVSxjQUFRLEVBQUVGLElBQUksS0FBSyxDQUE3QjtBQUFnQyxhQUFPLEVBQUU7QUFBQSxlQUFNRSxXQUFXLENBQUMsQ0FBRCxDQUFqQjtBQUFBLE9BQXpDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBM0JGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBaUNELENBeENEOztHQUFNSixNOztNQUFBQSxNO0FBMENTQSxxRUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvbWFuYWdlci9TaWRlQmFyLnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoYW5nZUV2ZW50SGFuZGxlciwgdXNlQ2FsbGJhY2ssIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHN0eWxlZCwgeyBjc3MgfSBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5cbmltcG9ydCB7IHByaW1hcnlDb2xvciwgc2lkZUJhckJhY2tncm91bmRDb2xvciB9IGZyb20gJy4uLy4uL3N0eWxlcy9jb2xvcnMnO1xuaW1wb3J0IEJ1dHRvbiBmcm9tICcuLi9CdXR0b24nO1xuXG5jb25zdCBTaWRCYXJDb250YWluZXIgPSBzdHlsZWQuZGl2YFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAke3NpZGVCYXJCYWNrZ3JvdW5kQ29sb3J9O1xuICBjb2xvcjogI2ZmZjtcbiAgbWluLWhlaWdodDogMTAwdmg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbmA7XG5cbmNvbnN0IFN0b3JlU2VsZWN0ID0gc3R5bGVkLnNlbGVjdGBcbiAgZGlzcGxheTogYmxvY2s7XG4gIGJvcmRlcjogMDtcbiAgYm9yZGVyLXJhZGl1czogMDtcbiAgd2lkdGg6IDkwJTtcbiAgbWFyZ2luOiAxcmVtIGF1dG87XG5gO1xuXG5jb25zdCBNZW51SXRlbSA9IHN0eWxlZC5kaXY8eyBjaG9vc2VlbjogYm9vbGVhbiB9PmBcbiAgYm9yZGVyLWxlZnQ6IDRweCBzb2xpZCAke3ByaW1hcnlDb2xvcn07XG4gIHBhZGRpbmc6IDFyZW0gMnJlbTtcbiAgY29sb3I6ICNmZmY7XG4gIGZvbnQtd2VpZ2h0OiA4MDA7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG5cbiAgJHsoeyBjaG9vc2VlbiB9KSA9PlxuICAgIGNob29zZWVuXG4gICAgICA/IGNzc2BcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMik7XG4gICAgICAgIGBcbiAgICAgIDogY3NzYFxuICAgICAgICAgIGJvcmRlci1sZWZ0LWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICAgICAgYH07XG5gO1xuXG5jb25zdCBMaW5lID0gc3R5bGVkLmRpdmBcbiAgd2lkdGg6IDkwJTtcbiAgbWFyZ2luOiAxcmVtIGF1dG87XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjNzc3O1xuYDtcblxuY29uc3QgUHJvZmlsZSA9IHN0eWxlZC5kaXZgXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcblxuICBjYW52YXMge1xuICAgIHdpZHRoOiA4MCU7XG4gICAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgICBtYXJnaW46IDFyZW0gYXV0bztcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICB9XG5gO1xuXG5mdW5jdGlvbiBjbGlja0xvZ291dCgpIHtcbiAgYWxlcnQoJ+q3uOqxtCDslYTsp4Eg6rWs7ZiE7JWI65CQ7Ja07JqpJyk7XG59XG5cbmZ1bmN0aW9uIGNsaWNrQ2hhbmdlTWFya2V0KGV2ZW50OiBDaGFuZ2VFdmVudEhhbmRsZXI8SFRNTFNlbGVjdEVsZW1lbnQ+KSB7XG4gIGFsZXJ0KCfslYTsp4Eg7YWN7Iqk7Yq466eMIOuwlOuAjOqzoCDqsJLrk6TsnYAg7JWI67CU6ru07JqpJyk7XG59XG5cbmNvbnN0IFNpZEJhcjogUmVhY3QuRkMgPSAoKSA9PiB7XG4gIGNvbnN0IFttZW51LCBzZXRNZW51XSA9IHVzZVN0YXRlKDEpO1xuXG4gIGNvbnN0IG9uTWVudUNsaWNrID0gdXNlQ2FsbGJhY2soKG1lbnUpID0+IHtcbiAgICBzZXRNZW51KG1lbnUpO1xuICB9LCBbXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8U2lkQmFyQ29udGFpbmVyPlxuICAgICAgPFByb2ZpbGU+XG4gICAgICAgIDxjYW52YXMgd2lkdGg9ezUwMH0gaGVpZ2h0PXs1MDB9IC8+XG4gICAgICAgIDxwPu2ZqeyKue2YhDwvcD5cbiAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXtjbGlja0xvZ291dH0+66Gc6re47JWE7JuDPC9CdXR0b24+XG4gICAgICA8L1Byb2ZpbGU+XG5cbiAgICAgIDxMaW5lIC8+XG5cbiAgICAgIDxkaXY+XG4gICAgICAgIDxwPuyngOygkCDshKDtg508L3A+XG4gICAgICAgIDxTdG9yZVNlbGVjdCBvbkNoYW5nZT17Y2xpY2tDaGFuZ2VNYXJrZXR9PlxuICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJcIj7soITssrQ8L29wdGlvbj5cbiAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiXCI+7LKc7JWI7KCQPC9vcHRpb24+XG4gICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIlwiPuu2gOyCsOygkDwvb3B0aW9uPlxuICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJcIj7smKjrnbzsnbg8L29wdGlvbj5cbiAgICAgICAgPC9TdG9yZVNlbGVjdD5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8TGluZSAvPlxuXG4gICAgICA8TWVudUl0ZW0gY2hvb3NlZW49e21lbnUgPT09IDB9IG9uQ2xpY2s9eygpID0+IG9uTWVudUNsaWNrKDApfT5cbiAgICAgICAg66mU64m0XG4gICAgICA8L01lbnVJdGVtPlxuICAgICAgPE1lbnVJdGVtIGNob29zZWVuPXttZW51ID09PSAxfSBvbkNsaWNrPXsoKSA9PiBvbk1lbnVDbGljaygxKX0+XG4gICAgICAgIOyalOyyre2ZleyduFxuICAgICAgPC9NZW51SXRlbT5cbiAgICAgIDxNZW51SXRlbSBjaG9vc2Vlbj17bWVudSA9PT0gMn0gb25DbGljaz17KCkgPT4gb25NZW51Q2xpY2soMil9PlxuICAgICAgICDsooXtlalcbiAgICAgIDwvTWVudUl0ZW0+XG4gICAgPC9TaWRCYXJDb250YWluZXI+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBTaWRCYXI7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/manager/SideBar.tsx\n");

/***/ })

})