import React from 'react';
import { Button, CardTitle, Container
} from 'reactstrap';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import "./Login.css";
import logo from "../../assets/img/logo192.png";



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