import history from './history';
import React, { Component } from 'react';
import './App.css';
import { Router, Switch, Route } from 'react-router-dom';

import Beranda from './pages/Beranda';
import Profil from './pages/Profil';
import Berita from './pages/Berita';
import Media from './pages/Media';
import DetailBerita from './pages/DetailBerita';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import NotFound from './pages/NotFound';
import Admin from './pages/Admin';
import AdminUser from './pages/AdminUser';
import AdminUserTambah from './pages/AdminUserTambah';
import AdminUserResetPassword from './pages/AdminUserResetPassword';
import AdminUserEdit from './pages/AdminUserEdit';
import AdminBerita from './pages/AdminBerita';
import AdminBeritaTambah from './pages/AdminBeritaTambah';
import AdminBeritaEdit from './pages/AdminBeritaEdit';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router history={history}>
          <Switch>
            <Route exact path="/" component={Beranda} />
            <Route path="/profil" component={Profil} />
            <Route path="/media" component={Media} />
            <Route exact path="/berita" component={Berita} />
            <Route exact path="/berita/:id/:judul" component={DetailBerita} />
            <Route path="/login" component={Login}/>
            <Route exact path="/admin" component={Admin}/>
            <Route path="/admin/dashboard" component={Dashboard}/>
            <Route exact path="/admin/user" component={AdminUser}/>
            <Route path="/admin/user/tambah" component={AdminUserTambah}/>
            <Route path="/admin/user/reset/:id" component={AdminUserResetPassword}/>
            <Route path="/admin/user/edit/:id" component={AdminUserEdit}/>
            <Route exact path="/admin/berita" component={AdminBerita}/>
            <Route path="/admin/berita/tambah" component={AdminBeritaTambah}/>
            <Route path="/admin/berita/edit/:id" component={AdminBeritaEdit}/>
            <Route path="/*" component={NotFound}/>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
