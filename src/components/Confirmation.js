import React from 'react';

export default function Confirmation({ onConfimation }) {
  const handleConfirmation = () => {
    onConfimation();
  };

  return (
    <div className="confirmation-container">
      <h6 className="confirmation-title">Confirme o seu local</h6>
      <p className="confirmation-description">
        Ajude o seu prestador a localiza-lo mais rapidamente, ajuste sua
        localização acima!
      </p>
      <button onClick={handleConfirmation} className="confirmation-btn">
        <span>CONFIRMAR O LOCAL DA OCORRÊNCIA</span>
        <span>
          <i className="material-icons">arrow_forward</i>
        </span>
      </button>
    </div>
  );
}
