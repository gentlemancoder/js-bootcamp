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

getPuzzle(9).then((puzzle) => {
    console.log(puzzle)
}, (error) => {
    console.log(`Error: ${error}`)
})



getCountry("US").then((country) => {
    console.log(`Country Name: ${country.name}`)
}, (error) => {
    console.log(`Error: ${error}`)
})
  

// const countryRequest = new XMLHttpRequest()

// countryRequest.addEventListener('readystatechange', (e) => {
//     if (e.target.readyState == 4 && e.target.status === 200) {
//         const data = JSON.parse(e.target.responseText);
//         const myCountry = data.find((e) => e.alpha2Code === countryCode)
//         console.log(myCountry.name)
//         console.log(data)
//     } else if (e.target.readyState === 4) {
//         console.log('An error has taken place');
//     } 
// })

// countryRequest.open('GET', 'http://restcountries.eu/rest/v2/all')
// countryRequest.send()


