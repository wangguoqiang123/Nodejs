'use strict';

function Hello(){
    var name;
    this.setName = function (styName) {
        name = styName;
    };
    this.sayHello = function () {
        console.log('Hello' + name);
    };
};

module.exports = Hello;