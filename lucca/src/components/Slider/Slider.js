import React, { Component } from 'react';
import slide from '../../assets/img/about-bg.jpg'

import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import 'react-awesome-slider/dist/styles.css';


const AutoplaySlider = withAutoplay(AwesomeSlider);

class Slider extends Component{

    render() {
        return(
          <AutoplaySlider
            play={true}
            cancelOnInteraction={false} // should stop playing on user interaction
            interval={6000}
          >
            <div data-src={slide} />
            <div data-src={slide} />
            <div data-src={slide} />
          </AutoplaySlider>
        )
    }
}

export default Slider;