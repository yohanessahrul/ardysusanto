import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Table, Button } from 'reactstrap';
import axios from 'axios';

class ContentAdminBerita extends Component {
  constructor (props) {
    super (props)
    this.state = {
      dataBerita: null,
      isLoading: false
    }
    this.addToState = this.addToState.bind(this);
  }
  addToState (data) {
    this.setState({
      dataBerita: data
    })
  }
  componentDidMount () {
    let currentComponent = this;
    axios.get('http://localhost:3001/api/berita/read')
      .then(function (response) {
        console.log('Dapet data ==>', response.data.data)
          currentComponent.setState({
            dataBerita: response.data.data,
            isLoading: true,
          })
      })
      .catch(function (error) {
        console.log(error)
      })
  }
  render() {
      if (this.state.isLoading === false) {
          return (
              <div style={{ width: '100%', height: '300px', background: 'green' }}>
                <div>Loading...</div>
              </div>
              );
      } else {
        const loopBerita = () => {
          const loop = this.state.dataBerita.map((berita, i) => {
            return (
              <tr key={berita._id}>
                <td>{i+1}</td>
                <td>{berita.img}</td>
                <td>{berita.judul}</td>
                <td>{berita.isi}</td>
                <td>{berita.createdAt}</td>
                <td>{berita.view}</td>
                <td>
                  <Link to={`/admin/berita/edit/${berita._id}`}>
                    <Button size="sm" color="warning">
                      Edit
                    </Button>
                  </Link>
                  <Link to={`/admin/berita/edit/${berita._id}`}>
                    <Button size="sm" color="danger">
                      Delete
                    </Button>
                  </Link>
                </td>
              </tr>
            )
          })
          return loop;
        }
      return (
        <div>
          <h1>Content Admin Berita</h1>
          <Link to="/admin/berita/tambah">
            <Button color="primary">Tambah</Button>
          </Link>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat quibusdam earum similique illo enim ad minus numquam id culpa explicabo at sit necessitatibus placeat, dolor commodi assumenda quae mollitia libero!</p>
          <Table striped size="sm">
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

export default ContentAdminBerita;