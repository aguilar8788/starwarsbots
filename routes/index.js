var express = require('express');
var router = express.Router();
var knex = require('../db/knex')

/* GET home page. */
router.get('/', function(req, res, next) {
  knex('robot').select().then(function(robotdata){
  res.render('index', { robotlist: robotdata });
  })
});

module.exports = router;
