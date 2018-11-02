import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Beranda from './pages/Beranda';
import Profil from './pages/Profil';
import Berita from './pages/Berita';
import Media from './pages/Media';

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Beranda} />
            <Route exact path="/profil" component={Profil} />
            <Route exact path="/berita" component={Berita} />
            <Route exact path="/media" component={Media} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
