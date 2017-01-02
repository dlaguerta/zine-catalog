// console.log("Node server is running, great!");

const express = require('express');
const bodyParser = require('body-parser'); // express middleware for reading post requests from forms, Use with "use" method
const app = express();

app.listen(3000, function() {
  console.log('listening on 3000');
});

app.use(bodyParser.urlencoded({extended: true}));

//CRUD handlers below

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html')
  // Note: __dirname is directory that contains the JavaScript source code.
});

app.post('/zines', (req, res)=> {
  console.log(req.body);
})

