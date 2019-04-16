import React, { Component } from 'react';
// import logo from '../logo.svg';
import './mobileMenu.css';

import {

  NavLink

} from "react-router-dom";

class MobileMenu extends Component {

  constructor(props) {
  super(props);
  // Don't call this.setState() here!
  this.state = { navId: "navMobileInactive",
                 exitBoxId: "exitBoxInactive"};
  console.log("stateBAte",this.state)

}





  handleClick = event => {
    if (this.state.navId == "navMobileInactive") {
      this.setState({ navId: "navMobileActive",
                      exitBoxId: "exitBoxActive"});
    } else  {
      this.setState({ navId: "navMobileInactive",
                      exitBoxId: "exitBoxInactive"});
    }

  };


  render() {

    return (

    <div id="mobileNavContain">
      <div className="button"

      onClick={this.handleClick}
      >
          <img id="hamburger" src={require('../assets/hamburgler.png')}/>
          <NavLink exact to="/" className="logo">
          <img className="logo" src={require('../assets/livingRoomersLogo2.png')}/>
          </NavLink>
      </div>


          <div className="navMobile" id={this.state.navId}>
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
              <div className="internalLinksMobile">
                  <div className='navImage' id="MusicBG" >
                  <NavLink onClick={this.handleClick} exact to="/music"  className="mobileLink">Music</NavLink>
                  </div>
                  <div className='navImage' id="merchBG" >
                  <NavLink onClick={this.handleClick} exact to="/merch"  className="mobileLink">Merch</NavLink>
                  </div>
                  <div className='navImage' id="liveBG">
                  <NavLink onClick={this.handleClick} exact to="/shows"   className="mobileLink">Live</NavLink>
                  </div>
                  <div className='navImage' id="bookBG">
                  <NavLink onClick={this.handleClick} exact to="/contact"   className="mobileLink">Book</NavLink>
                  </div>
              </div>
              <div className="exitBox" onClick={this.handleClick}>
              </div>
          </div>



      </div>



    );
  }
}
//

export default MobileMenu;
