const jwt = require('jsonwebtoken')
const {secret} = require('../config/config')
module.exports = (req, res, next) =>{
    //获取token
    let token = req.get('token');
    //判断
    if(!token){
      return res.json({
        code: '2003',
        msg: 'token缺失',
        data: null
      })
    }
      //校验token 
      jwt.verify(token, secret, async (err, data)=>{
        //检验token是否正确
        if(err){
          return res.json({
            code: '2004',
            msg: 'token校验失败',
            data: null
          })
        }
        //保存用户信息
        req.user = data;
        next();
      })
  }