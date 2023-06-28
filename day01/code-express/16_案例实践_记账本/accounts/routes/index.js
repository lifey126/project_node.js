var express = require('express');
var router = express.Router();
//导入lowdb
const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync');
const shortid = require('shortid');
const adapter = new FileSync(__dirname + '/../data/db.json');
//获取db对象
const db = low(adapter);

const id = require('shortid');

/* 记账本列表 */
router.get('/account', function(req, res, next) {
  //获取所有的账单信息
  let accounts = db.get('accounts').value();
  console.log(accounts);
  res.render('list', {accounts: accounts});
});

//添加记录
router.get('/account/create', function(req, res, next) {
  res.render('create');
});

//新增记录
router.post('/account', (req, res)=>{
  //生成id
  let id = shortid.generate();
  //获取请求体数据
  //写入文件
  db.get('accounts').unshift({id:id, ...req.body}).write();
  res.render('success', {msg:'添加成功!', url:'/account'})
})

//删除记录
router.get('/account/:id', (req, res)=>{
  let id = req.params.id;
  db.get('accounts').remove({id:id}).write();
  res.render('success', {msg:'删除成功!', url:'/account'})
})

module.exports = router;
