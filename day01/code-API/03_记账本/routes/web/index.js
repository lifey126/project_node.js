var express = require('express');
var router = express.Router();
// //导入lowdb
//const low = require('lowdb')
// const FileSync = require('lowdb/adapters/FileSync');
// const shortid = require('shortid');
// const adapter = new FileSync(__dirname + '/../data/db.json');
// //获取db对象

//const db = low(adapter);
const id = require('shortid');
const moment = require('moment');
const AccountModel = require('../../models/AccountModel');
const mongoose = require('mongoose');

/* 记账本列表 */
router.get('/account', async function(req, res, next) {
  // //获取所有的账单信息
  // let accounts = db.get('accounts').value();
  // console.log(accounts);
  try {
    const accounts = await AccountModel.find().sort({time:-1});
    res.render('list', {accounts: accounts, moment:moment});
    } catch (err) {
      console.log(err);
      res.status(500).send('读取失败');
    }
});

//添加记录
router.get('/account/create', function(req, res, next) {
  res.render('create');
});

//新增记录
router.post('/account', async (req, res)=>{
  //生成id
  let id = shortid.generate();
  // //获取请求体数据
  // //写入文件
  // db.get('accounts').unshift({id:id, ...req.body}).write();
  //插入数据库
  try {
    const data = await AccountModel.create({
      ...req.body,
      time: moment(req.body.time).toDate()
    });
    console.log(data);
    //关闭数据库连接（项目运行过程中，不会添加该代码）
    //mongoose.disconnect();
    res.render('success', {msg:'添加成功!', url:'/account'})
    } catch (err) {
      console.log(err);
      res.status(500).send('插入失败');
    }
})

//删除记录
router.get('/account/:id', async (req, res)=>{
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
