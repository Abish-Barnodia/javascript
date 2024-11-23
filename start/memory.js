// Memory
// -> stack :(Primitive)    -> Heap :(Non-Primitive)
//stack: variable declare kiya ha uaka copy milta ha ->only get copy
// heap: refernce ->jo bhi change kro ga vo orignal value ma change ho jaya ga
// heap: refrence of values
let youtube = "abinfo"

let anothername = youtube
anothername="abcricinfo"

console.log(youtube);
console.log(anothername);

let userOne ={
    email :"suser@google.com",
    upi:"user@v"

}
let userTwo = userOne

 userTwo.email="vivan@google.com"
    
console.log(userOne.email);
console.log(userTwo.email);




