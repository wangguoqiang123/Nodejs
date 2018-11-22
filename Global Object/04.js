'use strict';

process.on('exit', function(code) {
    setTimeout(function() {
        console.log("该代码永远不执行");
    },0);

    console.log('退出码为：', code);
});
console.log("程序执行结束");
