'use strict';

var fs = require("fs");
var buf = new Buffer.alloc(1024);

//fd - 通过 fs.open() 方法返回的文件描述符。

console.log("准备打开文件！");
fs.open('./input.txt', 'r+', (err, fd) => {
    if(err) {
        throw err;
    }
    console.log("文件打开成功！");
    console.log("准备读取文件!");
    fs.read(fd, buf, 0, buf.length, 0, (err, bytes) => {
        if(err) {
            console.log(err);
        }
        //仅输出读取文件
        if(bytes > 0) {
            console.log(buf.slice(0, bytes).toString());
        }

        //关闭文件
        fs.close(fd, (err) => {
            if(err) {
                console.log(err);
            }
            console.log("文件关闭成功！");
        });
    });
});