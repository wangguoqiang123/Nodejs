'use strict';

var fs = require("fs");

console.log("准备写入文件");
fs.writeFile('./input.txt', 'Hello.txt', 'utf8', (err) => {
    if(err) {
        throw err;
    }
    console.log('数据写入成功');
    fs.readFile('./input.txt', 'utf8', (err, data) => {
        if (err) {
            throw err;
        }
        console.log('异步读取文件读取成功：' + data.toString());
    });
});