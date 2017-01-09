//app module
const express = require('express');
const app = express();
const bodyParser = require('body-parser'); // express middleware for reading post requests from forms, Use with "use" method
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

module.exports = app;