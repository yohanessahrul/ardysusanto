import React, { Component } from 'react';
import { Container } from 'reactstrap';
import Header from '../components/Header';

class Profile extends Component {
  render() {
    return (
      <div>
        <Header/>
        <Container>
          <h1>Profile Page</h1>
          
        </Container>
      </div>
    );
  }
}

export default Profile;