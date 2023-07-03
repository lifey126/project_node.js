const mongoose = require('mongoose')

mongoose.connect('mongodb://127.0.0.1:27017/bili')

mongoose.connection.once('open', async ()=>{
    //创建文档的结构对象
    //设置集合中文档的属性以及属性值的类型
    let Bookschema = new mongoose.Schema({
        name: {
          type: String,
          required: true, //表面该属性必须不为空
          unique: true //设置为独一无二的
        },
        author: {
          type: String,
          default: '匿名'
        },
        style:{
          type: String,
          enum: ['言情', '城市', '志怪', '恐怖'] //枚举 只能是其中一种
        },
        price: Number
    })

    //创建模型对象 对文档操作的封装对象
    let BookModel = mongoose.model('books', Bookschema)

    //新增
    try {
        const data = await BookModel.create({
          name: '西游记',
          author: '吴承恩',
          style: '志怪',
          price: 19.9
        });
        console.log(data);
        //关闭数据库连接（项目运行过程中，不会添加该代码）
        mongoose.disconnect();
      } catch (err) {
        console.log(err);
      }
      
})
mongoose.connection.on('err', ()=>{
    console.log('连接失败')
})
mongoose.connection.on('close', ()=>{
    console.log('连接关闭')
})