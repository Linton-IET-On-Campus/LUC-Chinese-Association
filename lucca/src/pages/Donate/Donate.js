import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import "./Donate.css";
import { Alert } from 'reactstrap';

import EventCard from "../../components/Card/Card";
 

import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

class Donate extends Component {
    constructor(props) {
      super(props);
    }
  
<<<<<<< HEAD
    render() {
      return (
        <body>
          <Alert class="a1" color="primary">This is a primary alert — check it out!</Alert>
          <EventCard />
       </body>
      );
    }
=======
    render(){
      return(
          <div>
              <Navbar />
              <br />
              
              <Container>
                    <Row>
                    <h1>名人堂</h1>
                    </Row>
                    </Container>
                  
                    <div class="container1">
                      <img id="pic1" src="donate.png"></img>
                    <div id="left head">
                <h1>Thank You 4 Donating</h1>
                <p>We the Linton University College Chinese Association appreciate your donation!</p>
                <p>Our best wishes for you always</p> 
                
                </div>
                <hr class="new"/>
                <br/>
                <p>Your info :</p>

                <form>                
                <input type="text" id="name" name="name" placeholder="Your name.."></input>
                <input type="email" id="email" name="email" placeholder="Your e-mail.."></input>
                <input type="text" id="amount" name="amount" placeholder="Amount donated.." ></input>
                <input type="text" id="number" name="card number" placeholder="Card Number.." ></input>
                <div class="sec-3">
                  <input type="text" id="expiry" name="expiry" placeholder="Expiry Date (MM/YY)"></input>
                  <input type="text" id="cvv" name="cvv" placeholder="CVV.." maxLength="3"></input>
                </div>
                <br/>
                 <button type="submit" form="form1" value="Submit">Submit</button>
                 </form>
                <br/> 
              </div>
              <hr />
              <Footer />
          </div>
      )
>>>>>>> 11a552e70fae89b37fcb5621ff480ed320aebc54
  }
}


  export default Donate;