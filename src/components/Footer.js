import React from 'react';
import VehicleRegistration from './VehicleRegistration';
import Protocol from './Protocol';

export default function Footer({ vehicleInfo }) {
  const {
    currentPlate,
    currentBrandLogo,
    currentProtocol,
    confirmed,
  } = vehicleInfo;

  const classFooter = confirmed ? styles.visibleFooter : styles.hidden;

  return (
    <div style={classFooter} className="footer-container">
      <VehicleRegistration plate={currentPlate} logo={currentBrandLogo} />
      <Protocol protocol={currentProtocol} />
    </div>
  );
}

const styles = {
  hidden: {
    visibility: 'hidden',
  },

  visibleFooter: {
    visibility: 'visible',
  },
};
