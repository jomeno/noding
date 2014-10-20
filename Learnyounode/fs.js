var fs = require('fs');
var path = process.argv[2];
var content = fs.readFileSync(path, 'utf8');
//var str = content.toString();
var nlCount = content.split('\n').length - 1;
console.log(nlCount);