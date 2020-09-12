import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

// import Navbar from "./components/navbar.component";
// import Event from "./components/events.component";
import Navbar from "./components/Navbar/Navbar";
import Slider from "./components/Slider/Slider";
import Footer from "./components/Footer/Footer";

function App() {
    return (
        <div className="container">
        <Navbar />
        <Slider />
        <hr />
        <Footer />
        
        </div>
    );
}

export default App;