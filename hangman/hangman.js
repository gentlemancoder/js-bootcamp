
const Hangman = function (word, remainingGuesses) {
    this.word = word.toLowerCase().split('')
    this.remainingGuesses = remainingGuesses
    this.lettersGuessed = [' ', 'e']
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

const game1 = new Hangman('bob', 4)

const game2 = new Hangman('New Jersey', 21)

console.log(game1.getPuzzle())
console.log(game2.getPuzzle())