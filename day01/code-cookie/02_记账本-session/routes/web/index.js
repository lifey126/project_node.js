var express = require('express');
var router = express.Router();

const id = require('shortid');
const moment = require('moment');
const AccountModel = require('../../models/AccountModel');
const mongoose = require('mongoose');

//导入中间件，检测登录
let checkLoginMiddleware = require('../../middlewares/checkLoginMiddleware')

//添加首页路由规则
router.get('/', (req,res)=>{
  //重定向 /account
  res.redirect('/account');
})

/* 记账本列表 */
router.get('/account', checkLoginMiddleware, async function(req, res, next) {
  try {
    const accounts = await AccountModel.find().sort({time:-1});
    res.render('list', {accounts: accounts, moment:moment});
    } catch (err) {
      console.log(err);
      res.status(500).send('读取失败');
    }
});

//添加记录
router.get('/account/create', checkLoginMiddleware, function(req, res, next) {
  res.render('create');
});

//新增记录
router.post('/account', checkLoginMiddleware, async (req, res)=>{
  //生成id
  let id = shortid.generate();

  //插入数据库
  try {
    const data = await AccountModel.create({
      ...req.body,
      time: moment(req.body.time).toDate()
    });
    console.log(data);

    res.render('success', {msg:'添加成功!', url:'/account'})
    } catch (err) {
      console.log(err);
      res.status(500).send('插入失败');
    }
})

//删除记录
router.get('/account/:id', checkLoginMiddleware, async (req, res)=>{
  let id = req.params.id;
  try {
    await AccountModel.deleteOne({_id:id});
    res.render('success', {msg:'删除成功!', url:'/account'})
    } catch (err) {
      console.log(err);
      res.status(500).send('读取失败');
    }
})

module.exports = router;
