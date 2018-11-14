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
      speed: 400,
      slidesToShow: 3,
      slidesToScroll: 1,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
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
          <p style={{ textAlign: 'center', width: '80%', margin: '0 auto' }}>
            Mas Ardy merupakan sosok yang terlibat di banyak organisasi dan berbagai pengalamannya sampai pada saat ini memungkinkan ia dapat masuk ke berbagai elemen masyarakat.
          </p>
          <Slider {...settings}>
            <div style={{ margin: '10px' }}>
              <img style={{ display: 'table', width: '100%', padding: '20px' }} src={'./images/1.jpg'} alt="kabar"/>
            </div>
            <div style={{ margin: '10px' }}>
              <img style={{ display: 'table', width: '100%', padding: '20px' }} src={'./images/2.jpg'} alt="kabar"/>
            </div>
            <div style={{ margin: '10px' }}>
              <img style={{ display: 'table', width: '100%', padding: '20px' }} src={'./images/3.jpg'} alt="kabar"/>
            </div>
            <div style={{ margin: '10px' }}>
              <img style={{ display: 'table', width: '100%', padding: '20px' }} src={'./images/4.jpg'} alt="kabar"/>
            </div>
            <div style={{ margin: '10px' }}>
              <img style={{ display: 'table', width: '100%', padding: '20px' }} src={'./images/5.jpg'} alt="kabar"/>
            </div>
            <div style={{ margin: '10px' }}>
              <img style={{ display: 'table', width: '100%', padding: '20px' }} src={'./images/6.jpg'} alt="kabar"/>
            </div>
          </Slider>
        </Container>
      </div>
    );
  }
}

export default KabarArdy;