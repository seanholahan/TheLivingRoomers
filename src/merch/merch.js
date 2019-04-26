import React, { Component } from 'react';
import './merch.css';


class Merch extends Component {

  render() {
    return (

                <div id="merchContainer" className="content" key={this.props.location.pathname}>
              <h1 className="pageHeader">MERCH </h1>

              <h2 className="content--inner" id="storePlaceholder">YOU CAN'T BUY OUR SOULS</h2>
                </div>







    );
  }
}
export default Merch;
