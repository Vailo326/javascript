// there is a problem with filter that it doesnt return anything 
// filter
const arr=[1,2,3,4,5,6,7]
const even=arr.filter((num)=>num%2==0) 
console.log(even)

//unlike foreach loop, filter returns values 
// mistakes by programmers:we are not using return keyword because there is not a scope

const odd=arr.filter((num)=> {return num%2!==0}) // use return if you are using scope
console.log(odd)

// for each

let newArr=[]
arr.forEach((num)=>{
    if(num%2==0){
        newArr.push(num)// we are using pushing element in new array because foreach doesnt return anything
    }
})
console.log(newArr)
