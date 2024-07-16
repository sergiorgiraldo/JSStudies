module.exports = /******/ (function (modules) {
	// webpackBootstrap
	/******/ // The module cache
	/******/ var installedModules = require("../../../ssr-module-cache.js");
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
		(__webpack_require__.s = "./pages/api/feedback/[feedbackId].js")
	);
	/******/
})(
	/************************************************************************/
	/******/ {
		/***/ "./pages/api/feedback/[feedbackId].js":
			/*!********************************************!*\
  !*** ./pages/api/feedback/[feedbackId].js ***!
  \********************************************/
			/*! exports provided: default */
			/***/ function (module, __webpack_exports__, __webpack_require__) {
				"use strict";
				eval(
					'__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers */ "./pages/api/feedback/helpers.js");\n\n\nfunction handler(req, res) {\n  const feedbackId = req.query.feedbackId;\n  const feedback = Object(_helpers__WEBPACK_IMPORTED_MODULE_0__["getFeedbackById"])(feedbackId);\n  res.status(200).json({\n    message: "success!",\n    feedback: feedback\n  });\n}\n\n/* harmony default export */ __webpack_exports__["default"] = (handler);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9hcGkvZmVlZGJhY2svW2ZlZWRiYWNrSWRdLmpzP2VkNTkiXSwibmFtZXMiOlsiaGFuZGxlciIsInJlcSIsInJlcyIsImZlZWRiYWNrSWQiLCJxdWVyeSIsImZlZWRiYWNrIiwiZ2V0RmVlZGJhY2tCeUlkIiwic3RhdHVzIiwianNvbiIsIm1lc3NhZ2UiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTs7QUFFQSxTQUFTQSxPQUFULENBQWlCQyxHQUFqQixFQUFzQkMsR0FBdEIsRUFBMkI7QUFDMUIsUUFBTUMsVUFBVSxHQUFHRixHQUFHLENBQUNHLEtBQUosQ0FBVUQsVUFBN0I7QUFDQSxRQUFNRSxRQUFRLEdBQUdDLGdFQUFlLENBQUNILFVBQUQsQ0FBaEM7QUFDQUQsS0FBRyxDQUFDSyxNQUFKLENBQVcsR0FBWCxFQUFnQkMsSUFBaEIsQ0FBcUI7QUFBRUMsV0FBTyxFQUFFLFVBQVg7QUFBdUJKLFlBQVEsRUFBRUE7QUFBakMsR0FBckI7QUFDQTs7QUFFY0wsc0VBQWYiLCJmaWxlIjoiLi9wYWdlcy9hcGkvZmVlZGJhY2svW2ZlZWRiYWNrSWRdLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZ2V0RmVlZGJhY2tCeUlkIH0gZnJvbSBcIi4vaGVscGVyc1wiO1xuXG5mdW5jdGlvbiBoYW5kbGVyKHJlcSwgcmVzKSB7XG5cdGNvbnN0IGZlZWRiYWNrSWQgPSByZXEucXVlcnkuZmVlZGJhY2tJZDtcblx0Y29uc3QgZmVlZGJhY2sgPSBnZXRGZWVkYmFja0J5SWQoZmVlZGJhY2tJZCk7XG5cdHJlcy5zdGF0dXMoMjAwKS5qc29uKHsgbWVzc2FnZTogXCJzdWNjZXNzIVwiLCBmZWVkYmFjazogZmVlZGJhY2sgfSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGhhbmRsZXI7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/api/feedback/[feedbackId].js\n'
				);

				/***/
			},

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

		/******/
	}
);
