import history from '../history';
import axios from 'axios';
import alertify from 'alertifyjs';

export function getAllNewsAction(judul, isi) {
  return dispatch => {
    axios.get('http://35.201.1.205:3000/api/berita/read')
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
    axios.get(`http://35.201.1.205:3000/api/berita/readbyid/${id}`)
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
    axios.get(`http://35.201.1.205:3000/api/berita/addviewer/${id}`)
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
    axios.post('http://35.201.1.205:3000/api/berita/create', formData, {
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
    axios.delete(`http://35.201.1.205:3000/api/berita/deletebyid/${id}`)
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

export function adminGetDataForForm (id) {
  return dispatch => {
    axios.get(`http://35.201.1.205:3000/api/berita/readbyid/${id}`)
      .then((response) => {
        dispatch(formEdit(response.data.data))
      })
      .catch((err) => {
        console.log(err)
      })
  }
}

export function updateBeritaById (id, payload) {
  return dispatch => {
    axios.put(`http://35.201.1.205:3000/api/berita/updatebyid/${id}`, {
      judul: payload.judul,
      isi: payload.isi
    })
      .then((response) => {
        history.push('/admin/berita')
        alertify.success(`"${response.data.data.judul}" berhasil diubah`);
      })
      .catch((err) => {
        return console.log(err)
      })
  }
}

export function changeNewsImage (id, formData) {
  return dispatch => {
    axios.put(`http://35.201.1.205:3000/api/berita/ubahgambar/${id}`, formData, {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    })
      .then((response) => {
        dispatch(getAllNews(response.data.data))
        alertify.success('Gambar berhasil diubah')
      })
      .catch((err) => {
        return console.log(err)
      })
  }
}

export function getNewNews (id) {
  return dispatch => {
    axios.get(`http://35.201.1.205:3000/api/berita/beritaterbaru/${id}`)
      .then((response) => {
        dispatch(newNews(response.data.data))
      })
      .catch((err) => {
        return console.log(err)
      })
  }
}

export function newNews (payload) {
  return {
    type: 'GET_BERITA_TERBARU',
    payload: payload
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
export function formEdit (payload) {
  return {
    type: 'FORM_EDIT',
    payload: payload
  }
}