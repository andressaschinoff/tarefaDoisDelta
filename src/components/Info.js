import React, { useState, useEffect } from 'react';
import LocationInfo from './LocationInfo';
import Confirmation from './Confirmation';
import Footer from './Footer';
import './style.css';

export default function Info({ currentPosition, onMarker }) {
  const [allVehicles, setAllVehicles] = useState([]);
  const [currentPlate, setCurrentPlate] = useState('IXS-8269');
  const [currentBrandLogo, setCurrentBrandLogo] = useState('');
  const [currentProtocol, setCurrentProtocol] = useState(1457845856894);
  const [confirmed, setConfirmed] = useState(false);

  const currentUser = 'José Fernando';

  useEffect(() => {
    const fetchVehicles = async () => {
      const res = await fetch('vehicleRegistration.json');
      const json = await res.json();
      setAllVehicles(json);
    };

    fetchVehicles();
  }, []);

  const handleConfimation = () => {
    const currentVehicle = allVehicles.find(
      ({ owner }) => owner === currentUser
    );

    const newProtocol = Math.floor(Math.random() * 1000000000000);

    setCurrentPlate(currentVehicle.plate);
    setCurrentBrandLogo(currentVehicle.brandLogo);
    setCurrentProtocol(newProtocol);
    setConfirmed(true);
  };

  const handleTarget = (target) => {
    if (target) {
      onMarker(target);
    }
  };

  return (
    <div className="info-container">
      <LocationInfo onTarget={handleTarget} currentPosition={currentPosition} />
      <Confirmation onConfimation={handleConfimation} />
      <Footer
        vehicleInfo={{
          currentPlate,
          currentBrandLogo,
          currentProtocol,
          confirmed,
        }}
      />
    </div>
  );
}
