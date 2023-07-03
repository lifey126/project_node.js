const express = require('express');
const cookieParser = require('cookie-parser')

const app = express();
app.use(cookieParser())

app.get('/set-cookie', (req, res)=>{
    //res.cookie('name', 'zhangsan'); //会在关闭浏览器的时候销毁
    res.cookie('name', 'lisi', {maxAge: 60 * 1000}); //设置生命周期
    res.cookie('theme', 'blue')
    res.send('home');
});

//删除cookie
app.get('/remove-cookie', (req, res)=>{
    res.clearCookie('name')
    res.send('删除成功')
})

//获取cookie
app.get('/get-cookie', (req, res)=>{
    console.log(req.cookies);
    res.send(`欢迎您， ${req.cookies.name}`)
})

app.listen(3000);