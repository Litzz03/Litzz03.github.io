import React from 'react';
import styles from './HomeButton.module.css';
import { Link } from 'react-router-dom';

function HomeButton({ icon: Icon, title, screenDestination }) {
  return (
    <Link to={screenDestination} className={styles.homeButton}>
      {Icon && <Icon className={styles.homeIcon}/>}
      <span>{title}</span>
    </Link>
    
  );
}

export default HomeButton;
