import {Link} from 'react-router-dom';
import React from 'react';

class Splash extends React.Component {



  render(){
    return(
      <section className="splash-nav">
        <Link className="splash-landing-buttons" to="/">Home</Link>
        <Link className="splash-landing-buttons" to="/login">Notifications</Link>
        <div className="splash-landing-buttons" onClick={this.toggle}>Account</div>
      </section>
    )
  }
};

export default Splash;
