'use strict';

var events = require('events');

//创建eventEmitter对象
var evnetEmitter = new events.evnetEmitter();

//绑定事件及事件处理程序
eventEmitter.on('eventName', evnetHandler);

//触发事件
eventEmitter.emit('eventName');