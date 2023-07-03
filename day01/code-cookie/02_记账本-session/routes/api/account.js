var express = require('express');
var router = express.Router();

const AccountModel = require('../../models/AccountModel');

//const id = require('shortid');
const moment = require('moment');

/* 记账本列表 */
router.get('/account', async function(req, res) {

  try {
    const accounts = await AccountModel.find().sort({time:-1});
    res.json({
        //响应编号
        code: '0000',
        //响应的信息
        msg: '读取成功',
        //响应的数据
        data: accounts
    })
    } catch (err) {
      res.json({
        code: '1001',
        mag: '读取失败',
        data: null
      })
      return
    }
});

//新增记录
router.post('/account', async (req, res)=>{
  //生成id
  //let id = shortid.generate();

  //插入数据库
  try {
    const data = await AccountModel.create({
      ...req.body,
      time: moment(req.body.time).toDate(),
    });
    res.json({
        code: '0000',
        msg: '创建成功',
        data: data
    })
    } catch (err) {
      res.json({
        code: '1002',
        mag: '创建失败',
        data: null
      })
    }
})

//删除记录
router.delete('/account/:id', async (req, res)=>{
  const id = req.params.id;
  try {
    await AccountModel.deleteOne({_id:id});
    res.json({
      code: '0000',
      msg: '删除成功',
      data: null
  })
    } catch (err) {
      res.json({
        code: '1003',
        msg: '删除失败',
        data: null
    })
    }
})

//获取单个账单信息
router.get('/account/:id', async (req, res)=>{
  const id = req.params.id;
  try{
    const data = await AccountModel.findById({_id:id})
    res.json({
      code: '0000',
      msg: '读取成功',
      data: data
    })
  }catch{
    res.json({
      code: '1004',
      msg: '读取失败',
      data: null
    })
  }
})

//更新单个账单信息
router.patch('/account/:id', async (req, res)=>{
  const id = req.params.id;
  try{
    await AccountModel.updateOne({_id:id}, req.body)
    const data = AccountModel.findById({_id:id})
    try{
      const data = await AccountModel.findById({_id:id})
      res.json({
        code: '0000',
        msg: '更新成功',
        data: data
      })
    }catch{
      res.json({
        code: '1004',
        msg: '读取失败',
        data: null
      })
    }
  }catch{
    res.json({
      code: '1005',
      msg: '更新失败',
      data: null
    })
  }
})

module.exports = router;
