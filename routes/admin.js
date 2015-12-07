var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('admin', {
    title: 'Rando Corp Applicant Admin', buttonText: 'Applicant View'});
});

module.exports = router;
