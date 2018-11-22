'use strict';

var fs = require("fs");
var buf = new Buffer.alloc(1024);

console.log("准备打开文件！");
console.log("准备读取文件！");
fs.open('./input.txt', 'r+', (err, fd) => {
    if(err) {
        throw err;
    }

    console.log("文件打开成功！");
    console.log("截取了10字节后的文件内容！");

    //截取文件
    fs.ftruncate(fd, 10, (err) => {
        if(err) {
            throw err;
        }
        console.log("文件截取成功！");
        console.log("读取相同文件！");
        fs.read(fd, buf, 0, buf.length, 0, (err, bytes) => {
            if(err) {
                throw err;
            }

            //仅输出读取的字节
            if(bytes > 0){
                console.log(buf.slice(0, bytes).toString());
            }


            //关闭文件
            fs.close(fd, (err) => {
                if(err) {
                    throw err;
                }
                console.log("文件关闭成功！");
            });
        });
    });

});