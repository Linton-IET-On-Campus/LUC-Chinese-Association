import React, { Component } from 'react';
import { ReactNavbar} from "react-responsive-animate-navbar";
import "./Navbar.css";
import logo from "../../assets/img/logo192.png";

class Navbar extends Component{
    render() {
        return(
            <ReactNavbar
            color="rgba(0, 0, 0, 50)"
            logo={logo} 
            menu={[
              { name: "🗓️ 外校活动",  to: "/"},
              { name: "✍️ 博客", to: "/blog" },
              { name: "🤑 友情赞助", to: "/donate" },
              { name: "📌 关于我们", to: "/about" },
              { name: "🛒 商店", to: "/shop" },
              { name: "🔒 登录", to: "/login" },
            ]}
            
            social={[
              {
                name: "Facebook",
                url: "https://www.facebook.com/nazeh200/",
                icon: ["fab", "facebook-f"],
              },
              {
                name: "Instagram",
                url: "https://www.instagram.com/nazeh_taha/",
                icon: ["fab", "instagram"],
              },
              {
                name: "Twitter",
                url: "http://nazehtaha.herokuapp.com/",
                icon: ["fab", "twitter"],
              },
            ]}
          />

        );
    }
}

export default Navbar;