import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import MenuDesktop from '../components/MenuDesktop';
import MenuMobile from '../components/MenuMobile';

class Navigation extends Component {
  render() {
    return (
      <div>
        {/* <div className="bgDevice"></div> */}
        <div className="headerMobile">
          <MenuMobile/>
        </div>
        <div className="headerDesktop">
          <div style={{ width: '100%', background: 'red' }}>
            <div style={{ width: '100%', height: '150px', background: '#1a7910', zIndex: 1, position: 'relative' }}>
              <Container>
                <Row>
                  <Col md="5" sm="4">
                    <div style={{ width: '100%', height: '100px' }}>
                      <p className="logoNameCaleg">
                        ARDYSUSANTO
                      </p>
                      <p className="calonDapil">
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
                    <div style={{ width: '100%', height: '100px' }}>
                      {/* <p className="slogan">
                        Bersama membangun<br/>ekonomi kerakyatan
                      </p> */}
                      <img className="ardyKuat" src={'./images/ardysusanto.png'} alt="img-arysusanto-bersama-membangun-ekonomi-kerakyatan"/>
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