// primitive
// 7-->String,Number,Boolean,null,undefined,Symbol,BigInt

//reference(non primitive)


// symbol are unique even if they have same value
const id=Symbol('123')
const anotherId=Symbol('123')
console.log(id===anotherId)

const bigNo=34392839239392389239n
console.log(bigNo)

//Array,objects.functions
//array and object type=>object
// function => function object