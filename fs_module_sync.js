const{readFileSync,writeFileSync} = require('fs');

const first = readFileSync('./examples/first.txt','utf8')
const second = readFileSync('./examples/second.txt','utf8')

writeFileSync(
    './examples/amit_file.txt',
    'here is the result : ' + first + second + "\n",
    {flag: 'a'} //start write from the end of the file, and with out it it start the file from new
)




/*const  fs = require('fs');
fs.readFileSync
*/