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
      <ReactCSSTransitionGroup
                transitionName="example"
                transitionAppearTimeout={600}
                transitionEnterTimeout={500}
                transitionLeaveTimeout={300}

                transitionAppear={true}
                transitionName={'loadComponent' }
                >
                <div id="merchContainer" className="content" key={this.props.location.pathname}>
              <h1 className="content--inner">YOU CAN'T BUY OUR SOULS</h1>
                </div>


        </ReactCSSTransitionGroup>




    );
  }
}
export default Merch;