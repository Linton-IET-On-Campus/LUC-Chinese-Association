import React, { Component } from 'react';
import "./Shop.css";

import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import ShopItem from "../../components/ShopItem/ShopItem";
import { Container, Row, Col } from 'reactstrap';
import SearchFeature from '../../components/SearchFeature/SearchFeature';

export default class Shop extends Component {
  
  render() {
    return (
      <div className = "shoplist">
        <Navbar />
        <br />
        <SearchFeature />
        <Container>
          <Row>
            <Col><ShopItem /></Col>
            <Col><ShopItem /></Col>
          </Row>
        </Container>
        <Footer />
      </div>
    );
  }
}
