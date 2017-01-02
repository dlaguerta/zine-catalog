//node server
const express = require('express');
const bodyParser = require('body-parser'); // express middleware for reading post requests from forms, Use with "use" method
const app = express();
const MongoClient = require('mongodb').MongoClient;
var dotenv = require('dotenv');
dotenv.config();

var url = process.env.MONGO_URL;
var db;

MongoClient.connect(url, (err, database) => {
  if (err) return console.log(err);
   db = database;
   app.listen(3000, () => {
     console.log('listening on 3000');
   });
});

app.use(bodyParser.urlencoded({extended: true}));

//CRUD handlers below

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
  // Note: __dirname is directory that contains the JavaScript source code.
});

app.post('/zines', (req, res) => {
  // console.log(req.body);
  db.collection('zines').save(req.body, (err, result) => {
    if (err) return console.log(err);
    console.log('saved to zine database');
    res.redirect('/');
  });
});



