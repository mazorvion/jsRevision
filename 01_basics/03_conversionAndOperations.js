let score = "33"
let score2 = "33a"
let score3 = null
let score4 = undefined
let score5 = true


/*  CONVERSIONS

// "33" => 33, type=number
// "33abc" => NaN, type=number
// true => 1, type=number
// undefined => NaN, , type=number
// null => 0, type=number

*/



console.log(typeof(score))

let valueInNumber = Number(score)
console.log(typeof(valueInNumber)) // number

let valueInNumber2 = Number(score2)
console.log(typeof(valueInNumber2))
console.log(valueInNumber2) // NaN cuz "33a" cannot be converted to number

let valueInNumber3 = Number(score3)
console.log(typeof(valueInNumber3)) // number
console.log(valueInNumber3) // 0 

let valueInNumber4 = Number(score4)
console.log(typeof(valueInNumber4)) // number
console.log(valueInNumber4) //  NaN

let valueInNumber5 = Number(score5)
console.log(typeof(valueInNumber5)) // number
console.log(valueInNumber5) // 1 

// ////////////////////////////////////////////////////////////


let isLoggedIn = 1

let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn) // true cuz 1 is true and 0 is false



// 1 => true; 0 => false
// "" => false
// "hello" => true


let someNumber = 33
let stringNumber = String(someNumber)
console.log(someNumber) // 33 but type is  number


