import React, { Component } from 'react';
//import SoundCloud from 'react-soundcloud-widget';
import Player from 'react-soundcloud-widget-player';
import ReactSoundcloud from 'react-soundcloud-embed';
import ReactPlayer from 'react-player';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import './music.css';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

class Music extends Component {

  constructor(props) {
    super(props)
}

  render() {

    const soundCloudLinks = ['https://soundcloud.com/user-634060722/screw-you',
                             'https://soundcloud.com/user-634060722/luh-luh-bye',
                          'https://soundcloud.com/user-634060722/dirty-rumor',
                          'https://soundcloud.com/user-634060722/iphoney',
                        'https://soundcloud.com/user-634060722/i-want-it',
                        'https://soundcloud.com/user-634060722/the-living-roomers-screw-you'];

    const soundcloudBoxes = soundCloudLinks.map((link) =>
                 <ReactPlayer
                 className = "song"
                key = {link}
                 url= {link}
                 height = '180px'
                 width= '98vw'
                 visual='true'
                  />
                 )




    return (

    <div className="musicContainer content">
    <h2 id="musicHeader">MUSIC</h2>
      <div className ="soundcloudWrapper content--inner">
      {soundcloudBoxes}

      </div>
    </div>



    );
  }
}
export default Music;
//<Player
  //   title='EASYFUN - Be Your USA feat. Iiris'
  //   audioUrl="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/449016357"
  // />
