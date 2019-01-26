import {Link} from 'react-router-dom';
import React from 'react';

export default (args) => {

if(args.onOff){
return(

  <section className="notifications-tab">
    <h1 className="notifications-title">Funds Available</h1>
    <h2 className="notifications-subtitle-with-value">{args.currentUser.funds_usd} is now available for trading</h2>
  </section>

);
}else{
  return(
    <div>
    </div>
  );
}

};
