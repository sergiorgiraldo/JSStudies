const { PHASE_DEVELOPMENT_SERVER } = require("next/constants");

module.exports = (phase) => {
	if (phase === PHASE_DEVELOPMENT_SERVER) {
		return {
			env: {
				mongodb_username: "sa",
				mongodb_password: "sa",
				mongodb_clustername: "cluster0",
				mongodb_database: "blog",
				lbl: "DEV"
			}
		};
	} else {
		return {
			env: {
				mongodb_username: "sa",
				mongodb_password: "sa",
				mongodb_clustername: "cluster0",
				mongodb_database: "blog",
				lbl: "PRD"
			}
		};
	}
};
