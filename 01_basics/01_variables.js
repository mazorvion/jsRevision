// MORAL OF STORY:  prefer not to use var
// because of issue in block scope and functional scope, we want to use blocked scope variables not globel cuz it can cause clutter and crashes

const accountId = 144554
let accountEmail = "vikas@gmail.com"
var accountPassword = "12345"
accountCity = "jamnagar" // considered as var varoable
// console.log(accountState) // throws error cuz of cannot access let var before initialization, it is in TDZ
let accountState;
console.log(accountState) // returns undefined

// accountId = 123 //  error: cannot assign to a constant variable



accountEmail = "cup@cup.com"
accountPassword = 212121
accountCity = "frankfort"



console.log(accountId);
console.table([accountEmail, accountPassword, accountCity, accountState]);

/*
var is function-scoped or globally scoped, meaning it's visible within the function it's declared in or globally if declared outside of any function.

let and const are block-scoped, meaning they are only visible within the block (enclosed in curly braces {}) in which they are defined, whether that's a loop, an if statement, or any other block of code.
*/
// console.log(a)

function abc() {
    let a = 12;
    console.log(b)
    
    
    if (Number.isInteger(a)){

        console.log(c) // c is hoisted in block scope but but not initialized as undefined it is in "TEMPORAL DEAD ZONE" basically means it cannot be accessed before intialization

        var b = 16
        let c = 15 // 
    }

}

// abc();

