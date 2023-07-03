const jwt = require('jsonwebtoken');

//创建（生成）token
//let token = jwt.sign(用户数据， 加密字符串， 配置对象)
// let token = jwt.sign(
//     {username: 'zhangsan'},
//     'atguigu',
//     {expiresIn: 60 } //s 秒
//     )

//     console.log(token)

let t = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InpoYW5nc2FuIiwiaWF0IjoxNjg4MzgwMDgxLCJleHAiOjE2ODgzODAxNDF9.ID2kykYvbsn3tWlMQlwFPUq_MQgpR2v1bpdQ0is1v74';
//校验token
jwt.verify(t, 'atguigu', (err, data)=>{
    if(err){
        console.log('校验失败')
        return
    }
    console.log(data)
})