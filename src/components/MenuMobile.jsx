import React, { Component } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
} from 'reactstrap';
import { Link } from 'react-router-dom';

class MenuMobile extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">ardysusanto</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <Link to="/">
                  Beranda
                </Link>
              </NavItem>
              <NavItem>
                <Link to="/profil">
                  Profil
                </Link>
              </NavItem>
              <NavItem>
                <Link to="/berita">
                  Berita
                </Link>
              </NavItem>
              {/* <NavItem>
                <Link to="/media">
                  Media
                </Link>
              </NavItem> */}
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

export default MenuMobile;