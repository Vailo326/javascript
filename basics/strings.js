let name="vaibhav"
console.log(name)
console.log(typeof name)


// not recommended
console.log("My name is "+name)// this is string concatination

// use backticks 
console.log(`My name is ${name}`)//this is called string interpolation

const string = new String('hello-yokoso')
console.log(typeof string)//type of this is object meanwhile type of the above string name is type string

console.log(string[0])// these are stored as key value pair
// to check all the methods of string , paste the line 12 on console in web browser 
console.log(string.length)
console.log(string.toUpperCase())//converts into uppercase

console.log(string.charAt(1))
console.log(string.indexOf('o'))

// substring
const splitted=string.substring(0,3)// only positive values starting from zero
console.log(splitted)

const sliced=string.slice(0,4)// you can use -ve value in slice but i dont know why it is not working in my pc
console.log(sliced)


const string2=new String("  hitesh   ")
console.log(string2.trim())// trim removes all the starting and trailing whitespaces


const url="https://www.google.com"
console.log(url.replace("google","facebook"))

console.log(url.includes("www"))// checks if that character or series of character is present in the string or not 

const split=new String("vaibhav-lohani")// split method split the string into an array of substring based on the specific seperator
console.log(split.split("-"))
