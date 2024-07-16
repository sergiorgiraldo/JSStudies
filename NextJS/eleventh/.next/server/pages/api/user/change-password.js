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
		(__webpack_require__.s = "./pages/api/user/change-password.js")
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

		/***/ "./pages/api/user/change-password.js":
			/*!*******************************************!*\
  !*** ./pages/api/user/change-password.js ***!
  \*******************************************/
			/*! exports provided: default */
			/***/ function (module, __webpack_exports__, __webpack_require__) {
				"use strict";
				eval(
					'__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var next_auth_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth/client */ "next-auth/client");\n/* harmony import */ var next_auth_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_auth_client__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _lib_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../lib/auth */ "./lib/auth.js");\n/* harmony import */ var _lib_db__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../lib/db */ "./lib/db.js");\n\n\n\n\nasync function handler(req, res) {\n  if (req.method !== "PATCH") {\n    return;\n  }\n\n  console.log("Changing password.");\n  const session = await Object(next_auth_client__WEBPACK_IMPORTED_MODULE_0__["getSession"])({\n    req: req\n  });\n\n  if (!session) {\n    res.status(401).json({\n      message: "Not authenticated!"\n    });\n    return;\n  }\n\n  const userEmail = session.user.email;\n  const oldPassword = req.body.oldPassword;\n  const newPassword = req.body.newPassword;\n  const client = await Object(_lib_db__WEBPACK_IMPORTED_MODULE_2__["connectToDatabase"])();\n  const usersCollection = client.db().collection("users");\n  const user = await usersCollection.findOne({\n    email: userEmail\n  });\n\n  if (!user) {\n    res.status(404).json({\n      message: "User not found."\n    });\n    client.close();\n    return;\n  }\n\n  const currentPassword = user.password;\n  const passwordsAreEqual = await Object(_lib_auth__WEBPACK_IMPORTED_MODULE_1__["verifyPassword"])(oldPassword, currentPassword);\n\n  if (!passwordsAreEqual) {\n    console.log("Invalid password.");\n    res.status(403).json({\n      message: "Invalid password."\n    });\n    client.close();\n    return;\n  }\n\n  const hashedPassword = await Object(_lib_auth__WEBPACK_IMPORTED_MODULE_1__["hashPassword"])(newPassword);\n  const result = await usersCollection.updateOne({\n    email: userEmail\n  }, {\n    $set: {\n      password: hashedPassword\n    }\n  });\n  client.close();\n  console.log("Password updated!");\n  res.status(200).json({\n    message: "Password updated!"\n  });\n}\n\n/* harmony default export */ __webpack_exports__["default"] = (handler);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9hcGkvdXNlci9jaGFuZ2UtcGFzc3dvcmQuanM/NzQ1YyJdLCJuYW1lcyI6WyJoYW5kbGVyIiwicmVxIiwicmVzIiwibWV0aG9kIiwiY29uc29sZSIsImxvZyIsInNlc3Npb24iLCJnZXRTZXNzaW9uIiwic3RhdHVzIiwianNvbiIsIm1lc3NhZ2UiLCJ1c2VyRW1haWwiLCJ1c2VyIiwiZW1haWwiLCJvbGRQYXNzd29yZCIsImJvZHkiLCJuZXdQYXNzd29yZCIsImNsaWVudCIsImNvbm5lY3RUb0RhdGFiYXNlIiwidXNlcnNDb2xsZWN0aW9uIiwiZGIiLCJjb2xsZWN0aW9uIiwiZmluZE9uZSIsImNsb3NlIiwiY3VycmVudFBhc3N3b3JkIiwicGFzc3dvcmQiLCJwYXNzd29yZHNBcmVFcXVhbCIsInZlcmlmeVBhc3N3b3JkIiwiaGFzaGVkUGFzc3dvcmQiLCJoYXNoUGFzc3dvcmQiLCJyZXN1bHQiLCJ1cGRhdGVPbmUiLCIkc2V0Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBOztBQUVBLGVBQWVBLE9BQWYsQ0FBdUJDLEdBQXZCLEVBQTRCQyxHQUE1QixFQUFpQztBQUNoQyxNQUFJRCxHQUFHLENBQUNFLE1BQUosS0FBZSxPQUFuQixFQUE0QjtBQUMzQjtBQUNBOztBQUNBQyxTQUFPLENBQUNDLEdBQVIsQ0FBWSxvQkFBWjtBQUNELFFBQU1DLE9BQU8sR0FBRyxNQUFNQyxtRUFBVSxDQUFDO0FBQUVOLE9BQUcsRUFBRUE7QUFBUCxHQUFELENBQWhDOztBQUVBLE1BQUksQ0FBQ0ssT0FBTCxFQUFjO0FBQ2JKLE9BQUcsQ0FBQ00sTUFBSixDQUFXLEdBQVgsRUFBZ0JDLElBQWhCLENBQXFCO0FBQUVDLGFBQU8sRUFBRTtBQUFYLEtBQXJCO0FBQ0E7QUFDQTs7QUFFRCxRQUFNQyxTQUFTLEdBQUdMLE9BQU8sQ0FBQ00sSUFBUixDQUFhQyxLQUEvQjtBQUNBLFFBQU1DLFdBQVcsR0FBR2IsR0FBRyxDQUFDYyxJQUFKLENBQVNELFdBQTdCO0FBQ0EsUUFBTUUsV0FBVyxHQUFHZixHQUFHLENBQUNjLElBQUosQ0FBU0MsV0FBN0I7QUFFQSxRQUFNQyxNQUFNLEdBQUcsTUFBTUMsaUVBQWlCLEVBQXRDO0FBRUEsUUFBTUMsZUFBZSxHQUFHRixNQUFNLENBQUNHLEVBQVAsR0FBWUMsVUFBWixDQUF1QixPQUF2QixDQUF4QjtBQUVBLFFBQU1ULElBQUksR0FBRyxNQUFNTyxlQUFlLENBQUNHLE9BQWhCLENBQXdCO0FBQUVULFNBQUssRUFBRUY7QUFBVCxHQUF4QixDQUFuQjs7QUFFQSxNQUFJLENBQUNDLElBQUwsRUFBVztBQUNWVixPQUFHLENBQUNNLE1BQUosQ0FBVyxHQUFYLEVBQWdCQyxJQUFoQixDQUFxQjtBQUFFQyxhQUFPLEVBQUU7QUFBWCxLQUFyQjtBQUNBTyxVQUFNLENBQUNNLEtBQVA7QUFDQTtBQUNBOztBQUVELFFBQU1DLGVBQWUsR0FBR1osSUFBSSxDQUFDYSxRQUE3QjtBQUVBLFFBQU1DLGlCQUFpQixHQUFHLE1BQU1DLGdFQUFjLENBQzdDYixXQUQ2QyxFQUU3Q1UsZUFGNkMsQ0FBOUM7O0FBS0EsTUFBSSxDQUFDRSxpQkFBTCxFQUF3QjtBQUNyQnRCLFdBQU8sQ0FBQ0MsR0FBUixDQUFZLG1CQUFaO0FBQ0ZILE9BQUcsQ0FBQ00sTUFBSixDQUFXLEdBQVgsRUFBZ0JDLElBQWhCLENBQXFCO0FBQUVDLGFBQU8sRUFBRTtBQUFYLEtBQXJCO0FBQ0FPLFVBQU0sQ0FBQ00sS0FBUDtBQUNBO0FBQ0E7O0FBRUQsUUFBTUssY0FBYyxHQUFHLE1BQU1DLDhEQUFZLENBQUNiLFdBQUQsQ0FBekM7QUFFQSxRQUFNYyxNQUFNLEdBQUcsTUFBTVgsZUFBZSxDQUFDWSxTQUFoQixDQUNwQjtBQUFFbEIsU0FBSyxFQUFFRjtBQUFULEdBRG9CLEVBRXBCO0FBQUVxQixRQUFJLEVBQUU7QUFBRVAsY0FBUSxFQUFFRztBQUFaO0FBQVIsR0FGb0IsQ0FBckI7QUFLQVgsUUFBTSxDQUFDTSxLQUFQO0FBQ0NuQixTQUFPLENBQUNDLEdBQVIsQ0FBWSxtQkFBWjtBQUNESCxLQUFHLENBQUNNLE1BQUosQ0FBVyxHQUFYLEVBQWdCQyxJQUFoQixDQUFxQjtBQUFFQyxXQUFPLEVBQUU7QUFBWCxHQUFyQjtBQUNBOztBQUVjVixzRUFBZiIsImZpbGUiOiIuL3BhZ2VzL2FwaS91c2VyL2NoYW5nZS1wYXNzd29yZC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGdldFNlc3Npb24sIHNpZ25PdXQgfSBmcm9tIFwibmV4dC1hdXRoL2NsaWVudFwiO1xuXG5pbXBvcnQgeyBoYXNoUGFzc3dvcmQsIHZlcmlmeVBhc3N3b3JkIH0gZnJvbSBcIi4uLy4uLy4uL2xpYi9hdXRoXCI7XG5pbXBvcnQgeyBjb25uZWN0VG9EYXRhYmFzZSB9IGZyb20gXCIuLi8uLi8uLi9saWIvZGJcIjtcblxuYXN5bmMgZnVuY3Rpb24gaGFuZGxlcihyZXEsIHJlcykge1xuXHRpZiAocmVxLm1ldGhvZCAhPT0gXCJQQVRDSFwiKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG4gIGNvbnNvbGUubG9nKFwiQ2hhbmdpbmcgcGFzc3dvcmQuXCIpO1xuXHRjb25zdCBzZXNzaW9uID0gYXdhaXQgZ2V0U2Vzc2lvbih7IHJlcTogcmVxIH0pO1xuXG5cdGlmICghc2Vzc2lvbikge1xuXHRcdHJlcy5zdGF0dXMoNDAxKS5qc29uKHsgbWVzc2FnZTogXCJOb3QgYXV0aGVudGljYXRlZCFcIiB9KTtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRjb25zdCB1c2VyRW1haWwgPSBzZXNzaW9uLnVzZXIuZW1haWw7XG5cdGNvbnN0IG9sZFBhc3N3b3JkID0gcmVxLmJvZHkub2xkUGFzc3dvcmQ7XG5cdGNvbnN0IG5ld1Bhc3N3b3JkID0gcmVxLmJvZHkubmV3UGFzc3dvcmQ7XG5cblx0Y29uc3QgY2xpZW50ID0gYXdhaXQgY29ubmVjdFRvRGF0YWJhc2UoKTtcblxuXHRjb25zdCB1c2Vyc0NvbGxlY3Rpb24gPSBjbGllbnQuZGIoKS5jb2xsZWN0aW9uKFwidXNlcnNcIik7XG5cblx0Y29uc3QgdXNlciA9IGF3YWl0IHVzZXJzQ29sbGVjdGlvbi5maW5kT25lKHsgZW1haWw6IHVzZXJFbWFpbCB9KTtcblxuXHRpZiAoIXVzZXIpIHtcblx0XHRyZXMuc3RhdHVzKDQwNCkuanNvbih7IG1lc3NhZ2U6IFwiVXNlciBub3QgZm91bmQuXCIgfSk7XG5cdFx0Y2xpZW50LmNsb3NlKCk7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0Y29uc3QgY3VycmVudFBhc3N3b3JkID0gdXNlci5wYXNzd29yZDtcblxuXHRjb25zdCBwYXNzd29yZHNBcmVFcXVhbCA9IGF3YWl0IHZlcmlmeVBhc3N3b3JkKFxuXHRcdG9sZFBhc3N3b3JkLFxuXHRcdGN1cnJlbnRQYXNzd29yZFxuXHQpO1xuXG5cdGlmICghcGFzc3dvcmRzQXJlRXF1YWwpIHtcbiAgICBjb25zb2xlLmxvZyhcIkludmFsaWQgcGFzc3dvcmQuXCIpO1xuXHRcdHJlcy5zdGF0dXMoNDAzKS5qc29uKHsgbWVzc2FnZTogXCJJbnZhbGlkIHBhc3N3b3JkLlwiIH0pO1xuXHRcdGNsaWVudC5jbG9zZSgpO1xuXHRcdHJldHVybjtcblx0fVxuXG5cdGNvbnN0IGhhc2hlZFBhc3N3b3JkID0gYXdhaXQgaGFzaFBhc3N3b3JkKG5ld1Bhc3N3b3JkKTtcblxuXHRjb25zdCByZXN1bHQgPSBhd2FpdCB1c2Vyc0NvbGxlY3Rpb24udXBkYXRlT25lKFxuXHRcdHsgZW1haWw6IHVzZXJFbWFpbCB9LFxuXHRcdHsgJHNldDogeyBwYXNzd29yZDogaGFzaGVkUGFzc3dvcmQgfSB9XG5cdCk7XG5cblx0Y2xpZW50LmNsb3NlKCk7XG4gIGNvbnNvbGUubG9nKFwiUGFzc3dvcmQgdXBkYXRlZCFcIik7XG5cdHJlcy5zdGF0dXMoMjAwKS5qc29uKHsgbWVzc2FnZTogXCJQYXNzd29yZCB1cGRhdGVkIVwiIH0pO1xufVxuXG5leHBvcnQgZGVmYXVsdCBoYW5kbGVyO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/api/user/change-password.js\n'
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
			}

		/******/
	}
);
