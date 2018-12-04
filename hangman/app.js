const gameLocation = document.querySelector('#game')

const puzzleEl = document.createElement('div')
const remainingEl = document.createElement('div')
const statusEl = document.createElement('div')

gameLocation.appendChild(puzzleEl)
gameLocation.appendChild(remainingEl)
gameLocation.appendChild(statusEl)

const game1 = new Hangman('Car Parts', 2)

puzzleEl.textContent = game1.puzzle
remainingEl.textContent = game1.remainingGuesses

window.addEventListener('keypress', (e) => {
    const guess = String.fromCharCode(e.charCode)
    game1.makeGuess(guess)
    puzzleEl.textContent = game1.puzzle
    remainingEl.textContent = game1.remainingGuesses
    statusEl.textContent = game1.statusMessage
})

getPuzzle('8').then((puzzle) => {
    console.log(puzzle)
}, (error) => {
    console.log(`Error: ${error}`)
})

getCurrentCountry().then((country) => {
    console.log(country.name)
}).catch((error) => {
    console.log(error)
})