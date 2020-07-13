import React, { useState, useEffect } from 'react';

export default function LocationInfo({ currentPosition, onTarget }) {
  const [currentRoad, setCurrentRoad] = useState('');
  const [target, setTarget] = useState(false);

  const classRoad = target ? styles.visibleRoad : styles.hidden;

  useEffect(() => {
    if (target) {
      onTarget(target);
    }
  }, [target, onTarget]);

  const handleLocationTarget = () => {
    const currentLatitude = currentPosition[0];
    const currentLongitude = currentPosition[1];

    const reverseGeocode = async () => {
      const res = await fetch(
        `https://us1.locationiq.com/v1/reverse.php?key=7ecb87ae282d1f&lat=${currentLatitude}&lon=${currentLongitude}&format=json`
      );
      const json = await res.json();

      const { address } = json;

      const currentAddress = `${address.road}, ${address.house_number}`;

      setCurrentRoad(currentAddress);
      setTarget(true);
    };
    reverseGeocode();
  };

  return (
    <div className="location-container">
      <span style={classRoad} className="location-info">
        {currentRoad}
      </span>
      <button onClick={handleLocationTarget} className="location-target">
        <i className="material-icons">my_location</i>
      </button>
    </div>
  );
}

const styles = {
  hidden: {
    visibility: 'hidden',
  },

  visibleRoad: {
    visibility: 'visible',
  },
};
