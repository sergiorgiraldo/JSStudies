_N_E = (window.webpackJsonp_N_E = window.webpackJsonp_N_E || []).push([
	[6],
	{
		"/0+H": function (e, t, n) {
			"use strict";
			(t.__esModule = !0),
				(t.isInAmpMode = c),
				(t.useAmp = function () {
					return c(o.default.useContext(a.AmpStateContext));
				});
			var r,
				o = (r = n("q1tI")) && r.__esModule ? r : { default: r },
				a = n("lwAK");
			function c() {
				var e =
						arguments.length > 0 && void 0 !== arguments[0]
							? arguments[0]
							: {},
					t = e.ampFirst,
					n = void 0 !== t && t,
					r = e.hybrid,
					o = void 0 !== r && r,
					a = e.hasQuery,
					c = void 0 !== a && a;
				return n || (o && c);
			}
		},
		0: function (e, t, n) {
			n("GcxT"), (e.exports = n("nOHt"));
		},
		"1TCz": function (e, t, n) {
			"use strict";
			n.r(t);
			var r = n("nKUr");
			function o(e, t, n) {
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
			}
			n("zPlV");
			var a = n("q1tI"),
				c = n("YFqc"),
				i = n.n(c),
				u = n("CJ8n"),
				s = n.n(u);
			var f = function () {
					return Object(r.jsx)("div", {
						className: s.a.logo,
						children: "Srg' Next Blog"
					});
				},
				l = n("dbdp"),
				d = n.n(l);
			var p = function () {
				return Object(r.jsxs)("header", {
					className: d.a.header,
					children: [
						Object(r.jsx)(i.a, {
							href: "/",
							children: Object(r.jsx)("a", {
								children: Object(r.jsx)(f, {})
							})
						}),
						Object(r.jsx)("nav", {
							children: Object(r.jsxs)("ul", {
								children: [
									Object(r.jsx)("li", {
										children: Object(r.jsx)(i.a, {
											href: "/posts",
											children: "Posts"
										})
									}),
									Object(r.jsx)("li", {
										children: Object(r.jsx)(i.a, {
											href: "/contact",
											children: "Contact"
										})
									})
								]
							})
						})
					]
				});
			};
			var h = function (e) {
					return Object(r.jsxs)(a.Fragment, {
						children: [
							Object(r.jsx)(p, {}),
							Object(r.jsx)("main", { children: e.children })
						]
					});
				},
				v = n("g4pe"),
				b = n.n(v);
			function y(e, t) {
				var n = Object.keys(e);
				if (Object.getOwnPropertySymbols) {
					var r = Object.getOwnPropertySymbols(e);
					t &&
						(r = r.filter(function (t) {
							return Object.getOwnPropertyDescriptor(
								e,
								t
							).enumerable;
						})),
						n.push.apply(n, r);
				}
				return n;
			}
			function m(e) {
				for (var t = 1; t < arguments.length; t++) {
					var n = null != arguments[t] ? arguments[t] : {};
					t % 2
						? y(Object(n), !0).forEach(function (t) {
								o(e, t, n[t]);
						  })
						: Object.getOwnPropertyDescriptors
						? Object.defineProperties(
								e,
								Object.getOwnPropertyDescriptors(n)
						  )
						: y(Object(n)).forEach(function (t) {
								Object.defineProperty(
									e,
									t,
									Object.getOwnPropertyDescriptor(n, t)
								);
						  });
				}
				return e;
			}
			t.default = function (e) {
				var t = e.Component,
					n = e.pageProps;
				return Object(r.jsxs)(h, {
					children: [
						Object(r.jsx)(b.a, {
							children: Object(r.jsx)("meta", {
								name: "viewport",
								content: "width=device-width, initial-scale=1"
							})
						}),
						Object(r.jsx)(t, m({}, n))
					]
				});
			};
		},
		"8Kt/": function (e, t, n) {
			"use strict";
			n("lSNA");
			(t.__esModule = !0), (t.defaultHead = f), (t.default = void 0);
			var r,
				o = (function (e) {
					if (e && e.__esModule) return e;
					if (
						null === e ||
						("object" !== typeof e && "function" !== typeof e)
					)
						return { default: e };
					var t = s();
					if (t && t.has(e)) return t.get(e);
					var n = {},
						r =
							Object.defineProperty &&
							Object.getOwnPropertyDescriptor;
					for (var o in e)
						if (Object.prototype.hasOwnProperty.call(e, o)) {
							var a = r
								? Object.getOwnPropertyDescriptor(e, o)
								: null;
							a && (a.get || a.set)
								? Object.defineProperty(n, o, a)
								: (n[o] = e[o]);
						}
					(n.default = e), t && t.set(e, n);
					return n;
				})(n("q1tI")),
				a = (r = n("Xuae")) && r.__esModule ? r : { default: r },
				c = n("lwAK"),
				i = n("FYa8"),
				u = n("/0+H");
			function s() {
				if ("function" !== typeof WeakMap) return null;
				var e = new WeakMap();
				return (
					(s = function () {
						return e;
					}),
					e
				);
			}
			function f() {
				var e =
						arguments.length > 0 &&
						void 0 !== arguments[0] &&
						arguments[0],
					t = [o.default.createElement("meta", { charSet: "utf-8" })];
				return (
					e ||
						t.push(
							o.default.createElement("meta", {
								name: "viewport",
								content: "width=device-width"
							})
						),
					t
				);
			}
			function l(e, t) {
				return "string" === typeof t || "number" === typeof t
					? e
					: t.type === o.default.Fragment
					? e.concat(
							o.default.Children.toArray(t.props.children).reduce(
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
						var n = o.default.Children.toArray(t.props.children);
						return e.concat(n);
					}, [])
					.reduce(l, [])
					.reverse()
					.concat(f(t.inAmpMode))
					.filter(
						(function () {
							var e = new Set(),
								t = new Set(),
								n = new Set(),
								r = {};
							return function (o) {
								var a = !0,
									c = !1;
								if (
									o.key &&
									"number" !== typeof o.key &&
									o.key.indexOf("$") > 0
								) {
									c = !0;
									var i = o.key.slice(o.key.indexOf("$") + 1);
									e.has(i) ? (a = !1) : e.add(i);
								}
								switch (o.type) {
									case "title":
									case "base":
										t.has(o.type)
											? (a = !1)
											: t.add(o.type);
										break;
									case "meta":
										for (
											var u = 0, s = d.length;
											u < s;
											u++
										) {
											var f = d[u];
											if (o.props.hasOwnProperty(f))
												if ("charSet" === f)
													n.has(f)
														? (a = !1)
														: n.add(f);
												else {
													var l = o.props[f],
														p = r[f] || new Set();
													("name" === f && c) ||
													!p.has(l)
														? (p.add(l), (r[f] = p))
														: (a = !1);
												}
										}
								}
								return a;
							};
						})()
					)
					.reverse()
					.map(function (e, t) {
						var n = e.key || t;
						return o.default.cloneElement(e, { key: n });
					});
			}
			function h(e) {
				var t = e.children,
					n = (0, o.useContext)(c.AmpStateContext),
					r = (0, o.useContext)(i.HeadManagerContext);
				return o.default.createElement(
					a.default,
					{
						reduceComponentsToState: p,
						headManager: r,
						inAmpMode: (0, u.isInAmpMode)(n)
					},
					t
				);
			}
			h.rewind = function () {};
			var v = h;
			t.default = v;
		},
		Bnag: function (e, t) {
			e.exports = function () {
				throw new TypeError(
					"Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
				);
			};
		},
		CJ8n: function (e, t, n) {
			e.exports = { logo: "logo_logo__28eJO" };
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
		GcxT: function (e, t, n) {
			(window.__NEXT_P = window.__NEXT_P || []).push([
				"/_app",
				function () {
					return n("1TCz");
				}
			]);
		},
		Ijbi: function (e, t, n) {
			var r = n("WkPL");
			e.exports = function (e) {
				if (Array.isArray(e)) return r(e);
			};
		},
		RIqP: function (e, t, n) {
			var r = n("Ijbi"),
				o = n("EbDI"),
				a = n("ZhPi"),
				c = n("Bnag");
			e.exports = function (e) {
				return r(e) || o(e) || a(e) || c();
			};
		},
		Xuae: function (e, t, n) {
			"use strict";
			var r = n("RIqP"),
				o = n("lwsE"),
				a = n("W8MJ"),
				c = (n("PJYZ"), n("7W2i")),
				i = n("a1gu"),
				u = n("Nsbk");
			function s(e) {
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
						r = u(e);
					if (t) {
						var o = u(this).constructor;
						n = Reflect.construct(r, arguments, o);
					} else n = r.apply(this, arguments);
					return i(this, n);
				};
			}
			(t.__esModule = !0), (t.default = void 0);
			var f = n("q1tI"),
				l = (function (e) {
					c(n, e);
					var t = s(n);
					function n(e) {
						var a;
						return (
							o(this, n),
							((a = t.call(this, e))._hasHeadManager = void 0),
							(a.emitChange = function () {
								a._hasHeadManager &&
									a.props.headManager.updateHead(
										a.props.reduceComponentsToState(
											r(
												a.props.headManager
													.mountedInstances
											),
											a.props
										)
									);
							}),
							(a._hasHeadManager =
								a.props.headManager &&
								a.props.headManager.mountedInstances),
							a
						);
					}
					return (
						a(n, [
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
				})(f.Component);
			t.default = l;
		},
		YFqc: function (e, t, n) {
			e.exports = n("cTJO");
		},
		cTJO: function (e, t, n) {
			"use strict";
			var r = n("J4zp"),
				o = n("284h");
			(t.__esModule = !0), (t.default = void 0);
			var a = o(n("q1tI")),
				c = n("elyg"),
				i = n("nOHt"),
				u = n("vNVm"),
				s = {};
			function f(e, t, n, r) {
				if (e && (0, c.isLocalURL)(t)) {
					e.prefetch(t, n, r).catch(function (e) {
						0;
					});
					var o =
						r && "undefined" !== typeof r.locale
							? r.locale
							: e && e.locale;
					s[t + "%" + n + (o ? "%" + o : "")] = !0;
				}
			}
			var l = function (e) {
				var t = !1 !== e.prefetch,
					n = (0, i.useRouter)(),
					o = (n && n.pathname) || "/",
					l = a.default.useMemo(
						function () {
							var t = (0, c.resolveHref)(o, e.href, !0),
								n = r(t, 2),
								a = n[0],
								i = n[1];
							return {
								href: a,
								as: e.as ? (0, c.resolveHref)(o, e.as) : i || a
							};
						},
						[o, e.href, e.as]
					),
					d = l.href,
					p = l.as,
					h = e.children,
					v = e.replace,
					b = e.shallow,
					y = e.scroll,
					m = e.locale;
				"string" === typeof h &&
					(h = a.default.createElement("a", null, h));
				var g = a.Children.only(h),
					j = g && "object" === typeof g && g.ref,
					O = (0, u.useIntersection)({ rootMargin: "200px" }),
					_ = r(O, 2),
					w = _[0],
					x = _[1],
					M = a.default.useCallback(
						function (e) {
							w(e),
								j &&
									("function" === typeof j
										? j(e)
										: "object" === typeof j &&
										  (j.current = e));
						},
						[j, w]
					);
				(0, a.useEffect)(
					function () {
						var e = x && t && (0, c.isLocalURL)(d),
							r = "undefined" !== typeof m ? m : n && n.locale,
							o = s[d + "%" + p + (r ? "%" + r : "")];
						e && !o && f(n, d, p, { locale: r });
					},
					[p, d, x, m, t, n]
				);
				var P = {
					ref: M,
					onClick: function (e) {
						g.props &&
							"function" === typeof g.props.onClick &&
							g.props.onClick(e),
							e.defaultPrevented ||
								(function (e, t, n, r, o, a, i, u) {
									("A" !== e.currentTarget.nodeName ||
										(!(function (e) {
											var t = e.currentTarget.target;
											return (
												(t && "_self" !== t) ||
												e.metaKey ||
												e.ctrlKey ||
												e.shiftKey ||
												e.altKey ||
												(e.nativeEvent &&
													2 === e.nativeEvent.which)
											);
										})(e) &&
											(0, c.isLocalURL)(n))) &&
										(e.preventDefault(),
										null == i && (i = r.indexOf("#") < 0),
										t[o ? "replace" : "push"](n, r, {
											shallow: a,
											locale: u,
											scroll: i
										}).then(function (e) {
											e && i && document.body.focus();
										}));
								})(e, n, d, p, v, b, y, m);
					},
					onMouseEnter: function (e) {
						(0, c.isLocalURL)(d) &&
							(g.props &&
								"function" === typeof g.props.onMouseEnter &&
								g.props.onMouseEnter(e),
							f(n, d, p, { priority: !0 }));
					}
				};
				if (e.passHref || ("a" === g.type && !("href" in g.props))) {
					var C = "undefined" !== typeof m ? m : n && n.locale,
						E = (0, c.getDomainLocale)(
							p,
							C,
							n && n.locales,
							n && n.domainLocales
						);
					P.href =
						E ||
						(0, c.addBasePath)(
							(0, c.addLocale)(p, C, n && n.defaultLocale)
						);
				}
				return a.default.cloneElement(g, P);
			};
			t.default = l;
		},
		dbdp: function (e, t, n) {
			e.exports = {
				header: "main-navigation_header__1muvD",
				active: "main-navigation_active__3BRtK"
			};
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
			var o = (
				(r = n("q1tI")) && r.__esModule ? r : { default: r }
			).default.createContext({});
			t.AmpStateContext = o;
		},
		vNVm: function (e, t, n) {
			"use strict";
			var r = n("J4zp"),
				o = n("TqRt");
			(t.__esModule = !0),
				(t.useIntersection = function (e) {
					var t = e.rootMargin,
						n = e.disabled || !i,
						o = (0, a.useRef)(),
						s = (0, a.useState)(!1),
						f = r(s, 2),
						l = f[0],
						d = f[1],
						p = (0, a.useCallback)(
							function (e) {
								o.current &&
									(o.current(), (o.current = void 0)),
									n ||
										l ||
										(e &&
											e.tagName &&
											(o.current = (function (e, t, n) {
												var r = (function (e) {
														var t =
																e.rootMargin ||
																"",
															n = u.get(t);
														if (n) return n;
														var r = new Map(),
															o =
																new IntersectionObserver(
																	function (
																		e
																	) {
																		e.forEach(
																			function (
																				e
																			) {
																				var t =
																						r.get(
																							e.target
																						),
																					n =
																						e.isIntersecting ||
																						e.intersectionRatio >
																							0;
																				t &&
																					n &&
																					t(
																						n
																					);
																			}
																		);
																	},
																	e
																);
														return (
															u.set(
																t,
																(n = {
																	id: t,
																	observer: o,
																	elements: r
																})
															),
															n
														);
													})(n),
													o = r.id,
													a = r.observer,
													c = r.elements;
												return (
													c.set(e, t),
													a.observe(e),
													function () {
														c.delete(e),
															a.unobserve(e),
															0 === c.size &&
																(a.disconnect(),
																u.delete(o));
													}
												);
											})(
												e,
												function (e) {
													return e && d(e);
												},
												{ rootMargin: t }
											)));
							},
							[n, t, l]
						);
					return (
						(0, a.useEffect)(
							function () {
								i ||
									l ||
									(0, c.default)(function () {
										return d(!0);
									});
							},
							[l]
						),
						[p, l]
					);
				});
			var a = n("q1tI"),
				c = o(n("0G5g")),
				i = "undefined" !== typeof IntersectionObserver;
			var u = new Map();
		},
		zPlV: function (e, t, n) {}
	},
	[[0, 0, 1, 2, 3]]
]);
