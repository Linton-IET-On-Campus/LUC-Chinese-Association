import React, { Component } from 'react';

export default class Navbar extends Component {

  render() {

    return (
        <nav class="navbar navbar-light navbar-expand-lg fixed-top" id="navbarResponsive">
        <div class="container"><img src={require('../assets/img/logo192.png')} style={{width: "80px", height: "80px"}}/><button data-toggle="collapse" data-target="#navbarResponsive" class="navbar-toggler" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation"><i class="fa fa-bars"></i></button>
            <div class="collapse navbar-collapse" id="navbarResponsive">
                <ul class="nav navbar-nav ml-auto nav_link">
                    <li class="nav-item" role="presentation"><a class="nav-link active" href="#"><font size="5"><strong>🗓️ 外校活动</strong></font></a></li>
                    <li class="nav-item" role="presentation"><a class="nav-link" href="#"><font size="5">✍️ Blog</font></a></li>
                    <li class="nav-item" role="presentation"><a class="nav-link" href="#"><font size="5">🤑 友情赞助</font></a></li>
                    <li class="nav-item" role="presentation"><a class="nav-link" href="#"><font size="5">ℹ️ 关于我们</font></a></li>
                    <li class="nav-item" role="presentation"><a class="nav-link" href="#"><font size="5">🛒 商店</font></a></li>
                    <li class="nav-item" role="presentation"><a class="nav-link" href="#"><font size="5">🔒 登录</font></a></li>
                </ul>
			</div>
        </div>
    </nav>
      
    );
  }
}