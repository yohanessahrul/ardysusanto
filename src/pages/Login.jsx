import history from '../history';
import React, { Component } from 'react';
import { Container, Row, Col, Button } from 'reactstrap';

class Login extends Component {
  constructor () {
    super ()
    this.state = {
      isLogin: false
    }
    this.cekLogin = this.cekLogin.bind(this);
    this.login = this.login.bind(this);
  }
  cekLogin () {
    if (localStorage.getItem('token')) {
      history.push('/admin')
    }
  }
  login () {
    localStorage.setItem('token', 'hahahaha')
    history.push('/admin')
  }
  componentDidMount () {
    this.cekLogin()
  }
  render() {
    return (
      <div>
        <Container>
          <Row>
            <Col>
              <br/>
              <h1>Halaman Login</h1>
              <Button onClick={this.login}>Login</Button>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Login;