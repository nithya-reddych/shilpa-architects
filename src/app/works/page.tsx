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
          <div className={styles.workItem} onClick={() => window.location.href='/projects/vikas-school'}>
            <img src="/assets/vs01.jpeg" alt="Project 002" />
            <div className={styles.overlay}>Vikas School</div>
            <div className={styles.workInfo}></div>
          </div>
          <div className={styles.workItem} onClick={() => window.location.href='/projects/nit-warangal'}>
            <img src="/assets/nit01.jpeg" alt="Project 003" />
            <div className={styles.overlay}>NIT Warangal</div>
            <div className={styles.workInfo}></div>
          </div>
          <div className={styles.workItem} onClick={() => window.location.href='/projects/suresh-pulluri'}>
            <img src="/assets/sp01.jpeg" alt="Project 004" />
            <div className={styles.overlay}>Suresh Pulluri Residence</div>
            <div className={styles.workInfo}></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Works;
