let score=null

// there are two ways to check the type of variable using typeof
console.log(typeof score)
console.log(typeof(score))

let valueInNumber= Number(score)
console.log(valueInNumber)

// "33"=>33
// "33abc"=> type:number but value NaN
// true=>1, false=>0
// null=>type:object value:0

//boolean

let boolean=1;
let changeToBoolean=Boolean(boolean)
console.log(changeToBoolean)

// 1=>true
// "",0=>false
//"hello"=>true