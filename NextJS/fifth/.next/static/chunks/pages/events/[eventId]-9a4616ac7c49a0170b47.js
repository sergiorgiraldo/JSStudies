_N_E = (window.webpackJsonp_N_E = window.webpackJsonp_N_E || []).push([
	[8],
	{
		"5Q0Z": function (e, t, n) {
			"use strict";
			n.r(t),
				n.d(t, "__N_SSG", function () {
					return g;
				});
			var s = n("nKUr"),
				c = n("q1tI"),
				i = n("jx0t"),
				r = n.n(i);
			var o = function (e) {
					var t = e.title;
					return Object(s.jsx)("section", {
						className: r.a.summary,
						children: Object(s.jsx)("h1", { children: t }),
					});
				},
				a = n("jvA7"),
				l = n("gGuk"),
				j = n("If3N"),
				d = n.n(j);
			var u = function (e) {
					var t = e.icon;
					return Object(s.jsxs)("li", {
						className: d.a.item,
						children: [
							Object(s.jsx)("span", {
								className: d.a.icon,
								children: Object(s.jsx)(t, {}),
							}),
							Object(s.jsx)("span", {
								className: d.a.content,
								children: e.children,
							}),
						],
					});
				},
				m = n("LnYn"),
				x = n.n(m);
			var h = function (e) {
					var t = e.date,
						n = e.address,
						c = e.image,
						i = e.imageAlt,
						r = new Date(t).toLocaleDateString("en-US", {
							day: "numeric",
							month: "long",
							year: "numeric",
						}),
						o = n.replace(", ", "\n");
					return Object(s.jsxs)("section", {
						className: x.a.logistics,
						children: [
							Object(s.jsx)("div", {
								className: x.a.image,
								children: Object(s.jsx)("img", {
									src: "/".concat(c),
									alt: i,
								}),
							}),
							Object(s.jsxs)("ul", {
								className: x.a.list,
								children: [
									Object(s.jsx)(u, {
										icon: l.a,
										children: Object(s.jsx)("time", {
											children: r,
										}),
									}),
									Object(s.jsx)(u, {
										icon: a.a,
										children: Object(s.jsx)("address", {
											children: o,
										}),
									}),
								],
							}),
						],
					});
				},
				_ = n("HlLc"),
				b = n.n(_);
			var v = function (e) {
				return Object(s.jsx)("section", {
					className: b.a.content,
					children: e.children,
				});
			};
			var g = !0;
			t.default = function (e) {
				var t = e.selectedEvent;
				return t
					? Object(s.jsxs)(c.Fragment, {
							children: [
								Object(s.jsx)(o, { title: t.title }),
								Object(s.jsx)(h, {
									date: t.date,
									address: t.location,
									image: t.image,
									imageAlt: t.title,
								}),
								Object(s.jsx)(v, {
									children: Object(s.jsx)("p", {
										children: t.description,
									}),
								}),
							],
					  })
					: Object(s.jsx)("div", {
							className: "center",
							children: Object(s.jsx)("p", {
								children: "Loading...",
							}),
					  });
			};
		},
		ChbC: function (e, t, n) {
			(window.__NEXT_P = window.__NEXT_P || []).push([
				"/events/[eventId]",
				function () {
					return n("5Q0Z");
				},
			]);
		},
		HlLc: function (e, t, n) {
			e.exports = { content: "event-content_content__2VRI6" };
		},
		If3N: function (e, t, n) {
			e.exports = {
				item: "logistics-item_item__1FERm",
				icon: "logistics-item_icon__1DIos",
			};
		},
		LnYn: function (e, t, n) {
			e.exports = {
				logistics: "event-logistics_logistics__3HiYD",
				image: "event-logistics_image__1ED6X",
				list: "event-logistics_list__59rDU",
			};
		},
		Qetd: function (e, t, n) {
			"use strict";
			var s = Object.assign.bind(Object);
			(e.exports = s), (e.exports.default = e.exports);
		},
		gGuk: function (e, t, n) {
			"use strict";
			var s = n("nKUr");
			t.a = function () {
				return Object(s.jsx)("svg", {
					xmlns: "http://www.w3.org/2000/svg",
					fill: "none",
					viewBox: "0 0 24 24",
					stroke: "currentColor",
					children: Object(s.jsx)("path", {
						strokeLinecap: "round",
						strokeLinejoin: "round",
						strokeWidth: 2,
						d: "M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z",
					}),
				});
			};
		},
		jvA7: function (e, t, n) {
			"use strict";
			var s = n("nKUr");
			t.a = function () {
				return Object(s.jsxs)("svg", {
					xmlns: "http://www.w3.org/2000/svg",
					fill: "none",
					viewBox: "0 0 24 24",
					stroke: "currentColor",
					children: [
						Object(s.jsx)("path", {
							strokeLinecap: "round",
							strokeLinejoin: "round",
							strokeWidth: 2,
							d: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z",
						}),
						Object(s.jsx)("path", {
							strokeLinecap: "round",
							strokeLinejoin: "round",
							strokeWidth: 2,
							d: "M15 11a3 3 0 11-6 0 3 3 0 016 0z",
						}),
					],
				});
			};
		},
		jx0t: function (e, t, n) {
			e.exports = { summary: "event-summary_summary__3PCze" };
		},
	},
	[["ChbC", 0, 1]],
]);
