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
		(__webpack_require__.s = "./pages/api/auth/[...nextauth].js")
	);
	/******/
})(
	/************************************************************************/
	/******/ {
		/***/ "./lib/auth.js":
			/*!*********************!*\
  !*** ./lib/auth.js ***!
  \*********************/
			/*! exports provided: hashPassword, verifyPassword */
			/***/ function (module, __webpack_exports__, __webpack_require__) {
				"use strict";
				eval(
					'__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hashPassword", function() { return hashPassword; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "verifyPassword", function() { return verifyPassword; });\n/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bcryptjs */ "bcryptjs");\n/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(bcryptjs__WEBPACK_IMPORTED_MODULE_0__);\n\nasync function hashPassword(password) {\n  const hashedPassword = await Object(bcryptjs__WEBPACK_IMPORTED_MODULE_0__["hash"])(password, 12);\n  return hashedPassword;\n}\nasync function verifyPassword(password, hashedPassword) {\n  const isValid = await Object(bcryptjs__WEBPACK_IMPORTED_MODULE_0__["compare"])(password, hashedPassword);\n  return isValid;\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9saWIvYXV0aC5qcz8zMjRmIl0sIm5hbWVzIjpbImhhc2hQYXNzd29yZCIsInBhc3N3b3JkIiwiaGFzaGVkUGFzc3dvcmQiLCJoYXNoIiwidmVyaWZ5UGFzc3dvcmQiLCJpc1ZhbGlkIiwiY29tcGFyZSJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRU8sZUFBZUEsWUFBZixDQUE0QkMsUUFBNUIsRUFBc0M7QUFDNUMsUUFBTUMsY0FBYyxHQUFHLE1BQU1DLHFEQUFJLENBQUNGLFFBQUQsRUFBVyxFQUFYLENBQWpDO0FBQ0EsU0FBT0MsY0FBUDtBQUNBO0FBRU0sZUFBZUUsY0FBZixDQUE4QkgsUUFBOUIsRUFBd0NDLGNBQXhDLEVBQXdEO0FBQzlELFFBQU1HLE9BQU8sR0FBRyxNQUFNQyx3REFBTyxDQUFDTCxRQUFELEVBQVdDLGNBQVgsQ0FBN0I7QUFDQSxTQUFPRyxPQUFQO0FBQ0EiLCJmaWxlIjoiLi9saWIvYXV0aC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGhhc2gsIGNvbXBhcmUgfSBmcm9tIFwiYmNyeXB0anNcIjtcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGhhc2hQYXNzd29yZChwYXNzd29yZCkge1xuXHRjb25zdCBoYXNoZWRQYXNzd29yZCA9IGF3YWl0IGhhc2gocGFzc3dvcmQsIDEyKTtcblx0cmV0dXJuIGhhc2hlZFBhc3N3b3JkO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdmVyaWZ5UGFzc3dvcmQocGFzc3dvcmQsIGhhc2hlZFBhc3N3b3JkKSB7XG5cdGNvbnN0IGlzVmFsaWQgPSBhd2FpdCBjb21wYXJlKHBhc3N3b3JkLCBoYXNoZWRQYXNzd29yZCk7XG5cdHJldHVybiBpc1ZhbGlkO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./lib/auth.js\n'
				);

				/***/
			},

		/***/ "./lib/db.js":
			/*!*******************!*\
  !*** ./lib/db.js ***!
  \*******************/
			/*! exports provided: connectToDatabase */
			/***/ function (module, __webpack_exports__, __webpack_require__) {
				"use strict";
				eval(
					'__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "connectToDatabase", function() { return connectToDatabase; });\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongodb */ "mongodb");\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongodb__WEBPACK_IMPORTED_MODULE_0__);\n\nasync function connectToDatabase() {\n  const client = await mongodb__WEBPACK_IMPORTED_MODULE_0__["MongoClient"].connect("mongodb+srv://sa:sa@cluster0.nnllzq2.mongodb.net/auth-demo?retryWrites=true&w=majority");\n  return client;\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9saWIvZGIuanM/YmI1MSJdLCJuYW1lcyI6WyJjb25uZWN0VG9EYXRhYmFzZSIsImNsaWVudCIsIk1vbmdvQ2xpZW50IiwiY29ubmVjdCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVPLGVBQWVBLGlCQUFmLEdBQW1DO0FBQ3pDLFFBQU1DLE1BQU0sR0FBRyxNQUFNQyxtREFBVyxDQUFDQyxPQUFaLENBQ3BCLHdGQURvQixDQUFyQjtBQUlBLFNBQU9GLE1BQVA7QUFDQSIsImZpbGUiOiIuL2xpYi9kYi5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE1vbmdvQ2xpZW50IH0gZnJvbSBcIm1vbmdvZGJcIjtcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNvbm5lY3RUb0RhdGFiYXNlKCkge1xuXHRjb25zdCBjbGllbnQgPSBhd2FpdCBNb25nb0NsaWVudC5jb25uZWN0KFxuXHRcdFwibW9uZ29kYitzcnY6Ly9zYTpzYUBjbHVzdGVyMC5ubmxsenEyLm1vbmdvZGIubmV0L2F1dGgtZGVtbz9yZXRyeVdyaXRlcz10cnVlJnc9bWFqb3JpdHlcIlxuXHQpO1xuXG5cdHJldHVybiBjbGllbnQ7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./lib/db.js\n'
				);

				/***/
			},

		/***/ "./pages/api/auth/[...nextauth].js":
			/*!*****************************************!*\
  !*** ./pages/api/auth/[...nextauth].js ***!
  \*****************************************/
			/*! exports provided: default */
			/***/ function (module, __webpack_exports__, __webpack_require__) {
				"use strict";
				eval(
					'__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth */ "next-auth");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_auth_providers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/providers */ "next-auth/providers");\n/* harmony import */ var next_auth_providers__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_providers__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _lib_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../lib/auth */ "./lib/auth.js");\n/* harmony import */ var _lib_db__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../lib/db */ "./lib/db.js");\n\n\n\n\n/* harmony default export */ __webpack_exports__["default"] = (next_auth__WEBPACK_IMPORTED_MODULE_0___default()({\n  session: {\n    jwt: true\n  },\n  providers: [next_auth_providers__WEBPACK_IMPORTED_MODULE_1___default.a.Credentials({\n    async authorize(credentials) {\n      const client = await Object(_lib_db__WEBPACK_IMPORTED_MODULE_3__["connectToDatabase"])();\n      const usersCollection = client.db().collection("users");\n      const user = await usersCollection.findOne({\n        email: credentials.email\n      });\n\n      if (!user) {\n        client.close();\n        throw new Error("No user found!");\n      }\n\n      const isValid = await Object(_lib_auth__WEBPACK_IMPORTED_MODULE_2__["verifyPassword"])(credentials.password, user.password);\n\n      if (!isValid) {\n        client.close();\n        throw new Error("Could not log you in!");\n      }\n\n      client.close();\n      return {\n        email: user.email\n      };\n    }\n\n  })]\n}));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdLmpzPzk5MDkiXSwibmFtZXMiOlsiTmV4dEF1dGgiLCJzZXNzaW9uIiwiand0IiwicHJvdmlkZXJzIiwiUHJvdmlkZXJzIiwiQ3JlZGVudGlhbHMiLCJhdXRob3JpemUiLCJjcmVkZW50aWFscyIsImNsaWVudCIsImNvbm5lY3RUb0RhdGFiYXNlIiwidXNlcnNDb2xsZWN0aW9uIiwiZGIiLCJjb2xsZWN0aW9uIiwidXNlciIsImZpbmRPbmUiLCJlbWFpbCIsImNsb3NlIiwiRXJyb3IiLCJpc1ZhbGlkIiwidmVyaWZ5UGFzc3dvcmQiLCJwYXNzd29yZCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUVlQSwrR0FBUSxDQUFDO0FBQ3ZCQyxTQUFPLEVBQUU7QUFDUkMsT0FBRyxFQUFFO0FBREcsR0FEYztBQUl2QkMsV0FBUyxFQUFFLENBQ1ZDLDBEQUFTLENBQUNDLFdBQVYsQ0FBc0I7QUFDckIsVUFBTUMsU0FBTixDQUFnQkMsV0FBaEIsRUFBNkI7QUFDNUIsWUFBTUMsTUFBTSxHQUFHLE1BQU1DLGlFQUFpQixFQUF0QztBQUVBLFlBQU1DLGVBQWUsR0FBR0YsTUFBTSxDQUFDRyxFQUFQLEdBQVlDLFVBQVosQ0FBdUIsT0FBdkIsQ0FBeEI7QUFFQSxZQUFNQyxJQUFJLEdBQUcsTUFBTUgsZUFBZSxDQUFDSSxPQUFoQixDQUF3QjtBQUMxQ0MsYUFBSyxFQUFFUixXQUFXLENBQUNRO0FBRHVCLE9BQXhCLENBQW5COztBQUlBLFVBQUksQ0FBQ0YsSUFBTCxFQUFXO0FBQ1ZMLGNBQU0sQ0FBQ1EsS0FBUDtBQUNBLGNBQU0sSUFBSUMsS0FBSixDQUFVLGdCQUFWLENBQU47QUFDQTs7QUFFRCxZQUFNQyxPQUFPLEdBQUcsTUFBTUMsZ0VBQWMsQ0FDbkNaLFdBQVcsQ0FBQ2EsUUFEdUIsRUFFbkNQLElBQUksQ0FBQ08sUUFGOEIsQ0FBcEM7O0FBS0EsVUFBSSxDQUFDRixPQUFMLEVBQWM7QUFDYlYsY0FBTSxDQUFDUSxLQUFQO0FBQ0EsY0FBTSxJQUFJQyxLQUFKLENBQVUsdUJBQVYsQ0FBTjtBQUNBOztBQUVEVCxZQUFNLENBQUNRLEtBQVA7QUFDQSxhQUFPO0FBQUVELGFBQUssRUFBRUYsSUFBSSxDQUFDRTtBQUFkLE9BQVA7QUFDQTs7QUEzQm9CLEdBQXRCLENBRFU7QUFKWSxDQUFELENBQXZCIiwiZmlsZSI6Ii4vcGFnZXMvYXBpL2F1dGgvWy4uLm5leHRhdXRoXS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBOZXh0QXV0aCBmcm9tIFwibmV4dC1hdXRoXCI7XG5pbXBvcnQgUHJvdmlkZXJzIGZyb20gXCJuZXh0LWF1dGgvcHJvdmlkZXJzXCI7XG5cbmltcG9ydCB7IHZlcmlmeVBhc3N3b3JkIH0gZnJvbSBcIi4uLy4uLy4uL2xpYi9hdXRoXCI7XG5pbXBvcnQgeyBjb25uZWN0VG9EYXRhYmFzZSB9IGZyb20gXCIuLi8uLi8uLi9saWIvZGJcIjtcblxuZXhwb3J0IGRlZmF1bHQgTmV4dEF1dGgoe1xuXHRzZXNzaW9uOiB7XG5cdFx0and0OiB0cnVlXG5cdH0sXG5cdHByb3ZpZGVyczogW1xuXHRcdFByb3ZpZGVycy5DcmVkZW50aWFscyh7XG5cdFx0XHRhc3luYyBhdXRob3JpemUoY3JlZGVudGlhbHMpIHtcblx0XHRcdFx0Y29uc3QgY2xpZW50ID0gYXdhaXQgY29ubmVjdFRvRGF0YWJhc2UoKTtcblxuXHRcdFx0XHRjb25zdCB1c2Vyc0NvbGxlY3Rpb24gPSBjbGllbnQuZGIoKS5jb2xsZWN0aW9uKFwidXNlcnNcIik7XG5cblx0XHRcdFx0Y29uc3QgdXNlciA9IGF3YWl0IHVzZXJzQ29sbGVjdGlvbi5maW5kT25lKHtcblx0XHRcdFx0XHRlbWFpbDogY3JlZGVudGlhbHMuZW1haWxcblx0XHRcdFx0fSk7XG5cblx0XHRcdFx0aWYgKCF1c2VyKSB7XG5cdFx0XHRcdFx0Y2xpZW50LmNsb3NlKCk7XG5cdFx0XHRcdFx0dGhyb3cgbmV3IEVycm9yKFwiTm8gdXNlciBmb3VuZCFcIik7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRjb25zdCBpc1ZhbGlkID0gYXdhaXQgdmVyaWZ5UGFzc3dvcmQoXG5cdFx0XHRcdFx0Y3JlZGVudGlhbHMucGFzc3dvcmQsXG5cdFx0XHRcdFx0dXNlci5wYXNzd29yZFxuXHRcdFx0XHQpO1xuXG5cdFx0XHRcdGlmICghaXNWYWxpZCkge1xuXHRcdFx0XHRcdGNsaWVudC5jbG9zZSgpO1xuXHRcdFx0XHRcdHRocm93IG5ldyBFcnJvcihcIkNvdWxkIG5vdCBsb2cgeW91IGluIVwiKTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGNsaWVudC5jbG9zZSgpO1xuXHRcdFx0XHRyZXR1cm4geyBlbWFpbDogdXNlci5lbWFpbCB9O1xuXHRcdFx0fVxuXHRcdH0pXG5cdF1cbn0pO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/api/auth/[...nextauth].js\n'
				);

				/***/
			},

		/***/ bcryptjs:
			/*!***************************!*\
  !*** external "bcryptjs" ***!
  \***************************/
			/*! no static exports found */
			/***/ function (module, exports) {
				eval(
					'module.exports = require("bcryptjs");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJiY3J5cHRqc1wiP2NlNTUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoiYmNyeXB0anMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJiY3J5cHRqc1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///bcryptjs\n'
				);

				/***/
			},

		/***/ mongodb:
			/*!**************************!*\
  !*** external "mongodb" ***!
  \**************************/
			/*! no static exports found */
			/***/ function (module, exports) {
				eval(
					'module.exports = require("mongodb");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJtb25nb2RiXCI/ZGVmZiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJtb25nb2RiLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibW9uZ29kYlwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///mongodb\n'
				);

				/***/
			},

		/***/ "next-auth":
			/*!****************************!*\
  !*** external "next-auth" ***!
  \****************************/
			/*! no static exports found */
			/***/ function (module, exports) {
				eval(
					'module.exports = require("next-auth");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0LWF1dGhcIj8yOWY3Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6Im5leHQtYXV0aC5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQtYXV0aFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///next-auth\n'
				);

				/***/
			},

		/***/ "next-auth/providers":
			/*!**************************************!*\
  !*** external "next-auth/providers" ***!
  \**************************************/
			/*! no static exports found */
			/***/ function (module, exports) {
				eval(
					'module.exports = require("next-auth/providers");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0LWF1dGgvcHJvdmlkZXJzXCI/NjljNyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJuZXh0LWF1dGgvcHJvdmlkZXJzLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC1hdXRoL3Byb3ZpZGVyc1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///next-auth/providers\n'
				);

				/***/
			}

		/******/
	}
);
