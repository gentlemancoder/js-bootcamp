const gameLocation = document.querySelector('#game')

const puzzleEl = document.querySelector('#puzzle')
const guessesEl = document.querySelector('#guesses')

let game


window.addEventListener('keypress', (e) => {
    const guess = String.fromCharCode(e.charCode)
    game.makeGuess(guess)
    render()
})

const render = () => {
    puzzleEl.textContent = game.puzzle
    guessesEl.textContent = game.statusMessage
} 
const startGame = async () => {
    const puzzle = await getPuzzle(2)
    game = new Hangman(puzzle, 5)
    render()
}

document.querySelector('#restart').addEventListener('click', startGame)

startGame()

// getPuzzle('8').then((puzzle) => {
//     console.log(puzzle)
// }, (error) => {
//     console.log(`Error: ${error}`)
// })

// getCurrentCountry().then((country) => {
//     console.log(country.name)
// }).catch((error) => {
//     console.log(error)
// })