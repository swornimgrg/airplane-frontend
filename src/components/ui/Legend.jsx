import React from 'react';
import './Legend.css';

const Legend = () => {
  return (
    <div className="legend">
      <div className="legend-item">
        <div className="rectangle available"></div>
        <span>Available</span>
      </div>
      <div className="legend-item">
        <div className="rectangle selected"></div>
        <span>Selected</span>
      </div>
      <div className="legend-item">
        <div className="rectangle aisle"></div>
        <span>Aisle</span>
      </div>
      <div className="legend-item">
        <div className="rectangle disabled"></div>
        <span>Disabled</span>
      </div>
      <div className="legend-item">
        <div className="rectangle fire-exit"></div>
        <span>Fire Exit</span>
      </div>
    </div>
  );
};

export default Legend;
