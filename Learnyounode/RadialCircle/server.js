var express = require('express');
var fs = require('fs');
var buff = null;


// registering middlewares
var app = express();
app.use(express.static(__dirname + '/public'));

app.get('/public/api', function(req, res){
	console.log('path match');
	if(req.method == 'GET'){
		var data = getDataLog();
		res.send(data);
	}

});

var port = 8080;
app.listen(port, function(){
	console.log('server listening...');
});

// retrieve serial log
var lines = [];
function getDataLog(){
	path = 'C:/Users/Jomeno/Google Drive/Capehi/RadialCirle/data.log';
	buff = fs.readFileSync(path);
	lines = buff.toString().split('\n')
	if(lines.length <= 2){
		return 'no data logged';
	}
	
	return lines[lines.length - 2];
}

function now(){
	var date = new Date();
	return date.getHours() +' : ' + date.getMinutes();
}

// var fs = require('fs');
// var path = 'C:/Users/Jomeno/Google Drive/Capehi/RadialCirle/data.log';
// var clc = require('cli-color');

// var net = require('net');

// var bf = null;
// var lines = [];
// var logCount = 0;
// console.log('\nWELCOME TO RADIAL CIRCLE METOCEAN\n');
// console.log('Metocean Server Started');
// console.log(clc.yellow(now()));
// //console.log('...');

// var server = net.createServer(function(socket){
	// bf = fs.readFileSync(path);
	// lines = bf.toString().split('\n');
	// var data = lines[lines.length - 2];

	// socket.end(data.toString())
// });

// server.listen(8080);

