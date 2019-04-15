import React, { Component } from 'react';
import ReactPlayer from 'react-player';
import './music.css';
class Music extends Component {


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
                 width = "100vw"
                 visual='true'
                  />
                 )




    return (

    <div className="musicContainer content">
    <h1 id="musicHeader">MUSIC</h1>
      <div className ="soundcloudWrapper content--inner">
      {soundcloudBoxes}

      </div>
    </div>



    );
  }
}
export default Music;
