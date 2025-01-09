// arrays



const myArr=[0,1,2,3,4,5]
console.log(myArr[0]);

//methods

myArr.push(6)// add krta ha
myArr.pop()// last element delete kara ga
console.log(myArr);

myArr.unshift(9)// add at the starting of the array 
myArr.shift()// remove kr data ha values
console.log(myArr);
console.log(myArr.includes(9));// datatype->boolean ma hoga 
                               // aur true ya false ma 
                               // value aya hgi

console.log(myArr.indexOf(9));// bataya value array ma ha ya nhi

console.log(myArr);


const newArr =myArr.join()//join add bhi kraga aur 
                         //sting ma bhi convert karaga
console.log(myArr);
console.log(typeof myArr);//type->object

console.log(newArr);
console.log(typeof newArr);// type->string

// slice
console.log("A",myArr);
const myn1 = myArr.slice(1,3)// third include nhi hoga
console.log(myn1);

// splice
console.log("B",myArr);
const myn2 = myArr.splice(1,3)
console.log(myn2);


console.log("C",myArr); // orignal array sa splice wala portion nikal gaya ha







