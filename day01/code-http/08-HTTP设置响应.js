const http = require('http');

const server = http.createServer((request, response) =>{
    //1.设置响应状态码
    // response.statusCode = 203;
    // response.statusCode = 404;
    //2.响应状态的描述
    //response.statusMessage = 'obe';
    //3.响应头
    // response.setHeader('content-type', 'text/html;charset=utf-8');
    // response.setHeader('myServer', 'node-test');
    // response.setHeader('test', ['a','b','c']);
    //4.响应体
    response.write('love');
    response.write('love');
    response.write('love');
    response.write('love');
    response.end();
});

server.listen(9000,()=>{
    console.log('服务已经启动..');
});