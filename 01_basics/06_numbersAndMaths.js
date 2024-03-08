const score = 400
console.log(score) // 400
let balance = new Number(400) 
console.log(balance) // [Number: 400]

console.log(balance.toString()) // converts to type of string
console.log(balance.toFixed(2)) // to show precise value

const otherNumber = 123.8966
console.log(otherNumber.toPrecision(3))


const hundreds = 100000
console.log(hundreds.toLocaleString('en-IN')) // 1,00,000 adds commas according to indian num sys


//////// +++++++++++++++ MATHS ++++++++++++++++

console.log(Math)
console.log(Math.abs(-89)) // shows absolute value
console.log(Math.round(4.6)) // rounds num to nearest integer
console.log(Math.ceil(4.2)) // ceil the number to nearest greatest integer
console.log(Math.floor(4.9)) // floors the value

console.log(Math.min(4, 3, 4, 1, -8)) // returns the lowest number -8
console.log(Math.max(4, 3, 4, 1, -8)) // returns heighset int in given 

console.log(Math.random()) // gemerate num between 0 - 1, excluding 1

console.log(Math.floor(Math.random() * 6) + 1) // returns num between 0 -6

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min)
// returns num between 10 = 20, pehle 0-10 me random gen karke 10 or add kardiya hai so that it returns num betwenn 10 - 20
