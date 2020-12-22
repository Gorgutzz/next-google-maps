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
    }
  }
