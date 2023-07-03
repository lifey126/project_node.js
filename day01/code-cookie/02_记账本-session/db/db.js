

module.exports = function(success, error){
    //判断 error 为其设置默认值
    if(typeof error !== 'function'){
        error = () =>{
            console.log('连接失败');
        }
    }
    const mongoose = require('mongoose')

    //导入配置文件
    const {DBHOST, DBPOST, DBNAME} = require('../config/config');

    mongoose.connect(`mongodb://${DBHOST}:${DBPOST}/${DBNAME}`)

    mongoose.connection.once('open', async ()=>{  
        success()   
    })
    mongoose.connection.on('err', ()=>{
        error()
    })
    mongoose.connection.on('close', ()=>{

    })
}

