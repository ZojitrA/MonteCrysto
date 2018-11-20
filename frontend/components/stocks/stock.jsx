import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import Chart from '../splash/chart/rechart';
import EveryPageNav from '../everyPageNav';



class Stock extends Component {


  constructor(props){

    super(props);
    this.state = {
      data: [],
      timeframe: "1m"
    };

    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount(){
    this.props.getStock(this.props.ticker).then(data => this.setState({data: data.data}));
  }

  componentDidUpdate(prevProps){
    if(prevProps.ticker !== this.props.ticker){
      this.props.getStock(this.props.ticker).then(data => this.setState({data: data.data}));
    }
  }


  handleClick(timeframe){

      if(timeframe === "6m"){
        this.setState({
        timeframe: "6m"
      });
    } else if (timeframe === "1d"){
      this.setState({
        timeframe: "1d"
      });
    } else if (timeframe === "1m"){
      this.setState({
        timeframe: "1m"
      });
    } else if (timeframe === "2y"){
      this.setState({
        timeframe: "2y"
      });
    }
  }

render(){
const data = Object.entries(this.state.data).map((datum, idx) => (
  <li key={idx}>{datum}</li>
));

  return(
  <div className="stock-show-page">
        <EveryPageNav currentUser={this.props.currentUser} logout={this.props.logout}/>
        <ul className="info-top">
          <li className="companyName">
            {this.state.data.companyName}
          </li>
          <li className="price-label" id="price-label">{this.state.data.latestPrice}</li>
          <li className="change-label" id="change-label">{this.state.data.change} ({this.state.data.changePercent})</li>
        </ul>
        <Chart className="stock-chart" ticker={this.props.ticker} timeframe={this.state.timeframe}/>

        <div className="chart-button-container">
          <button className="chart-button" onClick={() => this.handleClick("1d")}>1D</button>
          <button className="chart-button" onClick={() => this.handleClick("1m")}>1M</button>
          <button className="chart-button" onClick={() => this.handleClick("6m")}>6M</button>
          <button className="chart-button" onClick={() => this.handleClick("2y")}>2Y</button>
        </div>

        <br>
        </br>
        <ul>
          {data}
        </ul>
  </div>

  );
}


}

export default Stock;
