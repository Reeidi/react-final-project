import { Link } from 'react-router-dom';

import styles from "./SliderHeader.module.css";
import logo from "../../images/logo.png";
import slider1 from "../../images/slider-1.jpg";
import slider2 from "../../images/slider-2.jpg";
import slider3 from "../../images/slider-3.jpg";

export default function SliderHeader() {
    return (
        <header className={styles.header}>
            <h1 className={styles.topMargin}>
                <Link to="/">
                    <img src={logo} />
                </Link>
            </h1>
            <nav className={styles.nav}>
                <div id="slide">
                    <div className="slider">
                        <ul className="items">
                            <li><img src={slider1} alt="" /></li>
                            <li><img src={slider2} alt="" /></li>
                            <li><img src={slider3} alt="" /></li>
                        </ul>
                    </div>
                    <a href="#" className="prev"></a>
                    <a href="#" className="next"></a>
                </div>
                <ul className="menu">
                    <li><Link className="clr-1" to="/">Home</Link></li>
                    <li><Link className="clr-2" to="about">About</Link></li>
                    <li><Link className="clr-3" to="schedule">Schedule</Link></li>
                    <li><Link className="clr-4" to="gallery">Gallery</Link></li>
                    <li><Link className="clr-5" to="contacts">Contacts</Link></li>
                </ul>
            </nav>
        </header>
    );
};