var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {title: 'Rando Corp', buttonText: 'Admin View'});
});

module.exports = router;
