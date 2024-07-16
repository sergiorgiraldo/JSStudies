_N_E = (window.webpackJsonp_N_E = window.webpackJsonp_N_E || []).push([
	[8],
	{
		"+8Ne": function (e, t, n) {
			(window.__NEXT_P = window.__NEXT_P || []).push([
				"/contact",
				function () {
					return n("UqWo");
				}
			]);
		},
		"+MNi": function (e, t, n) {
			e.exports = {
				contact: "contact-form_contact__2DYss",
				form: "contact-form_form__1RTmV",
				controls: "contact-form_controls__3o80h",
				control: "contact-form_control__1hqvU",
				actions: "contact-form_actions__RzW-v"
			};
		},
		"/0+H": function (e, t, n) {
			"use strict";
			(t.__esModule = !0),
				(t.isInAmpMode = c),
				(t.useAmp = function () {
					return c(a.default.useContext(o.AmpStateContext));
				});
			var r,
				a = (r = n("q1tI")) && r.__esModule ? r : { default: r },
				o = n("lwAK");
			function c() {
				var e =
						arguments.length > 0 && void 0 !== arguments[0]
							? arguments[0]
							: {},
					t = e.ampFirst,
					n = void 0 !== t && t,
					r = e.hybrid,
					a = void 0 !== r && r,
					o = e.hasQuery,
					c = void 0 !== o && o;
				return n || (a && c);
			}
		},
		"3YlN": function (e, t, n) {
			e.exports = {
				notification: "notification_notification__3oWBf",
				success: "notification_success__3Hbna",
				error: "notification_error__1LYKp"
			};
		},
		"8Kt/": function (e, t, n) {
			"use strict";
			n("lSNA");
			(t.__esModule = !0), (t.defaultHead = l), (t.default = void 0);
			var r,
				a = (function (e) {
					if (e && e.__esModule) return e;
					if (
						null === e ||
						("object" !== typeof e && "function" !== typeof e)
					)
						return { default: e };
					var t = u();
					if (t && t.has(e)) return t.get(e);
					var n = {},
						r =
							Object.defineProperty &&
							Object.getOwnPropertyDescriptor;
					for (var a in e)
						if (Object.prototype.hasOwnProperty.call(e, a)) {
							var o = r
								? Object.getOwnPropertyDescriptor(e, a)
								: null;
							o && (o.get || o.set)
								? Object.defineProperty(n, a, o)
								: (n[a] = e[a]);
						}
					(n.default = e), t && t.set(e, n);
					return n;
				})(n("q1tI")),
				o = (r = n("Xuae")) && r.__esModule ? r : { default: r },
				c = n("lwAK"),
				s = n("FYa8"),
				i = n("/0+H");
			function u() {
				if ("function" !== typeof WeakMap) return null;
				var e = new WeakMap();
				return (
					(u = function () {
						return e;
					}),
					e
				);
			}
			function l() {
				var e =
						arguments.length > 0 &&
						void 0 !== arguments[0] &&
						arguments[0],
					t = [a.default.createElement("meta", { charSet: "utf-8" })];
				return (
					e ||
						t.push(
							a.default.createElement("meta", {
								name: "viewport",
								content: "width=device-width"
							})
						),
					t
				);
			}
			function f(e, t) {
				return "string" === typeof t || "number" === typeof t
					? e
					: t.type === a.default.Fragment
					? e.concat(
							a.default.Children.toArray(t.props.children).reduce(
								function (e, t) {
									return "string" === typeof t ||
										"number" === typeof t
										? e
										: e.concat(t);
								},
								[]
							)
					  )
					: e.concat(t);
			}
			var d = ["name", "httpEquiv", "charSet", "itemProp"];
			function p(e, t) {
				return e
					.reduce(function (e, t) {
						var n = a.default.Children.toArray(t.props.children);
						return e.concat(n);
					}, [])
					.reduce(f, [])
					.reverse()
					.concat(l(t.inAmpMode))
					.filter(
						(function () {
							var e = new Set(),
								t = new Set(),
								n = new Set(),
								r = {};
							return function (a) {
								var o = !0,
									c = !1;
								if (
									a.key &&
									"number" !== typeof a.key &&
									a.key.indexOf("$") > 0
								) {
									c = !0;
									var s = a.key.slice(a.key.indexOf("$") + 1);
									e.has(s) ? (o = !1) : e.add(s);
								}
								switch (a.type) {
									case "title":
									case "base":
										t.has(a.type)
											? (o = !1)
											: t.add(a.type);
										break;
									case "meta":
										for (
											var i = 0, u = d.length;
											i < u;
											i++
										) {
											var l = d[i];
											if (a.props.hasOwnProperty(l))
												if ("charSet" === l)
													n.has(l)
														? (o = !1)
														: n.add(l);
												else {
													var f = a.props[l],
														p = r[l] || new Set();
													("name" === l && c) ||
													!p.has(f)
														? (p.add(f), (r[l] = p))
														: (o = !1);
												}
										}
								}
								return o;
							};
						})()
					)
					.reverse()
					.map(function (e, t) {
						var n = e.key || t;
						return a.default.cloneElement(e, { key: n });
					});
			}
			function h(e) {
				var t = e.children,
					n = (0, a.useContext)(c.AmpStateContext),
					r = (0, a.useContext)(s.HeadManagerContext);
				return a.default.createElement(
					o.default,
					{
						reduceComponentsToState: p,
						headManager: r,
						inAmpMode: (0, i.isInAmpMode)(n)
					},
					t
				);
			}
			h.rewind = function () {};
			var m = h;
			t.default = m;
		},
		Bnag: function (e, t) {
			e.exports = function () {
				throw new TypeError(
					"Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
				);
			};
		},
		EbDI: function (e, t) {
			e.exports = function (e) {
				if (
					"undefined" !== typeof Symbol &&
					Symbol.iterator in Object(e)
				)
					return Array.from(e);
			};
		},
		Ijbi: function (e, t, n) {
			var r = n("WkPL");
			e.exports = function (e) {
				if (Array.isArray(e)) return r(e);
			};
		},
		RIqP: function (e, t, n) {
			var r = n("Ijbi"),
				a = n("EbDI"),
				o = n("ZhPi"),
				c = n("Bnag");
			e.exports = function (e) {
				return r(e) || a(e) || o(e) || c();
			};
		},
		UqWo: function (e, t, n) {
			"use strict";
			n.r(t);
			var r = n("nKUr"),
				a = n("q1tI"),
				o = n("g4pe"),
				c = n.n(o),
				s = n("o0o1"),
				i = n.n(s);
			function u(e, t, n, r, a, o, c) {
				try {
					var s = e[o](c),
						i = s.value;
				} catch (u) {
					return void n(u);
				}
				s.done ? t(i) : Promise.resolve(i).then(r, a);
			}
			function l(e) {
				return function () {
					var t = this,
						n = arguments;
					return new Promise(function (r, a) {
						var o = e.apply(t, n);
						function c(e) {
							u(o, r, a, c, s, "next", e);
						}
						function s(e) {
							u(o, r, a, c, s, "throw", e);
						}
						c(void 0);
					});
				};
			}
			var f = n("+MNi"),
				d = n.n(f),
				p = n("i8i4"),
				h = n.n(p),
				m = n("3YlN"),
				v = n.n(m);
			var b = function (e) {
				var t = e.title,
					n = e.message,
					a = e.status,
					o = "";
				"success" === a && (o = v.a.success),
					"error" === a && (o = v.a.error);
				var c = "".concat(v.a.notification, " ").concat(o);
				return h.a.createPortal(
					Object(r.jsxs)("div", {
						className: c,
						children: [
							Object(r.jsx)("h2", { children: t }),
							Object(r.jsx)("p", { children: n })
						]
					}),
					document.getElementById("notifications")
				);
			};
			function g(e) {
				return j.apply(this, arguments);
			}
			function j() {
				return (j = l(
					i.a.mark(function e(t) {
						var n, r;
						return i.a.wrap(function (e) {
							for (;;)
								switch ((e.prev = e.next)) {
									case 0:
										return (
											(e.next = 2),
											fetch("/api/contact", {
												method: "POST",
												body: JSON.stringify(t),
												headers: {
													"Content-Type":
														"application/json"
												}
											})
										);
									case 2:
										return (
											(n = e.sent), (e.next = 5), n.json()
										);
									case 5:
										if (((r = e.sent), n.ok)) {
											e.next = 8;
											break;
										}
										throw new Error(
											r.message || "Something went wrong!"
										);
									case 8:
									case "end":
										return e.stop();
								}
						}, e);
					})
				)).apply(this, arguments);
			}
			var y = function () {
				var e,
					t = Object(a.useState)(""),
					n = t[0],
					o = t[1],
					c = Object(a.useState)(""),
					s = c[0],
					u = c[1],
					f = Object(a.useState)(""),
					p = f[0],
					h = f[1],
					m = Object(a.useState)(),
					v = m[0],
					j = m[1],
					y = Object(a.useState)(),
					_ = y[0],
					x = y[1];
				function w() {
					return (w = l(
						i.a.mark(function e(t) {
							return i.a.wrap(
								function (e) {
									for (;;)
										switch ((e.prev = e.next)) {
											case 0:
												return (
													t.preventDefault(),
													j("pending"),
													(e.prev = 2),
													(e.next = 5),
													g({
														email: n,
														name: s,
														message: p
													})
												);
											case 5:
												j("success"),
													h(""),
													o(""),
													u(""),
													(e.next = 15);
												break;
											case 11:
												(e.prev = 11),
													(e.t0 = e.catch(2)),
													x(e.t0.message),
													j("error");
											case 15:
											case "end":
												return e.stop();
										}
								},
								e,
								null,
								[[2, 11]]
							);
						})
					)).apply(this, arguments);
				}
				return (
					"pending" === v
						? (e = {
								status: "pending",
								title: "Sending message...",
								message: "Your message is on its way!"
						  })
						: "success" === v
						? (e = {
								status: "success",
								title: "Success!",
								message: "Message sent successfully!"
						  })
						: "error" === v &&
						  (e = {
								status: "error",
								title: "Error!",
								message: _
						  }),
					Object(r.jsxs)("section", {
						className: d.a.contact,
						children: [
							Object(r.jsx)("h1", {
								children: "How can I help you?"
							}),
							Object(r.jsxs)("form", {
								className: d.a.form,
								onSubmit: function (e) {
									return w.apply(this, arguments);
								},
								children: [
									Object(r.jsxs)("div", {
										className: d.a.controls,
										children: [
											Object(r.jsxs)("div", {
												className: d.a.control,
												children: [
													Object(r.jsx)("label", {
														htmlFor: "email",
														children: "Your Email"
													}),
													Object(r.jsx)("input", {
														type: "email",
														id: "email",
														required: !0,
														value: n,
														onChange: function (e) {
															return o(
																e.target.value
															);
														}
													})
												]
											}),
											Object(r.jsxs)("div", {
												className: d.a.control,
												children: [
													Object(r.jsx)("label", {
														htmlFor: "name",
														children: "Your Name"
													}),
													Object(r.jsx)("input", {
														type: "text",
														id: "name",
														required: !0,
														value: s,
														onChange: function (e) {
															return u(
																e.target.value
															);
														}
													})
												]
											})
										]
									}),
									Object(r.jsxs)("div", {
										className: d.a.control,
										children: [
											Object(r.jsx)("label", {
												htmlFor: "message",
												children: "Your Message"
											}),
											Object(r.jsx)("textarea", {
												id: "message",
												rows: "5",
												required: !0,
												value: p,
												onChange: function (e) {
													return h(e.target.value);
												}
											})
										]
									}),
									Object(r.jsx)("div", {
										className: d.a.actions,
										children: Object(r.jsx)("button", {
											children: "Send Message"
										})
									})
								]
							}),
							e &&
								Object(r.jsx)(b, {
									status: e.status,
									title: e.title,
									message: e.message
								})
						]
					})
				);
			};
			t.default = function () {
				return Object(r.jsxs)(a.Fragment, {
					children: [
						Object(r.jsxs)(c.a, {
							children: [
								Object(r.jsx)("title", {
									children: "Contact Me"
								}),
								Object(r.jsx)("meta", {
									name: "description",
									content: "Send me your messages!"
								})
							]
						}),
						Object(r.jsx)(y, {})
					]
				});
			};
		},
		Xuae: function (e, t, n) {
			"use strict";
			var r = n("RIqP"),
				a = n("lwsE"),
				o = n("W8MJ"),
				c = (n("PJYZ"), n("7W2i")),
				s = n("a1gu"),
				i = n("Nsbk");
			function u(e) {
				var t = (function () {
					if ("undefined" === typeof Reflect || !Reflect.construct)
						return !1;
					if (Reflect.construct.sham) return !1;
					if ("function" === typeof Proxy) return !0;
					try {
						return (
							Date.prototype.toString.call(
								Reflect.construct(Date, [], function () {})
							),
							!0
						);
					} catch (e) {
						return !1;
					}
				})();
				return function () {
					var n,
						r = i(e);
					if (t) {
						var a = i(this).constructor;
						n = Reflect.construct(r, arguments, a);
					} else n = r.apply(this, arguments);
					return s(this, n);
				};
			}
			(t.__esModule = !0), (t.default = void 0);
			var l = n("q1tI"),
				f = (function (e) {
					c(n, e);
					var t = u(n);
					function n(e) {
						var o;
						return (
							a(this, n),
							((o = t.call(this, e))._hasHeadManager = void 0),
							(o.emitChange = function () {
								o._hasHeadManager &&
									o.props.headManager.updateHead(
										o.props.reduceComponentsToState(
											r(
												o.props.headManager
													.mountedInstances
											),
											o.props
										)
									);
							}),
							(o._hasHeadManager =
								o.props.headManager &&
								o.props.headManager.mountedInstances),
							o
						);
					}
					return (
						o(n, [
							{
								key: "componentDidMount",
								value: function () {
									this._hasHeadManager &&
										this.props.headManager.mountedInstances.add(
											this
										),
										this.emitChange();
								}
							},
							{
								key: "componentDidUpdate",
								value: function () {
									this.emitChange();
								}
							},
							{
								key: "componentWillUnmount",
								value: function () {
									this._hasHeadManager &&
										this.props.headManager.mountedInstances.delete(
											this
										),
										this.emitChange();
								}
							},
							{
								key: "render",
								value: function () {
									return null;
								}
							}
						]),
						n
					);
				})(l.Component);
			t.default = f;
		},
		g4pe: function (e, t, n) {
			e.exports = n("8Kt/");
		},
		lSNA: function (e, t) {
			e.exports = function (e, t, n) {
				return (
					t in e
						? Object.defineProperty(e, t, {
								value: n,
								enumerable: !0,
								configurable: !0,
								writable: !0
						  })
						: (e[t] = n),
					e
				);
			};
		},
		lwAK: function (e, t, n) {
			"use strict";
			var r;
			(t.__esModule = !0), (t.AmpStateContext = void 0);
			var a = (
				(r = n("q1tI")) && r.__esModule ? r : { default: r }
			).default.createContext({});
			t.AmpStateContext = a;
		}
	},
	[["+8Ne", 0, 1, 2]]
]);
