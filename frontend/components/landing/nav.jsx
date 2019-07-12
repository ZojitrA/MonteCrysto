import {Link} from 'react-router-dom';
import React from 'react';

export default () => (

  <section className="landing-nav-container">
    <img className="logo" src={window.logo}></img>
    <div className="landing-nav-button-container">

      <a href="https://amirsojitra.nyc" className="link-landing-buttons"> Developer</a>
      <Link className="link-landing-buttons" to="/login">Log In</Link>
      <Link className="link-landing-buttons" to="/signup">Sign Up</Link>
    </div>
  </section>

);
