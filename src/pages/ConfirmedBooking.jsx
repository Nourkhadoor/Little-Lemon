import React from 'react';

const ConfirmedBooking = ({ onClose }) => {
  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={onClose}>&times;</span>
        <h2>Booking Confirmed</h2>
        <p className="confirmation-message">Your booking has been confirmed. Thank you!</p>
      </div>
    </div>
  );
}

export default ConfirmedBooking;
