import history from '../history';
import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';

import { judulConvertToUrlParameter, getCleanIdFromUrl2 } from '../helper/function';

import { connect } from 'react-redux';
import { getNewNews, readNewsByIdAction } from '../action/action_berita';
import { bindActionCreators } from 'redux';

import { Link } from 'react-router-dom';

class BeritaTerkait extends Component {
  constructor (props) {
    super (props)
    this.state = {
      isLoading: false,
      beritaTerbaru: null
    }
    this.goTo = this.goTo.bind(this);
    this.goToLink = this.goToLink.bind(this);
  }
  
  goTo (id, judul) {
    this.forceUpdate();
    history.push(`/berita/${id}/${judul}`)
  }

  componentDidMount () {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;

    this.props.getNewNews(getCleanIdFromUrl2(window.location.pathname))
  }

  componentWillReceiveProps (nextProps) {
    this.setState({
      isLoading: true,
      beritaTerbaru: nextProps.state.reducerBerita.beritaTerbaru
    })
  }

  goToLink (id, judul) {
    console.log('menuju ke link')
    this.props.readNewsByIdAction(id)
    this.props.getNewNews(id)
  }

  render() {
    const beritaTerbaru = (thisForComponent) => {
      const dataBeritaTerbaru = this.state.beritaTerbaru;
      const loopListBeritaTerbaru = dataBeritaTerbaru.map(function(data) {
        return (
          <Col md="4" key={data._id}>
            <Link to={`/berita/${data._id}/${judulConvertToUrlParameter(data.judul)}`} onClick={() => thisForComponent.goToLink(data._id, judulConvertToUrlParameter(data.judul)) }>
              <img className="imageBeritaTerbaru" src={data.img} alt={data.img}/>
            </Link>
            <Link to={`/berita/${data._id}/${judulConvertToUrlParameter(data.judul)}`} onClick={() => thisForComponent.goToLink(data._id, judulConvertToUrlParameter(data.judul)) }>
              <h6 className="judulBeritaTerkait" onClick={() => thisForComponent.goToLink(data._id, judulConvertToUrlParameter(data.judul)) }>{data.judul}</h6>
            </Link>
          </Col>
        )
      })
      return loopListBeritaTerbaru;
    }

    if (!this.state.isLoading) {
      return (<div>Loading...</div>)
    } else {
      return (
        <div>
          <hr/>
          <h4>Berita Terbaru</h4>
          <Row style={{ width: '100%', marginBottom: '30px' }}>
            {beritaTerbaru(this)}
          </Row>
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

const mapDispatchProps = (dispatch) => bindActionCreators({
  getNewNews,
  readNewsByIdAction
}, dispatch)

export default connect(mapStateToProps, mapDispatchProps)(BeritaTerkait);