// https://262.ecma-international.org/5.1/#sec-11.4.3


// Datatypes are of two types primities and reference

// Primitives Types: 
// 7 types: String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3
const isLoggedIn = true
const outSideTemp = null // empty value, not undefined nor 0

let userEmail;
console.log(userEmail) // undefined

const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id === anotherId) // false, because symbls are completely unique and that's their job

const bigNumber = 654654654132n
console.log(typeof bigNumber) // bigint



// Non Primitives/Reference Types:
// Arrays, Objects, Functions

const heroes = ["shaktiman", "l", "hinata"]
console.log(typeof heroes) // arrays are basically type of object in js

let kageyama = {
    name: "kageyama",
    age: 16
}

const myFunction = function(){
    console.log("hello world")
}
