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
  render() {
    const listBerita = () => {
      const dataBerita = this.state.dataBerita

      const loopList = dataBerita.map(function (data, i) {
        return (
          <Row style={{ marginBottom: '20px' }} key={i}>
            <Col md="12">
              <Row>
                <Col md="4">
                  <div style={{ position: 'relative', width: '100%', height: '200px', background: '#e3e3e3', overflow: 'hidden' }}>
                    <Link to={{
                      pathname: `/berita/${(data._id)}/${judulConvertToUrlParameter(data.judul)}`,
                      state: { beritaterpilih: `${JSON.stringify(data)}` }
                    }}>
                      <img style={{ position: 'absolute', width: '140%', display: 'inline-table', left: '-20%' }} src={data.img} alt="img"/>
                    </Link>
                  </div>
                </Col>
                <Col md="8">
                  <h3 style={{  color: '#555555', lineHeight: '1.3em' }}>
                    <Link to={{
                      pathname: `/berita/${(data._id)}/${judulConvertToUrlParameter(data.judul)}`,
                      state: { id: `${JSON.stringify(data._id)}` }
                    }}>
                      {data.judul}
                    </Link>
                  </h3>
                  <div style={{ color: '#999999', fontSize: '14px', marginBottom: '15px' }}>
                    <Icon style={{ marginRight: '5px', marginTop: '-5px', color: '#999999' }} size={14} icon={calendar} />
                    {dateFormatClean(data.createdAt)}
                  </div>
                  <p style={{ fontFamily: 'Nunito Sans' }}>{ data.isi.replace(/(<([^>]+)>)/ig,"").substring(18,300) + '..' }</p>
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
          {listBerita()}
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