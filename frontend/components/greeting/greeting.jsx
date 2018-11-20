import React from 'react';
import {Link} from 'react-router-dom';
import LandingNav from '../landing/nav';
import LandingChild1 from '../landing/landing_info_child1';
import EveryPageNav from '../everyPageNav';

// <h1>Hello {props.currentUser.first_name}</h1>
// <button onClick={props.logout}>Log Out</button>
// <Chart/>
const Greeting = props => {
  if (props.currentUser) {
    return (
      <EveryPageNav currentUser={props.currentUser} logout={props.logout}/>
    );
  } else {

    return (
      <div>
      <LandingNav/>

      <div className="landing-container">
        <LandingChild1 className="landing-child"/>

      </div>
    </div>

    );
  }
};

export default Greeting;
