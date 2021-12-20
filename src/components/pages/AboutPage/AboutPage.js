import styles from "./AboutPage.module.css";
import aboutImage from "../../../images/page2-img1.jpg";
import { Link } from "react-router-dom";

export default function AboutPage() {
    return (
        <section id="content">
            <div className="container_12">
                <div className="grid_4 bot-1">
                    <h2 className={`${styles.margins1} ${styles.sectionTitle}`}>Teachers</h2>
                    <p className="text-1 p3">Peter Stanton</p>
                    <p className={styles.sideText}>Consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat
                        <a href="#" className="link">  More...</a>
                    </p>
                    <p className="text-1 top-2 p3">Helen Perton</p>
                    <p className={styles.sideText}>At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus
                        est <a href="#" className="link">  More...</a>
                    </p>
                    <p className="text-1 top-2 p3">Jesica Murray</p>
                    <p className={styles.sideText}>Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, <br />
                        sed diam <a href="#" className="link">  More...</a>
                    </p>
                </div>
                <div className="grid_8">
                    <div className="block-1 top-5">
                        <div className="block-1-shadow">
                            <h2 className={styles.sectionTitle}>A Few Words About Us</h2>
                            <p className="clr-6"><strong>Our vision</strong></p>
                            <p className="clr-6">Invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et acam
                                et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est lorem ipsum
                                dolor sit amet.</p>
                            <div className="pad-3">
                                <img src={aboutImage} alt="" className="img-border img-indent" />
                                <div className="extra-wrap clr-6">
                                    <p><strong>Your child's future</strong></p>
                                    <p>sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
                                        sed diam voluptua.At vero eos et accusam et justo duo dolores et ea rebum.Stet clita kasd
                                        gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
                                    </p>
                                </div>
                            </div>
                            <h2 className={styles.sectionTitle}>What We Offer</h2>
                            <p className="clr-6"><strong>The best courses</strong></p>
                            <p className="clr-6">Congue nihil imperdiet doming id quod mazim placerat facer possim assum. Lorem ipsum
                                dolor sit amet, consectetuer adipiscing elit
                            </p>
                            <div className="lists">
                                <ul className="list-2">
                                    <li><a href="#">Sed diam nonummy nibh euismod</a></li>
                                    <li><a href="#">Tincidunt ut laoreet dolore</a></li>
                                    <li><a href="#">Magna aliquam erat volutpat wisi enim</a></li>
                                    <li><a href="#">Minim veniam, quis nostrud exerci</a></li>
                                </ul>
                                <ul className="list-2 last">
                                    <li><a href="#">Duis autem vel eum iriure dolor</a></li>
                                    <li><a href="#">Hendrerit in vulputate velit molestie</a></li>
                                    <li><a href="#">Consequat vel illum dolore</a></li>
                                    <li><a href="#">Feugiat nulla facilisis at vero eros</a></li>
                                </ul>
                            </div>
                            <div className="pad-2">
                                <Link to="/gallery" className={styles.link}>Visit gallery</Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="clear"></div>
            </div>
        </section>
    );
};