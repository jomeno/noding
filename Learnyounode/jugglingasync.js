var http = require('http');
var bl = require('bl');
var urls = [process.argv[2],process.argv[3],process.argv[4]];
var dataCollection = [];


http.get(urls[0],function(response){
response.pipe(bl(function(err, data){
dataCollection[dataCollection.length] = data.toString();
}));
response.on('end', function(){
showResult(dataCollection);
});
});

 http.get(urls[1],function(response){
 response.pipe(bl(function(err, data){
 dataCollection[dataCollection.length] = data.toString();
 }));
 response.on('end', function(){
 showResult(dataCollection);
 });
});

http.get(urls[2],function(response){
response.pipe(bl(function(err, data){
dataCollection[dataCollection.length] = data.toString();
}));
response.on('end', function(){
showResult(dataCollection);
});
});


function showResult(arr){
if(isReady(arr)){
for(var i = 0; i < arr.length; i++){
console.log(arr[i]);
}
}
}

function isReady(arr){
return arr.length == 3;
}