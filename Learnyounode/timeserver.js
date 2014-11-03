var net = require('net');
var port = process.argv[2];


var server = net.createServer(function(socket){

	// 2013-07-06 17:42
	var date = new Date();
	//console.log(date.toString());
	var year = date.getFullYear();
	var month = date.getMonth() + 1;
	var day = date.getDate();
	var hour = date.getHours();
	var min = date.getMinutes();
	
	// zero padding
	hour = zeroPad(hour);
	min = zeroPad(min);
	day = zeroPad(day);
	
	var time = year + '-' + month + '-' + day + ' ' + hour  + ':' + min;
	
	socket.write(time.toString());
	socket.end();

});

function zeroPad(i){
	return (i < 10 ? '0' : '') + i
}

server.listen(port);