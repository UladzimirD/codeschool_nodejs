var fs = require('fs');
var callback = function(err, contents) {
    console.log('function! ' + contents);
};
var buf1= new Buffer(16);
var buf2= new Buffer(16);

fs.read('/etc/hosts', buf1, 0, 16, 0, function(err, bytesRead, contents) {
  console.log('First: ' + contents);
});

fs.read('/etc/group', buf2, 0, 16, 0, function(err, bytesRead, contents) {
  console.log('Second: ' + contents);
});

