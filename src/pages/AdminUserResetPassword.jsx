import React, { Component } from 'react';
import history from '../history';
import { Container, Row, Col } from 'reactstrap';
import HeaderAdmin from '../components/HeaderAdmin';
import SideBarMenu from '../components/SideBarMenu';
import FormResetPassword from '../components/FormResetPassword';

import { connect } from 'react-redux';
import { adminGetOneUserAction, cekAuthAction } from '../action/action_user';
import { bindActionCreators } from 'redux';

class AdminUserEdit extends Component {
  constructor (props) {
    super (props)
    this.state = {
      isLoading: false,
      dataUserById: null
    }
  }

  componentDidMount () {
    const pecah = window.location.pathname.split('/')[4]
    let cleanId = pecah.replace(/[^a-zA-Z0-9 ]/g, "");

    this.cekLogin()

    console.log('form edit user => ', this.props)
    this.props.adminGetOneUserAction(cleanId)
  }
  componentWillReceiveProps (nextProps) {
    this.setState({
      isLoading: true,
      dataUserById: nextProps.state.reducerUser.readUser
    })
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
    if (!this.state.isLoading) {
      return (
        <div></div>
      )
    } else {
      return (
        <div>
          <Container fluid>
            <Row>
              <HeaderAdmin/>
            </Row>
            <Row>
              <SideBarMenu/>
              <Col md="10">
                <FormResetPassword data={this.state.dataUserById}/>
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
  adminGetOneUserAction,
  cekAuthAction
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(AdminUserEdit);