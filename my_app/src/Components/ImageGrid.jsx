import React from 'react';
import Rodrigo from '../assets/Images/Rodrigo.jpg';
import './ImageGrid.css';

function ImageGrid() {
  return (
    <div className="image-grid">
      <img src={Rodrigo} alt="Rodrigo" />
      <img src={Rodrigo} alt="Rodrigo" />
      <img src={Rodrigo} alt="Rodrigo" />
      <img src={Rodrigo} alt="Rodrigo" />
    </div>
  );
}

export default ImageGrid;
