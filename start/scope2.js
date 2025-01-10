function one(){
    const username="Abish"

    function two(){
        const website = "youtube"
        console.log(username);// Abish
        
    }
    // console.log(website);  error

    two()
    
}

// one()

// child will access parents 

if(true){
    const username="hitesh"
    if(username==="hitesh"){
        const website="youtube"
        // console.log(username + website);
        
    }
    // console.log(website);
    
}
// console.log(username);


// +++++++++intresting++++++++

console.log(addone(5));
function addone(num){
    return num +1
}



addtwo(5)
const addtwo =function (num){
    return num+2
}
