//app module
const express = require('express');
const app = module.exports = express();
const bodyParser = require('body-parser'); // express middleware for reading post requests from forms, Use with "use" method

var db = require('./db');//something like that

// using mongodb to connect, connected with node app.js
var port = process.env.PORT || 3000;



const MongoClient = require('mongodb').MongoClient;

//require our env and use our env file
var dotenv = require('dotenv');
dotenv.config();

//url with env secrets
// var url = process.env.MONGO_URL;


//connect Mongodb with server at startup
MongoClient.connect('mongodb://localhost:27017/allzines', (err, database) => {
  if (err) return console.log(err);
   db = database;
   app.listen(3000, () => {
     console.log('listening on port 3000 with mongodb' + database);
   });
});


var index = require('./controllers/index');

//use embedded javascript for view engine. use res.render(the view file, then locals(the data passed to the view))
app.set('view engine', 'ejs');
//use bodyParser
app.use(bodyParser.urlencoded({extended: true}));

//use our public folder
app.use(express.static(__dirname +'public'));
// app.get('/', function(req, res){
//   res.send('Ok');
// });
// app.use('/', index);


