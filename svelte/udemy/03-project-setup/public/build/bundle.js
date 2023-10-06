
(function(l, r) { if (!l || l.getElementById('livereloadscript')) return; r = l.createElement('script'); r.async = 1; r.src = '//' + (self.location.host || 'localhost').split(':')[0] + ':35729/livereload.js?snipver=1'; r.id = 'livereloadscript'; l.getElementsByTagName('head')[0].appendChild(r) })(self.document);
var app = (function () {
    'use strict';

    function noop() { }
    function add_location(element, file, line, column, char) {
        element.__svelte_meta = {
            loc: { file, line, column, char }
        };
    }
    function run(fn) {
        return fn();
    }
    function blank_object() {
        return Object.create(null);
    }
    function run_all(fns) {
        fns.forEach(run);
    }
    function is_function(thing) {
        return typeof thing === 'function';
    }
    function safe_not_equal(a, b) {
        return a != a ? b == b : a !== b || ((a && typeof a === 'object') || typeof a === 'function');
    }
    let src_url_equal_anchor;
    function src_url_equal(element_src, url) {
        if (!src_url_equal_anchor) {
            src_url_equal_anchor = document.createElement('a');
        }
        src_url_equal_anchor.href = url;
        return element_src === src_url_equal_anchor.href;
    }
    function is_empty(obj) {
        return Object.keys(obj).length === 0;
    }
    function append(target, node) {
        target.appendChild(node);
    }
    function insert(target, node, anchor) {
        target.insertBefore(node, anchor || null);
    }
    function detach(node) {
        if (node.parentNode) {
            node.parentNode.removeChild(node);
        }
    }
    function destroy_each(iterations, detaching) {
        for (let i = 0; i < iterations.length; i += 1) {
            if (iterations[i])
                iterations[i].d(detaching);
        }
    }
    function element(name) {
        return document.createElement(name);
    }
    function text(data) {
        return document.createTextNode(data);
    }
    function space() {
        return text(' ');
    }
    function listen(node, event, handler, options) {
        node.addEventListener(event, handler, options);
        return () => node.removeEventListener(event, handler, options);
    }
    function prevent_default(fn) {
        return function (event) {
            event.preventDefault();
            // @ts-ignore
            return fn.call(this, event);
        };
    }
    function attr(node, attribute, value) {
        if (value == null)
            node.removeAttribute(attribute);
        else if (node.getAttribute(attribute) !== value)
            node.setAttribute(attribute, value);
    }
    function children(element) {
        return Array.from(element.childNodes);
    }
    function set_input_value(input, value) {
        input.value = value == null ? '' : value;
    }
    function custom_event(type, detail, { bubbles = false, cancelable = false } = {}) {
        const e = document.createEvent('CustomEvent');
        e.initCustomEvent(type, bubbles, cancelable, detail);
        return e;
    }

    let current_component;
    function set_current_component(component) {
        current_component = component;
    }

    const dirty_components = [];
    const binding_callbacks = [];
    let render_callbacks = [];
    const flush_callbacks = [];
    const resolved_promise = /* @__PURE__ */ Promise.resolve();
    let update_scheduled = false;
    function schedule_update() {
        if (!update_scheduled) {
            update_scheduled = true;
            resolved_promise.then(flush);
        }
    }
    function add_render_callback(fn) {
        render_callbacks.push(fn);
    }
    // flush() calls callbacks in this order:
    // 1. All beforeUpdate callbacks, in order: parents before children
    // 2. All bind:this callbacks, in reverse order: children before parents.
    // 3. All afterUpdate callbacks, in order: parents before children. EXCEPT
    //    for afterUpdates called during the initial onMount, which are called in
    //    reverse order: children before parents.
    // Since callbacks might update component values, which could trigger another
    // call to flush(), the following steps guard against this:
    // 1. During beforeUpdate, any updated components will be added to the
    //    dirty_components array and will cause a reentrant call to flush(). Because
    //    the flush index is kept outside the function, the reentrant call will pick
    //    up where the earlier call left off and go through all dirty components. The
    //    current_component value is saved and restored so that the reentrant call will
    //    not interfere with the "parent" flush() call.
    // 2. bind:this callbacks cannot trigger new flush() calls.
    // 3. During afterUpdate, any updated components will NOT have their afterUpdate
    //    callback called a second time; the seen_callbacks set, outside the flush()
    //    function, guarantees this behavior.
    const seen_callbacks = new Set();
    let flushidx = 0; // Do *not* move this inside the flush() function
    function flush() {
        // Do not reenter flush while dirty components are updated, as this can
        // result in an infinite loop. Instead, let the inner flush handle it.
        // Reentrancy is ok afterwards for bindings etc.
        if (flushidx !== 0) {
            return;
        }
        const saved_component = current_component;
        do {
            // first, call beforeUpdate functions
            // and update components
            try {
                while (flushidx < dirty_components.length) {
                    const component = dirty_components[flushidx];
                    flushidx++;
                    set_current_component(component);
                    update(component.$$);
                }
            }
            catch (e) {
                // reset dirty state to not end up in a deadlocked state and then rethrow
                dirty_components.length = 0;
                flushidx = 0;
                throw e;
            }
            set_current_component(null);
            dirty_components.length = 0;
            flushidx = 0;
            while (binding_callbacks.length)
                binding_callbacks.pop()();
            // then, once components are updated, call
            // afterUpdate functions. This may cause
            // subsequent updates...
            for (let i = 0; i < render_callbacks.length; i += 1) {
                const callback = render_callbacks[i];
                if (!seen_callbacks.has(callback)) {
                    // ...so guard against infinite loops
                    seen_callbacks.add(callback);
                    callback();
                }
            }
            render_callbacks.length = 0;
        } while (dirty_components.length);
        while (flush_callbacks.length) {
            flush_callbacks.pop()();
        }
        update_scheduled = false;
        seen_callbacks.clear();
        set_current_component(saved_component);
    }
    function update($$) {
        if ($$.fragment !== null) {
            $$.update();
            run_all($$.before_update);
            const dirty = $$.dirty;
            $$.dirty = [-1];
            $$.fragment && $$.fragment.p($$.ctx, dirty);
            $$.after_update.forEach(add_render_callback);
        }
    }
    /**
     * Useful for example to execute remaining `afterUpdate` callbacks before executing `destroy`.
     */
    function flush_render_callbacks(fns) {
        const filtered = [];
        const targets = [];
        render_callbacks.forEach((c) => fns.indexOf(c) === -1 ? filtered.push(c) : targets.push(c));
        targets.forEach((c) => c());
        render_callbacks = filtered;
    }
    const outroing = new Set();
    let outros;
    function group_outros() {
        outros = {
            r: 0,
            c: [],
            p: outros // parent group
        };
    }
    function check_outros() {
        if (!outros.r) {
            run_all(outros.c);
        }
        outros = outros.p;
    }
    function transition_in(block, local) {
        if (block && block.i) {
            outroing.delete(block);
            block.i(local);
        }
    }
    function transition_out(block, local, detach, callback) {
        if (block && block.o) {
            if (outroing.has(block))
                return;
            outroing.add(block);
            outros.c.push(() => {
                outroing.delete(block);
                if (callback) {
                    if (detach)
                        block.d(1);
                    callback();
                }
            });
            block.o(local);
        }
        else if (callback) {
            callback();
        }
    }
    function create_component(block) {
        block && block.c();
    }
    function mount_component(component, target, anchor, customElement) {
        const { fragment, after_update } = component.$$;
        fragment && fragment.m(target, anchor);
        if (!customElement) {
            // onMount happens before the initial afterUpdate
            add_render_callback(() => {
                const new_on_destroy = component.$$.on_mount.map(run).filter(is_function);
                // if the component was destroyed immediately
                // it will update the `$$.on_destroy` reference to `null`.
                // the destructured on_destroy may still reference to the old array
                if (component.$$.on_destroy) {
                    component.$$.on_destroy.push(...new_on_destroy);
                }
                else {
                    // Edge case - component was destroyed immediately,
                    // most likely as a result of a binding initialising
                    run_all(new_on_destroy);
                }
                component.$$.on_mount = [];
            });
        }
        after_update.forEach(add_render_callback);
    }
    function destroy_component(component, detaching) {
        const $$ = component.$$;
        if ($$.fragment !== null) {
            flush_render_callbacks($$.after_update);
            run_all($$.on_destroy);
            $$.fragment && $$.fragment.d(detaching);
            // TODO null out other refs, including component.$$ (but need to
            // preserve final state?)
            $$.on_destroy = $$.fragment = null;
            $$.ctx = [];
        }
    }
    function make_dirty(component, i) {
        if (component.$$.dirty[0] === -1) {
            dirty_components.push(component);
            schedule_update();
            component.$$.dirty.fill(0);
        }
        component.$$.dirty[(i / 31) | 0] |= (1 << (i % 31));
    }
    function init(component, options, instance, create_fragment, not_equal, props, append_styles, dirty = [-1]) {
        const parent_component = current_component;
        set_current_component(component);
        const $$ = component.$$ = {
            fragment: null,
            ctx: [],
            // state
            props,
            update: noop,
            not_equal,
            bound: blank_object(),
            // lifecycle
            on_mount: [],
            on_destroy: [],
            on_disconnect: [],
            before_update: [],
            after_update: [],
            context: new Map(options.context || (parent_component ? parent_component.$$.context : [])),
            // everything else
            callbacks: blank_object(),
            dirty,
            skip_bound: false,
            root: options.target || parent_component.$$.root
        };
        append_styles && append_styles($$.root);
        let ready = false;
        $$.ctx = instance
            ? instance(component, options.props || {}, (i, ret, ...rest) => {
                const value = rest.length ? rest[0] : ret;
                if ($$.ctx && not_equal($$.ctx[i], $$.ctx[i] = value)) {
                    if (!$$.skip_bound && $$.bound[i])
                        $$.bound[i](value);
                    if (ready)
                        make_dirty(component, i);
                }
                return ret;
            })
            : [];
        $$.update();
        ready = true;
        run_all($$.before_update);
        // `false` as a special case of no DOM component
        $$.fragment = create_fragment ? create_fragment($$.ctx) : false;
        if (options.target) {
            if (options.hydrate) {
                const nodes = children(options.target);
                // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
                $$.fragment && $$.fragment.l(nodes);
                nodes.forEach(detach);
            }
            else {
                // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
                $$.fragment && $$.fragment.c();
            }
            if (options.intro)
                transition_in(component.$$.fragment);
            mount_component(component, options.target, options.anchor, options.customElement);
            flush();
        }
        set_current_component(parent_component);
    }
    /**
     * Base class for Svelte components. Used when dev=false.
     */
    class SvelteComponent {
        $destroy() {
            destroy_component(this, 1);
            this.$destroy = noop;
        }
        $on(type, callback) {
            if (!is_function(callback)) {
                return noop;
            }
            const callbacks = (this.$$.callbacks[type] || (this.$$.callbacks[type] = []));
            callbacks.push(callback);
            return () => {
                const index = callbacks.indexOf(callback);
                if (index !== -1)
                    callbacks.splice(index, 1);
            };
        }
        $set($$props) {
            if (this.$$set && !is_empty($$props)) {
                this.$$.skip_bound = true;
                this.$$set($$props);
                this.$$.skip_bound = false;
            }
        }
    }

    function dispatch_dev(type, detail) {
        document.dispatchEvent(custom_event(type, Object.assign({ version: '3.59.2' }, detail), { bubbles: true }));
    }
    function append_dev(target, node) {
        dispatch_dev('SvelteDOMInsert', { target, node });
        append(target, node);
    }
    function insert_dev(target, node, anchor) {
        dispatch_dev('SvelteDOMInsert', { target, node, anchor });
        insert(target, node, anchor);
    }
    function detach_dev(node) {
        dispatch_dev('SvelteDOMRemove', { node });
        detach(node);
    }
    function listen_dev(node, event, handler, options, has_prevent_default, has_stop_propagation, has_stop_immediate_propagation) {
        const modifiers = options === true ? ['capture'] : options ? Array.from(Object.keys(options)) : [];
        if (has_prevent_default)
            modifiers.push('preventDefault');
        if (has_stop_propagation)
            modifiers.push('stopPropagation');
        if (has_stop_immediate_propagation)
            modifiers.push('stopImmediatePropagation');
        dispatch_dev('SvelteDOMAddEventListener', { node, event, handler, modifiers });
        const dispose = listen(node, event, handler, options);
        return () => {
            dispatch_dev('SvelteDOMRemoveEventListener', { node, event, handler, modifiers });
            dispose();
        };
    }
    function attr_dev(node, attribute, value) {
        attr(node, attribute, value);
        if (value == null)
            dispatch_dev('SvelteDOMRemoveAttribute', { node, attribute });
        else
            dispatch_dev('SvelteDOMSetAttribute', { node, attribute, value });
    }
    function set_data_dev(text, data) {
        data = '' + data;
        if (text.data === data)
            return;
        dispatch_dev('SvelteDOMSetData', { node: text, data });
        text.data = data;
    }
    function validate_each_argument(arg) {
        if (typeof arg !== 'string' && !(arg && typeof arg === 'object' && 'length' in arg)) {
            let msg = '{#each} only iterates over array-like objects.';
            if (typeof Symbol === 'function' && arg && Symbol.iterator in arg) {
                msg += ' You can use a spread to convert this iterable into an array.';
            }
            throw new Error(msg);
        }
    }
    function validate_slots(name, slot, keys) {
        for (const slot_key of Object.keys(slot)) {
            if (!~keys.indexOf(slot_key)) {
                console.warn(`<${name}> received an unexpected slot "${slot_key}".`);
            }
        }
    }
    /**
     * Base class for Svelte components with some minor dev-enhancements. Used when dev=true.
     */
    class SvelteComponentDev extends SvelteComponent {
        constructor(options) {
            if (!options || (!options.target && !options.$$inline)) {
                throw new Error("'target' is a required option");
            }
            super();
        }
        $destroy() {
            super.$destroy();
            this.$destroy = () => {
                console.warn('Component was already destroyed'); // eslint-disable-line no-console
            };
        }
        $capture_state() { }
        $inject_state() { }
    }

    /* src/UI/Header.svelte generated by Svelte v3.59.2 */

    const file$3 = "src/UI/Header.svelte";

    function create_fragment$3(ctx) {
    	let header;
    	let h1;

    	const block = {
    		c: function create() {
    			header = element("header");
    			h1 = element("h1");
    			h1.textContent = "Meet us";
    			attr_dev(h1, "class", "svelte-11hv0wk");
    			add_location(h1, file$3, 1, 1, 10);
    			attr_dev(header, "class", "svelte-11hv0wk");
    			add_location(header, file$3, 0, 0, 0);
    		},
    		l: function claim(nodes) {
    			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, header, anchor);
    			append_dev(header, h1);
    		},
    		p: noop,
    		i: noop,
    		o: noop,
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(header);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_fragment$3.name,
    		type: "component",
    		source: "",
    		ctx
    	});

    	return block;
    }

    function instance$3($$self, $$props) {
    	let { $$slots: slots = {}, $$scope } = $$props;
    	validate_slots('Header', slots, []);
    	const writable_props = [];

    	Object.keys($$props).forEach(key => {
    		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== '$$' && key !== 'slot') console.warn(`<Header> was created with unknown prop '${key}'`);
    	});

    	return [];
    }

    class Header extends SvelteComponentDev {
    	constructor(options) {
    		super(options);
    		init(this, options, instance$3, create_fragment$3, safe_not_equal, {});

    		dispatch_dev("SvelteRegisterComponent", {
    			component: this,
    			tagName: "Header",
    			options,
    			id: create_fragment$3.name
    		});
    	}
    }

    /* src/Meetups/MeetupItem.svelte generated by Svelte v3.59.2 */

    const file$2 = "src/Meetups/MeetupItem.svelte";

    function create_fragment$2(ctx) {
    	let article;
    	let header;
    	let h1;
    	let t0;
    	let t1;
    	let h2;
    	let t2;
    	let t3;
    	let address_1;
    	let t4;
    	let t5;
    	let div0;
    	let img;
    	let img_src_value;
    	let t6;
    	let div1;
    	let p0;
    	let t7;
    	let t8;
    	let p1;
    	let t9;
    	let t10;
    	let t11;
    	let footer;
    	let a;
    	let t12;
    	let a_href_value;
    	let t13;
    	let br;
    	let t14;
    	let button0;
    	let t16;
    	let button1;

    	const block = {
    		c: function create() {
    			article = element("article");
    			header = element("header");
    			h1 = element("h1");
    			t0 = text(/*title*/ ctx[0]);
    			t1 = space();
    			h2 = element("h2");
    			t2 = text(/*subtitle*/ ctx[1]);
    			t3 = space();
    			address_1 = element("address");
    			t4 = text(/*address*/ ctx[4]);
    			t5 = space();
    			div0 = element("div");
    			img = element("img");
    			t6 = space();
    			div1 = element("div");
    			p0 = element("p");
    			t7 = text(/*description*/ ctx[3]);
    			t8 = space();
    			p1 = element("p");
    			t9 = text(/*capacity*/ ctx[6]);
    			t10 = text(" seats available");
    			t11 = space();
    			footer = element("footer");
    			a = element("a");
    			t12 = text("Contact");
    			t13 = space();
    			br = element("br");
    			t14 = space();
    			button0 = element("button");
    			button0.textContent = "Show details";
    			t16 = space();
    			button1 = element("button");
    			button1.textContent = "Favorite";
    			attr_dev(h1, "class", "svelte-16r7z71");
    			add_location(h1, file$2, 11, 2, 194);
    			attr_dev(h2, "class", "svelte-16r7z71");
    			add_location(h2, file$2, 12, 2, 213);
    			add_location(address_1, file$2, 13, 4, 237);
    			attr_dev(header, "class", "svelte-16r7z71");
    			add_location(header, file$2, 10, 1, 183);
    			if (!src_url_equal(img.src, img_src_value = /*imageUrl*/ ctx[2])) attr_dev(img, "src", img_src_value);
    			attr_dev(img, "alt", /*title*/ ctx[0]);
    			attr_dev(img, "class", "svelte-16r7z71");
    			add_location(img, file$2, 16, 2, 300);
    			attr_dev(div0, "class", "image svelte-16r7z71");
    			add_location(div0, file$2, 15, 1, 278);
    			attr_dev(p0, "class", "svelte-16r7z71");
    			add_location(p0, file$2, 19, 2, 368);
    			attr_dev(p1, "class", "availability svelte-16r7z71");
    			add_location(p1, file$2, 20, 4, 393);
    			attr_dev(div1, "class", "content svelte-16r7z71");
    			add_location(div1, file$2, 18, 1, 344);
    			attr_dev(a, "href", a_href_value = "mailto:" + /*email*/ ctx[5]);
    			add_location(a, file$2, 23, 2, 468);
    			add_location(br, file$2, 24, 2, 507);
    			add_location(button0, file$2, 25, 2, 516);
    			add_location(button1, file$2, 26, 2, 548);
    			attr_dev(footer, "class", "svelte-16r7z71");
    			add_location(footer, file$2, 22, 1, 457);
    			attr_dev(article, "class", "svelte-16r7z71");
    			add_location(article, file$2, 9, 0, 172);
    		},
    		l: function claim(nodes) {
    			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, article, anchor);
    			append_dev(article, header);
    			append_dev(header, h1);
    			append_dev(h1, t0);
    			append_dev(header, t1);
    			append_dev(header, h2);
    			append_dev(h2, t2);
    			append_dev(header, t3);
    			append_dev(header, address_1);
    			append_dev(address_1, t4);
    			append_dev(article, t5);
    			append_dev(article, div0);
    			append_dev(div0, img);
    			append_dev(article, t6);
    			append_dev(article, div1);
    			append_dev(div1, p0);
    			append_dev(p0, t7);
    			append_dev(div1, t8);
    			append_dev(div1, p1);
    			append_dev(p1, t9);
    			append_dev(p1, t10);
    			append_dev(article, t11);
    			append_dev(article, footer);
    			append_dev(footer, a);
    			append_dev(a, t12);
    			append_dev(footer, t13);
    			append_dev(footer, br);
    			append_dev(footer, t14);
    			append_dev(footer, button0);
    			append_dev(footer, t16);
    			append_dev(footer, button1);
    		},
    		p: function update(ctx, [dirty]) {
    			if (dirty & /*title*/ 1) set_data_dev(t0, /*title*/ ctx[0]);
    			if (dirty & /*subtitle*/ 2) set_data_dev(t2, /*subtitle*/ ctx[1]);
    			if (dirty & /*address*/ 16) set_data_dev(t4, /*address*/ ctx[4]);

    			if (dirty & /*imageUrl*/ 4 && !src_url_equal(img.src, img_src_value = /*imageUrl*/ ctx[2])) {
    				attr_dev(img, "src", img_src_value);
    			}

    			if (dirty & /*title*/ 1) {
    				attr_dev(img, "alt", /*title*/ ctx[0]);
    			}

    			if (dirty & /*description*/ 8) set_data_dev(t7, /*description*/ ctx[3]);
    			if (dirty & /*capacity*/ 64) set_data_dev(t9, /*capacity*/ ctx[6]);

    			if (dirty & /*email*/ 32 && a_href_value !== (a_href_value = "mailto:" + /*email*/ ctx[5])) {
    				attr_dev(a, "href", a_href_value);
    			}
    		},
    		i: noop,
    		o: noop,
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(article);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_fragment$2.name,
    		type: "component",
    		source: "",
    		ctx
    	});

    	return block;
    }

    function instance$2($$self, $$props, $$invalidate) {
    	let { $$slots: slots = {}, $$scope } = $$props;
    	validate_slots('MeetupItem', slots, []);
    	let { title } = $$props;
    	let { subtitle } = $$props;
    	let { imageUrl } = $$props;
    	let { description } = $$props;
    	let { address } = $$props;
    	let { email } = $$props;
    	let { capacity } = $$props;

    	$$self.$$.on_mount.push(function () {
    		if (title === undefined && !('title' in $$props || $$self.$$.bound[$$self.$$.props['title']])) {
    			console.warn("<MeetupItem> was created without expected prop 'title'");
    		}

    		if (subtitle === undefined && !('subtitle' in $$props || $$self.$$.bound[$$self.$$.props['subtitle']])) {
    			console.warn("<MeetupItem> was created without expected prop 'subtitle'");
    		}

    		if (imageUrl === undefined && !('imageUrl' in $$props || $$self.$$.bound[$$self.$$.props['imageUrl']])) {
    			console.warn("<MeetupItem> was created without expected prop 'imageUrl'");
    		}

    		if (description === undefined && !('description' in $$props || $$self.$$.bound[$$self.$$.props['description']])) {
    			console.warn("<MeetupItem> was created without expected prop 'description'");
    		}

    		if (address === undefined && !('address' in $$props || $$self.$$.bound[$$self.$$.props['address']])) {
    			console.warn("<MeetupItem> was created without expected prop 'address'");
    		}

    		if (email === undefined && !('email' in $$props || $$self.$$.bound[$$self.$$.props['email']])) {
    			console.warn("<MeetupItem> was created without expected prop 'email'");
    		}

    		if (capacity === undefined && !('capacity' in $$props || $$self.$$.bound[$$self.$$.props['capacity']])) {
    			console.warn("<MeetupItem> was created without expected prop 'capacity'");
    		}
    	});

    	const writable_props = ['title', 'subtitle', 'imageUrl', 'description', 'address', 'email', 'capacity'];

    	Object.keys($$props).forEach(key => {
    		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== '$$' && key !== 'slot') console.warn(`<MeetupItem> was created with unknown prop '${key}'`);
    	});

    	$$self.$$set = $$props => {
    		if ('title' in $$props) $$invalidate(0, title = $$props.title);
    		if ('subtitle' in $$props) $$invalidate(1, subtitle = $$props.subtitle);
    		if ('imageUrl' in $$props) $$invalidate(2, imageUrl = $$props.imageUrl);
    		if ('description' in $$props) $$invalidate(3, description = $$props.description);
    		if ('address' in $$props) $$invalidate(4, address = $$props.address);
    		if ('email' in $$props) $$invalidate(5, email = $$props.email);
    		if ('capacity' in $$props) $$invalidate(6, capacity = $$props.capacity);
    	};

    	$$self.$capture_state = () => ({
    		title,
    		subtitle,
    		imageUrl,
    		description,
    		address,
    		email,
    		capacity
    	});

    	$$self.$inject_state = $$props => {
    		if ('title' in $$props) $$invalidate(0, title = $$props.title);
    		if ('subtitle' in $$props) $$invalidate(1, subtitle = $$props.subtitle);
    		if ('imageUrl' in $$props) $$invalidate(2, imageUrl = $$props.imageUrl);
    		if ('description' in $$props) $$invalidate(3, description = $$props.description);
    		if ('address' in $$props) $$invalidate(4, address = $$props.address);
    		if ('email' in $$props) $$invalidate(5, email = $$props.email);
    		if ('capacity' in $$props) $$invalidate(6, capacity = $$props.capacity);
    	};

    	if ($$props && "$$inject" in $$props) {
    		$$self.$inject_state($$props.$$inject);
    	}

    	return [title, subtitle, imageUrl, description, address, email, capacity];
    }

    class MeetupItem extends SvelteComponentDev {
    	constructor(options) {
    		super(options);

    		init(this, options, instance$2, create_fragment$2, safe_not_equal, {
    			title: 0,
    			subtitle: 1,
    			imageUrl: 2,
    			description: 3,
    			address: 4,
    			email: 5,
    			capacity: 6
    		});

    		dispatch_dev("SvelteRegisterComponent", {
    			component: this,
    			tagName: "MeetupItem",
    			options,
    			id: create_fragment$2.name
    		});
    	}

    	get title() {
    		throw new Error("<MeetupItem>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set title(value) {
    		throw new Error("<MeetupItem>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	get subtitle() {
    		throw new Error("<MeetupItem>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set subtitle(value) {
    		throw new Error("<MeetupItem>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	get imageUrl() {
    		throw new Error("<MeetupItem>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set imageUrl(value) {
    		throw new Error("<MeetupItem>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	get description() {
    		throw new Error("<MeetupItem>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set description(value) {
    		throw new Error("<MeetupItem>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	get address() {
    		throw new Error("<MeetupItem>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set address(value) {
    		throw new Error("<MeetupItem>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	get email() {
    		throw new Error("<MeetupItem>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set email(value) {
    		throw new Error("<MeetupItem>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	get capacity() {
    		throw new Error("<MeetupItem>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set capacity(value) {
    		throw new Error("<MeetupItem>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}
    }

    /* src/Meetups/MeetupGrid.svelte generated by Svelte v3.59.2 */
    const file$1 = "src/Meetups/MeetupGrid.svelte";

    function get_each_context(ctx, list, i) {
    	const child_ctx = ctx.slice();
    	child_ctx[1] = list[i];
    	return child_ctx;
    }

    // (6:1) {#each meetups as meetup}
    function create_each_block(ctx) {
    	let meetupitem;
    	let current;

    	meetupitem = new MeetupItem({
    			props: {
    				title: /*meetup*/ ctx[1].title,
    				subtitle: /*meetup*/ ctx[1].subtitle,
    				description: /*meetup*/ ctx[1].description,
    				imageUrl: /*meetup*/ ctx[1].imageUrl,
    				address: /*meetup*/ ctx[1].address,
    				capacity: /*meetup*/ ctx[1].capacity,
    				email: /*meetup*/ ctx[1].contactEmail
    			},
    			$$inline: true
    		});

    	const block = {
    		c: function create() {
    			create_component(meetupitem.$$.fragment);
    		},
    		m: function mount(target, anchor) {
    			mount_component(meetupitem, target, anchor);
    			current = true;
    		},
    		p: function update(ctx, dirty) {
    			const meetupitem_changes = {};
    			if (dirty & /*meetups*/ 1) meetupitem_changes.title = /*meetup*/ ctx[1].title;
    			if (dirty & /*meetups*/ 1) meetupitem_changes.subtitle = /*meetup*/ ctx[1].subtitle;
    			if (dirty & /*meetups*/ 1) meetupitem_changes.description = /*meetup*/ ctx[1].description;
    			if (dirty & /*meetups*/ 1) meetupitem_changes.imageUrl = /*meetup*/ ctx[1].imageUrl;
    			if (dirty & /*meetups*/ 1) meetupitem_changes.address = /*meetup*/ ctx[1].address;
    			if (dirty & /*meetups*/ 1) meetupitem_changes.capacity = /*meetup*/ ctx[1].capacity;
    			if (dirty & /*meetups*/ 1) meetupitem_changes.email = /*meetup*/ ctx[1].contactEmail;
    			meetupitem.$set(meetupitem_changes);
    		},
    		i: function intro(local) {
    			if (current) return;
    			transition_in(meetupitem.$$.fragment, local);
    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(meetupitem.$$.fragment, local);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			destroy_component(meetupitem, detaching);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_each_block.name,
    		type: "each",
    		source: "(6:1) {#each meetups as meetup}",
    		ctx
    	});

    	return block;
    }

    function create_fragment$1(ctx) {
    	let section;
    	let current;
    	let each_value = /*meetups*/ ctx[0];
    	validate_each_argument(each_value);
    	let each_blocks = [];

    	for (let i = 0; i < each_value.length; i += 1) {
    		each_blocks[i] = create_each_block(get_each_context(ctx, each_value, i));
    	}

    	const out = i => transition_out(each_blocks[i], 1, 1, () => {
    		each_blocks[i] = null;
    	});

    	const block = {
    		c: function create() {
    			section = element("section");

    			for (let i = 0; i < each_blocks.length; i += 1) {
    				each_blocks[i].c();
    			}

    			attr_dev(section, "id", "meetups");
    			attr_dev(section, "class", "svelte-9f8wz0");
    			add_location(section, file$1, 4, 0, 95);
    		},
    		l: function claim(nodes) {
    			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, section, anchor);

    			for (let i = 0; i < each_blocks.length; i += 1) {
    				if (each_blocks[i]) {
    					each_blocks[i].m(section, null);
    				}
    			}

    			current = true;
    		},
    		p: function update(ctx, [dirty]) {
    			if (dirty & /*meetups*/ 1) {
    				each_value = /*meetups*/ ctx[0];
    				validate_each_argument(each_value);
    				let i;

    				for (i = 0; i < each_value.length; i += 1) {
    					const child_ctx = get_each_context(ctx, each_value, i);

    					if (each_blocks[i]) {
    						each_blocks[i].p(child_ctx, dirty);
    						transition_in(each_blocks[i], 1);
    					} else {
    						each_blocks[i] = create_each_block(child_ctx);
    						each_blocks[i].c();
    						transition_in(each_blocks[i], 1);
    						each_blocks[i].m(section, null);
    					}
    				}

    				group_outros();

    				for (i = each_value.length; i < each_blocks.length; i += 1) {
    					out(i);
    				}

    				check_outros();
    			}
    		},
    		i: function intro(local) {
    			if (current) return;

    			for (let i = 0; i < each_value.length; i += 1) {
    				transition_in(each_blocks[i]);
    			}

    			current = true;
    		},
    		o: function outro(local) {
    			each_blocks = each_blocks.filter(Boolean);

    			for (let i = 0; i < each_blocks.length; i += 1) {
    				transition_out(each_blocks[i]);
    			}

    			current = false;
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(section);
    			destroy_each(each_blocks, detaching);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_fragment$1.name,
    		type: "component",
    		source: "",
    		ctx
    	});

    	return block;
    }

    function instance$1($$self, $$props, $$invalidate) {
    	let { $$slots: slots = {}, $$scope } = $$props;
    	validate_slots('MeetupGrid', slots, []);
    	let { meetups } = $$props;

    	$$self.$$.on_mount.push(function () {
    		if (meetups === undefined && !('meetups' in $$props || $$self.$$.bound[$$self.$$.props['meetups']])) {
    			console.warn("<MeetupGrid> was created without expected prop 'meetups'");
    		}
    	});

    	const writable_props = ['meetups'];

    	Object.keys($$props).forEach(key => {
    		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== '$$' && key !== 'slot') console.warn(`<MeetupGrid> was created with unknown prop '${key}'`);
    	});

    	$$self.$$set = $$props => {
    		if ('meetups' in $$props) $$invalidate(0, meetups = $$props.meetups);
    	};

    	$$self.$capture_state = () => ({ MeetupItem, meetups });

    	$$self.$inject_state = $$props => {
    		if ('meetups' in $$props) $$invalidate(0, meetups = $$props.meetups);
    	};

    	if ($$props && "$$inject" in $$props) {
    		$$self.$inject_state($$props.$$inject);
    	}

    	return [meetups];
    }

    class MeetupGrid extends SvelteComponentDev {
    	constructor(options) {
    		super(options);
    		init(this, options, instance$1, create_fragment$1, safe_not_equal, { meetups: 0 });

    		dispatch_dev("SvelteRegisterComponent", {
    			component: this,
    			tagName: "MeetupGrid",
    			options,
    			id: create_fragment$1.name
    		});
    	}

    	get meetups() {
    		throw new Error("<MeetupGrid>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set meetups(value) {
    		throw new Error("<MeetupGrid>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}
    }

    /* src/App.svelte generated by Svelte v3.59.2 */
    const file = "src/App.svelte";

    function create_fragment(ctx) {
    	let header1;
    	let header0;
    	let t0;
    	let main;
    	let form;
    	let div0;
    	let label1;
    	let t1;
    	let label0;
    	let t2;
    	let input0;
    	let t3;
    	let div1;
    	let label3;
    	let t4;
    	let label2;
    	let t5;
    	let input1;
    	let t6;
    	let div2;
    	let label5;
    	let t7;
    	let label4;
    	let t8;
    	let input2;
    	let t9;
    	let div3;
    	let label7;
    	let t10;
    	let label6;
    	let t11;
    	let input3;
    	let t12;
    	let div4;
    	let label9;
    	let t13;
    	let label8;
    	let t14;
    	let input4;
    	let t15;
    	let div5;
    	let label11;
    	let t16;
    	let label10;
    	let t17;
    	let input5;
    	let t18;
    	let div6;
    	let label13;
    	let t19;
    	let label12;
    	let t20;
    	let input6;
    	let t21;
    	let button;
    	let t23;
    	let meetupgrid;
    	let current;
    	let mounted;
    	let dispose;
    	header0 = new Header({ $$inline: true });

    	meetupgrid = new MeetupGrid({
    			props: { meetups: /*meetups*/ ctx[7] },
    			$$inline: true
    		});

    	const block = {
    		c: function create() {
    			header1 = element("header");
    			create_component(header0.$$.fragment);
    			t0 = space();
    			main = element("main");
    			form = element("form");
    			div0 = element("div");
    			label1 = element("label");
    			t1 = text("TITLE");
    			label0 = element("label");
    			t2 = text(":\n\t\t\t");
    			input0 = element("input");
    			t3 = space();
    			div1 = element("div");
    			label3 = element("label");
    			t4 = text("SUBTITLE");
    			label2 = element("label");
    			t5 = text(":\n\t\t\t");
    			input1 = element("input");
    			t6 = space();
    			div2 = element("div");
    			label5 = element("label");
    			t7 = text("IMAGEURL");
    			label4 = element("label");
    			t8 = text(":\n\t\t\t");
    			input2 = element("input");
    			t9 = space();
    			div3 = element("div");
    			label7 = element("label");
    			t10 = text("DESCRIPTION");
    			label6 = element("label");
    			t11 = text(":\n\t\t\t");
    			input3 = element("input");
    			t12 = space();
    			div4 = element("div");
    			label9 = element("label");
    			t13 = text("ADDRESS");
    			label8 = element("label");
    			t14 = text(":\n\t\t\t");
    			input4 = element("input");
    			t15 = space();
    			div5 = element("div");
    			label11 = element("label");
    			t16 = text("CONTACTEMAIL");
    			label10 = element("label");
    			t17 = text(":\n\t\t\t");
    			input5 = element("input");
    			t18 = space();
    			div6 = element("div");
    			label13 = element("label");
    			t19 = text("CAPACITY");
    			label12 = element("label");
    			t20 = text(":\n\t\t\t");
    			input6 = element("input");
    			t21 = space();
    			button = element("button");
    			button.textContent = "Add Meetup";
    			t23 = space();
    			create_component(meetupgrid.$$.fragment);
    			add_location(header1, file, 36, 0, 1069);
    			attr_dev(input0, "type", "text");
    			attr_dev(input0, "id", "title");
    			add_location(input0, file, 44, 3, 1227);
    			add_location(label0, file, 43, 33, 1215);
    			attr_dev(label1, "for", "input_title");
    			add_location(label1, file, 43, 3, 1185);
    			attr_dev(div0, "class", "form-control");
    			add_location(div0, file, 42, 2, 1155);
    			attr_dev(input1, "type", "text");
    			attr_dev(input1, "id", "subtitle");
    			add_location(input1, file, 49, 3, 1372);
    			add_location(label2, file, 48, 39, 1360);
    			attr_dev(label3, "for", "input_subtitle");
    			add_location(label3, file, 48, 3, 1324);
    			attr_dev(div1, "class", "form-control");
    			add_location(div1, file, 47, 2, 1294);
    			attr_dev(input2, "type", "text");
    			attr_dev(input2, "id", "imageUrl");
    			add_location(input2, file, 54, 3, 1523);
    			add_location(label4, file, 53, 39, 1511);
    			attr_dev(label5, "for", "input_imageUrl");
    			add_location(label5, file, 53, 3, 1475);
    			attr_dev(div2, "class", "form-control");
    			add_location(div2, file, 52, 2, 1445);
    			attr_dev(input3, "type", "text");
    			attr_dev(input3, "id", "description");
    			add_location(input3, file, 59, 3, 1681);
    			add_location(label6, file, 58, 45, 1669);
    			attr_dev(label7, "for", "input_description");
    			add_location(label7, file, 58, 3, 1627);
    			attr_dev(div3, "class", "form-control");
    			add_location(div3, file, 57, 2, 1597);
    			attr_dev(input4, "type", "text");
    			attr_dev(input4, "id", "address");
    			add_location(input4, file, 64, 3, 1836);
    			add_location(label8, file, 63, 37, 1824);
    			attr_dev(label9, "for", "input_address");
    			add_location(label9, file, 63, 3, 1790);
    			attr_dev(div4, "class", "form-control");
    			add_location(div4, file, 62, 2, 1760);
    			attr_dev(input5, "type", "text");
    			attr_dev(input5, "id", "contactEmail");
    			add_location(input5, file, 69, 3, 1994);
    			add_location(label10, file, 68, 47, 1982);
    			attr_dev(label11, "for", "input_contactEmail");
    			add_location(label11, file, 68, 3, 1938);
    			attr_dev(div5, "class", "form-control");
    			add_location(div5, file, 67, 2, 1908);
    			attr_dev(input6, "type", "text");
    			attr_dev(input6, "id", "capacity");
    			add_location(input6, file, 74, 3, 2146);
    			add_location(label12, file, 73, 39, 2134);
    			attr_dev(label13, "for", "input_capacity");
    			add_location(label13, file, 73, 3, 2098);
    			attr_dev(div6, "class", "form-control");
    			add_location(div6, file, 72, 2, 2068);
    			add_location(button, file, 77, 2, 2227);
    			add_location(form, file, 41, 1, 1109);
    			attr_dev(main, "class", "svelte-1gnxlqm");
    			add_location(main, file, 40, 0, 1101);
    		},
    		l: function claim(nodes) {
    			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, header1, anchor);
    			mount_component(header0, header1, null);
    			insert_dev(target, t0, anchor);
    			insert_dev(target, main, anchor);
    			append_dev(main, form);
    			append_dev(form, div0);
    			append_dev(div0, label1);
    			append_dev(label1, t1);
    			append_dev(label1, label0);
    			append_dev(label0, t2);
    			append_dev(label0, input0);
    			set_input_value(input0, /*title*/ ctx[0]);
    			append_dev(form, t3);
    			append_dev(form, div1);
    			append_dev(div1, label3);
    			append_dev(label3, t4);
    			append_dev(label3, label2);
    			append_dev(label2, t5);
    			append_dev(label2, input1);
    			set_input_value(input1, /*subtitle*/ ctx[1]);
    			append_dev(form, t6);
    			append_dev(form, div2);
    			append_dev(div2, label5);
    			append_dev(label5, t7);
    			append_dev(label5, label4);
    			append_dev(label4, t8);
    			append_dev(label4, input2);
    			set_input_value(input2, /*imageUrl*/ ctx[2]);
    			append_dev(form, t9);
    			append_dev(form, div3);
    			append_dev(div3, label7);
    			append_dev(label7, t10);
    			append_dev(label7, label6);
    			append_dev(label6, t11);
    			append_dev(label6, input3);
    			set_input_value(input3, /*description*/ ctx[3]);
    			append_dev(form, t12);
    			append_dev(form, div4);
    			append_dev(div4, label9);
    			append_dev(label9, t13);
    			append_dev(label9, label8);
    			append_dev(label8, t14);
    			append_dev(label8, input4);
    			set_input_value(input4, /*address*/ ctx[4]);
    			append_dev(form, t15);
    			append_dev(form, div5);
    			append_dev(div5, label11);
    			append_dev(label11, t16);
    			append_dev(label11, label10);
    			append_dev(label10, t17);
    			append_dev(label10, input5);
    			set_input_value(input5, /*email*/ ctx[5]);
    			append_dev(form, t18);
    			append_dev(form, div6);
    			append_dev(div6, label13);
    			append_dev(label13, t19);
    			append_dev(label13, label12);
    			append_dev(label12, t20);
    			append_dev(label12, input6);
    			set_input_value(input6, /*capacity*/ ctx[6]);
    			append_dev(form, t21);
    			append_dev(form, button);
    			append_dev(main, t23);
    			mount_component(meetupgrid, main, null);
    			current = true;

    			if (!mounted) {
    				dispose = [
    					listen_dev(input0, "input", /*input0_input_handler*/ ctx[9]),
    					listen_dev(input1, "input", /*input1_input_handler*/ ctx[10]),
    					listen_dev(input2, "input", /*input2_input_handler*/ ctx[11]),
    					listen_dev(input3, "input", /*input3_input_handler*/ ctx[12]),
    					listen_dev(input4, "input", /*input4_input_handler*/ ctx[13]),
    					listen_dev(input5, "input", /*input5_input_handler*/ ctx[14]),
    					listen_dev(input6, "input", /*input6_input_handler*/ ctx[15]),
    					listen_dev(form, "submit", prevent_default(/*addMeetup*/ ctx[8]), false, true, false, false)
    				];

    				mounted = true;
    			}
    		},
    		p: function update(ctx, [dirty]) {
    			if (dirty & /*title*/ 1 && input0.value !== /*title*/ ctx[0]) {
    				set_input_value(input0, /*title*/ ctx[0]);
    			}

    			if (dirty & /*subtitle*/ 2 && input1.value !== /*subtitle*/ ctx[1]) {
    				set_input_value(input1, /*subtitle*/ ctx[1]);
    			}

    			if (dirty & /*imageUrl*/ 4 && input2.value !== /*imageUrl*/ ctx[2]) {
    				set_input_value(input2, /*imageUrl*/ ctx[2]);
    			}

    			if (dirty & /*description*/ 8 && input3.value !== /*description*/ ctx[3]) {
    				set_input_value(input3, /*description*/ ctx[3]);
    			}

    			if (dirty & /*address*/ 16 && input4.value !== /*address*/ ctx[4]) {
    				set_input_value(input4, /*address*/ ctx[4]);
    			}

    			if (dirty & /*email*/ 32 && input5.value !== /*email*/ ctx[5]) {
    				set_input_value(input5, /*email*/ ctx[5]);
    			}

    			if (dirty & /*capacity*/ 64 && input6.value !== /*capacity*/ ctx[6]) {
    				set_input_value(input6, /*capacity*/ ctx[6]);
    			}

    			const meetupgrid_changes = {};
    			if (dirty & /*meetups*/ 128) meetupgrid_changes.meetups = /*meetups*/ ctx[7];
    			meetupgrid.$set(meetupgrid_changes);
    		},
    		i: function intro(local) {
    			if (current) return;
    			transition_in(header0.$$.fragment, local);
    			transition_in(meetupgrid.$$.fragment, local);
    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(header0.$$.fragment, local);
    			transition_out(meetupgrid.$$.fragment, local);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(header1);
    			destroy_component(header0);
    			if (detaching) detach_dev(t0);
    			if (detaching) detach_dev(main);
    			destroy_component(meetupgrid);
    			mounted = false;
    			run_all(dispose);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_fragment.name,
    		type: "component",
    		source: "",
    		ctx
    	});

    	return block;
    }

    function instance($$self, $$props, $$invalidate) {
    	let { $$slots: slots = {}, $$scope } = $$props;
    	validate_slots('App', slots, []);
    	let title = "";
    	let subtitle = "";
    	let imageUrl = "";
    	let description = "";
    	let address = "";
    	let email = "";
    	let capacity = 0;

    	let meetups = [
    		{
    			id: "m1",
    			title: "Coding",
    			subtitle: "Learn to code",
    			description: "In aute ut officia magna aliqua esse laborum deserunt minim. Cupidatat ex ad aliquip est minim adipisicing laborum non.",
    			imageUrl: "https://placehold.co/600x400/orange/white?text=Learn+To+Code",
    			address: "1st Avenue New York",
    			contactEmail: "john@example.com",
    			capacity: 30
    		}
    	];

    	function addMeetup() {
    		const newMeetup = {
    			"id": (Math.floor(Math.random() * 90000000) + 10000000).toString(),
    			title,
    			subtitle,
    			imageUrl,
    			description,
    			address,
    			"contactEmail": email,
    			capacity
    		};

    		$$invalidate(7, meetups = [...meetups, newMeetup]);
    	}

    	const writable_props = [];

    	Object.keys($$props).forEach(key => {
    		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== '$$' && key !== 'slot') console.warn(`<App> was created with unknown prop '${key}'`);
    	});

    	function input0_input_handler() {
    		title = this.value;
    		$$invalidate(0, title);
    	}

    	function input1_input_handler() {
    		subtitle = this.value;
    		$$invalidate(1, subtitle);
    	}

    	function input2_input_handler() {
    		imageUrl = this.value;
    		$$invalidate(2, imageUrl);
    	}

    	function input3_input_handler() {
    		description = this.value;
    		$$invalidate(3, description);
    	}

    	function input4_input_handler() {
    		address = this.value;
    		$$invalidate(4, address);
    	}

    	function input5_input_handler() {
    		email = this.value;
    		$$invalidate(5, email);
    	}

    	function input6_input_handler() {
    		capacity = this.value;
    		$$invalidate(6, capacity);
    	}

    	$$self.$capture_state = () => ({
    		Header,
    		MeetupGrid,
    		title,
    		subtitle,
    		imageUrl,
    		description,
    		address,
    		email,
    		capacity,
    		meetups,
    		addMeetup
    	});

    	$$self.$inject_state = $$props => {
    		if ('title' in $$props) $$invalidate(0, title = $$props.title);
    		if ('subtitle' in $$props) $$invalidate(1, subtitle = $$props.subtitle);
    		if ('imageUrl' in $$props) $$invalidate(2, imageUrl = $$props.imageUrl);
    		if ('description' in $$props) $$invalidate(3, description = $$props.description);
    		if ('address' in $$props) $$invalidate(4, address = $$props.address);
    		if ('email' in $$props) $$invalidate(5, email = $$props.email);
    		if ('capacity' in $$props) $$invalidate(6, capacity = $$props.capacity);
    		if ('meetups' in $$props) $$invalidate(7, meetups = $$props.meetups);
    	};

    	if ($$props && "$$inject" in $$props) {
    		$$self.$inject_state($$props.$$inject);
    	}

    	return [
    		title,
    		subtitle,
    		imageUrl,
    		description,
    		address,
    		email,
    		capacity,
    		meetups,
    		addMeetup,
    		input0_input_handler,
    		input1_input_handler,
    		input2_input_handler,
    		input3_input_handler,
    		input4_input_handler,
    		input5_input_handler,
    		input6_input_handler
    	];
    }

    class App extends SvelteComponentDev {
    	constructor(options) {
    		super(options);
    		init(this, options, instance, create_fragment, safe_not_equal, {});

    		dispatch_dev("SvelteRegisterComponent", {
    			component: this,
    			tagName: "App",
    			options,
    			id: create_fragment.name
    		});
    	}
    }

    const app = new App({
        target: document.body
    });

    return app;

})();
//# sourceMappingURL=bundle.js.map
