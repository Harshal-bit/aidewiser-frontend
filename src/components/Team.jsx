import React from 'react'
import styles from "./Team.module.css"

const Team = () => {
  return (
    <div id='team' className={styles.team_div}>
        <h2>Meet Our Team</h2>
        <div className={styles.meet_team}>
            <div className={styles.team_member}>
                <img src='/team/pranav-bansode.webp' alt='team'></img>
                <div className={styles.info}>
                    <h6>PRANAV BANSODE</h6>
                    <p>FOUNDER AND MD</p>
                </div>
            </div>

            <div className={styles.team_member}>
                <img src='/team/maruthi-revankar.webp' alt='team'></img>
                <div className={styles.info}>
                    <h6>MARUTHI REVANKAR</h6>
                    <p>CHIEF - TECHNOLOGY & MARKETING</p>
                </div>
            </div>

            <div className={styles.team_member}>
                <img src='/team/gauri-kulkarni.webp' alt='team'></img>
                <div className={styles.info}>
                    <h6>GAURI KULKARNI</h6>
                    <p>PROMOTER</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Team