
import React, { Component } from 'react';

import './showListings.css';
import Fade from '@material-ui/core/Fade';
import {
  CSSTransition,
  TransitionGroup,
  Transition
} from 'react-transition-group';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import Moment from 'react-moment';

class ShowListings extends Component {
  constructor(props){
        super(props);
        this.state = {

          error: null,
          isLoaded: false,
          tourDates:null,



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
        const { error, isLoaded, tourDates } = this.state;
        if (error) {
          return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
          return <div>Loading...</div>;
        } else {
          return (

            <div>
              {tourDates.map(show => (
                <div className="showListing">


                    <Moment className="eventDate" format="D MMM YYYY">{show.datetime}</Moment>
                    <h3>{show.venue.name}</h3>
                    <h3>{show.venue.city},{show.venue.region}</h3>


                    <a target="_blank" className="eventButton" href={show.url}>Buy Tickets</a>

                </div>

              ))}
              </div>



          );
        }





        // if (this.state.tourDates ===null) {
        //
        // } else {
        //   const tourDates = this.state.tourDates.map((link) =>
        //                <h2>hi</h2>
        //   )
        // }


      }
    }

    export default ShowListings;
