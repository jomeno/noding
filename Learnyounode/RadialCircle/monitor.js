var fs = require('fs');
var path = 'C:/Users/Jomeno/Google Drive/Capehi/RadialCirle/data.log';
var clc = require('cli-color');

var bf = fs.readFileSync(path);
var lines = bf.toString().split('akintayo');
var logCount = 0;

console.log(clc.red('This will be red'));

var intervalId = setInterval(function(){
	// if(logCount > 5){
		// console.log('\033[2J');
		// logCount = 0;
	// }
	
	console.log(lines[1]);
	logCount++;
}, 3000);

// for(var i = 1; i < lines.length; i++){
	// console.log(lines[i])
// }