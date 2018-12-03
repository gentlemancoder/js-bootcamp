const gameLocation = document.querySelector('#game')

const puzzleEl = document.createElement('div')
const remainingEl = document.createElement('div')
const statusEl = document.createElement('div')

gameLocation.appendChild(puzzleEl)
gameLocation.appendChild(remainingEl)
gameLocation.appendChild(statusEl)

const game1 = new Hangman('Car Parts', 2)

puzzleEl.textContent = game1.puzzle
remainingEl.textContent = game1.remainingGuesses

window.addEventListener('keypress', (e) => {
    const guess = String.fromCharCode(e.charCode)
    game1.makeGuess(guess)
    puzzleEl.textContent = game1.puzzle
    remainingEl.textContent = game1.remainingGuesses
    statusEl.textContent = game1.statusMessage
})

Making an HTTP request
const request = new XMLHttpRequest()

request.addEventListener('readystatechange', (e) => {
    if(e.target.readyState === 4 && e.target.status === 200) {
        const data = JSON.parse(e.target.responseText);
        console.log(data)
    } else if (e.target.readyState === 4) {
        console.log('An error has taken place');
    } 
})

request.open('GET', 'http://puzzle.mead.io/puzzle?wordCount=3')
request.send()

const countryCode = "AF" 
const countryRequest = new XMLHttpRequest()

countryRequest.addEventListener('readystatechange', (e) => {
    if (e.target.readyState == 4 && e.target.status === 200) {
        const data = JSON.parse(e.target.responseText);
        const myCountry = data.find((e) => e.alpha2Code === countryCode)
        console.log(myCountry.name)
        console.log(data)
    } else if (e.target.readyState === 4) {
        console.log('An error has taken place');
    } 
})

countryRequest.open('GET', 'http://restcountries.eu/rest/v2/all')
countryRequest.send()


