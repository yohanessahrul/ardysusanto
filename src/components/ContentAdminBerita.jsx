import React, { Component } from 'react';
// import history from '../history';
import { Link } from 'react-router-dom';
import { Table, Button } from 'reactstrap';
// import axios from 'axios';
import alertify from 'alertifyjs';

import { connect } from 'react-redux';
import { adminDeleteBeritaAction, getAllNewsAction } from '../action/action_berita';
import { bindActionCreators } from 'redux';

class ContentAdminBerita extends Component {
  constructor (props) {
    super (props)
    this.state = {
      dataBerita: null,
      isLoading: false
    }
    this.addToState = this.addToState.bind(this);
    this.deleteBerita = this.deleteBerita.bind(this);
  }
  addToState (data) {
    this.setState({
      dataBerita: data
    })
  }
  deleteBerita (id) {
    let currentComponent = this;
    alertify.confirm('Warning', 'Jika anda menghapus berita ini, anda tidak akan bisa mengembalikannya lagi.', function () {
      currentComponent.props.adminDeleteBeritaAction(id)
    }, function () {
      alertify.error('Hapus data dibatalkan')
    })
  }
  componentDidMount () {
    let currentComponent = this;
    currentComponent.props.getAllNewsAction()
  }
  componentWillReceiveProps (nextProps) {
    const data = nextProps.state.reducerBerita.data
    this.setState({
      isLoading: true,
      dataBerita: data
    })
  }
  render() {
      if (this.state.isLoading === false) {
        return (
          <div style={{ width: '100%', height: '100vh', display: 'table' }}>
            <div style={{ width: '200px', height: '100px', display: 'table', margin: '25% auto' }}>
              <h2 style={{ textAlign: 'center' }}>Loading...</h2>
            </div>
          </div>
        );
      } else {
        const loopBerita = () => {
          const loop = this.state.dataBerita.map((berita, i) => {
            return (
              <tr key={berita._id}>
                <td>{i+1}</td>
                <td><img style={{ width: '100px', border: 'thin solid #ededed', padding: '5px' }} src={berita.img} alt={berita.judul}/></td>
                <td>{berita.judul}</td>
                <td>{berita.isi.replace(/(<([^>]+)>)/ig,"").substring(18,200) + '..'}</td>
                <td>{berita.createdAt}</td>
                <td>{berita.view}</td>
                <td>
                  <Link style={{ display: 'table', marginBottom: '10px' }} to={`/admin/berita/edit/${berita._id}`}>
                    <Button size="sm" color="warning">
                      Edit
                    </Button>
                  </Link>
                  <Button onClick={() => this.deleteBerita(berita._id)} size="sm" color="danger">
                    Delete
                  </Button>
                </td>
              </tr>
            )
          })
          return loop;
        }
      return (
        <div style={{ padding: '50px 5%' }}>
          <h1>Content Admin Berita</h1>
          <div style={{ display: 'table', width: '100%', height: '30px',  margin: '50px!important', marginBottom: '20px' }} >
            <Link to="/admin/berita/tambah">
              <Button color="primary">Tambah</Button>
            </Link>
          </div>
          {/* <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat quibusdam earum similique illo enim ad minus numquam id culpa explicabo at sit necessitatibus placeat, dolor commodi assumenda quae mollitia libero!</p> */}
          <Table striped size="sm" hover>
            <thead>
            <tr>
              <th>#</th>
              <th>Gambar</th>
              <th>Judul</th>
              <th>Isi</th>
              <th>Tanggal</th>
              <th>View</th>
              <th>Action</th>
            </tr>
            </thead>
            <tbody>
              {loopBerita()}
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
  adminDeleteBeritaAction,
  getAllNewsAction
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(ContentAdminBerita);