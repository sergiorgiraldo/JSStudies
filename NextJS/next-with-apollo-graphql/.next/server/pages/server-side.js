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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/server-side.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./apollo-client.js":
/*!**************************!*\
  !*** ./apollo-client.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @apollo/client */ \"@apollo/client\");\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_0__);\n\nconst client = new _apollo_client__WEBPACK_IMPORTED_MODULE_0__[\"ApolloClient\"]({\n  uri: \"https://countries.trevorblades.com\",\n  cache: new _apollo_client__WEBPACK_IMPORTED_MODULE_0__[\"InMemoryCache\"]()\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (client);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcG9sbG8tY2xpZW50LmpzPzIzZDgiXSwibmFtZXMiOlsiY2xpZW50IiwiQXBvbGxvQ2xpZW50IiwidXJpIiwiY2FjaGUiLCJJbk1lbW9yeUNhY2hlIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBLE1BQU1BLE1BQU0sR0FBRyxJQUFJQywyREFBSixDQUFpQjtBQUMvQkMsS0FBRyxFQUFFLG9DQUQwQjtBQUUvQkMsT0FBSyxFQUFFLElBQUlDLDREQUFKO0FBRndCLENBQWpCLENBQWY7QUFLZUoscUVBQWYiLCJmaWxlIjoiLi9hcG9sbG8tY2xpZW50LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQXBvbGxvQ2xpZW50LCBJbk1lbW9yeUNhY2hlIH0gZnJvbSBcIkBhcG9sbG8vY2xpZW50XCI7XG5cbmNvbnN0IGNsaWVudCA9IG5ldyBBcG9sbG9DbGllbnQoe1xuXHR1cmk6IFwiaHR0cHM6Ly9jb3VudHJpZXMudHJldm9yYmxhZGVzLmNvbVwiLFxuXHRjYWNoZTogbmV3IEluTWVtb3J5Q2FjaGUoKVxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IGNsaWVudDtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./apollo-client.js\n");

/***/ }),

/***/ "./pages/server-side.js":
/*!******************************!*\
  !*** ./pages/server-side.js ***!
  \******************************/
/*! exports provided: default, getServerSideProps */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Home; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getServerSideProps\", function() { return getServerSideProps; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/Home.module.css */ \"./styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @apollo/client */ \"@apollo/client\");\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../apollo-client */ \"./apollo-client.js\");\n\nvar _jsxFileName = \"/Users/GK47LX/source/JSStudies/NextJS/next-with-apollo-graphql/pages/server-side.js\";\n\n\n\n\nfunction Home({\n  countries\n}) {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.container,\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"title\", {\n        children: \"Create Next App\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 10,\n        columnNumber: 5\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"link\", {\n        rel: \"icon\",\n        href: \"/favicon.ico\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 11,\n        columnNumber: 5\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 9,\n      columnNumber: 4\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"main\", {\n      className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.main,\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h1\", {\n        className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.title,\n        children: \"Server-side rendered page\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 15,\n        columnNumber: 5\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n        className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.underline,\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"a\", {\n          href: \"/\",\n          children: \"Statically generated page\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 19,\n          columnNumber: 6\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 18,\n        columnNumber: 5\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n        className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.underline,\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"a\", {\n          href: \"/client-side\",\n          children: \"Fetch data while rendering page\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 22,\n          columnNumber: 6\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 21,\n        columnNumber: 5\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.grid,\n        children: countries.map(country => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.card,\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h3\", {\n            children: country.name\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 29,\n            columnNumber: 8\n          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n            children: [country.code, \" - \", country.emoji]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 30,\n            columnNumber: 8\n          }, this)]\n        }, country.code, true, {\n          fileName: _jsxFileName,\n          lineNumber: 28,\n          columnNumber: 7\n        }, this))\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 26,\n        columnNumber: 5\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 14,\n      columnNumber: 4\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"footer\", {\n      className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.footer,\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"a\", {\n        href: \"https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app\",\n        target: \"_blank\",\n        rel: \"noopener noreferrer\",\n        children: [\"Powered by\", \" \", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n          src: \"/vercel.svg\",\n          alt: \"Vercel Logo\",\n          className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.logo\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 44,\n          columnNumber: 6\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 39,\n        columnNumber: 5\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 38,\n      columnNumber: 4\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 8,\n    columnNumber: 3\n  }, this);\n}\nasync function getServerSideProps() {\n  const {\n    data\n  } = await _apollo_client__WEBPACK_IMPORTED_MODULE_4__[\"default\"].query({\n    query: _apollo_client__WEBPACK_IMPORTED_MODULE_3__[\"gql\"]`\n\t\t\tquery Countries {\n\t\t\t\tcountries {\n\t\t\t\t\tcode\n\t\t\t\t\tname\n\t\t\t\t\temoji\n\t\t\t\t}\n\t\t\t}\n\t\t`\n  });\n  return {\n    props: {\n      countries: data.countries.slice(0, 4)\n    }\n  };\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9zZXJ2ZXItc2lkZS5qcz9kYjAwIl0sIm5hbWVzIjpbIkhvbWUiLCJjb3VudHJpZXMiLCJzdHlsZXMiLCJjb250YWluZXIiLCJtYWluIiwidGl0bGUiLCJ1bmRlcmxpbmUiLCJncmlkIiwibWFwIiwiY291bnRyeSIsImNhcmQiLCJuYW1lIiwiY29kZSIsImVtb2ppIiwiZm9vdGVyIiwibG9nbyIsImdldFNlcnZlclNpZGVQcm9wcyIsImRhdGEiLCJjbGllbnQiLCJxdWVyeSIsImdxbCIsInByb3BzIiwic2xpY2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFZSxTQUFTQSxJQUFULENBQWM7QUFBRUM7QUFBRixDQUFkLEVBQTZCO0FBQzNDLHNCQUNDO0FBQUssYUFBUyxFQUFFQyw4REFBTSxDQUFDQyxTQUF2QjtBQUFBLDRCQUNDLHFFQUFDLGdEQUFEO0FBQUEsOEJBQ0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERCxlQUVDO0FBQU0sV0FBRyxFQUFDLE1BQVY7QUFBaUIsWUFBSSxFQUFDO0FBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FGRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERCxlQU1DO0FBQU0sZUFBUyxFQUFFRCw4REFBTSxDQUFDRSxJQUF4QjtBQUFBLDhCQUNDO0FBQUksaUJBQVMsRUFBRUYsOERBQU0sQ0FBQ0csS0FBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERCxlQUlDO0FBQUcsaUJBQVMsRUFBRUgsOERBQU0sQ0FBQ0ksU0FBckI7QUFBQSwrQkFDQztBQUFHLGNBQUksRUFBQyxHQUFSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUpELGVBT0M7QUFBRyxpQkFBUyxFQUFFSiw4REFBTSxDQUFDSSxTQUFyQjtBQUFBLCtCQUNDO0FBQUcsY0FBSSxFQUFDLGNBQVI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERDtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBUEQsZUFZQztBQUFLLGlCQUFTLEVBQUVKLDhEQUFNLENBQUNLLElBQXZCO0FBQUEsa0JBQ0VOLFNBQVMsQ0FBQ08sR0FBVixDQUFlQyxPQUFELGlCQUNkO0FBQXdCLG1CQUFTLEVBQUVQLDhEQUFNLENBQUNRLElBQTFDO0FBQUEsa0NBQ0M7QUFBQSxzQkFBS0QsT0FBTyxDQUFDRTtBQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBREQsZUFFQztBQUFBLHVCQUNFRixPQUFPLENBQUNHLElBRFYsU0FDbUJILE9BQU8sQ0FBQ0ksS0FEM0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUZEO0FBQUEsV0FBVUosT0FBTyxDQUFDRyxJQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQVpEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQU5ELGVBOEJDO0FBQVEsZUFBUyxFQUFFViw4REFBTSxDQUFDWSxNQUExQjtBQUFBLDZCQUNDO0FBQ0MsWUFBSSxFQUFDLHdHQUROO0FBRUMsY0FBTSxFQUFDLFFBRlI7QUFHQyxXQUFHLEVBQUMscUJBSEw7QUFBQSxpQ0FJWSxHQUpaLGVBS0M7QUFDQyxhQUFHLEVBQUMsYUFETDtBQUVDLGFBQUcsRUFBQyxhQUZMO0FBR0MsbUJBQVMsRUFBRVosOERBQU0sQ0FBQ2E7QUFIbkI7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFMRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBOUJEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUREO0FBOENBO0FBRU0sZUFBZUMsa0JBQWYsR0FBb0M7QUFDMUMsUUFBTTtBQUFFQztBQUFGLE1BQVcsTUFBTUMsc0RBQU0sQ0FBQ0MsS0FBUCxDQUFhO0FBQ25DQSxTQUFLLEVBQUVDLGtEQUFJO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVRxQyxHQUFiLENBQXZCO0FBWUEsU0FBTztBQUNOQyxTQUFLLEVBQUU7QUFDTnBCLGVBQVMsRUFBRWdCLElBQUksQ0FBQ2hCLFNBQUwsQ0FBZXFCLEtBQWYsQ0FBcUIsQ0FBckIsRUFBd0IsQ0FBeEI7QUFETDtBQURELEdBQVA7QUFLQSIsImZpbGUiOiIuL3BhZ2VzL3NlcnZlci1zaWRlLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vc3R5bGVzL0hvbWUubW9kdWxlLmNzc1wiO1xuaW1wb3J0IHsgZ3FsIH0gZnJvbSBcIkBhcG9sbG8vY2xpZW50XCI7XG5pbXBvcnQgY2xpZW50IGZyb20gXCIuLi9hcG9sbG8tY2xpZW50XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoeyBjb3VudHJpZXMgfSkge1xuXHRyZXR1cm4gKFxuXHRcdDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cblx0XHRcdDxIZWFkPlxuXHRcdFx0XHQ8dGl0bGU+Q3JlYXRlIE5leHQgQXBwPC90aXRsZT5cblx0XHRcdFx0PGxpbmsgcmVsPVwiaWNvblwiIGhyZWY9XCIvZmF2aWNvbi5pY29cIiAvPlxuXHRcdFx0PC9IZWFkPlxuXG5cdFx0XHQ8bWFpbiBjbGFzc05hbWU9e3N0eWxlcy5tYWlufT5cblx0XHRcdFx0PGgxIGNsYXNzTmFtZT17c3R5bGVzLnRpdGxlfT5cblx0XHRcdFx0U2VydmVyLXNpZGUgcmVuZGVyZWQgcGFnZVxuXHRcdFx0XHQ8L2gxPlxuXHRcdFx0XHQ8cCBjbGFzc05hbWU9e3N0eWxlcy51bmRlcmxpbmV9PlxuXHRcdFx0XHRcdDxhIGhyZWY9XCIvXCI+U3RhdGljYWxseSBnZW5lcmF0ZWQgcGFnZTwvYT5cblx0XHRcdFx0PC9wPlxuXHRcdFx0XHQ8cCBjbGFzc05hbWU9e3N0eWxlcy51bmRlcmxpbmV9PlxuXHRcdFx0XHRcdDxhIGhyZWY9XCIvY2xpZW50LXNpZGVcIj5GZXRjaCBkYXRhIHdoaWxlIHJlbmRlcmluZyBwYWdlPC9hPlxuXHRcdFx0XHQ8L3A+XG5cblxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmdyaWR9PlxuXHRcdFx0XHRcdHtjb3VudHJpZXMubWFwKChjb3VudHJ5KSA9PiAoXG5cdFx0XHRcdFx0XHQ8ZGl2IGtleT17Y291bnRyeS5jb2RlfSBjbGFzc05hbWU9e3N0eWxlcy5jYXJkfT5cblx0XHRcdFx0XHRcdFx0PGgzPntjb3VudHJ5Lm5hbWV9PC9oMz5cblx0XHRcdFx0XHRcdFx0PHA+XG5cdFx0XHRcdFx0XHRcdFx0e2NvdW50cnkuY29kZX0gLSB7Y291bnRyeS5lbW9qaX1cblx0XHRcdFx0XHRcdFx0PC9wPlxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0KSl9XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0PC9tYWluPlxuXG5cdFx0XHQ8Zm9vdGVyIGNsYXNzTmFtZT17c3R5bGVzLmZvb3Rlcn0+XG5cdFx0XHRcdDxhXG5cdFx0XHRcdFx0aHJlZj1cImh0dHBzOi8vdmVyY2VsLmNvbT91dG1fc291cmNlPWNyZWF0ZS1uZXh0LWFwcCZ1dG1fbWVkaXVtPWRlZmF1bHQtdGVtcGxhdGUmdXRtX2NhbXBhaWduPWNyZWF0ZS1uZXh0LWFwcFwiXG5cdFx0XHRcdFx0dGFyZ2V0PVwiX2JsYW5rXCJcblx0XHRcdFx0XHRyZWw9XCJub29wZW5lciBub3JlZmVycmVyXCI+XG5cdFx0XHRcdFx0UG93ZXJlZCBieXtcIiBcIn1cblx0XHRcdFx0XHQ8aW1nXG5cdFx0XHRcdFx0XHRzcmM9XCIvdmVyY2VsLnN2Z1wiXG5cdFx0XHRcdFx0XHRhbHQ9XCJWZXJjZWwgTG9nb1wiXG5cdFx0XHRcdFx0XHRjbGFzc05hbWU9e3N0eWxlcy5sb2dvfVxuXHRcdFx0XHRcdC8+XG5cdFx0XHRcdDwvYT5cblx0XHRcdDwvZm9vdGVyPlxuXHRcdDwvZGl2PlxuXHQpO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U2VydmVyU2lkZVByb3BzKCkge1xuXHRjb25zdCB7IGRhdGEgfSA9IGF3YWl0IGNsaWVudC5xdWVyeSh7XG5cdFx0cXVlcnk6IGdxbGBcblx0XHRcdHF1ZXJ5IENvdW50cmllcyB7XG5cdFx0XHRcdGNvdW50cmllcyB7XG5cdFx0XHRcdFx0Y29kZVxuXHRcdFx0XHRcdG5hbWVcblx0XHRcdFx0XHRlbW9qaVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0YFxuXHR9KTtcblxuXHRyZXR1cm4ge1xuXHRcdHByb3BzOiB7XG5cdFx0XHRjb3VudHJpZXM6IGRhdGEuY291bnRyaWVzLnNsaWNlKDAsIDQpXG5cdFx0fVxuXHR9O1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/server-side.js\n");

/***/ }),

/***/ "./styles/Home.module.css":
/*!********************************!*\
  !*** ./styles/Home.module.css ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"container\": \"Home_container__1EcsU\",\n\t\"underline\": \"Home_underline__2vENC\",\n\t\"main\": \"Home_main__1x8gC\",\n\t\"footer\": \"Home_footer__1WdhD\",\n\t\"title\": \"Home_title__3DjR7\",\n\t\"description\": \"Home_description__17Z4F\",\n\t\"code\": \"Home_code__axx2Y\",\n\t\"grid\": \"Home_grid__2Ei2F\",\n\t\"card\": \"Home_card__2SdtB\",\n\t\"logo\": \"Home_logo__1YbrH\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zdHlsZXMvSG9tZS5tb2R1bGUuY3NzP2M1NzkiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiLi9zdHlsZXMvSG9tZS5tb2R1bGUuY3NzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiY29udGFpbmVyXCI6IFwiSG9tZV9jb250YWluZXJfXzFFY3NVXCIsXG5cdFwidW5kZXJsaW5lXCI6IFwiSG9tZV91bmRlcmxpbmVfXzJ2RU5DXCIsXG5cdFwibWFpblwiOiBcIkhvbWVfbWFpbl9fMXg4Z0NcIixcblx0XCJmb290ZXJcIjogXCJIb21lX2Zvb3Rlcl9fMVdkaERcIixcblx0XCJ0aXRsZVwiOiBcIkhvbWVfdGl0bGVfXzNEalI3XCIsXG5cdFwiZGVzY3JpcHRpb25cIjogXCJIb21lX2Rlc2NyaXB0aW9uX18xN1o0RlwiLFxuXHRcImNvZGVcIjogXCJIb21lX2NvZGVfX2F4eDJZXCIsXG5cdFwiZ3JpZFwiOiBcIkhvbWVfZ3JpZF9fMkVpMkZcIixcblx0XCJjYXJkXCI6IFwiSG9tZV9jYXJkX18yU2R0QlwiLFxuXHRcImxvZ29cIjogXCJIb21lX2xvZ29fXzFZYnJIXCJcbn07XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./styles/Home.module.css\n");

/***/ }),

/***/ "@apollo/client":
/*!*********************************!*\
  !*** external "@apollo/client" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@apollo/client\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAYXBvbGxvL2NsaWVudFwiPzRjMmQiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoiQGFwb2xsby9jbGllbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAYXBvbGxvL2NsaWVudFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///@apollo/client\n");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next/head\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIj81ZWYyIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6Im5leHQvaGVhZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///next/head\n");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react/jsx-dev-runtime\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIj9jZDkwIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InJlYWN0L2pzeC1kZXYtcnVudGltZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react/jsx-dev-runtime\n");

/***/ })

/******/ });