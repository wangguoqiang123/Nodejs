'use strict';

var events = require('events');

var eventEmitter = new events.EventEmitter();

var listener1 = function () {
	console.log('监听器1开启');
}

var listener2 = function () {
	console.log('监听器2开启');
}

//绑定事件处理程序
eventEmitter.addListener('connection', listener1);

eventEmitter.on('connection', listener2);

//查看监听器数量
var Listeners = eventEmitter.listenerCount('connection');
console.log(Listeners + ' 个监听器连接。');

eventEmitter.emit('connection');

eventEmitter.removeListener('connection', listener1);
console.log('监听器1关闭');

eventEmitter.emit('connection');

Listeners = eventEmitter.listenerCount('connection');
console.log(Listeners + ' 个监听器连接。');
