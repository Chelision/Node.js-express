
//判断服务器上有没有upload目录。如果没有则创建这个目录，如果有则不作任何操作
// import { mkdirp } from 'mkdirp'
const mkdirp = require('mkdirp')
const fs = require('fs')
const { resolve } = require('path')
// fs.writeFile("./upload/abc.txt","asd",err=>{ console.log(err)})
//方法1、直接执行创建，如果有目录，再执行目录会进行报错，而不会创建，这里可以用try catch来抛出异常

/* fs.mkdir('./upload',err=>{}) */

//方法2 老老实实判断

/* fs.stat('./upload',(err,data)=>{
    if(err){
        fs.mkdir('./upload',err=>{console})
        return false
    }
    if(data.isDirectory()){
        console.log("路径已经存在")
        return false
    }
    if(data.isFile()){
        fs.unlink('./upload',err=>{})
    }
    fs.mkdir('./upload',err=>{})
}) */
/* mkdirp('./uploadDir/opload/abc.jpg').then(res=>{
    console.log(res)
}) */

//在www目录下面有images css js 以及index.html,找出wwwroot目录下面的所有目录，然后放在一个数组中
/* fs.mkdir('./www',err=>{})
let mapData = ['css','js','img']
mapData.forEach(item=>{
    fs.mkdir(`./www/${item}`,err=>{})
})
fs.writeFile('./www/index.html','',err=>{}) */

let directionArr = []
fs.readdir('./www', (err, data) => {
    if (!err) {
        if (Object.prototype.toString.call(data).indexOf('Array') !== -1) {
            let tempArr = []
            let promiseAll = []
            if (data.length !== 0) {
            data.forEach(item=>{
                promiseAll.push(new Promise(resolve=>{
                    fs.stat(`./www/${item}`,(err,data2)=>{
                        if(data2.isDirectory()){
                            tempArr.push(item)
                        }
                    })
                }))
            })
            Promise.all([...promiseAll]).then(res=>{
                console.log(tempArr)
            })

                /* new Promise(resolve => {
                    (function getDir(val) {
                        if (val === data.length) {
                            resolve(tempArr)
                            return
                        }
                        fs.stat(`./www/${data[val]}`, (err, item) => {
                            if (item.isDirectory()) {
                                tempArr.push(data[val])
                            }
                            getDir(val + 1)
                        })
                    })(0)
                }).then(res=>{
                    console.log(res)
                }) */
            }
        }
        // console.log(typeof data)
    }
})
