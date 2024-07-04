// singleton

//object literal
const mySym= Symbol("hi")
const JsUser={
    name:"hitesh",
    age:18,
    location:"jaipur",
    email:"hitesh@google.com",
    "full_name":"Hitesh Choudary",// you cant access this type of key value pair using 1st way
    [mySym]:"mykey1"// to use symbol in object if you dont add


}
// to access
console.log(JsUser.email) //1st
// 2 way is the preferred
console.log(JsUser["email"])//2 way
console.log(JsUser["full_name"])
console.log(JsUser[mySym])

//to modify
// JsUser.email="hitesh@openai.com"
// // freezing the object
// Object.freeze(JsUser)
// JsUser.email="hitesh@pacebook.com"// there will be no change as the object is freeze
// console.log(JsUser["email"])

//function in  
JsUser.greeting=function(){
    console.log(`hello js user,${this["name"]}`)
}
console.log(JsUser.greeting())



// singleton object

const tinderUser=new Object()
console.log(tinderUser)

// adding properties
tinderUser.id="123abc"
tinderUser.name-"sammy"
tinderUser.isLoggedIn=false

//nested object
const regularUser={
    email:"some@gmail.com",
    fullname:{
        userName:{
            firstName:"hitesh",
            lastName:"choudary"

        }
    }
}
console.log(regularUser.fullname.userName.firstName)

const obj1={1:"a",2:"b"}
const obj2={3:"a",4:"b"}

//const obj3={obj1,obj2} same problem as push in array

//const obj3=Object.assign({},obj1,obj2)// read documentation

//most used
const obj3={...obj1,...obj2}
console.log(obj3)


// some methods --> you can check the other methods using console  
console.log(Object.keys(tinderUser)) // output is array
console.log(Object.values(tinderUser)) // output is array
console.log(tinderUser.hasOwnProperty("id"))




//destructuring 

const course={
    courseName:"js in hindi",
    price:"999",
    courseInstructor:"hitesh"
}

const {courseInstructor: instructor}=course
console.log(instructor)



//JSON
//there is a error in this check it later
{
    "name":"vaibhav",
    "semester": 3,
    "college":"chandigarh university"

}