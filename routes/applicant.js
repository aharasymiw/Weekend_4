var express = require('express');
var router = express.Router();
var mongo = require('../data/mongo');

/* GET home page. */
router.post('/', function(req, res, next) {
  //mongo.applications.insert(req.body);
  console.log(req.body);
  res.status(200);
  res.json('Your application has been submitted.');
});

module.exports = router;
