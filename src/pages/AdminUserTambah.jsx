import React, { Component } from 'react';
import history from '../history';
import { Container, Row, Col } from 'reactstrap';
import SideBarMenu from '../components/SideBarMenu';
import FormTambahUser from '../components/FormTambahUser';

import { connect } from 'react-redux';
import { cekAuthAction } from '../action/action_user';
import { bindActionCreators } from 'redux';

class AdminUserTambah extends Component {
  componentDidMount () {
    this.cekLogin()
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
            <SideBarMenu/>
            <Col md="10">
              <FormTambahUser/>
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

export default connect(mapStateToProps, mapDispatchToProps)(AdminUserTambah);