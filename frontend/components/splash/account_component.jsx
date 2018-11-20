import {Link} from 'react-router-dom';
import React from 'react';

export default (args) => {

  if(args.onOff){
    return(
      <section className="account-tab">
        <h1>{args.currentUser.first_name} {args.currentUser.last_name}</h1>
        <div className="account-tab-section0">
          {args.currentUser.funds_usd} available for trading
        </div>
        <div className="account-tab-section1">
          <Link className="account-tab-links" to="/">Account</Link>
          <Link className="account-tab-links" to="/">Banking</Link>
          <Link className="account-tab-links" to="/">Settings</Link>
          <div/>
          <div className="account-tab-section2">
            <Link className="account-tab-links" to="/">Help</Link>
            <Link className="account-tab-links" to="/">Discourses</Link>
          </div>
        </div>
        <button className="account-tab-button" onClick={() => args.logout()}>Log Out</button>
      </section>
    )
  }else{
    return(
      <div>
      </div>
    )
  }

};
