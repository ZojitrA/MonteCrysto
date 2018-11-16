import {Link} from 'react-router-dom';
import React from 'react';

export default () => (

  <section className="landing-nav-container">
    <img className="logo" src={window.logo}></img>
    <div className="landing-nav-button-container">
      <Link className="link-landing-buttons" to="/login">Blog</Link>
      <Link className="link-landing-buttons" to="/login">Careers</Link>
      <Link className="link-landing-buttons" to="/signup">Help</Link>
      <Link className="link-landing-buttons" to="/login">Log In</Link>
      <Link className="link-landing-buttons" to="/signup">Sign Up</Link>
    </div>
  </section>

);
