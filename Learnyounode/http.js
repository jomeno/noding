var http = require('http');
var url = process.argv[2];
console.log(url);

var result = http.get(url);
console.log(result);