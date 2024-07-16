"use client";
import { useState, useEffect } from 'react';
import styles from '../styles/Slideshow.module.css';

const Slideshow = () => {
  
    const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % 3);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const images = [
    '/assets/img1.jpg',
    '/assets/img2.jpg',
    '/assets/img4.jpg',
  ];

  return (
    <div className={styles.slideshowContainer}>
      {images.map((src, index) => (
        <div
          key={index}
          className={`${styles.mySlides} ${index === currentSlide ? styles.active : ''}`}
        >
          <img src={src} alt={`Slide ${index + 1}`} />
        </div>
      ))}
      <div className={styles.dotContainer}>
        {images.map((_, index) => (
          <span
            key={index}
            className={`${styles.dot} ${index === currentSlide ? styles.active : ''}`}
            onClick={() => setCurrentSlide(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Slideshow;
