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
		(__webpack_require__.s = "./pages/auth.js")
	);
	/******/
})(
	/************************************************************************/
	/******/ {
		/***/ "./components/auth/auth-form.js":
			/*!**************************************!*\
  !*** ./components/auth/auth-form.js ***!
  \**************************************/
			/*! exports provided: default */
			/***/ function (module, __webpack_exports__, __webpack_require__) {
				"use strict";
				eval(
					'__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_auth_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-auth/client */ "next-auth/client");\n/* harmony import */ var next_auth_client__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_auth_client__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "next/router");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _auth_form_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./auth-form.module.css */ "./components/auth/auth-form.module.css");\n/* harmony import */ var _auth_form_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_auth_form_module_css__WEBPACK_IMPORTED_MODULE_4__);\n\nvar _jsxFileName = "/Users/GK47LX/source/JSStudies/NextJS/eleventh/components/auth/auth-form.js";\n\n\n\n\n\nasync function createUser(email, password) {\n  const response = await fetch("/api/auth/signup", {\n    method: "POST",\n    body: JSON.stringify({\n      email,\n      password\n    }),\n    headers: {\n      "Content-Type": "application/json"\n    }\n  });\n  const data = await response.json();\n\n  if (!response.ok) {\n    throw new Error(data.message || "Something went wrong!");\n  }\n\n  return data;\n}\n\nfunction AuthForm() {\n  const emailInputRef = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])();\n  const passwordInputRef = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])();\n  const {\n    0: isLogin,\n    1: setIsLogin\n  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(true);\n  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_3__["useRouter"])();\n\n  function switchAuthModeHandler() {\n    setIsLogin(prevState => !prevState);\n  }\n\n  async function submitHandler(event) {\n    event.preventDefault();\n    const enteredEmail = emailInputRef.current.value;\n    const enteredPassword = passwordInputRef.current.value;\n\n    if (isLogin) {\n      const result = await Object(next_auth_client__WEBPACK_IMPORTED_MODULE_2__["signIn"])("credentials", {\n        redirect: false,\n        email: enteredEmail,\n        password: enteredPassword\n      });\n      console.log(result);\n\n      if (!result.error) {\n        router.replace("/profile");\n      }\n    } else {\n      try {\n        const result = await createUser(enteredEmail, enteredPassword);\n        console.log(result);\n      } catch (error) {\n        console.log(error);\n      }\n    }\n  }\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("section", {\n    className: _auth_form_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.auth,\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {\n      children: isLogin ? "Login" : "Sign Up"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 64,\n      columnNumber: 4\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("form", {\n      onSubmit: submitHandler,\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {\n        className: _auth_form_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.control,\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {\n          htmlFor: "email",\n          children: "Your Email"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 67,\n          columnNumber: 6\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {\n          type: "email",\n          id: "email",\n          required: true,\n          ref: emailInputRef\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 68,\n          columnNumber: 6\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 66,\n        columnNumber: 5\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {\n        className: _auth_form_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.control,\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {\n          htmlFor: "password",\n          children: "Your Password"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 76,\n          columnNumber: 6\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {\n          type: "password",\n          id: "password",\n          required: true,\n          ref: passwordInputRef\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 77,\n          columnNumber: 6\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 75,\n        columnNumber: 5\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {\n        className: _auth_form_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.actions,\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {\n          children: isLogin ? "Login" : "Create Account"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 85,\n          columnNumber: 6\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {\n          type: "button",\n          className: _auth_form_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.toggle,\n          onClick: switchAuthModeHandler,\n          children: isLogin ? "Create new account" : "Login with existing account"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 86,\n          columnNumber: 6\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 84,\n        columnNumber: 5\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 65,\n      columnNumber: 4\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 63,\n    columnNumber: 3\n  }, this);\n}\n\n/* harmony default export */ __webpack_exports__["default"] = (AuthForm);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2F1dGgvYXV0aC1mb3JtLmpzP2VlOTgiXSwibmFtZXMiOlsiY3JlYXRlVXNlciIsImVtYWlsIiwicGFzc3dvcmQiLCJyZXNwb25zZSIsImZldGNoIiwibWV0aG9kIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJoZWFkZXJzIiwiZGF0YSIsImpzb24iLCJvayIsIkVycm9yIiwibWVzc2FnZSIsIkF1dGhGb3JtIiwiZW1haWxJbnB1dFJlZiIsInVzZVJlZiIsInBhc3N3b3JkSW5wdXRSZWYiLCJpc0xvZ2luIiwic2V0SXNMb2dpbiIsInVzZVN0YXRlIiwicm91dGVyIiwidXNlUm91dGVyIiwic3dpdGNoQXV0aE1vZGVIYW5kbGVyIiwicHJldlN0YXRlIiwic3VibWl0SGFuZGxlciIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJlbnRlcmVkRW1haWwiLCJjdXJyZW50IiwidmFsdWUiLCJlbnRlcmVkUGFzc3dvcmQiLCJyZXN1bHQiLCJzaWduSW4iLCJyZWRpcmVjdCIsImNvbnNvbGUiLCJsb2ciLCJlcnJvciIsInJlcGxhY2UiLCJjbGFzc2VzIiwiYXV0aCIsImNvbnRyb2wiLCJhY3Rpb25zIiwidG9nZ2xlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRUE7O0FBRUEsZUFBZUEsVUFBZixDQUEwQkMsS0FBMUIsRUFBaUNDLFFBQWpDLEVBQTJDO0FBQzFDLFFBQU1DLFFBQVEsR0FBRyxNQUFNQyxLQUFLLENBQUMsa0JBQUQsRUFBcUI7QUFDaERDLFVBQU0sRUFBRSxNQUR3QztBQUVoREMsUUFBSSxFQUFFQyxJQUFJLENBQUNDLFNBQUwsQ0FBZTtBQUFFUCxXQUFGO0FBQVNDO0FBQVQsS0FBZixDQUYwQztBQUdoRE8sV0FBTyxFQUFFO0FBQ1Isc0JBQWdCO0FBRFI7QUFIdUMsR0FBckIsQ0FBNUI7QUFRQSxRQUFNQyxJQUFJLEdBQUcsTUFBTVAsUUFBUSxDQUFDUSxJQUFULEVB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QSxnQkFERCxlQUVDO0FBQ0MsY0FBSSxFQUFDLFFBRE47QUFFQyxtQkFBUyxFQUFFcUIsNERBQU8sQ0FBQ0ksTUFGcEI7QUFHQyxpQkFBTyxFQUFFcEIscUJBSFY7QUFBQSxvQkFJRUwsT0FBTyxHQUNMLG9CQURLLEdBRUw7QUFOSjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUZEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQW5CRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFGRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERDtBQW9DQTs7QUFFY0osdUVBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL2F1dGgvYXV0aC1mb3JtLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZVJlZiB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgc2lnbkluIH0gZnJvbSBcIm5leHQtYXV0aC9jbGllbnRcIjtcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuXG5pbXBvcnQgY2xhc3NlcyBmcm9tIFwiLi9hdXRoLWZvcm0ubW9kdWxlLmNzc1wiO1xuXG5hc3luYyBmdW5jdGlvbiBjcmVhdGVVc2VyKGVtYWlsLCBwYXNzd29yZCkge1xuXHRjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFwiL2FwaS9hdXRoL3NpZ251cFwiLCB7XG5cdFx0bWV0aG9kOiBcIlBPU1RcIixcblx0XHRib2R5OiBKU09OLnN0cmluZ2lmeSh7IGVtYWlsLCBwYXNzd29yZCB9KSxcblx0XHRoZWFkZXJzOiB7XG5cdFx0XHRcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIlxuXHRcdH1cblx0fSk7XG5cblx0Y29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcblxuXHRpZiAoIXJlc3BvbnNlLm9rKSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKGRhdGEubWVzc2FnZSB8fCBcIlNvbWV0aGluZyB3ZW50IHdyb25nIVwiKTtcblx0fVxuXG5cdHJldHVybiBkYXRhO1xufVxuXG5mdW5jdGlvbiBBdXRoRm9ybSgpIHtcblx0Y29uc3QgZW1haWxJbnB1dFJlZiA9IHVzZVJlZigpO1xuXHRjb25zdCBwYXNzd29yZElucHV0UmVmID0gdXNlUmVmKCk7XG5cblx0Y29uc3QgW2lzTG9naW4sIHNldElzTG9naW5dID0gdXNlU3RhdGUodHJ1ZSk7XG5cdGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuXG5cdGZ1bmN0aW9uIHN3aXRjaEF1dGhNb2RlSGFuZGxlcigpIHtcblx0XHRzZXRJc0xvZ2luKChwcmV2U3RhdGUpID0+ICFwcmV2U3RhdGUpO1xuXHR9XG5cblx0YXN5bmMgZnVuY3Rpb24gc3VibWl0SGFuZGxlcihldmVudCkge1xuXHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cblx0XHRjb25zdCBlbnRlcmVkRW1haWwgPSBlbWFpbElucHV0UmVmLmN1cnJlbnQudmFsdWU7XG5cdFx0Y29uc3QgZW50ZXJlZFBhc3N3b3JkID0gcGFzc3dvcmRJbnB1dFJlZi5jdXJyZW50LnZhbHVlO1xuXG5cdFx0aWYgKGlzTG9naW4pIHtcblx0XHRcdGNvbnN0IHJlc3VsdCA9IGF3YWl0IHNpZ25JbihcImNyZWRlbnRpYWxzXCIsIHtcblx0XHRcdFx0cmVkaXJlY3Q6IGZhbHNlLFxuXHRcdFx0XHRlbWFpbDogZW50ZXJlZEVtYWlsLFxuXHRcdFx0XHRwYXNzd29yZDogZW50ZXJlZFBhc3N3b3JkXG5cdFx0XHR9KTtcblx0XHRcdGNvbnNvbGUubG9nKHJlc3VsdCk7XG5cdFx0XHRpZiAoIXJlc3VsdC5lcnJvcikge1xuXHRcdFx0XHRyb3V0ZXIucmVwbGFjZShcIi9wcm9maWxlXCIpO1xuXHRcdFx0fVxuXHRcdH0gZWxzZSB7XG5cdFx0XHR0cnkge1xuXHRcdFx0XHRjb25zdCByZXN1bHQgPSBhd2FpdCBjcmVhdGVVc2VyKGVudGVyZWRFbWFpbCwgZW50ZXJlZFBhc3N3b3JkKTtcblx0XHRcdFx0Y29uc29sZS5sb2cocmVzdWx0KTtcblx0XHRcdH0gY2F0Y2ggKGVycm9yKSB7XG5cdFx0XHRcdGNvbnNvbGUubG9nKGVycm9yKTtcblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHRyZXR1cm4gKFxuXHRcdDxzZWN0aW9uIGNsYXNzTmFtZT17Y2xhc3Nlcy5hdXRofT5cblx0XHRcdDxoMT57aXNMb2dpbiA/IFwiTG9naW5cIiA6IFwiU2lnbiBVcFwifTwvaDE+XG5cdFx0XHQ8Zm9ybSBvblN1Ym1pdD17c3VibWl0SGFuZGxlcn0+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmNvbnRyb2x9PlxuXHRcdFx0XHRcdDxsYWJlbCBodG1sRm9yPVwiZW1haWxcIj5Zb3VyIEVtYWlsPC9sYWJlbD5cblx0XHRcdFx0XHQ8aW5wdXRcblx0XHRcdFx0XHRcdHR5cGU9XCJlbWFpbFwiXG5cdFx0XHRcdFx0XHRpZD1cImVtYWlsXCJcblx0XHRcdFx0XHRcdHJlcXVpcmVkXG5cdFx0XHRcdFx0XHRyZWY9e2VtYWlsSW5wdXRSZWZ9XG5cdFx0XHRcdFx0Lz5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmNvbnRyb2x9PlxuXHRcdFx0XHRcdDxsYWJlbCBodG1sRm9yPVwicGFzc3dvcmRcIj5Zb3VyIFBhc3N3b3JkPC9sYWJlbD5cblx0XHRcdFx0XHQ8aW5wdXRcblx0XHRcdFx0XHRcdHR5cGU9XCJwYXNzd29yZFwiXG5cdFx0XHRcdFx0XHRpZD1cInBhc3N3b3JkXCJcblx0XHRcdFx0XHRcdHJlcXVpcmVkXG5cdFx0XHRcdFx0XHRyZWY9e3Bhc3N3b3JkSW5wdXRSZWZ9XG5cdFx0XHRcdFx0Lz5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmFjdGlvbnN9PlxuXHRcdFx0XHRcdDxidXR0b24+e2lzTG9naW4gPyBcIkxvZ2luXCIgOiBcIkNyZWF0ZSBBY2NvdW50XCJ9PC9idXR0b24+XG5cdFx0XHRcdFx0PGJ1dHRvblxuXHRcdFx0XHRcdFx0dHlwZT1cImJ1dHRvblwiXG5cdFx0XHRcdFx0XHRjbGFzc05hbWU9e2NsYXNzZXMudG9nZ2xlfVxuXHRcdFx0XHRcdFx0b25DbGljaz17c3dpdGNoQXV0aE1vZGVIYW5kbGVyfT5cblx0XHRcdFx0XHRcdHtpc0xvZ2luXG5cdFx0XHRcdFx0XHRcdD8gXCJDcmVhdGUgbmV3IGFjY291bnRcIlxuXHRcdFx0XHRcdFx0XHQ6IFwiTG9naW4gd2l0aCBleGlzdGluZyBhY2NvdW50XCJ9XG5cdFx0XHRcdFx0PC9idXR0b24+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0PC9mb3JtPlxuXHRcdDwvc2VjdGlvbj5cblx0KTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgQXV0aEZvcm07XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/auth/auth-form.js\n'
				);

				/***/
			},

		/***/ "./components/auth/auth-form.module.css":
			/*!**********************************************!*\
  !*** ./components/auth/auth-form.module.css ***!
  \**********************************************/
			/*! no static exports found */
			/***/ function (module, exports) {
				eval(
					'// Exports\nmodule.exports = {\n\t"auth": "auth-form_auth__3FfGf",\n\t"control": "auth-form_control__2m7EA",\n\t"actions": "auth-form_actions__2JT2z",\n\t"toggle": "auth-form_toggle__2PHeb"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2F1dGgvYXV0aC1mb3JtLm1vZHVsZS5jc3M/NWI5MSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiIuL2NvbXBvbmVudHMvYXV0aC9hdXRoLWZvcm0ubW9kdWxlLmNzcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImF1dGhcIjogXCJhdXRoLWZvcm1fYXV0aF9fM0ZmR2ZcIixcblx0XCJjb250cm9sXCI6IFwiYXV0aC1mb3JtX2NvbnRyb2xfXzJtN0VBXCIsXG5cdFwiYWN0aW9uc1wiOiBcImF1dGgtZm9ybV9hY3Rpb25zX18ySlQyelwiLFxuXHRcInRvZ2dsZVwiOiBcImF1dGgtZm9ybV90b2dnbGVfXzJQSGViXCJcbn07XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/auth/auth-form.module.css\n'
				);

				/***/
			},

		/***/ "./pages/auth.js":
			/*!***********************!*\
  !*** ./pages/auth.js ***!
  \***********************/
			/*! exports provided: default */
			/***/ function (module, __webpack_exports__, __webpack_require__) {
				"use strict";
				eval(
					'__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "next/router");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_auth_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-auth/client */ "next-auth/client");\n/* harmony import */ var next_auth_client__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_auth_client__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_auth_auth_form__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/auth/auth-form */ "./components/auth/auth-form.js");\n\nvar _jsxFileName = "/Users/GK47LX/source/JSStudies/NextJS/eleventh/pages/auth.js";\n\n\n\n\n\nfunction AuthPage() {\n  const {\n    0: isLoading,\n    1: setIsLoading\n  } = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(true);\n  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_1__["useRouter"])();\n  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(() => {\n    Object(next_auth_client__WEBPACK_IMPORTED_MODULE_2__["getSession"])().then(session => {\n      if (session) {\n        router.replace("/");\n      } else {\n        setIsLoading(false);\n      }\n    });\n  }, [router]);\n\n  if (isLoading) {\n    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {\n      children: "Loading..."\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 22,\n      columnNumber: 10\n    }, this);\n  }\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_auth_auth_form__WEBPACK_IMPORTED_MODULE_4__["default"], {}, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 25,\n    columnNumber: 9\n  }, this);\n}\n\n/* harmony default export */ __webpack_exports__["default"] = (AuthPage);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9hdXRoLmpzP2NhNGUiXSwibmFtZXMiOlsiQXV0aFBhZ2UiLCJpc0xvYWRpbmciLCJzZXRJc0xvYWRpbmciLCJ1c2VTdGF0ZSIsInJvdXRlciIsInVzZVJvdXRlciIsInVzZUVmZmVjdCIsImdldFNlc3Npb24iLCJ0aGVuIiwic2Vzc2lvbiIsInJlcGxhY2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVBOztBQUVBLFNBQVNBLFFBQVQsR0FBb0I7QUFDbkIsUUFBTTtBQUFBLE9BQUNDLFNBQUQ7QUFBQSxPQUFZQztBQUFaLE1BQTRCQyxzREFBUSxDQUFDLElBQUQsQ0FBMUM7QUFDQSxRQUFNQyxNQUFNLEdBQUdDLDZEQUFTLEVBQXhCO0FBRUFDLHlEQUFTLENBQUMsTUFBTTtBQUNmQyx1RUFBVSxHQUFHQyxJQUFiLENBQW1CQyxPQUFELElBQWE7QUFDOUIsVUFBSUEsT0FBSixFQUFhO0FBQ1pMLGNBQU0sQ0FBQ00sT0FBUCxDQUFlLEdBQWY7QUFDQSxPQUZELE1BRU87QUFDTlIsb0JBQVksQ0FBQyxLQUFELENBQVo7QUFDQTtBQUNELEtBTkQ7QUFPQSxHQVJRLEVBUU4sQ0FBQ0UsTUFBRCxDQVJNLENBQVQ7O0FBVUEsTUFBSUgsU0FBSixFQUFlO0FBQ2Qsd0JBQU87QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFBUDtBQUNBOztBQUVELHNCQUFPLHFFQUFDLGtFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFBUDtBQUNBOztBQUVjRCx1RUFBZiIsImZpbGUiOiIuL3BhZ2VzL2F1dGguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcbmltcG9ydCB7IGdldFNlc3Npb24gfSBmcm9tIFwibmV4dC1hdXRoL2NsaWVudFwiO1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuXG5pbXBvcnQgQXV0aEZvcm0gZnJvbSBcIi4uL2NvbXBvbmVudHMvYXV0aC9hdXRoLWZvcm1cIjtcblxuZnVuY3Rpb24gQXV0aFBhZ2UoKSB7XG5cdGNvbnN0IFtpc0xvYWRpbmcsIHNldElzTG9hZGluZ10gPSB1c2VTdGF0ZSh0cnVlKTtcblx0Y29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG5cblx0dXNlRWZmZWN0KCgpID0+IHtcblx0XHRnZXRTZXNzaW9uKCkudGhlbigoc2Vzc2lvbikgPT4ge1xuXHRcdFx0aWYgKHNlc3Npb24pIHtcblx0XHRcdFx0cm91dGVyLnJlcGxhY2UoXCIvXCIpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0c2V0SXNMb2FkaW5nKGZhbHNlKTtcblx0XHRcdH1cblx0XHR9KTtcblx0fSwgW3JvdXRlcl0pO1xuXG5cdGlmIChpc0xvYWRpbmcpIHtcblx0XHRyZXR1cm4gPHA+TG9hZGluZy4uLjwvcD47XG5cdH1cblxuXHRyZXR1cm4gPEF1dGhGb3JtIC8+O1xufVxuXG5leHBvcnQgZGVmYXVsdCBBdXRoUGFnZTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/auth.js\n'
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
