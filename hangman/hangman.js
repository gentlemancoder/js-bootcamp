
const Hangman = function (word, remainingGuesses) {
    this.word = word.toLowerCase().split('')
    this.remainingGuesses = remainingGuesses
    this.lettersGuessed = ['']
    this.status = 'playing'
}

Hangman.prototype.calculateStatus = function () {
    const finished = this.word.every((letter) => this.lettersGuessed.includes(letter))
        
    if (this.remainingGuesses <= 0) {
        this.status = 'failed'
    } else if (finished){
        this.status = 'finished'
    } else{
        this.status = 'playing'
    }
    
}

Hangman.prototype.getStatus = function () {
    if (this.status === 'playing') {
        return `Guesses left: ${this.remainingGuesses}`
    } else if (this.status === 'failed'){
        let theWord = this.word.join('')
        return `Nice Try! The word was ${theWord}`
    } else {
        return 'Great work! You guessed the word!'
    }
}
Hangman.prototype.makeGuess = function (guess) {
    
    if (this.status !== 'playing') {
        return
    }
    
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
    
    this.calculateStatus()
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
