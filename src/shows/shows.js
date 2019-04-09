
import React, { Component } from 'react';

import './shows.css';
import Fade from '@material-ui/core/Fade';
import {
  CSSTransition,
  TransitionGroup,
  Transition
} from 'react-transition-group';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

class Shows extends Component {
  constructor(props){
        super(props);

        this.state = {
            isVisible: true
        }

        this.closeComponent = ev => {
            ev.preventDefault();

            this.setState({
                isVisible: false
            });

            setTimeout(() => {
                this.props.history.push('/')
            }, 600)
        }


      }

      // componentDidMount() {
        // fetch( 'rest.bandsintown.com/artists/52-the-killers/events/app_id=48fd7be4e116c62000215ecb1c4acc78')
        // .then(response => console.log("response",response))
  //       var bandsintown = require('bandsintown')('48fd7be4e116c62000215ecb1c4acc78');
  //       bandsintown
  // .getArtistEventList('Skrillex')
  // .then(function(events) {
  //   console.log("events",events)
  // });

      // }
  componentWillMount () {
    // const script = document.createElement("script");
    //
    // script.src = "https://widget.bandsintown.com/main.min.js";
    // script.async = true;
    // var bandsintown = require('bandsintown')('48fd7be4e116c62000215ecb1c4acc78');
    //
    // bandsintown
    //     .getArtistEventList('Skrillex')
    //     .then(function(events) {
    //     // return array of events
    //     console.log("events",events);
    //     });

  }
  render() {
    return (



          <div key={1} className="showContainer">
          <h1>IM WORKIN ON IT</h1>
          </div>






    );
  }
}

export default Shows;
