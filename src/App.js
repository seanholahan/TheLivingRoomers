import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {
  Route,
  BrowserRouter,
  NavLink,
  Switch
} from "react-router-dom";
import {
  CSSTransition,
  TransitionGroup
} from 'react-transition-group';
//import Navigation from './navigation/navigation';
import Home from './home/home';
import Music from './music/music';
import Shows from './shows/shows';
import Contact from './contact/contact';




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
      <div>
<BrowserRouter>
          <div className="nav">
          <div className="internalLinks">

            <NavLink exact to="/music" className="link">Music</NavLink>
            <NavLink exact to="/" className="link">Merch</NavLink>
            <img className="icon" src={require('./assets/livingRoomersLogo.png')}/>
            <NavLink exact to="/shows" className="link">Live</NavLink>
            <NavLink exact to="/contact" className="link">Contact</NavLink>
          </div>

          </div>

          <Route render={({location}) => (
            <TransitionGroup>
            <CSSTransition

            timeout={300}
            className="fade">

          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/music" component={Music} />
            <Route path="/contact" component={Contact} />
          </Switch>
          </CSSTransition>
          </TransitionGroup>
        )}/>



        </BrowserRouter>
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
