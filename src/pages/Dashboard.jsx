import React, { Component } from 'react';
import history from '../history';
import { Container, Row, Col, Button } from 'reactstrap';
import { Link } from 'react-router-dom';

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
        history.push('/admin/dashboard')
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
    history.push('/login');
    console.log('Logout sukses');
  }
  render() {
    return (
      <div>
        <Container fluid>
          <Row>
            <Col md="12" style={{ background: 'yellow' }}>
              <h5 style={{ padding: '5px', marginBottom: '0px' }}>AdminLTE</h5>
            </Col>
          </Row>
          <Row>
            <Col md="2" style={{ width: '100%', height: '100vh', background: 'red' }}>
              <ul>
                <li>
                  <Link to="/admin/dashboard">Dashboard</Link>
                </li>
                <li>
                  <Link to="/admin/user">User</Link>
                </li>
                <li>
                  <Link to="/admin/berita">Berita</Link>
                </li>
              </ul>
            </Col>
            <Col md="10">
              <h1>Dashboard</h1>
              <Button onClick={this.logOut} color="danger">Logout</Button>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default AdminPage;