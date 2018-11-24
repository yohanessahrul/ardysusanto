// import history from '../history';
import React, { Component } from 'react';
import { Table, Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import alertify from 'alertifyjs';

import { connect } from 'react-redux';
import { admingetAllUserAction, adminDeleteUserAction } from '../action/action_user';
import { bindActionCreators } from 'redux';

class ContentAdminUser extends Component {
  constructor (props) {
    super (props)
    this.state = {
      isLoading: false,
      dataUser: null
    }
  }
  componentDidMount () {
    this.props.admingetAllUserAction()
  }
  componentWillReceiveProps(nextProps) {
    this.setState({
      isLoading: true,
      dataUser: nextProps.state.reducerUser.data
    })
  }
  render() {
    if (!this.state.isLoading) {
      return (
        <div style={{ width: '100%', height: '100vh', display: 'table' }}>
          <div style={{ width: '200px', height: '100px', display: 'table', margin: '25% auto' }}>
            <h2 style={{ textAlign: 'center' }}>Loading...</h2>
          </div>
        </div>
      )
    } else {
      const hapusId = (id, propx) => {
        console.log('Hapus id => ', id)
        console.log('=================>', this.props)
        alertify.confirm(
          'Perhatian', 
          'Apakah anda yakin ingin menghapus user ini?', 
          () => {
            this.props.adminDeleteUserAction(id)
            alertify.success('User berhasil dihapus')
          },
          function () {
            return console.log('Cancel delete user')
          }
        )
      }
      const listUser = () => {
        const dataUser = this.state.dataUser
        const loopList = dataUser.map(function(data, i) {
          const button = (string, roleLooping, usernameLooping) => {
            if (roleLooping === localStorage.getItem('role') && usernameLooping === localStorage.getItem('username') || roleLooping !== 'admin') {
              if (string === 'resetpassword') {
                return (
                  <Link to={`/admin/user/reset/${data._id}`}>
                    <Button color="primary">Reset Password</Button>
                  </Link>
                )
              } else if (string === 'edit') {
                return (
                  <Link to={`/admin/user/edit/${data._id}`}>
                    <Button color="warning">Edit</Button>
                  </Link>
                )
              } else if (string === 'delete') {
                return (
                  <Button color="danger" onClick={() => hapusId(data._id)}>Delete</Button>
                )
              }
            } else {
              if (string === 'resetpassword') {
                return (
                  <Link to="#">
                    <Button color="link" disabled>Reset Password</Button>
                  </Link>
                )
              } else if (string === 'edit'){
                return (
                  <Link to="#">
                    <Button color="link" disabled>Edit</Button>
                  </Link>
                )
              } else if (string === 'delete') {
                return (
                  <Button color="link" disabled>Delete</Button>
                )
              }
            }
          }
          return (
            <tr key={data.email}>
              <td>{i+1}</td>
              <td>{data.username}</td>
              <td>{data.email}</td>
              {
                (data.role === 'admin') ?
                <td>
                  <p style={{ background: '#bba802', fontWeight: 'bold', display: 'inline-block', padding: '2px 5px', borderRadius: '3px', color: 'white' }}>
                    {data.role}
                  </p>
                </td>
                : <td>{data.role}</td>
              }
              <td>{data.password.replace(data.password, '**************')}</td>
              <td>
                {/* {button('resetpassword', data.role, data.username)}&nbsp;&nbsp; */}
                {button('edit', data.role, data.username)}&nbsp;
                {button('delete', data.role, data.username)}&nbsp;
                {/* <Button color="danger" onClick={() => hapusId(data._id)}>Delete</Button> */}
              </td>
            </tr>
          )
        })
        return loopList;
      }
      return (
        <div style={{ padding: '50px 5%' }}>
          <h1>Content Admin User</h1>
          <div style={{ display: 'table', width: '100%', height: '30px',  margin: '50px!important', marginBottom: '20px' }} >
            <Link to="/admin/user/tambah">
              <Button color="primary">Tambah</Button>
            </Link>
          </div>
          <Table striped size="sm" hover>
            <thead>
              <tr>
                <th>~</th>
                <th>Username</th>
                <th>Email</th>
                <th>Role</th>
                <th>Password</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {listUser()}
            </tbody>
          </Table>
        </div>
      );
    }
  }
}

const mapStateToProps = (state) => {
  return {
    state: state
  } 
}
const mapDispatchToProps = (dispatch) => bindActionCreators({
  admingetAllUserAction,
  adminDeleteUserAction
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(ContentAdminUser);