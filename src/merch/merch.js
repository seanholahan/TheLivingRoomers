import React, { Component } from 'react';
//import SoundCloud from 'react-soundcloud-widget';
import Player from 'react-soundcloud-widget-player';
import ReactSoundcloud from 'react-soundcloud-embed';
import ReactPlayer from 'react-player';
import { CSSTransition,TransitionGroup } from 'react-transition-group';
import './merch.css';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

class Merch extends Component {
  constructor(props) {
    super(props)
}
  render() {
    return (

                <div id="merchContainer" className="content" key={this.props.location.pathname}>
              <h2>MERCH </h2>
              
              <h1 className="content--inner" id="storePlaceholder">YOU CAN'T BUY OUR SOULS</h1>
                </div>







    );
  }
}
export default Merch;
