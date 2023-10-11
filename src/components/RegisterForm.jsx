import React from "react";
import { useFormik } from "formik";
import styles from "./RegisterForm.module.css";

const RegisterForm = () => {
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      phoneno: "",
      file: null,
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    
    <form className={styles.input_form} onSubmit={formik.handleSubmit}>
      <div className={styles.input_field}>
        <label htmlFor="firstName">First Name</label>
        <input
          id="firstName"
          name="firstName"
          type="text"
          placeholder="E.g John"
          onChange={formik.handleChange}
          value={formik.values.firstName}
        />
      </div>

      <div className={styles.input_field}>
        <label htmlFor="lastName">Last Name</label>
        <input
          id="lastName"
          placeholder="E.g Doe"
          name="lastName"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.lastName}
        />
      </div>

      <div className={styles.input_field}>
        <label htmlFor="email">Email Address</label>
        <input
          id="email"
          name="email"
          type="email"
          placeholder="johndoe@hotmail.com"
          onChange={formik.handleChange}
          value={formik.values.email}
        />
      </div>
      <div className={styles.input_field}>
        <label htmlFor="phoneno">Phone No</label>
        <input
          id="phoneno"
          name="phoneno"
          type="phoneno"
          placeholder="E.g 9999999999"
          onChange={formik.handleChange}
          value={formik.values.phoneno}
        />
      </div>

      <div className={styles.upload_file}>
        <label htmlFor="fileupload">Upload Your CV</label>
        <label className={styles.file_field}>
          <input
            type="file"
            name="file"
            id="file"
            onChange={formik.handleChange}
            value={formik.values.file}
          />
          Select CV
        </label>
      </div>
      
      <div className={`${styles.input_field} ${styles.message_div}`}>
        <label htmlFor="message">Message</label>
        <textarea
          rows={10}
          cols={1}
          id="message"
          name="message"
          type="message"
          onChange={formik.handleChange}
          value={formik.values.message}
        />
      </div>

      <button className={`${styles.file_field} ${styles.button_element}`} >Submit</button>
    </form>
  );
};

export default RegisterForm;
