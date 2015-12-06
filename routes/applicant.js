var express = require('express');
var router = express.Router();

/* GET home page. */
router.post('/', function(req, res, next) {
  console.log(req.body);

  //Send it to the server

  //res.status(200);
  res.send('Your application has been recieved.');
});

module.exports = router;
