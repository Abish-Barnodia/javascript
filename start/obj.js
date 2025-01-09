//objects
// singleton->apni tera ka ek hi object ha
// jb bhi hm literals ki tera declare krta ha tho sigleton nhi bntha ha

// object literals
const mySymm =Symbol("key2") 
const jsUsers ={
    name:"Abish",
    age :18,
    location:"Bangalore",
    email:"abc@gmail.com",
    isLoggedIn:false,
    lastLoginDay:["Monday","Saturday"],
    mysym:"mykey2"

}

console.log(jsUsers.email);
console.log(jsUsers["email"]);

// change the email

jsUsers.email ="abi@gamil.com"
console.log(jsUsers["email"]);

// freeze the email
//  Object.freeze(jsUsers)
 jsUsers.email ="abk@gamil.com"
 console.log(jsUsers["email"]);

console.log(jsUsers);



const euser={
    "full name":"abish"
}
// console.log(euser.full name); // obj not accesable by dot operator


// so we use ->

console.log(euser["full name"]);


// question->
// symbol lo obj ki key a add kro aur print kr ka dikha do

const mySym =Symbol("key1") 

const sym={
    [mySym]:"mykey1" // use square bracket
}
console.log(sym[mySym]);
console.log(typeof sym[mySym]);

console.log(sym);


jsUsers.greeting= function(){
    console.log("hello js user");
    
}
jsUsers.greeting2= function(){
    console.log(`hello js user, ${this.name}`);
    
}
 console.log(jsUsers.greeting());
 console.log(jsUsers.greeting2());
 