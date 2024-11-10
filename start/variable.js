const accountId=14453
let accountEmail="snipt@google.com"
var accountPassword="12345"
accountCity="jaipur"
let accouintState; // undefined
// accountId=2 // not allowed because it is constant that doesn't change

// variable assign by let or var but now we use only let because of scope {}
accountEmail="hc@hc.com"
accountPassword=265265
accountCity="Bengaluru"

console.log(accountId);
/*
  not use var  because of issue in block scope and functional scope
*/
console.table([accountId,accountEmail,accountPassword,accountCity,accouintState])
