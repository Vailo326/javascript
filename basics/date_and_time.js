//Date object

let myDate=new Date()
// for different representation of dates

console.log(myDate.toString())
console.log(myDate.toDateString())
console.log(myDate.toLocaleString())
console.log(typeof myDate)

// const myNewDate=new Date(2023,0,23)   // year,month,date here in month 0 means 1st month
//const myNewDate=new Date(2023,0,23,5,3)// year,month,date ,hour,min
// const myNewDate=new Date("2023-01-14")// year ,month,date here 1 means 1st month
const myNewDate=new Date("01-14-2023")// year,month,date here in month 0 means 1st month


//console.log(myNewDate.toLocaleString())

let myTimeStamp=Date.now()// gives time in ms
console.log(myTimeStamp)
console.log(myNewDate.getTime())

//to convert ms into second
console.log(Math.floor(myTimeStamp/1000)
)

//to extract info from Date object
let dateee=new Date()
console.log(dateee.getDate())
console.log(dateee.getMonth())


// for customization
dateee.toLocaleDateString("default",{
    weekday:"long"
})