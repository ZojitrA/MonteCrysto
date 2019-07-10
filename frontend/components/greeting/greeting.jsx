import React from 'react';
import {Link} from 'react-router-dom';
import LandingNav from '../landing/nav';
import LandingChild1 from '../landing/landing_info_child1';
import EveryPageNav from '../everyPageNav';
import List from '../collectionlist/list_container';
import Chart from '../splash/chart/rechart';
import News from '../news/stocknews';

// <h1>Hello {props.currentUser.first_name}</h1>
// <button onClick={props.logout}>Log Out</button>
// <Chart/>
// <Chart className="splash-chart" ticker="aapl"/>
const Greeting = props => {

  const style = {
    display: "flex",
    flexDirection: "column",
    maxWidth: "400px",
   height: "1120px",
  };

  const chartStyle = {
  // marginTop: "100px",
  marginLeft: "-200px",
  // position: "relative",
  // position: "absolute",
  zIndex: "-10px",
  fontFamily: "'Raleway', sans-serif",
  };



  if (props.currentUser) {
    return (
      <div>
        <div className="splash-container">
          <EveryPageNav currentUser={props.currentUser} logout={props.logout}/>
          <div>
            <List/>
          </div>
        </div>
        <div style={chartStyle}>
          <Chart stocks={props.stocks} ticker="BTC"   xDataKey={"time"} yDataKey={"close"} place={"dash"}/>
        </div>
        <div style={style}>
          <News ticker="blockchain"/>
        </div>
      </div>
    );
  } else {

    return (
      <div>
      <LandingNav/>

      <div className="landing-container">
        <LandingChild1 className="landing-child"/>

      </div>
    </div>

    );
  }
};

export default Greeting;
