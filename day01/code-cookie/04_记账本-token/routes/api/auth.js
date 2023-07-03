const UserModel = require('../../models/UserModel')
const md5 = require('md5');
const jwt = require('jsonwebtoken');
const {secret} = require('../../config/config')
var express = require('express');
var router = express.Router();

//登录操作
router.post('/login', async (req, res)=>{
    //获取用户名和密码
    let {username, password} = req.body;
    //查询数据库
    const data = await UserModel.findOne({username:username, password: md5(password)});
    try{
        if(!data){
            return res.json({
                code: '2001',
                msg: '账号或者密码错误',
                data: null
            })
        }
        let token = jwt.sign(
            {
                username: data.username,
                _id: data._id
            }, secret, {
                expiresIn: 60 * 60 * 24 * 7
            }
        );
        //响应token
        res.json({
            code: '0000',
            msg: '登录成功',
            data: token
        })
    }catch(err){
        res.json({
            code: '2001',
            msg: '数据库读取失败',
            daa: null
        })
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
