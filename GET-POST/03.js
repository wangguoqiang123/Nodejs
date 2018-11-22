'use strict';

//获取 POST 请求内容
var http = require("http");
var url = require("url");
var util = require("util");

http.createServer((req, res) => {
    //定义一个post变量，用于暂存请求体信息
    var post = '';

    //通过req的data事件监听函数，每当接受到请求体数据，就累加到data中
    req.on('data', (chunk) => {
        post += chunk;
    });

    //在end事件触发后，通过querystring.parse将post解析为真正的POST请求格式，
    //然后向客户端返回
    req.on('end', () => {
        post = querystring.parse(post);
        res.end(util.inspect(post));
    });

}).listen(3000);