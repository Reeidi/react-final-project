import { Link } from 'react-router-dom';

import styles from './NavigationBar.module.css';

export default function NavigationBar() {
    return (
        <nav className={`navbar navbar-expand-lg custom_nav-container ${styles.topNav}`}>
            <Link className={`navbar-brand ${styles.navbarBrand}`} to="/">
                Art School
            </Link>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <div className="d-flex mx-auto flex-column flex-lg-row align-items-center">
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <Link className={`nav-link ${styles.navLink}`} to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={`nav-link ${styles.navLink}`} to="about">About</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={`nav-link ${styles.navLink}`} to="course">Courses</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={`nav-link ${styles.navLink}`} to="teacher">Teachers</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={`nav-link ${styles.navLink}`} to="contact">Contact Us</Link>
                        </li>
                    </ul>
                </div>
                <div>
                    <Link to="" className={styles.userManagementButtons}>
                        Login
                    </Link>
                </div>
            </div>
        </nav>
    );
};