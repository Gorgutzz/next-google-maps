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
      default:
        res.setHeader('Allow', ['POST'])
        res.status(405).end(`Method ${method} Not Allowed`)
    }
  }
