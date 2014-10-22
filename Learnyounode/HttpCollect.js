var http = require('http');
var url = process.argv[2];
var collected = '';
var collectedCount = 0;
http.get(url, function(response){
response.setEncoding('utf8');
response.on('data', function(chunk){

if(collectedCount < 2){

collected = collected + '\n' + chunk;
collectedCount += 1;

}
collected = collected.trim();

}).on('error', function(e){
console.log("an error occurred : " + e);
}).on('end', function(){
console.log(collected);

});



});