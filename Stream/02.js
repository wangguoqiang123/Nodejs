'use strict';

var fs = require('fs');

var data = '我有一只小毛驴，我从来也不骑.';

//创建写入流
var writerStream = fs.createWriteStream('output.txt');

//使用UTF8写入数据
writerStream.write(data,'UTF8');

//标记文件末尾
writerStream.end();

//处理流事件 -->data , end, and error
writerStream.on('finish', function () {
    console.log("写入完成");
});

writerStream.on('error', function(err) {
    console.log(err.stack);
});

console.log("程序执行完成");