var express = require('express');
var router = express.Router();
var knex = require('../db/knex')

/* GET home page. */
router.get('/', function(req, res, next) {
  knex('robot').select().then(function(robots){
  res.render('index', { robots: robots });
  })
});

module.exports = router;
