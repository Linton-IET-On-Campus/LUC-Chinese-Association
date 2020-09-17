import React from 'react';
import { Button, CardTitle 
} from 'reactstrap';

import { Container} from 'reactstrap';
import logo from "../../assets/img/logo192.png";

const Admin = (props) => {
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

export default Admin;