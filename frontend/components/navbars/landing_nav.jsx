import {Link} from 'react-router-dom';
import React from 'react';

export default () => (
  <section className="landing-nav">
    <Link className="link-landing" to="/login">Blog</Link>
    <Link className="link-landing" to="/login">Careers</Link>
    <Link className="link-landing" to="/signup">Help</Link>
    <Link className="link-landing" to="/login">LogIn</Link>
    <Link className="link-landing" to="/signup">SignUp</Link>
  </section>
);
