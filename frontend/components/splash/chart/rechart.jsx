import React, { Component } from 'react';
import axios from 'axios';
import {LineChart, Line, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, LinearGradient} from 'recharts';
import * as Icon from 'react-cryptocoins';
import ReactLoading from 'react-loading';
import Radium from 'radium';

class reChart extends Component {

  constructor(props){
    super(props);
    this.state = {
      data: null,
      price: null,
      previousPrice: null,
      timeframe: "1d"
    };

  this.handleClick = this.handleClick.bind(this);

  this.getChart = this.getChart.bind(this);
  this.getPrice = this.getPrice.bind(this);
    // this.rendertooltip = this.rendertooltip.bind(this)
  this.setPriceInterval = this.setPriceInterval.bind(this);

  this.clearPriceInterval = this.clearPriceInterval.bind(this);

  this.rendertooltip = this.rendertooltip.bind(this)


  this.handleLeave = this.handleLeave.bind(this)
  }






  setPriceInterval(){
    this.getPrice();
    this.priceIntervalId = setInterval(this.getPrice, 5000);
  }

  clearPriceInterval(){
    clearInterval(this.priceIntervalId);
  }

  componentDidMount() {
    this.getChart();
    this.setPriceInterval();
    document.getElementById('defaultButton').focus();
  }

  componentDidUpdate(prevProps) {
    if(prevProps.ticker !== this.props.ticker)
    this.getChart();
    this.clearPriceInterval()
    this.setPriceInterval();
  }
  //
  componentWillUnmount() {

    this.clearPriceInterval();
  }

getPrice(){


  const url = `https://min-api.cryptocompare.com/data/price?fsym=${this.props.ticker}&tsyms=USD,ETH,LTC&api_key={28d3b41970a81c30692ae9e00cc7174860d55306f66aa7c6f26a0f2bc7d2f6cd}`


  axios.get(url)
  .then( data => {
    // const keyz = Object.keys(data[this.state.datakey])
    if(this.state.price !== data.data.USD){




      const previousPrice = this.state.price;
      const price = data.data.USD.toFixed(3);
      let percentageChange;
      if(previousPrice === null){
        percentageChange = null;
      } else
      {
        percentageChange = (price/previousPrice) - 1;
      }
      this.setState({
        price: price,
        previousPrice: previousPrice,
        percentageChange: percentageChange,
      
      });
    }
  })

}

getChart(){

let url;
  if(this.state.timeframe === "1d"){
    url = `https://min-api.cryptocompare.com/data/histohour?fsym=${this.props.ticker}&tsym=USD&limit=24`;
  }
  else if(this.state.timeframe === "1m"){
    url = `https://min-api.cryptocompare.com/data/histoday?fsym=${this.props.ticker}&tsym=USD&limit=30&api_key={28d3b41970a81c30692ae9e00cc7174860d55306f66aa7c6f26a0f2bc7d2f6cd}`;
  }
  else if(this.state.timeframe === "3m"){
    url = `https://min-api.cryptocompare.com/data/histoday?fsym=${this.props.ticker}&tsym=USD&limit=90&api_key={28d3b41970a81c30692ae9e00cc7174860d55306f66aa7c6f26a0f2bc7d2f6cd}`;
  }
  else if(this.state.timeframe === "1y"){
    url = `https://min-api.cryptocompare.com/data/histoday?fsym=${this.props.ticker}&tsym=USD&limit=360&api_key={28d3b41970a81c30692ae9e00cc7174860d55306f66aa7c6f26a0f2bc7d2f6cd}`;
  }
  else if(this.state.timeframe === "5y"){
    url = `https://min-api.cryptocompare.com/data/histoday?fsym=${this.props.ticker}&tsym=USD&limit=1441&api_key={28d3b41970a81c30692ae9e00cc7174860d55306f66aa7c6f26a0f2bc7d2f6cd}`;
  }
  // `https://www.alphavantage.co/query?${this.state.func}&symbol=${this.state.symb}${this.state.interval}&apikey=ZRQW53GP2UJEJ1UK`
  axios.get(url).then( stash => {
    // const keyz = Object.keys(data[this.state.datakey])
      // const data = theStuff.map(datum => {
        // if(this.state.timeframe === "1D")
      //   let timeKey;
      //   if(this.state.timeframe === "1d"){
      //     timeKey = datum.minute;
      //   } else {
      //     timeKey = datum.date;
      //   }
      //   return{
      //     time: timeKey,
      //     price: datum.close,
      //     // change: datum.change,
      //     // percentageChange: datum.changePercent
      //   };
      // });

      this.setState({
        data: stash.data
      });

  });
}




    handleClick(timeframe){

        if(timeframe === "1d"){
          this.setState({
          timeframe: "1d"
        }, this.getChart);
      } else if (timeframe === "1m"){
        this.setState({
          timeframe: "1m"
        }, this.getChart);
      } else if (timeframe === "3m"){
        this.setState({
          timeframe: "3m"
        }, this.getChart);
      } else if (timeframe === "1y"){
        this.setState({
          timeframe: "1y"
        }, this.getChart);
      }else if (timeframe === "5y"){
        this.setState({
          timeframe: "5y"
        }, this.getChart);
      }else {
        this.setState({
        timeframe: "1d"
      }, this.getChart)
      }


    }

rendertooltip(e){
  let yDataKey = this.props.yDataKey;
    let xDataKey = this.props.xDataKey;
    if (e.payload && e.payload.length > 0){


      let payload = e.payload[0].payload;
      const price = payload[yDataKey];
      const date = new Date(payload[xDataKey]*1000);
      //adjusts tooltip based on timescale selected
      let hour, minutes, time;
      if (date.getMinutes() < 10){
        minutes = "0" + date.getMinutes().toString();
      }else{
        minutes = date.getMinutes();
      };
      if (date.getHours() > 12){
        hour = date.getHours()%12;
        if (hour === 0){
          time = `12:00 AM`
        }else{
          time = `${hour}:${minutes} PM`
        }
      }else{
        hour = date.getHours()%12;
        if (hour === 0){
          time = `12:00 PM`
        }else{
          time = `${hour}:${minutes} AM`
        }
      };

      const day = date.toDateString();
      document.getElementById("price-label").innerHTML = price.toFixed(3)+ " USD";

      //if chart needs to display change overtime (i.e not dashboard)
      //handle change overtime display
      if (payload.change){
        let change = this.round(payload.change,8).toString();
        let pctChange = payload.pctchange.toFixed(2);
        if (pctChange.toString().includes("Infinity") || pctChange.toString().includes("NaN")){
          pctChange = "0";
          change = "0";
        };
        if (change < 0){
          document.getElementById("Change-Label").innerHTML = `-$${change.slice(1)} (${pctChange}%)`;
        }else{
          document.getElementById("Change-Label").innerHTML = `+$${change} (${pctChange}%)`;
        }
      }

      if (!this.state.timeframe || this.state.timeframe === "1d"){
        return(
          <div className="tooltip">{time} {day.slice(4,-5)}</div>
        )
      }else{
        return(
          <div className="tooltip">{day.slice(4,-5)}, {day.slice(-5)}</div>
        )
      }
    }
}
handleLeave(){
  document.getElementById("price-label").innerHTML = this.state.price + " USD"
}


render(){
  let data
if(this.state.data){
  data = this.state.data.Data;
}

  let stroke;

if(data && data[0].close > data[data.length-1].close){
  stroke = '#f45531';
} else{
  stroke = '#21ce99';
}
let priceColor = "gray"
if(this.state.previousPrice && (this.state.price > this.state.previousPrice)){
  priceColor = "green";
  stroke = 'forestgreen'
}
if(this.state.previousPrice && (this.state.price < this.state.previousPrice)){
  priceColor = "red";
  stroke = "darkred"
}
let topPadding = "120px 0 0";

if(this.props.place === "stock"){
  topPadding = "100px 0"
}

let focusStyle = {":focus":{
  color: stroke,

}}


let name = null;
var price = <div className="loader-container">
  <div className="loader">
    <ReactLoading type="spinningBubbles" color="#21ce99" height={78} width={78} />
  </div>
</div>;

    var linechart = <div className="loader-container">
      <div className="loader">
        <ReactLoading type="spinningBubbles" color="#21ce99" height={250} width={250} />
      </div>
    </div>;

    let ethPrice
    let ltcPrice

if(data && this.state.price){

  if(this.state.ETHprice){
    ethPrice = <li style={{color: priceColor}}className="price-label" id="price-label">{this.state.ETHprice}</li>
    ltcPrice = <li style={{color: priceColor}}className="price-label" id="price-label">{this.state.LTCprice}</li>
  }

  price = this.state.price + " USD";
  name =   <li style={{color:stroke}} className="companyName">
      {this.props.name}
    </li>
  linechart = <LineChart
  width={650}
  height={250}
  onMouseEnter={() => this.clearPriceInterval()}
  onMouseLeave={
    () => this.handleLeave()
  }
  data={data}
  margin={{ top: 0, right: 0, left: 0, bottom: 0 }}
>
  <XAxis dataKey="time" domain={['dataMin', 'dataMax']} hide={true}/>
  <Tooltip isAnimationActive={false} position={{ y: 10 }} offset={-32} content={this.rendertooltip}/>
<YAxis datakey="close" domain={['dataMin', 'dataMax']} hide={true} />
  <Line dot={false} type="linear" dataKey="close" stroke={stroke} yAxisId={0}/>
  <Line animationDuration={850} dataKey="close" stroke={stroke} dot={false} strokeWidth={2} />
</LineChart>;





   }

return(
  <div>

  <ul className="info-top" style={{padding: topPadding}}>


      {name}

    <li style={{color: priceColor}}className="price-label" id="price-label">{price}</li>
    {ethPrice}
    {ltcPrice}
    <li className="change-label" id="change-label"></li>
  </ul>
  <div>
    {linechart}
  <div className="chart-button-container">
    <button key={1} style={focusStyle} id={"defaultButton"}className="chart-button" onClick={() => this.handleClick("1d")}>1D</button>
    <button key={2} style={focusStyle} className="chart-button" onClick={() => this.handleClick("1m")}>1M</button>
    <button key={3} style={focusStyle} className="chart-button" onClick={() => this.handleClick("3m")}>3M</button>
    <button key={4} style={focusStyle} className="chart-button" onClick={() => this.handleClick("1y")}>1Y</button>
    <button key={5} style={focusStyle} className="chart-button" onClick={() => this.handleClick("5y")}>5Y</button>
  </div>
</div>
</div>
);
}
}

// <Line type="monotone" dataKey="time" stroke="#ff7300" yAxisId={0} />


export default Radium(reChart);
