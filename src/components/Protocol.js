import React from 'react';
import './style.css';

export default function Protocol({ protocol }) {
  return (
    <div className="flex-column">
      <span className="footer-info">PROTOCOLO</span>
      <span className="protocol-number" id="protocolNumber">
        {protocol}
      </span>
    </div>
  );
}
