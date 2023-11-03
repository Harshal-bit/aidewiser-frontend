import React, { useState } from 'react'
import styles from "./NavBar.module.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhoneSquare, faBars , faSignIn, faSignOut} from '@fortawesome/free-solid-svg-icons'
import { faEnvelopeOpen } from '@fortawesome/free-regular-svg-icons'
import {faWhatsapp} from "@fortawesome/free-brands-svg-icons"
import { useNavigate,Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import { setLogout } from '../state/index.js'
import toast from 'react-hot-toast'
const NavBar = () => {
  
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.auth.isLoggedin)
  const [toggle,setToggle] = useState(false);
  const closeToggle = () => {
    setToggle(false);
  }
  const handleLogout = () => {
    toast.success("Logged out successfully")
    setTimeout(()=>{
      dispatch(
        setLogout()
      )
    },500)
    
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
                <li><Link onClick={closeToggle} to='/blogs'>Blog </Link></li>
                {toggle && isLoggedIn && <li onClick={handleLogout}><a href='#home'>Logout </a></li>}
                
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
                  {
                    !isLoggedIn ? 
                    <span>
                      <FontAwesomeIcon onClick={() => navigate('/login')} color='orange' icon= {faSignIn} />
                    </span> :
                    <span>
                      <FontAwesomeIcon color='orange' onClick = {handleLogout} icon= {faSignOut} />
                    </span>

                  }
                  
                  
            </div>
 
    </div>
  )
}

export default NavBar