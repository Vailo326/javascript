const score=400
console.log(score)

const myScore=new Number(123)
console.log(myScore)

// you can convert number into string and use the properties and diff functionalities of 
console.log(myScore.toString().length)

const no=new Number(233.234)
console.log(no.toFixed(2))// sets the no of 

const ten_lakhs=1000000
console.log(ten_lakhs.toLocaleString('en-IN'))//

// math
console.log(Math)
console.log(Math.abs(-4))//returns the absolute value of number
console.log(Math.round(3.2))
console.log(Math.ceil(3.2))
console.log(Math.floor(3.2))
console.log(Math.max(3,4,76,3))
console.log(Math.min(1,42,44,54))

console.log(Math.random())// return random value bw 0 to 1

const max=20
const min=10
console.log(Math.floor(Math.random()*(max-min+1)+min))// use chatgpt later to understand