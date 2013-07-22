var fs = require('fs');

var file = fs.createReadStream('stream.js');

var newFile = fs.createWriteStream('to');

file.pipe(newFile);
