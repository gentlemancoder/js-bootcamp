
const Hangman = function (word, remainingGuesses) {
    this.word = word.toLowerCase().split('')
    this.remainingGuesses = remainingGuesses
    this.lettersGuessed = ['']
}

Hangman.prototype.makeGuess = function (guess) {
    if(guess.length > 1){
        console.log("'Invalid guess")
    }
    
    guess =guess.toLowerCase()
    const isUnique = !this.lettersGuessed.includes(guess)
    const isBadGuess = !this.word.includes(guess)
    if (isUnique) {
        this.lettersGuessed.push(guess)
    }
    
    if (isUnique && isBadGuess){
        this.remainingGuesses--
    }
}

Hangman.prototype.getPuzzle = function () {
    let puzzle = ''
    
    this.word.forEach(letter => {
        if (this.lettersGuessed.includes(letter) || letter === ' ')
            puzzle += letter
        else
            puzzle += '*'
    })

    return puzzle
}

const game1 = new Hangman('cat', 2)
console.log(game1.remainingGuesses)
console.log(game1.getPuzzle())

window.addEventListener('keypress', function (e){
    const guess = String.fromCharCode(e.charCode)
    game1.makeGuess(guess)
    console.log(game1.remainingGuesses)
    console.log(game1.getPuzzle())
})