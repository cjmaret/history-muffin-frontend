module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/account.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Account.js":
/*!*******************************!*\
  !*** ./components/Account.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Account; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _User__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./User */ \"./components/User.js\");\n/* harmony import */ var _images_user_icon_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../images/user-icon.png */ \"./images/user-icon.png\");\n/* harmony import */ var _images_user_icon_png__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_images_user_icon_png__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _styles_AccountStyles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles/AccountStyles */ \"./components/styles/AccountStyles.js\");\n\nvar _jsxFileName = \"/Users/colinmaretsky/dev/wes-bos/e-commerce-site/frontend/components/Account.js\";\n\n\n\nfunction Account() {\n  const user = Object(_User__WEBPACK_IMPORTED_MODULE_1__[\"useUser\"])();\n  console.log(user);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_styles_AccountStyles__WEBPACK_IMPORTED_MODULE_3__[\"AccountStyles\"], {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_styles_AccountStyles__WEBPACK_IMPORTED_MODULE_3__[\"ProfileImage\"], {\n        src: _images_user_icon_png__WEBPACK_IMPORTED_MODULE_2___default.a,\n        alt: \"\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 12,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 11,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h2\", {\n        children: [\"Name: \", user === null || user === void 0 ? void 0 : user.name]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 15,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h2\", {\n        children: [\"Email: \", user === null || user === void 0 ? void 0 : user.email]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 16,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 14,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 10,\n    columnNumber: 5\n  }, this);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0FjY291bnQuanM/ZmRhZiJdLCJuYW1lcyI6WyJBY2NvdW50IiwidXNlciIsInVzZVVzZXIiLCJjb25zb2xlIiwibG9nIiwiVXNlckljb24iLCJuYW1lIiwiZW1haWwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFZSxTQUFTQSxPQUFULEdBQW1CO0FBQ2hDLFFBQU1DLElBQUksR0FBR0MscURBQU8sRUFBcEI7QUFFQUMsU0FBTyxDQUFDQyxHQUFSLENBQVlILElBQVo7QUFDQSxzQkFDRSxxRUFBQyxtRUFBRDtBQUFBLDRCQUNFO0FBQUEsNkJBQ0UscUVBQUMsa0VBQUQ7QUFBYyxXQUFHLEVBQUVJLDREQUFuQjtBQUE2QixXQUFHLEVBQUM7QUFBakM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERixlQUlFO0FBQUEsOEJBQ0U7QUFBQSw2QkFBV0osSUFBWCxhQUFXQSxJQUFYLHVCQUFXQSxJQUFJLENBQUVLLElBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGLGVBRUU7QUFBQSw4QkFBWUwsSUFBWixhQUFZQSxJQUFaLHVCQUFZQSxJQUFJLENBQUVNLEtBQWxCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBV0QiLCJmaWxlIjoiLi9jb21wb25lbnRzL0FjY291bnQuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VVc2VyIH0gZnJvbSAnLi9Vc2VyJztcbmltcG9ydCBVc2VySWNvbiBmcm9tICcuLi9pbWFnZXMvdXNlci1pY29uLnBuZyc7XG5pbXBvcnQgeyBBY2NvdW50U3R5bGVzLCBQcm9maWxlSW1hZ2UgfSBmcm9tICcuL3N0eWxlcy9BY2NvdW50U3R5bGVzJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQWNjb3VudCgpIHtcbiAgY29uc3QgdXNlciA9IHVzZVVzZXIoKTtcblxuICBjb25zb2xlLmxvZyh1c2VyKTtcbiAgcmV0dXJuIChcbiAgICA8QWNjb3VudFN0eWxlcz5cbiAgICAgIDxkaXY+XG4gICAgICAgIDxQcm9maWxlSW1hZ2Ugc3JjPXtVc2VySWNvbn0gYWx0PVwiXCIgLz5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdj5cbiAgICAgICAgPGgyPk5hbWU6IHt1c2VyPy5uYW1lfTwvaDI+XG4gICAgICAgIDxoMj5FbWFpbDoge3VzZXI/LmVtYWlsfTwvaDI+XG4gICAgICA8L2Rpdj5cbiAgICA8L0FjY291bnRTdHlsZXM+XG4gICk7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Account.js\n");

/***/ }),

/***/ "./components/User.js":
/*!****************************!*\
  !*** ./components/User.js ***!
  \****************************/
/*! exports provided: useUser, CURRENT_USER_QUERY */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"useUser\", function() { return useUser; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"CURRENT_USER_QUERY\", function() { return CURRENT_USER_QUERY; });\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @apollo/client */ \"@apollo/client\");\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_0__);\n\nconst CURRENT_USER_QUERY = _apollo_client__WEBPACK_IMPORTED_MODULE_0__[\"gql\"]`\n  query {\n    authenticatedItem {\n      ... on User {\n        id\n        email\n        name\n        products {\n          name\n          id\n        }\n        cart {\n          id\n          quantity\n          product {\n            id\n            price\n            name\n            description\n            photo {\n              image {\n                publicUrlTransformed\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n`;\nfunction useUser() {\n  const {\n    data\n  } = Object(_apollo_client__WEBPACK_IMPORTED_MODULE_0__[\"useQuery\"])(CURRENT_USER_QUERY);\n  return data === null || data === void 0 ? void 0 : data.authenticatedItem;\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1VzZXIuanM/NTY1OCJdLCJuYW1lcyI6WyJDVVJSRU5UX1VTRVJfUVVFUlkiLCJncWwiLCJ1c2VVc2VyIiwiZGF0YSIsInVzZVF1ZXJ5IiwiYXV0aGVudGljYXRlZEl0ZW0iXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBLE1BQU1BLGtCQUFrQixHQUFHQyxrREFBSTtBQUMvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBN0JBO0FBK0JPLFNBQVNDLE9BQVQsR0FBbUI7QUFDeEIsUUFBTTtBQUFFQztBQUFGLE1BQVdDLCtEQUFRLENBQUNKLGtCQUFELENBQXpCO0FBQ0EsU0FBT0csSUFBUCxhQUFPQSxJQUFQLHVCQUFPQSxJQUFJLENBQUVFLGlCQUFiO0FBQ0QiLCJmaWxlIjoiLi9jb21wb25lbnRzL1VzZXIuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBncWwsIHVzZVF1ZXJ5IH0gZnJvbSBcIkBhcG9sbG8vY2xpZW50XCI7XG5cbmNvbnN0IENVUlJFTlRfVVNFUl9RVUVSWSA9IGdxbGBcbiAgcXVlcnkge1xuICAgIGF1dGhlbnRpY2F0ZWRJdGVtIHtcbiAgICAgIC4uLiBvbiBVc2VyIHtcbiAgICAgICAgaWRcbiAgICAgICAgZW1haWxcbiAgICAgICAgbmFtZVxuICAgICAgICBwcm9kdWN0cyB7XG4gICAgICAgICAgbmFtZVxuICAgICAgICAgIGlkXG4gICAgICAgIH1cbiAgICAgICAgY2FydCB7XG4gICAgICAgICAgaWRcbiAgICAgICAgICBxdWFudGl0eVxuICAgICAgICAgIHByb2R1Y3Qge1xuICAgICAgICAgICAgaWRcbiAgICAgICAgICAgIHByaWNlXG4gICAgICAgICAgICBuYW1lXG4gICAgICAgICAgICBkZXNjcmlwdGlvblxuICAgICAgICAgICAgcGhvdG8ge1xuICAgICAgICAgICAgICBpbWFnZSB7XG4gICAgICAgICAgICAgICAgcHVibGljVXJsVHJhbnNmb3JtZWRcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuYDtcblxuZXhwb3J0IGZ1bmN0aW9uIHVzZVVzZXIoKSB7XG4gIGNvbnN0IHsgZGF0YSB9ID0gdXNlUXVlcnkoQ1VSUkVOVF9VU0VSX1FVRVJZKTtcbiAgcmV0dXJuIGRhdGE/LmF1dGhlbnRpY2F0ZWRJdGVtO1xufVxuXG5leHBvcnQgeyBDVVJSRU5UX1VTRVJfUVVFUlkgfTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/User.js\n");

/***/ }),

/***/ "./components/styles/AccountStyles.js":
/*!********************************************!*\
  !*** ./components/styles/AccountStyles.js ***!
  \********************************************/
/*! exports provided: AccountStyles, ProfileImage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"AccountStyles\", function() { return AccountStyles; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ProfileImage\", function() { return ProfileImage; });\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);\n\nconst AccountStyles = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({\n  displayName: \"AccountStyles\",\n  componentId: \"sc-j0sk5m-0\"\n})([\"display:flex;justify-content:flex-start;align-items:center;margin:40px 0 0 40px;\"]);\nconst ProfileImage = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.img.withConfig({\n  displayName: \"AccountStyles__ProfileImage\",\n  componentId: \"sc-j0sk5m-1\"\n})([\"max-width:100px;margin-right:40px;\"]);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3N0eWxlcy9BY2NvdW50U3R5bGVzLmpzP2Y0MjkiXSwibmFtZXMiOlsiQWNjb3VudFN0eWxlcyIsInN0eWxlZCIsImRpdiIsIlByb2ZpbGVJbWFnZSIsImltZyJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRU8sTUFBTUEsYUFBYSxHQUFHQyx3REFBTSxDQUFDQyxHQUFWO0FBQUE7QUFBQTtBQUFBLHdGQUFuQjtBQU9BLE1BQU1DLFlBQVksR0FBR0Ysd0RBQU0sQ0FBQ0csR0FBVjtBQUFBO0FBQUE7QUFBQSwwQ0FBbEIiLCJmaWxlIjoiLi9jb21wb25lbnRzL3N0eWxlcy9BY2NvdW50U3R5bGVzLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5cbmV4cG9ydCBjb25zdCBBY2NvdW50U3R5bGVzID0gc3R5bGVkLmRpdmBcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBtYXJnaW46IDQwcHggMCAwIDQwcHg7XG5gO1xuXG5leHBvcnQgY29uc3QgUHJvZmlsZUltYWdlID0gc3R5bGVkLmltZ2BcbiAgbWF4LXdpZHRoOiAxMDBweDtcbiAgbWFyZ2luLXJpZ2h0OiA0MHB4O1xuYDtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/styles/AccountStyles.js\n");

/***/ }),

/***/ "./images/user-icon.png":
/*!******************************!*\
  !*** ./images/user-icon.png ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"/_next/static/images/user-icon-ae3a914be1e9f200b221df9bf3db8946.png\";//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9pbWFnZXMvdXNlci1pY29uLnBuZz9kYzFhIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6Ii4vaW1hZ2VzL3VzZXItaWNvbi5wbmcuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IFwiL19uZXh0L3N0YXRpYy9pbWFnZXMvdXNlci1pY29uLWFlM2E5MTRiZTFlOWYyMDBiMjIxZGY5YmYzZGI4OTQ2LnBuZ1wiOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./images/user-icon.png\n");

/***/ }),

/***/ "./pages/account.js":
/*!**************************!*\
  !*** ./pages/account.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return AccountPage; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_Account__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Account */ \"./components/Account.js\");\n\nvar _jsxFileName = \"/Users/colinmaretsky/dev/wes-bos/e-commerce-site/frontend/pages/account.js\";\n\nfunction AccountPage() {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_Account__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {}, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 4,\n    columnNumber: 10\n  }, this);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9hY2NvdW50LmpzPzcxZDYiXSwibmFtZXMiOlsiQWNjb3VudFBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTtBQUVlLFNBQVNBLFdBQVQsR0FBdUI7QUFDcEMsc0JBQU8scUVBQUMsMkRBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUFQO0FBQ0QiLCJmaWxlIjoiLi9wYWdlcy9hY2NvdW50LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEFjY291bnQgZnJvbSAnLi4vY29tcG9uZW50cy9BY2NvdW50JztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQWNjb3VudFBhZ2UoKSB7XG4gIHJldHVybiA8QWNjb3VudCAvPjtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/account.js\n");

/***/ }),

/***/ "@apollo/client":
/*!*********************************!*\
  !*** external "@apollo/client" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@apollo/client\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAYXBvbGxvL2NsaWVudFwiPzRjMmQiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoiQGFwb2xsby9jbGllbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAYXBvbGxvL2NsaWVudFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///@apollo/client\n");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react/jsx-dev-runtime\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIj9jZDkwIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InJlYWN0L2pzeC1kZXYtcnVudGltZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react/jsx-dev-runtime\n");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"styled-components\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzdHlsZWQtY29tcG9uZW50c1wiP2Y1YWQiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoic3R5bGVkLWNvbXBvbmVudHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzdHlsZWQtY29tcG9uZW50c1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///styled-components\n");

/***/ })

/******/ });