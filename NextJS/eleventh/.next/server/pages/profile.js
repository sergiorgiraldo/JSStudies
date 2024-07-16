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
			/******/ exports: {}
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
				get: getter
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
				value: "Module"
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
			value: value
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
		(__webpack_require__.s = "./pages/profile.js")
	);
	/******/
})(
	/************************************************************************/
	/******/ {
		/***/ "./components/profile/profile-form.js":
			/*!********************************************!*\
  !*** ./components/profile/profile-form.js ***!
  \********************************************/
			/*! exports provided: default */
			/***/ function (module, __webpack_exports__, __webpack_require__) {
				"use strict";
				eval(
					'__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _profile_form_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./profile-form.module.css */ "./components/profile/profile-form.module.css");\n/* harmony import */ var _profile_form_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_profile_form_module_css__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _jsxFileName = "/Users/GK47LX/source/JSStudies/NextJS/eleventh/components/profile/profile-form.js";\n\n\n\nfunction ProfileForm(props) {\n  const oldPasswordRef = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])();\n  const newPasswordRef = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])();\n\n  function submitHandler(event) {\n    event.preventDefault();\n    const enteredOldPassword = oldPasswordRef.current.value;\n    const enteredNewPassword = newPasswordRef.current.value;\n    props.onChangePassword({\n      oldPassword: enteredOldPassword,\n      newPassword: enteredNewPassword\n    });\n  }\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("form", {\n    className: _profile_form_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.form,\n    onSubmit: submitHandler,\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {\n      className: _profile_form_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.control,\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {\n        htmlFor: "new-password",\n        children: "New Password"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 24,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {\n        type: "password",\n        id: "new-password",\n        ref: newPasswordRef\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 25,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {\n      className: _profile_form_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.control,\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {\n        htmlFor: "old-password",\n        children: "Old Password"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 28,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {\n        type: "password",\n        id: "old-password",\n        ref: oldPasswordRef\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 29,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 27,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {\n      className: _profile_form_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.action,\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {\n        children: "Change Password"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 32,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 31,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 22,\n    columnNumber: 5\n  }, this);\n}\n\n/* harmony default export */ __webpack_exports__["default"] = (ProfileForm);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3Byb2ZpbGUvcHJvZmlsZS1mb3JtLmpzPzQwYzAiXSwibmFtZXMiOlsiUHJvZmlsZUZvcm0iLCJwcm9wcyIsIm9sZFBhc3N3b3JkUmVmIiwidXNlUmVmIiwibmV3UGFzc3dvcmRSZWYiLCJzdWJtaXRIYW5kbGVyIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsImVudGVyZWRPbGRQYXNzd29yZCIsImN1cnJlbnQiLCJ2YWx1ZSIsImVudGVyZWROZXdQYXNzd29yZCIsIm9uQ2hhbmdlUGFzc3dvcmQiLCJvbGRQYXNzd29yZCIsIm5ld1Bhc3N3b3JkIiwiY2xhc3NlcyIsImZvcm0iLCJjb250cm9sIiwiYWN0aW9uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUVBOztBQUVBLFNBQVNBLFdBQVQsQ0FBcUJDLEtBQXJCLEVBQTRCO0FBQzFCLFFBQU1DLGNBQWMsR0FBR0Msb0RBQU0sRUFBN0I7QUFDQSxRQUFNQyxjQUFjLEdBQUdELG9EQUFNLEVBQTdCOztBQUVBLFdBQVNFLGFBQVQsQ0FBdUJDLEtBQXZCLEVBQThCO0FBQzVCQSxTQUFLLENBQUNDLGNBQU47QUFFQSxVQUFNQyxrQkFBa0IsR0FBR04sY0FBYyxDQUFDTyxPQUFmLENBQXVCQyxLQUFsRDtBQUNBLFVBQU1DLGtCQUFrQixHQUFHUCxjQUFjLENBQUNLLE9BQWYsQ0FBdUJDLEtBQWxEO0FBRUFULFNBQUssQ0FBQ1csZ0JBQU4sQ0FBdUI7QUFDckJDLGlCQUFXLEVBQUVMLGtCQURRO0FBRXJCTSxpQkFBVyxFQUFFSDtBQUZRLEtBQXZCO0FBSUQ7O0FBRUQsc0JBQ0U7QUFBTSxhQUFTLEVBQUVJLCtEQUFPLENBQUNDLElBQXpCO0FBQStCLFlBQVEsRUFBRVgsYUFBekM7QUFBQSw0QkFDRTtBQUFLLGVBQVMsRUFBRVUsK0RBQU8sQ0FBQ0UsT0FBeEI7QUFBQSw4QkFDRTtBQUFPLGVBQU8sRUFBQyxjQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsZUFFRTtBQUFPLFlBQUksRUFBQyxVQUFaO0FBQXVCLFVBQUUsRUFBQyxjQUExQjtBQUF5QyxXQUFHLEVBQUViO0FBQTlDO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERixlQUtFO0FBQUssZUFBUyxFQUFFVywrREFBTyxDQUFDRSxPQUF4QjtBQUFBLDhCQUNFO0FBQU8sZUFBTyxFQUFDLGNBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERixlQUVFO0FBQU8sWUFBSSxFQUFDLFVBQVo7QUFBdUIsVUFBRSxFQUFDLGNBQTFCO0FBQXlDLFdBQUcsRUFBRWY7QUFBOUM7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUxGLGVBU0U7QUFBSyxlQUFTLEVBQUVhLCtEQUFPLENBQUNHLE1BQXhCO0FBQUEsNkJBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBVEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFlRDs7QUFFY2xCLDBFQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9wcm9maWxlL3Byb2ZpbGUtZm9ybS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVJlZiB9IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IGNsYXNzZXMgZnJvbSAnLi9wcm9maWxlLWZvcm0ubW9kdWxlLmNzcyc7XG5cbmZ1bmN0aW9uIFByb2ZpbGVGb3JtKHByb3BzKSB7XG4gIGNvbnN0IG9sZFBhc3N3b3JkUmVmID0gdXNlUmVmKCk7XG4gIGNvbnN0IG5ld1Bhc3N3b3JkUmVmID0gdXNlUmVmKCk7XG5cbiAgZnVuY3Rpb24gc3VibWl0SGFuZGxlcihldmVudCkge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICBjb25zdCBlbnRlcmVkT2xkUGFzc3dvcmQgPSBvbGRQYXNzd29yZFJlZi5jdXJyZW50LnZhbHVlO1xuICAgIGNvbnN0IGVudGVyZWROZXdQYXNzd29yZCA9IG5ld1Bhc3N3b3JkUmVmLmN1cnJlbnQudmFsdWU7XG5cbiAgICBwcm9wcy5vbkNoYW5nZVBhc3N3b3JkKHtcbiAgICAgIG9sZFBhc3N3b3JkOiBlbnRlcmVkT2xkUGFzc3dvcmQsXG4gICAgICBuZXdQYXNzd29yZDogZW50ZXJlZE5ld1Bhc3N3b3JkXG4gICAgfSk7XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxmb3JtIGNsYXNzTmFtZT17Y2xhc3Nlcy5mb3JtfSBvblN1Ym1pdD17c3VibWl0SGFuZGxlcn0+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5jb250cm9sfT5cbiAgICAgICAgPGxhYmVsIGh0bWxGb3I9J25ldy1wYXNzd29yZCc+TmV3IFBhc3N3b3JkPC9sYWJlbD5cbiAgICAgICAgPGlucHV0IHR5cGU9J3Bhc3N3b3JkJyBpZD0nbmV3LXBhc3N3b3JkJyByZWY9e25ld1Bhc3N3b3JkUmVmfSAvPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5jb250cm9sfT5cbiAgICAgICAgPGxhYmVsIGh0bWxGb3I9J29sZC1wYXNzd29yZCc+T2xkIFBhc3N3b3JkPC9sYWJlbD5cbiAgICAgICAgPGlucHV0IHR5cGU9J3Bhc3N3b3JkJyBpZD0nb2xkLXBhc3N3b3JkJyByZWY9e29sZFBhc3N3b3JkUmVmfSAvPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5hY3Rpb259PlxuICAgICAgICA8YnV0dG9uPkNoYW5nZSBQYXNzd29yZDwvYnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgPC9mb3JtPlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBQcm9maWxlRm9ybTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/profile/profile-form.js\n'
				);

				/***/
			},

		/***/ "./components/profile/profile-form.module.css":
			/*!****************************************************!*\
  !*** ./components/profile/profile-form.module.css ***!
  \****************************************************/
			/*! no static exports found */
			/***/ function (module, exports) {
				eval(
					'// Exports\nmodule.exports = {\n\t"form": "profile-form_form__3U8O4",\n\t"control": "profile-form_control__3DY65",\n\t"action": "profile-form_action__23LLQ"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3Byb2ZpbGUvcHJvZmlsZS1mb3JtLm1vZHVsZS5jc3M/Y2E2ZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiLi9jb21wb25lbnRzL3Byb2ZpbGUvcHJvZmlsZS1mb3JtLm1vZHVsZS5jc3MuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJmb3JtXCI6IFwicHJvZmlsZS1mb3JtX2Zvcm1fXzNVOE80XCIsXG5cdFwiY29udHJvbFwiOiBcInByb2ZpbGUtZm9ybV9jb250cm9sX18zRFk2NVwiLFxuXHRcImFjdGlvblwiOiBcInByb2ZpbGUtZm9ybV9hY3Rpb25fXzIzTExRXCJcbn07XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/profile/profile-form.module.css\n'
				);

				/***/
			},

		/***/ "./components/profile/user-profile.js":
			/*!********************************************!*\
  !*** ./components/profile/user-profile.js ***!
  \********************************************/
			/*! exports provided: default */
			/***/ function (module, __webpack_exports__, __webpack_require__) {
				"use strict";
				eval(
					'__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _profile_form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./profile-form */ "./components/profile/profile-form.js");\n/* harmony import */ var _user_profile_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user-profile.module.css */ "./components/profile/user-profile.module.css");\n/* harmony import */ var _user_profile_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_user_profile_module_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_auth_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next-auth/client */ "next-auth/client");\n/* harmony import */ var next_auth_client__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_auth_client__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "react");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n\nvar _jsxFileName = "/Users/GK47LX/source/JSStudies/NextJS/eleventh/components/profile/user-profile.js";\n\n\n\n\n\nfunction UserProfile() {\n  const {\n    0: isLoading,\n    1: setIsLoading\n  } = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(true);\n  Object(react__WEBPACK_IMPORTED_MODULE_4__["useEffect"])(() => {\n    Object(next_auth_client__WEBPACK_IMPORTED_MODULE_3__["getSession"])().then(session => {\n      if (!session) {\n        window.location.href = "/auth";\n      } else {\n        setIsLoading(false);\n      }\n    });\n  }, []);\n\n  if (isLoading) {\n    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {\n      className: _user_profile_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.profile,\n      children: "Loading..."\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 20,\n      columnNumber: 10\n    }, this);\n  }\n\n  async function changePasswordHandler(passwordData) {\n    const response = await fetch("/api/user/change-password", {\n      method: "PATCH",\n      body: JSON.stringify(passwordData),\n      headers: {\n        "Content-Type": "application/json"\n      }\n    });\n    const data = await response.json();\n    console.log(data);\n  }\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("section", {\n    className: _user_profile_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.profile,\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {\n      children: "Your User Profile"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 39,\n      columnNumber: 4\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_profile_form__WEBPACK_IMPORTED_MODULE_1__["default"], {\n      onChangePassword: changePasswordHandler\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 40,\n      columnNumber: 4\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 38,\n    columnNumber: 3\n  }, this);\n}\n\n/* harmony default export */ __webpack_exports__["default"] = (UserProfile);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3Byb2ZpbGUvdXNlci1wcm9maWxlLmpzP2I5NTAiXSwibmFtZXMiOlsiVXNlclByb2ZpbGUiLCJpc0xvYWRpbmciLCJzZXRJc0xvYWRpbmciLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsImdldFNlc3Npb24iLCJ0aGVuIiwic2Vzc2lvbiIsIndpbmRvdyIsImxvY2F0aW9uIiwiaHJlZiIsImNsYXNzZXMiLCJwcm9maWxlIiwiY2hhbmdlUGFzc3dvcmRIYW5kbGVyIiwicGFzc3dvcmREYXRhIiwicmVzcG9uc2UiLCJmZXRjaCIsIm1ldGhvZCIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwiaGVhZGVycyIsImRhdGEiLCJqc29uIiwiY29uc29sZSIsImxvZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBU0EsV0FBVCxHQUF1QjtBQUN0QixRQUFNO0FBQUEsT0FBQ0MsU0FBRDtBQUFBLE9BQVlDO0FBQVosTUFBNEJDLHNEQUFRLENBQUMsSUFBRCxDQUExQztBQUVBQyx5REFBUyxDQUFDLE1BQU07QUFDZkMsdUVBQVUsR0FBR0MsSUFBYixDQUFtQkMsT0FBRCxJQUFhO0FBQzlCLFVBQUksQ0FBQ0EsT0FBTCxFQUFjO0FBQ2JDLGNBQU0sQ0FBQ0MsUUFBUCxDQUFnQkMsSUFBaEIsR0FBdUIsT0FBdkI7QUFDQSxPQUZELE1BRU87QUFDTlIsb0JBQVksQ0FBQyxLQUFELENBQVo7QUFDQTtBQUNELEtBTkQ7QUFPQSxHQVJRLEVBUU4sRUFSTSxDQUFUOztBQVVBLE1BQUlELFNBQUosRUFBZTtBQUNkLHdCQUFPO0FBQUcsZUFBUyxFQUFFVSwrREFBTyxDQUFDQyxPQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUFQO0FBQ0E7O0FBRUQsaUJBQWVDLHFCQUFmLENBQXFDQyxZQUFyQyxFQUFtRDtBQUNsRCxVQUFNQyxRQUFRLEdBQUcsTUFBTUMsS0FBSyxDQUFDLDJCQUFELEVBQThCO0FBQ3pEQyxZQUFNLEVBQUUsT0FEaUQ7QUFFekRDLFVBQUksRUFBRUMsSUFBSSxDQUFDQyxTQUFMLENBQWVOLFlBQWYsQ0FGbUQ7QUFHekRPLGFBQU8sRUFBRTtBQUNSLHdCQUFnQjtBQURSO0FBSGdELEtBQTlCLENBQTVCO0FBUUEsVUFBTUMsSUFBSSxHQUFHLE1BQU1QLFFBQVEsQ0FBQ1EsSUFBVCxFQUFuQjtBQUVBQyxXQUFPLENBQUNDLEdBQVIsQ0FBWUgsSUFBWjtBQUNBOztBQUVELHNCQUNDO0FBQVMsYUFBUyxFQUFFWCwrREFBTyxDQUFDQyxPQUE1QjtBQUFBLDRCQUNDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREQsZUFFQyxxRUFBQyxxREFBRDtBQUFhLHNCQUFnQixFQUFFQztBQUEvQjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREQ7QUFNQTs7QUFFY2IsMEVBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL3Byb2ZpbGUvdXNlci1wcm9maWxlLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFByb2ZpbGVGb3JtIGZyb20gXCIuL3Byb2ZpbGUtZm9ybVwiO1xuaW1wb3J0IGNsYXNzZXMgZnJvbSBcIi4vdXNlci1wcm9maWxlLm1vZHVsZS5jc3NcIjtcbmltcG9ydCB7IGdldFNlc3Npb24gfSBmcm9tIFwibmV4dC1hdXRoL2NsaWVudFwiO1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuXG5mdW5jdGlvbiBVc2VyUHJvZmlsZSgpIHtcblx0Y29uc3QgW2lzTG9hZGluZywgc2V0SXNMb2FkaW5nXSA9IHVzZVN0YXRlKHRydWUpO1xuXG5cdHVzZUVmZmVjdCgoKSA9PiB7XG5cdFx0Z2V0U2Vzc2lvbigpLnRoZW4oKHNlc3Npb24pID0+IHtcblx0XHRcdGlmICghc2Vzc2lvbikge1xuXHRcdFx0XHR3aW5kb3cubG9jYXRpb24uaHJlZiA9IFwiL2F1dGhcIjtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHNldElzTG9hZGluZyhmYWxzZSk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdH0sIFtdKTtcblxuXHRpZiAoaXNMb2FkaW5nKSB7XG5cdFx0cmV0dXJuIDxwIGNsYXNzTmFtZT17Y2xhc3Nlcy5wcm9maWxlfT5Mb2FkaW5nLi4uPC9wPjtcblx0fVxuXG5cdGFzeW5jIGZ1bmN0aW9uIGNoYW5nZVBhc3N3b3JkSGFuZGxlcihwYXNzd29yZERhdGEpIHtcblx0XHRjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFwiL2FwaS91c2VyL2NoYW5nZS1wYXNzd29yZFwiLCB7XG5cdFx0XHRtZXRob2Q6IFwiUEFUQ0hcIixcblx0XHRcdGJvZHk6IEpTT04uc3RyaW5naWZ5KHBhc3N3b3JkRGF0YSksXG5cdFx0XHRoZWFkZXJzOiB7XG5cdFx0XHRcdFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiXG5cdFx0XHR9XG5cdFx0fSk7XG5cblx0XHRjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuXG5cdFx0Y29uc29sZS5sb2coZGF0YSk7XG5cdH1cblxuXHRyZXR1cm4gKFxuXHRcdDxzZWN0aW9uIGNsYXNzTmFtZT17Y2xhc3Nlcy5wcm9maWxlfT5cblx0XHRcdDxoMT5Zb3VyIFVzZXIgUHJvZmlsZTwvaDE+XG5cdFx0XHQ8UHJvZmlsZUZvcm0gb25DaGFuZ2VQYXNzd29yZD17Y2hhbmdlUGFzc3dvcmRIYW5kbGVyfSAvPlxuXHRcdDwvc2VjdGlvbj5cblx0KTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgVXNlclByb2ZpbGU7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/profile/user-profile.js\n'
				);

				/***/
			},

		/***/ "./components/profile/user-profile.module.css":
			/*!****************************************************!*\
  !*** ./components/profile/user-profile.module.css ***!
  \****************************************************/
			/*! no static exports found */
			/***/ function (module, exports) {
				eval(
					'// Exports\nmodule.exports = {\n\t"profile": "user-profile_profile__2YJCq"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3Byb2ZpbGUvdXNlci1wcm9maWxlLm1vZHVsZS5jc3M/NWQ4MiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiIuL2NvbXBvbmVudHMvcHJvZmlsZS91c2VyLXByb2ZpbGUubW9kdWxlLmNzcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcInByb2ZpbGVcIjogXCJ1c2VyLXByb2ZpbGVfcHJvZmlsZV9fMllKQ3FcIlxufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/profile/user-profile.module.css\n'
				);

				/***/
			},

		/***/ "./pages/profile.js":
			/*!**************************!*\
  !*** ./pages/profile.js ***!
  \**************************/
			/*! exports provided: getServerSideProps, default */
			/***/ function (module, __webpack_exports__, __webpack_require__) {
				"use strict";
				eval(
					'__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getServerSideProps", function() { return getServerSideProps; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_auth_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/client */ "next-auth/client");\n/* harmony import */ var next_auth_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_client__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_profile_user_profile__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/profile/user-profile */ "./components/profile/user-profile.js");\n\nvar _jsxFileName = "/Users/GK47LX/source/JSStudies/NextJS/eleventh/pages/profile.js";\n\n\n\nfunction ProfilePage() {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_profile_user_profile__WEBPACK_IMPORTED_MODULE_2__["default"], {}, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 6,\n    columnNumber: 9\n  }, this);\n}\n\nasync function getServerSideProps(context) {\n  const session = await Object(next_auth_client__WEBPACK_IMPORTED_MODULE_1__["getSession"])({\n    req: context.req\n  });\n\n  if (!session) {\n    return {\n      redirect: {\n        destination: "/auth",\n        permanent: false\n      }\n    };\n  }\n\n  return {\n    props: {\n      session\n    }\n  };\n}\n/* harmony default export */ __webpack_exports__["default"] = (ProfilePage);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9wcm9maWxlLmpzPzViZTIiXSwibmFtZXMiOlsiUHJvZmlsZVBhZ2UiLCJnZXRTZXJ2ZXJTaWRlUHJvcHMiLCJjb250ZXh0Iiwic2Vzc2lvbiIsImdldFNlc3Npb24iLCJyZXEiLCJyZWRpcmVjdCIsImRlc3RpbmF0aW9uIiwicGVybWFuZW50IiwicHJvcHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBRUE7O0FBRUEsU0FBU0EsV0FBVCxHQUF1QjtBQUN0QixzQkFBTyxxRUFBQyx3RUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBQVA7QUFDQTs7QUFFTSxlQUFlQyxrQkFBZixDQUFrQ0MsT0FBbEMsRUFBMkM7QUFDakQsUUFBTUMsT0FBTyxHQUFHLE1BQU1DLG1FQUFVLENBQUM7QUFBRUMsT0FBRyxFQUFFSCxPQUFPLENBQUNHO0FBQWYsR0FBRCxDQUFoQzs7QUFFQSxNQUFJLENBQUNGLE9BQUwsRUFBYztBQUNiLFdBQU87QUFDTkcsY0FBUSxFQUFFO0FBQ1RDLG1CQUFXLEVBQUUsT0FESjtBQUVUQyxpQkFBUyxFQUFFO0FBRkY7QUFESixLQUFQO0FBTUE7O0FBRUQsU0FBTztBQUNOQyxTQUFLLEVBQUU7QUFBRU47QUFBRjtBQURELEdBQVA7QUFHQTtBQUVjSCwwRUFBZiIsImZpbGUiOiIuL3BhZ2VzL3Byb2ZpbGUuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBnZXRTZXNzaW9uIH0gZnJvbSBcIm5leHQtYXV0aC9jbGllbnRcIjtcblxuaW1wb3J0IFVzZXJQcm9maWxlIGZyb20gXCIuLi9jb21wb25lbnRzL3Byb2ZpbGUvdXNlci1wcm9maWxlXCI7XG5cbmZ1bmN0aW9uIFByb2ZpbGVQYWdlKCkge1xuXHRyZXR1cm4gPFVzZXJQcm9maWxlIC8+O1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U2VydmVyU2lkZVByb3BzKGNvbnRleHQpIHtcblx0Y29uc3Qgc2Vzc2lvbiA9IGF3YWl0IGdldFNlc3Npb24oeyByZXE6IGNvbnRleHQucmVxIH0pO1xuXG5cdGlmICghc2Vzc2lvbikge1xuXHRcdHJldHVybiB7XG5cdFx0XHRyZWRpcmVjdDoge1xuXHRcdFx0XHRkZXN0aW5hdGlvbjogXCIvYXV0aFwiLFxuXHRcdFx0XHRwZXJtYW5lbnQ6IGZhbHNlXG5cdFx0XHR9XG5cdFx0fTtcblx0fVxuXG5cdHJldHVybiB7XG5cdFx0cHJvcHM6IHsgc2Vzc2lvbiB9XG5cdH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IFByb2ZpbGVQYWdlO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/profile.js\n'
				);

				/***/
			},

		/***/ "next-auth/client":
			/*!***********************************!*\
  !*** external "next-auth/client" ***!
  \***********************************/
			/*! no static exports found */
			/***/ function (module, exports) {
				eval(
					'module.exports = require("next-auth/client");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0LWF1dGgvY2xpZW50XCI/ZDNiMCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJuZXh0LWF1dGgvY2xpZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC1hdXRoL2NsaWVudFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///next-auth/client\n'
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
			}

		/******/
	}
);
