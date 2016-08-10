var express = require('express');
var app  =express();
var server = require('http').Server(app);
var io = require('socket.io')(server);
server.listen(process.env.PORT || 3000,process.env.IP || '0.0.0.0', function() {
	var addr = server.address();
	var host = addr.address;
	var port = addr.port;
	console.log('listen',host,port);
});

app.get('/', function (req, res) {
  res.sendfile('/client/index.html');
});
app.get('/snakeAndFood.js', function (req, res) {
  res.sendfile(__dirname + '/snakeAndFood.js');
});