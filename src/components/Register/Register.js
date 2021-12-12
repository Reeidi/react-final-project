import * as userService from "../../services/userService.js";

import styles from "./Register.module.css";

export default function Register() {
    return (
        <div className={styles.container}>
            <div className={styles.containerShadow}>
                <h2 className={styles.title}>Registration</h2>

                <form method="POST" onSubmit={submitHandler}>
                    <label htmlFor="firstName" className={styles.label}>
                        <strong className={styles.labelStrong}>First Name:</strong>
                        <input type="text" name="firstName" id="firstName" className={styles.input} />
                        <strong className="clear"></strong>
                    </label>
                    <label htmlFor="lastName" className={styles.label}>
                        <strong className={styles.labelStrong}>Last Name:</strong>
                        <input type="text" name="lastName" id="lastName" className={styles.input} />
                        <strong className="clear"></strong>
                    </label>
                    <label htmlFor="email" className={styles.label}>
                        <strong className={styles.labelStrong}>Email:</strong>
                        <input type="text" name="email" id="email" className={styles.input} />
                        <strong className="clear"></strong>
                    </label>
                    <label htmlFor="age" className={styles.label}>
                        <strong className={styles.labelStrong}>Age:</strong>
                        <input type="number" name="age" id="age" className={styles.input} />
                        <strong className="clear"></strong>
                    </label>
                    <label htmlFor="password" className={styles.label}>
                        <strong className={styles.labelStrong}>Password:</strong>
                        <input type="password" name="password" id="password" className={styles.input} />
                        <strong className="clear"></strong>
                    </label>
                    <label htmlFor="repeatPassword" className={styles.label}>
                        <strong className={styles.labelStrong}>Repeat password:</strong>
                        <input type="password" name="repeatPassword" id="repeatPassword" className={styles.input} />
                        <strong className="clear"></strong>
                    </label>

                    <div className="pad-2">
                        <input type="submit" className={styles.sendButton} value="Send" />
                    </div>
                </form>

            </div>
        </div>
    );
};

async function submitHandler(eventInfo) {
    eventInfo.preventDefault();

    let formData = new FormData(eventInfo.currentTarget);
    let { firstName, lastName, email, age, password, repeatPassword } = Object.fromEntries(formData);

    let result = await userService.register(firstName, lastName, email, age, password, repeatPassword );
    console.log(result);
}