import React, { Component } from 'react';
import { Container, Row, Col, Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import ContentAdminBerita from '../components/ContentAdminBerita';

class AdminBerita extends Component {
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
              <ContentAdminBerita/>
              <Button onClick={this.logOut} color="danger">Logout</Button>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default AdminBerita;