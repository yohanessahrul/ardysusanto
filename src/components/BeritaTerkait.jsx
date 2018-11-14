import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';

import dataBerita from '../berita.json';

class BeritaTerkait extends Component {
  componentDidMount () {
    // console.log('This is props berita terkait===> ', dataBerita.berita)
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }
  render() {
    const judulParameter = (string) => {
      var result = ''
      for (var i=0; i < string.length; i++) {
        if (string[i] === ' ') {
          result += '-'
        } else if (string[i] === ',' || string[i] === '!' || string[i] === '(' || string[i] === ')') {
          result += ''
        } else {
          result+= string[i]
        }
      }
      return result.toLowerCase()
    }
    return (
      <div>
        <hr/>
        <h4>BeritaTerkait</h4>
        <Row style={{ width: '100%', marginBottom: '30px' }}>
          <Col md="4">
            <Link to={{
              pathname: `/berita/${judulParameter(dataBerita.berita[0].judul)}`,
              state: { beritaterpilih: `${JSON.stringify(dataBerita.berita[0])}` }
            }}>
              <img style={{ width: '100%', height: '100px', background: 'yellow' }} src={`/images/${dataBerita.berita[0].img}`} alt="img-berita-terkait"/>
            </Link>
            <Link to={{
              pathname: `/berita/${judulParameter(dataBerita.berita[0].judul)}`,
              state: { beritaterpilih: `${JSON.stringify(dataBerita.berita[0])}` }
            }}>
              <h6 className="judulBeritaTerkait" style={{ padding: '5px 0px' }}>{dataBerita.berita[0].judul}</h6>
            </Link>
          </Col>
          <Col md="4">
            <Link to={{
              pathname: `/berita/${judulParameter(dataBerita.berita[1].judul)}`,
              state: { beritaterpilih: `${JSON.stringify(dataBerita.berita[1])}` }
            }}>
              <img style={{ width: '100%', height: '100px', background: 'yellow' }} src={`/images/${dataBerita.berita[1].img}`} alt="img-berita-terkait"/>
            </Link>
            <Link to={{
              pathname: `/berita/${judulParameter(dataBerita.berita[1].judul)}`,
              state: { beritaterpilih: `${JSON.stringify(dataBerita.berita[1])}` }
            }}>
              <h6 className="judulBeritaTerkait" style={{ padding: '5px 0px' }}>{dataBerita.berita[1].judul}</h6>
            </Link>
          </Col>
          <Col md="4">
            <Link to={{
              pathname: `/berita/${judulParameter(dataBerita.berita[2].judul)}`,
              state: { beritaterpilih: `${JSON.stringify(dataBerita.berita[2])}` }
            }}>
              <img style={{ width: '100%', height: '100px', background: 'yellow' }} src={`/images/${dataBerita.berita[2].img}`} alt="img-berita-terkait"/>
            </Link>
            <Link to={{
              pathname: `/berita/${judulParameter(dataBerita.berita[2].judul)}`,
              state: { beritaterpilih: `${JSON.stringify(dataBerita.berita[2])}` }
            }}>
              <h6 className="judulBeritaTerkait" style={{ padding: '5px 0px' }}>{dataBerita.berita[2].judul}</h6>
            </Link>
          </Col>
        </Row>
      </div>
    );
  }
}

export default BeritaTerkait;