module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/api/newsletter.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./helpers/db-util.js":
/*!****************************!*\
  !*** ./helpers/db-util.js ***!
  \****************************/
/*! exports provided: connectDatabase, insertDocument, getAllDocuments */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"connectDatabase\", function() { return connectDatabase; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"insertDocument\", function() { return insertDocument; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getAllDocuments\", function() { return getAllDocuments; });\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongodb */ \"mongodb\");\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongodb__WEBPACK_IMPORTED_MODULE_0__);\n\nasync function connectDatabase() {\n  const client = await mongodb__WEBPACK_IMPORTED_MODULE_0__[\"MongoClient\"].connect(\"mongodb+srv://sa:sa@cluster0.nnllzq2.mongodb.net/?retryWrites=true&w=majority\");\n  return client;\n}\nasync function insertDocument(client, collection, document) {\n  const db = client.db(\"test\");\n  const result = await db.collection(collection).insertOne(document);\n  return result;\n}\nasync function getAllDocuments(client, collection, sort, filter = {}) {\n  const db = client.db(\"test\");\n  const documents = await db.collection(collection).find(filter).sort(sort).toArray();\n  return documents;\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9oZWxwZXJzL2RiLXV0aWwuanM/N2M0NSJdLCJuYW1lcyI6WyJjb25uZWN0RGF0YWJhc2UiLCJjbGllbnQiLCJNb25nb0NsaWVudCIsImNvbm5lY3QiLCJpbnNlcnREb2N1bWVudCIsImNvbGxlY3Rpb24iLCJkb2N1bWVudCIsImRiIiwicmVzdWx0IiwiaW5zZXJ0T25lIiwiZ2V0QWxsRG9jdW1lbnRzIiwic29ydCIsImZpbHRlciIsImRvY3VtZW50cyIsImZpbmQiLCJ0b0FycmF5Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVPLGVBQWVBLGVBQWYsR0FBaUM7QUFDdkMsUUFBTUMsTUFBTSxHQUFHLE1BQU1DLG1EQUFXLENBQUNDLE9BQVosQ0FDcEIsK0VBRG9CLENBQXJCO0FBSUEsU0FBT0YsTUFBUDtBQUNBO0FBRU0sZUFBZUcsY0FBZixDQUE4QkgsTUFBOUIsRUFBc0NJLFVBQXRDLEVBQWtEQyxRQUFsRCxFQUE0RDtBQUNsRSxRQUFNQyxFQUFFLEdBQUdOLE1BQU0sQ0FBQ00sRUFBUCxDQUFVLE1BQVYsQ0FBWDtBQUVBLFFBQU1DLE1BQU0sR0FBRyxNQUFNRCxFQUFFLENBQUNGLFVBQUgsQ0FBY0EsVUFBZCxFQUEwQkksU0FBMUIsQ0FBb0NILFFBQXBDLENBQXJCO0FBRUEsU0FBT0UsTUFBUDtBQUNBO0FBRU0sZUFBZUUsZUFBZixDQUErQlQsTUFBL0IsRUFBdUNJLFVBQXZDLEVBQW1ETSxJQUFuRCxFQUF5REMsTUFBTSxHQUFHLEVBQWxFLEVBQXNFO0FBQzVFLFFBQU1MLEVBQUUsR0FBR04sTUFBTSxDQUFDTSxFQUFQLENBQVUsTUFBVixDQUFYO0FBRUEsUUFBTU0sU0FBUyxHQUFHLE1BQU1OLEVBQUUsQ0FDeEJGLFVBRHNCLENBQ1hBLFVBRFcsRUFFdEJTLElBRnNCLENBRWpCRixNQUZpQixFQUd0QkQsSUFIc0IsQ0FHakJBLElBSGlCLEVBSXRCSSxPQUpzQixFQUF4QjtBQU1BLFNBQU9GLFNBQVA7QUFDQSIsImZpbGUiOiIuL2hlbHBlcnMvZGItdXRpbC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE1vbmdvQ2xpZW50IH0gZnJvbSBcIm1vbmdvZGJcIjtcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNvbm5lY3REYXRhYmFzZSgpIHtcblx0Y29uc3QgY2xpZW50ID0gYXdhaXQgTW9uZ29DbGllbnQuY29ubmVjdChcblx0XHRcIm1vbmdvZGIrc3J2Oi8vc2E6c2FAY2x1c3RlcjAubm5sbHpxMi5tb25nb2RiLm5ldC8/cmV0cnlXcml0ZXM9dHJ1ZSZ3PW1ham9yaXR5XCJcblx0KTtcblxuXHRyZXR1cm4gY2xpZW50O1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gaW5zZXJ0RG9jdW1lbnQoY2xpZW50LCBjb2xsZWN0aW9uLCBkb2N1bWVudCkge1xuXHRjb25zdCBkYiA9IGNsaWVudC5kYihcInRlc3RcIik7XG5cblx0Y29uc3QgcmVzdWx0ID0gYXdhaXQgZGIuY29sbGVjdGlvbihjb2xsZWN0aW9uKS5pbnNlcnRPbmUoZG9jdW1lbnQpO1xuXG5cdHJldHVybiByZXN1bHQ7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRBbGxEb2N1bWVudHMoY2xpZW50LCBjb2xsZWN0aW9uLCBzb3J0LCBmaWx0ZXIgPSB7fSkge1xuXHRjb25zdCBkYiA9IGNsaWVudC5kYihcInRlc3RcIik7XG5cblx0Y29uc3QgZG9jdW1lbnRzID0gYXdhaXQgZGJcblx0XHQuY29sbGVjdGlvbihjb2xsZWN0aW9uKVxuXHRcdC5maW5kKGZpbHRlcilcblx0XHQuc29ydChzb3J0KVxuXHRcdC50b0FycmF5KCk7XG5cblx0cmV0dXJuIGRvY3VtZW50cztcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./helpers/db-util.js\n");

/***/ }),

/***/ "./pages/api/newsletter.js":
/*!*********************************!*\
  !*** ./pages/api/newsletter.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _helpers_db_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../helpers/db-util */ \"./helpers/db-util.js\");\n\n\nasync function handler(req, res) {\n  if (req.method === \"POST\") {\n    const userEmail = req.body.email;\n\n    if (!userEmail || !userEmail.includes(\"@\")) {\n      res.status(422).json({\n        message: \"Invalid email address.\"\n      });\n      return;\n    }\n\n    let client;\n\n    try {\n      client = await Object(_helpers_db_util__WEBPACK_IMPORTED_MODULE_0__[\"connectDatabase\"])();\n    } catch (error) {\n      res.status(500).json({\n        message: \"Connecting to the database failed!\"\n      });\n      return;\n    }\n\n    try {\n      await Object(_helpers_db_util__WEBPACK_IMPORTED_MODULE_0__[\"insertDocument\"])(client, \"newsletter\", {\n        email: userEmail\n      });\n      client.close();\n    } catch (error) {\n      res.status(500).json({\n        message: \"Inserting data failed!\"\n      });\n      return;\n    }\n\n    res.status(201).json({\n      message: \"Signed up!\"\n    });\n  }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (handler);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9hcGkvbmV3c2xldHRlci5qcz81NTljIl0sIm5hbWVzIjpbImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJtZXRob2QiLCJ1c2VyRW1haWwiLCJib2R5IiwiZW1haWwiLCJpbmNsdWRlcyIsInN0YXR1cyIsImpzb24iLCJtZXNzYWdlIiwiY2xpZW50IiwiY29ubmVjdERhdGFiYXNlIiwiZXJyb3IiLCJpbnNlcnREb2N1bWVudCIsImNsb3NlIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7O0FBRUEsZUFBZUEsT0FBZixDQUF1QkMsR0FBdkIsRUFBNEJDLEdBQTVCLEVBQWlDO0FBQ2hDLE1BQUlELEdBQUcsQ0FBQ0UsTUFBSixLQUFlLE1BQW5CLEVBQTJCO0FBQzFCLFVBQU1DLFNBQVMsR0FBR0gsR0FBRyxDQUFDSSxJQUFKLENBQVNDLEtBQTNCOztBQUVBLFFBQUksQ0FBQ0YsU0FBRCxJQUFjLENBQUNBLFNBQVMsQ0FBQ0csUUFBVixDQUFtQixHQUFuQixDQUFuQixFQUE0QztBQUMzQ0wsU0FBRyxDQUFDTSxNQUFKLENBQVcsR0FBWCxFQUFnQkMsSUFBaEIsQ0FBcUI7QUFBRUMsZUFBTyxFQUFFO0FBQVgsT0FBckI7QUFDQTtBQUNBOztBQUVELFFBQUlDLE1BQUo7O0FBRUEsUUFBSTtBQUNIQSxZQUFNLEdBQUcsTUFBTUMsd0VBQWUsRUFBOUI7QUFDQSxLQUZELENBRUUsT0FBT0MsS0FBUCxFQUFjO0FBQ2ZYLFNBQUcsQ0FBQ00sTUFBSixDQUFXLEdBQVgsRUFBZ0JDLElBQWhCLENBQXFCO0FBQ3BCQyxlQUFPLEVBQUU7QUFEVyxPQUFyQjtBQUdBO0FBQ0E7O0FBRUQsUUFBSTtBQUNILFlBQU1JLHVFQUFjLENBQUNILE1BQUQsRUFBUyxZQUFULEVBQXVCO0FBQUVMLGFBQUssRUFBRUY7QUFBVCxPQUF2QixDQUFwQjtBQUNBTyxZQUFNLENBQUNJLEtBQVA7QUFDQSxLQUhELENBR0UsT0FBT0YsS0FBUCxFQUFjO0FBQ2ZYLFNBQUcsQ0FBQ00sTUFBSixDQUFXLEdBQVgsRUFBZ0JDLElBQWhCLENBQXFCO0FBQUVDLGVBQU8sRUFBRTtBQUFYLE9BQXJCO0FBQ0E7QUFDQTs7QUFFRFIsT0FBRyxDQUFDTSxNQUFKLENBQVcsR0FBWCxFQUFnQkMsSUFBaEIsQ0FBcUI7QUFBRUMsYUFBTyxFQUFFO0FBQVgsS0FBckI7QUFDQTtBQUNEOztBQUVjVixzRUFBZiIsImZpbGUiOiIuL3BhZ2VzL2FwaS9uZXdzbGV0dGVyLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY29ubmVjdERhdGFiYXNlLCBpbnNlcnREb2N1bWVudCB9IGZyb20gXCIuLi8uLi9oZWxwZXJzL2RiLXV0aWxcIjtcblxuYXN5bmMgZnVuY3Rpb24gaGFuZGxlcihyZXEsIHJlcykge1xuXHRpZiAocmVxLm1ldGhvZCA9PT0gXCJQT1NUXCIpIHtcblx0XHRjb25zdCB1c2VyRW1haWwgPSByZXEuYm9keS5lbWFpbDtcblxuXHRcdGlmICghdXNlckVtYWlsIHx8ICF1c2VyRW1haWwuaW5jbHVkZXMoXCJAXCIpKSB7XG5cdFx0XHRyZXMuc3RhdHVzKDQyMikuanNvbih7IG1lc3NhZ2U6IFwiSW52YWxpZCBlbWFpbCBhZGRyZXNzLlwiIH0pO1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdGxldCBjbGllbnQ7XG5cblx0XHR0cnkge1xuXHRcdFx0Y2xpZW50ID0gYXdhaXQgY29ubmVjdERhdGFiYXNlKCk7XG5cdFx0fSBjYXRjaCAoZXJyb3IpIHtcblx0XHRcdHJlcy5zdGF0dXMoNTAwKS5qc29uKHtcblx0XHRcdFx0bWVzc2FnZTogXCJDb25uZWN0aW5nIHRvIHRoZSBkYXRhYmFzZSBmYWlsZWQhXCJcblx0XHRcdH0pO1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdHRyeSB7XG5cdFx0XHRhd2FpdCBpbnNlcnREb2N1bWVudChjbGllbnQsIFwibmV3c2xldHRlclwiLCB7IGVtYWlsOiB1c2VyRW1haWwgfSk7XG5cdFx0XHRjbGllbnQuY2xvc2UoKTtcblx0XHR9IGNhdGNoIChlcnJvcikge1xuXHRcdFx0cmVzLnN0YXR1cyg1MDApLmpzb24oeyBtZXNzYWdlOiBcIkluc2VydGluZyBkYXRhIGZhaWxlZCFcIiB9KTtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHRyZXMuc3RhdHVzKDIwMSkuanNvbih7IG1lc3NhZ2U6IFwiU2lnbmVkIHVwIVwiIH0pO1xuXHR9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGhhbmRsZXI7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/api/newsletter.js\n");

/***/ }),

/***/ "mongodb":
/*!**************************!*\
  !*** external "mongodb" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"mongodb\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJtb25nb2RiXCI/ZGVmZiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJtb25nb2RiLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibW9uZ29kYlwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///mongodb\n");

/***/ })

/******/ });