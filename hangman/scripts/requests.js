const getPuzzle = async (wordCount) => {
    const response = await fetch(`//puzzle.mead.io/puzzle?wordCount=${wordCount}`)

    if (response.status === 200) {
        const data = await response.json()
        return data.puzzle
    }else{
        throw new Error('Unable to fetch puzzle')
    }

}

const oldGetPuzzle = (wordCount) => {
    return fetch(`//puzzle.mead.io/puzzle?wordCount=${wordCount}`).then((response) => {
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
    const response = await fetch('//restcountries.eu/rest/v2/all')
    
    if (response.status === 200) {
            const data = await response.json()
            return data.find((e) => e.alpha2Code === countryCode)
        } else{
            throw new Error('Unable to fetch data');
        }
    
}

const getLocation = async () => {
    const response = await fetch('//ipinfo.io/json?token=f73a85ebe85047')

        if (response.status === 200) {
            return await response.json()
        } else {
            throw new Error('An error occured while fetching your data')
        }
} 

const getCurrentCountry = async () => {
    const location = await getLocation()
    return await getCountry(location.country) 
}