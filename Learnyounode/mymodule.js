module.exports = function mymodule(dir, ext, callback){
var fs = require('fs');

fs.readdir(dir, function rd(err, data){
if(err){
return callback(err);
}else{
return callback(null, data);
}

});



}