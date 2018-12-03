
const Hangman = function (word, remainingGuesses) {
    this.word = word.toLowerCase().split('')
    this.remainingGuesses = remainingGuesses
    this.lettersGuessed = ['']
}

Hangman.prototype.makeGuess = function (guess) {
    if(guess.length > 1){
        console.log("'Invalid guess")
    }
    
    guess = guess.toLowerCase()
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

Hangman.prototype.calculateStatus = function () {
    if (this.remainingGuesses <= 0) {
        return 'failed'
    }
    if (this.word.forEach(letter => {
        return this.lettersGuessed.includes(letter)
    })) 
        return 'finished'
    
    else return 'playing'
}
