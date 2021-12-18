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

import DrawingCreate from '../DrawingCreate/DrawingCreate';
import DrawingDetails from '../DrawingDetails/DrawingDetails';
import DrawingEdit from '../DrawingEdit/DrawingEdit';

import Login from '../users/Login/Login';
import Register from '../users/Register/Register';
import ErrorBondary from '../ErrorBoundry/ErrorBoundry';

function App() {
    return (
        <ErrorBondary>
            <AuthProvider>
                <main>
                    <NavigationBar />
                    <div className="main">
                        <SliderHeader />

                        <Routes>
                            {/* Pages */}
                            <Route path="/" element={<HomePage />} />
                            <Route path="/about" element={<AboutPage />} />
                            <Route path="/schedule" element={<SchedulePage />} />
                            <Route path="/gallery" element={<GalleryPage />} />
                            <Route path="/contacts" element={<ContactsPage />} />

                            {/* User */}
                            <Route path="/login" element={<Login />} />
                            <Route path="/register" element={<Register />} />

                            {/* Drawings */}
                            <Route path="/drawing/create" element={<DrawingCreate />} />
                            <Route path="/drawing/:drawingId" element={<DrawingDetails />} />
                            <Route path="/drawing/:drawingId/edit" element={<DrawingEdit />} />
                        </Routes>

                        <Footer />
                    </div>
                </main>
            </AuthProvider>
        </ErrorBondary>
    );
}

export default App;
