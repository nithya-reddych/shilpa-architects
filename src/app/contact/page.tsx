import styles from '../../styles/Contact.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';

config.autoAddCss = false;

const Contact = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Get in Touch with Us !</h1>
      <div className={styles.contactInfo}>
        <div className={`${styles.contactItem} ${styles.fadeIn}`}>
          <FontAwesomeIcon icon={faPhone} className={styles.icon} />
          <span className={styles.contactText}>+91 99999 99999</span>
        </div>
        <div className={`${styles.contactItem} ${styles.fadeIn}`}>
          <FontAwesomeIcon icon={faEnvelope} className={styles.icon} />
          <span className={styles.contactText}>shilpa-architects@gmail.com</span>
        </div>
        <div className={`${styles.contactItem} ${styles.fadeIn}`}>
          <FontAwesomeIcon icon={faMapMarkerAlt} className={styles.icon} />
          <span className={styles.contactText}>Hanamkonda</span>
        </div>
      </div>
    </div>
  );
};

export default Contact;
