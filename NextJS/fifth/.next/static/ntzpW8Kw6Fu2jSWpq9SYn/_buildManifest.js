self.__BUILD_MANIFEST = {
	__rewrites: [],
	"/": [
		"static\u002Fcss\u002F0fc5107fa2de5a9abe1f.css",
		"static\u002Fchunks\u002Fpages\u002Findex-60a1b09b80f4754c3b9a.js",
	],
	"/_error": [
		"static\u002Fchunks\u002Fpages\u002F_error-f6b2cc7adf766a96cf29.js",
	],
	"/events": [
		"static\u002Fcss\u002F9c8eed7024697ad09cee.css",
		"static\u002Fchunks\u002Fpages\u002Fevents-532f678790dc97e25280.js",
	],
	"/events/[eventId]": [
		"static\u002Fcss\u002F932b7a4bfa4fd4a838d0.css",
		"static\u002Fchunks\u002Fpages\u002Fevents\u002F[eventId]-9a4616ac7c49a0170b47.js",
	],
	"/events/[...slug]": [
		"static\u002Fcss\u002F1344729452e50d726de8.css",
		"static\u002Fchunks\u002Fpages\u002Fevents\u002F[...slug]-7ad46c63b367baa0eed9.js",
	],
	sortedPages: [
		"\u002F",
		"\u002F_app",
		"\u002F_error",
		"\u002Fevents",
		"\u002Fevents\u002F[eventId]",
		"\u002Fevents\u002F[...slug]",
	],
};
self.__BUILD_MANIFEST_CB && self.__BUILD_MANIFEST_CB();
