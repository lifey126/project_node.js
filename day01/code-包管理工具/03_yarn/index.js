const http = require('http');

const server = http.createServer((request, response)=>{
    response.setHeader('content-type', 'text/html;charset=utf-8');
    response.end('你好 Hello HTTP');
});

server.listen(9000, ()=>{
    console.log('服务器已启动...');
});