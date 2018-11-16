import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import Header from '../components/Header';

class NotFound extends Component {
  render() {
    return (
      <div>
        <Header/>
        <Container>
          <Row>
            <Col>
              <div style={{ width: '100%', padding: '80px 0px' }}>
                <img style={{ display: 'table', margin: '20px auto' }} src={'./images/404.png'} alt="not-found-404"/>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default NotFound;