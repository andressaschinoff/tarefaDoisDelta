import React, { useState, useEffect } from 'react';
import Info from './components/Info';
import Maps from './components/Maps';

export default function App() {
  const [currentPosition, setCurrentPosition] = useState([0, 0]);
  const [showMarker, setShowMarker] = useState(false);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      const { latitude, longitude } = position.coords;
      setCurrentPosition([latitude, longitude]);
    });
  });

  const handleMarker = (target) => {
    if (target) {
      setShowMarker(true);
    }
  };

  return (
    <div>
      <Maps showMarker={showMarker} currentPosition={currentPosition} />
      <Info onMarker={handleMarker} currentPosition={currentPosition} />
    </div>
  );
}
