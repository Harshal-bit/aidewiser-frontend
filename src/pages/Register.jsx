import React from 'react';
import styles from './Register.module.css';
import { faGoogle, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Link } from 'react-router-dom';
import axios from 'axios';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';


const Register = () => {
    
    const navigator = useNavigate();


    const validationSchema = Yup.object().shape({
        email: Yup.string().email('Invalid email').matches(
            /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
            'Invalid email'
        ).required('Required'),

        password: Yup.string()
                    .required('Password is required')
                    .min(8, 'Password must be at least 8 characters long'),

        cpassword: Yup.string()
        .required('Confirm Password is required')
        .oneOf([Yup.ref('password'), null], 'Passwords must match')
    });

    const handleSubmit = async (values, actions) => {
        try {
          const response = await axios.post('http://localhost:3001/auth/register', values);
          console.log('User registered successfully:', response.data);
          toast.success("User registered successfully")
          setTimeout(() => {
              
              toast.success("Please Login to Continue")
          },1000)

        } catch (error) {
          console.error('Error during registration:', error);
          toast.error("User already exists");
        } finally {
            setTimeout(() => {
                navigator('/login');
            },2000)
        } 
      };


    return (
        <div className={styles.register}>
            <div className={styles.registerCard}>
                <div className={styles.leftDiv}>
                    <div className={styles.logo}>
                        <img src='aidewiser.webp' alt='logo'></img>
                    </div>

                    <h1>Register</h1>
                    <Formik
                        initialValues={{ fullname: '', email: '', password: '', cpassword: '' }}
                        validationSchema={validationSchema}
                        onSubmit={handleSubmit}

                    >
                        {(props) => {
                           return (
                            
                            <Form className={styles.formDiv} onSubmit={props.handleSubmit}>
                                <div className={styles.feilds}>
                                    <Field type="text" name="fullname" placeholder="Name" /> 
                                    <ErrorMessage name="name" component="label" />
                                </div>

                                <div className={styles.feilds}>
                                    <Field type="text" name="email" placeholder="Email" />
                                    <ErrorMessage name="email" component="label" />
                                </div>

                                <div className={styles.feilds}>
                                    <Field type="password" name="password" placeholder="password" />
                                    <ErrorMessage name="password" component="label" />
                                </div>
                                <div className={styles.feilds}>
                                    <Field type="password" name="cpassword" placeholder="confirm password" />
                                    <ErrorMessage name="cpassword" component="label" />
                                </div>
                                <button type="submit" >Register</button>
                            </Form>
                        )}}
                        
                    </Formik>

                    <label htmlFor="signup">Already have an account ? <Link to="/login"> Login </Link></label>
                    <div className={styles.oauthDiv}>
                        <button>
                            <span>
                                <FontAwesomeIcon icon={faGoogle}></FontAwesomeIcon>
                            </span>
                        </button>
                        <button>
                            <span>
                                <FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon>
                            </span>
                        </button>

                    </div>

                </div>

            </div>

        </div>
    );
};

export default Register;
