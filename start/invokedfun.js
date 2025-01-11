// Immediately  Invoked Function Expression (IIFE)
//iife-> function that exectue immediately
// why we use iife?

//some times there is problem due to  global scope pollution
// so to resolve that global scope variable or pollution we use iife
(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
    
})();

((name) =>{
    // unamed IFFE
    console.log(`DB CONNECTED TWO ${name}`);
    
} )('abish')

