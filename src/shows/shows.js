import React, { Component } from 'react';
import './shows.css';
import PastShowListings from '../showListings/pastShowListings';
import FutureShowListings from '../showListings/futureShowListings';

class Shows extends Component {
  constructor(props){
        super(props);
        this.state = {

          error: null,
          isLoaded: false,
          tourDates:null


        }



      }



  render() {
    console.log("response",this.state);



    return (



          <div key={1} className="showContainer">
          <h1 className="pageHeader">SHOWS</h1>
            <div className="showListingContainer">
            <h2 className="showListingTitle">FUTURE DATES</h2>
            <FutureShowListings ></FutureShowListings>
            <h2 className="showListingTitle">PAST DATES</h2>
            <PastShowListings ></PastShowListings>
            </div>
          </div>






    );
  }
}

export default Shows;
