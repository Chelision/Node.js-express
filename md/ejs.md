初识EJS模板引擎
    EJS是后台模板,可以把我们数据库和文件读取得到数据显示到HTML页面上。它是一个第三方模块，需要通过npm安装

    npm/cnpm install ejs --save

    Node.js中使用:
        ejs.renderFile(filename,data,options,function(err,str){
            //str => Rendered HTML string
        })


Get 、Post

超文本传输协议(http)的设计目的是保证客户端机器与服务器之间的通信。
在客户端和服务器之间进行请求-响应时，嘴常被用的两种方法就是GET和POST。

GET从指定的资源请求数据。(一般用于获取数据)
POST-向指定的资源提交要被处理的数据。(一般用于提交数据)

获取GET传值:

    var urlinfo = url.parse(req.url,true);
    urlinfo.query;

获取POST传值：

    var postData = "";
    //数据块接收中
    req.on('data',function(postDataChunk){
        postData += postDataChunk;
    })
    req.on("end",function(){
        try{
            postData = JSON.parse(postData);
        }
        catch(err){
            req.query = postData;
            console.log(queryString.parse(postData))
        }
    })