'use strict';

var fs = require("fs");

fs.readdir("/Users/pengyuyan/Desktop/Nodejs/Callback",(err, files) => {
    if(err) {
        throw err;
    }
    files.forEach( (file) => {
        console.log( file );
    });
});

//这里注意斜杠的正反