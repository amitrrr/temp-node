const os = require('os');


// return info about current user
console.log(os.userInfo());

//return the system uptime in secondes
console.log(os.uptime());


const currentOs = {
    name:os.type(),
    release:os.release(),
    totalMem:os.totalmem(),
    freeMem:os.freemem(),
}
console.log(currentOs);
