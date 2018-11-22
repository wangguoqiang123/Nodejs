'use strict';

var fs = require("fs");
console.log("准备删除目录！/test");
fs.rmdir("/test", (err) => {
    if(err) {
        throw err;
    }
    console.log("test目录已经删除！");
})