_N_E = (window.webpackJsonp_N_E = window.webpackJsonp_N_E || []).push([
	[9],
	{
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
				r = n("YFqc"),
				s = n.n(r),
				c = n("Aiso"),
				a = n.n(c),
				i = n("Gf/z"),
				l = n.n(i);
			var u = function (e) {
					var t = e.post,
						n = t.title,
						r = t.image,
						c = t.excerpt,
						i = t.date,
						u = t.slug,
						f = new Date(i).toLocaleDateString("en-US", {
							day: "numeric",
							month: "long",
							year: "numeric"
						}),
						p = "/images/posts/".concat(u, "/").concat(r),
						d = "/posts/".concat(u);
					return Object(o.jsx)("li", {
						className: l.a.post,
						children: Object(o.jsx)(s.a, {
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
											Object(o.jsx)("p", { children: c })
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
		RNiq: function (e, t, n) {
			"use strict";
			n.r(t),
				n.d(t, "__N_SSG", function () {
					return h;
				});
			var o = n("nKUr"),
				r = n("q1tI"),
				s = n("x+QA"),
				c = n.n(s),
				a = n("Aiso"),
				i = n.n(a);
			var l = function () {
					return Object(o.jsxs)("section", {
						className: c.a.hero,
						children: [
							Object(o.jsx)("div", {
								className: c.a.image,
								children: Object(o.jsx)(i.a, {
									src: "/images/site/srg.jpg",
									alt: "An image showing Sergio",
									width: 300,
									height: 300
								})
							}),
							Object(o.jsx)("h1", { children: "Hi, I'm Sergio" }),
							Object(o.jsx)("p", {
								children:
									"I blog about whatever I want to. Husband & Father first, geek, physicist, programmer, super heroes addicted."
							})
						]
					});
				},
				u = n("JHKd"),
				f = n("i4SY"),
				p = n.n(f);
			var d = function (e) {
				return Object(o.jsxs)("section", {
					className: p.a.latest,
					children: [
						Object(o.jsx)("h2", { children: "Featured Posts" }),
						Object(o.jsx)(u.a, { posts: e.posts })
					]
				});
			};
			var h = !0;
			t.default = function (e) {
				return Object(o.jsxs)(r.Fragment, {
					children: [
						Object(o.jsx)(l, {}),
						Object(o.jsx)("h3", { children: "PRD" }),
						Object(o.jsx)(d, { posts: e.posts })
					]
				});
			};
		},
		YFqc: function (e, t, n) {
			e.exports = n("cTJO");
		},
		cTJO: function (e, t, n) {
			"use strict";
			var o = n("J4zp"),
				r = n("284h");
			(t.__esModule = !0), (t.default = void 0);
			var s = r(n("q1tI")),
				c = n("elyg"),
				a = n("nOHt"),
				i = n("vNVm"),
				l = {};
			function u(e, t, n, o) {
				if (e && (0, c.isLocalURL)(t)) {
					e.prefetch(t, n, o).catch(function (e) {
						0;
					});
					var r =
						o && "undefined" !== typeof o.locale
							? o.locale
							: e && e.locale;
					l[t + "%" + n + (r ? "%" + r : "")] = !0;
				}
			}
			var f = function (e) {
				var t = !1 !== e.prefetch,
					n = (0, a.useRouter)(),
					r = (n && n.pathname) || "/",
					f = s.default.useMemo(
						function () {
							var t = (0, c.resolveHref)(r, e.href, !0),
								n = o(t, 2),
								s = n[0],
								a = n[1];
							return {
								href: s,
								as: e.as ? (0, c.resolveHref)(r, e.as) : a || s
							};
						},
						[r, e.href, e.as]
					),
					p = f.href,
					d = f.as,
					h = e.children,
					j = e.replace,
					m = e.shallow,
					_ = e.scroll,
					g = e.locale;
				"string" === typeof h &&
					(h = s.default.createElement("a", null, h));
				var v = s.Children.only(h),
					x = v && "object" === typeof v && v.ref,
					b = (0, i.useIntersection)({ rootMargin: "200px" }),
					O = o(b, 2),
					y = O[0],
					w = O[1],
					N = s.default.useCallback(
						function (e) {
							y(e),
								x &&
									("function" === typeof x
										? x(e)
										: "object" === typeof x &&
										  (x.current = e));
						},
						[x, y]
					);
				(0, s.useEffect)(
					function () {
						var e = w && t && (0, c.isLocalURL)(p),
							o = "undefined" !== typeof g ? g : n && n.locale,
							r = l[p + "%" + d + (o ? "%" + o : "")];
						e && !r && u(n, p, d, { locale: o });
					},
					[d, p, w, g, t, n]
				);
				var E = {
					ref: N,
					onClick: function (e) {
						v.props &&
							"function" === typeof v.props.onClick &&
							v.props.onClick(e),
							e.defaultPrevented ||
								(function (e, t, n, o, r, s, a, i) {
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
										null == a && (a = o.indexOf("#") < 0),
										t[r ? "replace" : "push"](n, o, {
											shallow: s,
											locale: i,
											scroll: a
										}).then(function (e) {
											e && a && document.body.focus();
										}));
								})(e, n, p, d, j, m, _, g);
					},
					onMouseEnter: function (e) {
						(0, c.isLocalURL)(p) &&
							(v.props &&
								"function" === typeof v.props.onMouseEnter &&
								v.props.onMouseEnter(e),
							u(n, p, d, { priority: !0 }));
					}
				};
				if (e.passHref || ("a" === v.type && !("href" in v.props))) {
					var L = "undefined" !== typeof g ? g : n && n.locale,
						R = (0, c.getDomainLocale)(
							d,
							L,
							n && n.locales,
							n && n.domainLocales
						);
					E.href =
						R ||
						(0, c.addBasePath)(
							(0, c.addLocale)(d, L, n && n.defaultLocale)
						);
				}
				return s.default.cloneElement(v, E);
			};
			t.default = f;
		},
		i4SY: function (e, t, n) {
			e.exports = { latest: "featured-posts_latest__2Tq4V" };
		},
		vlRD: function (e, t, n) {
			(window.__NEXT_P = window.__NEXT_P || []).push([
				"/",
				function () {
					return n("RNiq");
				}
			]);
		},
		"x+QA": function (e, t, n) {
			e.exports = {
				hero: "hero_hero__1246b",
				image: "hero_image__APzai"
			};
		}
	},
	[["vlRD", 0, 1, 2, 3, 4]]
]);
