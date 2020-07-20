const fs = require('fs')

//读取流
/* let readStream = fs.createReadStream('./input.text')

let count = 0

let str = ''

readStream.on('data',strdata=>{
    str += strdata
    count++
})
readStream.on('end',()=>{
    console.log(count)
    // console.log(str)
}) */

//写入流
/* let str = ""
for(var i=0; i<500; i++){
    str += "我是一个文件读取流"
}
let writeStream = fs.createWriteStream('./output.txt')

writeStream.write(str,'UTF8')
//标记写入完成
writeStream.end() //此处加入该标记才能监听finish事件

writeStream.on('finish',()=>{
    console.log("写入完成")
}) */

//管道流
let readStream = fs.createReadStream('./abc.png')
let writeStream = fs.createWriteStream('./cba.png')

readStream.pipe(writeStream)