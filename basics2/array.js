//array


//javascript array are resizable
// javascript create shallow copy
// read documentation
// multiple datatypes can be stored at the same time


//two ways
const myArr=[0,1,2,3,4]
const myArr2=new Array(1,2,3,4)
console.log(myArr2[2]);

//array methos
myArr.push(6) // add value at the last 
console.log(myArr)

myArr.pop()// remove element from last place

myArr.unshift(9)// add element at first position
myArr.shift()// remove element from first position

console.log(myArr.includes(9))
console.log(myArr.indexOf(3))

console.log(myArr.join())//

//slice and splice 

const slice=myArr.slice(1,3)
console.log(slice)
console.log(myArr)

const splice=myArr.splice(1,3)
console.log(slice)
console.log(myArr)

// there are two difference first slice dont include the last one meanwhile splice includes the last one and slic





//array 02
const marvel_heroes=["thor","Ironman","captain america"]
const dc_heroes=["superman","batman","green lantern"]

marvel_heroes.push(dc_heroes)// it is  not recommended because it push whole array as a element  
console.log(marvel_heroes)
// push adds element at the existing array but cocat returns a new array
const allheroes=marvel_heroes.concat(dc_heroes)
console.log(allheroes)

//spread operator

const all_new_heroes=[...marvel_heroes,...dc_heroes]
console.log(all_new_heroes)
// in concat you can only merge two array but you can use multiple arrays

//flat
const another_arr=[2,3,4,[3,4,5,3],1,2,3,[1,4]]
const real_another_arr=another_arr.flat(Infinity)
console.log(real_another_arr)


console.log(Array.isArray("vaibhav"))
console.log(Array.from("siddharth"))
console.log(Array.from({name:"vaibhav"}))//interesting case

let score1=100
let score2=499
let score3=500

console.log(Array.of(score1,score2,score3))

//study about isArray,from and of

