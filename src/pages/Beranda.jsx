import React, { Component } from 'react';
import Header from '../components/Header';
import Slider from '../components/Slider';
import SekilasProfile from '../components/SekilasProfile';
import KabarArdy from '../components/KabarArdy';
import VideoArdy from '../components/VideoArdy';

class HomePage extends Component {
  render() {
    return (
      <div>
        <Header/>
        <Slider/>
        <SekilasProfile/>
        <KabarArdy/>
        <VideoArdy/>
      </div>
    );
  }
}

export default HomePage;