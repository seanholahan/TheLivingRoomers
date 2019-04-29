import React, { Component } from 'react';
import SpotifyPlayer from 'react-spotify-player';
import './home.css';
import ReactAudioPlayer from 'react-audio-player';
import song from '../assets/audio/Seaweed.ogg';
import ReactPlayer from 'react-player';
import AudioPlayer from "react-h5-audio-player";
import audioFile from '../assets/audio/Seaweed.ogg';
import bunny from '../assets/audio/bunny.ogg';
class Home extends Component {
  render() {
    const size = {
  width: '100%',
  height: '100%',

};

// const audioPlayerStyle = {
//
//   border: '5px solid pink',
// };
    return (



      <div className="home">
      <div id="preLoad">
      <img src={require('../assets/blue.jpg')} alt="imgError" />
      <img src={require('../assets/bg.png')} alt="imgError" />
      <img src={require('../assets/cover.jpg')} alt="imgError"/>
      <img src={require('../assets/merch.png')} alt="imgError"/>
      <img src={require('../assets/live.png')} alt="imgError"/>
      <img src={require('../assets/Book.JPG')} alt="imgError"/>
      </div>
      <h2 id="newAlbum">NEW ALBUM OUT NOW!</h2>





  <ReactAudioPlayer
  src= {[audioFile]}
  type= 'video/ogg'
  id="musicPlayer"
  controls


  />

</div>
    );
  }
}

export default Home;
//////<img className="backgroundImage" src={require('../assets/cover.jpg')}/>


// <ReactPlayer id="player2"
// width="100%"
// height="50px"
//  url={[
//     {src:  audioFile, type: 'audio/ogg'},
//     {src: bunny, type: 'audio/ogg'}
//   ]}/>

//<div id ='spotifyContainer'>
//       <SpotifyPlayer
//       className="spotifyPlayer"
//   uri="spotify:album:6du2BWlnrKv7eDy71AbBSL"
//   size={size}
//   view="list"
//   theme="black"
// />
// </div>
