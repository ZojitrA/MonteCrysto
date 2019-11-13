import {Link} from 'react-router-dom';
import React from 'react';
import Search from '../search/search_container';
import SplashNav from '../navs/nav';

export default (props) => {


  return(

    <div className="splash-container">
      <div className="splash-logo-and-search">
        <Link className="splash-logo-link" to={"/"}><img className="splash-logo" src={window.blacklogo}></img></Link>
        <Search/>
      </div>
      <section className="splash-nav-button-container">
        <SplashNav currentUser={props.currentUser} page={props.page} logout={props.logout}/>
      </section>
    </div>


  );
};
