// console.log(2 > 1)
// console.log(2 >= 1)
// console.log(2 < 1)
// console.log(2 == 1)
// console.log(2 != 1)

console.log("1" > 1) // false
console.log("02" > 1) // tue

console.log(null > 0)  //false
console.log(null == 0) // false
console.log(null >= 0) // true, due to value conversion null is being converted to 0
console.log(0>=0) // true

console.log(undefined == 0) // false

// ===

console.log("2" == 2) // true
console.log("2" === 2) // false, because dataype is not same
