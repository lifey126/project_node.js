//buffer与字符串的转换
let buf_4 = Buffer.from([101,105,111]);
console.log(buf_4.toString());

//[]
let buf_3 = Buffer.from('hello');
console.log(buf_3[0].toString(2)); //1101000 二进制表示形式

buf_3[0] = 95;
console.log(buf_3.toString());

//溢出
//buf_3[0] = 361; //舍弃高位的数字
//中文 一个字占三个字节