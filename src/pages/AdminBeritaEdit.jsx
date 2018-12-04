import React, { Component } from 'react';
import history from '../history';
import { Container, Row, Col } from 'reactstrap';
import SideBarMenu from '../components/SideBarMenu';
import FormEditBerita from '../components/FormEditBerita';

import { connect } from 'react-redux';
import { cekAuthAction } from '../action/action_user';
import { bindActionCreators } from 'redux';

class AdminBeritaEdit extends Component {
  constructor (props) {
    super (props)
    this.state = {
      isLoading: false,
      userTerpilih: null,
      dataEdit: null
    }
  }
  componentDidMount () {
    this.cekLogin();
  }
  
  cekLogin () {
    if (localStorage.getItem('token')) {
      let token = localStorage.getItem('token');
      this.props.cekAuthAction(token)
    } else {
      history.push('/login')
      console.log('Anda bukan admin, redirect ke login')
    }
  }

  componentWillReceiveProps (nextProps) {
    this.setState({
      isLoading: true,
      dataEdit: nextProps.state.reducerBerita.formEdit
    })
  }

  render() {
    return (
      <div>
        <Container fluid>
          <Row>
            <SideBarMenu/>
            <Col md="10">
              <FormEditBerita id={this.props.match.params.id} data={this.state.dataEdit}/>
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
  cekAuthAction
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(AdminBeritaEdit);