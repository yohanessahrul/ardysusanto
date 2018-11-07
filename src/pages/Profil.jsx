import React, { Component } from 'react';
import { Container } from 'reactstrap';
import Header from '../components/Header';
import ProfilArdy from '../components/ProfilArdy';
import PendidikanArdy from '../components/PendidikanArdy';
import RekamJejakArdy from '../components/RekamJejakArdy';

class Profile extends Component {
  render() {
    return (
      <div>
        <Header/>
        <Container>
        </Container>
        <ProfilArdy/>
        <PendidikanArdy/>
        <RekamJejakArdy/>
      </div>
    );
  }
}

export default Profile;