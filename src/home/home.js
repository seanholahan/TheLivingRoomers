import React, { Component } from 'react';
import SpotifyPlayer from 'react-spotify-player';
import './home.css';
import Div100vh from 'react-div-100vh';

class Home extends Component {
  render() {
    const size = {
  width: '100%',
  height: 80,
};
    return (
      <Div100vh>
      <div className="home">
      <div className="bgContainer">
      <h2>NEW ALBUM OUT NOW!</h2>


      </div>
      <SpotifyPlayer
      className="spotifyPlayer"
  uri="spotify:album:6du2BWlnrKv7eDy71AbBSL"
  size={size}
  view="list"
  theme="black"
/>
</div>
</Div100vh>
    );
  }
}

export default Home;
//////<img className="backgroundImage" src={require('../assets/cover.jpg')}/>
