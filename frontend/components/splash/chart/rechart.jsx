import React, { Component } from 'react';
import axios from 'axios';
import {LineChart, Line, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, LinearGradient} from 'recharts';


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


  const url = `https://min-api.cryptocompare.com/data/price?fsym=${this.props.ticker}&tsyms=USD`

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
        percentageChange: percentageChange
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
    url = `https://min-api.cryptocompare.com/data/histoday?fsym=${this.props.ticker}&tsym=USD&limit=30`;
  }
  else if(this.state.timeframe === "3m"){
    url = `https://min-api.cryptocompare.com/data/histoday?fsym=${this.props.ticker}&tsym=USD&limit=90`;
  }
  else if(this.state.timeframe === "1y"){
    url = `https://min-api.cryptocompare.com/data/histoday?fsym=${this.props.ticker}&tsym=USD&limit=360`;
  }
  else if(this.state.timeframe === "5y"){
    url = `https://min-api.cryptocompare.com/data/histoday?fsym=${this.props.ticker}&tsym=USD&limit=1441`;
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
  if (e.payload.length>0){
    document.getElementById("price-label").innerHTML = e.payload[0].payload.close;

    // document.getElementById("change-label").innerHTML = `${e.payload[0].payload.change} (${e.payload[0].payload.percentageChange}%)`;
    // this.setState({price: e.payload[0].payload.price});
    // if(){
    // }
    // document.getElementById("change-label").addclass("change")
    return(
      <div>{e.payload[0].payload.time}</div>
    );
  }
}
handleLeave(){
  document.getElementById("price-label").innerHTML = this.state.price
}

render(){
  let data
if(this.state.data){
  data = this.state.data.Data;
}

  let stroke;
if(data && data[0].close > data[data.length-1].close){
  stroke = 'red';
} else{
  stroke = 'green';
}
let priceColor = "gray"
if(this.state.previousPrice && (this.state.price > this.state.previousPrice)){
  priceColor = "green";
}
if(this.state.previousPrice && (this.state.price < this.state.previousPrice)){
  priceColor = "red";
}
return(
  <div>

  <ul className="info-top">
    <li className="companyName">
      {this.props.ticker}
    </li>
    <li style={{color: priceColor}}className="price-label" id="price-label">{this.state.price}</li>
    <li className="change-label" id="change-label"></li>
  </ul>
  <div>
    <LineChart
    width={650}
    height={200}
    onMouseEnter={this.clearPriceInterval}
    onMouseLeave={
      this.handleLeave
    }
    data={data}
    margin={{ top: 0, right: 0, left: 0, bottom: 0 }}
  >
    <XAxis dataKey="time" domain={['dataMin', 'dataMax']} hide={true}/>
    <Tooltip isAnimationActive={false} position={{ y: 10 }} offset={-32} content={this.rendertooltip.bind(this)}/>
<YAxis datakey="close" domain={['dataMin', 'dataMax']} hide={true} />
    <Line dot={false} type="linear" dataKey="close" stroke={stroke} yAxisId={0}/>
  </LineChart>
  <div className="chart-button-container">
    <button className="chart-button" onClick={() => this.handleClick("1d")}>1D</button>
    <button className="chart-button" onClick={() => this.handleClick("1m")}>1M</button>
    <button className="chart-button" onClick={() => this.handleClick("3m")}>3M</button>
    <button className="chart-button" onClick={() => this.handleClick("1y")}>1Y</button>
    <button className="chart-button" onClick={() => this.handleClick("5y")}>5Y</button>
  </div>
</div>
</div>
);
}
}

// <Line type="monotone" dataKey="time" stroke="#ff7300" yAxisId={0} />


export default reChart;
