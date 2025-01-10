// functions


function sayMyName(){
    console.log("A");
    console.log("b");
    console.log("i");
    console.log("s");
    console.log("h");

}
//  sayMyName()

// function addTwoNumbers(number1,number2){ // input->parameters
//    console.log(  number1+number2);
  
// }
function addTwoNumbers(number1,number2){ // input->parameters
//   let result = number1 +number2
//   console.log("hitesh");// return ka bad koi function kam nhi kara ga
//   return result

return number1+ number2
  
  
}
 const result= addTwoNumbers(3,5) // call-> arguments

//  console.log("result:",result); // undefined ?

function loginUserMessage(username="sam"){
    if(!username){//username === undefined
        console.log("please enter a username");
        return
        
    }
    return `${username} just logged in`
}
 
console.log(loginUserMessage("Abish"))
console.log(loginUserMessage())
