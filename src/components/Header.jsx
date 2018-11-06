import React, { Component } from 'react';
import { Container, Row, Col, Button } from 'reactstrap';
import MenuDesktop from '../components/MenuDesktop';
import { times } from 'react-icons-kit/fa';
// import { table } from 'react-icons-kit/fa';

class Navigation extends Component {
  constructor (props){
    super (props)
    this.jalan = this.jalan.bind(this);
  }
  componentDidMount(){
  }
  jalan () {
    console.log('Jalaaaaan')
    if (window.devicePixelRatio === 1.5) {
      alert("This is a high-density screen");
    } else if (window.devicePixelRatio === 0.75) {
      alert("This is a low-density screen");
    } else if (window.devicePixelRatio === 2) {
      alert("2");
    }
  }
  render() {
    return (
      <div>
        <Button onClick={this.jalan}>Lookit</Button>
        {/* {this.jalan} */}
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
                      <img className="ardyKuat" src={'./images/ardysusanto.png'}/>
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