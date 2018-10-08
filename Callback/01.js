'use strict';
/*阻塞实例*/

var fs = require('fs');

var data = fs.readFileSync('input.txt');

console.log(data.toString());
console.log("程序执行完成");

/*这种方式必须要先督导文件才能往下执行，否则一直等待*/
