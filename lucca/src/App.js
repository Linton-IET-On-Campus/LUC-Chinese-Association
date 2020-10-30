import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Events from "./pages/Events/Events";
import Blog from "./pages/Blog/Blog";
import Donate from "./pages/Donate/Donate";
import About from "./pages/About/About";
import Shop from "./pages/Shop/Shop";
import Login from "./pages/Login/Login";


// Dashboard
import Admin from "./dashboard/admin/Admin";
import Member from "./dashboard/member/Member";
import OtherUni from "./dashboard/otheruni/OtherUni";


function App() {
    return (
        <Router>
            
            <Route path="/" exact component={Events} />
            <Route path="/blog" component={Blog} />
            <Route path="/donate" component={Donate} />  
            <Route path="/about" component={About} />  
            <Route path="/shop" component={Shop} />  
            <Route path="/login" component={Login} />  


            <Route path="/admin" component={Admin} />  
            <Route path="/member" component={Member} />  
            <Route path="/otheruni" component={OtherUni} />  
            

        </Router>
    );
}

export default App;