import { login } from '../../../services/userService';

import styles from './Login.module.css';

export default function Login() {
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

                    <div className="pad-2">
                        <input type="submit" className={styles.sendButton} value="Log in"/>
                    </div>
                </form>
            </div>
        </div>
    );
};

async function submitHandler(eventInfo) {
    eventInfo.preventDefault();

    let formData = new FormData(eventInfo.target);
    let { email, password } = Object.fromEntries(formData);

    let result = await login(email, password);
    console.log(result);
}