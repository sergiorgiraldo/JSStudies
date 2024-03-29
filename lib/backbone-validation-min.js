// Backbone.Validation v0.11.3
//
// Copyright (c) 2011-2015 Thomas Pedersen
// Distributed under MIT License
//
// Documentation and full license available at:
// http://thedersen.com/projects/backbone-validation
Backbone.Validation = (function (a) {
	"use strict";
	var b = {
			forceUpdate: !1,
			selector: "name",
			labelFormatter: "sentenceCase",
			valid: Function.prototype,
			invalid: Function.prototype
		},
		c = {
			formatLabel: function (a, c) {
				return i[b.labelFormatter](a, c);
			},
			format: function () {
				var a = Array.prototype.slice.call(arguments),
					b = a.shift();
				return b.replace(/\{(\d+)\}/g, function (b, c) {
					return "undefined" != typeof a[c] ? a[c] : b;
				});
			}
		},
		d = function (b, c, e) {
			return (
				(c = c || {}),
				(e = e || ""),
				a.each(b, function (a, f) {
					b.hasOwnProperty(f) &&
						(a &&
							"object" == typeof a &&
							a.constructor === Object &&
							d(a, c, e + f + "."),
						(c[e + f] = a));
				}),
				c
			);
		},
		e = (function () {
			var e = function (b, c) {
					return (
						(c = c || a.keys(a.result(b, "validation") || {})),
						a.reduce(
							c,
							function (a, b) {
								return (a[b] = void 0), a;
							},
							{}
						)
					);
				},
				g = function (b, c) {
					var d = b.attributes;
					return (
						a.isFunction(d)
							? (d = d(c))
							: a.isString(d) &&
							  a.isFunction(j[d]) &&
							  (d = j[d](c)),
						a.isArray(d) ? d : void 0
					);
				},
				h = function (b, c) {
					var d = b.validation
						? a.result(b, "validation")[c] || {}
						: {};
					return (
						(a.isFunction(d) || a.isString(d)) && (d = { fn: d }),
						a.isArray(d) || (d = [d]),
						a.reduce(
							d,
							function (b, c) {
								return (
									a.each(
										a.without(a.keys(c), "msg"),
										function (a) {
											b.push({
												fn: k[a],
												val: c[a],
												msg: c.msg
											});
										}
									),
									b
								);
							},
							[]
						)
					);
				},
				i = function (b, d, e, f) {
					return a.reduce(
						h(b, d),
						function (g, h) {
							var i = a.extend({}, c, k),
								j = h.fn.call(i, e, d, h.val, b, f);
							return j === !1 || g === !1
								? !1
								: j && !g
								? a.result(h, "msg") || j
								: g;
						},
						""
					);
				},
				l = function (b, c, d) {
					var e,
						f = {},
						g = !0,
						h = a.clone(c);
					return (
						a.each(d, function (a, c) {
							(e = i(b, c, a, h)), e && ((f[c] = e), (g = !1));
						}),
						{ invalidAttrs: f, isValid: g }
					);
				},
				m = function (b, c) {
					return {
						preValidate: function (b, c) {
							var d,
								e = this,
								f = {};
							return a.isObject(b)
								? (a.each(b, function (a, b) {
										(d = e.preValidate(b, a)),
											d && (f[b] = d);
								  }),
								  a.isEmpty(f) ? void 0 : f)
								: i(this, b, c, a.extend({}, this.attributes));
						},
						isValid: function (e) {
							var f, h, j, k;
							return (
								(e = e || g(c, b)),
								a.isString(e)
									? (h = [e])
									: a.isArray(e) && (h = e),
								h &&
									((f = d(this.attributes)),
									a.each(
										this.associatedViews,
										function (b) {
											a.each(
												h,
												function (d) {
													(j = i(
														this,
														d,
														f[d],
														a.extend(
															{},
															this.attributes
														)
													)),
														j
															? (c.invalid(
																	b,
																	d,
																	j,
																	c.selector
															  ),
															  (k = k || {}),
															  (k[d] = j))
															: c.valid(
																	b,
																	d,
																	c.selector
															  );
												},
												this
											);
										},
										this
									)),
								e === !0 && (k = this.validate()),
								k &&
									this.trigger("invalid", this, k, {
										validationError: k
									}),
								h ? !k : this.validation ? this._isValid : !0
							);
						},
						validate: function (f, h) {
							var i = this,
								j = !f,
								k = a.extend({}, c, h),
								m = e(i, g(c, b)),
								n = a.extend({}, m, i.attributes, f),
								o = d(n),
								p = f ? d(f) : o,
								q = l(i, n, a.pick(o, a.keys(m)));
							return (
								(i._isValid = q.isValid),
								a.each(i.associatedViews, function (b) {
									a.each(m, function (a, c) {
										var d =
												q.invalidAttrs.hasOwnProperty(
													c
												),
											e = p.hasOwnProperty(c);
										d || k.valid(b, c, k.selector),
											d &&
												(e || j) &&
												k.invalid(
													b,
													c,
													q.invalidAttrs[c],
													k.selector
												);
									});
								}),
								a.defer(function () {
									i.trigger(
										"validated",
										i._isValid,
										i,
										q.invalidAttrs
									),
										i.trigger(
											"validated:" +
												(i._isValid
													? "valid"
													: "invalid"),
											i,
											q.invalidAttrs
										);
								}),
								!k.forceUpdate &&
								a.intersection(
									a.keys(q.invalidAttrs),
									a.keys(p)
								).length > 0
									? q.invalidAttrs
									: void 0
							);
						}
					};
				},
				n = function (b, c, d) {
					c.associatedViews
						? c.associatedViews.push(b)
						: (c.associatedViews = [b]),
						a.extend(c, m(b, d));
				},
				o = function (b, c) {
					c && b.associatedViews.length > 1
						? (b.associatedViews = a.without(b.associatedViews, c))
						: (delete b.validate,
						  delete b.preValidate,
						  delete b.isValid,
						  delete b.associatedViews);
				},
				p = function (a) {
					n(this.view, a, this.options);
				},
				q = function (a) {
					o(a);
				};
			return {
				version: "0.11.3",
				configure: function (c) {
					a.extend(b, c);
				},
				bind: function (c, d) {
					d = a.extend({}, b, f, d);
					var e = d.model || c.model,
						g = d.collection || c.collection;
					if ("undefined" == typeof e && "undefined" == typeof g)
						throw "Before you execute the binding your view must have a model or a collection.\nSee http://thedersen.com/projects/backbone-validation/#using-form-model-validation for more information.";
					e
						? n(c, e, d)
						: g &&
						  (g.each(function (a) {
								n(c, a, d);
						  }),
						  g.bind("add", p, { view: c, options: d }),
						  g.bind("remove", q));
				},
				unbind: function (b, c) {
					c = a.extend({}, c);
					var d = c.model || b.model,
						e = c.collection || b.collection;
					d
						? o(d, b)
						: e &&
						  (e.each(function (a) {
								o(a, b);
						  }),
						  e.unbind("add", p),
						  e.unbind("remove", q));
				},
				mixin: m(null, b)
			};
		})(),
		f = (e.callbacks = {
			valid: function (a, b, c) {
				a.$("[" + c + '~="' + b + '"]')
					.removeClass("invalid")
					.removeAttr("data-error");
			},
			invalid: function (a, b, c, d) {
				a.$("[" + d + '~="' + b + '"]')
					.addClass("invalid")
					.attr("data-error", c);
			}
		}),
		g = (e.patterns = {
			digits: /^\d+$/,
			number: /^-?(?:\d+|\d{1,3}(?:,\d{3})+)(?:\.\d+)?$/,
			email: /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))$/i,
			url: /^(https?|ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i
		}),
		h = (e.messages = {
			required: "{0} is required",
			acceptance: "{0} must be accepted",
			min: "{0} must be greater than or equal to {1}",
			max: "{0} must be less than or equal to {1}",
			range: "{0} must be between {1} and {2}",
			length: "{0} must be {1} characters",
			minLength: "{0} must be at least {1} characters",
			maxLength: "{0} must be at most {1} characters",
			rangeLength: "{0} must be between {1} and {2} characters",
			oneOf: "{0} must be one of: {1}",
			equalTo: "{0} must be the same as {1}",
			digits: "{0} must only contain digits",
			number: "{0} must be a number",
			email: "{0} must be a valid email",
			url: "{0} must be a valid url",
			inlinePattern: "{0} is invalid"
		}),
		i = (e.labelFormatters = {
			none: function (a) {
				return a;
			},
			sentenceCase: function (a) {
				return a
					.replace(/(?:^\w|[A-Z]|\b\w)/g, function (a, b) {
						return 0 === b
							? a.toUpperCase()
							: " " + a.toLowerCase();
					})
					.replace(/_/g, " ");
			},
			label: function (a, b) {
				return (b.labels && b.labels[a]) || i.sentenceCase(a, b);
			}
		}),
		j = (e.attributeLoaders = {
			inputNames: function (a) {
				var b = [];
				return (
					a &&
						a.$("form [name]").each(function () {
							/^(?:input|select|textarea)$/i.test(
								this.nodeName
							) &&
								this.name &&
								"submit" !== this.type &&
								-1 === b.indexOf(this.name) &&
								b.push(this.name);
						}),
					b
				);
			}
		}),
		k = (e.validators = (function () {
			var b = String.prototype.trim
					? function (a) {
							return null === a
								? ""
								: String.prototype.trim.call(a);
					  }
					: function (a) {
							var b = /^\s+/,
								c = /\s+$/;
							return null === a
								? ""
								: a.toString().replace(b, "").replace(c, "");
					  },
				c = function (b) {
					return (
						a.isNumber(b) || (a.isString(b) && b.match(g.number))
					);
				},
				d = function (c) {
					return !(
						a.isNull(c) ||
						a.isUndefined(c) ||
						(a.isString(c) && "" === b(c)) ||
						(a.isArray(c) && a.isEmpty(c))
					);
				};
			return {
				fn: function (b, c, d, e, f) {
					return a.isString(d) && (d = e[d]), d.call(e, b, c, f);
				},
				required: function (b, c, e, f, g) {
					var i = a.isFunction(e) ? e.call(f, b, c, g) : e;
					return i || d(b)
						? i && !d(b)
							? this.format(h.required, this.formatLabel(c, f))
							: void 0
						: !1;
				},
				acceptance: function (b, c, d, e) {
					return "true" === b || (a.isBoolean(b) && b !== !1)
						? void 0
						: this.format(h.acceptance, this.formatLabel(c, e));
				},
				min: function (a, b, d, e) {
					return !c(a) || d > a
						? this.format(h.min, this.formatLabel(b, e), d)
						: void 0;
				},
				max: function (a, b, d, e) {
					return !c(a) || a > d
						? this.format(h.max, this.formatLabel(b, e), d)
						: void 0;
				},
				range: function (a, b, d, e) {
					return !c(a) || a < d[0] || a > d[1]
						? this.format(
								h.range,
								this.formatLabel(b, e),
								d[0],
								d[1]
						  )
						: void 0;
				},
				length: function (b, c, d, e) {
					return a.isString(b) && b.length === d
						? void 0
						: this.format(h.length, this.formatLabel(c, e), d);
				},
				minLength: function (b, c, d, e) {
					return !a.isString(b) || b.length < d
						? this.format(h.minLength, this.formatLabel(c, e), d)
						: void 0;
				},
				maxLength: function (b, c, d, e) {
					return !a.isString(b) || b.length > d
						? this.format(h.maxLength, this.formatLabel(c, e), d)
						: void 0;
				},
				rangeLength: function (b, c, d, e) {
					return !a.isString(b) || b.length < d[0] || b.length > d[1]
						? this.format(
								h.rangeLength,
								this.formatLabel(c, e),
								d[0],
								d[1]
						  )
						: void 0;
				},
				oneOf: function (b, c, d, e) {
					return a.include(d, b)
						? void 0
						: this.format(
								h.oneOf,
								this.formatLabel(c, e),
								d.join(", ")
						  );
				},
				equalTo: function (a, b, c, d, e) {
					return a !== e[c]
						? this.format(
								h.equalTo,
								this.formatLabel(b, d),
								this.formatLabel(c, d)
						  )
						: void 0;
				},
				pattern: function (a, b, c, e) {
					return d(a) && a.toString().match(g[c] || c)
						? void 0
						: this.format(
								h[c] || h.inlinePattern,
								this.formatLabel(b, e),
								c
						  );
				}
			};
		})());
	return (
		a.each(k, function (b, d) {
			k[d] = a.bind(k[d], a.extend({}, c, k));
		}),
		e
	);
})(_);
