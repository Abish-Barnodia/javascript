// for of -> arrays

// ["","",""]
// [{},{},{}]

// const arr =[1,2,3,4,5]

// for (const num of arr) {
//     console.log(num);
    
    
// }

const greetings ="hello world"
for (const greet of greetings) {
    console.log(`each char is ${greet}`);
    
}

// Maps->hold key value pairs and remember the orignal insertion order of the key

const map = new Map()
map.set('IN', "India")
map.set('USA', "United states of America")
map.set('Fr',"France")
map.set('IN', "India")// second time print nhi hoga
// console.log(map);


for (const [key,value] of map) {
    console.log(key,':-',value);
    
}

// const myObject={
//     'game1' :'NFS',
//     'game2': 'Spiderman'

// }

// for (const [key,value] of myObject) {
                                       // here myObject is not iteratable so vode doesnot run

//     console.log(key,':-',value);
// }

// forin loop -> objects
const  myObject =  {
    js : 'javascript',
    cpp : 'c++',
    rb : "ruby",
    swift : "swift by apple"
}

for (const key in myObject) {
   console.log(`${key} shortuct is for ${myObject[key]}`);

   
}

 // forin -> gives key of arrays
const programming =["js","rb","py","java","cpp"]
for (const key in programming) {
  console.log(programming[key]);
  
    }

// foreach loop

const coding =["js" ,"ruby","java","python","cpp"]

// coding.forEach( function (item){
//     console.log(item);
    
// })

// coding.forEach( (item) => {
//     console.log(item);
    
// })

// function printMe(item){
//     console.log(item);
    
// }
// coding.forEach(printMe)


// coding.forEach((item,index,arr) => {
// console.log(item,index,arr);

// })

const code =[
    {
        languageName:"javascript",
        languageFileName:"js"
    },
    {
        languageName:"java",
        languageFileName:"java"
    },
    {
        languageName:"python",
        languageFileName:"py"
    }
]

code.forEach((item)=>{

    console.log(item.languageName);
    
})