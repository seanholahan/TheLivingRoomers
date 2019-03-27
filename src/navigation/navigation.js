import React, { Component } from 'react';
import logo from '../logo.svg';
import './navigation.css';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import Grow from '@material-ui/core/Grow';
import { Media } from 'react-breakpoints';
import Icon from '@material-ui/core/Icon';
import {
  Route,
  NavLink,
  Switch
} from "react-router-dom";

class Navigation extends Component {

  state = {
    anchorEl: null,
  };

  handleClick = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };
  render() {
    const { anchorEl } = this.state;
    return (
      <Media>
        {({ breakpoints, currentBreakpoint }) =>
          breakpoints[currentBreakpoint] > breakpoints.mobile ? (

            <div className="nav">
            <div className="internalLinks">
            <NavLink exact to="/" className="logo">
              <img className="logo" src={require('../assets/livingRoomersLogo2.png')}/>
            </NavLink>
              <NavLink exact to="/music" className="link">Music</NavLink>
              <NavLink exact to="/merch" className="link">Merch</NavLink>
              <NavLink exact to="/shows" className="link">Live</NavLink>
              <NavLink exact to="/contact" className="link">Book</NavLink>

            </div>
            <div className='externalLinks'>
            <a target="_blank" href="https://open.spotify.com/artist/2nhVuKbeuDADrh4zuSYqsf" >
              <img className="icon" src={require('../assets/spotify.png')}/>
            </a>
            <a target="_blank" href="https://www.instagram.com/thelivingroomers/?hl=en">
              <img className="icon" src={require('../assets/insta.png')}/>
            </a>
            <a target="_blank" href="https://www.facebook.com/thelivingroomersband/" >
              <img className="icon" src={require('../assets/facebook.png')}/>
            </a>

            </div>

            </div>

          ) : (
            <div className="nav">
            <div className="internalLinks">
            <NavLink exact to="/" className="logo">
              <img className="logo" src={require('../assets/livingRoomersLogo2.png')}/>
            </NavLink>
              <NavLink exact to="/music" className="link">Music</NavLink>
              <NavLink exact to="/merch" className="link">Merch</NavLink>
              <NavLink exact to="/shows" className="link">Live</NavLink>
              <NavLink exact to="/contact" className="link">Book</NavLink>

            </div>
            <div className='externalLinks'>
            <a target="_blank" href="https://open.spotify.com/artist/2nhVuKbeuDADrh4zuSYqsf" >
              <img className="icon" src={require('../assets/spotify.png')}/>
            </a>
            <a target="_blank" href="https://www.instagram.com/thelivingroomers/?hl=en">
              <img className="icon" src={require('../assets/insta.png')}/>
            </a>
            <a target="_blank" href="https://www.facebook.com/thelivingroomersband/" >
              <img className="icon" src={require('../assets/facebook.png')}/>
            </a>

            </div>

            </div>
          )
        }
      </Media>


    );
  }
}

// <div id="mobileNavContain">
//   <Button
//     aria-owns={anchorEl ? 'simple-menu' : undefined}
//     aria-haspopup="true"
//     onClick={this.handleClick}
//   >
//     <img id="hamburger" src={require('../assets/hamburgler.png')}/>
//     <img className="logo" src={require('../assets/livingRoomersLogo2.png')}/>
//   </Button>
//   <Menu
//     id="simple-menu"
//     anchorEl={anchorEl}
//     open={Boolean(anchorEl)}
//     onClose={this.handleClose}
//   >
//
//     <MenuItem onClick={this.handleClose}>Music</MenuItem>
//     <MenuItem onClick={this.handleClose}>Merch</MenuItem>
//     <MenuItem onClick={this.handleClose}>Live</MenuItem>
//
//   </Menu>
// </div>



export default Navigation;
