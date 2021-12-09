import styles from "./SliderHeader.module.css";
import logo from "../../images/logo.png";
import slider1 from "../../images/slider-1.jpg";
import slider2 from "../../images/slider-2.jpg";
import slider3 from "../../images/slider-3.jpg";

export default function SliderHeader() {
    return (
        <header className={styles.header}>
            <h1>
                <a href="/">
                    <img src={logo} />
                </a>
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
                    <a href="#" className="prev"></a><a href="#" className="next"></a>
                </div>
                <ul className="menu">
                    <li><a href="/" className="clr-1">Home</a></li>
                    <li><a href="about" className="clr-2">About</a></li>
                    <li><a href="schedule" className="clr-3">Schedule</a></li>
                    <li><a href="gallery" className="clr-4">Gallery</a></li>
                    <li><a href="contacts" className="clr-5">Contacts</a></li>
                </ul>
            </nav>
        </header>
    );
};