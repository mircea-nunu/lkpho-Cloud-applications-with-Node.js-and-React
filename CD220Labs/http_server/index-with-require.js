const http = require('http');
const today = require('./today');
const fs = require('fs');

const requestListener = function (req, res) {
    res.writeHead(200);
  let dateVal = today.getDate();
  console.log(dateVal);
  //Open a file on the server and return its content:
  fs.readFile('file1.html', function(err, data) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
  });
  res.write(Intl.DateTimeFormat().resolvedOptions().timeZone);
//   console.log(localdateVal);
  let greeting = "It is still not morning"
  if (dateVal.getHours()>6 && dateVal.getHours()<12) {
    greeting = "Good morning!"
  } else if (dateVal.getHours()>=12 && dateVal.getHours()<18) {
    greeting = "Good afternoon!"
  }else if (dateVal.getHours()>=18 && dateVal.getHours()<21) {
    greeting = "Good evening!"
  }else if (dateVal.getHours()>=21 && dateVal.getHours()<24) {
    greeting = "Good night!"
  }
  
  res.end(`Hello, ${greeting} Time: ${dateVal}`);

}

const port = 8080;
const server = http.createServer(requestListener);
console.log('server listening on port: ' + port);
server.listen(port);