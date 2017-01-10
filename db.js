var MongoClient = require('mongodb').MongoClient;

var state = {
  db: null,
};

var port = process.env.PORT || 3000;


//require our env and use our env file
var dotenv = require('dotenv');
dotenv.config();

//url with env secrets
var url = process.env.MONGO_URL;


exports.connect = function(url, done) {
  if (state.db) return done();

  MongoClient.connect(url, function(err, db) {
    if (err) return done(err);
    state.db = db;
    done();
  });
};

exports.get = function() {
  return state.db;
};

exports.close = function(done) {
  if (state.db) {
    state.db.close(function(err, result) {
      state.db = null;
      state.mode = null;
      done(err);
    });
  }
};

// var dotenv = require('dotenv');
// dotenv.config();
// var MongoClient = require('mongodb').MongoClient;
//
// var url = process.env.MONGO_URL;
// var db;
//
// MongoClient.connect(url, (err, database) => {
//   if (err) return console.log(err);
//    db = database;
//    console.log('connected to db');
//  });

