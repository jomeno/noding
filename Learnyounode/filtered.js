var fs = require('fs');
var path = require('path');

var dir = process.argv[2];
var ext = '.' + process.argv[3];

fs.readdir(dir, function show(err, list){
if(err == null){
var filtered = list.filter(function gete(file){
return path.extname(file) == ext;
});

list = filtered;
for(var i=0; i < list.length; i++){
console.log(list[i]);
}
}
else{
console.log('an error occurred');
}

});

