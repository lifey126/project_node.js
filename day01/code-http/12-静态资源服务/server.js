const http = require('http');
const fs = require('fs');
const path = require('path');

let mimes = {
    html:'text/html',
    css:'text/css',
    js:'text/javascript',
    png:'image/png',
    jpg:'image/jpg',
    gif:'image/gif',
    mp4:'video/mp4',
    mp3:'audio/mpeg',
    json:'application/json'
};

const server = http.createServer((request, response) => {
    if(request.method !== 'GET'){
        response.statusCode = 405;
        response.end('<h1>405 Method Not Allowed</h1>');
        return;
    }
    //获取请求url的路径
    let {pathname} = new URL(request.url, 'http://127.0.0.1');
    let root = __dirname + '/page';
    //拼接路径
    let filePath =  root + pathname;
    //读取文件 fs 异步 API
    fs.readFile(filePath,(err,data)=>{
        if(err){
            //设置字符集
            response.setHeader('content-type', 'text/html;charset=utf-8');
            //判断错误代号
            switch(err.code){
                case 'ENOENT':
                    response.statusCode = 404;
                    response.end('<h1>404 Not Found</h1>');
                case 'EPERM':
                    response.statusCode = 403;
                    response.end('<h1>403 Forbidden</h1>');
                default:
                    response.statusCode = 500;
                    response.end('<h1>Internal Server Error</h1>');
            }

            return;
        }
        //获取文件的后缀名
        let ext = path.extname(filePath).slice(1);
        //获取对应的类型
        let type = mimes[ext];
        if(type){
            if(ext === 'html'){
                response.setHeader('content-type', type + ';charset=utf-8');  
            }else{
                response.setHeader('content-type', type);  
            }               
        }else{
            response.setHeader('content-type', 'application/octetstream');
        }
        //响应文件内容
        response.end(data);
    })
});

server.listen(9000, ()=>{
    console.log('服务已经启动....');
})