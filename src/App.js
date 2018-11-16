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
import AdminPage from './pages/AdminPage';
import NotFound from './pages/NotFound';

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
            <Route path="/admin" component={AdminPage}/>
            <Route path="/*" component={NotFound}/>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
