"use client";
import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight, faExpand, faCompress } from '@fortawesome/free-solid-svg-icons';
import styles from '../../../styles/Projects.module.css';
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false

const NarasimhaResidence = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const images = [
    '/assets/narasimha-residence.jpeg',
    '/assets/nr-bedroom.jpeg',
    '/assets/nr-drawingroom.jpeg',
    '/assets/nr-kitchen.jpeg',
    '/assets/nr-livingroom.jpeg',
    '/assets/nr-room.jpeg',
  ];

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && isFullscreen) {
        toggleFullscreen();
      }
      if (event.key === 'ArrowRight') {
        showNextImage(isFullscreen);
      }
      if (event.key === 'ArrowLeft') {
        showPreviousImage(isFullscreen);
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isFullscreen, currentImageIndex]);

  const updateImageCounter = () => {
    const imageCounter = document.querySelector('.image-counter');
    if (imageCounter) {
      imageCounter.textContent = `${currentImageIndex + 1}/${images.length}`;
    }
  };

  const showNextImage = (fullscreen = false) => {
    const newIndex = (currentImageIndex + 1) % images.length;
    setCurrentImageIndex(newIndex);
    if (fullscreen) {
      const fullscreenImage = document.getElementById('fullscreenImage') as HTMLImageElement;
      if (fullscreenImage) {
        fullscreenImage.src = images[newIndex];
      }
    }
    updateImageCounter();
  };

  const showPreviousImage = (fullscreen = false) => {
    const newIndex = (currentImageIndex - 1 + images.length) % images.length;
    setCurrentImageIndex(newIndex);
    if (fullscreen) {
      const fullscreenImage = document.getElementById('fullscreenImage') as HTMLImageElement;
      if (fullscreenImage) {
        fullscreenImage.src = images[newIndex];
      }
    }
    updateImageCounter();
  };

  const toggleFullscreen = () => {
    setIsFullscreen(prevFullscreen => !prevFullscreen); // Toggle fullscreen state
  };

  type ProjectKey = 'narasimha-residence' | 'project002' | 'project003';

  const projectMapping: Record<ProjectKey, string> = {
    'narasimha-residence': 'projects/narasimha-residence',
    project002: 'projects/project002',
    project003: 'projects/project003',
  };

  const projectDisplayNames: Record<ProjectKey, string> = {
    'narasimha-residence': 'Narasimha Residence',
    project002: 'Project 002',
    project003: 'Project 003',
  };

  const navigateTo = (direction: 'next' | 'prev') => {
    const currentUrl = window.location.href;
    const currentProjectName = currentUrl.split('/').slice(-1)[0] as ProjectKey;
    const projectKeys = Object.keys(projectMapping) as ProjectKey[];
    const projectIndex = projectKeys.indexOf(currentProjectName);
  
    if (projectIndex === -1) return;
  
    let newProjectIndex;
    if (direction === 'next') {
      newProjectIndex = projectIndex + 1;
    } else {
      newProjectIndex = projectIndex - 1;
    }
  
    const newProjectName = projectKeys[newProjectIndex];
    if (newProjectName) {
      const newUrl = `${window.location.origin}/${projectMapping[newProjectName]}`;
      window.location.href = newUrl;
    } else {
      console.error('Project not found');
    }
  };

  const checkProjectNumber = () => {
    const currentUrl = window.location.href;
    const currentProjectName = currentUrl.split('/').slice(-2, -1)[0] as ProjectKey;
    const projectKeys = Object.keys(projectMapping) as ProjectKey[];
    const projectIndex = projectKeys.indexOf(currentProjectName);

    if (projectIndex === -1) return;

    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');

    if (projectIndex === 0) {
      prevBtn?.classList.add('invisible');
    } else {
      prevBtn?.classList.remove('invisible');
    }

    if (projectIndex === projectKeys.length - 1) {
      nextBtn?.classList.add('invisible');
    } else {
      nextBtn?.classList.remove('invisible');
    }

    if (projectIndex > 0 && prevBtn) {
      const prevProjectName = projectDisplayNames[projectKeys[projectIndex - 1]];
      const prevSpan = prevBtn.querySelector('span:nth-child(2)');
      if (prevSpan) {
        prevSpan.textContent = prevProjectName;
      }
    }

    if (projectIndex < projectKeys.length - 1 && nextBtn) {
      const nextProjectName = projectDisplayNames[projectKeys[projectIndex + 1]];
      const nextSpan = nextBtn.querySelector('span:nth-child(2)');
      if (nextSpan) {
        nextSpan.textContent = nextProjectName;
      }
    }
  };

  useEffect(() => {
    checkProjectNumber();
  }, []);

  return (
    <>
    <div className={styles.container}>
      <div className={styles.gallery}>
        <span className={styles.imageCounter}>{`${currentImageIndex + 1}/${images.length}`}</span>
        <div className={styles.buttonContainer}>
          {!isFullscreen && <FontAwesomeIcon icon={faChevronLeft} onClick={() => showPreviousImage()} className={styles.chevron} />}
          {!isFullscreen && <FontAwesomeIcon icon={faChevronRight} onClick={() => showNextImage()} className={styles.chevron} />}
        </div>
        {images.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`Image ${index + 1}`}
            className={index === currentImageIndex ? styles.active : ''}
          />
        ))}
        {!isFullscreen && <FontAwesomeIcon icon={faExpand} onClick={() => toggleFullscreen()} className={styles.resizeIcon} />}
      </div>
      <div className={styles.section}>
        <img src="/assets/nr-bedroom.jpeg" alt="Project Image 1" />
        <div className={styles.description}>
          <h2>Elegance in Every Corner</h2>
          <p>Discover the seamless blend of modern design and timeless elegance in this exquisite bedroom. Featuring a harmonious palette of soft neutrals and rich textures, the room offers a serene retreat, while the carefully chosen furnishings add a touch of luxury and comfort. Every detail is meticulously crafted to provide a tranquil and inviting space.</p>
        </div>
      </div>
      <div className={styles.parallax}></div>
      <div className={styles.section}>
        <div className={styles.description}>
          <h2>Artful Living Spaces</h2>
          <p>Experience the beauty of artful living in this thoughtfully designed drawing room. The room is characterized by its open layout and sophisticated decor, where contemporary art pieces and classic furniture coexist harmoniously. The warm tones and plush seating arrangements create an inviting environment perfect for both relaxation and entertaining. This space embodies the perfect balance of style and functionality.</p>
        </div>
        <img src="/assets/nr-drawingroom.jpeg" alt="Project Image 2" />
      </div>
    
      <div id="fullscreenOverlay" className={styles.fullscreenOverlay} style={{ display: isFullscreen ? 'flex' : 'none' }}>
        <FontAwesomeIcon icon={faChevronLeft} onClick={() => showPreviousImage(true)} className={styles.chevron} />
        <img id="fullscreenImage" alt="Fullscreen" src={images[currentImageIndex]} />
        <FontAwesomeIcon icon={faChevronRight} onClick={() => showNextImage(true)} className={styles.chevron} />
        <FontAwesomeIcon icon={faCompress} onClick={() => toggleFullscreen()} className={styles.resizeIcon} />
        <div className={styles.imageCounter}>{`${currentImageIndex + 1}/${images.length}`}</div>
      </div>
    </div>
    <div className={styles.navButtons}>
        <button id="prev-btn" onClick={() => navigateTo('prev')}>
          <span>Previous Project</span>
          <span>narasimha residence</span>
        </button>
        <button id="next-btn" onClick={() => navigateTo('next')}>
          <span>Next Project</span>
          <span>project003</span>
        </button>
      </div>
    </>
  );
};

export default NarasimhaResidence;
