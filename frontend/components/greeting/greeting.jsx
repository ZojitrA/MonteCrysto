import React from 'react';
import {Link} from 'react-router-dom';
import LandingNav from '../landing/nav';
import LandingChild1 from '../landing/landing_info_child1';
import EveryPageNav from '../everyPageNav';
import List from '../collectionlist/list_container';
import MarketChart from '../splash/chart/marketChart';
import News from '../news/stocknews';

// <h1>Hello {props.currentUser.first_name}</h1>
// <button onClick={props.logout}>Log Out</button>
// <Chart/>
// <Chart className="splash-chart" ticker="aapl"/>
class Greeting extends React.Component {
  constructor(props) {
    super(props);

  }








  render(){



  const style = {
    display: "flex",
    flexDirection: "column",
    maxWidth: "400px",
   height: "1120px",
   zIndex: "-101"
  };

  const chartStyle = {
  // marginTop: "100px",
  // position: "relative",
  // position: "absolute",
  zIndex: "-10px",
  fontFamily: "'Raleway', sans-serif",
  };



  if (this.props.currentUser) {
    return (
      <div>
        <div className="splash-container">
          <EveryPageNav currentUser={this.props.currentUser} logout={this.props.logout}/>
          <div>
            <List/>
          </div>
        </div>
        <div style={chartStyle}>
          <MarketChart stocks={this.props.stocks} ticker="BTC"  name={"Bitcoin"} xDataKey={"time"} yDataKey={"close"} place={"dash"}/>
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
}
}

export default Greeting;
