
const Hangman = function (word, remainingGuesses) {
    this.word = word.toLowerCase().split('')
    this.remainingGuesses = remainingGuesses
    this.lettersGuessed = [' ', 'e']
}

Hangman.prototype.getPuzzle = function () {
    let puzzle = ''
    for (let i = 0; i < this.word.length; i++){
        let isMatch = false
        for (let j = 0; j < this.lettersGuessed.length; j++) {
            if (this.word[i] === this.lettersGuessed[j].toLowerCase()) 
                isMatch = true
        }
        puzzle += (isMatch ? this.word[i] : '*')
    }
    return puzzle
}

const game1 = new Hangman('bob', 4)

const game2 = new Hangman('New Jersey', 21)

console.log(game1.getPuzzle())
console.log(game2.getPuzzle())