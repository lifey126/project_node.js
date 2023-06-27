const uniq = require('uniq');

let arr = [1, 2, 3, 4, 5, 4, 3, 2, 1];
let result = uniq(arr);
console.log(result);