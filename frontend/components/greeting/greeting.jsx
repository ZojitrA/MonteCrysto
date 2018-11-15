import React from 'react';
import {Link} from 'react-router-dom';
import LandingNav from '../navbars/landing_nav';

const Greeting = props => {

  if (props.currentUser) {
    return (
      <div>
        <h1>Hello {props.currentUser.email}</h1>
        <button onClick={props.logout}>Log Out</button>
      </div>
    );
  } else {
    return (
      <div>
        <div className="landing-container">
          <LandingNav/>
          

        </div>
        <img className="landing-pic1" src={window.blob}></img>
      </div>
    );
  }
}

export default Greeting;
