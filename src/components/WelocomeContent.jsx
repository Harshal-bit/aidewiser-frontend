import React from 'react'
import styles from "./WelcomeContent.module.css"
import { useSelector } from 'react-redux'


const WelcomeContent = () => {
  
  console.log('WelcomeContent component re-rendered');
  const user = useSelector((state) => state.auth.user);
  
  console.log(user);
  

  return (
    <div id="home" className={styles.welcome_container}>
      <div className={styles.left_container}>
          {user && <h6>Hi {user.fullname},</h6>}
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

export default WelcomeContent;
