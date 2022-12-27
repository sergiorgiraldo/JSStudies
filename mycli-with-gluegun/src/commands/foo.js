module.exports = {
	name: "foo",
	alias: "f",
	run: async function (toolbox) {
		// gluegun provides all these features and more!
		const { system, print, filesystem, strings } = toolbox;

		// ...and be the CLI you wish to see in the world
		const awesome = strings.trim(await system.run("whoami"));
		const moreAwesome = strings.kebabCase(`${awesome} and a keyboard`);
		const contents = `🚨 Warning! ${moreAwesome} coming thru! 🚨`;
		const home = process.env["HOME"];
		filesystem.write(`${home}/realtalk.json`, { contents });

		print.info(`${print.checkmark} Citius`);
		print.warning(`${print.checkmark} Altius`);
		print.success(`${print.checkmark} Fortius`);
	}
};
