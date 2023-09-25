import React from 'react'
import styles from "./Services.module.css"

const Services = () => {
  return (  
    <div id='services' className={styles.services_div}>
        
        <div className={styles.heading}>
            <h2>Our Services</h2>
            <h1>Tailoring Talent For Excellence</h1>
            <p>At AideWiser, we offer the following services to assist organisations in accomplishing their objectives.</p>
        </div>

        
        <div className={styles.service_boxes}>
            <div className={styles.service_box}>
                <h5> Find Job that suits you</h5>
                <h6>Recruitment</h6>
                <p>Enhance your team with our efficient hiring. Whether it's IT, non-IT, or lateral hiring, we've got you covered. Streamline recruitment for success.</p>
            </div>

            <div className={styles.service_box}>
                <h5> Find Job that suits you</h5>   
                <h6>Career Guidance</h6>
                <p>Navigate your career with our expert guidance. Gain essential training, perfect your resume, and walk with confidence towards attaining enduring achievements.</p>
            </div>

            <div className={styles.service_box}>
                <h5> Find Job that suits you</h5>
                <h6>Headhunting</h6>
                <p>Discover exceptional leaders for your team through our headhunting expertise. We specialise in high-calibre executive talent that matches your unique needs.</p>
            </div>

            <div className={styles.service_box}>
                <h5> Find Job that suits you</h5>
                <h6>Contract Staffing</h6>
                <p>Enhance your team with our efficient hiring. Whether it's IT, non-IT, or lateral hiring, we've got you covered. Streamline recruitment for success.</p>
            </div>
        </div>
    </div>
  )
}

export default Services