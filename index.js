var app = require('express')();
var http = require('http').Server(app);
var http2 = require('http').Server(app);
var io = require('socket.io')(http);
var io2 = require('socket.io')(http2);

// app.listen(27877)

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

//must be created two sockets for bussiness rules
//io1 on 27877 and io2 on 27878
//io 2 must send the sum to all listeners
io2.on('connection', function(socket){
  socket.on('sum message', function(msg){
    io2.emit('sum message', msg);
    console.log('message: ' + msg);
  });
});

//io1 validate that integer must be between 1 and 20
io.on('connection', function(socket){
  socket.on('chat message', function(msg){
  	let sumValue = parseInt(msg);
	if (sumValue < 0 || sumValue > 20) {
		errMsg = 'The number must be an integer between 1 and 20';
		console.log(errMsg);
  		io.emit('sum message', errMsg);
  	}
  	else {
  		console.log('message: ' + msg);
    	io2.emit('sum message', msg);
  	}
  });
});

   
    
http.listen(27877, function(){
  console.log('listening on *:27877');
});

http2.listen(27878, function(){
  console.log('listening on *:27878');
});