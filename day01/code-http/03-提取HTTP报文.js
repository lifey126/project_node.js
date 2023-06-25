//1.导入http模块
const http = require('http');

//2.创建服务对象
const server = http.createServer((request, response) => {
    response.setHeader('content-type', 'text/html;charset=utf-8');

    //response.end('Hello HTTP Server'); //设置响应体
    
    // console.log(request.method); //获取请求方法
    // console.log(request.url); //只包含url中的路径与查询字符串
    // console.log(request.httpVersion); //获取HTTP协议的版本号
    // console.log(request.headers); //获取HTTP的请求头
    response.end('你好'); //设置响应体
});

//3.监听端口，启动服务
server.listen(9000, () => {
    console.log('服务已经启动...');
});