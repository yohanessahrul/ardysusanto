import React, { Component } from 'react';
import { Container, Row, Col, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link} from 'react-router-dom';
import Header from '../components/Header';
import BeritaTerkait from '../components/BeritaTerkait';
import ShareSosmed from '../components/ShareSosmed';

import { Icon } from 'react-icons-kit';
import {calendar,eye} from 'react-icons-kit/fa';

// note:
// bikin api untuk get 1 artikel berdasarkan id

class DetailBerita extends Component {
  componentDidMount () {
    // console.log(JSON.parse(this.props.location.state.beritaterpilih))
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }
  render() {
    const data = JSON.parse(this.props.location.state.beritaterpilih);
    return (
      <div>
        <Header/>
        <Container>
          <Row>
            <Col md="12">
              <Breadcrumb>
                <BreadcrumbItem><Link to="/">Home</Link></BreadcrumbItem>
                <BreadcrumbItem><Link to="/berita">Berita</Link></BreadcrumbItem>
                <BreadcrumbItem active>{data.judul}</BreadcrumbItem>
              </Breadcrumb>
            </Col>
          </Row>
          <Row>
            <Col md="8">
              <br/>
              <h2 className="h2DetalBerita">{data.judul}</h2>
              <div style={{ marginBottom: '20px' }}>
                <div style={{ fontSize: '14px', color: 'gray', float: 'left', marginRight: '20px' }}>
                  <div>
                    <Icon icon={calendar} size={12} style={{ marginRight: '5px' }}/>
                    {data.date}
                  </div>
                </div>
                <div style={{ fontSize: '14px', color: 'gray', float: 'left' }}>
                  <div>
                    <Icon icon={eye} size={12} style={{ marginRight: '5px' }}/>
                    {data.view} views
                  </div>
                </div>
                <div className="clear"></div>
              </div>
              <div style={{ width: '100%', height: '380px', background: 'gray', marginBottom: '30px', overflow: 'hidden' }}>
                <img style={{ width: '100%' }} src={`/images/${data.img}`} alt={data.img}/>
              </div>
              <div dangerouslySetInnerHTML={{ __html: data.isi }}>
              </div>
              <ShareSosmed/>
              <BeritaTerkait dataBeritaTerkait={data}/>
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