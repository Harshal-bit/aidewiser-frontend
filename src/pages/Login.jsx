import React from 'react';
import styles from './Login.module.css';
import { faGoogle, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useDispatch,useSelector } from 'react-redux';
import { setLogin } from '../state/index.js';



const Login = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const user = useSelector((state) => state);
    
    
    const validationSchema = Yup.object().shape({
        email: Yup.string().email('Invalid email').matches(
            /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
            'Invalid email'
        ).required('Required'),
        password: Yup.string().required('Required'),
    });


    const handleSubmit = async (values, actions) => {
        try {
            const response = await axios.post('http://localhost:8000/auth/login', values);
            toast.success("Logged in successfully")
            
            dispatch(setLogin(
                {
                    user : response.data.user,
                    token : response.data.token
                }    
            ))

            navigate("/");


        } catch (error) {
            console.error('Error during Login', error);
            toast.error("Please Register to Continue");
        } 
    };


    return (
        <div className={styles.login}>
            <div className={styles.loginCard}>
                <div className={styles.leftDiv}>
                    <div className={styles.logo}>
                        <img src='aidewiser.webp' alt='logo'></img>
                    </div>

                    <h1>Login</h1>
                    <Formik
                        initialValues={{ email: '', password: '' }}
                        validationSchema={validationSchema}
                        onSubmit={handleSubmit}

                    >
                        {(props) => {
                            return (
                                <Form className={styles.formDiv}>
                                    <div className={styles.feilds}>
                                        <Field type="text" name="email" placeholder="Email" />
                                        <ErrorMessage name="email" component="label" />
                                    </div>

                                    <div className={styles.feilds}>
                                        <Field type="password" name="password" placeholder="password" />
                                        <ErrorMessage name="password" component="label" />
                                    </div>
                                    <button type="submit">Login</button>
                                </Form>)
                        }

                        }
                    </Formik>
                    <label htmlFor="signup">Dont have an account ? <Link to="/register"> Signup </Link></label>
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

export default Login;
