// onsole.log("Faulty calculator:");

// let random =Math.random()
// let a=parseFloat( prompt("Enter first number:"))
// let b= prompt("Enter operation:")
// let c=parseFloat( prompt("Enter second number:"))


//     let obj={
//         "+":"-",
//         "*":"+",
//         "-":"**",
//     };
             
//     if(random>0.1){
//         console.log('this result is ${a} ${b} ${c}')
        
//         alert('this result is ${eval('${a} ${b} ${c}')}')

//     }
//     else{
//         c= obj[b]
//         alert('this result is ${eval('${a} ${b} ${c}')}')
//     }

console.log("Faulty calculator:");

// Generate a random number
let random = Math.random();

// Prompt user for input
let a = parseFloat(prompt("Enter first number:"));
let operation = prompt("Enter operation (+, -, *):");
let b = parseFloat(prompt("Enter second number:"));

// Dictionary of faulty operations
let obj = {
    "+": "-",
    "*": "+",
    "-": "**"
};

// Perform calculation
if (random > 0.1) {
    console.log(`This result is ${a} ${operation} ${b}`);
    alert(`This result is ${eval(`${a} ${operation} ${b}`)}`);
} else {
    // Swap operation with faulty one
    operation = obj[operation];
    console.log(`Faulty operation result is ${a} ${operation} ${b}`);
    alert(`This result is ${eval(`${a} ${operation} ${b}`)}`);
}
