const db = require("../services/db");

function getMultiple() {
	const data = db.query("SELECT * FROM stats", {});

	return {
		data
	};
}

function putStat(statsObj) {
	const { duration, count } = statsObj;
	const msg = db.run(
		"INSERT INTO stats (duration, count) VALUES (@duration, @count)",
		{ duration, count }
	);
	return msg;
}

module.exports = {
	getMultiple,
	putStat
};
