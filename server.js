//node server
// const express = require('express');
// const bodyParser = require('body-parser'); // express middleware for reading post requests from forms, Use with "use" method
// const app = express();

////// ~~~~~MOVED TO BIN ~~~~~/////
//connect to our Mongo db, hosted on mlab
// const MongoClient = require('mongodb').MongoClient;
//
// //require our env and use our env file
// var dotenv = require('dotenv');
// dotenv.config();
//
// //url with env secrets
// var url = process.env.MONGO_URL;
// var db;
//
// //connect Mongodb with server at startup
// MongoClient.connect(url, (err, database) => {
//   if (err) return console.log(err);
//    db = database;
//    app.listen(3000, () => {
//      console.log('listening on port 3000');
//    });
// });


// ////// @TODO MOVE NEXT?/////

//use embedded javascript for view engine. use res.render(the view file, then locals(the data passed to the view))
app.set('view engine', 'ejs');
//use bodyParser
app.use(bodyParser.urlencoded({extended: true}));

//use our public folder
app.use(express.static('public'));


//CRUD handlers below: @TODO: move to routes folder

// app.get('/', (req, res) => {
//   // res.sendFile(__dirname + '/index.html');
//   // Note: __dirname is directory that contains the JavaScript source code.
//
//   var cursor = db.collection('zines').find().toArray(function(err, results){
//     console.log(results);
//     if (err) return console.log(err);
//     //render index.ejs;
//     //send the contents in json to curl
//     // res.send(results);
//     res.render('index.ejs', {zines: results});
//   });
// });

// // REMEMBER THIS PART const bodyParser = require('body-parser'); // express middleware for reading post requests from forms, Use with "use" method
// app.post('/zines', (req, res) => {
//   // console.log(req.body);
//   db.collection('zines').save(req.body, (err, result) => {
//     if (err) return console.log(err);
//     console.log('saved to zine database');
//     res.redirect('/');
//   });
// });

//update requests


//delete request

