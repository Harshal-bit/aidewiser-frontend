import React from 'react'
import styles from './Company.module.css'

const Company = ({
    img_src
}) => {
  return (
    <div className={styles.company}>
        <img src = {img_src} alt='company'></img>
    </div>
  )
}

export default Company