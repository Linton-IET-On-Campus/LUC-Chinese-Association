import React, { Component } from 'react';
import "./Donate.css";
import { Alert } from 'reactstrap';

import EventCard from "../../components/EventCard/EventCard";
 

class Donate extends Component {
    constructor(props) {
      super(props);
    }
  
    render() {
      return (
        <body>
          <Alert class="a1" color="primary">This is a primary alert — check it out!</Alert>
          <EventCard />
       </body>
      );
    }
  }

  export default Donate;