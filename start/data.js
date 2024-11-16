console.log("hey this is base")
let a=5; // globally declare
var b=6;
var c="harry";

// console.log(a+b+c)
// console.log(typeof a,typeof b,typeof c)

// var is globally scoped 
//let and const are block scoped

{
    let a= 66;// blocklly declare
    console.log(a);
    
}
console.log(a);

let x= "harry bhai";
let y=22;
let z=3.55;
const p=true;
let q =undefined;
let r=null;
console.table([x,y,z,p,q,r]);
console.table([typeof x,typeof y,typeof z,typeof p,typeof q,typeof r]);

let o={
    "name":"Harry",
    "job code":5600
}
console.log(o)
o.salary="100crores"
console.log(o);

o.salary="500crores"
console.log(o);


