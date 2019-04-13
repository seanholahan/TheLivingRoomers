
import React, { Component } from 'react';

import './shows.css';
import Fade from '@material-ui/core/Fade';
import {
  CSSTransition,
  TransitionGroup,
  Transition
} from 'react-transition-group';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import ShowListings from '../showListings/showListings';

class Shows extends Component {
  constructor(props){
        super(props);
        this.state = {

          error: null,
          isLoaded: false,
          tourDates:null


        }



      }

      componentDidMount() {

        fetch( 'https://rest.bandsintown.com/artists/The%20Living%20Roomers/events?app_id=48fd7be4e116c62000215ecb1c4acc78&date=all')//rest.bandsintown.com/artists/Skrillex/events
        .then(res => res.json())
        .then(response => this.setState ({error:null,
                                          isLoaded: true,
                                          tourDates: response}))
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


    // <ul>
    //   {tourDates.map(show => (
    //     <li key={show.name}>
    //       {show.name} {show.price}
    //     </li>
    //   ))}
    // </ul>



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
          <ShowListings></ShowListings>
          </div>






    );
  }
}

export default Shows;
