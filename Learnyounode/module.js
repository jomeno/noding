var mymodule = require('./mymodule');
var path = require('path');

var dir = process.argv[2];
var ext = process.argv[3];

mymodule(dir, ext, function getFile(err, data){

if(err){
console.log('an error occurred');
}else{

var filtered = data.filter(function acc(file){
return path.extname(file) == '.'+ext;
});

for(var i = 0; i < filtered.length ; i++){
console.log(filtered[i]);
}

}


});