import history from '../history';
import axios from 'axios';
import alertify from 'alertifyjs';

export function getAllNewsAction(judul, isi) {
  return dispatch => {
    axios.get('http://35.201.1.205:3001/api/berita/read')
      .then((response) => {
        dispatch(getAllNews(response.data.data))
      })
      .catch((err) => {
        console.log(err)
      })
  }
}
export function readNewsByIdAction(id) {
  return dispatch => {
    axios.get(`http://35.201.1.205:3001/api/berita/readbyid/${id}`)
      .then((response) => {
        dispatch(readNewsById(response.data.data))
      })
      .catch((err) => {
        console.log(err)
      })
  }
}

export function addViewerAction(id) {
  return dispatch => {
    axios.get(`http://35.201.1.205:3001/api/berita/addviewer/${id}`)
      .then((response) => {
        // console.log('Viewer bertambah ', response.data.data)
      })
      .catch((err)=> {
        console.log(err)
      })
  }
}

export function adminCreateBeritaAction(formData, ) {
  return dispatch => {
    axios.post('http://35.201.1.205:3001/api/berita/create', formData, {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    } )
      .then((response) => {
        if (response) {
          history.push('/admin/berita');
          alertify.success('Berita berhasil ditambahkan');
          console.log('action create berita => ', response.data.data)
        }
      })
      .catch((err) => {
        return console.log(err)
      })
  }
}

export function adminDeleteBeritaAction (id) {
  return dispatch => {
    axios.delete(`http://35.201.1.205:3001/api/berita/deletebyid/${id}`)
      .then((response) => {
        console.log('Value setelah hapus', response.data.data)
        dispatch(getAllNews(response.data.data))
        history.push('/admin/berita')
      })
      .catch((err) => {
        return console.log(err)
      })
  }
}

export function getAllNews (payload) {
  return {
    type: 'GET_ALL_NEWS',
    payload: payload
  }
}
export function readNewsById (payload) {
  return {
    type: 'READ_NEWS_BY_ID',
    payload: payload
  }
}