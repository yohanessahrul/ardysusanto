import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';

class VideoArdy extends Component {
  render() {
    return (
      <div className="bgVideo paddingSection">
        <h2 style={{ textAlign: 'center', color: 'white', fontWeight: 'bold' }}>Video Ardy Susanto</h2>
        <p style={{ textAlign: 'center', color: '#a7a7a7', width: '70%', margin: '0 auto' }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate quas perspiciatis asperiores et. Itaque adipisci fugiat nesciunt repellat dolorem consequatur blanditiis deserunt hic natus cum excepturi, debitis quas alias tenetur!</p>
        <br/>
        <Container>
          <Row>
            <Col>
              <div className="iframeYutub">
                <iframe style={{ display: 'table', margin: '0 auto', border: '5px solid #FAE773', boxShadow: '0px 0px 10px 3px black' }} width="100%" height="100%" src="https://www.youtube.com/embed/hlWiI4xVXKY" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default VideoArdy;