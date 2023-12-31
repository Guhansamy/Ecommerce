import React, { useState, useEffect } from 'react';

const ScrollableImg = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = [
    "https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/016910bef5f24a49.jpg?q=20",
    "https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/a787505b979e7579.jpg?q=20",
    "https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/e241ff89ba654f6f.jpg?q=20"
  ];

  useEffect(() => {
    const intervalId = setInterval(() => {

        setScrollPosition(prevPosition => prevPosition + 5);

      if (scrollPosition >= (images.length) * 770 +50) {
        setScrollPosition(0);
      }

      setCurrentImageIndex(prevIndex => (prevIndex + 1) % images.length);
    }, 100); 

   
    return () => clearInterval(intervalId);
  }, [scrollPosition]); 

  return (
    <div className="scrollable-container">
      <div 
        className="scrollable-content" 
        style={{ transform: `translateX(-${scrollPosition}px)` }}
      >

        {/* use the below to code to make the images with movement 🤩🤩🤩 */}

        {images.map((imageUrl, index) => (
          <img 
            key={index} 
            src={imageUrl} 
            alt={`Image ${index}`} 
            className={`scroll-item ${currentImageIndex === index ? 'active' : ''}`} 
          />
        ))}

      </div>
    </div>
  );
}

export default ScrollableImg;
