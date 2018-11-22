'use strict';

var util = require('util');

//util.inspect
function Person() {
    this.name = 'byvoid';
    this.toString = function () {
        return this.name;
    };
}
var obj = new Person();
console.log(util.inspect(obj));
console.log(util.inspect(obj, true));

//util.isArray(object)
util.isArray([]);

util.isArray(new Array);

util.isArray({});

//util.isRegExp(object)
//如果给定的参数 "object" 是一个正则表达式返回true，否则返回false。
util.isRegExp(/some regexp/)
//true

util.isRegExp(new RegExp('another regexp'))
//true

util.isRegExp({})
//false


//util.isData(boject)
//如果给定参数是日期返回true，否则返回false
util.isDate(new Date())
//true

util.isDate(Date())
//true

util.isDate({})
//false

//util.isError(object)
//如果给定的参数 "object" 是一个错误对象返回true，否则返回false
util.isError(new Error())

util.isError(new TypeError())

util.isError({name: 'Error', message: 'an error occurred'})
//false