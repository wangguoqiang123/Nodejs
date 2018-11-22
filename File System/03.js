'use strict';

var fs = require("fs");

console.log("准备读取文件！");
fs.stat('input.txt', (err, stats) => {
    if(err) {
        throw err;
    }
    console.log(stats);
    console.log("读取文件成功！");


    //检测文件类型
    console.log("是否问文件(isFile) ? " + stats.isFile());
    console.log("是否为目录(isDirectory) ? " + stats.isDirectory());
});