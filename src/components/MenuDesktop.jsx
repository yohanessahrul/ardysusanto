import React, { Component } from 'react';
import { Container, Row, Col, Button } from 'reactstrap';
import { Link } from 'react-router-dom';

import { Icon } from 'react-icons-kit';
import {
  facebookSquare,
  twitterSquare,
  instagram,
  youtubePlay,
} from 'react-icons-kit/fa';

class MenuDesktop extends Component {
  render() {
    return (
      <div>
        <Container style={styles.bgRed}>
          <Row>
            <Col md="12">
              <div className="menuDesktop">
                <ul>
                  <li>
                    <Link to="/">BERANDA</Link>
                  </li>
                  <li>
                    <Link to="/profil">PROFIL</Link>
                  </li>
                  <li>
                    <Link to="/berita">BERITA</Link>
                  </li>
                  {/* <li>
                    <Link to="/media">MEDIA</Link>
                  </li> */}
                  <div className="clear"></div>
                  <div className="sosmedMenu">
                    <ul>
                      {/* <li style={{ fontSize: '12px', marginTop: '15px' }}>Sosial Media : </li> */}
                      <li><Button className="btnSosmed" href="https://www.facebook.com/Sahabat-ardy-susanto-2180902908788913/?ti=as" target="_blank"><Icon size={22} className="iconSosmed" icon={facebookSquare}/></Button></li>
                      <li><Button className="btnSosmed" href="#"><Icon size={22} className="iconSosmed" icon={twitterSquare}/></Button></li>
                      <li><Button className="btnSosmed" href="https://www.instagram.com/oey.ardysusanto/" target="_blank"><Icon size={22} className="iconSosmed" icon={instagram}/></Button></li>
                      <li><Button className="btnSosmed" href="#"><Icon size={22} className="iconSosmed" icon={youtubePlay}/></Button></li>
                    </ul>
                  </div>
                </ul>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

const styles = {
  bgRed: {
    // background: 'red'
  }
}

export default MenuDesktop;