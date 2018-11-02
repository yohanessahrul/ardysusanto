import React, { Component } from 'react';
import { Container } from 'reactstrap';
import Header from '../components/Header';
import Slider from '../components/Slider';

class HomePage extends Component {
  render() {
    return (
      <div>
        <Header/>
        <Slider/>
        <Container>
          <h1>Beranda page !</h1>
        </Container>
      </div>
    );
  }
}

export default HomePage;