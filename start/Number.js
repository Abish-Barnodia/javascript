const score=400
console.log(score);//400

const balance = new Number(100)
console.log(balance);//[Number: 100]


console.log(balance.toString().length);//3
console.log(balance.toFixed(2));//100.00

const otherNumber =23.86999
console.log(otherNumber.toPrecision(3));//23.9


const hundreds =1000000
console.log(hundreds.toLocaleString('en-IN'));//10,00,000

//++++++++++++++++ Maths +++++++++++++++++++++++//

console.log(Math);

console.log(Math.abs(-4));//4

console.log(Math.round(4.6));//5
console.log(Math.round(4.2));//4
console.log(Math.ceil(4.2));//5
console.log(Math.floor(4.2));//4
console.log(Math.min(4,6,56,8));//4
console.log(Math.max(4,3,85,96,845));//845

console.log(Math.random());//value always lies b/w 0 to 1

console.log(Math.floor(Math.random()*10)+1);

const min=10
const max =20
console.log();
console.log(Math.floor(Math.random()*(max-min+1))+min)
