import React, { Component } from 'react';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';

import { connect } from 'react-redux';
import { adminResetUserPasswordAction } from '../action/action_user';
import { bindActionCreators } from 'redux';

import alertify from 'alertifyjs';

class FormEditUser extends Component {
  constructor (props) {
    super (props)
    this.state = {
      isLoading: false,
      id: '',
      username: '',
      email: '',
      password: '',
      role: '',
      konfirmasi: false
    }
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.confirm = this.confirm.bind(this);
  }

  componentDidMount () {
    const { _id, username, email, role} = this.props.data
    this.setState({
      id: _id,
      username: username,
      email: email,
      role: role,
      confirm: false
    })
    this.onSubmit = this.onSubmit.bind(this);
  }
  onChange (e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  confirm (e) {
    this.setState({
      confirm: !this.state.confirm
    })
  }
  onSubmit (e) {
    e.preventDefault();
    if (this.state.confirm) {
      console.log('password', this.state.password)
      if (this.state.password === '') {
        return alertify.alert('Perhatian', 'Harap isikan password baru anda, jika ingin merubah password')
      }
      this.props.adminResetUserPasswordAction(this.state.id, this.state.password, this.state.role)
    } else {
      alertify.alert('Perhatian', 'Jika anda ingin merubah password, anda harus mencentang konfirmasi perubahan password.')
    }
  }
  componentDidUpdate () {
    console.log('nextProps => ', this.state.confirm)
  }
  render() {
    return (
      <div style={{ padding: '50px 5%' }}>
        <h1>Reset Password</h1>
        <Form onSubmit={this.onSubmit}>
          <FormGroup>
            <Label>Username</Label>
            <Input onChange={this.onChange} name="username" value={this.state.username} disabled/>
          </FormGroup>
          <FormGroup>
            <Label>Email</Label>
            <Input onChange={this.onChange} name="email" value={this.state.email} disabled/>
          </FormGroup>
          {/* <FormGroup>
            <Label for="exampleSelect">Select</Label>
            <Input onChange={this.onChange} type="select" name="role" id="exampleSelect" value={this.state.role}>
              <option value="admin" >Admin</option>
              <option value="author">Author</option>
            </Input>
          </FormGroup> */}
          <FormGroup>
            <Label>Password Baru</Label>
            <Input onChange={this.onChange} name="password" type="text"/>
            <p style={{ width: '100%', color: '#ff6b6b', lineHeight: '1.5em', fontSize: '12px' }}>
              * Hanya diisi jika anda <strong>ingin merubah password</strong>. Jika sudah mengisikan password baru, <strong>centang</strong> konfirmasi ubah password dibawah. Agar password baru segera dapat digunakan.
            </p>
          </FormGroup>
          <FormGroup check inline>
            <Label check>
              <Input type="checkbox" name="confirm" onChange={this.confirm} /> Konfirmasi ubah password
            </Label>
          </FormGroup>
          <br/><br/>
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
  adminResetUserPasswordAction
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(FormEditUser);