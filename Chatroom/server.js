'use strict';

//建立一个Socket服务端
const net = require("net");

//用于储存所有连接
var clients = [];

var server = net.createServer((socket) => {

    //哪个客户端与我连接socket就是谁
    clients.push(socket);

    console.log(`Welcome $(socket.remoteAddress) to 8241 chatroom 当前在线${clients.length}`);

    //触发多次
    socket.on('data', clientData).on('error', (err) => {
        clients.splice(clients.indexOf(socket), 1);
        console.log(`${socket.remoteAddress} 下线了， 当前在线${clinets.length}`);

    });
});

//广播消息
function boardcast(signal) {
    //肯定有用户名和消息
    var username = signal.name;
    var message = signal.message;
    //我们要给客户端发的东西
    var send = {
        procotol : signal.procotol,
        from: username,
        message: message
    };
    //广播消息
    clients.forEach(client => {
        client.write(JSON.stringify(send));
    });
}

//有任何消息都会触发
function clientData(chunk) {
    try{
        var signal = JSON.parse(chunk.toString().trim());
        var procotol = signal.procotol;
        switch (procotol) {
            case 'boardcast':
                boardcast(signal);
                break;
        default:
            socket.write('弄啥勒！你要我干啥？');
            break;
        }
    } catch (error) {
        socket.write('弄啥嘞！');
    }
}

var port = 8080;
server.listen(port, (err) => {
    if(err) {
        console.log("端口被占用");
        return false;
    }
    console.log(`服务器正常运行监听【${port}】端口`);
})



