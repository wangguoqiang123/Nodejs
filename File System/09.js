'use strict';

var fs = require("fs");

console.log("创建目录 /test");
fs.mkdir("/test", (err) => {
    if(err) {
        throw err;
    }
    console.log("目录创建成功。");
});