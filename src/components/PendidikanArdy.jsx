import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';

class PendidikanArdy extends Component {
  render() {
    return (
      <div style={{ width: '100%', background: '#5a5a5a' }} className="paddingSection">
        {/* <h1>Pendidikan</h1> */}
        <Container>
          <h2 style={{ textAlign: 'center' }}>Riwayat Pendidikan</h2>
          <br/>
          <Row>
            <Col md="4">
              <div style={{ width: '100%', height: '200px', background: 'yellow', marginBottom: '20px' }}></div>
            </Col>
            <Col md="4">
              <div style={{ width: '100%', height: '200px', background: 'yellow', marginBottom: '20px' }}></div>
            </Col>
            <Col md="4">
              <div style={{ width: '100%', height: '200px', background: 'yellow', marginBottom: '20px' }}></div>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default PendidikanArdy;