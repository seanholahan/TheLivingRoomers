
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
          tourDates:null

        }



      }

      componentDidMount() {

        fetch( 'https://rest.bandsintown.com/artists/The%20Living%20Roomers/events?app_id=48fd7be4e116c62000215ecb1c4acc78&date=all')//rest.bandsintown.com/artists/Skrillex/events
        .then(response => this.setState ({tourDates: response.json()}) )
      //  .then(response => console.log("heh",response.json()))
        .then(console.log("response",this.state))
  //       var bandsintown = require('bandsintown')('48fd7be4e116c62000215ecb1c4acc78');
  //       bandsintown
          // .getArtistEventList('Skrillex')
          // .then(function(events) {
          //   console.log("events",events)
          // });
      }

  render() {
    console.log("response",this.state);

    // if (this.state.tourDates ===null) {
    //
    // } else {
    //   const tourDates = this.state.tourDates.map((link) =>
    //                <h2>hi</h2>
    //   )
    // }

    return (



          <div key={1} className="showContainer">
          <h2>LIVE</h2>
          <h1>IM WORKIN ON IT</h1>
          </div>






    );
  }
}

export default Shows;
