import history from '../history';
import axios from 'axios';
import alertify from 'alertifyjs';

export function loginAction(email, password) {
  return dispatch => {
    axios.post('http://35.201.1.205:3000/api/user/login', {
      email: email,
      password: password
    })
      .then((response) => {
        if (response.data.data == null) {
          if (response.data.message === 'Password salah') {
            alertify.alert('Password Salah', 'Harap isi password dengan benar')
            return console.log('Password Salah')
          }
          alertify.alert('Perhatian', 'Maaf, Kami tidak mengenali anda.')
        } else {

          const { token, username, role} = response.data.data
          localStorage.setItem('token', token)
          localStorage.setItem('username', username)
          localStorage.setItem('role', role)

          dispatch(adminUserLogin(response.data.data))

          history.push('/admin')
          alertify.success(`Selamat datang di halaman administrator kembali Mr. ${response.data.data.username}`)
        }

      })
      .catch((err) => {
        console.log(err)
      })
  }
}

export function admingetAllUserAction() {
  return dispatch => {
    axios.get('http://35.201.1.205:3000/api/user/read')
      .then((response) => {
        dispatch(adminGetAllUser(response.data.data))
      })
      .catch((err) => {
        return console.log(err)
      })
  }
}

export function adminGetOneUserAction (id) {
  return dispatch => {
    axios.get(`http://35.201.1.205:3000/api/user/readbyid/${id}`)
      .then((response) => {
        dispatch(adminGetOneUser(response.data.data))
      })
      .catch((err) => {
        return console.log(err)
      })
  }
}

export function adminResetUserPasswordAction (id, password, role) {
console.log('proses id', id)
  return dispatch => {
    axios.post(`http://35.201.1.205:3000/api/user/resetpassword/${id}`, { password: password, role: role })
      .then((response) => {
        history.push('/admin/user')
        alertify.success(`Password user ${response.data.data.username} berhasil diubah`)
        console.log('Password berhasil di reset', response)
      })
      .catch((err) => {
        return console.log(err)
      })
  }
}

export function adminDeleteUserAction (id) {
  console.log('Hapus user action id => ', id)
  return dispatch => {
    axios.delete(`http://35.201.1.205:3000/api/user/delete/${id}`)
      .then((response) => {
        console.log(response.data.data)
        dispatch(adminGetAllUser(response.data.data))
      })
      .catch((err) => {
        return console.log(err)
      })
  }
}

export function adminEditRoleAction (id, newRole) {
  console.log('Admin edit role action =>', id, newRole)
  return dispatch => {
    axios.post(`http://35.201.1.205:3000/api/user/editrole/${id}`, { role: newRole })
      .then((response) => {
        if (response) {
          // console.log('----------------> ', response.data.data)
          const { username } = response.data.data
          alertify.success(`User ${username} sekarang sudah menjadi ${newRole}`)
          history.push('/admin/user')
        }
        console.log(response)
      })
      .catch((err) => {
        return console.log(err)
      })
  }
}

export function adminCreateUserAction (username, email, password) {
  console.log('action ==>', username, email, password)
  return dispatch => {
    axios.post('http://35.201.1.205:3000/api/user/register', { username, email, password })
      .then((response) => {
        dispatch(adminGetAllUser(response.data.data))
        history.push('/admin/user')
        alertify.success(`Anda baru saja menambahkan user ${username}`)
      })
      .catch((err) => {
        return console.log(err)
      })
  }
}

export function cekAuthAction (token) {
  return dispatch => {
    axios.get(`http://35.201.1.205:3000/api/user/cekauth/${token}`)
      .then((response) => {
        if (response.data.message === 'no') {
          localStorage.removeItem('token')
          history.push('/login')
        }
      })
      .catch((err) => {
        return console.log(err)
      })
  }
}

export function adminUserLogin (payload) {
  return {
    type: 'USER_LOGIN',
    payload: payload
  }
}

export function adminGetAllUser (payload) {
  return {
    type: 'ADMIN_GET_ALL_USER',
    payload: payload
  }
}

export function adminGetOneUser (payload) {
  return {
    type: 'READ_USER_BY_ID',
    payload: payload
  }
}
