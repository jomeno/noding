var fs = require('fs');
var path = process.argv[2];
fs.readFile(path, 'utf8',function done(err, data){
if(err == null){
var content = data;//.toString();
var lines = content.split('\n').length - 1;
console.log(lines);
}else{
console.log('Error occured');
}
});

