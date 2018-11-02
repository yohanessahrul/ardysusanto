import React, { Component } from 'react';
import { Container } from 'reactstrap';
import Header from '../components/Header';

class Berita extends Component {
  render() {
    return (
      <div>
        <Header/>
        <Container>
          <h1>Berita page</h1>
        </Container>
      </div>
    );
  }
}

export default Berita;