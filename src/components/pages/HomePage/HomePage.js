import { Link } from "react-router-dom";
import styles from "./HomePage.module.css";

export default function HomePage() {
    return (
        <section id="content">
            <div className="container_12">
                <div className="grid_4 bot-1">
                    <div className="art"></div>
                    <h2 className={`top-1 ${styles.sectionTitle}`}>Events</h2>
                    <p className="text-1 p3">April 18 - "Spring's Bloom"</p>
                    <p className={styles.sideText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip</p>
                    <p className="text-1 top-2 p3">April 01 - “Smile!”</p>
                    <p className={styles.sideText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip</p>
                    <Link to="/schedule" className={`${styles.link} ${styles.orange}`}>More events</Link>
                </div>
                <div className="grid_8">
                    <div className="pad-1">
                        <h2 className="p2">Welcome to Art School</h2>
                        <p className="text-1">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip</p>
                    </div>
                    <div className="block-1">
                        <div className="block-1-shadow">
                            <h2 className={styles.sectionTitle}>News</h2>
                            <p class="clr-6">
                                <strong>Today...</strong>
                            </p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                            culpa qui officia deserunt mollit anim id est laborum.

                            <div className="clear"></div>
                            <div className="pad-2"> <Link to="/about" className={`${styles.link} ${styles.green}`}>About</Link> </div>
                        </div>
                    </div>
                </div>
                <div className="clear"></div>
            </div>
        </section>
    );
};