// for of 


// syntax of for of 
// for (const iterator of object) {
    
// }
const arr=[1,2,3,4,5]

for(const num of arr){
    //console.log(num)
}

const greetings="jerry kwon"
for(const greet of greetings){
    console.log(`each character is ${greet}`)
}

// maps--> maps objects are collection of key value pairs which remember its insertion order
// no repitition
const map=new Map()
map.set('IN',"India")
map.set('USA','United states of America')
map.set('FR',"France")

console.log(map)

// to get keys and value seperately
for (const [keys,value] of map) {
    console.log(`${keys}=>${value}`)
    
}

const myObj={
    js:"javascript",
    py:"python",
    
}

// you cant use for of loop for object
//for (const key of myObj) {
    //console.log(`my keys are ${key}`)
    
//}

// for in loop
 for (const key in myObj) {
    console.log(`key is ${key} and value is ${myObj[key]}`)

        
    }
// for in loop can be used for objects and array but not for key
// for in iterate through keys meanwhile for iterate through value// read documentation


// for each-->for array generally
// for each iterate through every element of array
// for each take callback func as parameter
const arrAy=[2,3,4,75,1]
arrAy.forEach((val)=>{
    //console.log(val+2)
})
arrAy.forEach(function(val){
    //console.log(val)
})
function printMe(item){// no need to use keyword for parameter
    console.log(item)
}
arrAy.forEach(printMe)

// no of parameters in for each
arrAy.forEach((val,index,arrAy)=>console.log(val,index,arrAy))


// to access object insides array
const info=[{
    founder:"billgates",
    company:"microsoft"
},
{
    founder:"mark zuckerberg",
    company:"facebook"
},
{
    founder:"bernard arnault",
    company:"lvmh"
}]

info.forEach((obj)=>console.log(obj.founder))

