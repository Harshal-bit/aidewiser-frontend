import React from 'react'
import styles from "./Clients.module.css"
import Company from './Company'


const Clients = () => {
  const companies = [
    '/clients/annbri.bak.png',
    '/clients/awign.bak.webp',
    '/clients/byteridge.bak.jpg',
    '/clients/Furlenco.bak.jpg',
    '/clients/justdail.bak.jpg',
    '/clients/polaad.bak.jpg',
    '/clients/suitable.jpg',
    '/clients/teleperformance.jpg',
    '/clients/voiz.bak.webp',
    '/clients/yujlogo.bak.png',
    '/clients/nobroker.png'
  ]
  return (
    <div id='clients' className={styles.clients_div}>
        <h2>Our Clients</h2>
        <div className={styles.clients_companies}>
          {
            companies.map((company_src,i) => (
              <Company img_src={company_src} key={i}></Company>
            ))
          }
        </div>
    </div>
  )
}

export default Clients;