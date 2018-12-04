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

const getCountry = (countryCode) => {
    return fetch('http://restcountries.eu/rest/v2/all').then((response) => {
        if (response.status === 200) {
            return response.json()
        } else{
            throw new Error('Unable to fetch data');
        }
        }).then((data) => data.find((e) => e.alpha2Code === countryCode))
}

const getLocation = () => {
    return fetch('https://ipinfo.io/json?token=f73a85ebe85047').then((response) => {
        if (response.status === 200) {
            return response.json()
        } else {
            throw new Error('An error occured while fetching your data')
        }
    }).then((data) => data) 
}