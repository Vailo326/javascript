// this tells about current context or scope

const user={
    username:"naruto",
    price:999,
    
    welocomeMessage:function(){
        console.log(`${this.username},welcome `)
    }

}
console.log(user.welocomeMessage);
console.log(this)// output is an empty object because in node environment there is no current context for this 
//but in browser the value of this in global scope is Window


function chai(){
    let username="hitesh"
    console.log(this)//output different no of value and property of node study it later
    //console.log(this.username) it will not work
}



// arrow function
console.log("arrow func")

//basic arrow func
const chai2=()=>{
    let username="hitesh"
    console.log(this.username)
    console.log(this)// return empty object
    
}
console.log(chai2())

// implicit return
// no paranthesis and return statement 
// use when you have one line of code
const addNo=(num1,num2)=>num1+num2

// for less confusion
const addTwoNo=(num1,num2)=>(num1+num2)

// to return object using implicit return
const return_obj=(username)=>({username:username})
// it is imp to use round bracket