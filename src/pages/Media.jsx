import React, { Component } from 'react';
import { Container } from 'reactstrap';
import Header from '../components/Header';

class Media extends Component {
  render() {
    return (
      <div>
        <Header/>
        <Container>
          <h1>Media page</h1>
        </Container>
      </div>
    );
  }
}

export default Media;