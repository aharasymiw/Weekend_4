var express = require('express');
var router = express.Router();
var MONGO_DB = 'mongodb://localhost:27017/Rando'; //Change to your URL
var mongoClient = require('mongodb').MongoClient;

/* GET home page. */
router.post('/', function(req, res, next) {
  mongoClient.connect(MONGO_DB, function(err, db) {
    var collection = db.collection('applications');
    var dateString = '';
    var newDate = new Date();

    // Get the month, day, and year.
    dateString += (newDate.getMonth() + 1) + '/';
    dateString += newDate.getDate() + '/';
    dateString += newDate.getFullYear();

    req.body.date = dateString;
    console.log(req.body);
    collection.insert(req.body);
    res.status(200);
    res.json('Your application has been submitted.');
  });
});

module.exports = router;
