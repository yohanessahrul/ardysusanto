import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import Header from '../components/Header';

class DetailBerita extends Component {
  componentDidMount () {
    console.log(JSON.parse(this.props.location.state.beritaterpilih))
  }
  render() {
    const data = JSON.parse(this.props.location.state.beritaterpilih);
    return (
      <div>
        <Header/>
        <Container>
          <Row>
            <Col md="8">
              <br/>
              <h2>{data.judul}</h2>
              <div style={{ width: '100%', height: '380px', background: 'gray', marginBottom: '30px', overflow: 'hidden' }}>
                <img style={{ width: '100%' }} src={`/images/${data.img}`} alt={data.img}/>
              </div>
              <div dangerouslySetInnerHTML={{ __html: data.isi }}>
              </div>
            </Col>
            <Col md="4">
              <img style={{ width: '100%', marginTop: '30px' }} src="/images/poster-ardy.jpeg" alt="poster-ardy"/>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default DetailBerita;