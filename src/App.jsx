import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Booking from "./components/Booking";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import CorporateEvents from "./components/CorporateEvents";
import Gallery1 from "./pages/Gallery1";
import ScrollToTop from "./components/ScrolltoTop";
import CulturalEvent from "./components/CulturalEvent";
import About from "./pages/About";
// import BookNowModal from './components/BookNowModal'
function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        
        <Route path="/" element={<Home />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/event/corporateevents" element={<CorporateEvents />} />
        <Route path="/gallery" element={<Gallery1 />} />
        <Route path="/event/cultural" element={<CulturalEvent />} />
        <Route path="/about" element={<About />} />
        
      </Routes>
    </Router>
  );
}

export default App;