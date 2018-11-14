import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';

class VideoArdy extends Component {
  render() {
    return (
      <div className="bgVideo paddingSection">
        <Container>
          <Row>
            <Col>
              <h2 style={{ textAlign: 'center', color: 'white', fontWeight: 'bold' }}>Video Ardy Susanto</h2>
              <p style={{ textAlign: 'center', color: '#a7a7a7', width: '80%', margin: '0 auto' }}>Saya beberapa kali terjun ke masyarakat, dalam usaha untuk mengadvokasi mereka dalam menghadapi beberapa masalah. Saya melihat banyak kebutuhan mereka yang sebenernya belum terpenuhi bahkan mereka ditindas. (Ardy Susanto) </p>
              <br/>
            </Col>
          </Row>
          <Row>
            <Col>
              <div className="iframeYutub">
                <iframe title="video-ardy" style={{ display: 'table', margin: '0 auto', border: '5px solid #FAE773', boxShadow: '0px 0px 10px 3px black' }} width="100%" height="100%" src="https://www.youtube.com/embed/VprDBdscDP4" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default VideoArdy;