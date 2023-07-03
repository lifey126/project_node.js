const express = require('express');
const session = require('express-session');
const MongoStore = require('connect-mongo');

const app = express();

//设置session的中间件
app.use(session({
    name: 'sid', //设置cookie的name
    secret: 'atguuigu', //参与加密的字符串
    saveUninitialized: false, //是否为每次请求都设置一个cookie用来存储session的id
    resave: true, //是否在每次请求时重新保存session
    store: MongoStore.create({
        mongoUrl: 'mongodb://127.0.0.1:27017/bili' //数据库的连接配置
    }),
    cookie: {
        httpOnly: true, //开启后前端无法通过JS操作
        maxAge: 1000 * 60 * 5 //控制sessionID的过期时间
    },
}))

//首页路由
app.get('/', (req, res)=>{
    res.send('home')
})

//登录
app.get('/login', (req, res)=>{
    if(req.query.username === 'admin' && req.query.password === 'admin'){
        req.session.username = 'admin';
        req.session.uid = '258aefccc';
        res.send('登录成功')
    }else{
        res.send('登录失败')
    }
})

//读取
app.get('/cart', (req, res)=>{
    if(req.session.username){
        res.send(`购物车页面， 欢迎您， ${req.session.username}`)
    }else{
        res.send('您还没有登录')
    }
})

//销毁
app.get('/logout', (req, res)=>{
    req.session.destroy(()=>{
        res.send('登出成功')
    })
})

app.get('/', (req, res)=>{
    res.send('home');
});

app.listen(3000);