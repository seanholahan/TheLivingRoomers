
import React, { Component } from 'react';

import './showListings.css';

import Moment from 'react-moment';

class FutureShowListings extends Component {
  constructor(props){
        super(props);
        this.state = {

          error: null,
          isLoaded: false,
          tourDates:null
        }
      }

      componentDidMount() {

        fetch( 'https://rest.bandsintown.com/artists/The%20Living%20Roomers/events?app_id=48fd7be4e116c62000215ecb1c4acc78&date=upcoming')//rest.bandsintown.com/artists/Skrillex/events
        .then(res => res.json())
        .then(response => this.setState ({error:null,
                                          isLoaded: true,
                                          tourDates: response}))
        .then(console.log("response",this.state))
      }


      render() {
        console.log("response",this.state);
        const { error, isLoaded, tourDates } = this.state;
        if (error) {
          return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
          return <div>Loading...</div>;
        } else {
          if (tourDates.length == 0) {
            return (
              <div className="showListing">
              <h3 className="noShows">CURRENTLY NO UPCOMING SHOWS</h3>
              </div>
            )

          } else {

          return (

            <div>
              {tourDates.map(show => (
                <div className="showListing" key={show.url} >


                    <Moment className="eventDate" format="D MMM YYYY">{show.datetime}</Moment>
                    <h3>{show.venue.name}</h3>
                    <h3>{show.venue.city},{show.venue.region}</h3>


                    <a target="_blank" rel="noopener noreferrer" className="eventButton" href={show.url}>Buy Tickets</a>

                </div>

              ))}
              </div>
            );
          }
        }
      }
    }

    export default FutureShowListings;
