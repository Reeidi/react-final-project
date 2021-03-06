import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useAuthContext } from '../../contexts/AuthContext';

import styles from './NavigationBar.module.css';

export default function NavigationBar() {
    const { user, logout } = useAuthContext();
    const navigate = useNavigate();

    function logoutClick(eventInfo) {
        eventInfo.preventDefault(); // stop Link from navigating!
        logout();
        navigate('/');
    }

    let guestNavigation = (
        <>
            <Link to="/login" className={`nav-link ${styles.navLink}`}>Login</Link>
            <Link to="/register" className={`nav-link ${styles.navLink}`}>Register</Link>
        </>
    );

    let userNavigation = (
        <>
            <p className={styles.navItem}>Welcome, {user?.email}</p>
            <Link to="/mine" className={`nav-link ${styles.navLink}`}>My drawings</Link>
            <Link to="/drawing/create" className={`nav-link ${styles.navLink}`}>Add drawing</Link>
            <Link to="/logout" className={`nav-link ${styles.navLink}`} onClick={logoutClick}>Logout</Link>
        </>
    );

    return (
        <nav className={`navbar navbar-expand-lg ${styles.topNav}`}>
            <Link to="/" className={styles.navBarBrand}>
                Art School
            </Link>

            <div className="navbar-collapse">
                {/* Това не е CSS курс. Това остава за да се подравнят правилно линковете за Login/Logout */}
                <div className="mx-auto flex-column flex-lg-row align-items-center">
                </div>

                <ul className={styles.navBarGroup}>
                    {user?.email
                        ? userNavigation
                        : guestNavigation
                    }
                </ul>
            </div>
        </nav>
    );
};