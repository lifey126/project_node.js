var express = require('express');
var router = express.Router();

const UserModel = require('../../models/UserModel')
const md5 = require('md5');

//注册
router.get('/reg', (req, res)=>{
    //响应HTML内容
    res.render('auth/reg');
});

//注册用户
// 注册用户
router.post('/reg', async (req, res) => {
    try {
      const { username, password } = req.body;
  
      // 检查必需字段
      if (!username || !password) {
        res.status(400).send('缺少必需字段');
        return;
      }
  
      // 创建用户
      await UserModel.create({...req.body, password: md5(req.body.password)});
      res.render('success', { msg: '注册成功', url: '/login' });
    } catch (err) {
      console.log(err);
      res.status(500).send('注册失败，请稍后再试');
    }
  });

//登录页面
router.get('/login', (req, res)=>{
    //响应HTML内容
    res.render('auth/login');
});

//登录操作
router.post('/login', async (req, res)=>{
    //获取用户名和密码
    let {username, password} = req.body;
    //查询数据库
    const data = await UserModel.findOne({username:username, password: md5(password)});
    try{
        if(!data){
            return res.send('账号或者密码错误')
        }
        //写入session
        req.session.username = data.username;
        req.session._id = data._id;
        //响应HTML内容
        res.render('success', {msg:'登录成功', url:'/account'});
    }catch(err){
        res.status(500).send('登录，请稍后再试')
        return;
    }

})

//退出登录
router.get('/logout', (req, res)=>{
    //销毁session
    req.session.destroy(()=>{
        res.render('success', {msg:'退出成功', url:'/login'});
    })
})
  

module.exports = router;
