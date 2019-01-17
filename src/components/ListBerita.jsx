import history from '../history';
import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
import { Icon } from 'react-icons-kit';
import {calendar} from 'react-icons-kit/fa';
import { Link } from 'react-router-dom';

import { judulConvertToUrlParameter, dateFormatClean } from '../helper/function';

import { connect } from 'react-redux';
import { getAllNewsAction } from '../action/action_berita';
import { bindActionCreators } from 'redux';

class ListBerita extends Component {
  constructor (props) {
    super (props)
    this.state = {
      isLoading: false,
      dataBerita: null
    }
    this.goToLink = this.goToLink.bind(this);
  }
  componentDidMount () {
    this.props.getAllNewsAction() // api get all news
  }
  componentWillReceiveProps (nextProps) {
    this.setState({
      isLoading: true,
      dataBerita: nextProps.state.reducerBerita.data
    })
  }

  goToLink (link) {
    history.push(link)
    window.location.reload(true)
  }

  render() {
    const listBerita = (thisDeep) => {
      const dataBerita = this.state.dataBerita

      const loopList = dataBerita.map(function (data, i) {
        return (
          <Row style={{ marginBottom: '20px' }} key={i}>
            <Col md="12">
              <Row>
                <Col md="4">
                  <div style={{ position: 'relative', width: '100%', height: '200px', background: '#e3e3e3', overflow: 'hidden' }}>
                    <img className="pointer" onClick={() => thisDeep.goToLink(`/berita/${(data._id)}/${judulConvertToUrlParameter(data.judul)}`)} style={{ position: 'absolute', width: '140%', display: 'inline-table', left: '-20%' }} src={data.img} alt="img"/>
                  </div>
                </Col>
                <Col md="8">
                  <h3 className="judulListBerita" onClick={() => thisDeep.goToLink(`/berita/${(data._id)}/${judulConvertToUrlParameter(data.judul)}`)}>
                    {data.judul}
                  </h3>
                  <div className="dateListBerita">
                    <Icon className="iconListBerita" icon={calendar} size={13}/>
                    {dateFormatClean(data.createdAt)}
                  </div>
                  <p className="pListBerita" style={{ fontFamily: 'Nunito Sans' }}>{ data.isi.replace(/(<([^>]+)>)/ig,"").substring(18,300) + '..' }</p>
                </Col>
              </Row>
            </Col>
          </Row>
        )
      })
      return loopList;
    }
    if (!this.state.isLoading) {
      return (<div>Loading...</div>)
    } else {
      return (
        <div>
          {listBerita(this)}
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
  getAllNewsAction
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(ListBerita);