module.exports = /******/ (function (modules) {
	// webpackBootstrap
	/******/ // The module cache
	/******/ var installedModules = require("../ssr-module-cache.js");
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
		(__webpack_require__.s = "./pages/feedback/index.js")
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

		/***/ "./pages/feedback/index.js":
			/*!*********************************!*\
  !*** ./pages/feedback/index.js ***!
  \*********************************/
			/*! exports provided: getStaticProps, default */
			/***/ function (module, __webpack_exports__, __webpack_require__) {
				"use strict";
				eval(
					'__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStaticProps", function() { return getStaticProps; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _api_feedback_helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../api/feedback/helpers */ "./pages/api/feedback/helpers.js");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "next/router");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _jsxFileName = "/Users/GK47LX/source/JSStudies/NextJS/seventh/pages/feedback/index.js";\n\n\n\n\nfunction FeedbackPage(props) {\n  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_3__["useRouter"])();\n  const {\n    0: feedbackData,\n    1: setFeedbackData\n  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])();\n\n  function detailsHandler(id) {\n    router.push(`/feedback/${id}`);\n  }\n\n  function emailHandler(id) {\n    fetch(`/api/feedback/${id}`).then(response => response.json()).then(data => {\n      setFeedbackData(data.feedback);\n    });\n  }\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], {\n    children: [feedbackData && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {\n      children: feedbackData.email\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 21\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ul", {\n      children: props.feedbackItems.map(item => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {\n        children: [item.text, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {\n          onClick: detailsHandler.bind(null, item.id),\n          children: "Get details"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 28,\n          columnNumber: 7\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {\n          onClick: emailHandler.bind(null, item.id),\n          children: "Show the email!"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 31,\n          columnNumber: 7\n        }, this)]\n      }, item.id, true, {\n        fileName: _jsxFileName,\n        lineNumber: 26,\n        columnNumber: 6\n      }, this))\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 24,\n      columnNumber: 4\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 22,\n    columnNumber: 3\n  }, this);\n}\n\nasync function getStaticProps() {\n  const data = await Object(_api_feedback_helpers__WEBPACK_IMPORTED_MODULE_2__["getAllFeedback"])();\n  return {\n    props: {\n      feedbackItems: data\n    }\n  };\n}\n/* harmony default export */ __webpack_exports__["default"] = (FeedbackPage);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9mZWVkYmFjay9pbmRleC5qcz9iOWNkIl0sIm5hbWVzIjpbIkZlZWRiYWNrUGFnZSIsInByb3BzIiwicm91dGVyIiwidXNlUm91dGVyIiwiZmVlZGJhY2tEYXRhIiwic2V0RmVlZGJhY2tEYXRhIiwidXNlU3RhdGUiLCJkZXRhaWxzSGFuZGxlciIsImlkIiwicHVzaCIsImVtYWlsSGFuZGxlciIsImZldGNoIiwidGhlbiIsInJlc3BvbnNlIiwianNvbiIsImRhdGEiLCJmZWVkYmFjayIsImVtYWlsIiwiZmVlZGJhY2tJdGVtcyIsIm1hcCIsIml0ZW0iLCJ0ZXh0IiwiYmluZCIsImdldFN0YXRpY1Byb3BzIiwiZ2V0QWxsRmVlZGJhY2siXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztBQUVBLFNBQVNBLFlBQVQsQ0FBc0JDLEtBQXRCLEVBQTZCO0FBQzVCLFFBQU1DLE1BQU0sR0FBR0MsNkRBQVMsRUFBeEI7QUFDQSxRQUFNO0FBQUEsT0FBQ0MsWUFBRDtBQUFBLE9BQWVDO0FBQWYsTUFBa0NDLHNEQUFRLEVBQWhEOztBQUVBLFdBQVNDLGNBQVQsQ0FBd0JDLEVBQXhCLEVBQTRCO0FBQzNCTixVQUFNLENBQUNPLElBQVAsQ0FBYSxhQUFZRCxFQUFHLEVBQTVCO0FBQ0E7O0FBRUQsV0FBU0UsWUFBVCxDQUFzQkYsRUFBdEIsRUFBMEI7QUFDekJHLFNBQUssQ0FBRSxpQkFBZ0JILEVBQUcsRUFBckIsQ0FBTCxDQUNFSSxJQURGLENBQ1FDLFFBQUQsSUFBY0EsUUFBUSxDQUFDQyxJQUFULEVBRHJCLEVBRUVGLElBRkYsQ0FFUUcsSUFBRCxJQUFVO0FBQ2ZWLHFCQUFlLENBQUNVLElBQUksQ0FBQ0MsUUFBTixDQUFmO0FBQ0EsS0FKRjtBQUtBOztBQUVELHNCQUNDLHFFQUFDLDhDQUFEO0FBQUEsZUFDRVosWUFBWSxpQkFBSTtBQUFBLGdCQUFJQSxZQUFZLENBQUNhO0FBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFEbEIsZUFFQztBQUFBLGdCQUNFaEIsS0FBSyxDQUFDaUIsYUFBTixDQUFvQkMsR0FBcEIsQ0FBeUJDLElBQUQsaUJBQ3hCO0FBQUEsbUJBQ0VBLElBQUksQ0FBQ0MsSUFEUCxlQUVDO0FBQVEsaUJBQU8sRUFBRWQsY0FBYyxDQUFDZSxJQUFmLENBQW9CLElBQXBCLEVBQTBCRixJQUFJLENBQUNaLEVBQS9CLENBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUZELGVBS0M7QUFBUSxpQkFBTyxFQUFFRSxZQUFZLENBQUNZLElBQWIsQ0FBa0IsSUFBbEIsRUFBd0JGLElBQUksQ0FBQ1osRUFBN0IsQ0FBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBTEQ7QUFBQSxTQUFTWSxJQUFJLENBQUNaLEVBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUZEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUREO0FBa0JBOztBQUVNLGVBQWVlLGNBQWYsR0FBZ0M7QUFDdEMsUUFBTVIsSUFBSSxHQUFHLE1BQU1TLDRFQUFjLEVBQWpDO0FBQ0EsU0FBTztBQUNOdkIsU0FBSyxFQUFFO0FBQ05pQixtQkFBYSxFQUFFSDtBQURUO0FBREQsR0FBUDtBQUtBO0FBRWNmLDJFQUFmIiwiZmlsZSI6Ii4vcGFnZXMvZmVlZGJhY2svaW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBGcmFnbWVudCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IGdldEFsbEZlZWRiYWNrIH0gZnJvbSBcIi4uL2FwaS9mZWVkYmFjay9oZWxwZXJzXCI7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcblxuZnVuY3Rpb24gRmVlZGJhY2tQYWdlKHByb3BzKSB7XG5cdGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuXHRjb25zdCBbZmVlZGJhY2tEYXRhLCBzZXRGZWVkYmFja0RhdGFdID0gdXNlU3RhdGUoKTtcblxuXHRmdW5jdGlvbiBkZXRhaWxzSGFuZGxlcihpZCkge1xuXHRcdHJvdXRlci5wdXNoKGAvZmVlZGJhY2svJHtpZH1gKTtcblx0fVxuXG5cdGZ1bmN0aW9uIGVtYWlsSGFuZGxlcihpZCkge1xuXHRcdGZldGNoKGAvYXBpL2ZlZWRiYWNrLyR7aWR9YClcblx0XHRcdC50aGVuKChyZXNwb25zZSkgPT4gcmVzcG9uc2UuanNvbigpKVxuXHRcdFx0LnRoZW4oKGRhdGEpID0+IHtcblx0XHRcdFx0c2V0RmVlZGJhY2tEYXRhKGRhdGEuZmVlZGJhY2spO1xuXHRcdFx0fSk7XG5cdH1cblxuXHRyZXR1cm4gKFxuXHRcdDxGcmFnbWVudD5cblx0XHRcdHtmZWVkYmFja0RhdGEgJiYgPHA+e2ZlZWRiYWNrRGF0YS5lbWFpbH08L3A+fVxuXHRcdFx0PHVsPlxuXHRcdFx0XHR7cHJvcHMuZmVlZGJhY2tJdGVtcy5tYXAoKGl0ZW0pID0+IChcblx0XHRcdFx0XHQ8bGkga2V5PXtpdGVtLmlkfT5cblx0XHRcdFx0XHRcdHtpdGVtLnRleHR9XG5cdFx0XHRcdFx0XHQ8YnV0dG9uIG9uQ2xpY2s9e2RldGFpbHNIYW5kbGVyLmJpbmQobnVsbCwgaXRlbS5pZCl9PlxuXHRcdFx0XHRcdFx0XHRHZXQgZGV0YWlsc1xuXHRcdFx0XHRcdFx0PC9idXR0b24+XG5cdFx0XHRcdFx0XHQ8YnV0dG9uIG9uQ2xpY2s9e2VtYWlsSGFuZGxlci5iaW5kKG51bGwsIGl0ZW0uaWQpfT5cblx0XHRcdFx0XHRcdFx0U2hvdyB0aGUgZW1haWwhXG5cdFx0XHRcdFx0XHQ8L2J1dHRvbj5cblx0XHRcdFx0XHQ8L2xpPlxuXHRcdFx0XHQpKX1cblx0XHRcdDwvdWw+XG5cdFx0PC9GcmFnbWVudD5cblx0KTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKCkge1xuXHRjb25zdCBkYXRhID0gYXdhaXQgZ2V0QWxsRmVlZGJhY2soKTtcblx0cmV0dXJuIHtcblx0XHRwcm9wczoge1xuXHRcdFx0ZmVlZGJhY2tJdGVtczogZGF0YSxcblx0XHR9LFxuXHR9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBGZWVkYmFja1BhZ2U7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/feedback/index.js\n'
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

		/***/ "next/router":
			/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
			/*! no static exports found */
			/***/ function (module, exports) {
				eval(
					'module.exports = require("next/router");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L3JvdXRlclwiP2Q4M2UiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoibmV4dC9yb3V0ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L3JvdXRlclwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///next/router\n'
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

		/***/ react:
			/*!************************!*\
  !*** external "react" ***!
  \************************/
			/*! no static exports found */
			/***/ function (module, exports) {
				eval(
					'module.exports = require("react");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n'
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
