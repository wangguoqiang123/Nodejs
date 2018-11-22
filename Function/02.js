'use strict';

function execute (someFunction, value) {
    someFunction(value);
};

execute(function(word){console.log(word)}, 'Hello');

//function(word){console.log(word)} === someFunction
//Hello === value
//someFunction(value) === someFunction(Hello)