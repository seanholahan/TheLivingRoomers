import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {
  Route,
  BrowserRouter,
  HashRouter,
  NavLink,
  Switch
} from "react-router-dom";

import AppBar from '@material-ui/core/AppBar';
import {
  CSSTransition,
  TransitionGroup
} from 'react-transition-group';
//import Navigation from './navigation/navigation';
import Home from './home/home';
import Music from './music/music';
import Shows from './shows/shows';
import Contact from './contact/contact';
import Merch from './merch/merch';
import Navigation from './navigation/navigation';
import MobileMenu from './mobileMenu/mobileMenu';




class App extends Component {


  componentDidMount() {
    //this.setState({isLoading:false})
  }
  // <div className="externalLinks">
  // <NavLink exact to="/" className="link">Home</NavLink>
  // <NavLink exact to="/" className="link">Home</NavLink>
  // </div>
  render() {
    return (
      // this.state.isLoading ? console.log("hi") :
  //    <AppBar position="static"  style={{ background: 'transparent', boxShadow: 'none'}}></AppBar>
//<MobileMenu/>

      <div>
<HashRouter>
          <Navigation/>


          <Route render={({location}) => console.log("hehehe",location) || (
            <TransitionGroup>
            <CSSTransition
            key={location.path}

            timeout={300}
            classNames="fade">
          <Switch location={location}>
            <Route exact path="/" component={Home} />
            <Route path="/music" component={Music} />
            <Route path="/contact" component={Contact} />
            <Route path="/merch" component={Merch} />
            <Route path="/shows" component={Shows} />
          </Switch>
          </CSSTransition>
          </TransitionGroup>
        )}/>



        </HashRouter>
      </div>
    );
  }
}

export default App;
// //
// <div className="nav">
//     <NavLink exact to="/" activeClassName="active">Home</NavLink>
//     <NavLink to="/about" activeClassName="active">About</NavLink>
//   </div>
