// import history from '../history';
import React, { Component } from 'react';
import { Container, Row, Col, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link} from 'react-router-dom';
import { Icon } from 'react-icons-kit';
import {calendar,eye} from 'react-icons-kit/fa';

import Header from '../components/Header';
import BeritaTerkait from '../components/BeritaTerkait';

import { connect } from 'react-redux';
import { readNewsByIdAction, addViewerAction } from '../action/action_berita';
import { bindActionCreators } from 'redux';

import DocumentMeta from 'react-document-meta';

class DetailBerita extends Component {
  constructor (props) {
    super (props)
    this.state = {
      isLoading: false,
      beritaTerpilih: null
    }
    this.goTo = this.goTo.bind(this);
  }
  componentDidMount () {
    const pecah = window.location.pathname.split('/')[2];
    let cleanId = pecah.replace(/[^a-zA-Z0-9 ]/g, "");

    this.props.readNewsByIdAction(cleanId) // api get current news for read
    this.props.addViewerAction(cleanId); // api increment view

  }
  componentWillReceiveProps (nextProps) {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    let data = nextProps.state.reducerBerita.readNews;
    this.setState({
      isLoading: true,
      beritaTerpilih: data
    })

    // set SEO meta tag

    // document.title = data.judul;
    // document.querySelector('meta[name="description"]').setAttribute("content", data.isi.replace(/(<([^>]+)>)/ig,"").substring(18,150) + '..');
    // document.querySelector('meta[itemprop="image"]').setAttribute("content", data.img);
    // document.querySelector('meta[property="og:title"]').setAttribute("content", data.judul);
    // document.querySelector('meta[property="og:description"]').setAttribute("content", data.isi.replace(/(<([^>]+)>)/ig,"").substring(18,150) + '..');
    // document.querySelector('meta[property="og:image"]').setAttribute("content", data.img);
  }
  goTo (id, judul) {
    console.log('Masuk ke go to ID =>', this.props.location.pathname)
  }
  render() {
    if (this.state.isLoading === false) {
      return (
        <div>Loading...</div>
      )
    } else {
      const data = this.state.beritaTerpilih;
      const meta = {
        title: 'Hahahaha',
        description: 'Deskripsi hahaha'
      }
      return (
        <div {...meta}>
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
                      {data.createdAt}
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
                  <img style={{ width: '100%' }} src={data.img} alt={data.img}/>
                </div>
                <div dangerouslySetInnerHTML={{ __html: data.isi }}>
                </div>
                {/* <BeritaTerkait dataBeritaTerkait={data}/> */}
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
}

const mapStateToProps = (state) => {
  return {
    state: state
  }
}

const mapDispatchToProps = (dispatch) => bindActionCreators({
  readNewsByIdAction,
  addViewerAction
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(DetailBerita);