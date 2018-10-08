'use strict';

var events = require('events');

var eventEmitter = new events.EventEmitter();

//监听器1
var listener1 = function () {
	console.log('监听器1开启');
}

//监听器2
var listener2 = function () {
	console.log('监听器2开启');
}

//绑定connection事件,处理函数为listener1
eventEmitter.addListener('connection', listener1);

//绑定connection事件，处理函数为listener2
eventEmitter.on('connection', listener2);

var eventListers = eventEmitter.listenerCount('connection');
console.log(eventListers + " 个监听器连接事件。");

//触发connection事件
eventEmitter.emit('connection');

eventEmitter.removeListener('connection', listener1);
console.log("listener1 不受监听");

eventEmitter.emit('connection');

eventListers = eventEmitter.listenerCount('connection');
console.log(eventListers + " 个监听器连接事件。");

console.log("程序执行完毕！！！！！！！！！");


