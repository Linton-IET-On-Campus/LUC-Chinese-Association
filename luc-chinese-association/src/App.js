import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Events from "./pages/Events/Events";
import AboutUs from "./pages/AboutUs/AboutUs";
import Login from "./pages/Login/Login";

function App() {
    return (
        <Router>
            
            <Route path="/" exact component={Events} />
            <Route path="/about" component={AboutUs} />  
            <Route path="/login" component={Login} />  

        </Router>
    );
}

export default App;