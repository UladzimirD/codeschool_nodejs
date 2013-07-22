var EventEmitter = require('events').EventEmitter;

var logger = new EventEmitter();

logger.on('error', function(message) {
    console.log(message);
});

logger.emit('error', 'First error');
logger.emit('error', 'Second');

var http = require('http');
var server = http.createServer().listen(8080);
server.on('request', function(request, response) {
    response.writeHead(200);
    response.write('Yahooo');
    console.log('Request');
    response.end();
});
server.on('close', function() {
    console.log('End of request ...');
});    
