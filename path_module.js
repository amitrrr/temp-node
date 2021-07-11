const path = require('path');

console.log(path.sep);

const filePath = path.join('/examples','subfolder','test.txt');
console.log(filePath);

const base = path.basename(filePath);
console.log(base);

const absolute = path.resolve(__dirname,'examples','subfolder','text.txt');
console.log(absolute);