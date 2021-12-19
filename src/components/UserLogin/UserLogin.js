import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuthContext } from '../../contexts/AuthContext';

import styles from './UserLogin.module.css';

export default function UserLogin() {
    const { login } = useAuthContext();
    const navigate = useNavigate();
    const [error, setError] = useState(false);

    async function submitHandler(eventInfo) {
        eventInfo.preventDefault();
    
        let formData = new FormData(eventInfo.target);
        let { email, password } = Object.fromEntries(formData);
    
        let result = await login(email, password);
        if (result) {
            navigate('/');
        } else {
            setError(true);
        }
    }

    return (
        <div className={styles.container}>
            <div className={styles.containerShadow}>
                {/* <h2 className={styles.title}>Login</h2> */}

                <form method="POST" onSubmit={submitHandler}>
                    <label htmlFor="email" className={styles.label}>
                        <strong className={styles.labelStrong}>Email:</strong>
                        <input type="text" name="email" className={styles.input} />
                        <strong className="clear"></strong>
                    </label>
                    <label htmlFor="password" className={styles.label}>
                        <strong className={styles.labelStrong}>Password:</strong>
                        <input type="password" name="password" className={styles.input} />
                        <strong className="clear"></strong>
                    </label>

                    <p className={error ? styles.labelSmall : styles.labelSmallHidden}>Invalid email or password.</p>

                    <div className="pad-2">
                        <input type="submit" className={styles.sendButton} value="Log in"/>
                    </div>
                </form>
            </div>
        </div>
    );
};