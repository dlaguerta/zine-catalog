var express = require('express');
var app = require('./../app');

app.get('/', (req, res) => {
  // res.sendFile(__dirname + '/index.html');
  res.send('OK');

  // var cursor = db.collection('zines').find().toArray(function(err, results){
  //   console.log(results);
  //   if (err) return console.log(err);
  //   //render index.ejs;
  //   //send the contents in json to curl
  //   // res.send(results);
  //   res.render('index.ejs', {zines: results});
  // });
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



// var router = express.Router();

// /* GET home page. */
// router.get('/', function(req, res, next) {
//   console.log(res);
//   res.render('index');
// });
//
// module.exports = router;