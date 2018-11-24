import history from '../history';
import React, { Component } from 'react';
import {
  Container,
  Row,
  Col,
  Button,
  Form, FormGroup, Label, Input
} from 'reactstrap';

import { connect } from 'react-redux';
import { loginAction } from '../action/action_user';
import { bindActionCreators } from 'redux';

class Login extends Component {
  constructor () {
    super ()
    this.state = {
      isLogin: false,
      email: '',
      password: ''
    }
    this.cekLogin = this.cekLogin.bind(this);
    this.login = this.login.bind(this);
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  onChange (e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  onSubmit (e) {
    e.preventDefault();
    this.props.loginAction(this.state.email, this.state.password)
  }
  cekLogin () {
    if (localStorage.getItem('token')) {
      history.push('/admin/dashboard')
    }
  }
  login () {
    // localStorage.setItem('token', 'hahahaha')
    history.push('/admin/dashboard')
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
              <Form onSubmit={this.onSubmit}>
                <FormGroup>
                  <Label>Email</Label>
                  <Input onChange={this.onChange} type="text" name="email" placeholder="Email"/>
                </FormGroup>
                <FormGroup>
                  <Label>Password</Label>
                  <Input onChange={this.onChange} type="text" name="password" placeholder="Password"/>
                </FormGroup>
                <Button>Masuk</Button>
              </Form>
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
  loginAction,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Login);