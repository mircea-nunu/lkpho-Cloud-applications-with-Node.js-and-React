const http = require('http');
const today = require('./today');
const fs = require('fs');

const requestListener = function (req, res) {

  //Open a file on the server and return its content:
  fs.readFile('file1.html', function(err, data) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
  });
}

const port = 8080;
const server = http.createServer(requestListener);
console.log('server listening on port: ' + port);
server.listen(port);