const getPuzzle = async (wordCount) => {
    const response = await fetch(`http://puzzle.mead.io/puzzle?wordCount=${wordCount}`)

    if (response.status === 200) {
        const data = await response.json()
        return data.puzzle
    }else{
        throw new Error('Unable to fetch puzzle')
    }

}

const oldGetPuzzle = (wordCount) => {
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

const getCountry = async (countryCode) => {
    const response = await fetch('http://restcountries.eu/rest/v2/all')
    
    if (response.status === 200) {
            const data = await response.json()
            return data.find((e) => e.alpha2Code === countryCode)
        } else{
            throw new Error('Unable to fetch data');
        }
    
}

const getLocation = async () => {
    const response = await fetch('https://ipinfo.io/json?token=f73a85ebe85047')

        if (response.status === 200) {
            return await response.json()
        } else {
            throw new Error('An error occured while fetching your data')
        }
    } 
