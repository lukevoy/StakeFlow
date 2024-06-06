import React from 'react';
import './NotificationBanner.css';

const NotificationBanner = ({ type = 'info', message, onClose }) => {
  return (
    <div className={`notification-banner ${type}`}>
      <span className="message">{message}</span>
      {onClose && (
        <button className="close-btn" onClick={onClose}>
          ✕
        </button>
      )}
    </div>
  );
};

export default NotificationBanner;

