var express = require('express');
var app = require('./../app');
var db = require('./../db');

app.get('/', (req, res) => {
  // res.sendFile(__dirname + '/index.html');
  // res.send('OK');


///erroring here: db.collection is not defined, but was before
  var cursor = db.collection('zines').find().toArray(function(err, results){
    console.log(results);
    if (err) return console.log(err);
    //render index.ejs;
    //send the contents in json to curl
    // res.send(results);
    res.render('index.ejs', {zines: results});
  });

});
//
//
// ///// ~~~ POST REQUEST
// // REMEMBER THIS PART const bodyParser = require('body-parser'); // express middleware for reading post requests from forms, Use with "use" method
// app.post('/zines', (req, res) => {
//   // console.log(req.body);
//   db.collection('zines').save(req.body, (err, result) => {
//     if (err) return console.log(err);
//     console.log('saved to zine database');
//     res.redirect('/');
//   });
// });



