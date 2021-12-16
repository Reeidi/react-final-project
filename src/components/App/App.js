import { Routes, Route } from 'react-router-dom';

import { AuthProvider } from '../../contexts/AuthContext';

import NavigationBar from "../NavigationBar/NavigationBar";
import SliderHeader from "../SliderHeader/SliderHeader";
import HomePage from "../pages/HomePage/HomePage";
import AboutPage from "../pages/AboutPage/AboutPage";
import SchedulePage from '../pages/SchedulePage/SchedulePage';
import GalleryPage from '../pages/GalleryPage/GalleryPage';
import ContactsPage from '../pages/ContactsPage/ContactsPage';
import Footer from '../Footer/Footer';

import Login from '../users/Login/Login';
import Register from '../users/Register/Register';
import Logout from '../users/Logout/Logout';

function App() {
    return (
        <AuthProvider>
            <main>
                <NavigationBar />
                <div className="main">
                    <SliderHeader />

                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/about" element={<AboutPage />} />
                        <Route path="/schedule" element={<SchedulePage />} />
                        <Route path="/gallery" element={<GalleryPage />} />
                        <Route path="/contacts" element={<ContactsPage />} />

                        <Route path="/login" element={<Login />} />
                        <Route path="/register" element={<Register />} />
                        <Route path="/logout" element={<Logout />} />
                    </Routes>

                    <Footer />
                </div>
            </main>
        </AuthProvider>
    );
}

export default App;
