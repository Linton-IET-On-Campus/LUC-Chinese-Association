import React from 'react';
import {
  Card,  CardImg
} from 'reactstrap';
import "./Login.css";
import { Container, Row, Col } from 'reactstrap';
import logo from "../../assets/img/logo192.png"

const Login = (props) => {
  return (
      <Container className="loginContainer">
          <Row className="loginRow"><img src={logo}></img></Row>
          <Row className="loginRow">
            <Card>
                <CardImg top width="100%" src="https://vignette2.wikia.nocookie.net/creepypasta/images/4/4c/Name-tag-admin-1000.png/revision/latest?cb=20130730233935" alt="Card image cap" />
            </Card>
            <Card>
                <CardImg top width="100%" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRGui1I5GhdBpXBe8McoTeQTiP2G70tynhkxEqQck2xMRbM9w6aCwN2bc-9o7I8fol21NiH4M72StT3G5-lP3L7jwg32bVIJ9P0AQ&usqp=CAU&ec=45699844" alt="Card image cap" />
            </Card>
            <Card>
                <CardImg top width="100%" src="https://reactstrap.github.io/assets/256x186.svg" alt="Card image cap" />
            </Card>
          </Row>
      </Container>

  );
};

export default Login;