import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';

import { Icon } from 'react-icons-kit';
import {clockO} from 'react-icons-kit/fa';

import { Link } from 'react-router-dom';

class ListBerita extends Component {
  render() {
    const listBerita = () => {
      const dataBerita = this.props.data

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

      const loopList = dataBerita.map(function (data, i) {
        return (
          <Row style={{ marginBottom: '20px' }} key={i}>
            <Col md="12">
              <Row>
                <Col md="4">
                  <div style={{ position: 'relative', width: '100%', height: '200px', background: '#e3e3e3', overflow: 'hidden' }}>
                    <Link to={{
                      pathname: `/berita/${data.id}/${judulParameter(data.judul)}`,
                      state: { beritaterpilih: `${JSON.stringify(data)}` }
                    }}>
                      <img style={{ position: 'absolute', width: '140%', display: 'inline-table', left: '-20%' }} src={`./images/${data.img}`} alt="img"/>
                    </Link>
                  </div>
                </Col>
                <Col md="8">
                  <h3 style={{  color: '#555555', lineHeight: '1.3em' }}>
                    <Link to={{
                      pathname: `/berita/${data.id}/${judulParameter(data.judul)}`,
                      state: { beritaterpilih: `${JSON.stringify(data)}` }
                    }}>
                      {data.judul}
                    </Link>
                  </h3>
                  <div style={{ color: '#999999', fontSize: '14px', marginBottom: '15px' }}>
                    <Icon style={{ marginRight: '5px', marginTop: '-5px', color: '#999999' }} size={14} icon={clockO} />{data.date}
                  </div>
                  <p style={{ fontFamily: 'Nunito Sans' }}>{ data.isi.replace(/(<([^>]+)>)/ig,"").substring(18,200) + '..' }</p>
                </Col>
              </Row>
            </Col>
          </Row>
        )
      })
      return loopList;
    }
    return (
      <div>
        {listBerita()}
      </div>
    );
  }
}

export default ListBerita;