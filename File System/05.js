'use strict';

var fs = require("fs");

var buf = new Buffer.alloc(1024);

console.log("准备打开已存在文件！");
fs.open('./input.txt', 'r+', (err, fd) => {
    if(err) {
        throw err;
    }
    console.log("文件打开成功！");
    console.log("准备读文件！");
    fs.read(fd, buf, 0, buf.length, 0, (err, bytes) => {
        if(err) {
            throw err;
        }
        console.log(bytes + " 字节读取");

        if(bytes > 0) {
            console.log(buf.slice(0, bytes).toString());
        }
    });
});