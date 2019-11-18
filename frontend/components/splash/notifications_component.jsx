import {Link} from 'react-router-dom';
import React from 'react';

export default (args) => {

if(args.onOff){
return(

  <section className="notifications-tab">
    <h3 style={{color:"darkgrey"}}>Funds Available</h3>
    <h2 style={{color: "#21ce99", fontWeight: "600"}} className="notifications-subtitle-with-value"> { args.currentUser && args.currentUser.funds_usd ? args.currentUser.funds_usd.toFixed(2) : 0 } USD</h2>
  </section>

);
}else{
  return(
    <div>
    </div>
  );
}

};
