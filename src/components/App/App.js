import { Routes, Route } from 'react-router-dom';

// import DrawingDetails from "../DrawingDetails/DrawingDetails";
import NavigationBar from "../NavigationBar/NavigationBar";
import SliderHeader from "../SliderHeader/SliderHeader";
import HomePage from "../pages/HomePage/HomePage";

function App() {
    return (
        <main>
            <NavigationBar />
            <div className="main">
                <SliderHeader />

                <Routes>
                    <Route path="/" element={<HomePage />} />
                    {/* <Route path="/about" element={<HomePage />} /> */}
                </Routes>
            </div>
        </main>
    );
}

export default App;
