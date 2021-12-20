import { useNavigate } from "react-router-dom";
import { send } from "../../../services/contactService";
import styles from "./ContactsPage.module.css";

export default function ContactsPage() {
    const navigate = useNavigate();

    async function submitHandler(eventInfo) {
        eventInfo.preventDefault();

        const formData = new FormData(eventInfo.target);
        const { name, email, phone, message } = Object.fromEntries(formData);

        let result = await send(name, email, phone, message);
        if (result.success) {
            navigate('/');
        }
    }

    return (
        <section id="content">
            <div className="container_12">
                <div className="grid_4 bot-1">
                    <h2 className={styles.sectionTitle} style={{ marginTop: '35px' }}>Contact Us</h2>
                    <div className={styles.map}>
                        <iframe
                            title="Map"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11728.944494476631!2d23.328421515075664!3d42.698720803445376!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40aa859035e0fc3b%3A0xd3b042e2816cff2c!2sSerdika%20Center!5e0!3m2!1sen!2sbg!4v1639946772245!5m2!1sen!2sbg"
                            width="280"
                            height="240"
                            allowfullscreen=""
                            loading="lazy"
                        />
                    </div>
                    <div style={{ color: 'white', paddingTop: '20px' }}>
                        <dt>ul. "Lisets" 8, <br />
                            Sofia</dt>
                        <dd><span>Telephone: </span>+1 800 603 6035</dd>
                        <dd><span>E-mail: mail@demolink.org</span></dd>
                    </div>
                </div>
                <div className="grid_8">
                    <div className="block-1 top-5">
                        <div className="block-1-shadow">
                            <h2 className={styles.sectionTitle}>Contact Form</h2>
                            <form method="POST" onSubmit={submitHandler}>
                                <label htmlFor="name" className={styles.label}>
                                    <strong className={styles.labelStrong}>Name:</strong>
                                    <input type="text" name="name" id="name" className={styles.input} />
                                    <strong className="clear"></strong>
                                </label>
                                <label htmlFor="email" className={styles.label}>
                                    <strong className={styles.labelStrong}>Email:</strong>
                                    <input type="text" name="email" id="email" className={styles.input} />
                                    <strong className="clear"></strong>
                                </label>
                                <label htmlFor="phone" className={styles.label}>
                                    <strong className={styles.labelStrong}>Phone:</strong>
                                    <input type="text" name="phone" id="phone" className={styles.input} />
                                    <strong className="clear"></strong>
                                </label>
                                <label htmlFor="message" className={styles.label}>
                                    <strong className={styles.labelStrong}>Message:</strong>
                                    <textarea name="message" id="message" className={styles.textArea}></textarea>
                                    <strong className="clear"></strong>
                                </label>

                                <div className="pad-2">
                                    <input type="submit" className={styles.sendButton} value="Send" />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="clear"></div>
            </div>
        </section>
    );
};