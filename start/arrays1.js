const marvel_heros=["thor","ironman","spiderman"]
const dc_heros= ["superman","flash","batman"]
// marvel_heros.push(dc_heros)
// console.log(marvel_heros);// array ka ander array aa gya 
                          //marvel heros ka ander dc_heros aa gya
// now let suppose flash ki value acess krni ha tho kasa kara ga
// console.log(marvel_heros[3][1]);

const allHeros=marvel_heros.concat(dc_heros) //concat->add the array elements
console.log(allHeros);
                          
const all_new_heros=[...marvel_heros,...dc_heros]
console.log(all_new_heros);

//suppose if array ka ander array ka ander array ha
const another_array=[1,2,3,[4,5,6],7,[6,7,[4,5]]]

const real_array=another_array.flat(Infinity) // sb value
                                           // spread||format ma aaga
console.log(real_array);
console.log(Array.isArray("Abish"));//false
console.log(Array.from("Abish"));// jo bhi value doga usko array ka ander 
                                // convert kar da  ga
console.log(Array.from({name:"Abish"}));// [] empty array
                                        // intresting
let score1=100
let score2=200
let score3=300
console.log(Array.of(score1,score2,score3));// mutiple elements ko array ma convert krna ha





