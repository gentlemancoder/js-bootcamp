const gameLocation = document.querySelector('#game')

const puzzleEl = document.createElement('div')
const remainingEl = document.createElement('div')
const statusEl = document.createElement('div')

gameLocation.appendChild(puzzleEl)
gameLocation.appendChild(remainingEl)
gameLocation.appendChild(statusEl)

const game1 = new Hangman('cat', 2)

puzzleEl.textContent = game1.getPuzzle()
remainingEl.textContent = game1.remainingGuesses

window.addEventListener('keypress', function (e){
    const guess = String.fromCharCode(e.charCode)
    game1.makeGuess(guess)
    puzzleEl.textContent = game1.getPuzzle()
    remainingEl.textContent = game1.remainingGuesses
    statusEl.textContent = game1.getStatus()
})