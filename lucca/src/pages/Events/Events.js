import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import "./Events.css";

import Navbar from "../../components/Navbar/Navbar";
import Slider from "../../components/Slider/Slider";
import EventCard from "../../components/Card/Card";
import Footer from "../../components/Footer/Footer";

export default class Events extends Component {
 render(){
        return(
            <div className="container">
                <Navbar />
                <Slider />
                <br />
                <Container fluid>
                    <Row sm="3">
                        <Col>
                            <EventCard />
                        </Col>
                    </Row>
                </Container>
                <hr />
                <Footer />
            </div>
        )
    }
}

