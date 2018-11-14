import React, { Component } from 'react';
import { Container, Row, Col, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link} from 'react-router-dom';
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
          <Row>
            <Col md="12">
              <Breadcrumb>
                <BreadcrumbItem><Link to="/">Home</Link></BreadcrumbItem>
                <BreadcrumbItem active>Berita</BreadcrumbItem>
              </Breadcrumb>
            </Col>
            <Col md="12">
              <h3 style={{ marginTop: '-100px !important' }}>Berita Terkait</h3><br/>
            </Col>
          </Row>
          <ListBerita data={dataBerita.berita}/>
        </Container>
      </div>
    );
  }
}

export default Berita;