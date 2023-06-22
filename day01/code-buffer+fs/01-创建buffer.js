//1.alloc
let buf = Buffer.alloc(10);
console.log(buf);

//2.allocUnsafe 可能存在遗留旧数据，但是速度较快
let buf_2 = Buffer.allocUnsafe(10);
console.log(buf_2);

//3.from
let buf_3 = Buffer.from('hello');
let buf_4 = Buffer.from([101,202,303]);
console.log(buf_3);//16进制
console.log(buf_4);