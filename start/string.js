// console.log("this is string container")
// let a="ab"
// console.log(a.length)

// let real_name="harry"
// let friend ="rohan"
// console.log("his "+real_name+friend);
// console.log(`real name ${real_name}and ${friend}`);


// let b="shivam"
// console.log(b.toLocaleUpperCase());
// console.log(b.toLocaleLowerCase());

// console.log(b.slice(0,5));
// console.log(b.replace("sh",77));

// console.log(b.concat(a,"ash"));

//strings 

const name ="hitesh"
const repoCount=50
console.log(`my name is ${name} and my rpo count is ${repoCount}`);

// console.log(name+repoCount +"Value"); -> not recomended syntax

// another method of declaring string
const gameName=new String('hithc-hc')

// (key)0:(value)"h"  
// 1:"i"
// 2:"t"
// 3:"s"

console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));//which character at two
console.log(gameName.indexOf('t'));// cjhar at which position
const newString = gameName.substring(0,4);
console.log( newString);

const anotherString = gameName.slice(-6, 4);//reverse order
console.log(anotherString);

const newStringOne = " hpl  "
console.log( newStringOne);
console.log( newStringOne.trim());// remove the spaces

const url= "https://hipos.com/hipos%20jkl"
console.log(url.replace('%20','-'))// replace %20

console.log(url.includes('sundhar')) // check this is in string or not
 
console.log(gameName.split('-'));
