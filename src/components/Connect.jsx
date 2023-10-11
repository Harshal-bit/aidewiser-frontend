import React from "react";
import styles from "./Connect.module.css";
import RegisterForm from "./RegisterForm";

const Connect = () => {
  return (
    <div className={styles.main_div}>
      <h2>Contact Us</h2>
      <div className={styles.connect_div}>
        <div className={styles.google_map}>
          <iframe
            title="map"
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15550.674629038744!2d77.713796!3d12.993032!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae117be07cb2c3%3A0x43f54ae2301b60d0!2sAideWiser%20SolTek!5e0!3m2!1sen!2sin!4v1695620314588!5m2!1sen!2sin"
            width="600"
            height="450"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div className={styles.form_div}>
          <RegisterForm></RegisterForm>
        </div>
      </div>
    </div>
  );
};

export default Connect;
