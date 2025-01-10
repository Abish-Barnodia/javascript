// singleton and constructor

// const tinderUser = new Object() // singleton
const tinderUser={} // nin singleton

tinderUser.id="123abc"
tinderUser.name="sammy"
tinderUser.isLoggedIn=false
// console.log(tinderUser);


const regularUser ={
    email: "some@gmail.com",
    fullname:{
        userfullname: {
           firstname :"abish",
           lastname :"barnodia"
        }

    }
}
// console.log(regularUser.fullname.userfullname.firstname);//abish

// merge the objecct

const obj1={ 1: "a", 2: "b"}
const obj2 ={3 : "a", 4: "b"}

// const obj3 ={obj1,obj2}
// const obj3 =Object.assign({},obj1,obj2)// {}->target || baki->source
const obj3={...obj1,...obj2}
// console.log(obj3);
   
// when the values came from database

const user =[
    {
    id:1,
    email:"g@gmail.com"
},
    {
    id:1,
    email:"g@gmail.com"
},
    {
    id:1,
    email:"g@gmail.com"
},
]
user[1].email
console.log(tinderUser);

console.log(Object.keys(tinderUser));// datatype ->array
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));// #[key,value]||['id','12abac']

console.log(tinderUser.hasOwnProperty('isLogged'));// btaya ga ki property objecct ma ha ya nhi


