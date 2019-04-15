

import React, { Component }  from 'react';
import Div100vh from 'react-div-100vh';
import {
  Route,
  Switch,
  HashRouter
} from 'react-router-dom';
import {
  CSSTransition,
  TransitionGroup
} from 'react-transition-group';
import './App.css';
import Home from './home/home';
import Music from './music/music';
import Shows from './shows/shows';
import Contact from './contact/contact';
import Merch from './merch/merch';
import Navigation from './navigation/navigation';



class App extends Component {

  render() {
    return (
      <HashRouter>
        <div className="app">
          <Navigation/>

          <Route render={({ location }) => {
          

            return (

              <Route
        render={({ location }) => (

          <TransitionGroup>
            <CSSTransition
              key={location.pathname}
              classNames="fade"
              timeout={600}
            >
              <Div100vh>
              <Switch location={location}>
              <Route exact path="/TheLivingRoomers" component={Home} />
              <Route exact path="/" component={Home} />
              <Route path="/music" component={Music} />
              <Route path="/contact" component={Contact} />
              <Route path="/merch" component={Merch} />
              <Route path="/shows" component={Shows} />

              </Switch>
              </Div100vh>
            </CSSTransition>
          </TransitionGroup>

        )}
      />


            )




          }}/>

        </div>
      </HashRouter>
    )
  }
}

  export default App;
