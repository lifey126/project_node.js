/*
    GET /login 显示表单网页
    POST /login 获取表单中的【用户名】和【密码】
*/
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

//解析JSON格式的请求体的中间件
//const jsonParser = bodyParser.json()

//解析queryString格式请求体的中间件
const urlencodedParser = bodyParser.urlencoded({ extended: false})

app.get('/login', (req, res)=>{
    res.sendFile(__dirname + '/11_form.html');
})

app.post('/login', urlencodedParser, (req, res) =>{
    console.log(req.body);
    res.send('获取表单');
})

app.listen(3000, ()=>{
    console.log('server is running')
})
