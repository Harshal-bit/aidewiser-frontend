import React, { useState } from 'react'
import styles from "./NavBar.module.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhoneSquare, faBars} from '@fortawesome/free-solid-svg-icons'
import { faEnvelopeOpen } from '@fortawesome/free-regular-svg-icons'
import {faWhatsapp} from "@fortawesome/free-brands-svg-icons"

const NavBar = () => {

  const [toggle,setToggle] = useState(false);
  const closeToggle = () => {
    setToggle(false);
  }
  return (
    <div className={styles.navbar}>
        
         <div className={styles.logo}>
          <img src='/aidewiser.webp'  alt='logo'></img>
          <h1>AideWiser</h1>
         </div>

         
         <ul className={`${styles.navitems} ${(toggle) ? styles['mobile-menu'] : ''}`}>

            <li><a onClick={closeToggle} href='#home'>Home </a></li>
            <li><a onClick={closeToggle} href='#services'>Services </a></li>
            <li><a onClick={closeToggle} href='#clients'>Clients </a></li>
            <li><a onClick={closeToggle} href='#team'>Team </a></li>
            <li><a onClick={closeToggle} href='#about'>About Us </a></li>
            <li><a onClick={closeToggle} href='#footer'>Contact Us </a></li>
            <li><a onClick={closeToggle} href='#home'>Blog </a></li>
         </ul>

          <div className={styles.menu} >
            <span onClick= { () => setToggle(!toggle)}>
              <FontAwesomeIcon icon={faBars} />
            </span>
          </div>
         <div className={styles.connect}>
              <span>
                <FontAwesomeIcon color='orange' icon={faPhoneSquare} />
              </span>
              <span>
                <FontAwesomeIcon color='orange' icon={faEnvelopeOpen} />
              </span>
              <span>
                <FontAwesomeIcon color='orange' icon= {faWhatsapp} />
                
              </span>
         </div>

    </div>
  )
}

export default NavBar