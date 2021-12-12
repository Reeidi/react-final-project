import { Routes, Route } from 'react-router-dom';

import NavigationBar from "../NavigationBar/NavigationBar";
import SliderHeader from "../SliderHeader/SliderHeader";
import HomePage from "../pages/HomePage/HomePage";
import AboutPage from "../pages/AboutPage/AboutPage";
import SchedulePage from '../pages/SchedulePage/SchedulePage';
import GalleryPage from '../pages/GalleryPage/GalleryPage';
import ContactsPage from '../pages/ContactsPage/ContactsPage';
import Register from '../Register/Register';
import Footer from '../Footer/Footer';

function App() {
    return (
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
                    <Route path="/register" element={<Register />} />
                </Routes>

                <Footer />
            </div>
        </main>
    );
}

export default App;
