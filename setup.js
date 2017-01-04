//this setup.js file allows is to use the .env file

'use strict';
var fs = require('fs');
fs.createReadStream('.sample-env')
  .pipe(fs.createWriteStream('.env'));