import React from 'react'
import styles from './Footer.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone,faLocation,faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faInstagram, faLinkedin, faPinterest, faTwitter, faWhatsapp, faYoutube } from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
  return (
    <div id='footer' className={styles.footer_div}>
        <div className={styles.contact_div}>
            <div className={styles.contact_item}>
                <span className={styles.icon}>
                    <FontAwesomeIcon icon={faPhone} color='orange' size='2xl'></FontAwesomeIcon>
                </span>
                <div className={styles.contact_details}>
                    <h3>Phone Number</h3>
                    <h2>+91 967 418 9303</h2>
                </div>
            </div>

            <div className={styles.contact_item}>
                <span className={styles.icon}>
                    <FontAwesomeIcon icon={faLocation} color='orange' size='2xl'></FontAwesomeIcon>
                </span>
                <div className={styles.contact_details}>
                    <h3>Location</h3>
                    <h2>#24, Hoodi Circle, Bangalore, India</h2>
                </div>
            </div>

            <div className={styles.contact_item}>
                <span className={styles.icon}>
                    <FontAwesomeIcon icon={faEnvelope} color='orange' size='2xl'></FontAwesomeIcon>
                </span>
                <div className={styles.contact_details}>
                    <h3>Email</h3>
                    <h2>recruit@aidewiser.co.in</h2>
                </div>
            </div>
        </div>

        
        
        
        <div className={styles.footer_contents}>
            <div className={styles.links}>
                <h2>About Aidewiser</h2>
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
                </p>
            </div>

            <div className={styles.links}>
                <h2>Useful Links</h2>
                <h3> <a href='#home'> {'> '}  Home </a></h3>
                <h3> <a href='#services'> {'> '}  Services </a></h3>
                <h3> <a href='#clients'> {'> '}  Clients </a></h3>
                <h3> <a href='#footer'> {'> '}  Contact Us </a></h3>
                <h3> <a href='#team'> {'> '}  Team </a></h3>
            </div>
        
            <div className={styles.links}>
                <h2>What we do?</h2>
                <h3> {'> '}  Recruitment</h3>
                <h3> {'> '}  HR Outsourcing</h3>
                <h3> {'> '}  Expatriate Services</h3>
                <h3> {'> '}  Executive Search</h3>
            </div>

            <div className={styles.links}>
                <h2>Subscribe & get updates</h2>
                <input className = {styles.field} placeholder='Your Email'></input>
                <button className = {styles.field}>Subscribe Now</button>
            </div>

        </div>

        <div className={styles.social}>
            <span>
                <FontAwesomeIcon color='orange' icon={faFacebook}></FontAwesomeIcon>
            </span>
            <span>
                <FontAwesomeIcon color='orange' icon={faTwitter}></FontAwesomeIcon>
            </span>
            <span>
                <FontAwesomeIcon color='orange' icon={faLinkedin}></FontAwesomeIcon>
            </span>
            <span>
                <FontAwesomeIcon color='orange' icon={faYoutube}></FontAwesomeIcon>
            </span>
            <span>
                <FontAwesomeIcon color='orange' icon={faInstagram}></FontAwesomeIcon>
            </span>
            <span>
                <FontAwesomeIcon color='orange' icon={faPinterest}></FontAwesomeIcon>
            </span>
            <span>
                <FontAwesomeIcon color='orange' icon={faWhatsapp}></FontAwesomeIcon>
            </span>
        </div>
        <p>Copyright © 2023 AideWiser SolTek. All rights reserved.</p>

        
    </div>
  )
}

export default Footer