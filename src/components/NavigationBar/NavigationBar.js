import styles from './NavigationBar.module.css';

export default function NavigationBar() {
    return (
        <nav className={`navbar navbar-expand-lg custom_nav-container ${styles.topNav}`}>
            <a className={`navbar-brand ${styles.navbarBrand}`} href="index.html">
                Art School
            </a>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <div className="d-flex mx-auto flex-column flex-lg-row align-items-center">
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <a className={`nav-link ${styles.navLink}`} href="index.html">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className={`nav-link ${styles.navLink}`} href="about.html">About</a>
                        </li>
                        <li className="nav-item">
                            <a className={`nav-link ${styles.navLink}`} href="course.html">Courses</a>
                        </li>
                        <li className="nav-item">
                            <a className={`nav-link ${styles.navLink}`} href="teacher.html">Teachers</a>
                        </li>
                        <li className="nav-item">
                            <a className={`nav-link ${styles.navLink}`} href="contact.html">Contact Us</a>
                        </li>
                    </ul>
                </div>
                <div>
                    <a href="" className={styles.userManagementButtons}>
                        Login
                    </a>
                </div>
            </div>
        </nav>
    );
};