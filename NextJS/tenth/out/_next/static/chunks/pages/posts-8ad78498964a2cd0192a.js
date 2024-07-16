_N_E = (window.webpackJsonp_N_E = window.webpackJsonp_N_E || []).push([
	[10],
	{
		"52dC": function (e, t, n) {
			(window.__NEXT_P = window.__NEXT_P || []).push([
				"/posts",
				function () {
					return n("gnXo");
				}
			]);
		},
		"Gf/z": function (e, t, n) {
			e.exports = {
				post: "post-item_post__3XTCn",
				image: "post-item_image__1Nx-U",
				content: "post-item_content__3VHsU"
			};
		},
		JHKd: function (e, t, n) {
			"use strict";
			var o = n("nKUr"),
				s = n("YFqc"),
				c = n.n(s),
				r = n("Aiso"),
				a = n.n(r),
				i = n("Gf/z"),
				l = n.n(i);
			var u = function (e) {
					var t = e.post,
						n = t.title,
						s = t.image,
						r = t.excerpt,
						i = t.date,
						u = t.slug,
						f = new Date(i).toLocaleDateString("en-US", {
							day: "numeric",
							month: "long",
							year: "numeric"
						}),
						p = "/images/posts/".concat(u, "/").concat(s),
						d = "/posts/".concat(u);
					return Object(o.jsx)("li", {
						className: l.a.post,
						children: Object(o.jsx)(c.a, {
							href: d,
							children: Object(o.jsxs)("a", {
								children: [
									Object(o.jsx)("div", {
										className: l.a.image,
										children: Object(o.jsx)(a.a, {
											src: p,
											alt: n,
											width: 300,
											height: 200,
											layout: "responsive"
										})
									}),
									Object(o.jsxs)("div", {
										className: l.a.content,
										children: [
											Object(o.jsx)("h3", {
												children: n
											}),
											Object(o.jsx)("time", {
												children: f
											}),
											Object(o.jsx)("p", { children: r })
										]
									})
								]
							})
						})
					});
				},
				f = n("Mzr7"),
				p = n.n(f);
			t.a = function (e) {
				var t = e.posts;
				return Object(o.jsx)("ul", {
					className: p.a.grid,
					children: t.map(function (e) {
						return Object(o.jsx)(u, { post: e }, e.slug);
					})
				});
			};
		},
		Mzr7: function (e, t, n) {
			e.exports = { grid: "posts-grid_grid__zccI4" };
		},
		VsDU: function (e, t, n) {
			e.exports = { posts: "all-posts_posts__XRtru" };
		},
		YFqc: function (e, t, n) {
			e.exports = n("cTJO");
		},
		cTJO: function (e, t, n) {
			"use strict";
			var o = n("J4zp"),
				s = n("284h");
			(t.__esModule = !0), (t.default = void 0);
			var c = s(n("q1tI")),
				r = n("elyg"),
				a = n("nOHt"),
				i = n("vNVm"),
				l = {};
			function u(e, t, n, o) {
				if (e && (0, r.isLocalURL)(t)) {
					e.prefetch(t, n, o).catch(function (e) {
						0;
					});
					var s =
						o && "undefined" !== typeof o.locale
							? o.locale
							: e && e.locale;
					l[t + "%" + n + (s ? "%" + s : "")] = !0;
				}
			}
			var f = function (e) {
				var t = !1 !== e.prefetch,
					n = (0, a.useRouter)(),
					s = (n && n.pathname) || "/",
					f = c.default.useMemo(
						function () {
							var t = (0, r.resolveHref)(s, e.href, !0),
								n = o(t, 2),
								c = n[0],
								a = n[1];
							return {
								href: c,
								as: e.as ? (0, r.resolveHref)(s, e.as) : a || c
							};
						},
						[s, e.href, e.as]
					),
					p = f.href,
					d = f.as,
					h = e.children,
					_ = e.replace,
					j = e.shallow,
					v = e.scroll,
					m = e.locale;
				"string" === typeof h &&
					(h = c.default.createElement("a", null, h));
				var g = c.Children.only(h),
					x = g && "object" === typeof g && g.ref,
					b = (0, i.useIntersection)({ rootMargin: "200px" }),
					y = o(b, 2),
					O = y[0],
					w = y[1],
					N = c.default.useCallback(
						function (e) {
							O(e),
								x &&
									("function" === typeof x
										? x(e)
										: "object" === typeof x &&
										  (x.current = e));
						},
						[x, O]
					);
				(0, c.useEffect)(
					function () {
						var e = w && t && (0, r.isLocalURL)(p),
							o = "undefined" !== typeof m ? m : n && n.locale,
							s = l[p + "%" + d + (o ? "%" + o : "")];
						e && !s && u(n, p, d, { locale: o });
					},
					[d, p, w, m, t, n]
				);
				var E = {
					ref: N,
					onClick: function (e) {
						g.props &&
							"function" === typeof g.props.onClick &&
							g.props.onClick(e),
							e.defaultPrevented ||
								(function (e, t, n, o, s, c, a, i) {
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
											(0, r.isLocalURL)(n))) &&
										(e.preventDefault(),
										null == a && (a = o.indexOf("#") < 0),
										t[s ? "replace" : "push"](n, o, {
											shallow: c,
											locale: i,
											scroll: a
										}).then(function (e) {
											e && a && document.body.focus();
										}));
								})(e, n, p, d, _, j, v, m);
					},
					onMouseEnter: function (e) {
						(0, r.isLocalURL)(p) &&
							(g.props &&
								"function" === typeof g.props.onMouseEnter &&
								g.props.onMouseEnter(e),
							u(n, p, d, { priority: !0 }));
					}
				};
				if (e.passHref || ("a" === g.type && !("href" in g.props))) {
					var L = "undefined" !== typeof m ? m : n && n.locale,
						U = (0, r.getDomainLocale)(
							d,
							L,
							n && n.locales,
							n && n.domainLocales
						);
					E.href =
						U ||
						(0, r.addBasePath)(
							(0, r.addLocale)(d, L, n && n.defaultLocale)
						);
				}
				return c.default.cloneElement(g, E);
			};
			t.default = f;
		},
		gnXo: function (e, t, n) {
			"use strict";
			n.r(t),
				n.d(t, "__N_SSG", function () {
					return i;
				});
			var o = n("nKUr"),
				s = n("VsDU"),
				c = n.n(s),
				r = n("JHKd");
			var a = function (e) {
				return Object(o.jsxs)("section", {
					className: c.a.posts,
					children: [
						Object(o.jsx)("h1", { children: "All Posts" }),
						Object(o.jsx)(r.a, { posts: e.posts })
					]
				});
			};
			var i = !0;
			t.default = function (e) {
				return Object(o.jsx)(a, { posts: e.posts });
			};
		}
	},
	[["52dC", 0, 1, 2, 3, 4]]
]);
