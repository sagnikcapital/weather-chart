import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';


const containerStyle = {
  width: '100%',
  height: '400px'
};
const GoogleMapComponent = ({ latitude, longitude })  => {
  const center = {
    lat: latitude,
    lng: longitude
  };

  return (
    <LoadScript googleMapsApiKey={'AIzaSyC9gvbv3-ZzEcPpRzJQScdV_xHKpg1uQuw'}>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}
      >
        <Marker position={center} />
      </GoogleMap>
    </LoadScript>  
  );
}

export default GoogleMapComponent;