import React from 'react'
import styles from "./WelcomeContent.module.css"
import { faEnvelopeOpen } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const WelcomeContent = () => {


  return (
    <div id="home" className={styles.welcome_container}>
      <div className={styles.left_container}>
          <h6> Welcome to Aidewiser</h6>
          <h1> Hiring, Placement, Career<br/> Recruitment matlab AideWiser! </h1>
          <p>Phasellus luctus, tellus sit amet dignissim tempus, turpis metus tempus enim, non tristique risus diam ut arcu, praesent suscipit aliquam mauris.</p>  
      </div>
      
      <div className={styles.right_container}>
        <div className={styles.image_container}>
          <img src='/aidewiser-welcome.png' alt='welcome'></img>
        </div>
      </div>

    </div>
  )
}
