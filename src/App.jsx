import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './About';
import './index.css';
import Gallery from './Gallery';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<About />} />
                <Route path="/gallery" element={<Gallery />} />
            </Routes>
        </Router>
    );
};

export default App;
