import React, { useEffect, useState } from 'react';

const SlideShow = ({ images = [] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (images.length > 0) {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, 3000); // Change slide every 3 seconds

      return () => clearInterval(interval);
    }
  }, [images.length]);

  return (
    <div className="slideshow">
      <div className="slides">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Slide ${index + 1}`}
            className={index === currentIndex ? 'active' : 'inactive'}
          />
        ))}
      </div>
    </div>
  );
};

export default SlideShow;