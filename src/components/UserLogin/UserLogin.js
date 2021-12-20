import { useState } from 'react';
import { Alert } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useAuthContext } from '../../contexts/AuthContext';

import styles from './UserLogin.module.css';

export default function UserLogin() {
    const { login } = useAuthContext();
    const navigate = useNavigate();
    const [error, setError] = useState(false);
    const [errors, setErrors] = useState({ email: null, password: null });

    async function submitHandler(eventInfo) {
        eventInfo.preventDefault();

        if (errors.email || errors.password) {
            return;
        }

        let formData = new FormData(eventInfo.target);
        let { email, password } = Object.fromEntries(formData);

        let result = await login(email, password);
        if (result) {
            navigate('/');
        } else {
            setError(true);
        }
    }

    function emailOnBlur(eventInfo) {
        let email = eventInfo.target.value;
        if (email.includes('@') && email.includes('.')) {
            setErrors(errors => ({ ...errors, email: null }));
        } else {
            setErrors(errors => ({ ...errors, email: 'Invalid email.' }));
        }
    }

    function passwordOnBlur(eventInfo) {
        let password = eventInfo.target.value;
        if (password.length < 4) {
            setErrors(errors => ({ ...errors, password: 'Password must be at least 4 characters.' }));
        } else {
            setErrors(errors => ({ ...errors, password: null }));
        }
    }

    return (
        <div className={styles.container}>
            <div className={styles.containerShadow}>
                <h2 className={styles.title}>Login</h2>

                <form method="POST" onSubmit={submitHandler}>
                    <label htmlFor="email" className={styles.label}>
                        <strong className={styles.labelStrong}>Email:</strong>
                        <input type="text" name="email" className={styles.input} onBlur={emailOnBlur} />
                        <strong className="clear"></strong>
                    </label>
                    <Alert variant='danger' show={errors.email}>{errors.email}</Alert>

                    <label htmlFor="password" className={styles.label}>
                        <strong className={styles.labelStrong}>Password:</strong>
                        <input type="password" name="password" className={styles.input} onBlur={passwordOnBlur} />
                        <strong className="clear"></strong>
                    </label>
                    <Alert variant='danger' show={errors.password}>{errors.password}</Alert>

                    <p className={error ? styles.labelSmall : styles.labelSmallHidden}>Invalid email or password.</p>

                    <div className="pad-2">
                        <input type="submit" className={styles.sendButton} value="Log in" />
                    </div>
                </form>
            </div>
        </div>
    );
};