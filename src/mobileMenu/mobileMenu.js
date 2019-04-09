import React, { Component } from 'react';
import logo from '../logo.svg';
import './mobileMenu.css';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import Grow from '@material-ui/core/Grow';
import { Media } from 'react-breakpoints';
import Icon from '@material-ui/core/Icon';
import {
  CSSTransition,
  TransitionGroup,
  Transition
} from 'react-transition-group';
import {
  Route,
  NavLink,
  Switch
} from "react-router-dom";

class MobileMenu extends Component {

  constructor(props) {
  super(props);
  // Don't call this.setState() here!
  this.state = { navId: "navMobileInactive" };
  console.log("stateBAte",this.state)

}





  handleClick = event => {
    if (this.state.navId == "navMobileInactive") {
      this.setState({ navId: "navMobileActive" });
    } else  {
      this.setState({ navId: "navMobileInactive" });
    }

  };


  render() {

    return (

    <div id="mobileNavContain">
      <div className="button"

      onClick={this.handleClick}
      >
          <img id="hamburger" src={require('../assets/hamburgler.png')}/>
          <img className="logo" src={require('../assets/livingRoomersLogo2.png')}/>
      </div>


          <div className="navMobile" id={this.state.navId}>
              <div className='externalLinksMobile' >
                  <a target="_blank" href="https://soundcloud.com/user-634060722" >
                  <img className="iconMobile" id="soundcloudIcon" src={require('../assets/soundcloud.png')}/>
                  </a>
                  <a target="_blank" href="https://open.spotify.com/artist/2nhVuKbeuDADrh4zuSYqsf" >
                  <img className="iconMobile" src={require('../assets/spotify.png')}/>
                  </a>
                  <a target="_blank" href="https://www.instagram.com/thelivingroomers/?hl=en">
                  <img className="iconMobile" src={require('../assets/insta.png')}/>
                  </a>
                  <a target="_blank" href="https://www.facebook.com/thelivingroomersband/" >
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
              <div className="exitBox">
              </div>
          </div>



      </div>



    );
  }
}
//

export default MobileMenu;
