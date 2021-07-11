const{readFile,writeFile} = require('fs')

readFile('./examples/first.txt','utf8',(err,result) => {
    if(err){
        console.log(err)
        return
    }
    const first = result;
    readFile('./examples/second.txt','utf8',(err,result) =>{
        if(err){
            console.log(err)
            return
        }
        const second = result
        writeFile(
            './examples/amit-async.txt',
            `here is the result :${first} ${second} \n`, 
            {flag: 'a'},
            (err,result)=>{
                if(err){
                    console.log(err)
                    return
                }
                console.log(result)
            }
            )
    })
})