var http = require('http');
let { linkUrl }= require('./tool/tool')
console.log(linkUrl("aab"))
// console.log(linkUrl("zhangsan"))
http.createServer(function (request, response) {
  response.writeHead(200, {'Content-Type': 'text/plain'});
  response.end('Hello World');
}).listen(8081);

console.log('Server running at http://127.0.0.1:8081/');