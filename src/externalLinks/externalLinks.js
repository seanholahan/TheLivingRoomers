import React, { Component } from 'react';

import './externalLinks.css';

import {

  NavLink

} from "react-router-dom";

class ExternalLinks extends Component {

  constructor(props) {
  super(props);
  // Don't call this.setState() here!
  this.state = { navId: "navMobileInactive",
                 exitBoxId: "exitBoxInactive"};
  console.log("stateBAte",this.state)

}




  render() {

    return (
              <div className='externalLinksMobile' >
                  <a target="_blank" rel="noopener noreferrer" href="https://soundcloud.com/user-634060722" >
                  <img className="iconMobile" id="soundcloudIcon" src={require('../assets/soundcloud.png')}/>
                  </a>
                  <a target="_blank" rel="noopener noreferrer" href="https://open.spotify.com/artist/2nhVuKbeuDADrh4zuSYqsf" >
                  <img className="iconMobile" src={require('../assets/spotify.png')}/>
                  </a>
                  <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/thelivingroomers/?hl=en">
                  <img className="iconMobile" src={require('../assets/insta.png')}/>
                  </a>
                  <a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/thelivingroomersband/" >
                  <img className="iconMobile" src={require('../assets/facebook.png')}/>
                  </a>
              </div>

    );
  }
}
export default ExternalLinks;
