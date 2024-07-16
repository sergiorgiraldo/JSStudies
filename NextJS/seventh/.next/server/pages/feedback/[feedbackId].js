module.exports = /******/ (function (modules) {
	// webpackBootstrap
	/******/ // The module cache
	/******/ var installedModules = require("../../ssr-module-cache.js");
	/******/
	/******/ // The require function
	/******/ function __webpack_require__(moduleId) {
		/******/
		/******/ // Check if module is in cache
		/******/ if (installedModules[moduleId]) {
			/******/ return installedModules[moduleId].exports;
			/******/
		}
		/******/ // Create a new module (and put it into the cache)
		/******/ var module = (installedModules[moduleId] = {
			/******/ i: moduleId,
			/******/ l: false,
			/******/ exports: {},
			/******/
		});
		/******/
		/******/ // Execute the module function
		/******/ var threw = true;
		/******/ try {
			/******/ modules[moduleId].call(
				module.exports,
				module,
				module.exports,
				__webpack_require__
			);
			/******/ threw = false;
			/******/
		} finally {
			/******/ if (threw) delete installedModules[moduleId];
			/******/
		}
		/******/
		/******/ // Flag the module as loaded
		/******/ module.l = true;
		/******/
		/******/ // Return the exports of the module
		/******/ return module.exports;
		/******/
	}
	/******/
	/******/
	/******/ // expose the modules object (__webpack_modules__)
	/******/ __webpack_require__.m = modules;
	/******/
	/******/ // expose the module cache
	/******/ __webpack_require__.c = installedModules;
	/******/
	/******/ // define getter function for harmony exports
	/******/ __webpack_require__.d = function (exports, name, getter) {
		/******/ if (!__webpack_require__.o(exports, name)) {
			/******/ Object.defineProperty(exports, name, {
				enumerable: true,
				get: getter,
			});
			/******/
		}
		/******/
	};
	/******/
	/******/ // define __esModule on exports
	/******/ __webpack_require__.r = function (exports) {
		/******/ if (typeof Symbol !== "undefined" && Symbol.toStringTag) {
			/******/ Object.defineProperty(exports, Symbol.toStringTag, {
				value: "Module",
			});
			/******/
		}
		/******/ Object.defineProperty(exports, "__esModule", { value: true });
		/******/
	};
	/******/
	/******/ // create a fake namespace object
	/******/ // mode & 1: value is a module id, require it
	/******/ // mode & 2: merge all properties of value into the ns
	/******/ // mode & 4: return value when already ns object
	/******/ // mode & 8|1: behave like require
	/******/ __webpack_require__.t = function (value, mode) {
		/******/ if (mode & 1) value = __webpack_require__(value);
		/******/ if (mode & 8) return value;
		/******/ if (
			mode & 4 &&
			typeof value === "object" &&
			value &&
			value.__esModule
		)
			return value;
		/******/ var ns = Object.create(null);
		/******/ __webpack_require__.r(ns);
		/******/ Object.defineProperty(ns, "default", {
			enumerable: true,
			value: value,
		});
		/******/ if (mode & 2 && typeof value != "string")
			for (var key in value)
				__webpack_require__.d(
					ns,
					key,
					function (key) {
						return value[key];
					}.bind(null, key)
				);
		/******/ return ns;
		/******/
	};
	/******/
	/******/ // getDefaultExport function for compatibility with non-harmony modules
	/******/ __webpack_require__.n = function (module) {
		/******/ var getter =
			module && module.__esModule
				? /******/ function getDefault() {
						return module["default"];
				  }
				: /******/ function getModuleExports() {
						return module;
				  };
		/******/ __webpack_require__.d(getter, "a", getter);
		/******/ return getter;
		/******/
	};
	/******/
	/******/ // Object.prototype.hasOwnProperty.call
	/******/ __webpack_require__.o = function (object, property) {
		return Object.prototype.hasOwnProperty.call(object, property);
	};
	/******/
	/******/ // __webpack_public_path__
	/******/ __webpack_require__.p = "";
	/******/
	/******/
	/******/ // Load entry module and return exports
	/******/ return __webpack_require__(
		(__webpack_require__.s = "./pages/feedback/[feedbackId].js")
	);
	/******/
})(
	/************************************************************************/
	/******/ {
		/***/ "./pages/api/feedback/helpers.js":
			/*!***************************************!*\
  !*** ./pages/api/feedback/helpers.js ***!
  \***************************************/
			/*! exports provided: getAllFeedback, getFeedbackById */
			/***/ function (module, __webpack_exports__, __webpack_require__) {
				"use strict";
				eval(
					'__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAllFeedback", function() { return getAllFeedback; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFeedbackById", function() { return getFeedbackById; });\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fs */ "fs");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! path */ "path");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\nfunction getFeedbackFilePath() {\n  return path__WEBPACK_IMPORTED_MODULE_1___default.a.join(process.cwd(), "data", "feedback.json");\n}\n\nfunction getAllFeedback() {\n  const filePath = getFeedbackFilePath();\n  const fileData = fs__WEBPACK_IMPORTED_MODULE_0___default.a.readFileSync(filePath);\n  return JSON.parse(fileData);\n}\nfunction getFeedbackById(id) {\n  const data = getAllFeedback();\n  const feedback = data.filter(f => f.id == id);\n  return feedback[0];\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9hcGkvZmVlZGJhY2svaGVscGVycy5qcz8zZTFjIl0sIm5hbWVzIjpbImdldEZlZWRiYWNrRmlsZVBhdGgiLCJwYXRoIiwiam9pbiIsInByb2Nlc3MiLCJjd2QiLCJnZXRBbGxGZWVkYmFjayIsImZpbGVQYXRoIiwiZmlsZURhdGEiLCJmcyIsInJlYWRGaWxlU3luYyIsIkpTT04iLCJwYXJzZSIsImdldEZlZWRiYWNrQnlJZCIsImlkIiwiZGF0YSIsImZlZWRiYWNrIiwiZmlsdGVyIiwiZiJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBOztBQUVBLFNBQVNBLG1CQUFULEdBQStCO0FBQzlCLFNBQU9DLDJDQUFJLENBQUNDLElBQUwsQ0FBVUMsT0FBTyxDQUFDQyxHQUFSLEVBQVYsRUFBeUIsTUFBekIsRUFBaUMsZUFBakMsQ0FBUDtBQUNBOztBQUVNLFNBQVNDLGNBQVQsR0FBMEI7QUFDaEMsUUFBTUMsUUFBUSxHQUFHTixtQkFBbUIsRUFBcEM7QUFDQSxRQUFNTyxRQUFRLEdBQUdDLHlDQUFFLENBQUNDLFlBQUgsQ0FBZ0JILFFBQWhCLENBQWpCO0FBQ0EsU0FBT0ksSUFBSSxDQUFDQyxLQUFMLENBQVdKLFFBQVgsQ0FBUDtBQUNBO0FBRU0sU0FBU0ssZUFBVCxDQUF5QkMsRUFBekIsRUFBNkI7QUFDbkMsUUFBTUMsSUFBSSxHQUFHVCxjQUFjLEVBQTNCO0FBQ0EsUUFBTVUsUUFBUSxHQUFHRCxJQUFJLENBQUNFLE1BQUwsQ0FBYUMsQ0FBRCxJQUFPQSxDQUFDLENBQUNKLEVBQUYsSUFBUUEsRUFBM0IsQ0FBakI7QUFDQSxTQUFPRSxRQUFRLENBQUMsQ0FBRCxDQUFmO0FBQ0EiLCJmaWxlIjoiLi9wYWdlcy9hcGkvZmVlZGJhY2svaGVscGVycy5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBmcyBmcm9tIFwiZnNcIjtcbmltcG9ydCBwYXRoIGZyb20gXCJwYXRoXCI7XG5cbmZ1bmN0aW9uIGdldEZlZWRiYWNrRmlsZVBhdGgoKSB7XG5cdHJldHVybiBwYXRoLmpvaW4ocHJvY2Vzcy5jd2QoKSwgXCJkYXRhXCIsIFwiZmVlZGJhY2suanNvblwiKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldEFsbEZlZWRiYWNrKCkge1xuXHRjb25zdCBmaWxlUGF0aCA9IGdldEZlZWRiYWNrRmlsZVBhdGgoKTtcblx0Y29uc3QgZmlsZURhdGEgPSBmcy5yZWFkRmlsZVN5bmMoZmlsZVBhdGgpO1xuXHRyZXR1cm4gSlNPTi5wYXJzZShmaWxlRGF0YSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRGZWVkYmFja0J5SWQoaWQpIHtcblx0Y29uc3QgZGF0YSA9IGdldEFsbEZlZWRiYWNrKCk7XG5cdGNvbnN0IGZlZWRiYWNrID0gZGF0YS5maWx0ZXIoKGYpID0+IGYuaWQgPT0gaWQpO1xuXHRyZXR1cm4gZmVlZGJhY2tbMF07XG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/api/feedback/helpers.js\n'
				);

				/***/
			},

		/***/ "./pages/feedback/[feedbackId].js":
			/*!****************************************!*\
  !*** ./pages/feedback/[feedbackId].js ***!
  \****************************************/
			/*! exports provided: getStaticProps, getStaticPaths, default */
			/***/ function (module, __webpack_exports__, __webpack_require__) {
				"use strict";
				eval(
					'__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStaticProps", function() { return getStaticProps; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStaticPaths", function() { return getStaticPaths; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _api_feedback_helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../api/feedback/helpers */ "./pages/api/feedback/helpers.js");\n\nvar _jsxFileName = "/Users/GK47LX/source/JSStudies/NextJS/seventh/pages/feedback/[feedbackId].js";\n\n\nfunction FeedbackIdPage(props) {\n  const feedback = props.feedback;\n\n  if (!feedback) {\n    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {\n      className: "center",\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {\n        children: "Loading..."\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 9,\n        columnNumber: 5\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 8,\n      columnNumber: 4\n    }, this);\n  }\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {\n      children: "Feedback"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 16,\n      columnNumber: 4\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {\n      children: "Id"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 17,\n      columnNumber: 4\n    }, this), " ", feedback.id, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {\n      children: "Email"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 18,\n      columnNumber: 4\n    }, this), " ", feedback.email, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {\n      children: "Text"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 19,\n      columnNumber: 4\n    }, this), " ", feedback.text]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 15,\n    columnNumber: 3\n  }, this);\n}\n\nasync function getStaticProps(context) {\n  const feedbackId = context.params.feedbackId;\n  const feedback = await Object(_api_feedback_helpers__WEBPACK_IMPORTED_MODULE_1__["getFeedbackById"])(feedbackId);\n  return {\n    props: {\n      feedback: feedback\n    }\n  };\n}\nasync function getStaticPaths() {\n  const feedbacks = await Object(_api_feedback_helpers__WEBPACK_IMPORTED_MODULE_1__["getAllFeedback"])();\n  const ids = feedbacks.map(feedback => ({\n    params: {\n      feedbackId: feedback.id\n    }\n  }));\n  return {\n    paths: ids,\n    fallback: true\n  };\n}\n/* harmony default export */ __webpack_exports__["default"] = (FeedbackIdPage);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9mZWVkYmFjay9bZmVlZGJhY2tJZF0uanM/NmU5MCJdLCJuYW1lcyI6WyJGZWVkYmFja0lkUGFnZSIsInByb3BzIiwiZmVlZGJhY2siLCJpZCIsImVtYWlsIiwidGV4dCIsImdldFN0YXRpY1Byb3BzIiwiY29udGV4dCIsImZlZWRiYWNrSWQiLCJwYXJhbXMiLCJnZXRGZWVkYmFja0J5SWQiLCJnZXRTdGF0aWNQYXRocyIsImZlZWRiYWNrcyIsImdldEFsbEZlZWRiYWNrIiwiaWRzIiwibWFwIiwicGF0aHMiLCJmYWxsYmFjayJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7QUFFQSxTQUFTQSxjQUFULENBQXdCQyxLQUF4QixFQUErQjtBQUM5QixRQUFNQyxRQUFRLEdBQUdELEtBQUssQ0FBQ0MsUUFBdkI7O0FBRUEsTUFBSSxDQUFDQSxRQUFMLEVBQWU7QUFDZCx3QkFDQztBQUFLLGVBQVMsRUFBQyxRQUFmO0FBQUEsNkJBQ0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREQ7QUFLQTs7QUFFRCxzQkFDQztBQUFBLDRCQUNDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREQsZUFFQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUZELE9BRWNBLFFBQVEsQ0FBQ0MsRUFGdkIsZUFHQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUhELE9BR2lCRCxRQUFRLENBQUNFLEtBSDFCLGVBSUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFKRCxPQUlnQkYsUUFBUSxDQUFDRyxJQUp6QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERDtBQVFBOztBQUVNLGVBQWVDLGNBQWYsQ0FBOEJDLE9BQTlCLEVBQXVDO0FBQzdDLFFBQU1DLFVBQVUsR0FBR0QsT0FBTyxDQUFDRSxNQUFSLENBQWVELFVBQWxDO0FBQ0EsUUFBTU4sUUFBUSxHQUFHLE1BQU1RLDZFQUFlLENBQUNGLFVBQUQsQ0FBdEM7QUFFQSxTQUFPO0FBQ05QLFNBQUssRUFBRTtBQUNOQyxjQUFRLEVBQUVBO0FBREo7QUFERCxHQUFQO0FBS0E7QUFFTSxlQUFlUyxjQUFmLEdBQWdDO0FBQ3RDLFFBQU1DLFNBQVMsR0FBRyxNQUFNQyw0RUFBYyxFQUF0QztBQUVBLFFBQU1DLEdBQUcsR0FBR0YsU0FBUyxDQUFDRyxHQUFWLENBQWViLFFBQUQsS0FBZTtBQUN4Q08sVUFBTSxFQUFFO0FBQUVELGdCQUFVLEVBQUVOLFFBQVEsQ0FBQ0M7QUFBdkI7QUFEZ0MsR0FBZixDQUFkLENBQVo7QUFJQSxTQUFPO0FBQ05hLFNBQUssRUFBRUYsR0FERDtBQUVORyxZQUFRLEVBQUU7QUFGSixHQUFQO0FBSUE7QUFFY2pCLDZFQUFmIiwiZmlsZSI6Ii4vcGFnZXMvZmVlZGJhY2svW2ZlZWRiYWNrSWRdLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZ2V0QWxsRmVlZGJhY2ssIGdldEZlZWRiYWNrQnlJZCB9IGZyb20gXCIuLi9hcGkvZmVlZGJhY2svaGVscGVyc1wiO1xuXG5mdW5jdGlvbiBGZWVkYmFja0lkUGFnZShwcm9wcykge1xuXHRjb25zdCBmZWVkYmFjayA9IHByb3BzLmZlZWRiYWNrO1xuXG5cdGlmICghZmVlZGJhY2spIHtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjZW50ZXJcIj5cblx0XHRcdFx0PHA+TG9hZGluZy4uLjwvcD5cblx0XHRcdDwvZGl2PlxuXHRcdCk7XG5cdH1cblxuXHRyZXR1cm4gKFxuXHRcdDxkaXY+XG5cdFx0XHQ8aDE+RmVlZGJhY2s8L2gxPlxuXHRcdFx0PGgyPklkPC9oMj4ge2ZlZWRiYWNrLmlkfVxuXHRcdFx0PGgyPkVtYWlsPC9oMj4ge2ZlZWRiYWNrLmVtYWlsfVxuXHRcdFx0PGgyPlRleHQ8L2gyPiB7ZmVlZGJhY2sudGV4dH1cblx0XHQ8L2Rpdj5cblx0KTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKGNvbnRleHQpIHtcblx0Y29uc3QgZmVlZGJhY2tJZCA9IGNvbnRleHQucGFyYW1zLmZlZWRiYWNrSWQ7XG5cdGNvbnN0IGZlZWRiYWNrID0gYXdhaXQgZ2V0RmVlZGJhY2tCeUlkKGZlZWRiYWNrSWQpO1xuXG5cdHJldHVybiB7XG5cdFx0cHJvcHM6IHtcblx0XHRcdGZlZWRiYWNrOiBmZWVkYmFjayxcblx0XHR9LFxuXHR9O1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUGF0aHMoKSB7XG5cdGNvbnN0IGZlZWRiYWNrcyA9IGF3YWl0IGdldEFsbEZlZWRiYWNrKCk7XG5cblx0Y29uc3QgaWRzID0gZmVlZGJhY2tzLm1hcCgoZmVlZGJhY2spID0+ICh7XG5cdFx0cGFyYW1zOiB7IGZlZWRiYWNrSWQ6IGZlZWRiYWNrLmlkIH0sXG5cdH0pKTtcblxuXHRyZXR1cm4ge1xuXHRcdHBhdGhzOiBpZHMsXG5cdFx0ZmFsbGJhY2s6IHRydWUsXG5cdH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IEZlZWRiYWNrSWRQYWdlO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/feedback/[feedbackId].js\n'
				);

				/***/
			},

		/***/ fs:
			/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
			/*! no static exports found */
			/***/ function (module, exports) {
				eval(
					'module.exports = require("fs");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJmc1wiP2E0MGQiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoiZnMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJmc1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///fs\n'
				);

				/***/
			},

		/***/ path:
			/*!***********************!*\
  !*** external "path" ***!
  \***********************/
			/*! no static exports found */
			/***/ function (module, exports) {
				eval(
					'module.exports = require("path");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJwYXRoXCI/NzRiYiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJwYXRoLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicGF0aFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///path\n'
				);

				/***/
			},

		/***/ "react/jsx-dev-runtime":
			/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
			/*! no static exports found */
			/***/ function (module, exports) {
				eval(
					'module.exports = require("react/jsx-dev-runtime");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIj9jZDkwIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InJlYWN0L2pzeC1kZXYtcnVudGltZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react/jsx-dev-runtime\n'
				);

				/***/
			},

		/******/
	}
);
