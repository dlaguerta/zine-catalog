//app module
const express = require('express');
const app = express();

app.get('/', function(req, res){
  res.send('Ok');
});

module.exports = app;