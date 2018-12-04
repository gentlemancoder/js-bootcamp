const getPuzzle = (wordCount) => new Promise((resolve, reject) => {
    const request = new XMLHttpRequest()

    request.addEventListener('readystatechange', (e) => {
        if(e.target.readyState === 4 && e.target.status === 200) {
            const data = JSON.parse(e.target.responseText)
            resolve(data.puzzle)
        } else if (e.target.readyState === 4) {
            reject('An error has taken place')
        } 
    })

    request.open('GET', `http://puzzle.mead.io/puzzle?wordCount=${wordCount}`)
    request.send()
}


const getCountry = function (countryCode, callback) {
    const countryRequest = new XMLHttpRequest()

    countryRequest.addEventListener('readystatechange', (e) => {
        if (e.target.readyState == 4 && e.target.status === 200) {
            const data = JSON.parse(e.target.responseText);
            const myCountry = data.find((e) => e.alpha2Code === countryCode)
            callback(undefined, myCountry)
        } else if (e.target.readyState === 4) {
            callback('An error has taken place', undefined);
        } 
    })
    
    countryRequest.open('GET', 'http://restcountries.eu/rest/v2/all')
    countryRequest.send()    
} 
