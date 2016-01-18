var mongodb = require('mongodb');
module.exports.init = function(callback) {
  var server = new mongodb.Server('localhost', 27017);
  var db = new mongodb.Db('Rando', server);
  db.open(function(error, db) {
    module.exports.db = db;
    module.exports.applications = db.collection('applications');
  });
};
