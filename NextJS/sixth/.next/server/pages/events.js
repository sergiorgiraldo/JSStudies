/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(function () {
	var exports = {};
	exports.id = "pages/events";
	exports.ids = ["pages/events"];
	exports.modules = {
		/***/ "./components/events/events-search.js":
			/*!********************************************!*\
  !*** ./components/events/events-search.js ***!
  \********************************************/
			/***/ function (
				__unused_webpack_module,
				__webpack_exports__,
				__webpack_require__
			) {
				"use strict";
				eval(
					'__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _ui_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../ui/button */ "./components/ui/button.js");\n/* harmony import */ var _events_search_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./events-search.module.css */ "./components/events/events-search.module.css");\n/* harmony import */ var _events_search_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_events_search_module_css__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _jsxFileName = "/Users/GK47LX/source/JSStudies/NextJS/sixth/components/events/events-search.js";\n\n\n\n\nfunction EventsSearch(props) {\n  const yearInputRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();\n  const monthInputRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();\n\n  function submitHandler(event) {\n    event.preventDefault();\n    const selectedYear = yearInputRef.current.value;\n    const selectedMonth = monthInputRef.current.value;\n    props.onSearch(selectedYear, selectedMonth);\n  }\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("form", {\n    className: (_events_search_module_css__WEBPACK_IMPORTED_MODULE_3___default().form),\n    onSubmit: submitHandler,\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {\n      className: (_events_search_module_css__WEBPACK_IMPORTED_MODULE_3___default().controls),\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {\n        className: (_events_search_module_css__WEBPACK_IMPORTED_MODULE_3___default().control),\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {\n          htmlFor: "year",\n          children: "Year"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 23,\n          columnNumber: 6\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("select", {\n          id: "year",\n          ref: yearInputRef,\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("option", {\n            value: "2021",\n            children: "2021"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 25,\n            columnNumber: 7\n          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("option", {\n            value: "2022",\n            children: "2022"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 26,\n            columnNumber: 7\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 24,\n          columnNumber: 6\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 22,\n        columnNumber: 5\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {\n        className: (_events_search_module_css__WEBPACK_IMPORTED_MODULE_3___default().control),\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {\n          htmlFor: "month",\n          children: "Month"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 30,\n          columnNumber: 6\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("select", {\n          id: "month",\n          ref: monthInputRef,\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("option", {\n            value: "1",\n            children: "January"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 32,\n            columnNumber: 7\n          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("option", {\n            value: "2",\n            children: "February"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 33,\n            columnNumber: 7\n          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("option", {\n            value: "3",\n            children: "March"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 34,\n            columnNumber: 7\n          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("option", {\n            value: "4",\n            children: "April"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 35,\n            columnNumber: 7\n          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("option", {\n            value: "5",\n            children: "May"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 36,\n            columnNumber: 7\n          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("option", {\n            value: "6",\n            children: "June"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 37,\n            columnNumber: 7\n          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("option", {\n            value: "7",\n            children: "July"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 38,\n            columnNumber: 7\n          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("option", {\n            value: "8",\n            children: "August"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 39,\n            columnNumber: 7\n          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("option", {\n            value: "9",\n            children: "Septemer"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 40,\n            columnNumber: 7\n          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("option", {\n            value: "10",\n            children: "October"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 41,\n            columnNumber: 7\n          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("option", {\n            value: "11",\n            children: "November"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 42,\n            columnNumber: 7\n          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("option", {\n            value: "12",\n            children: "December"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 43,\n            columnNumber: 7\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 31,\n          columnNumber: 6\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 29,\n        columnNumber: 5\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 21,\n      columnNumber: 4\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_button__WEBPACK_IMPORTED_MODULE_2__.default, {\n      children: "Find Events"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 47,\n      columnNumber: 4\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 20,\n    columnNumber: 3\n  }, this);\n}\n\n/* harmony default export */ __webpack_exports__["default"] = (EventsSearch);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0anMtY291cnNlLy4vY29tcG9uZW50cy9ldmVudHMvZXZlbnRzLXNlYXJjaC5qcz81Yzg3Il0sIm5hbWVzIjpbIkV2ZW50c1NlYXJjaCIsInByb3BzIiwieWVhcklucHV0UmVmIiwidXNlUmVmIiwibW9udGhJbnB1dFJlZiIsInN1Ym1pdEhhbmRsZXIiLCJldmVudCIsInByZXZlbnREZWZhdWx0Iiwic2VsZWN0ZWRZZWFyIiwiY3VycmVudCIsInZhbHVlIiwic2VsZWN0ZWRNb250aCIsIm9uU2VhcmNoIiwiY2xhc3NlcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBRUE7QUFDQTs7QUFFQSxTQUFTQSxZQUFULENBQXNCQyxLQUF0QixFQUE2QjtBQUM1QixRQUFNQyxZQUFZLEdBQUdDLDZDQUFNLEVBQTNCO0FBQ0EsUUFBTUMsYUFBYSxHQUFHRCw2Q0FBTSxFQUE1Qjs7QUFFQSxXQUFTRSxhQUFULENBQXVCQyxLQUF2QixFQUE4QjtBQUM3QkEsU0FBSyxDQUFDQyxjQUFOO0FBRUEsVUFBTUMsWUFBWSxHQUFHTixZQUFZLENBQUNPLE9BQWIsQ0FBcUJDLEtBQTFDO0FBQ0EsVUFBTUMsYUFBYSxHQUFHUCxhQUFhLENBQUNLLE9BQWQsQ0FBc0JDLEtBQTVDO0FBRUFULFNBQUssQ0FBQ1csUUFBTixDQUFlSixZQUFmLEVBQTZCRyxhQUE3QjtBQUNBOztBQUVELHNCQUNDO0FBQU0sYUFBUyxFQUFFRSx1RUFBakI7QUFBK0IsWUFBUSxFQUFFUixhQUF6QztBQUFBLDRCQUNDO0FBQUssZUFBUyxFQUFFUSwyRUFBaEI7QUFBQSw4QkFDQztBQUFLLGlCQUFTLEVBQUVBLDBFQUFoQjtBQUFBLGdDQUNDO0FBQU8saUJBQU8sRUFBQyxNQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURELGVBRUM7QUFBUSxZQUFFLEVBQUMsTUFBWDtBQUFrQixhQUFHLEVBQUVYLFlBQXZCO0FBQUEsa0NBQ0M7QUFBUSxpQkFBSyxFQUFDLE1BQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBREQsZUFFQztBQUFRLGlCQUFLLEVBQUMsTUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFGRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBRkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREQsZUFRQztBQUFLLGlCQUFTLEVBQUVXLDBFQUFoQjtBQUFBLGdDQUNDO0FBQU8saUJBQU8sRUFBQyxPQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURELGVBRUM7QUFBUSxZQUFFLEVBQUMsT0FBWDtBQUFtQixhQUFHLEVBQUVULGFBQXhCO0FBQUEsa0NBQ0M7QUFBUSxpQkFBSyxFQUFDLEdBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBREQsZUFFQztBQUFRLGlCQUFLLEVBQUMsR0FBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFGRCxlQUdDO0FBQVEsaUJBQUssRUFBQyxHQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUhELGVBSUM7QUFBUSxpQkFBSyxFQUFDLEdBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBSkQsZUFLQztBQUFRLGlCQUFLLEVBQUMsR0FBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFMRCxlQU1DO0FBQVEsaUJBQUssRUFBQyxHQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQU5ELGVBT0M7QUFBUSxpQkFBSyxFQUFDLEdBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBUEQsZUFRQztBQUFRLGlCQUFLLEVBQUMsR0FBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFSRCxlQVNDO0FBQVEsaUJBQUssRUFBQyxHQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQVRELGVBVUM7QUFBUSxpQkFBSyxFQUFDLElBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBVkQsZUFXQztBQUFRLGlCQUFLLEVBQUMsSUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFYRCxlQVlDO0FBQVEsaUJBQUssRUFBQyxJQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQVpEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFGRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FSRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERCxlQTJCQyw4REFBQywrQ0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQTNCRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERDtBQStCQTs7QUFFRCwrREFBZUosWUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvZXZlbnRzL2V2ZW50cy1zZWFyY2guanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VSZWYgfSBmcm9tIFwicmVhY3RcIjtcblxuaW1wb3J0IEJ1dHRvbiBmcm9tIFwiLi4vdWkvYnV0dG9uXCI7XG5pbXBvcnQgY2xhc3NlcyBmcm9tIFwiLi9ldmVudHMtc2VhcmNoLm1vZHVsZS5jc3NcIjtcblxuZnVuY3Rpb24gRXZlbnRzU2VhcmNoKHByb3BzKSB7XG5cdGNvbnN0IHllYXJJbnB1dFJlZiA9IHVzZVJlZigpO1xuXHRjb25zdCBtb250aElucHV0UmVmID0gdXNlUmVmKCk7XG5cblx0ZnVuY3Rpb24gc3VibWl0SGFuZGxlcihldmVudCkge1xuXHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cblx0XHRjb25zdCBzZWxlY3RlZFllYXIgPSB5ZWFySW5wdXRSZWYuY3VycmVudC52YWx1ZTtcblx0XHRjb25zdCBzZWxlY3RlZE1vbnRoID0gbW9udGhJbnB1dFJlZi5jdXJyZW50LnZhbHVlO1xuXG5cdFx0cHJvcHMub25TZWFyY2goc2VsZWN0ZWRZZWFyLCBzZWxlY3RlZE1vbnRoKTtcblx0fVxuXG5cdHJldHVybiAoXG5cdFx0PGZvcm0gY2xhc3NOYW1lPXtjbGFzc2VzLmZvcm19IG9uU3VibWl0PXtzdWJtaXRIYW5kbGVyfT5cblx0XHRcdDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmNvbnRyb2xzfT5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuY29udHJvbH0+XG5cdFx0XHRcdFx0PGxhYmVsIGh0bWxGb3I9XCJ5ZWFyXCI+WWVhcjwvbGFiZWw+XG5cdFx0XHRcdFx0PHNlbGVjdCBpZD1cInllYXJcIiByZWY9e3llYXJJbnB1dFJlZn0+XG5cdFx0XHRcdFx0XHQ8b3B0aW9uIHZhbHVlPVwiMjAyMVwiPjIwMjE8L29wdGlvbj5cblx0XHRcdFx0XHRcdDxvcHRpb24gdmFsdWU9XCIyMDIyXCI+MjAyMjwvb3B0aW9uPlxuXHRcdFx0XHRcdDwvc2VsZWN0PlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuY29udHJvbH0+XG5cdFx0XHRcdFx0PGxhYmVsIGh0bWxGb3I9XCJtb250aFwiPk1vbnRoPC9sYWJlbD5cblx0XHRcdFx0XHQ8c2VsZWN0IGlkPVwibW9udGhcIiByZWY9e21vbnRoSW5wdXRSZWZ9PlxuXHRcdFx0XHRcdFx0PG9wdGlvbiB2YWx1ZT1cIjFcIj5KYW51YXJ5PC9vcHRpb24+XG5cdFx0XHRcdFx0XHQ8b3B0aW9uIHZhbHVlPVwiMlwiPkZlYnJ1YXJ5PC9vcHRpb24+XG5cdFx0XHRcdFx0XHQ8b3B0aW9uIHZhbHVlPVwiM1wiPk1hcmNoPC9vcHRpb24+XG5cdFx0XHRcdFx0XHQ8b3B0aW9uIHZhbHVlPVwiNFwiPkFwcmlsPC9vcHRpb24+XG5cdFx0XHRcdFx0XHQ8b3B0aW9uIHZhbHVlPVwiNVwiPk1heTwvb3B0aW9uPlxuXHRcdFx0XHRcdFx0PG9wdGlvbiB2YWx1ZT1cIjZcIj5KdW5lPC9vcHRpb24+XG5cdFx0XHRcdFx0XHQ8b3B0aW9uIHZhbHVlPVwiN1wiPkp1bHk8L29wdGlvbj5cblx0XHRcdFx0XHRcdDxvcHRpb24gdmFsdWU9XCI4XCI+QXVndXN0PC9vcHRpb24+XG5cdFx0XHRcdFx0XHQ8b3B0aW9uIHZhbHVlPVwiOVwiPlNlcHRlbWVyPC9vcHRpb24+XG5cdFx0XHRcdFx0XHQ8b3B0aW9uIHZhbHVlPVwiMTBcIj5PY3RvYmVyPC9vcHRpb24+XG5cdFx0XHRcdFx0XHQ8b3B0aW9uIHZhbHVlPVwiMTFcIj5Ob3ZlbWJlcjwvb3B0aW9uPlxuXHRcdFx0XHRcdFx0PG9wdGlvbiB2YWx1ZT1cIjEyXCI+RGVjZW1iZXI8L29wdGlvbj5cblx0XHRcdFx0XHQ8L3NlbGVjdD5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQ8L2Rpdj5cblx0XHRcdDxCdXR0b24+RmluZCBFdmVudHM8L0J1dHRvbj5cblx0XHQ8L2Zvcm0+XG5cdCk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IEV2ZW50c1NlYXJjaDtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/events/events-search.js\n'
				);

				/***/
			},

		/***/ "./pages/events/index.js":
			/*!*******************************!*\
  !*** ./pages/events/index.js ***!
  \*******************************/
			/***/ function (
				__unused_webpack_module,
				__webpack_exports__,
				__webpack_require__
			) {
				"use strict";
				eval(
					'__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "getStaticProps": function() { return /* binding */ getStaticProps; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "next/router");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _helpers_api_util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../helpers/api-util */ "./helpers/api-util.js");\n/* harmony import */ var _components_events_event_list__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/events/event-list */ "./components/events/event-list.js");\n/* harmony import */ var _components_events_events_search__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/events/events-search */ "./components/events/events-search.js");\n\nvar _jsxFileName = "/Users/GK47LX/source/JSStudies/NextJS/sixth/pages/events/index.js";\n\n\n\n\n\n\nfunction AllEventsPage(props) {\n  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n  const {\n    events\n  } = props;\n\n  function findEventsHandler(year, month) {\n    const fullPath = `/events/${year}/${month}`;\n    router.push(fullPath);\n  }\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_events_events_search__WEBPACK_IMPORTED_MODULE_5__.default, {\n      onSearch: findEventsHandler\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 20,\n      columnNumber: 4\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_events_event_list__WEBPACK_IMPORTED_MODULE_4__.default, {\n      items: events\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 21,\n      columnNumber: 4\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 19,\n    columnNumber: 3\n  }, this);\n}\n\nasync function getStaticProps() {\n  const events = await (0,_helpers_api_util__WEBPACK_IMPORTED_MODULE_3__.getAllEvents)();\n  return {\n    props: {\n      events: events\n    },\n    revalidate: 60\n  };\n}\n/* harmony default export */ __webpack_exports__["default"] = (AllEventsPage);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0anMtY291cnNlLy4vcGFnZXMvZXZlbnRzL2luZGV4LmpzP2FjZTMiXSwibmFtZXMiOlsiQWxsRXZlbnRzUGFnZSIsInByb3BzIiwicm91dGVyIiwidXNlUm91dGVyIiwiZXZlbnRzIiwiZmluZEV2ZW50c0hhbmRsZXIiLCJ5ZWFyIiwibW9udGgiLCJmdWxsUGF0aCIsInB1c2giLCJnZXRTdGF0aWNQcm9wcyIsImdldEFsbEV2ZW50cyIsInJldmFsaWRhdGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsU0FBU0EsYUFBVCxDQUF1QkMsS0FBdkIsRUFBOEI7QUFDN0IsUUFBTUMsTUFBTSxHQUFHQyxzREFBUyxFQUF4QjtBQUNBLFFBQU07QUFBRUM7QUFBRixNQUFhSCxLQUFuQjs7QUFFQSxXQUFTSSxpQkFBVCxDQUEyQkMsSUFBM0IsRUFBaUNDLEtBQWpDLEVBQXdDO0FBQ3ZDLFVBQU1DLFFBQVEsR0FBSSxXQUFVRixJQUFLLElBQUdDLEtBQU0sRUFBMUM7QUFFQUwsVUFBTSxDQUFDTyxJQUFQLENBQVlELFFBQVo7QUFDQTs7QUFFRCxzQkFDQyw4REFBQywyQ0FBRDtBQUFBLDRCQUNDLDhEQUFDLHFFQUFEO0FBQWMsY0FBUSxFQUFFSDtBQUF4QjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREQsZUFFQyw4REFBQyxrRUFBRDtBQUFXLFdBQUssRUFBRUQ7QUFBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUZEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUREO0FBTUE7O0FBRU0sZUFBZU0sY0FBZixHQUFnQztBQUN0QyxRQUFNTixNQUFNLEdBQUcsTUFBTU8sK0RBQVksRUFBakM7QUFFQSxTQUFPO0FBQ05WLFNBQUssRUFBRTtBQUNORyxZQUFNLEVBQUVBO0FBREYsS0FERDtBQUlOUSxjQUFVLEVBQUU7QUFKTixHQUFQO0FBTUE7QUFFRCwrREFBZVosYUFBZiIsImZpbGUiOiIuL3BhZ2VzL2V2ZW50cy9pbmRleC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEZyYWdtZW50IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcblxuaW1wb3J0IHsgZ2V0QWxsRXZlbnRzIH0gZnJvbSBcIi4uLy4uL2hlbHBlcnMvYXBpLXV0aWxcIjtcbmltcG9ydCBFdmVudExpc3QgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvZXZlbnRzL2V2ZW50LWxpc3RcIjtcbmltcG9ydCBFdmVudHNTZWFyY2ggZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvZXZlbnRzL2V2ZW50cy1zZWFyY2hcIjtcblxuZnVuY3Rpb24gQWxsRXZlbnRzUGFnZShwcm9wcykge1xuXHRjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcblx0Y29uc3QgeyBldmVudHMgfSA9IHByb3BzO1xuXG5cdGZ1bmN0aW9uIGZpbmRFdmVudHNIYW5kbGVyKHllYXIsIG1vbnRoKSB7XG5cdFx0Y29uc3QgZnVsbFBhdGggPSBgL2V2ZW50cy8ke3llYXJ9LyR7bW9udGh9YDtcblxuXHRcdHJvdXRlci5wdXNoKGZ1bGxQYXRoKTtcblx0fVxuXG5cdHJldHVybiAoXG5cdFx0PEZyYWdtZW50PlxuXHRcdFx0PEV2ZW50c1NlYXJjaCBvblNlYXJjaD17ZmluZEV2ZW50c0hhbmRsZXJ9IC8+XG5cdFx0XHQ8RXZlbnRMaXN0IGl0ZW1zPXtldmVudHN9IC8+XG5cdFx0PC9GcmFnbWVudD5cblx0KTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKCkge1xuXHRjb25zdCBldmVudHMgPSBhd2FpdCBnZXRBbGxFdmVudHMoKTtcblxuXHRyZXR1cm4ge1xuXHRcdHByb3BzOiB7XG5cdFx0XHRldmVudHM6IGV2ZW50cyxcblx0XHR9LFxuXHRcdHJldmFsaWRhdGU6IDYwLFxuXHR9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBBbGxFdmVudHNQYWdlO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/events/index.js\n'
				);

				/***/
			},

		/***/ "./components/events/events-search.module.css":
			/*!****************************************************!*\
  !*** ./components/events/events-search.module.css ***!
  \****************************************************/
			/***/ function (module) {
				eval(
					'// Exports\nmodule.exports = {\n\t"form": "events-search_form__1dsBU",\n\t"controls": "events-search_controls__37h-6",\n\t"control": "events-search_control__14T40"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0anMtY291cnNlLy4vY29tcG9uZW50cy9ldmVudHMvZXZlbnRzLXNlYXJjaC5tb2R1bGUuY3NzP2Y3NjIiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9ldmVudHMvZXZlbnRzLXNlYXJjaC5tb2R1bGUuY3NzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiZm9ybVwiOiBcImV2ZW50cy1zZWFyY2hfZm9ybV9fMWRzQlVcIixcblx0XCJjb250cm9sc1wiOiBcImV2ZW50cy1zZWFyY2hfY29udHJvbHNfXzM3aC02XCIsXG5cdFwiY29udHJvbFwiOiBcImV2ZW50cy1zZWFyY2hfY29udHJvbF9fMTRUNDBcIlxufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/events/events-search.module.css\n'
				);

				/***/
			},

		/***/ "../next-server/lib/head":
			/*!****************************************************!*\
  !*** external "next/dist/next-server/lib/head.js" ***!
  \****************************************************/
			/***/ function (module) {
				"use strict";
				module.exports = require("next/dist/next-server/lib/head.js");

				/***/
			},

		/***/ "../next-server/lib/router-context":
			/*!**************************************************************!*\
  !*** external "next/dist/next-server/lib/router-context.js" ***!
  \**************************************************************/
			/***/ function (module) {
				"use strict";
				module.exports = require("next/dist/next-server/lib/router-context.js");

				/***/
			},

		/***/ "../next-server/lib/router/utils/get-asset-path-from-route":
			/*!**************************************************************************************!*\
  !*** external "next/dist/next-server/lib/router/utils/get-asset-path-from-route.js" ***!
  \**************************************************************************************/
			/***/ function (module) {
				"use strict";
				module.exports = require("next/dist/next-server/lib/router/utils/get-asset-path-from-route.js");

				/***/
			},

		/***/ "../next-server/lib/to-base-64":
			/*!**********************************************************!*\
  !*** external "next/dist/next-server/lib/to-base-64.js" ***!
  \**********************************************************/
			/***/ function (module) {
				"use strict";
				module.exports = require("next/dist/next-server/lib/to-base-64.js");

				/***/
			},

		/***/ "../next-server/server/image-config":
			/*!***************************************************************!*\
  !*** external "next/dist/next-server/server/image-config.js" ***!
  \***************************************************************/
			/***/ function (module) {
				"use strict";
				module.exports = require("next/dist/next-server/server/image-config.js");

				/***/
			},

		/***/ "next/router":
			/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
			/***/ function (module) {
				"use strict";
				module.exports = require("next/router");

				/***/
			},

		/***/ react:
			/*!************************!*\
  !*** external "react" ***!
  \************************/
			/***/ function (module) {
				"use strict";
				module.exports = require("react");

				/***/
			},

		/***/ "react-is":
			/*!***************************!*\
  !*** external "react-is" ***!
  \***************************/
			/***/ function (module) {
				"use strict";
				module.exports = require("react-is");

				/***/
			},

		/***/ "react/jsx-dev-runtime":
			/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
			/***/ function (module) {
				"use strict";
				module.exports = require("react/jsx-dev-runtime");

				/***/
			},
	};
	// load runtime
	var __webpack_require__ = require("../webpack-runtime.js");
	__webpack_require__.C(exports);
	var __webpack_exec__ = function (moduleId) {
		return __webpack_require__((__webpack_require__.s = moduleId));
	};
	var __webpack_exports__ = __webpack_require__.X(
		0,
		[
			"vendors-node_modules_babel_runtime_helpers_interopRequireDefault_js-node_modules_next_dist_cl-3e6c6e",
			"vendors-node_modules_next_link_js",
			"vendors-node_modules_next_image_js",
			"components_icons_address-icon_js-components_icons_date-icon_js",
			"components_events_event-list_js",
			"helpers_api-util_js",
		],
		function () {
			return __webpack_exec__("./pages/events/index.js");
		}
	);
	module.exports = __webpack_exports__;
})();
