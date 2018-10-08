'use strict';

var events = require('events');

var emitter = new events.EventEmitter();

//监听器1开启
emitter.on('someEvent', function (arg1, arg2) {
	console.log('listener1', arg1, arg2);
});

//监听器2开启
emitter.on('someEvent', function (arg1, arg2) {
	console.log('listener2', arg1, arg2);
});

emitter.emit('someEvent', 'arg1 参数', 'arg2 参数');