
const db = require('../services/db');
const config = require('../config');

function getMultiple(page = 1) {
  const offset = (page - 1) * config.listPerPage;
  const data = db.query(`SELECT * FROM stats LIMIT ?,?`, [offset, config.listPerPage]);
  const meta = {page};

  return {
    data,
    meta
  }
}

function putStat(statsObj) {
  const {duration, count} = statsObj;
  const msg = db.run('INSERT INTO stats (duration, count) VALUES (@duration, @count)', {duration, count});
  return msg;
}  

module.exports = {
  getMultiple,
  putStat
}