import React from 'react';
import classes from '../UI/component.css'

const ErrorWindow = ({ errorMessage }) => {
  return (
    <div className="error-container">
      <p className="error-message">Errо<span>r</span></p>
      <p className="error-details">{errorMessage}</p>
    </div>
  );
};

export default ErrorWindow;
