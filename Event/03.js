'use strict';

var events = require('events');

var event = new events.EventEmitter();

//event 对象注册了事件 some_event 的一个监听器
event.on('some_event', function () {
	console.log('some_event 事件触发');
});

//事件触发
setTimeout(function () {
	//emit方法触发事件
	event.emit('some_event');
}, 1000);


/*EventEmitter 的核心就是事件触发与事件监听器功能的封装*/