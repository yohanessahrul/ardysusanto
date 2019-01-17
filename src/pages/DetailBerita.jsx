// import history from '../history';
import React, { Component } from 'react';
import { Container, Row, Col, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link} from 'react-router-dom';
import { Icon } from 'react-icons-kit';
import { calendar, eye } from 'react-icons-kit/fa';

import Header from '../components/Header';
import BeritaTerbaru from '../components/BeritaTerbaru';
import InlineShareButton from '../components/InlineShareButton';

import { dateFormatClean, getCleanIdFromUrl2 } from '../helper/function'

import { connect } from 'react-redux';
import { readNewsByIdAction, addViewerAction } from '../action/action_berita';
import { bindActionCreators } from 'redux';

// import DocumentMeta from 'react-document-meta';

class DetailBerita extends Component {
  constructor (props) {
    super (props)
    this.state = {
      isLoading: false,
      beritaTerpilih: null,
      beritaTerbaru: null
    }
    this.goTo = this.goTo.bind(this);
  }
  componentDidMount () {
    this.props.readNewsByIdAction(getCleanIdFromUrl2(window.location.pathname)) // api get current news for read
    this.props.addViewerAction(getCleanIdFromUrl2(window.location.pathname)); // api increment view

  }
  componentWillReceiveProps (nextProps) {
    // console.log('NEXTPROPS', nextProps)
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    let dataCurrentBerita = nextProps.state.reducerBerita.readNews;
    this.setState({
      isLoading: true,
      beritaTerpilih: dataCurrentBerita,
    })

    // set SEO meta tag
    // document.title = dataCurrentBerita.judul;
    // document.querySelector('meta[name="description"]').setAttribute("content", dataCurrentBerita.isi.replace(/(<([^>]+)>)/ig,"").substring(18,150) + '..');
    // document.querySelector('meta[itemprop="image"]').setAttribute("content", dataCurrentBerita.img);
    // document.querySelector('meta[property="og:title"]').setAttribute("content", dataCurrentBerita.judul);
    // document.querySelector('meta[property="og:description"]').setAttribute("content", dataCurrentBerita.isi.replace(/(<([^>]+)>)/ig,"").substring(18,150) + '..');
    // document.querySelector('meta[property="og:image"]').setAttribute("content", dataCurrentBerita.img);
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
      const datas = this.state.beritaTerpilih;
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
                  <BreadcrumbItem active>Detail Berita</BreadcrumbItem>
                </Breadcrumb>
              </Col>
            </Row>
            <Row>
              <Col md="8">
                <br/>
                <h2 className="h2DetalBerita">{datas.judul}</h2>
                <div style={{ marginBottom: '20px' }}>
                  <div style={{ fontSize: '14px', color: 'gray', float: 'left', marginRight: '20px' }}>
                    <div>
                      <Icon icon={calendar} size={12} style={{ marginRight: '5px' }}/>
                      {dateFormatClean(datas.createdAt)}
                    </div>
                  </div>
                  <div style={{ fontSize: '14px', color: 'gray', float: 'left' }}>
                    <div>
                      <Icon icon={eye} size={12} style={{ marginRight: '5px' }}/>
                      {datas.view} views
                    </div>
                  </div>
                  <div className="clear"></div>
                </div>
                <InlineShareButton dataShare={this.state.beritaTerpilih}/>
                <br/>
                <div className="wadahImageDetail">
                  <img style={{ width: '100%' }} src={datas.img} alt={datas.img}/>
                </div>
                <div dangerouslySetInnerHTML={{ __html: datas.isi }}>
                </div>
                <BeritaTerbaru/>
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
  addViewerAction,
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(DetailBerita);