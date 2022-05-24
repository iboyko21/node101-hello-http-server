// Require the dependency (the http module from Node)
const http = require('http');

// Create a server object and make sure it can send headers and send body response
const server = http.createServer(function (req, res) {
    // log a msg when request is received
    console.log('Received ' + req.method + ' request for: ' + req.url );
    // send headers
    res.writeHead(200, {'Content-Type': 'text/plain'});
    // send body response
    res.end("Hello World");
});

// Add a listener so that your server will have a way to handle incoming connections.
server.listen(8080, 'localhost', null, function () {
    console.log('Server is listening on localhost:8080');
});