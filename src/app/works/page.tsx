"use client";

import Navbar from '../../components/Navbar';
import styles from '../../styles/Works.module.css';

const Works = () => {
  return (
    <>
      <Navbar />
      <div className={styles.container}>
        <div className={styles.workGrid}>
          <div className={styles.workItem} onClick={() => window.location.href='/projects/narasimha-residence'}>
            <img src="/assets/narasimha-residence.jpeg" alt="Narasimha Residence" />
            <div className={styles.overlay}>Narasimha Residence</div>
            <div className={styles.workInfo}></div>
          </div>
          <div className={styles.workItem} onClick={() => window.location.href='/projects/project002'}>
            <img src="/assets/img8.jpeg" alt="Project 002" />
            <div className={styles.overlay}>Project 002</div>
            <div className={styles.workInfo}></div>
          </div>
          <div className={styles.workItem} onClick={() => window.location.href='/projects/project003'}>
            <img src="/assets/img6.jpg" alt="Project 003" />
            <div className={styles.overlay}>Project 003</div>
            <div className={styles.workInfo}></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Works;
