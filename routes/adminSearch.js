var express = require('express');
var router = express.Router();
var MONGO_DB = 'mongodb://localhost:27017/Rando'; //Change to your URL
var mongoClient = require('mongodb').MongoClient;

/* GET home page. */
router.get('/default', function(req, res, next) {
  mongoClient.connect(MONGO_DB, function(err, db) {
    var collection = db.collection('applications');
    var results = collection.find({}, {fname: 1, lname: 1, location: 1,
      employer1: 1, reading: 1, writing: 1, rithmetic: 1}).limit(5);
    var array = results.toArray(function(err, arr) {
      res.json(arr);
    });
  });
});

router.get('/default', function(req, res, next) {
  var criteria = {};
  console.log(req.body);
  //var criteria = req.body;
  mongoClient.connect(MONGO_DB, function(err, db) {
    var collection = db.collection('applications');
    var results = collection.find(criteria, {fname: 1, lname: 1, location: 1,
      employer1: 1, reading: 1, writing: 1, rithmetic: 1});
    var array = results.toArray(function(err, arr) {
      res.json(arr);
    });
  });
});

module.exports = router;
