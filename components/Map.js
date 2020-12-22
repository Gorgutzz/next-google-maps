import React from 'react'
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"
import fetch from 'isomorphic-unfetch'

const MapComponent = withScriptjs(withGoogleMap((props) => (
    <GoogleMap
    defaultZoom={14}
    defaultCenter={{ lat: props.lat, lng: props.long }}
    center={{ lat: props.lat, lng: props.long }}
    >
        {props.isMarkerShown && <Marker shape="rectangle" position={{ lat: props.lat, lng: props.long }} />}
        {props.attractions.length > 1 && props.attractions.map((attraction, i) => {
            return <Marker
                key={`${attraction.location_id}-${i}`}
                position={{lat: Number(attraction.latitude),lng: Number(attraction.longitude)}}
                label={attraction.name}
                title={attraction.name}
                />
        })}
    </GoogleMap>
)))

const Main = () => {
    let [latitude, setLatitude] = React.useState(-33.7560119)
    let [longitude, setLongitude] = React.useState(150.6038367)
    let [attractions, setAttractions] = React.useState([])
    let [address, setAddress] = React.useState('')
    let [message, setMessage] = React.useState({})

    const updateCoordinates = (e) => {
        e.preventDefault()

        setMessage({text: 'Loading..', variant: 'info'})

        const data = {
            address
        }

    }

    return (
    )
}

export default Main
