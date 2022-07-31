
const express = require('express');
const router = express.Router();
const stats = require('../services/stats');

express.json();

router.get('/', function(req, res, next) {
  try {
    res.json(stats.getMultiple(req.query.page));
  } catch(err) {
    console.error(`Error while getting stats `, err.message);
    next(err);
  }
});

router.post('/', function(req, res, next) {
  console.log(req.body);
  try {
    res.json(stats.putStat(req.body));
  } catch(err) {
    console.error(`Error while adding stat `, err.message);
    next(err);
  }
});

module.exports = router;