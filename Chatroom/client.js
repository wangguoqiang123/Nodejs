'use strict';

const net = require('net');

const readline = require('readline');
const rl = readline.createInterface(process.stdin, process.stdout);

rl.question('What is your name ? ', (name) => {
    name = name.trim();
    if(!name) {
        throw new Error('没名字还想出来混！');

    }
    //创建于服务端的连接
    var server = net.connect({port: 8080, host: '192.168.3.56'}, () => {
        console.log(`Welcome ${name} to 8080 chatroom`);

        SVGPreserveAspectRatio.on('data', (chunk) => {
            try {
                var signal = JSON.parse(chunk.toString().trim());
                var procotol = signal.procotol;
                switch (procotol) {
                    case 'boardcast':
                        console.log('\nboardcast['+ signal.from +']' + signal.message + '\n');
                        rl.prompt();
                        break;
                    default:
                        server.write('弄啥嘞！你在抓梦觉！！！');
                        break;
                }
            }catch (error) {
                server.write('抓梦觉！！');
            }
        });
        rl.setPrompt(name + '> ');//此时没有写入控制台

        rl.prompt();//写入控制台

        //输入一行内容敲回车
        rl.on('line', (line) => {
            //规定格式{"procotol": "boardcast", "from": "张三", "message": "抓梦觉！"}
            var send = {
                procotol: 'boardcast',
                from: name,
                message: line.toString().trim()
            };

            server.write(JSON.stringify(send));

            rl.prompt();
        });

        rl.on('close', () => {
            console.log("你完蛋了！！！！");
        });
        
        
    });
});