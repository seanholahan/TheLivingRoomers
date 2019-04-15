import React, { Component } from 'react';
import SpotifyPlayer from 'react-spotify-player';
import './home.css';
class Home extends Component {
  render() {
    const size = {
  width: '100%',
  height: 80,
};
    return (

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
    );
  }
}

export default Home;
//////<img className="backgroundImage" src={require('../assets/cover.jpg')}/>
