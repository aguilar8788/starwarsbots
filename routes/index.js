var express = require('express');
var router = express.Router();
var knex = require('../db/knex')

/* GET home page. */
router.get('/', function(req, res, next) {
  knex('robot').select().then(function(robotdata){
  res.render('index', { robotlist: robotdata });
  })
});

router.get('/create', function(req, res, next){
  res.render('create')
})

router.post('/create', function(req, res, next){
  knex('robot').insert(req.body).then(function(){
    res.redirect('/');
  }).catch(function(err){
    console.log(err);
    next(err)
  })

})
module.exports = router;
