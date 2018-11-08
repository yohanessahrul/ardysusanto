import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';

class ProfilArdy extends Component {
  render() {
    return (
      <div style={{ width: '100%', background: 'white' }} className="paddingSection">
        <Container>
          <Row>
            <Col md="12">
              <div style={{ width: '300px', height: '300px', background: 'yellow', margin: '25px auto 0 auto', borderRadius: '250px', overflow: 'hidden' }}>
                <img style={{ width: '100%' }} src={'./images/ardy-bulet.png'}/>
              </div>
              <h2 style={{ textAlign: 'center', marginTop: '20px' }}>
                Ardy Susanto Oey
              </h2>
              <p style={{ textAlign: 'center', lineHeight: '1em' }}>
                CALON DPR RI DAPIL BANTEN 3
              </p>
              <p style={{ textAlign: 'center', marginTop: '40px', fontSize: '18px' }}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut quisquam modi 
                explicabo suscipit quasi dignissimos ad, tempore repellendus molestiae 
                facere, fuga officiis fugit laborum pariatur enim a cupiditate. Odio, sunt. 
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit quod ullam, 
                voluptas optio asperiores exercitationem illum sequi consectetur cumque 
                similique, magnam, quae itaque quasi? Ipsum recusandae quo facilis nobis? 
                Unde. Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, vel 
                quisquam in iure consequatur corrupti dicta aliquam amet repudiandae odit 
                recusandae quam, sit nobis aperiam nulla minima, harum reprehenderit sed!
              </p>
            </Col>
          </Row>
          <Row>
          </Row>
        </Container>
      </div>
    );
  }
}

export default ProfilArdy;