// arrow function
// this -> point out the current contest

const user ={
    username : "abish",
    price :999,

    welcomemessage : function(){
        console.log(`${this.username},welcome to website`);
         console.log(this);
         
    }

}
// user.welcomemessage()
// user.username="sam"
// user.welcomemessage()

// console.log(this);

// function chai(){
//     let username ="abish"
//    console.log(this.username); // undefined only used in objects
    
// }
// chai()

const chai = () => {

    let username ="abish"
    console.log(this);
    

}
//  chai()

// arrow function

//++++ explicent return ++++
// const addTwo=(num1,num2) => {
//     return num1+num2
// }

// +++++ implicent return +++++
// const addTwo=(num1,num2) => num1+num2
 
// curly braces use kiya to return keyword use krna hi pdaga
// but paranthesis use kiya to return keyword use nhi krna pda ga 

// const addTwo=(num1,num2) => ( num1+num2)


// what if you want to return object
// syntax : ({})
const addTwo=(num1,num2) =>({username :"abish"})

console.log(addTwo(3,4))


//  const myArray =[2,6,8,9,8]
//   myArray.forEach(() => {})
