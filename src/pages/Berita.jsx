import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import Header from '../components/Header';

class Berita extends Component {
  render() {
    return (
      <div>
        <Header/>
        <Container>
          <h1>Berita page</h1>
          <Row style={{ marginBottom: '20px' }}>
            <Col md="12">
              <Row>
                <Col md="4">
                  <div style={{ position: 'relative', width: '100%', height: '200px', background: '#e3e3e3', overflow: 'hidden' }}>
                    <img style={{ position: 'absolute', width: '140%', display: 'inline-table', left: '-20%' }} src={'./images/slide1.png'} alt="img"/>
                  </div>
                </Col>
                <Col md="8">
                  <h2>Kader Muda PKB Ini Siap Bersaing di Pilwako Tangerang</h2>
                  <p style={{ color: 'gray', lineHeight: '0.5em', marginTop: '10px' }}>
                    Rabu, 12 Maret 2018 
                    {/* <span style={{ background: 'yellow', fontSize: '13px', padding: '5px 7px', borderRadius: '5px', marginLeft: '8px', color: 'black' }}>Alang Mahendra</span> */}
                  </p>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis iure, sequi ex suscipit esse facilis laudantium nisi provident quasi consectetur, optio vitae rem dolorum numquam voluptate obcaecati quos at. Dolorum...</p>
                </Col>
              </Row>
            </Col>
          </Row>
          <Row style={{ marginBottom: '20px' }}>
            <Col md="12">
              <Row>
                <Col md="4">
                  <div style={{ position: 'relative', width: '100%', height: '200px', background: '#e3e3e3', overflow: 'hidden' }}>
                    <img style={{ position: 'absolute', width: '140%', display: 'inline-table', left: '-20%' }} src={'./images/slide1.png'} alt="img"/>
                  </div>
                </Col>
                <Col md="8">
                  <h2>Kader PKB Muda Siap Jadi Walikota Tangerang</h2>
                  <p style={{ color: 'gray', lineHeight: '0.5em', marginTop: '10px' }}>
                    Rabu, 12 Maret 2018 
                    {/* <span style={{ background: 'yellow', fontSize: '13px', padding: '5px 7px', borderRadius: '5px', marginLeft: '8px', color: 'black' }}>Alang Mahendra</span> */}
                  </p>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis iure, sequi ex suscipit esse facilis laudantium nisi provident quasi consectetur, optio vitae rem dolorum numquam voluptate obcaecati quos at. Dolorum...</p>
                </Col>
              </Row>
            </Col>
          </Row>
          <Row style={{ marginBottom: '20px' }}>
            <Col md="12">
              <Row>
                <Col md="4">
                  <div style={{ position: 'relative', width: '100%', height: '200px', background: '#e3e3e3', overflow: 'hidden' }}>
                    <img style={{ position: 'absolute', width: '140%', display: 'inline-table', left: '-20%' }} src={'./images/slide1.png'} alt="img"/>
                  </div>
                </Col>
                <Col md="8">
                  <h2>Didorong Jadi Walikota Tangerang, Ketum IPTI Mengaku Siap</h2>
                  <p style={{ color: 'gray', lineHeight: '0.5em', marginTop: '10px' }}>
                    Rabu, 12 Maret 2018 
                    {/* <span style={{ background: 'yellow', fontSize: '13px', padding: '5px 7px', borderRadius: '5px', marginLeft: '8px', color: 'black' }}>Alang Mahendra</span> */}
                  </p>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis iure, sequi ex suscipit esse facilis laudantium nisi provident quasi consectetur, optio vitae rem dolorum numquam voluptate obcaecati quos at. Dolorum...</p>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Berita;