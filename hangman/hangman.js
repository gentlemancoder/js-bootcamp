
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

    if (!this.lettersGuessed.includes(guess)) {
        this.lettersGuessed += guess
        if (!this.word.includes(guess)){
            this.remainingGuesses--
        }
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
game1.makeGuess('c')
game1.makeGuess('t')
game1.makeGuess('z')
console.log(game1.getPuzzle())
console.log(game1.remainingGuesses)
console.log(game1.lettersGuessed)
const game2 = new Hangman('New Jersey', 4)
game2.makeGuess('w')
console.log(game2.getPuzzle())
console.log(game2.remainingGuesses)