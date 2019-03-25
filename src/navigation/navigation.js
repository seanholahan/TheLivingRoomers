import React, { Component } from 'react';
import logo from '../logo.svg';
import './navigation.css';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import Grow from '@material-ui/core/Grow';
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

      <div id="mobileNavContain">
        <Button
          aria-owns={anchorEl ? 'simple-menu' : undefined}
          aria-haspopup="true"
          onClick={this.handleClick}
        >
          <img id="hamburger" src={require('../assets/hamburgler.png')}/>
          <img className="icon" src={require('../assets/livingRoomersLogo2.png')}/>
        </Button>
        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={this.handleClose}
        >

          <MenuItem onClick={this.handleClose}>Music</MenuItem>
          <MenuItem onClick={this.handleClose}>Merch</MenuItem>
          <MenuItem onClick={this.handleClose}>Live</MenuItem>

        </Menu>
      </div>
    );
  }
}

// <div className="nav">
// <div className="internalLinks">
// <NavLink exact to="/" className="icon">
//
// </NavLink>
//   <NavLink exact to="/music" className="link">Music</NavLink>
//   <NavLink exact to="/merch" className="link">Merch</NavLink>
//   <NavLink exact to="/shows" className="link">Live</NavLink>
//   <NavLink exact to="/contact" className="link">Book</NavLink>
// </div>
// </div>

export default Navigation;
