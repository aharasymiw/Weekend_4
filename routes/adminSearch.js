var express = require('express');
var router = express.Router();
var MONGO_DB = 'mongodb://localhost:27017/Rando'; //Change to your URL
var mongoClient = require('mongodb').MongoClient;

function getQueryVariable(req) {
  var result = {
    fname: '',
    lname: '',
    location: '',
    state: '',
    city: '',
    reading: '',
    writing: '',
    rithmetic: ''
  };
  var query = req.url;
  console.log('req.url: ', query);
  var vars = query.split('&');
  console.log('vars', vars);
  for (var i = 0; i < vars.length; i++) {
    console.log(i);
    var pair = vars[i].split('=');
    if (pair[0] == '/?fname') {
      console.log('If');
      result.fname = pair[1];
    } else {
      console.log('Else');
      result.pair[0] = pair[1];
    }
    console.log(result);
  }
  return('');
}

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

router.get('/', function(req, res, next) {
  var fname = '';
  console.log('resut', getQueryVariable(req));
  /*  criteria.fname = getQueryVariable(fname);
    criteria.lname = getQueryVariable(lname);
    criteria.location = getQueryVariable(location);
    criteria.state = getQueryVariable(state);
    criteria.city = getQueryVariable(city);
    criteria.reading = getQueryVariable(reading);
    criteria.writing = getQueryVariable(writing);
    criteria.rithmetic = getQueryVariable(rithmetic);
*/
  var criteria = {'name': 'John'};
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
