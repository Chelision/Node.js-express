var http = require('http');
var fs = require('fs');
const { checkminName } = require('./module/common');
const path = require('path'); 
const url = require('url')


http.createServer(function (request, response) {
    let pathname = url.parse(request.url).pathname
    pathname = pathname == '/' ? "index.html" : request.url
    let cashMinName = path.extname(pathname) //获取文件后缀名
    // cashMinName = url.parse(cashMinName).pathname
    if(pathname !== '/favicon.ico'){
        fs.readFile(`./static/${pathname}`,(err,data)=>{
            response.writeHead(200, {'Content-Type': 'text/html;charset=utf8'});
            if(err){
                response.end("404,你要访问  的页面不存在")
                return false
            }
            response.writeHead(200, {'Content-Type': `${checkminName(cashMinName)};charset=utf8`});
            response.end(data)
        })
    }
    /* response.writeHead(200, {'Content-Type': 'text/html;charset=utf8'});
    response.end('Hello World'); */
}).listen(3000);

console.log('Server running at http://127.0.0.1:3000/');