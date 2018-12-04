import React, { Component } from 'react';
// import history from '../history';
import { Link } from 'react-router-dom';
import {
  Table,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  Input,
  // ModalFooter,
  // FormGroup,
  // Label,
} from 'reactstrap';
import alertify from 'alertifyjs';

import { Icon } from 'react-icons-kit';
import {photo} from 'react-icons-kit/fa';

import { connect } from 'react-redux';
import { adminDeleteBeritaAction, getAllNewsAction, changeNewsImage } from '../action/action_berita';
import { bindActionCreators } from 'redux';

class ContentAdminBerita extends Component {
  constructor (props) {
    super (props)
    this.state = {
      dataBerita: null,
      isLoading: false,
      modal: false,
      currentImage: null,
      idImage: null,
      newImage: null
    }
    this.addToState = this.addToState.bind(this);
    this.deleteBerita = this.deleteBerita.bind(this);
    this.toggle = this.toggle.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.getId = this.getId.bind(this);
    this.onChangeImage = this.onChangeImage.bind(this);
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
  toggle (id, payloadImage) {
    console.log('ID ---- ', id)
    this.setState({
      idImage: id,
      modal: !this.state.modal,
      currentImage: payloadImage
    })
  }
  getId (id) {
    console.log('ID===========>', id)
  }
  onChangeImage (e) {
    this.setState({
      newImage: e.target.files[0]
    })
  }
  onSubmit (e) {
    e.preventDefault();

    var formData = new FormData();
    var imageFile = this.state.newImage;
    formData.append('img', imageFile);

    if (this.state.idImage !== null && this.state.newImage !== null) {
      this.props.changeNewsImage(this.state.idImage, formData)
      this.setState({
        modal: !this.state.modal,
      })
    }

  }
  render() {
      if (this.state.isLoading === false) {
        return (
          <div style={{ width: '100%', height: '100vh', display: 'table' }}>
            <div style={{ width: '200px', height: '100px', display: 'table', margin: '25% auto' }}>
              <h2 style={{ textAlign: 'center' }}>Loading...</h2>
            </div>
          </div>
        )
      } else {
        const loopBerita = () => {
          const loop = this.state.dataBerita.map((berita, i) => {
            return (
              <tr key={berita._id}>
                <td>{i+1}</td>
                <td>
                  <img style={{ width: '100px', border: 'thin solid #ededed', padding: '5px' }} src={berita.img} alt={berita.judul}/>
                  <Button style={{ display: 'table', margin: '10px auto', color: 'white' }} size="sm" color="info" onClick={() => this.toggle(berita._id, berita.img)}>
                    <Icon style={{ color: 'white' }} icon={photo}/> Ubah
                  </Button>
                  <Modal isOpen={this.state.modal} toggle={this.toggle}>
                    <ModalHeader toggle={this.toggle}>
                      Ubah gambar
                    </ModalHeader>
                    <ModalBody>
                      <img style={{ display: 'table', width: '300px', margin: '0 auto' }} src={this.state.currentImage} alt="test"/><br/>
                      <Form encType="application/x-www-form-urlencoded">
                        <Input type="file" name="img" onChange={this.onChangeImage} multiple/>
                        <Button onClick={this.onSubmit}>Ubah</Button>
                      </Form>
                    </ModalBody>
                  </Modal>
                </td>
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
  getAllNewsAction,
  changeNewsImage
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(ContentAdminBerita);