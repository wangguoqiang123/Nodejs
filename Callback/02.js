'use strict';
/*非阻塞实例*/
var fs = require("fs");

fs.readFile('input.txt', function (err, data) {
	if(err) {
		console.log(err);
	}
	console.log(data.toString());
});

console.log("程序执行结束");

/*这种方法实现非阻塞操作，执行回调，等于往事件队列里放入一个执行的事件，不用等待执行完才执行下一个*/