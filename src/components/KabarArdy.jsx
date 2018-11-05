import React, { Component } from 'react';
import Slider from "react-slick";
import { Container,
//   Row, Col, 
} from 'reactstrap';

class KabarArdy extends Component {
  render() {
    var settings = {
      dots: true,
      autoplay: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
    return (
      <div className="bgKabarArdy paddingSection">
        <Container >
          <h2 style={{ textAlign: 'center', fontWeight: 'bold' }}>Kabar Mas Ardy ?</h2>
          <p style={{ textAlign: 'center', width: '80%', margin: '0 auto' }}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur obcaecati ipsum vero quo nam repudiandae deleniti laudantium. Incidunt, labore? Temporibus incidunt ratione doloremque rerum! Repellendus exercitationem corrupti illum qui.</p>
          <Slider {...settings}>
            <div style={{ margin: '10px' }}>
              <img style={{ display: 'table', width: '100%', padding: '20px' }} src={'./images/slide1.png'} alt="kabar"/>
            </div>
            <div style={{ margin: '10px' }}>
              <img style={{ display: 'table', width: '100%', padding: '20px' }} src={'./images/slide1.png'} alt="kabar"/>
            </div>
            <div style={{ margin: '10px' }}>
              <img style={{ display: 'table', width: '100%', padding: '20px' }} src={'./images/slide1.png'} alt="kabar"/>
            </div>
            <div style={{ margin: '10px' }}>
              <img style={{ display: 'table', width: '100%', padding: '20px' }} src={'./images/slide1.png'} alt="kabar"/>
            </div>
            <div style={{ margin: '10px' }}>
              <img style={{ display: 'table', width: '100%', padding: '20px' }} src={'./images/slide1.png'} alt="kabar"/>
            </div>
            <div style={{ margin: '10px' }}>
              <img style={{ display: 'table', width: '100%', padding: '20px' }} src={'./images/slide1.png'} alt="kabar"/>
            </div>
            <div style={{ margin: '10px' }}>
              <img style={{ display: 'table', width: '100%', padding: '20px' }} src={'./images/slide1.png'} alt="kabar"/>
            </div>
            <div style={{ margin: '10px' }}>
              <img style={{ display: 'table', width: '100%', padding: '20px' }} src={'./images/slide1.png'} alt="kabar"/>
            </div>
          </Slider>
        </Container>
      </div>
    );
  }
}

export default KabarArdy;