var express = require('express');
var fs=require('fs');
var app = express.createServer(express.logger());
var buffer=new Buffer(200);
app.get('/', function(request, response) {
  response.send('Hello World 4!');
  fs.readFileSync('index.html','utf-8');
  buffer.write('index.html','utf-8');
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
