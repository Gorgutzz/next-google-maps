import fetch from 'isomorphic-unfetch'
export default async (req, res) => {
    const {
        method,
        body
    } = req
    const encodedAddress = encodeURI(body.address)
    switch (method) {
      case 'POST':
          try {
                const currentLocation = await fetch(`https://google-maps-geocoding.p.rapidapi.com/geocode/json?language=en&address=${encodedAddress}`, {
                    "method": "GET",
                    "headers": {
                    "x-rapidapi-host": "google-maps-geocoding.p.rapidapi.com",
                    "x-rapidapi-key": process.env.RAPIDAPI_KEY
                    }
                })
                const locationData = await currentLocation.json();
                const lat = locationData.results[0].geometry.location.lat
                const long = locationData.results[0].geometry.location.lng
                const attractions = await fetch(`https://tripadvisor1.p.rapidapi.com/attractions/list-by-latlng?lunit=km&currency=USD&limit=10&distance=10&lang=en_US&longitude=${long}&latitude=${lat}`, {
                    "method": "GET",
                    "headers": {
                        "x-rapidapi-host": "tripadvisor1.p.rapidapi.com","x-rapidapi-key": process.env.RAPIDAPI_KEY
                    }
                })
        break
      default:
        res.setHeader('Allow', ['POST'])
        res.status(405).end(`Method ${method} Not Allowed`)
    }
  }
