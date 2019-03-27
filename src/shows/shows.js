
import React, { Component } from 'react';

import './shows.css';
import Fade from '@material-ui/core/Fade';

class Shows extends Component {
  componentWillMount () {
    const script = document.createElement("script");

    script.src = "https://widget.bandsintown.com/main.min.js";
    script.async = true;
    var bandsintown = require('bandsintown')('48fd7be4e116c62000215ecb1c4acc78');

    bandsintown
        .getArtistEventList('Skrillex')
        .then(function(events) {
        // return array of events
        console.log("events",events);
        });

  }
  render() {
    return (
      <Fade in="false">
        <div className="showContainer">
        <p>hi</p>
        </div>
        </Fade>

    );
  }
}

export default Shows;
