import { useState } from 'react';
import { Alert } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import * as userService from "../../services/userService.js";

import styles from "./UserRegister.module.css";

export default function UserRegister() {
    const navigate = useNavigate();
    const [errors, setErrors] = useState({firstName: null, lastName: null, email: null, password: null, repeatPassword: null});

    async function submitHandler(eventInfo) {
        eventInfo.preventDefault();

        if (errors.firstName || errors.lastName || errors.email || errors.password || errors.repeatPassword) {
            return;
        }

        let formData = new FormData(eventInfo.currentTarget);
        let { firstName, lastName, email, age, password, repeatPassword } = Object.fromEntries(formData);

        let result = await userService.register(firstName, lastName, email, age, password, repeatPassword);
        if (result) {
            navigate('/');
        }
    }

    function firstNameOnBlur(eventInfo) {
        let firstName = eventInfo.target.value;
        if (firstName.length < 3) {
            setErrors(errors => ({ ...errors, firstName: 'FirstName must be at least 3 characters.' }));
        } else {
            setErrors(errors => ({ ...errors, firstName: null }));
        }
    }

    function lastNameOnBlur(eventInfo) {
        let lastName = eventInfo.target.value;
        if (lastName.length < 5) {
            setErrors(errors => ({ ...errors, lastName: 'LastName must be at least 5 characters.' }));
        } else {
            setErrors(errors => ({ ...errors, lastName: null }));
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

    function repeatPasswordOnBlur(eventInfo) {
        let repeatPassword = eventInfo.target.value;
        if (repeatPassword.length < 4) {
            setErrors(errors => ({ ...errors, repeatPassword: 'RepeatPassword must be at least 4 characters.' }));
        } else {
            setErrors(errors => ({ ...errors, repeatPassword: null }));
        }
    }

    return (
        <div className={styles.container}>
            <div className={styles.containerShadow}>
                <h2 className={styles.title}>Registration</h2>

                <form method="POST" onSubmit={submitHandler}>
                    <label htmlFor="firstName" className={styles.label}>
                        <strong className={styles.labelStrong}>First Name:</strong>
                        <input type="text" name="firstName" id="firstName" className={styles.input} onBlur={firstNameOnBlur} />
                        <strong className="clear"></strong>
                        {/* Workshop: Advanced Techniques - Part 1, 2:56:00 */}
                    </label>
                    <Alert variant='danger' show={errors.firstName}>{errors.firstName}</Alert>

                    <label htmlFor="lastName" className={styles.label}>
                        <strong className={styles.labelStrong}>Last Name:</strong>
                        <input type="text" name="lastName" id="lastName" className={styles.input} onBlur={lastNameOnBlur} />
                        <strong className="clear"></strong>
                    </label>
                    <Alert variant='danger' show={errors.lastName}>{errors.lastName}</Alert>

                    <label htmlFor="email" className={styles.label}>
                        <strong className={styles.labelStrong}>Email:</strong>
                        <input type="text" name="email" id="email" className={styles.input} onBlur={emailOnBlur} />
                        <strong className="clear"></strong>
                    </label>
                    <Alert variant='danger' show={errors.email}>{errors.email}</Alert>

                    <label htmlFor="age" className={styles.label}>
                        <strong className={styles.labelStrong}>Age:</strong>
                        <input type="number" name="age" id="age" className={styles.input} defaultValue={3} min={3} />
                        <strong className="clear"></strong>
                    </label>

                    <label htmlFor="password" className={styles.label}>
                        <strong className={styles.labelStrong}>Password:</strong>
                        <input type="password" name="password" id="password" className={styles.input} onBlur={passwordOnBlur} />
                        <strong className="clear"></strong>
                    </label>
                    <Alert variant='danger' show={errors.password}>{errors.password}</Alert>

                    <label htmlFor="repeatPassword" className={styles.label}>
                        <strong className={styles.labelStrong}>Repeat password:</strong>
                        <input type="password" name="repeatPassword" id="repeatPassword" className={styles.input} onBlur={repeatPasswordOnBlur} />
                        <strong className="clear"></strong>
                    </label>
                    <Alert variant='danger' show={errors.repeatPassword}>{errors.repeatPassword}</Alert>

                    <div className="pad-2">
                        <input type="submit" className={styles.sendButton} value="Sign Up" />
                    </div>
                </form>

            </div>
        </div>
    );
};