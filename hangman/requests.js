const getPuzzle = (wordCount) => {
    return fetch(`http://puzzle.mead.io/puzzle?wordCount=${wordCount}`).then((response) => {
        if (response.status === 200) {
            return response.json()
        }else{
            throw new Error('Unable to fetch puzzle')
        }
    }).then((data) => {
        return data.puzzle
    })
}




const getCountry = (countryCode) => new Promise((resolve, reject) => {
    return fetch('http://restcountries.eu/rest/v2/all').then((response) => {
        if (response.status === 200) {
            const data = JSON.parse(response.responseText);
            const myCountry = data.find((e) => e.alpha2Code === countryCode)
            resolve(myCountry)
        } else if (e.target.readyState === 4) {
            reject('An error has taken place');
        }
    })
})
