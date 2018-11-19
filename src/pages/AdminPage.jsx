import React, { Component } from 'react';
import history from '../history';
import { Container, Row, Col, Button } from 'reactstrap';

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
    // cek login api dgn reedux, jika dapat
    // response token yang benar dapat masuk ke
    // administrator page
    if (localStorage.getItem('token')) {
        history.push('/admin')
        console.log('Token ada, anda berhasil masuk')
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
    history.push('/login')
    console.log('Logout sukses')
  }
  render() {
    return (
      <div>
        <Container fluid>
          <Row>
            <Col md="2" style={{ width: '100%', height: '100vh', background: 'red' }}>
              <h5>AdminLTE</h5>
            </Col>
            <Col md="10">
              <h1>Halaman Admin</h1>
              <Button onClick={this.logOut} color="danger">Logout</Button>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default AdminPage;