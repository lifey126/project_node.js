const mongoose = require('mongoose')

//导入db文件
const db = require(__dirname + '/db/db.js')
const BookModel = require(__dirname + '/models/BookModel')

//调用函数
db(async ()=>{ 
try {
    const data = await BookModel.create({
        name: '时空中的绘旅人',
        author: '网易',
        price: 29.9
    });
    console.log(data);
    //关闭数据库连接（项目运行过程中，不会添加该代码）
    mongoose.disconnect();
    } catch (err) {
    console.log(err);
    }
},()=>{
    console.log('连接失败...')
})
