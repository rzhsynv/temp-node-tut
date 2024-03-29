const path = require('path'); // builtin module

console.log(path.sep);

const filePath = path.join('/content', 'subfolder', 'test.txt');
console.log(filePath);

const base = path.basename(filePath);
console.log(base);
console.log(__dirname);
const absolute = path.resolve(__dirname, 'content', 'subfolder', 'test.txt');
console.log(absolute);
const temp = path.join(__dirname, 'content', 'subfolder', 'test.txt');
console.log(temp);