const mongoose = require('mongoose')

mongoose.connect('mongodb://127.0.0.1:27017/bili')

mongoose.connection.once('open', async ()=>{
    //创建文档的结构对象
    //设置集合中文档的属性以及属性值的类型
    let Bookschema = new mongoose.Schema({
        name: String,
        author: String,
        price: Number,
        is_hot: Boolean,
        tags: Array,
        pub_time: Date,
        //test: mongoose.Schema.Types.Mixed 可以是任何类型
        //test: mongoose.Schema.Types.ObjectId 文档ID
    })

    //创建模型对象 对文档操作的封装对象
    let BookModel = mongoose.model('books', Bookschema)

    //新增
    // BookModel.create({
    //     name: '西游记',
    //     author: '吴承恩',
    //     price: 19.9
    // }, (err, data)=>{
    //     if(err){
    //         console.log(err);
    //         return;
    //     }else{
    //         console.log(data);
    //     }
    // });
    try {
        const data = await BookModel.create({
          name: '西游记',
          author: '吴承恩',
          price: 19.9,
          is_hot: true,
          tags: ['鬼怪','励志','社会'],
          pub_time: new Date(),
          //test: new Date()
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