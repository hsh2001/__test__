webpackHotUpdate_N_E("pages/manager",{

/***/ "./components/manager/SideBar.tsx":
/*!****************************************!*\
  !*** ./components/manager/SideBar.tsx ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _styles_colors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../styles/colors */ \"./styles/colors.ts\");\n\n\nvar _jsxFileName = \"/Users/seung-hyunhwang/Dropbox/git/web/components/manager/SideBar.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\nvar SidBarContainer = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].div.withConfig({\n  displayName: \"SideBar__SidBarContainer\",\n  componentId: \"y76ugi-0\"\n})([\"background-color:\", \";min-height:100vh;\"], _styles_colors__WEBPACK_IMPORTED_MODULE_3__[\"sideBarBackgroundColor\"]);\n_c = SidBarContainer;\nvar StoreSelect = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].select.withConfig({\n  displayName: \"SideBar__StoreSelect\",\n  componentId: \"y76ugi-1\"\n})([\"margin-bottom:1rem;\"]);\n_c2 = StoreSelect;\nvar MenuItem = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].div.withConfig({\n  displayName: \"SideBar__MenuItem\",\n  componentId: \"y76ugi-2\"\n})([\"border-left:0.5rem solid \", \";padding:1rem 2rem;color:#fff;\", \";\"], _styles_colors__WEBPACK_IMPORTED_MODULE_3__[\"primaryColor\"], function (_ref) {\n  var chooseen = _ref.chooseen;\n  return chooseen ? Object(styled_components__WEBPACK_IMPORTED_MODULE_2__[\"css\"])([\"background-color:rgba(0,0,0,0.15);\"]) : Object(styled_components__WEBPACK_IMPORTED_MODULE_2__[\"css\"])([\"border-left-color:transparent;\"]);\n});\n_c3 = MenuItem;\n\nvar SidBar = function SidBar() {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(1),\n      menu = _useState[0],\n      setMenu = _useState[1];\n\n  var onMenuClick = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useCallback\"])(function (menu) {\n    setMenu(menu);\n  }, []);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(SidBarContainer, {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(StoreSelect, {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"option\", {\n        value: \"\",\n        children: \"\\uC804\\uCCB4\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 40,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"option\", {\n        value: \"\",\n        children: \"\\uCC9C\\uC548\\uC810\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 41,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"option\", {\n        value: \"\",\n        children: \"\\uBD80\\uC0B0\\uC810\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 42,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"option\", {\n        value: \"\",\n        children: \"\\uC628\\uB77C\\uC778\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 43,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 39,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(MenuItem, {\n      chooseen: menu === 0,\n      onClick: function onClick() {\n        return onMenuClick(0);\n      },\n      children: \"\\uBA54\\uB274\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 46,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(MenuItem, {\n      chooseen: menu === 1,\n      onClick: function onClick() {\n        return onMenuClick(1);\n      },\n      children: \"\\uC694\\uCCAD\\uD655\\uC778\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 49,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(MenuItem, {\n      chooseen: menu === 2,\n      onClick: function onClick() {\n        return onMenuClick(2);\n      },\n      children: \"\\uC885\\uD569\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 52,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 38,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(SidBar, \"m8FDmCaZcqDQuadQX/8ZDTIT9k4=\");\n\n_c4 = SidBar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (SidBar);\n\nvar _c, _c2, _c3, _c4;\n\n$RefreshReg$(_c, \"SidBarContainer\");\n$RefreshReg$(_c2, \"StoreSelect\");\n$RefreshReg$(_c3, \"MenuItem\");\n$RefreshReg$(_c4, \"SidBar\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9tYW5hZ2VyL1NpZGVCYXIudHN4PzQzODkiXSwibmFtZXMiOlsiU2lkQmFyQ29udGFpbmVyIiwic3R5bGVkIiwiZGl2Iiwic2lkZUJhckJhY2tncm91bmRDb2xvciIsIlN0b3JlU2VsZWN0Iiwic2VsZWN0IiwiTWVudUl0ZW0iLCJwcmltYXJ5Q29sb3IiLCJjaG9vc2VlbiIsImNzcyIsIlNpZEJhciIsInVzZVN0YXRlIiwibWVudSIsInNldE1lbnUiLCJvbk1lbnVDbGljayIsInVzZUNhbGxiYWNrIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBO0FBRUEsSUFBTUEsZUFBZSxHQUFHQyx5REFBTSxDQUFDQyxHQUFWO0FBQUE7QUFBQTtBQUFBLGdEQUNDQyxxRUFERCxDQUFyQjtLQUFNSCxlO0FBS04sSUFBTUksV0FBVyxHQUFHSCx5REFBTSxDQUFDSSxNQUFWO0FBQUE7QUFBQTtBQUFBLDJCQUFqQjtNQUFNRCxXO0FBSU4sSUFBTUUsUUFBUSxHQUFHTCx5REFBTSxDQUFDQyxHQUFWO0FBQUE7QUFBQTtBQUFBLHlFQUNnQkssMkRBRGhCLEVBS1Y7QUFBQSxNQUFHQyxRQUFILFFBQUdBLFFBQUg7QUFBQSxTQUNBQSxRQUFRLEdBQ0pDLDZEQURJLDJDQUlKQSw2REFKSSxvQ0FEUjtBQUFBLENBTFUsQ0FBZDtNQUFNSCxROztBQWVOLElBQU1JLE1BQWdCLEdBQUcsU0FBbkJBLE1BQW1CLEdBQU07QUFBQTs7QUFBQSxrQkFDTEMsc0RBQVEsQ0FBQyxDQUFELENBREg7QUFBQSxNQUN0QkMsSUFEc0I7QUFBQSxNQUNoQkMsT0FEZ0I7O0FBRzdCLE1BQU1DLFdBQVcsR0FBR0MseURBQVcsQ0FBQyxVQUFDSCxJQUFELEVBQVU7QUFDeENDLFdBQU8sQ0FBQ0QsSUFBRCxDQUFQO0FBQ0QsR0FGOEIsRUFFNUIsRUFGNEIsQ0FBL0I7QUFJQSxzQkFDRSxxRUFBQyxlQUFEO0FBQUEsNEJBQ0UscUVBQUMsV0FBRDtBQUFBLDhCQUNFO0FBQVEsYUFBSyxFQUFDLEVBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERixlQUVFO0FBQVEsYUFBSyxFQUFDLEVBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFGRixlQUdFO0FBQVEsYUFBSyxFQUFDLEVBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFIRixlQUlFO0FBQVEsYUFBSyxFQUFDLEVBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFKRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERixlQVFFLHFFQUFDLFFBQUQ7QUFBVSxjQUFRLEVBQUVBLElBQUksS0FBSyxDQUE3QjtBQUFnQyxhQUFPLEVBQUU7QUFBQSxlQUFNRSxXQUFXLENBQUMsQ0FBRCxDQUFqQjtBQUFBLE9BQXpDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBUkYsZUFXRSxxRUFBQyxRQUFEO0FBQVUsY0FBUSxFQUFFRixJQUFJLEtBQUssQ0FBN0I7QUFBZ0MsYUFBTyxFQUFFO0FBQUEsZUFBTUUsV0FBVyxDQUFDLENBQUQsQ0FBakI7QUFBQSxPQUF6QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQVhGLGVBY0UscUVBQUMsUUFBRDtBQUFVLGNBQVEsRUFBRUYsSUFBSSxLQUFLLENBQTdCO0FBQWdDLGFBQU8sRUFBRTtBQUFBLGVBQU1FLFdBQVcsQ0FBQyxDQUFELENBQWpCO0FBQUEsT0FBekM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFkRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQW9CRCxDQTNCRDs7R0FBTUosTTs7TUFBQUEsTTtBQTZCU0EscUVBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL21hbmFnZXIvU2lkZUJhci50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VDYWxsYmFjaywgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgc3R5bGVkLCB7IGNzcyB9IGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcblxuaW1wb3J0IHsgcHJpbWFyeUNvbG9yLCBzaWRlQmFyQmFja2dyb3VuZENvbG9yIH0gZnJvbSAnLi4vLi4vc3R5bGVzL2NvbG9ycyc7XG5cbmNvbnN0IFNpZEJhckNvbnRhaW5lciA9IHN0eWxlZC5kaXZgXG4gIGJhY2tncm91bmQtY29sb3I6ICR7c2lkZUJhckJhY2tncm91bmRDb2xvcn07XG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xuYDtcblxuY29uc3QgU3RvcmVTZWxlY3QgPSBzdHlsZWQuc2VsZWN0YFxuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xuYDtcblxuY29uc3QgTWVudUl0ZW0gPSBzdHlsZWQuZGl2PHsgY2hvb3NlZW46IGJvb2xlYW4gfT5gXG4gIGJvcmRlci1sZWZ0OiAwLjVyZW0gc29saWQgJHtwcmltYXJ5Q29sb3J9O1xuICBwYWRkaW5nOiAxcmVtIDJyZW07XG4gIGNvbG9yOiAjZmZmO1xuXG4gICR7KHsgY2hvb3NlZW4gfSkgPT5cbiAgICBjaG9vc2VlblxuICAgICAgPyBjc3NgXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjE1KTtcbiAgICAgICAgYFxuICAgICAgOiBjc3NgXG4gICAgICAgICAgYm9yZGVyLWxlZnQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgICAgICBgfTtcbmA7XG5cbmNvbnN0IFNpZEJhcjogUmVhY3QuRkMgPSAoKSA9PiB7XG4gIGNvbnN0IFttZW51LCBzZXRNZW51XSA9IHVzZVN0YXRlKDEpO1xuXG4gIGNvbnN0IG9uTWVudUNsaWNrID0gdXNlQ2FsbGJhY2soKG1lbnUpID0+IHtcbiAgICBzZXRNZW51KG1lbnUpO1xuICB9LCBbXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8U2lkQmFyQ29udGFpbmVyPlxuICAgICAgPFN0b3JlU2VsZWN0PlxuICAgICAgICA8b3B0aW9uIHZhbHVlPVwiXCI+7KCE7LK0PC9vcHRpb24+XG4gICAgICAgIDxvcHRpb24gdmFsdWU9XCJcIj7sspzslYjsoJA8L29wdGlvbj5cbiAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIlwiPuu2gOyCsOygkDwvb3B0aW9uPlxuICAgICAgICA8b3B0aW9uIHZhbHVlPVwiXCI+7Jio65287J24PC9vcHRpb24+XG4gICAgICA8L1N0b3JlU2VsZWN0PlxuXG4gICAgICA8TWVudUl0ZW0gY2hvb3NlZW49e21lbnUgPT09IDB9IG9uQ2xpY2s9eygpID0+IG9uTWVudUNsaWNrKDApfT5cbiAgICAgICAg66mU64m0XG4gICAgICA8L01lbnVJdGVtPlxuICAgICAgPE1lbnVJdGVtIGNob29zZWVuPXttZW51ID09PSAxfSBvbkNsaWNrPXsoKSA9PiBvbk1lbnVDbGljaygxKX0+XG4gICAgICAgIOyalOyyre2ZleyduFxuICAgICAgPC9NZW51SXRlbT5cbiAgICAgIDxNZW51SXRlbSBjaG9vc2Vlbj17bWVudSA9PT0gMn0gb25DbGljaz17KCkgPT4gb25NZW51Q2xpY2soMil9PlxuICAgICAgICDsooXtlalcbiAgICAgIDwvTWVudUl0ZW0+XG4gICAgPC9TaWRCYXJDb250YWluZXI+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBTaWRCYXI7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/manager/SideBar.tsx\n");

/***/ })

})