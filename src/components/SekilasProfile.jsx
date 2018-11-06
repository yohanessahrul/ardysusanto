import React, { Component } from 'react';
import { Container,
  Row, Col, Button
} from 'reactstrap';

class SekilasProfile extends Component {
  render() {
    return (
      <div className="bgSekilasArdy paddingSection">
        <Container>
          <Row style={{ position: 'relative' }}>
            <Col md="4" style={{ width: '100%' }}>
              <div className="fotoDesktopSekilasArdy">
                <img style={{ position: 'absolute', width: '103%', top: '-58px', left: '-10%' }} src={'./images/ardy1.png'} alt="ardypng"/>
              </div>
              <div className="fotoMobileSekilasArdy">
                <img className="imgFotoMobileSekilasArdy" src={'./images/ardy-bulet.png'} alt="img-ardy-mobile"/>
              </div>
            </Col>
            <Col md="8">
              <br/>
              <h3 className="h3ArdySekilas">Tentang Ardy Susanto</h3>
              <p className="pArdy">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias animi sit obcaecati laboriosam? Repellat, corrupti facere, atque iusto alias quos odio praesentium ullam rem incidunt recusandae facilis aspernatur. Culpa, qui?</p>
              <p className="pArdy">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque iure quis assumenda beatae aspernatur impedit voluptates error laborum facilis corrupti, incidunt ab ratione nisi id est ducimus eius, accusantium perferendis?</p>
              <Button className="btnSekilas" color="warning" size="lg">Lebih Lanjut Tentang Ardy</Button>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default SekilasProfile;