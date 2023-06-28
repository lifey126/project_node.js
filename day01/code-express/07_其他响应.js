const express = require('express');
const app = express();

app.get('/other-response', (req, res)=>{
    //跳转响应
    // res.redirect('http://atguigu.com');
    //下载响应
    // res.download(__dirname + '/package.json');
    //JSON响应
    // res.json({
    //     name:'星露谷',
    //     slogon:'早二晚十'
    // })
    //响应文件内容
    res.sendFile(__dirname + '/test.html')
})

app.listen(3000, ()=>{
    console.log('服务已经启动，端口3000正在监听中...');
})