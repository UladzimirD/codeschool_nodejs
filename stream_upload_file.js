var fs = require('fs');
var http = require('http');

http.createServer(function(request, response) {
    var newFile = fs.createWriteStream('to.to');
    var fileBytes = request.headers['content-length'];
    var uploadedBytes = 0;
    request.on('data', function(chunk) {
	uploadedBytes += chunk.length
	var buffer_good = newFile.write(chunk);
	if (!buffer_good) request.pause();
	var progress = parseInt((uploadedBytes / fileBytes) * 100, 10);
	response.write('progress: ' + progress + '%\n');
    });
    newFile.on('drain', function() { request.resume() });

    request.on('end', function() {
	response.end('uploaded!');
    });
}).listen(8080);
