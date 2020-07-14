
function linkUrl(apiParams){
    return `http://www.baidu.com?${apiParams}`  
}
let obj = {
    get: function(){
        console.log("获取数据")
    },
    post: function(){
        console.log("提交数据")
    }
}
// exports.linkUrl = linkUrl
module.exports = {
    linkUrl,
    obj
}
