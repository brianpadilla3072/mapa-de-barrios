import React from 'react'
import { Marker } from 'react-leaflet'
function addMarkers(latitude,longitude,icon) {
  return (
    <Marker position={{lat:latitude,lng:longitude}} icon={icon}/>
  )
}

export default addMarkers;