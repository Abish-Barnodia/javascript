// scope
//  var c=300 // global scope
 let a=300
if(true){
    let a =10
    const b=20  // Block scope
    // var c= 30
     // global scope ma jo bhi value likha ga vo block scope ma avilable hogi
     // but block scope ki value global scope ma avilable nhi hogi
     console.log("inner:" ,a); //10
     
}
for (let i = 0; i < array.length; i++) {
    const element = array[i];
    
}

console.log(a); // undefined// 300
// console.log(b);// undefined
// console.log(c); // 30
