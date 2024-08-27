import React, { useState } from 'react';
import './Carrosel.css';

const ImageCarousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="carousel-container">
      <button className="carousel-button" onClick={prevSlide}>‹</button>
      <img src={images[currentIndex]} alt="carousel" className="carousel-image" />
      <button className="carousel-button" onClick={nextSlide}>›</button>
    </div>
  );
};

export default ImageCarousel;
