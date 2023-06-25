function tiemo(){
    console.log('贴膜...');
}

function niejiao(){
    console.log('捏脚...')
}

//1. module.exports 可以暴露`任意`数据 
module.exports = {
    tiemo,
    niejiao
};

//2. 不能使用`exports = value`的形式暴露数据
// exports.niejiao = niejiao;
// exports.tiemo = tiemo;
