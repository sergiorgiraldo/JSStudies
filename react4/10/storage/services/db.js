const sqlite = require("better-sqlite3");
const path = require("path");
const db = new sqlite(path.resolve("tenzie.sqlite3"), { fileMustExist: true });

function query(sql, params) {
	return db.prepare(sql).all(params);
}
function run(sql, params) {
	return db.prepare(sql).run(params);
}

module.exports = {
	query,
	run
};
