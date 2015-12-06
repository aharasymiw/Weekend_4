var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.status(200);
  res.send('Here\'s the application results you\'re looking for.');
});

module.exports = router;
