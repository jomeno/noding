var mymodule = require('./mymodule');

var dir = process.argv[2];
var ext = process.argv[3];

var list = mymodule(dir, ext, function getFile(err, data){

if(err){
console.log('an error occurred');
}else{

data.forEach(function(file){
console.info(file);
});


}

});



