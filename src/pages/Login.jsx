import React from 'react';
import styles from './Login.module.css';
import { faGoogle, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Link } from 'react-router-dom';

const Login = () => {

    const validationSchema = Yup.object().shape({
        email: Yup.string().email('Invalid email').matches(
            /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
            'Invalid email'
        ).required('Required'),
        password: Yup.string().required('Required'),
    });


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
                        onSubmit={() => { }}

                    >
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
                        </Form>
                    </Formik>
                    <label for="signup">Dont have an account ? <Link to="/register"> Signup </Link></label>
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
