import React, { Component } from 'react';
import { Container } from 'reactstrap';
import Header from '../components/Header';
import ListBerita from '../components/ListBerita';

import dataBerita from '../berita.json';

// note
// 1. panggil api untuk tarik data berita semua disini

class Berita extends Component {
  render() {
    return (
      <div>
        <Header/>
        <Container>
          <br/>
          <h1>Berita Terkini</h1>
          <br/>
          <ListBerita data={dataBerita.berita}/>
        </Container>
      </div>
    );
  }
}

export default Berita;