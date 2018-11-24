import React, { Component } from 'react';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';

import { connect } from 'react-redux';
import { adminEditRoleAction } from '../action/action_user';
import { bindActionCreators } from 'redux';

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
    }
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.confirm = this.confirm.bind(this);
  }
  onChange (e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  onSubmit (e) {
    e.preventDefault();
    this.props.adminEditRoleAction(this.props.data._id, this.state.role)
  }
  confirm () {

  }
  componentDidMount () {
    const { _id, username, email, role} = this.props.data
    this.setState({
      isLoading: true,
      id: _id,
      username: username,
      email: email,
      role: role,
      confirm: false
    })
    this.onSubmit = this.onSubmit.bind(this);
  }
  render() {
    return (
      <div style={{ padding: '50px 5%' }}>
        <h1>Form edit user</h1>
        <Form onSubmit={this.onSubmit}>
          <FormGroup>
            <Label>Username</Label>
            <Input onChange={this.onChange} name="username" value={this.state.username} disabled/>
          </FormGroup>
          <FormGroup>
            <Label>Email</Label>
            <Input onChange={this.onChange} name="email" value={this.state.email} disabled/>
          </FormGroup>
          <FormGroup>
            <Label for="exampleSelect">Select</Label>
            <Input onChange={this.onChange} type="select" name="role" id="exampleSelect" value={this.state.role}>
              <option value="admin" >Admin</option>
              <option value="author">Author</option>
            </Input>
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
  adminEditRoleAction
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(FormEditUser);