var https = require("https");

module.exports = {
	name: "weather",
	alias: ["w"],
	run: async (toolbox) => {
		const { print } = toolbox;

		var options = {
			host: "wttr.in",
			path: "/utrecht",
		};
		var request = https.request(options, function (res) {
			var data = "";
			res.on("data", function (chunk) {
				data += chunk;
			});
			res.on("end", function () {
				console.log("OK");
				console.log(data);
			});
		});
		request.on("error", function (e) {
			console.log("NOT OK");
			console.log(e.message);
		});
		request.end();

		print.info(`weather from Utrecht`);
	},
};
