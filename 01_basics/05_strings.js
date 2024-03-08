const name = "John"
const repoCount = 50

console.log(`${name} has ${repoCount} repo`)

const gameName = new String('Brawl-Halla')

console.log(gameName.endsWith('a')) // true
console.log(gameName.__proto__)
console.log(gameName.length)
console.log(gameName.toUpperCase())
console.log(gameName.charAt(4))
console.log(gameName.indexOf('H'))

let newGameName = gameName.substring(0, 4) // Braw, last position not included

console.log(newGameName)

const anotherString = gameName.slice(-8, 6)
console.log(anotherString)

let newString = "           CSGO   "
console.log(newString)
console.log(newString.trim())

let url = "https://insta.com/robert%20cialdini"
console.log(url.replace('%20', '-')) //https://insta.com/robert-cialdini

console.log(url.includes('rob'))


console.log(gameName.split('-')) 
// converts Brawl-Halla to [ 'Brawl', 'Halla' ]