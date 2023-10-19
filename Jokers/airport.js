const url = 'https://airports-by-api-ninjas.p.rapidapi.com/v1/airports?country=US'
const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '16806452c5mshfb321706c9a62fbp118a73jsn7602a14f4b61',
        'X-RapidAPI-Host': 'airports-by-api-ninjas.p.rapidapi.com',
    },
}


async function getAirportData () {
    const response = await fetch(url, options, { timeout: 10000 })
    if (!response.ok) {
        throw new Error(`Error: status ${response.status}`)
    }
    else {
        try {
            const result = await response.json()
            console.log(result)
        
        } catch(error) {
            console.error(`Fetch error: ${error}`)
        }
    }

}

getAirportData()