import { Component } from 'react';
import { Link } from 'react-router-dom';

import Footer from '../Footer/Footer';

import styles from "./ErrorBoundry.module.css";
import logo from "../../images/logo.png";

export default class ErrorBondary extends Component {
    constructor(props) {
        super(props);

        this.state = {
            error: null
        }
    }

    static getDerivedStateFromError(error) {
        console.log('getDerivedStateFromError', error);
        return { error };
    }

    componentDidCatch(error) {
        console.log('componentDidCatch', error);
    }

    render() {
        return this.state.error
            ? (
                <div className="main">
                    <header className={styles.header}>
                        <h1>
                            <Link to="/">
                                <img src={logo} />
                            </Link>
                        </h1>
                        <nav className={styles.nav}>
                            <div className={styles.centered}>
                                {"Something went wrong!"}
                                <Link to="/" className={styles.button} value="Delete" onClick={() => this.setState({error: null})}>Go back</Link>
                            </div>
                        </nav>
                    </header>

                    <Footer />
                </div>
            )
            : this.props.children;
    }
}