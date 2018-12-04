import history from '../history';
import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';

// import dataBerita from '../berita.json';
import { connect } from 'react-redux';
import { getNewNews, readNewsByIdAction } from '../action/action_berita';
import { bindActionCreators } from 'redux'

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

    const pecah = window.location.pathname.split('/')[2];
    let cleanId = pecah.replace(/[^a-zA-Z0-9 ]/g, "");
    this.props.getNewNews(cleanId)
  }

  componentWillReceiveProps (nextProps) {
    // console.log('NEXTPROPS COMPONENT => ', nextProps.state.reducerBerita.beritaTerbaru)
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

      const loopListBeritaTerbaru = dataBeritaTerbaru.map(function(data) {
        return (
          <Col md="4" key={data._id}>
            <img className="imageBeritaTerbaru" src={data.img} onClick={() => thisForComponent.goToLink(data._id, judulParameter(data.judul)) } alt={data.img}/>
            <h6 className="judulBeritaTerkait" onClick={() => thisForComponent.goToLink(data._id, judulParameter(data.judul)) }>{data.judul}</h6>
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