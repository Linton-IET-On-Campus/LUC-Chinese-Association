import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import "./AboutUs.css";

import Navbar from "../../components/Navbar/Navbar";
import Team from "../../components/Team/Team";
import Footer from "../../components/Footer/Footer";

export default class AboutUs extends Component {
 render(){
        return(
            <div className="container">
                <Navbar />
                <br />
                
                <Container>

                    <Row>
                    <h1>名人堂</h1>
                    </Row>

                    <Row>
                    <h2>内务</h2>
                    </Row>

                    <Row>
                    <Team />
                    </Row>

                    <Row>
                    <h2>外务</h2>
                    </Row>

                    <Row>
                    <Team />
                    </Row>

                    <Row>
                    <h1>网页开发者</h1>
                    </Row>

                    <Row>
                    <Team />
                    </Row>
                    
                </Container>
    
                <hr />
                <Footer />
            </div>
        )
    }
}

