// console.log("start with loops");
// let a=1;

// for loop:->

// for (let i = 0; i <10; i++) {
//         console.log(a+i);  
// }

// let obj={
//     name:"Harry",
//     role: "programmer",
//     company: "code with Ai"
// }
// for (const key in obj) {
//         const element = obj[key];
//        console.log(element);
// }

// for (const c of "Harry") {
//     console.log(c);
    
// }


// while loop

// let i=0;
// while(i<6){
//     console.log(i);
//     i++;
    
// }

//do while

// let i=10;
// do{
// console.log(i)
// i++;
// }while(i<6);

// for 

for (let index = 0; index <= 10; index++) {
    const element = index;
    if(element==5)
    {
        //console.log("5 is the best number");
        
 }
    // console.log(element);
    
   
}

for (let i = 0; i <=10; i++) {
    //console.log(`outer loop value: ${i}`);
    
   for (let j = 0; j <=10; j++) {
   
   // console.log(`Inner loop value ${j} and inner loop ${i}`);
    //console.log(i+'*'+j+'='+i*j);
    
    
   }
    

}

let myArray =["flash","batman","superman"]
console.log(myArray.length);

for (let i = 0; i < myArray.length; i++) {
    const element = myArray[i];
    console.log(element);
    
    
}

// break and continue

// for (let index = 1; index <=20 ; index++) {
//     if(index==5){
//         console.log(`detected 5`);
//       break;
        
//     }
//     console.log(`value of index is ${index}`);
    
    
// }

for (let index = 1; index <=20 ; index++) {
    if(index==5){
        console.log(`detected 5`);
    continue;
        
    }
    console.log(`value of index is ${index}`);
    
    
}





