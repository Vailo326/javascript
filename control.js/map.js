const myNo=[1,2,3,4,5,6,7,8,9,10]
// const new_no=myNo.map((num)=>num+10) 

//chaining
const new_no=myNo
             .map((num)=>num*10)
             .filter((num)=>num>=40)

console.log(new_no)



//reduce 
//read documentation

const nums=[1,2,3]
const total=nums.reduce((acc,currval)=>{
    console.log(`acc ${acc} and currval:${currval}`)
    return acc+currval
},0)

console.log(total)


//objects inside 

const shopping_cart=[
    {
      course:"js course",
      price:999
    },
    {
      course:"py course",
      price:199
    },
    {
      course:"js course",
      price:4999
    }
]

const total_cost=shopping_cart.reduce((acc,item)=> (acc+item.price),0) // ise in arrow fn if there is one line and it increase readability using ()
console.log(total_cost)