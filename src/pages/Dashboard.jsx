import React, { Component } from 'react';
import history from '../history';
import { Container, Row, Col } from 'reactstrap';
import SideBarMenu from '../components/SideBarMenu';

// import { cekAutorisasi } from '../auth';
import { connect } from 'react-redux';
import { cekAuthAction } from '../action/action_user';
import { bindActionCreators } from 'redux';

class AdminPage extends Component {
  constructor (props) {
    super (props)
    this.state = {
      isLogin: false
    }
    this.cekLogin = this.cekLogin.bind(this);
    this.logOut = this.logOut.bind(this);
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
  componentDidMount () {
    this.cekLogin()
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
          <Row style={{ background: '#04251b' }}>
            <SideBarMenu/>
            <Col md="10" style={{ background: 'white' }}>
              <div style={{ padding: '50px 5%' }}>
                <h1>Dashboard</h1>
              </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(AdminPage);