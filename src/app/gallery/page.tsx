"use client";
import styles from '../../styles/Gallery.module.css';
import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight, faExpand, faCompress } from '@fortawesome/free-solid-svg-icons';
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
config.autoAddCss = false;

const images = [
  '/assets/gallery1.jpeg',
  '/assets/gallery2.jpeg',
  '/assets/gallery3.jpeg',
  '/assets/gallery4.jpeg',
  '/assets/gallery5.jpeg',
  '/assets/gallery6.jpeg',
  '/assets/gallery7.jpeg',
  '/assets/gallery8.jpeg',
  '/assets/gallery9.jpeg',
  '/assets/gallery10.jpeg',
  '/assets/gallery11.jpeg',
  '/assets/gallery12.jpeg',
  '/assets/gallery13.jpeg',
  '/assets/gallery14.jpeg',
  '/assets/gallery15.jpeg',
  '/assets/gallery16.jpeg',
  '/assets/gallery17.jpeg',
  '/assets/gallery18.jpeg',
  '/assets/gallery19.jpeg',
  '/assets/gallery20.jpeg',
  '/assets/gallery21.jpeg',
  '/assets/gallery22.jpeg',
  '/assets/gallery23.jpeg',
  '/assets/gallery24.jpeg',
  '/assets/gallery25.jpeg',
  '/assets/gallery26.jpeg',
  '/assets/gallery27.jpeg',
  '/assets/gallery28.jpeg',
  '/assets/gallery29.jpeg',
  '/assets/gallery30.jpeg',
];

const Gallery = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState<number | null>(null);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        closeFullscreen();
      }
      if (event.key === 'ArrowRight') {
        showNextImage();
      }
      if (event.key === 'ArrowLeft') {
        showPreviousImage();
      }
    };

    if (currentImageIndex !== null) {
      document.addEventListener('keydown', handleKeyDown);
    } else {
      document.removeEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [currentImageIndex]);

  const showNextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex !== null ? (prevIndex + 1) % images.length : 0));
  };

  const showPreviousImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex !== null ? (prevIndex - 1 + images.length) % images.length : images.length - 1));
  };

  const closeFullscreen = () => {
    setCurrentImageIndex(null);
  };

  return (
    <div className={styles.container}>
      <h1>Completed Projects</h1>
      <div className={styles.gallery}>
        {images.map((src, index) => (
          <div key={index} className={styles.imageWrapper} onClick={() => setCurrentImageIndex(index)}>
            <img src={src} alt={`Project ${index + 1}`} className={styles.image} />
          </div>
        ))}
      </div>

      {currentImageIndex !== null && (
        <div className={styles.fullscreenOverlay}>
          <FontAwesomeIcon icon={faChevronLeft} onClick={showPreviousImage} className={styles.chevron} />
          <img src={images[currentImageIndex]} alt={`Project ${currentImageIndex + 1}`} className={styles.fullscreenImage} />
          <FontAwesomeIcon icon={faChevronRight} onClick={showNextImage} className={styles.chevron} />
          <FontAwesomeIcon icon={faCompress} onClick={closeFullscreen} className={styles.resizeIcon} />
        </div>
      )}
    </div>
  );
};

export default Gallery;
