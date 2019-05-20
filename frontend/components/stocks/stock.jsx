import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import Chart from '../splash/chart/marketChart';
import EveryPageNav from '../everyPageNav';
import axios from 'axios';
import News from '../news/stocknews';

class Stock extends Component {


  constructor(props){

    super(props);
    this.state = {
      data: [],
      watchlists: null,
      stocks: null,
      news: null
    };
    this.handleAdd = this.handleAdd.bind(this);
    this.handleDrop = this.handleDrop.bind(this);

    this.grabWatchlists = this.grabWatchlists.bind(this);

  }

  componentDidMount(){
    this.props.getStock(this.props.ticker).then(data => this.setState({data: data.data}));

    this.props.getWatchlists(this.props.currentUser.id).then(data =>
      this.setState({watchlists: data.data.watchlists, stocks: data.data.stocks}));


  }

    // this.props.getWatchlists()


  compare(obj1, obj2){

    if(obj1 === null || obj2 === null){
      return false;
    }
    if(obj1.length === 0 && obj2.length === 0){
      return true
    }
    let values1 = Object.values(obj1);
    let values2 = Object.values(obj2);

    for(var key in values1){
      if(!values2[key]){
        return false;
      }
      if(Array.isArray(values1[key])){
        if(!Array.isArray(values2[key]) || values1[key].length !== values2[key].length){
          return false;
        }
        for(var i = 0; i < values1[key].length; i++){
          if(values2[key].indexOf(values1[key][i]) === -1){
            return false;
          }
        }
      }
    }
    return true;

  }




  componentDidUpdate(prevProps){

    if(prevProps.ticker !== this.props.ticker){
      this.props.getStock(this.props.ticker).then(data => this.setState({data: data.data}));

      this.grabWatchlists();
    }


      if(!this.compare(this.props.watchlists, this.state.watchlists)){
        this.grabWatchlists();
    //
    //     this.grabWatchlists();
    //
      }
}


  grabWatchlists(){

    this.props.getWatchlists(this.props.currentUser.id).then(data =>
      this.setState({watchlists: data.data.watchlists, stocks: data.data.stocks}));

  }




  handleAdd(){

    const stock = {ticker: this.props.ticker};

    this.props.addToList(this.props.currentUser.primary_watchlist_id, stock).then(
      () => this.grabWatchlists()
    );

  }

  handleDrop(){

    const stock = {ticker: this.props.ticker};

    this.props.dropFromList(this.props.currentUser.primary_watchlist_id, stock).then(
      () => this.grabWatchlists());

  }



render(){


  const data = Object.entries(this.state.data).map((datum, idx) => (
    <li key={idx}>{datum}</li>
  ));

let button;
let buttonType;
let buttonClass;
let tickers = [];

if(this.state.watchlists && this.state.stocks){
  tickers = this.state.watchlists[this.props.primary_id].stock_ids.map(id => {

    return(
      this.state.stocks[id].ticker
    );
  });
}

  if(tickers.includes(this.props.ticker)){
    button = this.handleDrop;
    buttonType = "Remove from Watchlist";
    buttonClass = "remove-button";
  } else {
    button = this.handleAdd;
    buttonType = "Add to Watchlist";
    buttonClass = "add-button";
  }


let buttonStyle ={
  position: "relative",
  marginTop: "-450px",
  zIndex: "-300"
};


  return(
    <div>
    <div className="stock-show-page">
      <EveryPageNav currentUser={this.props.currentUser} logout={this.props.logout}/>
      <ul className="info-top">
        <li className="companyName">
          {this.state.data.companyName}
        </li>
        <li className="price-label" id="price-label">{this.state.data.latestPrice}</li>
        <li className="change-label" id="change-label">{this.state.data.change} ({this.state.data.changePercent})</li>
      </ul>
      <Chart className="stock-chart" ticker={this.props.ticker}/>

      <button style={buttonStyle} className={buttonClass} onClick={button}>{buttonType}</button>
      <br>
      </br>
    </div>
      <div>
        <News companyName={this.state.data.companyName} ticker={this.props.ticker}/>
      </div>
    </div>
  );
}

// <ul>
//   {data}
// </ul>

}
// <div className="chart-button-container">
//   <button className="chart-button" onClick={() => this.handleClick("1d")}>1D</button>
//   <button className="chart-button" onClick={() => this.handleClick("1m")}>1M</button>
//   <button className="chart-button" onClick={() => this.handleClick("3m")}>3M</button>
//   <button className="chart-button" onClick={() => this.handleClick("1y")}>1Y</button>
//   <button className="chart-button" onClick={() => this.handleClick("5y")}>5Y</button>
// </div>

export default Stock;
