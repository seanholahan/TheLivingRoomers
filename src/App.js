// import React, { Component } from 'react';
// import logo from './logo.svg';

// import {
//   Route,
//   BrowserRouter,
//   HashRouter,
//   NavLink,
//   Switch
// } from "react-router-dom";
// import AppBar from '@material-ui/core/AppBar';
// import {
//   CSSTransition,
//   TransitionGroup
// } from 'react-transition-group';

//
// import { spring, AnimatedSwitch } from 'react-router-transition';
//
//
//
//
//
//
// class App extends Component {
//
//
//   componentDidMount() {
//     //this.setState({isLoading:false})
//   }
//   // <div className="externalLinks">
//   // <NavLink exact to="/" className="link">Home</NavLink>
//   // <NavLink exact to="/" className="link">Home</NavLink>
//   // </div>
//   render() {
//     return (
//       // this.state.isLoading ? console.log("hi") :
//   //    <AppBar position="static"  style={{ background: 'transparent', boxShadow: 'none'}}></AppBar>
// //<MobileMenu/>
//
//       <div>
// <HashRouter>
//           <Navigation/>
//
//
//           <Route render={({location}) => console.log("hehehe",location) || (
//             <TransitionGroup>
//             <CSSTransition
//             key={location.path}
//             timeout={{ enter: 300, exit: 300 }}
//             classNames={'page'}
//             >
//             <Route location={location}
//             render ={() => (
//           <Switch
//           >
//             <Route exact path="/" component={Home} />
//             <Route path="/music" component={Music} />
//             <Route path="/contact" component={Contact} />
//             <Route path="/merch" component={Merch} />
//             <Route path="/shows" component={Shows} />
//           </Switch>
//           )}
//           />
//           </CSSTransition>
//           </TransitionGroup>
//         )}/>
//
//
//
//         </HashRouter>
//       </div>
//     );
//   }
// }
//
// export default App;
// // //
// // <div className="nav">
// //     <NavLink exact to="/" activeClassName="active">Home</NavLink>
// //     <NavLink to="/about" activeClassName="active">About</NavLink>
// //   </div>


import React, { Component }  from 'react';
import { render } from 'react-dom';
import {
  Route,
  Switch,
  BrowserRouter,
} from 'react-router-dom';
import {
  CSSTransition,
  TransitionGroup,
  Transition
} from 'react-transition-group';

import './App.css';




import Home from './home/home';
import Music from './music/music';
import Shows from './shows/shows';
import Contact from './contact/contact';
import Merch from './merch/merch';
import Navigation from './navigation/navigation';
import MobileMenu from './mobileMenu/mobileMenu';

// Does the user's browser support the HTML5 history API?
// If the user's browser doesn't support the HTML5 history API then we
// will force full page refreshes on each page change.
//
//


class App extends Component {

  render() {
    return (
      <BrowserRouter>
        <div className="app">
          <Navigation/>

          <Route render={({ location }) => {
            const { pathname, key } = location;

            return (
              // <Transition component={null}>
              //   <Transition
              //     key={key}
              //     appear={true}
              //
              //     timeout={{enter: 750, exit: 150}}
              //   >

          <Switch>

                  <Route exact path="/" component={Home} />
                  <Route path="/music" component={Music} />
                  <Route path="/contact" component={Contact} />
                  <Route path="/merch" component={Merch} />
                  <Route path="/shows" component={Shows} />


          </Switch>
          // 
          // </Transition>
          //     </TransitionGroup>
            )




          }}/>

        </div>
      </BrowserRouter>
    )
  }
}

  export default App;


// const App = ({  }) => (
//   <BrowserRouter forceRefresh={!supportsHistory}>
//     <div>
//       <Navigation />
//       <main>
//         <Route
//           render={({ location }) => {
//             const { pathname } = location;
//             return (
//               <TransitionGroup>
//                 <CSSTransition
//                   key={pathname}
//                   classNames="page"
//                   timeout={{
//                     enter: 1000,
//                     exit: 1000,
//                   }}
//                 >
//                   <Route
//                     location={location}
//                     render={() => (
//                       <Switch>
//
//                          <Route exact path="/" component={Home} />
//                                  <Route path="/music" component={Music} />
//                                  <Route path="/contact" component={Contact} />
//                                  <Route path="/merch" component={Merch} />
//                                  <Route path="/shows" component={Shows} />
//
//
//                       </Switch>
//                     )}
//                   />
//                 </CSSTransition>
//               </TransitionGroup>
//             );
//           }}
//         />
//       </main>
//     </div>
//   </BrowserRouter>
// );
//
// render(<App />, document.getElementById('root'));
