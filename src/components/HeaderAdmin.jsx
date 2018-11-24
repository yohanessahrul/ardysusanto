import React, { Component } from 'react';
import history from '../history';
import { Col, Button } from 'reactstrap';

class HeaderAdmin extends Component {
  constructor (props) {
    super (props)
    this.logOut = this.logOut.bind(this);
  }
  logOut () {
    localStorage.removeItem('token');
    history.push('/login');
    console.log('Logout sukses');
  }
  render() {
    return (
      <Col md="12" style={{ background: '#1d7d58', display: 'table' }}>
        <h5 style={{ padding: '5px', marginBottom: '0px' }}>
          Admin Panel
        </h5>
        <Button style={{ float: 'right' }} onClick={this.logOut} color="danger">Logout</Button>
      </Col>
    );
  }
}

export default HeaderAdmin;