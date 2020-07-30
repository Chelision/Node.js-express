function checkminName(name){
    let mapData = {
        ".css": "text/css",
        ".js": "text/javaScript",
        ".html": "text/html"
    }
    return mapData[name] || "text/html" 
}
module.exports = {
    checkminName
}