import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import MenuDesktop from '../components/MenuDesktop';

class Navigation extends Component {
  render() {
    return (
      <div>
        {/* <div className="bgDevice"></div> */}
        <div className="headerMobile">
          <h3>Navbar Mobile</h3>
        </div>
        <div className="headerDesktop">
          <div style={{ width: '100%', background: 'red' }}>
            <div style={{ width: '100%', height: '150px', background: '#1a7910', zIndex: 1, position: 'relative' }}>
              <Container>
                <Row>
                  <Col md="5" sm="4">
                    <div style={{ width: '100%', height: '100px' }}>
                      <p style={{ display: 'table', fontFamily: 'Volkhov', fontWeight: 'bold', fontSize: '45px',  padding: 0, margin: 0, color: '#ffe571', marginTop: '20px', position: 'relative', textShadow: '2px 2px 3px #011605' }}>
                        ARDYSUSANTO
                      </p>
                      <p style={{ display: 'table', fontWeight: 'bold', color: 'white', marginTop: '-10px', letterSpacing: '3.6px', textShadow: '2px 2px 5px #000000' }}>
                        CALON DPR RI DAPIL BANTEN 3
                      </p>
                      <p style={{ display: 'table', color: 'white', marginTop: '-20px', fontSize: '12px', textShadow: '2px 2px 3px #000000' }}>
                        Kota Tangerang, Kota Tangerang Selatan, Kabupaten Tangerang
                      </p>
                    </div>
                  </Col>
                  <Col md="2" sm="4">
                    <div style={{ width: '100%', height: '120px' }}>
                      <img className="centerLogo" src={'./images/Logo_PKB_1.png'} alt="logo-pkb"/>
                    </div>
                  </Col>
                  <Col md="5" sm="4">
                    <div style={{ width: '100%', height: '100px', marginTop: '20px', }}>
                      <p style={{ fontSize: '30px', fontFamily: 'La Belle Aurore', lineHeight: '1.3em', color: 'white', marginTop: '20px', float: 'right', marginRight: '60px', textShadow: '2px 2px 3px #082900' }}>Bersama membangun<br/>ekonomi kerakyatan</p>
                    </div>
                  </Col>
                </Row>
              </Container>
              <div className="bgRakyat"></div>
            </div>
            <div className="menuDesktopWrap" >
              <MenuDesktop/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Navigation;