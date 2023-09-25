import React from 'react'
import styles from './Inforamtion.module.css'

const Information = () => {
  return (
    <div id='#info'className={styles.info_div}>
        <div className={styles.left_div}>
            
            <img src='/aidewiser.jpg' alt='top-img'></img>
            
        </div>
        <div className={styles.right_div}>
            <h6>Why choose us?</h6>
            <h2>Finding The Right Fit, Every Time</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>

            <div className={styles.objectives}>
                <div className={styles.objective}>
                    <h1>01</h1>
                    <div className={styles.content}>
                        <h4>Profile The Ideal Candidates</h4>
                        <p>Phasellus ac ipsum sed elit iaculis dapibus a sed erat. Aliquam at nisi sed magna laoreet mattis. Etiam vitae dignissim ligula.</p>
                    </div>
                </div>

                <div className={styles.objective}>
                    <h1>02</h1>
                    <div className={styles.content}>
                        <h4>Targeted Headhunting</h4>
                        <p>Phasellus ac ipsum sed elit iaculis dapibus a sed erat. Aliquam at nisi sed magna laoreet mattis. Etiam vitae dignissim ligula.</p>
                    </div>
                </div>

                <div className={styles.objective}>
                    <h1>03</h1>
                    <div className={styles.content}>
                        <h4>Scientific Assessment</h4>
                        <p>Phasellus ac ipsum sed elit iaculis dapibus a sed erat. Aliquam at nisi sed magna laoreet mattis. Etiam vitae dignissim ligula.</p>
                    </div>
                </div>
            </div>
        </div>

    </div>
  )
}

export default Information
