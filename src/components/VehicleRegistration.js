import React from 'react';

export default function VehicleRegistration({ logo, plate }) {
  return (
    <div className="flex-row">
      <img className="avatar" src={logo} alt="" />
      <div className="flex-column">
        <span className="footer-info">PLACA</span>
        <span className="plate">{plate}</span>
      </div>
    </div>
  );
}
