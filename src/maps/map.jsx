import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import PropTypes from 'prop-types';

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
    <LoadScript googleMapsApiKey={import.meta.env.VITE_APP_GOOGLE_MAPS_API_KEY} scriptOptions={{
      defer: true,
      async: true,
    }}>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={16}
      >
        <Marker position={center} />
      </GoogleMap>
    </LoadScript>  
  );
}

GoogleMapComponent.propTypes = {
  latitude: PropTypes.number,
  longitude: PropTypes.number
}

export default GoogleMapComponent;