import React, { Component } from 'react'
import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css";
class Slider extends Component {
    render() {
        return (
            <Carousel>
                <div>Slider 1</div>
                <div>Slider 2</div>
                <div>Slider 3</div>


            </Carousel>
            
        )
    }
}

export default Slider
