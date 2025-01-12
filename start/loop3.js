// const coding = ["js" ,"ruby","java","python","cpp"]

// const values=coding.forEach((items) => {
//     console.log(items);
//     return items // foreach loop doesnot return values
// })

// console.log(values);


const myNumsr =[1,2,3,4,5,6,7,8,9,10]
// filter will hep to callback the function
// in which every value will be access but we have to give condion in this

// const newNums=myNums.filter((num)=>{
//      return num>4 // if we use scope {} => then use retun key word 
// })                // otherwise use directly
  
//  const newNums=[]

//  myNums.forEach((num)=>{
//     if(num>4){
//         newNums.push(num)
//     }
//  })
// console.log(newNums);

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];


//   const userBooks =books.filter((bk)=>{
//     return bk.genre === 'History'
// })
//  const kuserBooks = books.filter((bk)=>bk.publish>=2000)
// console.log(kuserBooks);
  
// map 
const myNumers=[1,2,3,4,5,6,7,8,9,10]
// const newNumrs=myNumers.map((num)=>num +10)

// channing
const newNums = myNumers
                 .map((num)=>num*10)
                 .map((num)=>num+10)
                 .filter((num)=>num>=40)

// console.log(newNums);


// reduce => sum krka accumular ma dal datha ha

const myNums=[1,2,3]
// const myTotal=myNums.reduce((acc,currval)=>{
//     console.log(`acc : ${acc} and curvval:${currval}`);
    
//     return acc + currval
// },0) // 0 sa hm accumulator ki value da rha ha

// const myTotal=myNums.reduce((acc,curr)=>acc+curr,0)
// console.log(myTotal);

// shopping cart example

const shoppingCart= [{
    itemName:"js course",
    price : 2999
},
{
    itemName:"py course",
    price : 3999
},
{
    itemName:"mobile dev course",
    price : 5999
},
{
    itemName :"data science course",
    price :12999
}

]
 const totalPrice=shoppingCart.reduce((acc,item)=>acc+item.price,0)

 console.log(totalPrice);
 


 