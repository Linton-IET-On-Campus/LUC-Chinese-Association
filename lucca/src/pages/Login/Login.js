import React from 'react';
import { Button, CardTitle, Container
} from 'reactstrap';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import "./Login.css";
<<<<<<< HEAD
import { Container, Row} from 'reactstrap';
import logo from "../../assets/img/logo192.png"
=======
import logo from "../../assets/img/logo192.png";


>>>>>>> b3fe78c347f0eb0039353be6877918dd914be721

const Login = (props) => {
  return (
      <Container>
          <img src={logo}></img>
          <CardTitle>登录</CardTitle>
          <Button color="primary" size="lg">管理员</Button>{''}
          <Button color="primary" size="lg">会员</Button>{''}
          <Button color="primary" size="lg">外校</Button>{''}
          

      </Container>



  );
};

export default Login;