var sp = require('serialport');

 sp.list(function(err, ports){

	 console.log('\nShowing available serial ports...\n');
	 ports.forEach(function(port){
		 console.log(port.comName);
		 console.log(port.pnpId);
		 //console.log(port.manufacturer);
	
	 });	

 });

var SerialPort = require('serialport').SerialPort
var sp2 = new SerialPort('COM4',{ baudrate: 9600}, false);
sp2.open(function(error){
	if(error){
		console.log('failed to open : ' + error)
	}else{
		console.log('opening...');
		sp2.on('data', function(data){
			console.log('data received : ' + data)
		})
	}
})