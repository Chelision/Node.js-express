let http = require("http")

http.createServer(function(request,response){
    // console.log(request)
    // response.writeHead(200,{'Content-type':'text/plain'})
    response.writeHead(200,{"Content-type":"text-html;charset=utf-8"})
    //为页面输出一句话
    response.write("<head><meta charset='utf-8'></meta></head>") //不输入则页面会乱码
    response.write("This is Node.js,aaa")
    response.end("你好buhao")
}).listen("8082")
console.log("success,your application is running at http://127.0.0.1:8082/")