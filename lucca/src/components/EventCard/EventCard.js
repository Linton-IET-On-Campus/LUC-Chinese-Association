import React from 'react';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';
import './EventCard.css';

const EventCard = (props) => {
  return (
    <div className="box">
      <Card>
        <CardImg top width="100%" src="https://reactstrap.github.io/assets/318x180.svg" alt="Card image cap" />
        <CardBody>
          <CardTitle>Card title</CardTitle>
          <CardSubtitle>Card subtitle</CardSubtitle>
          <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
            <Button color="primary">了解详情</Button>{' '} 
            <Button color="primary">报名</Button>{' '}               
          </CardBody>
      </Card>
    </div>
  );
};


export default EventCard;