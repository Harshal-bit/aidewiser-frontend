import React from 'react'
import styles from "./About.module.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faBullseye } from '@fortawesome/free-solid-svg-icons'

const About = () => {
  return (
    <div id='about'className={styles.about_div}>
        <div className={styles.left_div}> 
            <h2>About Us</h2>
            <p>AideWiser was born with a dream to aid a vast spectrum of organisations to prosper and propel towards growth. It is the brainchild of two close friends and motivated professionals.</p>
            <br />
            <p>In the contemporary world, companies prefer to outsource functions in order to reduce costs, while getting things done effectively. Our founders understood this and came up with an intelligent idea of AideWiser.</p>
            <br />
            <p><i>AideWiser SolTek – An Aide to Your Business!</i></p>

            <div className={styles.objectives}>
                <div className={styles.objective}>
                    <FontAwesomeIcon color='black' icon={faEye}></FontAwesomeIcon>
                    <div className={styles.content}>
                        <strong>Our Vision</strong>
                        <br />
                        To be the right hand in everyone's success.
                    </div>
                </div>

                <div className={styles.objective}>
                    <FontAwesomeIcon color='black' icon={faBullseye}></FontAwesomeIcon>
                    <div className={styles.content}>
                        <strong>Our Mission</strong>
                        <br />
                        To provide organisations with expert solutions which help them achieve their goals and become a leader partner in enhancing business processes with next-generation technologies.
                    </div>
                </div>


            </div>
        </div>
        <div className={styles.right_div}>
            <img src='/aidewiser_services_image.webp'></img>
        </div>
    </div>
  )
}

export default About