import React, { Component } from 'react';
import logo from '../logo.svg';
import './navigation.css';
import {
  Route,
  NavLink,
  Switch
} from "react-router-dom";

class Navigation extends Component {
  render() {
    return (
      <div>
      <div>
      <NavLink exact to="/"></NavLink>
      <NavLink  to="/"></NavLink>
      </div>
      <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/music" component={Music} />
    </Switch>
    </BrowserRouter>
    </div>

    );
  }
}

export default Navigation;

<ul className="header">

      <li><a href="/music">Music</a></li>
      <li><a href="/">Merch</a></li>
      <img className="icon" src={require('../assets/livingRoomersLogo.png')}/>
      <li><a href="/shows">Shows</a></li>
      <li><a href="/CONTACT">Contact</a></li>
    </ul>
