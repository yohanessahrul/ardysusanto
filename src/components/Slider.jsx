import React, { Component } from 'react';
import Sliders from 'react-slick';
import { Container } from 'reactstrap';

class Slider extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    }
    return (
      <div>
        <div className="sliderWrap">
          <div className="vignete"></div>
          <Container>
            <Sliders className="slides" {...settings}>
              <div >
                <img style={{ width: '100%', zIndex: 5 }} src={'./images/slide1.png'} alt="img-carousel"/>
              </div>
              <div>
                <img style={{ width: '100%', zIndex: 5 }} src={'./images/slide1.png'} alt="img-carousel"/>
              </div>
              <div>
                <img style={{ width: '100%', zIndex: 5 }} src={'./images/slide1.png'} alt="img-carousel"/>
              </div>
              <div>
                <img style={{ width: '100%', zIndex: 5 }} src={'./images/slide1.png'} alt="img-carousel"/>
              </div>
              <div>
                <img style={{ width: '100%', zIndex: 5 }} src={'./images/slide1.png'} alt="img-carousel"/>
              </div>
            </Sliders>
          </Container>
        </div>
      </div>
    );
  }
}

export default Slider;