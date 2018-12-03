// Primitive values: string, number, boolean, null, undefined

// Object: myObject --> Object.prototype --> null
// Array: myArray --> Array.prototype --> Object.prototype
// Function: myFunction --> Function.prototype --> Object.prototype --> null
// String : myString --> String.prototype --> Object.prototype --> null
// Number: myNumber --> Number.prototype --> Object.prototype --> null
// Booloean: myBool --> Boolean.prototype --> Object.prototype --> null

// Strings numbers and bools are all primitives, but the have object wrappers. i.e. when you call a method on them JS coerces them into objects
const gameLocation = document.querySelector('#game')
const puzzleEl = document.createElement('div')
const remainingEl = document.createElement('div')

gameLocation.appendChild(puzzleEl)
gameLocation.appendChild(remainingEl)

const game1 = new Hangman('cat', 2)

puzzleEl.textContent = game1.getPuzzle()
remainingEl.textContent = game1.remainingGuesses

window.addEventListener('keypress', function (e){
    const guess = String.fromCharCode(e.charCode)
    game1.makeGuess(guess)
    puzzleEl.textContent = game1.getPuzzle()
    remainingEl.textContent = game1.remainingGuesses
})