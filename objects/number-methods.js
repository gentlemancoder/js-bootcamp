
let num = 103.941

console.log(num.toFixed(10))

console.log(Math.round(num))

console.log(Math.floor(num))

console.log(Math.ceil(num))

let min = 1
let max = 5
let randomNum = Math.floor( Math.random() *(max-min +1))
console.log(randomNum)

let guessingGame = function(guess) {
    let min = 1
    let max = 5
    let randomNum = Math.floor( Math.random() *( max - min +1))
    return guess == randomNum
}

console.log(guessingGame(3))