import React from 'react';
import { GoogleMap, Marker } from "react-google-maps";

const Location = () => {
  const coordinates = {
    lat: 18.9662,
    lng: 72.8359
  };

  return (
    <GoogleMap
      center={coordinates}
      zoom={13}
    >
      <Marker position={coordinates} />
    </GoogleMap>
  );
};


export default Location;