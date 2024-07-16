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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/client-side.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/ClientOnly.js":
/*!**********************************!*\
  !*** ./components/ClientOnly.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return ClientOnly; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _jsxFileName = \"/Users/GK47LX/source/JSStudies/NextJS/next-with-apollo-graphql/components/ClientOnly.js\";\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nfunction _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }\n\nfunction _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }\n\n\nfunction ClientOnly(_ref) {\n  let {\n    children\n  } = _ref,\n      delegated = _objectWithoutProperties(_ref, [\"children\"]);\n\n  const {\n    0: hasMounted,\n    1: setHasMounted\n  } = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(false);\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(() => {\n    setHasMounted(true);\n  }, []);\n\n  if (!hasMounted) {\n    return null;\n  }\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", _objectSpread(_objectSpread({}, delegated), {}, {\n    children: children\n  }), void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 14,\n    columnNumber: 9\n  }, this);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0NsaWVudE9ubHkuanM/YjkwOSJdLCJuYW1lcyI6WyJDbGllbnRPbmx5IiwiY2hpbGRyZW4iLCJkZWxlZ2F0ZWQiLCJoYXNNb3VudGVkIiwic2V0SGFzTW91bnRlZCIsInVzZVN0YXRlIiwidXNlRWZmZWN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFZSxTQUFTQSxVQUFULE9BQWdEO0FBQUEsTUFBNUI7QUFBRUM7QUFBRixHQUE0QjtBQUFBLE1BQWJDLFNBQWE7O0FBQzlELFFBQU07QUFBQSxPQUFDQyxVQUFEO0FBQUEsT0FBYUM7QUFBYixNQUE4QkMsc0RBQVEsQ0FBQyxLQUFELENBQTVDO0FBRUFDLHlEQUFTLENBQUMsTUFBTTtBQUNmRixpQkFBYSxDQUFDLElBQUQsQ0FBYjtBQUNBLEdBRlEsRUFFTixFQUZNLENBQVQ7O0FBSUEsTUFBSSxDQUFDRCxVQUFMLEVBQWlCO0FBQ2hCLFdBQU8sSUFBUDtBQUNBOztBQUVELHNCQUFPLDRHQUFTRCxTQUFUO0FBQUEsY0FBcUJEO0FBQXJCO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFBUDtBQUNBIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9DbGllbnRPbmx5LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDbGllbnRPbmx5KHsgY2hpbGRyZW4sIC4uLmRlbGVnYXRlZCB9KSB7XG5cdGNvbnN0IFtoYXNNb3VudGVkLCBzZXRIYXNNb3VudGVkXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuXHR1c2VFZmZlY3QoKCkgPT4ge1xuXHRcdHNldEhhc01vdW50ZWQodHJ1ZSk7XG5cdH0sIFtdKTtcblxuXHRpZiAoIWhhc01vdW50ZWQpIHtcblx0XHRyZXR1cm4gbnVsbDtcblx0fVxuXG5cdHJldHVybiA8ZGl2IHsuLi5kZWxlZ2F0ZWR9PntjaGlsZHJlbn08L2Rpdj47XG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/ClientOnly.js\n");

/***/ }),

/***/ "./components/Countries.js":
/*!*********************************!*\
  !*** ./components/Countries.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Countries; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @apollo/client */ \"@apollo/client\");\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/Home.module.css */ \"./styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _jsxFileName = \"/Users/GK47LX/source/JSStudies/NextJS/next-with-apollo-graphql/components/Countries.js\";\n\n\nconst QUERY = _apollo_client__WEBPACK_IMPORTED_MODULE_1__[\"gql\"]`\n\tquery Countries {\n\t\tcountries {\n\t\t\tcode\n\t\t\tname\n\t\t\temoji\n\t\t}\n\t}\n`;\nfunction Countries() {\n  const {\n    data,\n    loading,\n    error\n  } = Object(_apollo_client__WEBPACK_IMPORTED_MODULE_1__[\"useQuery\"])(QUERY);\n\n  if (loading) {\n    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h2\", {\n      children: \"Loading...\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 18,\n      columnNumber: 10\n    }, this);\n  }\n\n  if (error) {\n    console.error(error);\n    return null;\n  }\n\n  const countries = data.countries.slice(0, 8);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.grid,\n    children: countries.map(country => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.card,\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h3\", {\n        children: country.name\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 32,\n        columnNumber: 6\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n        children: [country.code, \" - \", country.emoji]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 33,\n        columnNumber: 6\n      }, this)]\n    }, country.code, true, {\n      fileName: _jsxFileName,\n      lineNumber: 31,\n      columnNumber: 5\n    }, this))\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 29,\n    columnNumber: 3\n  }, this);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0NvdW50cmllcy5qcz9jNGMyIl0sIm5hbWVzIjpbIlFVRVJZIiwiZ3FsIiwiQ291bnRyaWVzIiwiZGF0YSIsImxvYWRpbmciLCJlcnJvciIsInVzZVF1ZXJ5IiwiY29uc29sZSIsImNvdW50cmllcyIsInNsaWNlIiwic3R5bGVzIiwiZ3JpZCIsIm1hcCIsImNvdW50cnkiLCJjYXJkIiwibmFtZSIsImNvZGUiLCJlbW9qaSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQSxNQUFNQSxLQUFLLEdBQUdDLGtEQUFJO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FSQTtBQVVlLFNBQVNDLFNBQVQsR0FBcUI7QUFDbkMsUUFBTTtBQUFFQyxRQUFGO0FBQVFDLFdBQVI7QUFBaUJDO0FBQWpCLE1BQTJCQywrREFBUSxDQUFDTixLQUFELENBQXpDOztBQUVBLE1BQUlJLE9BQUosRUFBYTtBQUNaLHdCQUFPO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBQVA7QUFDQTs7QUFFRCxNQUFJQyxLQUFKLEVBQVc7QUFDVkUsV0FBTyxDQUFDRixLQUFSLENBQWNBLEtBQWQ7QUFDQSxXQUFPLElBQVA7QUFDQTs7QUFFRCxRQUFNRyxTQUFTLEdBQUdMLElBQUksQ0FBQ0ssU0FBTCxDQUFlQyxLQUFmLENBQXFCLENBQXJCLEVBQXdCLENBQXhCLENBQWxCO0FBRUEsc0JBQ0M7QUFBSyxhQUFTLEVBQUVDLDhEQUFNLENBQUNDLElBQXZCO0FBQUEsY0FDRUgsU0FBUyxDQUFDSSxHQUFWLENBQWVDLE9BQUQsaUJBQ2Q7QUFBd0IsZUFBUyxFQUFFSCw4REFBTSxDQUFDSSxJQUExQztBQUFBLDhCQUNDO0FBQUEsa0JBQUtELE9BQU8sQ0FBQ0U7QUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREQsZUFFQztBQUFBLG1CQUNFRixPQUFPLENBQUNHLElBRFYsU0FDbUJILE9BQU8sQ0FBQ0ksS0FEM0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRkQ7QUFBQSxPQUFVSixPQUFPLENBQUNHLElBQWxCO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFEQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERDtBQVlBIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9Db3VudHJpZXMuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VRdWVyeSwgZ3FsIH0gZnJvbSBcIkBhcG9sbG8vY2xpZW50XCI7XG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuLi9zdHlsZXMvSG9tZS5tb2R1bGUuY3NzXCI7XG5cbmNvbnN0IFFVRVJZID0gZ3FsYFxuXHRxdWVyeSBDb3VudHJpZXMge1xuXHRcdGNvdW50cmllcyB7XG5cdFx0XHRjb2RlXG5cdFx0XHRuYW1lXG5cdFx0XHRlbW9qaVxuXHRcdH1cblx0fVxuYDtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ291bnRyaWVzKCkge1xuXHRjb25zdCB7IGRhdGEsIGxvYWRpbmcsIGVycm9yIH0gPSB1c2VRdWVyeShRVUVSWSk7XG5cblx0aWYgKGxvYWRpbmcpIHtcblx0XHRyZXR1cm4gPGgyPkxvYWRpbmcuLi48L2gyPjtcblx0fVxuXG5cdGlmIChlcnJvcikge1xuXHRcdGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuXHRcdHJldHVybiBudWxsO1xuXHR9XG5cblx0Y29uc3QgY291bnRyaWVzID0gZGF0YS5jb3VudHJpZXMuc2xpY2UoMCwgOCk7XG5cblx0cmV0dXJuIChcblx0XHQ8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmdyaWR9PlxuXHRcdFx0e2NvdW50cmllcy5tYXAoKGNvdW50cnkpID0+IChcblx0XHRcdFx0PGRpdiBrZXk9e2NvdW50cnkuY29kZX0gY2xhc3NOYW1lPXtzdHlsZXMuY2FyZH0+XG5cdFx0XHRcdFx0PGgzPntjb3VudHJ5Lm5hbWV9PC9oMz5cblx0XHRcdFx0XHQ8cD5cblx0XHRcdFx0XHRcdHtjb3VudHJ5LmNvZGV9IC0ge2NvdW50cnkuZW1vaml9XG5cdFx0XHRcdFx0PC9wPlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdCkpfVxuXHRcdDwvZGl2PlxuXHQpO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Countries.js\n");

/***/ }),

/***/ "./pages/client-side.js":
/*!******************************!*\
  !*** ./pages/client-side.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return ClientSide; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/Home.module.css */ \"./styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_ClientOnly__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/ClientOnly */ \"./components/ClientOnly.js\");\n/* harmony import */ var _components_Countries__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Countries */ \"./components/Countries.js\");\n\nvar _jsxFileName = \"/Users/GK47LX/source/JSStudies/NextJS/next-with-apollo-graphql/pages/client-side.js\";\n\n\n\n\nfunction ClientSide() {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.container,\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"title\", {\n        children: \"Create Next App\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 10,\n        columnNumber: 5\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"link\", {\n        rel: \"icon\",\n        href: \"/favicon.ico\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 11,\n        columnNumber: 5\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 9,\n      columnNumber: 4\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"main\", {\n      className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.main,\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h1\", {\n        className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.title,\n        children: \"Fetch data while rendering page\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 15,\n        columnNumber: 4\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n        className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.underline,\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"a\", {\n          href: \"/\",\n          children: \"Statically generated page\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 19,\n          columnNumber: 6\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 18,\n        columnNumber: 5\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n        className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.underline,\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"a\", {\n          href: \"/server-side\",\n          children: \"Server-side rendered page\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 22,\n          columnNumber: 6\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 21,\n        columnNumber: 5\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_ClientOnly__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_Countries__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 26,\n          columnNumber: 6\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 25,\n        columnNumber: 5\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 14,\n      columnNumber: 4\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"footer\", {\n      className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.footer,\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"a\", {\n        href: \"https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app\",\n        target: \"_blank\",\n        rel: \"noopener noreferrer\",\n        children: [\"Powered by\", \" \", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n          src: \"/vercel.svg\",\n          alt: \"Vercel Logo\",\n          className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.logo\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 36,\n          columnNumber: 6\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 31,\n        columnNumber: 5\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 30,\n      columnNumber: 4\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 8,\n    columnNumber: 3\n  }, this);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9jbGllbnQtc2lkZS5qcz9iYjAwIl0sIm5hbWVzIjpbIkNsaWVudFNpZGUiLCJzdHlsZXMiLCJjb250YWluZXIiLCJtYWluIiwidGl0bGUiLCJ1bmRlcmxpbmUiLCJmb290ZXIiLCJsb2dvIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVlLFNBQVNBLFVBQVQsR0FBc0I7QUFDcEMsc0JBQ0M7QUFBSyxhQUFTLEVBQUVDLDhEQUFNLENBQUNDLFNBQXZCO0FBQUEsNEJBQ0MscUVBQUMsZ0RBQUQ7QUFBQSw4QkFDQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURELGVBRUM7QUFBTSxXQUFHLEVBQUMsTUFBVjtBQUFpQixZQUFJLEVBQUM7QUFBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUZEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURELGVBTUM7QUFBTSxlQUFTLEVBQUVELDhEQUFNLENBQUNFLElBQXhCO0FBQUEsOEJBQ0E7QUFBSSxpQkFBUyxFQUFFRiw4REFBTSxDQUFDRyxLQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURBLGVBSUM7QUFBRyxpQkFBUyxFQUFFSCw4REFBTSxDQUFDSSxTQUFyQjtBQUFBLCtCQUNDO0FBQUcsY0FBSSxFQUFDLEdBQVI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERDtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBSkQsZUFPQztBQUFHLGlCQUFTLEVBQUVKLDhEQUFNLENBQUNJLFNBQXJCO0FBQUEsK0JBQ0M7QUFBRyxjQUFJLEVBQUMsY0FBUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUREO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FQRCxlQVdDLHFFQUFDLDhEQUFEO0FBQUEsK0JBQ0MscUVBQUMsNkRBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUREO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FYRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFORCxlQXNCQztBQUFRLGVBQVMsRUFBRUosOERBQU0sQ0FBQ0ssTUFBMUI7QUFBQSw2QkFDQztBQUNDLFlBQUksRUFBQyx3R0FETjtBQUVDLGNBQU0sRUFBQyxRQUZSO0FBR0MsV0FBRyxFQUFDLHFCQUhMO0FBQUEsaUNBSVksR0FKWixlQUtDO0FBQ0MsYUFBRyxFQUFDLGFBREw7QUFFQyxhQUFHLEVBQUMsYUFGTDtBQUdDLG1CQUFTLEVBQUVMLDhEQUFNLENBQUNNO0FBSG5CO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBTEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQXRCRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERDtBQXNDQSIsImZpbGUiOiIuL3BhZ2VzL2NsaWVudC1zaWRlLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vc3R5bGVzL0hvbWUubW9kdWxlLmNzc1wiO1xuaW1wb3J0IENsaWVudE9ubHkgZnJvbSBcIi4uL2NvbXBvbmVudHMvQ2xpZW50T25seVwiO1xuaW1wb3J0IENvdW50cmllcyBmcm9tIFwiLi4vY29tcG9uZW50cy9Db3VudHJpZXNcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ2xpZW50U2lkZSgpIHtcblx0cmV0dXJuIChcblx0XHQ8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XG5cdFx0XHQ8SGVhZD5cblx0XHRcdFx0PHRpdGxlPkNyZWF0ZSBOZXh0IEFwcDwvdGl0bGU+XG5cdFx0XHRcdDxsaW5rIHJlbD1cImljb25cIiBocmVmPVwiL2Zhdmljb24uaWNvXCIgLz5cblx0XHRcdDwvSGVhZD5cblxuXHRcdFx0PG1haW4gY2xhc3NOYW1lPXtzdHlsZXMubWFpbn0+XG5cdFx0XHQ8aDEgY2xhc3NOYW1lPXtzdHlsZXMudGl0bGV9PlxuXHRcdFx0RmV0Y2ggZGF0YSB3aGlsZSByZW5kZXJpbmcgcGFnZVxuXHRcdFx0XHQ8L2gxPlxuXHRcdFx0XHQ8cCBjbGFzc05hbWU9e3N0eWxlcy51bmRlcmxpbmV9PlxuXHRcdFx0XHRcdDxhIGhyZWY9XCIvXCI+U3RhdGljYWxseSBnZW5lcmF0ZWQgcGFnZTwvYT5cblx0XHRcdFx0PC9wPlxuXHRcdFx0XHQ8cCBjbGFzc05hbWU9e3N0eWxlcy51bmRlcmxpbmV9PlxuXHRcdFx0XHRcdDxhIGhyZWY9XCIvc2VydmVyLXNpZGVcIj5TZXJ2ZXItc2lkZSByZW5kZXJlZCBwYWdlPC9hPlxuXHRcdFx0XHQ8L3A+XG5cblx0XHRcdFx0PENsaWVudE9ubHk+XG5cdFx0XHRcdFx0PENvdW50cmllcyAvPlxuXHRcdFx0XHQ8L0NsaWVudE9ubHk+XG5cdFx0XHQ8L21haW4+XG5cblx0XHRcdDxmb290ZXIgY2xhc3NOYW1lPXtzdHlsZXMuZm9vdGVyfT5cblx0XHRcdFx0PGFcblx0XHRcdFx0XHRocmVmPVwiaHR0cHM6Ly92ZXJjZWwuY29tP3V0bV9zb3VyY2U9Y3JlYXRlLW5leHQtYXBwJnV0bV9tZWRpdW09ZGVmYXVsdC10ZW1wbGF0ZSZ1dG1fY2FtcGFpZ249Y3JlYXRlLW5leHQtYXBwXCJcblx0XHRcdFx0XHR0YXJnZXQ9XCJfYmxhbmtcIlxuXHRcdFx0XHRcdHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIj5cblx0XHRcdFx0XHRQb3dlcmVkIGJ5e1wiIFwifVxuXHRcdFx0XHRcdDxpbWdcblx0XHRcdFx0XHRcdHNyYz1cIi92ZXJjZWwuc3ZnXCJcblx0XHRcdFx0XHRcdGFsdD1cIlZlcmNlbCBMb2dvXCJcblx0XHRcdFx0XHRcdGNsYXNzTmFtZT17c3R5bGVzLmxvZ299XG5cdFx0XHRcdFx0Lz5cblx0XHRcdFx0PC9hPlxuXHRcdFx0PC9mb290ZXI+XG5cdFx0PC9kaXY+XG5cdCk7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/client-side.js\n");

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

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

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