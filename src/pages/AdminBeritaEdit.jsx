import React, { Component } from 'react';
import history from '../history';
import { Container, Row, Col } from 'reactstrap';
import HeaderAdmin from '../components/HeaderAdmin';
import SideBarMenu from '../components/SideBarMenu';
import FormEditBerita from '../components/FormEditBerita';

import { connect } from 'react-redux';
import { cekAuthAction } from '../action/action_user';
import { bindActionCreators } from 'redux';

class AdminBeritaEdit extends Component {
  constructor (props) {
    super (props)
    this.state = {
      isLoading: false,
      userTerpilih: null
    }
  }
  componentDidMount () {
    this.cekLogin();
  }
  cekLogin () {
    if (localStorage.getItem('token')) {
      let token = localStorage.getItem('token');
      this.props.cekAuthAction(token)
    } else {
      history.push('/login')
      console.log('Anda bukan admin, redirect ke login')
    }
  }
  render() {
    return (
      <div>
        <Container fluid>
          <Row>
            <HeaderAdmin/>
          </Row>
          <Row>
            <SideBarMenu/>
            <Col md="10">
              <FormEditBerita id={this.props.match.params.id}/>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    state: state
  }
}

const mapDispatchToProps = (dispatch) => bindActionCreators({
  cekAuthAction
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(AdminBeritaEdit);