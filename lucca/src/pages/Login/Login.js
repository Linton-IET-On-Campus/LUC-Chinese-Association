import React from 'react';
import { Button, CardTitle 
} from 'reactstrap';

import "./Login.css";
import { Container} from 'reactstrap';
import logo from "../../assets/img/logo192.png";
import {
  Link
} from 'react-router-dom';

const Login = (props) => {
  return (
      <Container class="d-flex justify-content-center">
          <img src={logo}></img>
          <CardTitle>登录</CardTitle>
          <Button color="primary" size="lg">管理员</Button>{' '}
          <Button color="primary" size="lg">会员</Button>{' '}
          <Button color="primary" size="lg">外校</Button>{' '}
      </Container>

  );
};

export default Login;