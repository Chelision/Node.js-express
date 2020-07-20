let fs = require('fs');
/* var http = require('http');
const { resolve } = require('path');
http.createServer(function (request, response) {
  response.writeHead(200, {'Content-Type': 'text/plain'});
  response.end('Hello World');
}).listen(8081); */


//创建html,css,js,assets目录,并且创建index.html文件
/* let mapDir = ['html','css','js','assets']
mapDir.forEach(item=>{
    fs.mkdir(`./${item}`,err=>{})
})
fs.writeFile('./index.html','',err=>{}) */
// fs.mkdir('./')
let dirArr = []
function getFileList(path){
    return new Promise(resolve=>{
        fs.readdir(path,(err,data) => {
            if(!err){
               resolve(data)
            } 
        })
    })
}
function isDir(path) {
    return new Promise(resolve=>{
        fs.stat(path, (err,data)=>{
            if(err){
                return false
            }
            if(data.isDirectory()){
                resolve(true)
            }
            else resolve(false)
        })
    })
}
async function isDirArr () {
    let mapArr = await getFileList('../demo04')
    for(let i=0; i<mapArr.length; i++){
        if(await isDir(`../demo04/${mapArr[i]}`)){
            dirArr.push(mapArr[i])
        }
    }
    /* for(let i = 0; i<data.length; i++){
        let b = await isDir(data[i])
        if(await isDir(data[i])){
            dirArr.push(data[i])
        }
    } */
    
    /* for(let i=0; i<mapArr.length; i++){
        console.log(mapArr[i])
        let b = await isDir(`../demo04/${mapArr[i]}`)
        if(b){
            dirArr.push(mapArr[i])
        }
    } */
    // console.log(dirArr)
    // return cashArr
    // fs.readdir
    /* fs.readdir('../demo04',async (err,data)=>{
        if(!err){
            for(let i = 0; i<data.length; i++){
                let b = await isDir(data[i])
                if(await isDir(data[i])){
                    dirArr.push(data[i])
                }
            }
        }
        console.log(dirArr)
    }) */
    console.log(dirArr)
}
// isDirArr()
isDirArr()
// isDir('../demo04')