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
		(__webpack_require__.s = "./pages/api/contact.js")
	);
	/******/
})(
	/************************************************************************/
	/******/ {
		/***/ "./pages/api/contact.js":
			/*!******************************!*\
  !*** ./pages/api/contact.js ***!
  \******************************/
			/*! exports provided: default */
			/***/ function (module, __webpack_exports__, __webpack_require__) {
				"use strict";
				eval(
					'__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongodb */ "mongodb");\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongodb__WEBPACK_IMPORTED_MODULE_0__);\n\n\nasync function handler(req, res) {\n  if (req.method === "POST") {\n    const {\n      email,\n      name,\n      message\n    } = req.body;\n\n    if (!email || !email.includes("@") || !name || name.trim() === "" || !message || message.trim() === "") {\n      res.status(422).json({\n        message: "Invalid input."\n      });\n      return;\n    }\n\n    const newMessage = {\n      email,\n      name,\n      message\n    };\n    let client;\n\n    try {\n      client = await mongodb__WEBPACK_IMPORTED_MODULE_0__["MongoClient"].connect("mongodb+srv://maximilian:2YkcXq43KyPk0vqp@cluster0.ntrwp.mongodb.net/my-site?retryWrites=true&w=majority");\n    } catch (error) {\n      res.status(500).json({\n        message: "Could not connect to database."\n      });\n      return;\n    }\n\n    const db = client.db();\n\n    try {\n      const result = await db.collection("messages").insertOne(newMessage);\n      newMessage.id = result.insertedId;\n    } catch (error) {\n      client.close();\n      res.status(500).json({\n        message: "Storing message failed!"\n      });\n      return;\n    }\n\n    client.close();\n    res.status(201).json({\n      message: "Successfully stored message!",\n      message: newMessage\n    });\n  }\n}\n\n/* harmony default export */ __webpack_exports__["default"] = (handler);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9hcGkvY29udGFjdC5qcz9hMGIxIl0sIm5hbWVzIjpbImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJtZXRob2QiLCJlbWFpbCIsIm5hbWUiLCJtZXNzYWdlIiwiYm9keSIsImluY2x1ZGVzIiwidHJpbSIsInN0YXR1cyIsImpzb24iLCJuZXdNZXNzYWdlIiwiY2xpZW50IiwiTW9uZ29DbGllbnQiLCJjb25uZWN0IiwiZXJyb3IiLCJkYiIsInJlc3VsdCIsImNvbGxlY3Rpb24iLCJpbnNlcnRPbmUiLCJpZCIsImluc2VydGVkSWQiLCJjbG9zZSJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7O0FBRUEsZUFBZUEsT0FBZixDQUF1QkMsR0FBdkIsRUFBNEJDLEdBQTVCLEVBQWlDO0FBQ2hDLE1BQUlELEdBQUcsQ0FBQ0UsTUFBSixLQUFlLE1BQW5CLEVBQTJCO0FBQzFCLFVBQU07QUFBRUMsV0FBRjtBQUFTQyxVQUFUO0FBQWVDO0FBQWYsUUFBMkJMLEdBQUcsQ0FBQ00sSUFBckM7O0FBRUEsUUFDQyxDQUFDSCxLQUFELElBQ0EsQ0FBQ0EsS0FBSyxDQUFDSSxRQUFOLENBQWUsR0FBZixDQURELElBRUEsQ0FBQ0gsSUFGRCxJQUdBQSxJQUFJLENBQUNJLElBQUwsT0FBZ0IsRUFIaEIsSUFJQSxDQUFDSCxPQUpELElBS0FBLE9BQU8sQ0FBQ0csSUFBUixPQUFtQixFQU5wQixFQU9FO0FBQ0RQLFNBQUcsQ0FBQ1EsTUFBSixDQUFXLEdBQVgsRUFBZ0JDLElBQWhCLENBQXFCO0FBQUVMLGVBQU8sRUFBRTtBQUFYLE9BQXJCO0FBQ0E7QUFDQTs7QUFFRCxVQUFNTSxVQUFVLEdBQUc7QUFDbEJSLFdBRGtCO0FBRWxCQyxVQUZrQjtBQUdsQkM7QUFIa0IsS0FBbkI7QUFNQSxRQUFJTyxNQUFKOztBQUVBLFFBQUk7QUFDSEEsWUFBTSxHQUFHLE1BQU1DLG1EQUFXLENBQUNDLE9BQVosQ0FDZCwwR0FEYyxDQUFmO0FBR0EsS0FKRCxDQUlFLE9BQU9DLEtBQVAsRUFBYztBQUNmZCxTQUFHLENBQUNRLE1BQUosQ0FBVyxHQUFYLEVBQWdCQyxJQUFoQixDQUFxQjtBQUFFTCxlQUFPLEVBQUU7QUFBWCxPQUFyQjtBQUNBO0FBQ0E7O0FBRUQsVUFBTVcsRUFBRSxHQUFHSixNQUFNLENBQUNJLEVBQVAsRUFBWDs7QUFFQSxRQUFJO0FBQ0gsWUFBTUMsTUFBTSxHQUFHLE1BQU1ELEVBQUUsQ0FDckJFLFVBRG1CLENBQ1IsVUFEUSxFQUVuQkMsU0FGbUIsQ0FFVFIsVUFGUyxDQUFyQjtBQUdBQSxnQkFBVSxDQUFDUyxFQUFYLEdBQWdCSCxNQUFNLENBQUNJLFVBQXZCO0FBQ0EsS0FMRCxDQUtFLE9BQU9OLEtBQVAsRUFBYztBQUNmSCxZQUFNLENBQUNVLEtBQVA7QUFDQXJCLFNBQUcsQ0FBQ1EsTUFBSixDQUFXLEdBQVgsRUFBZ0JDLElBQWhCLENBQXFCO0FBQUVMLGVBQU8sRUFBRTtBQUFYLE9BQXJCO0FBQ0E7QUFDQTs7QUFFRE8sVUFBTSxDQUFDVSxLQUFQO0FBRUFyQixPQUFHLENBQUNRLE1BQUosQ0FBVyxHQUFYLEVBQWdCQyxJQUFoQixDQUFxQjtBQUNwQkwsYUFBTyxFQUFFLDhCQURXO0FBRXBCQSxhQUFPLEVBQUVNO0FBRlcsS0FBckI7QUFJQTtBQUNEOztBQUVjWixzRUFBZiIsImZpbGUiOiIuL3BhZ2VzL2FwaS9jb250YWN0LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTW9uZ29DbGllbnQgfSBmcm9tIFwibW9uZ29kYlwiO1xuXG5hc3luYyBmdW5jdGlvbiBoYW5kbGVyKHJlcSwgcmVzKSB7XG5cdGlmIChyZXEubWV0aG9kID09PSBcIlBPU1RcIikge1xuXHRcdGNvbnN0IHsgZW1haWwsIG5hbWUsIG1lc3NhZ2UgfSA9IHJlcS5ib2R5O1xuXG5cdFx0aWYgKFxuXHRcdFx0IWVtYWlsIHx8XG5cdFx0XHQhZW1haWwuaW5jbHVkZXMoXCJAXCIpIHx8XG5cdFx0XHQhbmFtZSB8fFxuXHRcdFx0bmFtZS50cmltKCkgPT09IFwiXCIgfHxcblx0XHRcdCFtZXNzYWdlIHx8XG5cdFx0XHRtZXNzYWdlLnRyaW0oKSA9PT0gXCJcIlxuXHRcdCkge1xuXHRcdFx0cmVzLnN0YXR1cyg0MjIpLmpzb24oeyBtZXNzYWdlOiBcIkludmFsaWQgaW5wdXQuXCIgfSk7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0Y29uc3QgbmV3TWVzc2FnZSA9IHtcblx0XHRcdGVtYWlsLFxuXHRcdFx0bmFtZSxcblx0XHRcdG1lc3NhZ2Vcblx0XHR9O1xuXG5cdFx0bGV0IGNsaWVudDtcblxuXHRcdHRyeSB7XG5cdFx0XHRjbGllbnQgPSBhd2FpdCBNb25nb0NsaWVudC5jb25uZWN0KFxuXHRcdFx0XHRcIm1vbmdvZGIrc3J2Oi8vbWF4aW1pbGlhbjoyWWtjWHE0M0t5UGswdnFwQGNsdXN0ZXIwLm50cndwLm1vbmdvZGIubmV0L215LXNpdGU/cmV0cnlXcml0ZXM9dHJ1ZSZ3PW1ham9yaXR5XCJcblx0XHRcdCk7XG5cdFx0fSBjYXRjaCAoZXJyb3IpIHtcblx0XHRcdHJlcy5zdGF0dXMoNTAwKS5qc29uKHsgbWVzc2FnZTogXCJDb3VsZCBub3QgY29ubmVjdCB0byBkYXRhYmFzZS5cIiB9KTtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHRjb25zdCBkYiA9IGNsaWVudC5kYigpO1xuXG5cdFx0dHJ5IHtcblx0XHRcdGNvbnN0IHJlc3VsdCA9IGF3YWl0IGRiXG5cdFx0XHRcdC5jb2xsZWN0aW9uKFwibWVzc2FnZXNcIilcblx0XHRcdFx0Lmluc2VydE9uZShuZXdNZXNzYWdlKTtcblx0XHRcdG5ld01lc3NhZ2UuaWQgPSByZXN1bHQuaW5zZXJ0ZWRJZDtcblx0XHR9IGNhdGNoIChlcnJvcikge1xuXHRcdFx0Y2xpZW50LmNsb3NlKCk7XG5cdFx0XHRyZXMuc3RhdHVzKDUwMCkuanNvbih7IG1lc3NhZ2U6IFwiU3RvcmluZyBtZXNzYWdlIGZhaWxlZCFcIiB9KTtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHRjbGllbnQuY2xvc2UoKTtcblxuXHRcdHJlcy5zdGF0dXMoMjAxKS5qc29uKHtcblx0XHRcdG1lc3NhZ2U6IFwiU3VjY2Vzc2Z1bGx5IHN0b3JlZCBtZXNzYWdlIVwiLFxuXHRcdFx0bWVzc2FnZTogbmV3TWVzc2FnZVxuXHRcdH0pO1xuXHR9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGhhbmRsZXI7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/api/contact.js\n'
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
			}

		/******/
	}
);
