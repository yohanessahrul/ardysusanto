import React, { Component } from 'react';
import history from '../history';
import { Container, Row, Col } from 'reactstrap';
import HeaderAdmin from '../components/HeaderAdmin';
import SideBarMenu from '../components/SideBarMenu';
import ContentAdminUser from '../components/ContentAdminUser';

import { connect } from 'react-redux';
import { cekAuthAction } from '../action/action_user';
import { bindActionCreators } from 'redux';

class AdminUser extends Component {
  constructor (props) {
    super (props)
    this.logOut = this.logOut.bind(this);
  }
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
  logOut () {
    localStorage.removeItem('token');
    history.push('/login');
    console.log('Logout sukses');
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
              <ContentAdminUser/>
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

export default connect(mapStateToProps, mapDispatchToProps)(AdminUser);