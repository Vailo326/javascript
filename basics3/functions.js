// function addTwoNumbers(number1,number2)/*parameters*/{
//     console.log(number1+number2)
// }
// const result=console.log(addTwoNumbers(3,5))// arguments
// console.log(`result:${result}`) // the value of result is undefined because func is not returning anything

function addTwoNumbers(number1,number2)/*parameters*/{
    // 1way
    // const result=number1+number2
    // return result
    
    //2nd way
    return number1+number2
    // anything after the return will only cause an error
}
const result=addTwoNumbers(3,5)
console.log(`result:${result}`)

// if you are not passing any argument , it will return undefined or if you are not returning anything


// rest operator
// when we dont know the no of arguments
function calculateCartPrice(...num1){
    return num1

}
console.log(calculateCartPrice(200,400,5000))// returning an array

function values(num1,num2,...num3){
    return num3

}
console.log(values(2,3,4,5,6,7)) // num1=2,num2=3 and rest of the value in the form of array in 


// object and function
const obj={
    username:"vaibhav",
    uid:"23bcs11415",
    

}
function manageObj(anyObj){
    return `your name is ${anyObj.username} and uid is ${anyObj.uid}`
}
// 1 way
console.log(manageObj(obj))
//2way
console.log(manageObj({
    username:"vaibhav",
    uid:"23bcs11415",
    

}))


//array and function

const arr=[200,300,400,899]
function getSecondElement(getArray){
    return getArray[2]

}
console.log(getSecondElement(arr))
console.log(getSecondElement([200,300,400,899]))








// scope

var c=300
if(true){
    let a=10
    const b=20
    var c=30
}
// console.log(a)// it will throw error because it is inside block scope 
// console.log(b)// similar as let 
console.log(c)// output =30 thats why it is not recommended 
//read about scoping , var and let

// NESTED BLOCK scoping 
// function one(){
//     const user='hitesh'
    
//     function two(){
//         const greet="yokaso"
//         console.log(username)
//     }
//     console.log(greet)
// }
// function 2 can access username because it has a higher scope but function one cant access greet


// +++++++++++++++++++++++ interesting +++++++++++++++++++++++++++

console.log(addOne())
function addOne(num){
    return num+1
}
// you can call the fn before the declaration and it will work fine if you are working in this way

// point to note--> this is a new type of function
// this will throw an error if you are declaring fn in this way

// addTwo()
// const addTwo=function(num){
//     return num+2

// }
