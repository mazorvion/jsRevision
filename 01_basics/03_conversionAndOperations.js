

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


let isLoggedIn = 1

let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn) // true cuz 1 is true and 0 is false



// 1 => true; 0 => false
// "" => false
// "hello" => true


let someNumber = 33
let stringNumber = String(someNumber)
console.log(someNumber) // 33 but type is  number

*/

// ******************Operations*********************
let value = 3
let negValue = -value
// console.log(negValue)

let str1 = "Hello"
let str2 = " John"
let str3 = str1 + str2
console.log(str3)

console.log("1" + 2) // 12
console.log("1" + 2 + 2) // 122
console.log(2 + 2 + "1") // 41
// NOTE: Basically is types ke operations me agar string first me hai to pura operation as a string consider kiya jaea, and if number first me hai to jaha tak operation ho sakta hai waha tak nums me hoga and then jaise hi koi string milega it'll convert to string
// it depends on priorities

console.log(+true) // 1
console.log(+"") // 0

let num1, num2, num3

num1 = num2 = num3 = 2+2
console.log(num1, num2, num3) // 4 4 4


// prefix & postfix


let gameCounter = 100
gameCounter++
console.log(gameCounter) // 101

let gameCounter2 = 100
++gameCounter2
console.log(gameCounter2) // 101
