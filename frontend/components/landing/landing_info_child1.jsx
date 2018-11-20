import {Link} from 'react-router-dom';
import React from 'react';

export default () => (

  <div className="info-and-image">
    <div className="text-and-signup">
      <p>Invest your way to fortune.</p>
      <p>To defeat your foes.</p>
      <Link className="landing-signup-button" to="/signup">Sign Up</Link>
    </div>
    <img className="landing-image-cellphone2" src={window.diamond}></img>
  </div>

);
