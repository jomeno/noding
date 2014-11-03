var fs = require('fs');
var path = 'C:/Users/Jomeno/Google Drive/Capehi/RadialCirle/data.log';
var clc = require('cli-color');

var net = require('net');

var bf = null;
var lines = [];
var logCount = 0;
console.log('\nWELCOME TO RADIAL CIRCLE METOCEAN\n');
console.log(clc.yellow('Metocean Server Started'));
console.log(now());

var server = net.createServer(function(socket){
	bf = fs.readFileSync(path);
	lines = bf.toString().split('\n');
	var data = lines[lines.length - 2];

	socket.end(data.toString())
});

server.listen(8080);

function now(){
	return new Date();
}