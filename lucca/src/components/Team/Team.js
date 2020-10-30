import React, { Component } from 'react';
import "./Team.css";

class Team extends Component{
    render() {
        return(  
          
            <div class="row">
              <div class="column">
                <div class="card">
                  <img src="https://www.w3schools.com/w3images/team1.jpg" alt="Jane" width="100%" />
                  <div class="container">
                    <h2>Jane Doe</h2>
                    <p class="title">CEO & Founder</p>
                    <p>Some text that describes me lorem ipsum ipsum lorem.</p>
                    <p>example@example.com</p>
                    <p><button class="button">Contact</button></p>
                  </div>
                </div>
              </div>
            
              <div class="column">
                <div class="card">
                  <img src="https://www.w3schools.com/w3images/team2.jpg" alt="Mike"  width="100%" />
                  <div class="container">
                    <h2>Mike Ross</h2>
                    <p class="title">Art Director</p>
                    <p>Some text that describes me lorem ipsum ipsum lorem.</p>
                    <p>example@example.com</p>
                    <p><button class="button">Contact</button></p>
                  </div>
                </div>
              </div>
              
              <div class="column">
                <div class="card">
                  <img src="https://www.w3schools.com/w3images/team3.jpg" alt="John" width="100%" />
                  <div class="container">
                    <h2>John Doe</h2>
                    <p class="title">Designer</p>
                    <p>Some text that describes me lorem ipsum ipsum lorem.</p>
                    <p>example@example.com</p>
                    <p><button class="button">Contact</button></p>
                  </div>
                </div>
              </div>
            </div>
        );
    }
}

export default Team;