import React, { Component } from 'react';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';

import { connect } from 'react-redux';
import { adminCreateUserAction } from '../action/action_user';
import { bindActionCreators } from 'redux';

class FormTambahUser extends Component {
  constructor (props) {
    super (props)
    this.state = {
      isLoading: false,
      username: '',
      email: '',
      password: '',
      munculNotif: false
    }
    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
  }
  onChange (e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  onSubmit (e) {
    e.preventDefault()
    this.setState({
      munculNotif: true
    })
    if (this.state.username !== '' && this.state.email !== '' && this.state.password !== '') {
      this.props.adminCreateUserAction(this.state.username, this.state.email, this.state.password)
    }
  }

  render() {
    const notif = (string) => {
      if (this.state.munculNotif) {
        if (string === 'username' && this.state.username === '') {
          return (<p style={{ color: 'red' }}>Username wajib terisi</p>)
        }
        else if (string === 'email' && this.state.email === '') {
          return (<p style={{ color: 'red' }}>Email wajib terisi</p>)
        }
        else if (string === 'password' && this.state.password === '') {
          return (<p style={{ color: 'red' }}>Password wajib terisi</p>)
        }
      }
    }
    return (
      <div style={{ padding: '50px 5%' }}>
        <h1>Form Tambah User</h1>
        <Form onSubmit={this.onSubmit}>
          <FormGroup>
            <Label>Username</Label>
            <Input onChange={this.onChange} name="username" value={this.state.username}/>
            {notif('username')}
          </FormGroup>
          <FormGroup>
            <Label>Email</Label>
            <Input onChange={this.onChange} name="email" value={this.state.email}/>
            {notif('email')}
          </FormGroup>
          <FormGroup>
            <Label>Password</Label>
            <Input onChange={this.onChange} name="password" value={this.state.password}/>
            {notif('password')}
          </FormGroup>
          <FormGroup>
            <Button color="primary">Simpan Perubahan</Button>
          </FormGroup>
        </Form>
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
  adminCreateUserAction
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(FormTambahUser);