import React, { Component } from 'react';

import Navbar from "../../components/Navbar/Navbar";
import Slider from "../../components/Slider/Slider";
import EventCard from "../../components/Card/Card";
import Footer from "../../components/Footer/Footer";
import { Container, Row, Col } from 'reactstrap';

class Events extends Component {
 render(){
        return(
            <div className="container">
                <Navbar />
                <Slider />
                <br />
                <br />
                <Container fluid>
                    <Row sm="4">
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

export default Events;