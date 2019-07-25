import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import Chart from '../splash/chart/rechart';
import EveryPageNav from '../everyPageNav';
import axios from 'axios';
import News from '../news/news_container';
import TransactionBar from '../transactions/transactions_container'

class Stock extends Component {


  constructor(props){

    super(props);
    this.state = {
      data: [],
      watchlist: null,
      news: null
    };
    this.handleAdd = this.handleAdd.bind(this);
    this.handleDrop = this.handleDrop.bind(this);

    this.grabWatchlists = this.grabWatchlists.bind(this);

  }

  componentWillMount(){
    this.props.getAllShares(this.props.user_id)

  }
  componentDidMount(){
    // this.props.getStock(this.props.ticker).then(data => this.setState({data: data.data}));

    this.grabWatchlists()


  }

    // this.props.getWatchlists()







  componentDidUpdate(prevProps){
  //   // let tickers = [];
  //   //
  //   // if(this.state.watchlists && this.state.stocks){
  //   //   tickers = this.state.watchlists.stocks.map(entity => {
  //   //
  //   //     return(
  //   //       entity.ticker
  //   //     );
  //   //   });
  //   // }
  if(prevProps.watchlist.id){

    if(prevProps.watchlist.stocks.length !== this.props.watchlist.stocks.length){
      this.grabWatchlists()

    }
  }
  //
  //
    }



  grabWatchlists(){

    this.props.getWatchlists(this.props.user_id).then(data => {



      this.setState({watchlist: data.data.stocks})
    }
    );

  }




  handleAdd(){

    let stock_Id = this.props.stocks[this.props.ticker].id
    let watchlist_Id = this.props.watchlist_id

    $.ajax({
        url: "api/watchlist_stock_joins",
        method: "POST",
        data: {watchlistStockJoin: {watchlist_id: watchlist_Id, stock_id: stock_Id}}
      }).then(data => {
        this.grabWatchlists()

      })
  }

  handleDrop(){

    let stock_Id = this.props.stocks[this.props.ticker].id
    let watchlist_Id = this.props.watchlist_id

    $.ajax({
        url: `api/watchlist_stock_joins`,
        method: "DELETE",
        data: {watchlistStockJoin: {watchlist_id: watchlist_Id, stock_id: stock_Id}}
      }).then(data => {
        this.grabWatchlists()

      })
  }



render(){


  // let data = Object.entries(this.state.data).map((datum, idx) => (
  //   <li key={idx}>{datum}</li>
  // ));

let button;
let buttonType;
let buttonClass;
let tickers = [];
let name


if(this.state.watchlist){
  name = this.props.stocks[this.props.ticker].name
  tickers = this.state.watchlist.map(entity => {

    return(
      entity.ticker
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
  position: "fixed",
  marginTop: "520px",
  right: "138px"
};


  return(
    <div>
    <div className="stock-show-page">
      <EveryPageNav currentUser={this.props.currentUser} logout={this.props.logout}/>
      <ul className="info-top">

      </ul>
      <Chart className="stock-chart" name={name} ticker={this.props.ticker}
        xDataKey={"time"} yDataKey={"close"}place={"stock"}/>

      <button style={buttonStyle} className={buttonClass} onClick={button}>{buttonType}</button>
      <br>
      </br>
      <TransactionBar ticker={this.props.ticker}/>
    </div>
      <div>
        <News ticker={this.props.ticker}/>
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
