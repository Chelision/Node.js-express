let http = require("http")
let url = require("url")
http.createServer(function(request,response){
    response.writeHead(200,{"Content-type":"text-html;charset=utf-8"})
    //为页面输出一句话
    response.write("<head><meta charset='utf-8'></meta></head>") //不输入则页面会乱码
    // let obj = url.parse("http://baidu.com?name=zhangsan&age=20",true).query
    let obj = url.parse(request.url,true).query
    if(request.url != "./favion.ico"){ //在此处进行怕安段，因为图标会进行请求
        console.log(`姓名是:${obj.name}--年龄是:${obj.age}`)
        response.write(`姓名是:${obj.name}--年龄是:${obj.age}`)
        response.end()
    }    
}).listen("8082")
console.log("success,your application is running at http://127.0.0.1:8082/")