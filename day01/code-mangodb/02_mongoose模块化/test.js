const mongoose = require('mongoose')
const db = require(__dirname + '/db/db');
const MovieModel = require(__dirname + '/models/MovieModel')
db(async ()=>{
    try {
        const data = await MovieModel.create({
            title: '时空中的绘旅人',
            director: '网易'
        });
        console.log('插入成功');
        //关闭数据库连接（项目运行过程中，不会添加该代码）
        mongoose.disconnect();
        } catch (err) {
        console.log('插入失败');
        }
}, ()=>{

})