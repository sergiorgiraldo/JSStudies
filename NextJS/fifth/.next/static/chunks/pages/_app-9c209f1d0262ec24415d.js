_N_E = (window.webpackJsonp_N_E = window.webpackJsonp_N_E || []).push([
	[4],
	{
		0: function (e, n, t) {
			t("GcxT"), (e.exports = t("nOHt"));
		},
		"1TCz": function (e, n, t) {
			"use strict";
			function r(e, n, t) {
				return (
					n in e
						? Object.defineProperty(e, n, {
								value: t,
								enumerable: !0,
								configurable: !0,
								writable: !0,
						  })
						: (e[n] = t),
					e
				);
			}
			t.r(n);
			var o = t("nKUr"),
				c = t("q1tI"),
				a = t("YFqc"),
				i = t.n(a),
				s = t("2FXi"),
				u = t.n(s);
			var l = function () {
				return Object(o.jsxs)("header", {
					className: u.a.header,
					children: [
						Object(o.jsx)("div", {
							className: u.a.logo,
							children: Object(o.jsx)(i.a, {
								href: "/",
								children: "NextEvents",
							}),
						}),
						Object(o.jsx)("nav", {
							className: u.a.navigation,
							children: Object(o.jsx)("ul", {
								children: Object(o.jsx)("li", {
									children: Object(o.jsx)(i.a, {
										href: "/events",
										children: "Browse All Events",
									}),
								}),
							}),
						}),
					],
				});
			};
			var f = function (e) {
				return Object(o.jsxs)(c.Fragment, {
					children: [
						Object(o.jsx)(l, {}),
						Object(o.jsx)("main", { children: e.children }),
					],
				});
			};
			t("zPlV");
			function p(e, n) {
				var t = Object.keys(e);
				if (Object.getOwnPropertySymbols) {
					var r = Object.getOwnPropertySymbols(e);
					n &&
						(r = r.filter(function (n) {
							return Object.getOwnPropertyDescriptor(
								e,
								n
							).enumerable;
						})),
						t.push.apply(t, r);
				}
				return t;
			}
			function d(e) {
				for (var n = 1; n < arguments.length; n++) {
					var t = null != arguments[n] ? arguments[n] : {};
					n % 2
						? p(Object(t), !0).forEach(function (n) {
								r(e, n, t[n]);
						  })
						: Object.getOwnPropertyDescriptors
						? Object.defineProperties(
								e,
								Object.getOwnPropertyDescriptors(t)
						  )
						: p(Object(t)).forEach(function (n) {
								Object.defineProperty(
									e,
									n,
									Object.getOwnPropertyDescriptor(t, n)
								);
						  });
				}
				return e;
			}
			n.default = function (e) {
				var n = e.Component,
					t = e.pageProps;
				return Object(o.jsx)(f, {
					children: Object(o.jsx)(n, d({}, t)),
				});
			};
		},
		"2FXi": function (e, n, t) {
			e.exports = {
				header: "main-header_header__X_-dA",
				logo: "main-header_logo__2Z9Cv",
				navigation: "main-header_navigation__ffOWC",
			};
		},
		GcxT: function (e, n, t) {
			(window.__NEXT_P = window.__NEXT_P || []).push([
				"/_app",
				function () {
					return t("1TCz");
				},
			]);
		},
		YFqc: function (e, n, t) {
			e.exports = t("cTJO");
		},
		cTJO: function (e, n, t) {
			"use strict";
			var r = t("J4zp"),
				o = t("284h");
			(n.__esModule = !0), (n.default = void 0);
			var c = o(t("q1tI")),
				a = t("elyg"),
				i = t("nOHt"),
				s = t("vNVm"),
				u = {};
			function l(e, n, t, r) {
				if (e && (0, a.isLocalURL)(n)) {
					e.prefetch(n, t, r).catch(function (e) {
						0;
					});
					var o =
						r && "undefined" !== typeof r.locale
							? r.locale
							: e && e.locale;
					u[n + "%" + t + (o ? "%" + o : "")] = !0;
				}
			}
			var f = function (e) {
				var n = !1 !== e.prefetch,
					t = (0, i.useRouter)(),
					o = (t && t.pathname) || "/",
					f = c.default.useMemo(
						function () {
							var n = (0, a.resolveHref)(o, e.href, !0),
								t = r(n, 2),
								c = t[0],
								i = t[1];
							return {
								href: c,
								as: e.as ? (0, a.resolveHref)(o, e.as) : i || c,
							};
						},
						[o, e.href, e.as]
					),
					p = f.href,
					d = f.as,
					v = e.children,
					h = e.replace,
					b = e.shallow,
					j = e.scroll,
					O = e.locale;
				"string" === typeof v &&
					(v = c.default.createElement("a", null, v));
				var g = c.Children.only(v),
					y = g && "object" === typeof g && g.ref,
					_ = (0, s.useIntersection)({ rootMargin: "200px" }),
					m = r(_, 2),
					w = m[0],
					x = m[1],
					E = c.default.useCallback(
						function (e) {
							w(e),
								y &&
									("function" === typeof y
										? y(e)
										: "object" === typeof y &&
										  (y.current = e));
						},
						[y, w]
					);
				(0, c.useEffect)(
					function () {
						var e = x && n && (0, a.isLocalURL)(p),
							r = "undefined" !== typeof O ? O : t && t.locale,
							o = u[p + "%" + d + (r ? "%" + r : "")];
						e && !o && l(t, p, d, { locale: r });
					},
					[d, p, x, O, n, t]
				);
				var P = {
					ref: E,
					onClick: function (e) {
						g.props &&
							"function" === typeof g.props.onClick &&
							g.props.onClick(e),
							e.defaultPrevented ||
								(function (e, n, t, r, o, c, i, s) {
									("A" !== e.currentTarget.nodeName ||
										(!(function (e) {
											var n = e.currentTarget.target;
											return (
												(n && "_self" !== n) ||
												e.metaKey ||
												e.ctrlKey ||
												e.shiftKey ||
												e.altKey ||
												(e.nativeEvent &&
													2 === e.nativeEvent.which)
											);
										})(e) &&
											(0, a.isLocalURL)(t))) &&
										(e.preventDefault(),
										null == i && (i = r.indexOf("#") < 0),
										n[o ? "replace" : "push"](t, r, {
											shallow: c,
											locale: s,
											scroll: i,
										}).then(function (e) {
											e && i && document.body.focus();
										}));
								})(e, t, p, d, h, b, j, O);
					},
					onMouseEnter: function (e) {
						(0, a.isLocalURL)(p) &&
							(g.props &&
								"function" === typeof g.props.onMouseEnter &&
								g.props.onMouseEnter(e),
							l(t, p, d, { priority: !0 }));
					},
				};
				if (e.passHref || ("a" === g.type && !("href" in g.props))) {
					var N = "undefined" !== typeof O ? O : t && t.locale,
						L = (0, a.getDomainLocale)(
							d,
							N,
							t && t.locales,
							t && t.domainLocales
						);
					P.href =
						L ||
						(0, a.addBasePath)(
							(0, a.addLocale)(d, N, t && t.defaultLocale)
						);
				}
				return c.default.cloneElement(g, P);
			};
			n.default = f;
		},
		vNVm: function (e, n, t) {
			"use strict";
			var r = t("J4zp"),
				o = t("TqRt");
			(n.__esModule = !0),
				(n.useIntersection = function (e) {
					var n = e.rootMargin,
						t = e.disabled || !i,
						o = (0, c.useRef)(),
						u = (0, c.useState)(!1),
						l = r(u, 2),
						f = l[0],
						p = l[1],
						d = (0, c.useCallback)(
							function (e) {
								o.current &&
									(o.current(), (o.current = void 0)),
									t ||
										f ||
										(e &&
											e.tagName &&
											(o.current = (function (e, n, t) {
												var r = (function (e) {
														var n =
																e.rootMargin ||
																"",
															t = s.get(n);
														if (t) return t;
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
																				var n =
																						r.get(
																							e.target
																						),
																					t =
																						e.isIntersecting ||
																						e.intersectionRatio >
																							0;
																				n &&
																					t &&
																					n(
																						t
																					);
																			}
																		);
																	},
																	e
																);
														return (
															s.set(
																n,
																(t = {
																	id: n,
																	observer: o,
																	elements: r,
																})
															),
															t
														);
													})(t),
													o = r.id,
													c = r.observer,
													a = r.elements;
												return (
													a.set(e, n),
													c.observe(e),
													function () {
														a.delete(e),
															c.unobserve(e),
															0 === a.size &&
																(c.disconnect(),
																s.delete(o));
													}
												);
											})(
												e,
												function (e) {
													return e && p(e);
												},
												{ rootMargin: n }
											)));
							},
							[t, n, f]
						);
					return (
						(0, c.useEffect)(
							function () {
								i ||
									f ||
									(0, a.default)(function () {
										return p(!0);
									});
							},
							[f]
						),
						[d, f]
					);
				});
			var c = t("q1tI"),
				a = o(t("0G5g")),
				i = "undefined" !== typeof IntersectionObserver;
			var s = new Map();
		},
		zPlV: function (e, n, t) {},
	},
	[[0, 0, 1, 2]],
]);
