'use strict';

process.stdout.write("Hello World!" + "\n");

process.argv.forEach(function(val, index, array) {
    console.log(index + ': ' + val);
});


console.log(process.execPath);


console.log(process.platform);

console.log(process.memoryUsage());