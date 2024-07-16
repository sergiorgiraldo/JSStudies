self.__BUILD_MANIFEST = {
	__rewrites: { beforeFiles: [], afterFiles: [], fallback: [] },
	"/": ["static\u002Fchunks\u002Fpages\u002Findex.js"],
	"/_error": ["static\u002Fchunks\u002Fpages\u002F_error.js"],
	"/events": ["static\u002Fchunks\u002Fpages\u002Fevents.js"],
	"/events/[eventId]": [
		"static\u002Fchunks\u002Fpages\u002Fevents\u002F[eventId].js",
	],
	"/events/[...slug]": [
		"static\u002Fchunks\u002Fpages\u002Fevents\u002F[...slug].js",
	],
	"/next/dist/pages/_error": [
		"static\u002Fchunks\u002Fpages\u002Fnext\u002Fdist\u002Fpages\u002F_error.js",
	],
	sortedPages: [
		"\u002F",
		"\u002F_app",
		"\u002F_error",
		"\u002Fevents",
		"\u002Fevents\u002F[eventId]",
		"\u002Fevents\u002F[...slug]",
		"\u002Fnext\u002Fdist\u002Fpages\u002F_error",
	],
};
self.__BUILD_MANIFEST_CB && self.__BUILD_MANIFEST_CB();
