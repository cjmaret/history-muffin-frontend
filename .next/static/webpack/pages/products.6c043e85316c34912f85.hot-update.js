webpackHotUpdate_N_E("pages/products",{

/***/ "./components/Product.js":
/*!*******************************!*\
  !*** ./components/Product.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Product; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_ItemStyles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles/ItemStyles */ \"./components/styles/ItemStyles.js\");\n/* harmony import */ var _styles_Title__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles/Title */ \"./components/styles/Title.js\");\n/* harmony import */ var _styles_PriceTag__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styles/PriceTag */ \"./components/styles/PriceTag.js\");\n/* harmony import */ var _lib_formatMoney__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../lib/formatMoney */ \"./lib/formatMoney.js\");\n/* harmony import */ var _DeleteProduct__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./DeleteProduct */ \"./components/DeleteProduct.js\");\n/* harmony import */ var _AddToCart__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./AddToCart */ \"./components/AddToCart.js\");\n/* harmony import */ var _User__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./User */ \"./components/User.js\");\n\n\nvar _jsxFileName = \"/Users/colinmaretsky/dev/wes-bos/e-commerce-site/frontend/components/Product.js\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\nfunction Product(_ref) {\n  _s();\n\n  var _product$photo, _product$photo$image;\n\n  var product = _ref.product;\n  var user = Object(_User__WEBPACK_IMPORTED_MODULE_8__[\"useUser\"])();\n\n  function doesUserOwnProduct() {\n    return user === null || user === void 0 ? void 0 : user.products.some(function (userProduct) {\n      return userProduct.id === product.id;\n    });\n  }\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_styles_ItemStyles__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n      src: product === null || product === void 0 ? void 0 : (_product$photo = product.photo) === null || _product$photo === void 0 ? void 0 : (_product$photo$image = _product$photo.image) === null || _product$photo$image === void 0 ? void 0 : _product$photo$image.publicUrlTransformed,\n      alt: product.name\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 19,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_styles_Title__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {\n        href: \"/product/\".concat(product.id),\n        children: product.name\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 24,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_styles_PriceTag__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n      children: Object(_lib_formatMoney__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(product.price)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 26,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n      children: product.description\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 27,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: \"buttonList\",\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {\n        href: doesUserOwnProduct() ? {\n          pathname: \"/update\",\n          query: {\n            id: product.id\n          }\n        } : {\n          pathname: \"/signin\"\n        },\n        children: \"Edit\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 29,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_AddToCart__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n        id: product.id\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 43,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_DeleteProduct__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n        id: product.id,\n        children: \"Delete\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 44,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 28,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 18,\n    columnNumber: 5\n  }, this);\n}\n\n_s(Product, \"BPnln+wUpxLjLAxQmw7xYz9C+QI=\", false, function () {\n  return [_User__WEBPACK_IMPORTED_MODULE_8__[\"useUser\"]];\n});\n\n_c = Product;\n\nvar _c;\n\n$RefreshReg$(_c, \"Product\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Qcm9kdWN0LmpzPzlkMDYiXSwibmFtZXMiOlsiUHJvZHVjdCIsInByb2R1Y3QiLCJ1c2VyIiwidXNlVXNlciIsImRvZXNVc2VyT3duUHJvZHVjdCIsInByb2R1Y3RzIiwic29tZSIsInVzZXJQcm9kdWN0IiwiaWQiLCJwaG90byIsImltYWdlIiwicHVibGljVXJsVHJhbnNmb3JtZWQiLCJuYW1lIiwiZm9ybWF0TW9uZXkiLCJwcmljZSIsImRlc2NyaXB0aW9uIiwicGF0aG5hbWUiLCJxdWVyeSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVlLFNBQVNBLE9BQVQsT0FBOEI7QUFBQTs7QUFBQTs7QUFBQSxNQUFYQyxPQUFXLFFBQVhBLE9BQVc7QUFDM0MsTUFBTUMsSUFBSSxHQUFHQyxxREFBTyxFQUFwQjs7QUFFQSxXQUFTQyxrQkFBVCxHQUE4QjtBQUM1QixXQUFPRixJQUFQLGFBQU9BLElBQVAsdUJBQU9BLElBQUksQ0FBRUcsUUFBTixDQUFlQyxJQUFmLENBQW9CLFVBQUNDLFdBQUQ7QUFBQSxhQUFpQkEsV0FBVyxDQUFDQyxFQUFaLEtBQW1CUCxPQUFPLENBQUNPLEVBQTVDO0FBQUEsS0FBcEIsQ0FBUDtBQUNEOztBQUVELHNCQUNFLHFFQUFDLDBEQUFEO0FBQUEsNEJBQ0U7QUFDRSxTQUFHLEVBQUVQLE9BQUYsYUFBRUEsT0FBRix5Q0FBRUEsT0FBTyxDQUFFUSxLQUFYLDJFQUFFLGVBQWdCQyxLQUFsQix5REFBRSxxQkFBdUJDLG9CQUQ5QjtBQUVFLFNBQUcsRUFBRVYsT0FBTyxDQUFDVztBQUZmO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERixlQUtFLHFFQUFDLHFEQUFEO0FBQUEsNkJBQ0UscUVBQUMsZ0RBQUQ7QUFBTSxZQUFJLHFCQUFjWCxPQUFPLENBQUNPLEVBQXRCLENBQVY7QUFBQSxrQkFBdUNQLE9BQU8sQ0FBQ1c7QUFBL0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFMRixlQVFFLHFFQUFDLHdEQUFEO0FBQUEsZ0JBQVdDLGdFQUFXLENBQUNaLE9BQU8sQ0FBQ2EsS0FBVDtBQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBUkYsZUFTRTtBQUFBLGdCQUFJYixPQUFPLENBQUNjO0FBQVo7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQVRGLGVBVUU7QUFBSyxlQUFTLEVBQUMsWUFBZjtBQUFBLDhCQUNFLHFFQUFDLGdEQUFEO0FBQ0UsWUFBSSxFQUNGWCxrQkFBa0IsS0FDZDtBQUNFWSxrQkFBUSxFQUFFLFNBRFo7QUFFRUMsZUFBSyxFQUFFO0FBQ0xULGNBQUUsRUFBRVAsT0FBTyxDQUFDTztBQURQO0FBRlQsU0FEYyxHQU9kO0FBQUVRLGtCQUFRLEVBQUU7QUFBWixTQVRSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsZUFlRSxxRUFBQyxrREFBRDtBQUFXLFVBQUUsRUFBRWYsT0FBTyxDQUFDTztBQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBZkYsZUFnQkUscUVBQUMsc0RBQUQ7QUFBZSxVQUFFLEVBQUVQLE9BQU8sQ0FBQ08sRUFBM0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FoQkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBVkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUErQkQ7O0dBdEN1QlIsTztVQUNURyw2Qzs7O0tBRFNILE8iLCJmaWxlIjoiLi9jb21wb25lbnRzL1Byb2R1Y3QuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5pbXBvcnQgSXRlbVN0eWxlcyBmcm9tIFwiLi9zdHlsZXMvSXRlbVN0eWxlc1wiO1xuaW1wb3J0IFRpdGxlIGZyb20gXCIuL3N0eWxlcy9UaXRsZVwiO1xuaW1wb3J0IFByaWNlVGFnIGZyb20gXCIuL3N0eWxlcy9QcmljZVRhZ1wiO1xuaW1wb3J0IGZvcm1hdE1vbmV5IGZyb20gXCIuLi9saWIvZm9ybWF0TW9uZXlcIjtcbmltcG9ydCBEZWxldGVQcm9kdWN0IGZyb20gXCIuL0RlbGV0ZVByb2R1Y3RcIjtcbmltcG9ydCBBZGRUb0NhcnQgZnJvbSBcIi4vQWRkVG9DYXJ0XCI7XG5pbXBvcnQgeyB1c2VVc2VyIH0gZnJvbSBcIi4vVXNlclwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQcm9kdWN0KHsgcHJvZHVjdCB9KSB7XG4gIGNvbnN0IHVzZXIgPSB1c2VVc2VyKCk7XG5cbiAgZnVuY3Rpb24gZG9lc1VzZXJPd25Qcm9kdWN0KCkge1xuICAgIHJldHVybiB1c2VyPy5wcm9kdWN0cy5zb21lKCh1c2VyUHJvZHVjdCkgPT4gdXNlclByb2R1Y3QuaWQgPT09IHByb2R1Y3QuaWQpO1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8SXRlbVN0eWxlcz5cbiAgICAgIDxpbWdcbiAgICAgICAgc3JjPXtwcm9kdWN0Py5waG90bz8uaW1hZ2U/LnB1YmxpY1VybFRyYW5zZm9ybWVkfVxuICAgICAgICBhbHQ9e3Byb2R1Y3QubmFtZX1cbiAgICAgIC8+XG4gICAgICA8VGl0bGU+XG4gICAgICAgIDxMaW5rIGhyZWY9e2AvcHJvZHVjdC8ke3Byb2R1Y3QuaWR9YH0+e3Byb2R1Y3QubmFtZX08L0xpbms+XG4gICAgICA8L1RpdGxlPlxuICAgICAgPFByaWNlVGFnPntmb3JtYXRNb25leShwcm9kdWN0LnByaWNlKX08L1ByaWNlVGFnPlxuICAgICAgPHA+e3Byb2R1Y3QuZGVzY3JpcHRpb259PC9wPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJidXR0b25MaXN0XCI+XG4gICAgICAgIDxMaW5rXG4gICAgICAgICAgaHJlZj17XG4gICAgICAgICAgICBkb2VzVXNlck93blByb2R1Y3QoKVxuICAgICAgICAgICAgICA/IHtcbiAgICAgICAgICAgICAgICAgIHBhdGhuYW1lOiBcIi91cGRhdGVcIixcbiAgICAgICAgICAgICAgICAgIHF1ZXJ5OiB7XG4gICAgICAgICAgICAgICAgICAgIGlkOiBwcm9kdWN0LmlkLFxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIDogeyBwYXRobmFtZTogXCIvc2lnbmluXCIgfVxuICAgICAgICAgIH1cbiAgICAgICAgPlxuICAgICAgICAgIEVkaXRcbiAgICAgICAgPC9MaW5rPlxuICAgICAgICA8QWRkVG9DYXJ0IGlkPXtwcm9kdWN0LmlkfSAvPlxuICAgICAgICA8RGVsZXRlUHJvZHVjdCBpZD17cHJvZHVjdC5pZH0+RGVsZXRlPC9EZWxldGVQcm9kdWN0PlxuICAgICAgPC9kaXY+XG4gICAgPC9JdGVtU3R5bGVzPlxuICApO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Product.js\n");

/***/ })

})