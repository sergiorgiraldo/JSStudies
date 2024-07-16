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
	/******/ return __webpack_require__((__webpack_require__.s = 2));
	/******/
})(
	/************************************************************************/
	/******/ {
		/***/ 2: /***/ function (module, exports, __webpack_require__) {
			module.exports = __webpack_require__("5Q0Z");

			/***/
		},

		/***/ "5Q0Z": /***/ function (
			module,
			__webpack_exports__,
			__webpack_require__
		) {
			"use strict";
			// ESM COMPAT FLAG
			__webpack_require__.r(__webpack_exports__);

			// EXPORTS
			__webpack_require__.d(
				__webpack_exports__,
				"getStaticProps",
				function () {
					return /* binding */ getStaticProps;
				}
			);
			__webpack_require__.d(
				__webpack_exports__,
				"getStaticPaths",
				function () {
					return /* binding */ getStaticPaths;
				}
			);

			// EXTERNAL MODULE: external "react/jsx-runtime"
			var jsx_runtime_ = __webpack_require__("F5FC");

			// EXTERNAL MODULE: external "react"
			var external_react_ = __webpack_require__("cDcd");

			// EXTERNAL MODULE: ./helpers/api-utils.js
			var api_utils = __webpack_require__("K3xR");

			// EXTERNAL MODULE: ./components/event-detail/event-summary.module.css
			var event_summary_module = __webpack_require__("jx0t");
			var event_summary_module_default =
				/*#__PURE__*/ __webpack_require__.n(event_summary_module);

			// CONCATENATED MODULE: ./components/event-detail/event-summary.js

			function EventSummary(props) {
				const { title } = props;
				return /*#__PURE__*/ Object(jsx_runtime_["jsx"])("section", {
					className: event_summary_module_default.a.summary,
					children: /*#__PURE__*/ Object(jsx_runtime_["jsx"])("h1", {
						children: title,
					}),
				});
			}

			/* harmony default export */ var event_summary = EventSummary;
			// EXTERNAL MODULE: ./components/icons/address-icon.js
			var address_icon = __webpack_require__("jvA7");

			// EXTERNAL MODULE: ./components/icons/date-icon.js
			var date_icon = __webpack_require__("gGuk");

			// EXTERNAL MODULE: ./components/event-detail/logistics-item.module.css
			var logistics_item_module = __webpack_require__("If3N");
			var logistics_item_module_default =
				/*#__PURE__*/ __webpack_require__.n(logistics_item_module);

			// CONCATENATED MODULE: ./components/event-detail/logistics-item.js

			function LogisticsItem(props) {
				const { icon: Icon } = props;
				return /*#__PURE__*/ Object(jsx_runtime_["jsxs"])("li", {
					className: logistics_item_module_default.a.item,
					children: [
						/*#__PURE__*/ Object(jsx_runtime_["jsx"])("span", {
							className: logistics_item_module_default.a.icon,
							children: /*#__PURE__*/ Object(jsx_runtime_["jsx"])(
								Icon,
								{}
							),
						}),
						/*#__PURE__*/ Object(jsx_runtime_["jsx"])("span", {
							className: logistics_item_module_default.a.content,
							children: props.children,
						}),
					],
				});
			}

			/* harmony default export */ var logistics_item = LogisticsItem;
			// EXTERNAL MODULE: ./components/event-detail/event-logistics.module.css
			var event_logistics_module = __webpack_require__("LnYn");
			var event_logistics_module_default =
				/*#__PURE__*/ __webpack_require__.n(event_logistics_module);

			// CONCATENATED MODULE: ./components/event-detail/event-logistics.js

			function EventLogistics(props) {
				const { date, address, image, imageAlt } = props;
				const humanReadableDate = new Date(date).toLocaleDateString(
					"en-US",
					{
						day: "numeric",
						month: "long",
						year: "numeric",
					}
				);
				const addressText = address.replace(", ", "\n");
				return /*#__PURE__*/ Object(jsx_runtime_["jsxs"])("section", {
					className: event_logistics_module_default.a.logistics,
					children: [
						/*#__PURE__*/ Object(jsx_runtime_["jsx"])("div", {
							className: event_logistics_module_default.a.image,
							children: /*#__PURE__*/ Object(jsx_runtime_["jsx"])(
								"img",
								{
									src: `/${image}`,
									alt: imageAlt,
								}
							),
						}),
						/*#__PURE__*/ Object(jsx_runtime_["jsxs"])("ul", {
							className: event_logistics_module_default.a.list,
							children: [
								/*#__PURE__*/ Object(jsx_runtime_["jsx"])(
									logistics_item,
									{
										icon: date_icon["a" /* default */],
										children: /*#__PURE__*/ Object(
											jsx_runtime_["jsx"]
										)("time", {
											children: humanReadableDate,
										}),
									}
								),
								/*#__PURE__*/ Object(jsx_runtime_["jsx"])(
									logistics_item,
									{
										icon: address_icon["a" /* default */],
										children: /*#__PURE__*/ Object(
											jsx_runtime_["jsx"]
										)("address", {
											children: addressText,
										}),
									}
								),
							],
						}),
					],
				});
			}

			/* harmony default export */ var event_logistics = EventLogistics;
			// EXTERNAL MODULE: ./components/event-detail/event-content.module.css
			var event_content_module = __webpack_require__("HlLc");
			var event_content_module_default =
				/*#__PURE__*/ __webpack_require__.n(event_content_module);

			// CONCATENATED MODULE: ./components/event-detail/event-content.js

			function EventContent(props) {
				return /*#__PURE__*/ Object(jsx_runtime_["jsx"])("section", {
					className: event_content_module_default.a.content,
					children: props.children,
				});
			}

			/* harmony default export */ var event_content = EventContent;
			// CONCATENATED MODULE: ./pages/events/[eventId].js

			function EventDetailPage(props) {
				const event = props.selectedEvent;

				if (!event) {
					return /*#__PURE__*/ Object(jsx_runtime_["jsx"])("div", {
						className: "center",
						children: /*#__PURE__*/ Object(jsx_runtime_["jsx"])(
							"p",
							{
								children: "Loading...",
							}
						),
					});
				}

				return /*#__PURE__*/ Object(jsx_runtime_["jsxs"])(
					external_react_["Fragment"],
					{
						children: [
							/*#__PURE__*/ Object(jsx_runtime_["jsx"])(
								event_summary,
								{
									title: event.title,
								}
							),
							/*#__PURE__*/ Object(jsx_runtime_["jsx"])(
								event_logistics,
								{
									date: event.date,
									address: event.location,
									image: event.image,
									imageAlt: event.title,
								}
							),
							/*#__PURE__*/ Object(jsx_runtime_["jsx"])(
								event_content,
								{
									children: /*#__PURE__*/ Object(
										jsx_runtime_["jsx"]
									)("p", {
										children: event.description,
									}),
								}
							),
						],
					}
				);
			}

			async function getStaticProps(context) {
				const eventId = context.params.eventId;
				const event = await Object(api_utils["b" /* getEventById */])(
					eventId
				);

				if (!event) {
					return {
						notFound: true,
					}; //redirects to 404
				}

				return {
					props: {
						selectedEvent: event,
					},
					revalidate: 30,
				};
			}
			async function getStaticPaths() {
				const events = await Object(
					api_utils["c" /* getFeaturedEvents */]
				)();
				const paths = events.map((event) => ({
					params: {
						eventId: event.id,
					},
				}));
				return {
					paths: paths,
					fallback: true,
				};
			}
			/* harmony default export */ var _eventId_ = (__webpack_exports__[
				"default"
			] = EventDetailPage);

			/***/
		},

		/***/ F5FC: /***/ function (module, exports) {
			module.exports = require("react/jsx-runtime");

			/***/
		},

		/***/ HlLc: /***/ function (module, exports) {
			// Exports
			module.exports = {
				content: "event-content_content__2VRI6",
			};

			/***/
		},

		/***/ If3N: /***/ function (module, exports) {
			// Exports
			module.exports = {
				item: "logistics-item_item__1FERm",
				icon: "logistics-item_icon__1DIos",
			};

			/***/
		},

		/***/ K3xR: /***/ function (
			module,
			__webpack_exports__,
			__webpack_require__
		) {
			"use strict";
			/* harmony export (binding) */ __webpack_require__.d(
				__webpack_exports__,
				"a",
				function () {
					return getAllEvents;
				}
			);
			/* harmony export (binding) */ __webpack_require__.d(
				__webpack_exports__,
				"c",
				function () {
					return getFeaturedEvents;
				}
			);
			/* harmony export (binding) */ __webpack_require__.d(
				__webpack_exports__,
				"b",
				function () {
					return getEventById;
				}
			);
			/* harmony export (binding) */ __webpack_require__.d(
				__webpack_exports__,
				"d",
				function () {
					return getFilteredEvents;
				}
			);
			function ownKeys(object, enumerableOnly) {
				var keys = Object.keys(object);
				if (Object.getOwnPropertySymbols) {
					var symbols = Object.getOwnPropertySymbols(object);
					if (enumerableOnly)
						symbols = symbols.filter(function (sym) {
							return Object.getOwnPropertyDescriptor(
								object,
								sym
							).enumerable;
						});
					keys.push.apply(keys, symbols);
				}
				return keys;
			}

			function _objectSpread(target) {
				for (var i = 1; i < arguments.length; i++) {
					var source = arguments[i] != null ? arguments[i] : {};
					if (i % 2) {
						ownKeys(Object(source), true).forEach(function (key) {
							_defineProperty(target, key, source[key]);
						});
					} else if (Object.getOwnPropertyDescriptors) {
						Object.defineProperties(
							target,
							Object.getOwnPropertyDescriptors(source)
						);
					} else {
						ownKeys(Object(source)).forEach(function (key) {
							Object.defineProperty(
								target,
								key,
								Object.getOwnPropertyDescriptor(source, key)
							);
						});
					}
				}
				return target;
			}

			function _defineProperty(obj, key, value) {
				if (key in obj) {
					Object.defineProperty(obj, key, {
						value: value,
						enumerable: true,
						configurable: true,
						writable: true,
					});
				} else {
					obj[key] = value;
				}
				return obj;
			}

			async function getAllEvents() {
				const response = await fetch(
					"https://nextjs-course-d43b3-default-rtdb.europe-west1.firebasedatabase.app/events.json"
				);
				const data = await response.json();
				const events = [];

				for (const key in data) {
					events.push(
						_objectSpread(
							{
								id: key,
							},
							data[key]
						)
					);
				}

				return events;
			}
			async function getFeaturedEvents() {
				const allEvents = await getAllEvents();
				return allEvents.filter((event) => event.isFeatured);
			}
			async function getEventById(id) {
				const allEvents = await getAllEvents();
				return allEvents.find((event) => event.id === id);
			}
			async function getFilteredEvents(dateFilter) {
				const { year, month } = dateFilter;
				const allEvents = await getAllEvents();
				let filteredEvents = allEvents.filter((event) => {
					const eventDate = new Date(event.date);
					return (
						eventDate.getFullYear() === year &&
						eventDate.getMonth() === month - 1
					);
				});
				return filteredEvents;
			}

			/***/
		},

		/***/ LnYn: /***/ function (module, exports) {
			// Exports
			module.exports = {
				logistics: "event-logistics_logistics__3HiYD",
				image: "event-logistics_image__1ED6X",
				list: "event-logistics_list__59rDU",
			};

			/***/
		},

		/***/ cDcd: /***/ function (module, exports) {
			module.exports = require("react");

			/***/
		},

		/***/ gGuk: /***/ function (
			module,
			__webpack_exports__,
			__webpack_require__
		) {
			"use strict";
			/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ =
				__webpack_require__("F5FC");
			/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default =
				/*#__PURE__*/ __webpack_require__.n(
					react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__
				);

			function DateIcon() {
				return /*#__PURE__*/ Object(
					react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"]
				)("svg", {
					xmlns: "http://www.w3.org/2000/svg",
					fill: "none",
					viewBox: "0 0 24 24",
					stroke: "currentColor",
					children: /*#__PURE__*/ Object(
						react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"]
					)("path", {
						strokeLinecap: "round",
						strokeLinejoin: "round",
						strokeWidth: 2,
						d: "M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z",
					}),
				});
			}

			/* harmony default export */ __webpack_exports__["a"] = DateIcon;

			/***/
		},

		/***/ jvA7: /***/ function (
			module,
			__webpack_exports__,
			__webpack_require__
		) {
			"use strict";
			/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ =
				__webpack_require__("F5FC");
			/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default =
				/*#__PURE__*/ __webpack_require__.n(
					react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__
				);

			function AddressIcon() {
				return /*#__PURE__*/ Object(
					react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"]
				)("svg", {
					xmlns: "http://www.w3.org/2000/svg",
					fill: "none",
					viewBox: "0 0 24 24",
					stroke: "currentColor",
					children: [
						/*#__PURE__*/ Object(
							react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__[
								"jsx"
							]
						)("path", {
							strokeLinecap: "round",
							strokeLinejoin: "round",
							strokeWidth: 2,
							d: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z",
						}),
						/*#__PURE__*/ Object(
							react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__[
								"jsx"
							]
						)("path", {
							strokeLinecap: "round",
							strokeLinejoin: "round",
							strokeWidth: 2,
							d: "M15 11a3 3 0 11-6 0 3 3 0 016 0z",
						}),
					],
				});
			}

			/* harmony default export */ __webpack_exports__["a"] = AddressIcon;

			/***/
		},

		/***/ jx0t: /***/ function (module, exports) {
			// Exports
			module.exports = {
				summary: "event-summary_summary__3PCze",
			};

			/***/
		},

		/******/
	}
);
