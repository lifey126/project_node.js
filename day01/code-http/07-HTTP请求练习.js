const http = require('http');

const server = http.createServer((request, response) =>{
    //let method = request.method;
    response.setHeader('content-type', 'text/html;charset=utf-8');
    let {method} = request;
    let {pathname} = new URL(request.url, 'http://127.0.0.1');
    if(method === 'GET' && pathname === '/login'){
        response.end('登陆界面');
    }else if(method === 'GET' && pathname === '/reg'){
        response.end('注册页面');
    }else{
        response.end('Not Found');
    }
});

server.listen(9000,()=>{
    console.log('服务已经启动.. 端口9000监听中....');
});