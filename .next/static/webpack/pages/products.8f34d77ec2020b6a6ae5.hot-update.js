webpackHotUpdate_N_E("pages/products",{

/***/ "./components/Product.js":
/*!*******************************!*\
  !*** ./components/Product.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Product; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_ItemStyles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles/ItemStyles */ \"./components/styles/ItemStyles.js\");\n/* harmony import */ var _styles_Title__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles/Title */ \"./components/styles/Title.js\");\n/* harmony import */ var _styles_PriceTag__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styles/PriceTag */ \"./components/styles/PriceTag.js\");\n/* harmony import */ var _lib_formatMoney__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../lib/formatMoney */ \"./lib/formatMoney.js\");\n/* harmony import */ var _DeleteProduct__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./DeleteProduct */ \"./components/DeleteProduct.js\");\n/* harmony import */ var _AddToCart__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./AddToCart */ \"./components/AddToCart.js\");\n/* harmony import */ var _User__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./User */ \"./components/User.js\");\n\n\nvar _jsxFileName = \"/Users/colinmaretsky/dev/wes-bos/e-commerce-site/frontend/components/Product.js\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\nfunction Product(_ref) {\n  _s();\n\n  var _product$photo, _product$photo$image;\n\n  var product = _ref.product;\n  var user = Object(_User__WEBPACK_IMPORTED_MODULE_8__[\"useUser\"])();\n\n  function doesUserOwnProduct() {\n    user.products.forEach(function (userProduct) {\n      return product.id === userProduct.id;\n    });\n  }\n\n  console.log(doesUserOwnProduct());\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_styles_ItemStyles__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n      src: product === null || product === void 0 ? void 0 : (_product$photo = product.photo) === null || _product$photo === void 0 ? void 0 : (_product$photo$image = _product$photo.image) === null || _product$photo$image === void 0 ? void 0 : _product$photo$image.publicUrlTransformed,\n      alt: product.name\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 22,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_styles_Title__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {\n        href: \"/product/\".concat(product.id),\n        children: product.name\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 27,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 26,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_styles_PriceTag__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n      children: Object(_lib_formatMoney__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(product.price)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 29,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n      children: product.description\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 30,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: \"buttonList\",\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {\n        href: user ? {\n          pathname: \"/update\",\n          query: {\n            id: product.id\n          }\n        } : {\n          pathname: \"/signin\"\n        },\n        children: \"Edit\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 32,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_AddToCart__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n        id: product.id\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 46,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_DeleteProduct__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n        id: product.id,\n        children: \"Delete\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 47,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 31,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 21,\n    columnNumber: 5\n  }, this);\n}\n\n_s(Product, \"BPnln+wUpxLjLAxQmw7xYz9C+QI=\", false, function () {\n  return [_User__WEBPACK_IMPORTED_MODULE_8__[\"useUser\"]];\n});\n\n_c = Product;\n\nvar _c;\n\n$RefreshReg$(_c, \"Product\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Qcm9kdWN0LmpzPzlkMDYiXSwibmFtZXMiOlsiUHJvZHVjdCIsInByb2R1Y3QiLCJ1c2VyIiwidXNlVXNlciIsImRvZXNVc2VyT3duUHJvZHVjdCIsInByb2R1Y3RzIiwiZm9yRWFjaCIsInVzZXJQcm9kdWN0IiwiaWQiLCJjb25zb2xlIiwibG9nIiwicGhvdG8iLCJpbWFnZSIsInB1YmxpY1VybFRyYW5zZm9ybWVkIiwibmFtZSIsImZvcm1hdE1vbmV5IiwicHJpY2UiLCJkZXNjcmlwdGlvbiIsInBhdGhuYW1lIiwicXVlcnkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFZSxTQUFTQSxPQUFULE9BQThCO0FBQUE7O0FBQUE7O0FBQUEsTUFBWEMsT0FBVyxRQUFYQSxPQUFXO0FBQzNDLE1BQU1DLElBQUksR0FBR0MscURBQU8sRUFBcEI7O0FBRUEsV0FBU0Msa0JBQVQsR0FBOEI7QUFDNUJGLFFBQUksQ0FBQ0csUUFBTCxDQUFjQyxPQUFkLENBQXNCLFVBQUNDLFdBQUQsRUFBaUI7QUFDckMsYUFBT04sT0FBTyxDQUFDTyxFQUFSLEtBQWVELFdBQVcsQ0FBQ0MsRUFBbEM7QUFDRCxLQUZEO0FBR0Q7O0FBRURDLFNBQU8sQ0FBQ0MsR0FBUixDQUFZTixrQkFBa0IsRUFBOUI7QUFDQSxzQkFDRSxxRUFBQywwREFBRDtBQUFBLDRCQUNFO0FBQ0UsU0FBRyxFQUFFSCxPQUFGLGFBQUVBLE9BQUYseUNBQUVBLE9BQU8sQ0FBRVUsS0FBWCwyRUFBRSxlQUFnQkMsS0FBbEIseURBQUUscUJBQXVCQyxvQkFEOUI7QUFFRSxTQUFHLEVBQUVaLE9BQU8sQ0FBQ2E7QUFGZjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsZUFLRSxxRUFBQyxxREFBRDtBQUFBLDZCQUNFLHFFQUFDLGdEQUFEO0FBQU0sWUFBSSxxQkFBY2IsT0FBTyxDQUFDTyxFQUF0QixDQUFWO0FBQUEsa0JBQXVDUCxPQUFPLENBQUNhO0FBQS9DO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBTEYsZUFRRSxxRUFBQyx3REFBRDtBQUFBLGdCQUFXQyxnRUFBVyxDQUFDZCxPQUFPLENBQUNlLEtBQVQ7QUFBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQVJGLGVBU0U7QUFBQSxnQkFBSWYsT0FBTyxDQUFDZ0I7QUFBWjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBVEYsZUFVRTtBQUFLLGVBQVMsRUFBQyxZQUFmO0FBQUEsOEJBQ0UscUVBQUMsZ0RBQUQ7QUFDRSxZQUFJLEVBQ0ZmLElBQUksR0FDQTtBQUNFZ0Isa0JBQVEsRUFBRSxTQURaO0FBRUVDLGVBQUssRUFBRTtBQUNMWCxjQUFFLEVBQUVQLE9BQU8sQ0FBQ087QUFEUDtBQUZULFNBREEsR0FPQTtBQUFFVSxrQkFBUSxFQUFFO0FBQVosU0FUUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGLGVBZUUscUVBQUMsa0RBQUQ7QUFBVyxVQUFFLEVBQUVqQixPQUFPLENBQUNPO0FBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FmRixlQWdCRSxxRUFBQyxzREFBRDtBQUFlLFVBQUUsRUFBRVAsT0FBTyxDQUFDTyxFQUEzQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQWhCRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFWRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQStCRDs7R0F6Q3VCUixPO1VBQ1RHLDZDOzs7S0FEU0gsTyIsImZpbGUiOiIuL2NvbXBvbmVudHMvUHJvZHVjdC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcbmltcG9ydCBJdGVtU3R5bGVzIGZyb20gXCIuL3N0eWxlcy9JdGVtU3R5bGVzXCI7XG5pbXBvcnQgVGl0bGUgZnJvbSBcIi4vc3R5bGVzL1RpdGxlXCI7XG5pbXBvcnQgUHJpY2VUYWcgZnJvbSBcIi4vc3R5bGVzL1ByaWNlVGFnXCI7XG5pbXBvcnQgZm9ybWF0TW9uZXkgZnJvbSBcIi4uL2xpYi9mb3JtYXRNb25leVwiO1xuaW1wb3J0IERlbGV0ZVByb2R1Y3QgZnJvbSBcIi4vRGVsZXRlUHJvZHVjdFwiO1xuaW1wb3J0IEFkZFRvQ2FydCBmcm9tIFwiLi9BZGRUb0NhcnRcIjtcbmltcG9ydCB7IHVzZVVzZXIgfSBmcm9tIFwiLi9Vc2VyXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFByb2R1Y3QoeyBwcm9kdWN0IH0pIHtcbiAgY29uc3QgdXNlciA9IHVzZVVzZXIoKTtcblxuICBmdW5jdGlvbiBkb2VzVXNlck93blByb2R1Y3QoKSB7XG4gICAgdXNlci5wcm9kdWN0cy5mb3JFYWNoKCh1c2VyUHJvZHVjdCkgPT4ge1xuICAgICAgcmV0dXJuIHByb2R1Y3QuaWQgPT09IHVzZXJQcm9kdWN0LmlkO1xuICAgIH0pO1xuICB9XG5cbiAgY29uc29sZS5sb2coZG9lc1VzZXJPd25Qcm9kdWN0KCkpO1xuICByZXR1cm4gKFxuICAgIDxJdGVtU3R5bGVzPlxuICAgICAgPGltZ1xuICAgICAgICBzcmM9e3Byb2R1Y3Q/LnBob3RvPy5pbWFnZT8ucHVibGljVXJsVHJhbnNmb3JtZWR9XG4gICAgICAgIGFsdD17cHJvZHVjdC5uYW1lfVxuICAgICAgLz5cbiAgICAgIDxUaXRsZT5cbiAgICAgICAgPExpbmsgaHJlZj17YC9wcm9kdWN0LyR7cHJvZHVjdC5pZH1gfT57cHJvZHVjdC5uYW1lfTwvTGluaz5cbiAgICAgIDwvVGl0bGU+XG4gICAgICA8UHJpY2VUYWc+e2Zvcm1hdE1vbmV5KHByb2R1Y3QucHJpY2UpfTwvUHJpY2VUYWc+XG4gICAgICA8cD57cHJvZHVjdC5kZXNjcmlwdGlvbn08L3A+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImJ1dHRvbkxpc3RcIj5cbiAgICAgICAgPExpbmtcbiAgICAgICAgICBocmVmPXtcbiAgICAgICAgICAgIHVzZXJcbiAgICAgICAgICAgICAgPyB7XG4gICAgICAgICAgICAgICAgICBwYXRobmFtZTogXCIvdXBkYXRlXCIsXG4gICAgICAgICAgICAgICAgICBxdWVyeToge1xuICAgICAgICAgICAgICAgICAgICBpZDogcHJvZHVjdC5pZCxcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICA6IHsgcGF0aG5hbWU6IFwiL3NpZ25pblwiIH1cbiAgICAgICAgICB9XG4gICAgICAgID5cbiAgICAgICAgICBFZGl0XG4gICAgICAgIDwvTGluaz5cbiAgICAgICAgPEFkZFRvQ2FydCBpZD17cHJvZHVjdC5pZH0gLz5cbiAgICAgICAgPERlbGV0ZVByb2R1Y3QgaWQ9e3Byb2R1Y3QuaWR9PkRlbGV0ZTwvRGVsZXRlUHJvZHVjdD5cbiAgICAgIDwvZGl2PlxuICAgIDwvSXRlbVN0eWxlcz5cbiAgKTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Product.js\n");

/***/ })

})