const Hangman = function (word, guesses) {
    this.word = word
    this.guesses = guesses
}

const game1 = new Hangman('bob', 4)

const game2 = new Hangman('New Jersey', 21)

console.log(game1)
console.log(game2)