import React from 'react';
import {Link} from 'react-router-dom';
import LandingNav from '../landing/nav';
import SplashNav from '../splash/nav';
import LandingChild1 from '../landing/landing_info_child1'
import LandingChild2 from '../landing/landing_info_child2'

const Greeting = props => {
debugger
  if (props.currentUser) {
    return (
      <div className="greeting-container">
        <h1>Hello {props.currentUser.first_name}</h1>
        <button onClick={props.logout}>Log Out</button>
        <section className="splash-container">
          <SplashNav/>
        </section>
      </div>
    );
  } else {

    return (
      <div>
      <LandingNav/>

      <div className="landing-container">
        <LandingChild1 className="landing-child"/>
        <LandingChild2 className="landing-child"/>
      </div>
    </div>

    );
  }
}

export default Greeting;
