import React, { Component } from 'react';
import './navigation.css';
import { Media } from 'react-breakpoints';
import MobileMenu from '../mobileMenu/mobileMenu.js';
import {NavLink} from "react-router-dom";

class Navigation extends Component {


  state = {
    anchorEl: null
  };

  handleClick = event => {
    console.log("location",this.location);

  };


  render() {

    return (


      <Media>
        {({ breakpoints, currentBreakpoint }) =>
          breakpoints[currentBreakpoint] > breakpoints.mobileLandscape ? console.log("hiya",breakpoints[currentBreakpoint])|| (



            <div className="nav">
            <div className="internalLinks">
            <NavLink exact to="/" className="logo">
              <img className="logo" src={require('../assets/livingRoomersLogo2.png')} alt="Missing Icon"/>
            </NavLink>
              <NavLink exact to="/music" onClick={this.handleClick} className="link" id="musicActive">Music</NavLink>
              <NavLink exact to="/merch" className="link" id="merchActive">Merch</NavLink>
              <NavLink exact to="/shows" className="link" id="showsActive">Live</NavLink>
              <NavLink exact to="/contact" className="link" id="contactActive">Book</NavLink>

            </div>
            <div className='externalLinks'>
            <a target="_blank" href="https://open.spotify.com/artist/2nhVuKbeuDADrh4zuSYqsf" >
              <img className="icon" alt="Missing Icon" src={require('../assets/spotify.png')}/>
            </a>
            <a target="_blank" href="https://www.instagram.com/thelivingroomers/?hl=en">
              <img className="icon" alt="Missing Icon" src={require('../assets/insta.png')}/>
            </a>
            <a target="_blank" href="https://www.facebook.com/thelivingroomersband/" >
              <img className="icon" alt="Missing Icon" src={require('../assets/facebook.png')}/>
            </a>

            </div>

            </div>



                ) : (
                          <MobileMenu className="navSlide"/>
                )

















  }
  </Media>
)
}
}
// <div className="nav">
// <div className="internalLinks">
// <NavLink exact to="/" className="logo">
//   <img className="logo" src={require('../assets/livingRoomersLogo2.png')}/>
// </NavLink>
//
//
//   <NavLink exact to="/music" className="link">Music</NavLink>
//   <NavLink exact to="/merch" className="link">Merch</NavLink>
//   <NavLink exact to="/shows" className="link">Live</NavLink>
//   <NavLink exact to="/contact" className="link">Book</NavLink>
//
// </div>
// <div className='externalLinks'>
// <a target="_blank" href="https://open.spotify.com/artist/2nhVuKbeuDADrh4zuSYqsf" >
//   <img className="icon" id="spotify" src={require('../assets/spotify.png')}/>
// </a>
// <a target="_blank" href="https://www.instagram.com/thelivingroomers/?hl=en">
//   <img className="icon" src={require('../assets/insta.png')}/>
// </a>
// <a target="_blank" href="https://www.facebook.com/thelivingroomersband/" >
//   <img className="icon" src={require('../assets/facebook.png')}/>
// </a>
//
// </div>
//
// </div>












export default Navigation;
