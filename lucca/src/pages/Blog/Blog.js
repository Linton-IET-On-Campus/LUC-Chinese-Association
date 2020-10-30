import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import "./Blog.css";

import Carousel from '../../components/Carousel.js';
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer"

class Blog extends Component {
  render() {
      return (
       <body>
       <div>
           <Container>
            <h1>华文学会</h1>
           </Container>
           <Container>
            <Navbar/>
            <div class="search">
              <input class="search-bar" type="text" placeholder="搜寻.."></input>
              <button class="search-icon"type="submit"><i class="fa fa-search"></i></button>
            </div>
           </Container>

           <Container>
            <Carousel/>
           </Container>          

            <div class="profile">
              <div class="profile-sidebar">
                <img class="profile-image" src="https://avatarfiles.alphacoders.com/125/thumb-125608.jpg" alt=""></img>
                <ul class="social-media">
                  <li class="social-item">
                    <a class="social-link" href="">
                      <i class="fab fa-facebook-square"></i>
                    </a>
                  </li>
                  <li class="social-item">
                    <a class="social-link" href="">
                      <i class="fab fa-instagram-square"></i>
                    </a>
                  </li>
                  <li class="social-item">
                    <a class="social-link" href="">
                      <i class="fab fa-twitter-square"></i>
                    </a>
                  </li>
                </ul>
              </div>

              <div class="profile-main">
                <h2 class="profile-name">Lee Kah Hin</h2>
                <p class="profile-position">Software Engineer</p>
                <p class="profile-body">
                  is the person who like creating something and playing game.
                </p>
                
              </div>
              </div>

              <div class="profile">
              <div class="profile-sidebar">
                <img class="profile-image" src="https://avatarfiles.alphacoders.com/125/thumb-125608.jpg" alt=""></img>
                <ul class="social-media">
                  <li class="social-item">
                    <a class="social-link" href="">
                      <i class="fab fa-facebook-square"></i>
                    </a>
                  </li>
                  <li class="social-item">
                    <a class="social-link" href="">
                      <i class="fab fa-instagram-square"></i>
                    </a>
                  </li>
                  <li class="social-item">
                    <a class="social-link" href="">
                      <i class="fab fa-twitter-square"></i>
                    </a>
                  </li>
                </ul>
              </div>

              <div class="profile-main">
                <h2 class="profile-name">Lee Kah Hin</h2>
                <p class="profile-position">Software Engineer</p>
                <p class="profile-body">
                  is the person who like creating something and playing game.
                </p>
                
              </div>
              </div>
         
         <div class="spacing"></div>
         <Footer/>
       </div>

       </body>

      
      );
    }
  }

  
  export default Blog;