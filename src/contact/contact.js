import React, { Component } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import './contact.css';

class Contact extends Component {
  componentWillMount () {
    const script = document.createElement("script");

    script.src = "https://widget.bandsintown.com/main.min.js";
    script.async = true;
    document.body.appendChild(script);
    console.log("params",this.props.location.pathname);

  }
  render() {
    return (

      <div id='contact'>
        <div id='formContainer'>
           <form action="/action_page.php">
           <label>Name</label>
           <input type="text" id="fname" name="firstname" placeholder="Your name.." />

           <label>Email</label>
           <input type="email" id="email" name="email" placeholder="Your email" />


           <label>Subject</label>
           <textarea id="subject" name="subject" placeholder="Your message"></textarea>
           <input type="submit" value="Send" />
           </form>
         </div>
      </div>

    );
  }
}

export default Contact;
