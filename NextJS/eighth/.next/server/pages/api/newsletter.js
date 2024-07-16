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
		(__webpack_require__.s = "./pages/api/newsletter/index.js")
	);
	/******/
})(
	/************************************************************************/
	/******/ {
		/***/ "./helpers/api-util.js":
			/*!*****************************!*\
  !*** ./helpers/api-util.js ***!
  \*****************************/
			/*! exports provided: getAllEvents, getComments, insertComment, getAllSignup, insertSignup, getFeaturedEvents, getEventById, getFilteredEvents */
			/***/ function (module, __webpack_exports__, __webpack_require__) {
				"use strict";
				eval(
					'__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAllEvents", function() { return getAllEvents; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getComments", function() { return getComments; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "insertComment", function() { return insertComment; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAllSignup", function() { return getAllSignup; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "insertSignup", function() { return insertSignup; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFeaturedEvents", function() { return getFeaturedEvents; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getEventById", function() { return getEventById; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFilteredEvents", function() { return getFilteredEvents; });\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nasync function getAllEvents() {\n  const response = await fetch("https://nextjs-course-d43b3-default-rtdb.europe-west1.firebasedatabase.app/events.json");\n  const data = await response.json();\n  const events = [];\n\n  for (const key in data) {\n    events.push(_objectSpread({\n      id: key\n    }, data[key]));\n  }\n\n  return events;\n}\nasync function getComments(eventId) {\n  const response = await fetch(`https://nextjs-course-d43b3-default-rtdb.europe-west1.firebasedatabase.app/comments/${eventId}.json`);\n  const data = await response.json();\n  const comments = [];\n\n  for (const key in data) {\n    comments.push(_objectSpread({\n      id: key\n    }, data[key]));\n  }\n\n  return comments;\n}\nasync function insertComment(eventId, comment) {\n  const requestOptions = {\n    method: "POST",\n    headers: {\n      "Content-Type": "application/json"\n    },\n    body: JSON.stringify(comment)\n  };\n  const response = await fetch(`https://nextjs-course-d43b3-default-rtdb.europe-west1.firebasedatabase.app/comments/${eventId}.json`, requestOptions);\n  const data = await response.json();\n  return JSON.stringify(data);\n}\nasync function getAllSignup() {\n  const response = await fetch("https://nextjs-course-d43b3-default-rtdb.europe-west1.firebasedatabase.app/newsletter.json");\n  const data = await response.json();\n  const signup = [];\n\n  for (const key in data) {\n    signup.push(_objectSpread({\n      id: key\n    }, data[key]));\n  }\n\n  return signup;\n}\nasync function insertSignup(signup) {\n  const requestOptions = {\n    method: "POST",\n    headers: {\n      "Content-Type": "application/json"\n    },\n    body: JSON.stringify(signup)\n  };\n  const response = await fetch("https://nextjs-course-d43b3-default-rtdb.europe-west1.firebasedatabase.app/newsletter.json", requestOptions);\n  const data = await response.json();\n  return JSON.stringify(data);\n}\nasync function getFeaturedEvents() {\n  const allEvents = await getAllEvents();\n  return allEvents.filter(event => event.isFeatured);\n}\nasync function getEventById(id) {\n  const allEvents = await getAllEvents();\n  return allEvents.find(event => event.id === id);\n}\nasync function getFilteredEvents(dateFilter) {\n  const {\n    year,\n    month\n  } = dateFilter;\n  const allEvents = await getAllEvents();\n  let filteredEvents = allEvents.filter(event => {\n    const eventDate = new Date(event.date);\n    return eventDate.getFullYear() === year && eventDate.getMonth() === month - 1;\n  });\n  return filteredEvents;\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9oZWxwZXJzL2FwaS11dGlsLmpzPzA3ZjQiXSwibmFtZXMiOlsiZ2V0QWxsRXZlbnRzIiwicmVzcG9uc2UiLCJmZXRjaCIsImRhdGEiLCJqc29uIiwiZXZlbnRzIiwia2V5IiwicHVzaCIsImlkIiwiZ2V0Q29tbWVudHMiLCJldmVudElkIiwiY29tbWVudHMiLCJpbnNlcnRDb21tZW50IiwiY29tbWVudCIsInJlcXVlc3RPcHRpb25zIiwibWV0aG9kIiwiaGVhZGVycyIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwiZ2V0QWxsU2lnbnVwIiwic2lnbnVwIiwiaW5zZXJ0U2lnbnVwIiwiZ2V0RmVhdHVyZWRFdmVudHMiLCJhbGxFdmVudHMiLCJmaWx0ZXIiLCJldmVudCIsImlzRmVhdHVyZWQiLCJnZXRFdmVudEJ5SWQiLCJmaW5kIiwiZ2V0RmlsdGVyZWRFdmVudHMiLCJkYXRlRmlsdGVyIiwieWVhciIsIm1vbnRoIiwiZmlsdGVyZWRFdmVudHMiLCJldmVudERhdGUiLCJEYXRlIiwiZGF0ZSIsImdldEZ1bGxZZWFyIiwiZ2V0TW9udGgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFPLGVBQWVBLFlBQWYsR0FBOEI7QUFDcEMsUUFBTUMsUUFBUSxHQUFHLE1BQU1DLEtBQUssQ0FDM0Isd0ZBRDJCLENBQTVCO0FBR0EsUUFBTUMsSUFBSSxHQUFHLE1BQU1GLFFBQVEsQ0FBQ0csSUFBVCxFQUFuQjtBQUVBLFFBQU1DLE1BQU0sR0FBRyxFQUFmOztBQUVBLE9BQUssTUFBTUMsR0FBWCxJQUFrQkgsSUFBbEIsRUFBd0I7QUFDdkJFLFVBQU0sQ0FBQ0UsSUFBUDtBQUNDQyxRQUFFLEVBQUVGO0FBREwsT0FFSUgsSUFBSSxDQUFDRyxHQUFELENBRlI7QUFJQTs7QUFFRCxTQUFPRCxNQUFQO0FBQ0E7QUFFTSxlQUFlSSxXQUFmLENBQTJCQyxPQUEzQixFQUFvQztBQUMxQyxRQUFNVCxRQUFRLEdBQUcsTUFBTUMsS0FBSyxDQUMx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QVYsT0FBNEJOLElBQTVCLElBQ0FHLFNBQVMsQ0FBQ0ksUUFBVixPQUF5Qk4sS0FBSyxHQUFHLENBRmxDO0FBSUEsR0FOb0IsQ0FBckI7QUFRQSxTQUFPQyxjQUFQO0FBQ0EiLCJmaWxlIjoiLi9oZWxwZXJzL2FwaS11dGlsLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldEFsbEV2ZW50cygpIHtcblx0Y29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcblx0XHRcImh0dHBzOi8vbmV4dGpzLWNvdXJzZS1kNDNiMy1kZWZhdWx0LXJ0ZGIuZXVyb3BlLXdlc3QxLmZpcmViYXNlZGF0YWJhc2UuYXBwL2V2ZW50cy5qc29uXCJcblx0KTtcblx0Y29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcblxuXHRjb25zdCBldmVudHMgPSBbXTtcblxuXHRmb3IgKGNvbnN0IGtleSBpbiBkYXRhKSB7XG5cdFx0ZXZlbnRzLnB1c2goe1xuXHRcdFx0aWQ6IGtleSxcblx0XHRcdC4uLmRhdGFba2V5XSxcblx0XHR9KTtcblx0fVxuXG5cdHJldHVybiBldmVudHM7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRDb21tZW50cyhldmVudElkKSB7XG5cdGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXG5cdFx0YGh0dHBzOi8vbmV4dGpzLWNvdXJzZS1kNDNiMy1kZWZhdWx0LXJ0ZGIuZXVyb3BlLXdlc3QxLmZpcmViYXNlZGF0YWJhc2UuYXBwL2NvbW1lbnRzLyR7ZXZlbnRJZH0uanNvbmBcblx0KTtcblx0Y29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcblxuXHRjb25zdCBjb21tZW50cyA9IFtdO1xuXG5cdGZvciAoY29uc3Qga2V5IGluIGRhdGEpIHtcblx0XHRjb21tZW50cy5wdXNoKHtcblx0XHRcdGlkOiBrZXksXG5cdFx0XHQuLi5kYXRhW2tleV0sXG5cdFx0fSk7XG5cdH1cblxuXHRyZXR1cm4gY29tbWVudHM7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBpbnNlcnRDb21tZW50KGV2ZW50SWQsIGNvbW1lbnQpIHtcblx0Y29uc3QgcmVxdWVzdE9wdGlvbnMgPSB7XG5cdFx0bWV0aG9kOiBcIlBPU1RcIixcblx0XHRoZWFkZXJzOiB7IFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiIH0sXG5cdFx0Ym9keTogSlNPTi5zdHJpbmdpZnkoY29tbWVudCksXG5cdH07XG5cblx0Y29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcblx0XHRgaHR0cHM6Ly9uZXh0anMtY291cnNlLWQ0M2IzLWRlZmF1bHQtcnRkYi5ldXJvcGUtd2VzdDEuZmlyZWJhc2VkYXRhYmFzZS5hcHAvY29tbWVudHMvJHtldmVudElkfS5qc29uYCxcblx0XHRyZXF1ZXN0T3B0aW9uc1xuXHQpO1xuXHRjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuXG5cdHJldHVybiBKU09OLnN0cmluZ2lmeShkYXRhKTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldEFsbFNpZ251cCgpIHtcblx0Y29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcblx0XHRcImh0dHBzOi8vbmV4dGpzLWNvdXJzZS1kNDNiMy1kZWZhdWx0LXJ0ZGIuZXVyb3BlLXdlc3QxLmZpcmViYXNlZGF0YWJhc2UuYXBwL25ld3NsZXR0ZXIuanNvblwiXG5cdCk7XG5cdGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG5cblx0Y29uc3Qgc2lnbnVwID0gW107XG5cblx0Zm9yIChjb25zdCBrZXkgaW4gZGF0YSkge1xuXHRcdHNpZ251cC5wdXNoKHtcblx0XHRcdGlkOiBrZXksXG5cdFx0XHQuLi5kYXRhW2tleV0sXG5cdFx0fSk7XG5cdH1cblxuXHRyZXR1cm4gc2lnbnVwO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gaW5zZXJ0U2lnbnVwKHNpZ251cCkge1xuXHRjb25zdCByZXF1ZXN0T3B0aW9ucyA9IHtcblx0XHRtZXRob2Q6IFwiUE9TVFwiLFxuXHRcdGhlYWRlcnM6IHsgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIgfSxcblx0XHRib2R5OiBKU09OLnN0cmluZ2lmeShzaWdudXApLFxuXHR9O1xuXG5cdGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXG5cdFx0XCJodHRwczovL25leHRqcy1jb3Vyc2UtZDQzYjMtZGVmYXVsdC1ydGRiLmV1cm9wZS13ZXN0MS5maXJlYmFzZWRhdGFiYXNlLmFwcC9uZXdzbGV0dGVyLmpzb25cIixcblx0XHRyZXF1ZXN0T3B0aW9uc1xuXHQpO1xuXHRjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuXG5cdHJldHVybiBKU09OLnN0cmluZ2lmeShkYXRhKTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldEZlYXR1cmVkRXZlbnRzKCkge1xuXHRjb25zdCBhbGxFdmVudHMgPSBhd2FpdCBnZXRBbGxFdmVudHMoKTtcblx0cmV0dXJuIGFsbEV2ZW50cy5maWx0ZXIoKGV2ZW50KSA9PiBldmVudC5pc0ZlYXR1cmVkKTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldEV2ZW50QnlJZChpZCkge1xuXHRjb25zdCBhbGxFdmVudHMgPSBhd2FpdCBnZXRBbGxFdmVudHMoKTtcblx0cmV0dXJuIGFsbEV2ZW50cy5maW5kKChldmVudCkgPT4gZXZlbnQuaWQgPT09IGlkKTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldEZpbHRlcmVkRXZlbnRzKGRhdGVGaWx0ZXIpIHtcblx0Y29uc3QgeyB5ZWFyLCBtb250aCB9ID0gZGF0ZUZpbHRlcjtcblxuXHRjb25zdCBhbGxFdmVudHMgPSBhd2FpdCBnZXRBbGxFdmVudHMoKTtcblxuXHRsZXQgZmlsdGVyZWRFdmVudHMgPSBhbGxFdmVudHMuZmlsdGVyKChldmVudCkgPT4ge1xuXHRcdGNvbnN0IGV2ZW50RGF0ZSA9IG5ldyBEYXRlKGV2ZW50LmRhdGUpO1xuXHRcdHJldHVybiAoXG5cdFx0XHRldmVudERhdGUuZ2V0RnVsbFllYXIoKSA9PT0geWVhciAmJlxuXHRcdFx0ZXZlbnREYXRlLmdldE1vbnRoKCkgPT09IG1vbnRoIC0gMVxuXHRcdCk7XG5cdH0pO1xuXG5cdHJldHVybiBmaWx0ZXJlZEV2ZW50cztcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./helpers/api-util.js\n'
				);

				/***/
			},

		/***/ "./pages/api/newsletter/index.js":
			/*!***************************************!*\
  !*** ./pages/api/newsletter/index.js ***!
  \***************************************/
			/*! exports provided: default */
			/***/ function (module, __webpack_exports__, __webpack_require__) {
				"use strict";
				eval(
					'__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _helpers_api_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../helpers/api-util */ "./helpers/api-util.js");\n\n\nasync function handler(req, res) {\n  if (req.method == "POST") {\n    const email = req.body.email;\n    const signup = {\n      dt: new Date().toISOString(),\n      email: email\n    };\n    const data = await Object(_helpers_api_util__WEBPACK_IMPORTED_MODULE_0__["insertSignup"])(signup);\n    res.status(201).json({\n      response: data\n    });\n  } else if (req.method == "GET") {\n    const data = await Object(_helpers_api_util__WEBPACK_IMPORTED_MODULE_0__["getAllSignup"])();\n    res.status(201).json({\n      allSignup: data\n    });\n  } else {\n    res.status(200).json({\n      message: "I only know GET & POST ¯_(ツ)_/¯"\n    });\n  }\n}\n\n/* harmony default export */ __webpack_exports__["default"] = (handler);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9hcGkvbmV3c2xldHRlci9pbmRleC5qcz80M2YwIl0sIm5hbWVzIjpbImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJtZXRob2QiLCJlbWFpbCIsImJvZHkiLCJzaWdudXAiLCJkdCIsIkRhdGUiLCJ0b0lTT1N0cmluZyIsImRhdGEiLCJpbnNlcnRTaWdudXAiLCJzdGF0dXMiLCJqc29uIiwicmVzcG9uc2UiLCJnZXRBbGxTaWdudXAiLCJhbGxTaWdudXAiLCJtZXNzYWdlIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7O0FBRUEsZUFBZUEsT0FBZixDQUF1QkMsR0FBdkIsRUFBNEJDLEdBQTVCLEVBQWlDO0FBQ2hDLE1BQUlELEdBQUcsQ0FBQ0UsTUFBSixJQUFjLE1BQWxCLEVBQTBCO0FBQ3pCLFVBQU1DLEtBQUssR0FBR0gsR0FBRyxDQUFDSSxJQUFKLENBQVNELEtBQXZCO0FBRUEsVUFBTUUsTUFBTSxHQUFHO0FBQ2RDLFFBQUUsRUFBRSxJQUFJQyxJQUFKLEdBQVdDLFdBQVgsRUFEVTtBQUVkTCxXQUFLLEVBQUVBO0FBRk8sS0FBZjtBQUtBLFVBQU1NLElBQUksR0FBRyxNQUFNQyxzRUFBWSxDQUFDTCxNQUFELENBQS9CO0FBRUFKLE9BQUcsQ0FBQ1UsTUFBSixDQUFXLEdBQVgsRUFBZ0JDLElBQWhCLENBQXFCO0FBQ3BCQyxjQUFRLEVBQUVKO0FBRFUsS0FBckI7QUFHQSxHQWJELE1BYU8sSUFBSVQsR0FBRyxDQUFDRSxNQUFKLElBQWMsS0FBbEIsRUFBeUI7QUFDL0IsVUFBTU8sSUFBSSxHQUFHLE1BQU1LLHNFQUFZLEVBQS9CO0FBRUFiLE9BQUcsQ0FBQ1UsTUFBSixDQUFXLEdBQVgsRUFBZ0JDLElBQWhCLENBQXFCO0FBQ3BCRyxlQUFTLEVBQUVOO0FBRFMsS0FBckI7QUFHQSxHQU5NLE1BTUE7QUFDTlIsT0FBRyxDQUFDVSxNQUFKLENBQVcsR0FBWCxFQUFnQkMsSUFBaEIsQ0FBcUI7QUFBRUksYUFBTyxFQUFFO0FBQVgsS0FBckI7QUFDQTtBQUNEOztBQUVjakIsc0VBQWYiLCJmaWxlIjoiLi9wYWdlcy9hcGkvbmV3c2xldHRlci9pbmRleC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGdldEFsbFNpZ251cCwgaW5zZXJ0U2lnbnVwIH0gZnJvbSBcIi4uLy4uLy4uL2hlbHBlcnMvYXBpLXV0aWxcIjtcblxuYXN5bmMgZnVuY3Rpb24gaGFuZGxlcihyZXEsIHJlcykge1xuXHRpZiAocmVxLm1ldGhvZCA9PSBcIlBPU1RcIikge1xuXHRcdGNvbnN0IGVtYWlsID0gcmVxLmJvZHkuZW1haWw7XG5cblx0XHRjb25zdCBzaWdudXAgPSB7XG5cdFx0XHRkdDogbmV3IERhdGUoKS50b0lTT1N0cmluZygpLFxuXHRcdFx0ZW1haWw6IGVtYWlsLFxuXHRcdH07XG5cblx0XHRjb25zdCBkYXRhID0gYXdhaXQgaW5zZXJ0U2lnbnVwKHNpZ251cCk7XG5cblx0XHRyZXMuc3RhdHVzKDIwMSkuanNvbih7XG5cdFx0XHRyZXNwb25zZTogZGF0YSxcblx0XHR9KTtcblx0fSBlbHNlIGlmIChyZXEubWV0aG9kID09IFwiR0VUXCIpIHtcblx0XHRjb25zdCBkYXRhID0gYXdhaXQgZ2V0QWxsU2lnbnVwKCk7XG5cblx0XHRyZXMuc3RhdHVzKDIwMSkuanNvbih7XG5cdFx0XHRhbGxTaWdudXA6IGRhdGEsXG5cdFx0fSk7XG5cdH0gZWxzZSB7XG5cdFx0cmVzLnN0YXR1cygyMDApLmpzb24oeyBtZXNzYWdlOiBcIkkgb25seSBrbm93IEdFVCAmIFBPU1Qgwq9fKOODhClfL8KvXCIgfSk7XG5cdH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgaGFuZGxlcjtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/api/newsletter/index.js\n'
				);

				/***/
			},

		/******/
	}
);
