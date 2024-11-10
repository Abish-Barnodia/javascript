// Data Types are divided into two parts
// Primitive and Non-primitive
// how the data is stored in memory and how we can access this data

// #Primitive datatype ->call by value-> we can use copy of it and whatever 
                                       // we change in code that change will done in copy

// 7 types :strings ,Number,Boolearn,null,undefined,symbol(to make value unique),BigInt
    

const score=100
const scoreValue=100.3

const isloggedIn=false
const outsideTemp=null
let userEmail;//undefined

const id= Symbol('123')

const anotherId= Symbol('123')
console.log(id===anotherId);

// const bigNumber = 344858563265256n








//#Reference (Non primitive)-> memory ma jinka reference directly locate kiya ja saktha ha


//Array,Objects,Functions


const heros =["sakthi kappor","doga"]

let myObj={
    name:"abis",
    age:22,
}

const myFunction=function(){
    console.log("hello world");
    
}

console.log(typeof bigNumber);// undefined
console.log(typeof outsideTemp);// obj
console.log(typeof scoreValue);// number
console.log(typeof myFunction);//function
console.log(typeof anotherId);// symbol

