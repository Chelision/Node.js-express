/* 
    1、fs.stat 检测是文件还是目录
    2、fs.mkdir 创建目录
    3、fs.writeFile 创建写入文件
    4、fs.appendFile 追加文件
    5、fs.readFile读取文件
    6、fs.rename重命名
    7、fs.rmdir 删除目录
    8、fs.readdir读取目录
    9、fs.unlink 删除文件
*/
const fs = require("fs")
//传入两个参数，第一个是路径，第二个是回调，回调里面的第一个参数传入err报错信息，第二个传出返回的对象，通过返回对象的API来判断是文件还是目录
/* fs.stat('../demo03',(err, res)=>{
    if(err){
        console.log("路径错误") ;
        return false ;
    }
    console.log(res.isFile()) ; // 是文件 
    console.log(res.isDirectory()) ;// 是目录
}) */

//传入两个参数，第一个是路径，第二个是一个回调
//重复创建目录会报错，但是重复创建文件不会报错，而且会替换文件的内容
/* fs.mkdir('./css',err=>{
    if(err){
        console.log(err)
        return false
    }
    console.log("创建成功")
}) */
//重复创建会替换文件的内容
//传入以下参数
/* 
    filename () 文件名称
    data    (String | Buffer) 将要写入的内容,可以使字符串或buffer数据
    options (Object)    option数组对象,包含:

        .encoding   (String) 可选值,默认'utf-8',当data使用buffer时，该值为

        .mode       (Number)    文件读写权限，默认值438

        .flag       (String)    默认值'w'

        callback{Function}      回调，传入一个参数err

*/
/* fs.writeFile("./css/index.css",'*{padding:0;margin:0}',err=>{
    if(err){
        console.log("创建失败") ;
        console.log(err) ;
        return false
    }
    console.log("创建成功")
}) */

//如果不存在则会创建文件，如果存在则会追加
/* fs.appendFile("./css/index.css",'*{color:red}',err=>{
    if(err){
        console.log("创建失败") ;
        console.log(err) ;
        return false
    }
    console.log("创建成功")
}) */
/* fs.readFile('./css/index.css',(err,res)=>{
    if(err){
        return false
    }
    console.log(res.toString()) //此处的res是一个Buffer十六进制的，因此要将其装换为String类型
}) */

//读取目录,传入两个参数，第一个是路径，第二个是回调函数，回调函数里面可以返回目录下的文件列表
/* fs.readdir('./css',(err,data)=>{
    if(!err){
        console.log(data)
    }
}) */
//fs.rename 重命名: 功能:1、表示重命名 2、表示移动文件
// fs.rename('./css/common.css','./common/index.css',err=>{})

// fs.rmdir  删除目录,如果目录下有文件，那么需要将目录下面的所有文件都删除。通过fs.readdir()读取文件列表，然后遍历去删除文件
/* fs.rmdir('path',err=>{})  */
//fs.unlink 删除文件
/* fs.unlink('path',err=>{}) */
fs.writeFile('./practice.js',"",err=>{})