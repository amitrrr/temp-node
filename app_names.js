const amount =9
const amount2 =5
const names = require('./names');
const sayHey = require('./funct');
const data = require('./alternative for names')
console.log(data)

if(amount<10){
  console.log('small number');
}
else{
  console.log('large number');
}
console.log(names)
sayHey(names.amit)
sayHey(names.ella)

console.log(amount+amount2)
/*
מריץ כל שנייה=1000
setInterval(()=>{
  console.log(amount)
},10000)
*/
