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
            <Col>
              <br/>
              <h1>{data.judul}</h1>
              <p>{data.isi}</p>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default DetailBerita;