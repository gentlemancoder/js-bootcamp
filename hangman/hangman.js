class Hangman {
    constructor (word, remainingGuesses) {
    this.word = word.toLowerCase().split('')
    this.remainingGuesses = remainingGuesses
    this.lettersGuessed = ['']
    this.status = 'playing'
    }

    calculateStatus() {
        const finished = this.word.every((letter) => this.lettersGuessed.includes(letter))
            
        if (this.remainingGuesses <= 0) {
            this.status = 'failed'
        } else if (finished){
            this.status = 'finished'
        } else{
            this.status = 'playing'
        }
        
    }

    get statusMessage () {
        if (this.status === 'playing') {
            return `Guesses left: ${this.remainingGuesses}`
        } else if (this.status === 'failed'){
            return `Nice Try! The word was "${this.word.join('')}"`
        } else {
            return 'Great work! You guessed the word!'
        }
    }
    makeGuess (guess) {
        guess = guess.toLowerCase()
        const isUnique = !this.lettersGuessed.includes(guess)
        const isBadGuess = !this.word.includes(guess)
        
        if (this.status !== 'playing') {
            return
        }
        
        if (isUnique) {
            this.lettersGuessed.push(guess)
        }
        
        if (isUnique && isBadGuess){
            this.remainingGuesses--
        }
        
        this.calculateStatus()
    }

    get puzzle () {
        let puzzle = ''
        
        this.word.forEach(letter => {
            if (this.lettersGuessed.includes(letter) || letter === ' ')
                puzzle += letter
            else
                puzzle += '*'
        })

        return puzzle
    }
}