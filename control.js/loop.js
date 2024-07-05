//for

const array=[2,3,4,5]
for(let index=0;index<array.length;index++){ //declaration;condition;incrementation
    const element=array[index]
    if(element==5){
        console.log("5 is the best no")
    }
    console.log(element)
}//index has a block scope
// in condition it has less than operator because in array the last element has index of array.length-1 
 
// nested loop

for (let i = 0; i <= 10; i++) {
    console.log(`outer loop value:${i}`)
    for (let j = 0; j <= 10; j++) {
        console.log(`inner loop value ${j} and inner loop ${i}`)
        
    }
    // write table using this
    
}


// break and continue 
for (let index = 1; index < 20; index++) {
    console.log(index)
    if(index==5){
        console.log(`detected 5`)
        break
    }
    
}
// break terminates the current loop and give control to the statement next to the terminated statement 
for (let index = 1; index < 20; index++) {
    console.log(index)
    if(index==5){
        console.log(`detected 5`)
        break
    }
    
}






// while loop

let index=0
while(index<=10){
    console.log(`value of index is ${index}`)
    index=index+2

}

// while in array
const myArr=["superman","ironman","batman"]
let arr=0 // variable declaration
while(arr<myArr.length)/*condition*/{
    console.log(myArr[arr]);// body statements 
    index++ //increment/decrement 
}
// it checks the condition before performing task
// do while

//do{
   // statements 
   // increment/decrement 
//}while(/*condition*/)

//do while first perform the task and then check the condition