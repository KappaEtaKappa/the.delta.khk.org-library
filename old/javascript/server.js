var http = require('http');
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello World\n');
}).listen(7000, 'http://localhost:7000');

console.log('Server running at http://localhost:7000');