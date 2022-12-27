// add your CLI-specific functionality here, which will then be accessible
// to your commands
module.exports = (toolbox) => {
	toolbox.foo = () => {
		toolbox.print.info("called foo extension");
	};

	// enable this if you want to read configuration in from
	// the current folder's package.json (in a "mycli-with-gluegun" property),
	// mycli-with-gluegun.config.json, etc.
	// toolbox.config = {
	//   ...toolbox.config,
	//   ...toolbox.config.loadConfig("mycli-with-gluegun", process.cwd())
	// }
};
