import history from '../history';
import React, { Component } from 'react';

class Admin extends Component {
  componentDidMount () {
    if (localStorage.getItem('token')) {
      history.push('/admin/dashboard')
    } else {
      history.push('/login')
      console.log('Anda bukan admin, redirect ke login')
    }
  }
  render() {
    return (
      <div>
        <h1>admin page</h1>
      </div>
    );
  }
}

export default Admin;