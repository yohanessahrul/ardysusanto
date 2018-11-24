import history from '../history';
import React, { Component } from 'react';
import { Col } from 'reactstrap';
import { Link } from 'react-router-dom';

class SideBarMenu extends Component {
  constructor (props) {
    super (props)
    this.logOut = this.logOut.bind(this);
  }
  componentDidMount(){
    console.log(this.props)
  }
  logOut () {
    localStorage.removeItem('token');
    history.push('/login');
    console.log('Logout sukses');
  }
  render() {
    return (
        <Col md="2" style={{ width: '100%', height: '100vh', background: '#04251b' }} >
          <div style={{ width: '100%', marginTop: '30px' }}>
            <div style={{ width: '130px', height: '130px', borderRadius: '100px', background: 'yellow', display: 'table', margin: '0 auto', overflow: 'hidden' }}>
            </div>
            <h5 style={{ textAlign: 'center', marginTop: '10px', color: '#de9d1f' }}>{localStorage.getItem('username')}</h5>
            <p style={{ textAlign: 'center', fontSize: '12px', lineHeight: '0.2em', color: '#de9d1f' }}>( {localStorage.getItem('role')} )</p>
          </div>
          <ul className="sidebarMenu">
            <li><Link to="/admin/dashboard">Dashboard</Link></li>
            {
              (localStorage.getItem('role') === 'author') ? '' : <li><Link to="/admin/user">User</Link></li>
            }
            <li><Link to="/admin/berita">Berita</Link></li>
          </ul>
          
        </Col>
    );
  }
}

export default SideBarMenu;