var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


//显示网页（表单）
router.get('/portrait', (req, res) =>{
  res.render('portrait');
})

//处理文件上传
router.post('/portrait', (req, res)=>{
  res.send('成功');
})

module.exports = router;
