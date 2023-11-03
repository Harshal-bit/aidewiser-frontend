import React from 'react';
import styles from './BlogNavbar.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const BlogNavbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <img src="/aidewiser.webp" alt="Company Logo" className={styles.logoImage} />
        <div className={styles.logotext}>
            <h1>Wisdom</h1>
            <p><sub>by aidewiser</sub></p>
        </div>
      </div>
      <div className={styles.searchBar}>
        <input className={styles.searchinput} type="text" placeholder="Search..."  />
        <span>
            <FontAwesomeIcon size='xl'  icon={faSearch}/>
        </span>
      </div>
    </nav>
  );
};



export default BlogNavbar;
