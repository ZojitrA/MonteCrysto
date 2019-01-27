import React, { Component } from 'react';
import axios from 'axios';
import {LineChart, Line, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, LinearGradient} from 'recharts';


class Chart extends Component {

  constructor(props){
    super(props);
    this.state = {
      data: null,
      price: null,
      previousPrice: null,
      timeframe: "1m"
    };

  this.handleClick = this.handleClick.bind(this);

  this.getChart = this.getChart.bind(this);
  this.getPrice = this.getPrice.bind(this);
    // this.rendertooltip = this.rendertooltip.bind(this)
  this.setPriceInterval = this.setPriceInterval.bind(this);

  this.clearPriceInterval = this.clearPriceInterval.bind(this);

  }


  setPriceInterval(){
    this.getPrice()
    this.priceIntervalId = setInterval(this.getPrice, 2000);
  }

  clearPriceInterval(){
    clearInterval(this.priceIntervalId);
  }

  componentDidMount() {
    this.getChart();
    this.setPriceInterval();
  }
  //
  componentWillUnmount() {

    this.clearPriceInterval();
  }

getPrice(){

  const url = `https://api.iextrading.com/1.0//tops/last?symbols=${this.props.ticker}`

  axios.get(url)
  .then( data => {

    // const keyz = Object.keys(data[this.state.datakey])
    const previousPrice = this.state.price;
    const price = data.data[0].price;
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
  });

}

getChart(){

let url;
  if(this.state.timeframe === "1d"){
    url = `https://api.iextrading.com/1.0/stock/${this.props.ticker}/chart/1d`;
  }
  else{
    url = `https://api.iextrading.com/1.0/stock/${this.props.ticker}/chart/${this.state.timeframe}`;
  }
  // `https://www.alphavantage.co/query?${this.state.func}&symbol=${this.state.symb}${this.state.interval}&apikey=ZRQW53GP2UJEJ1UK`

  axios.get(url)
  .then( stash => {

    // const keyz = Object.keys(data[this.state.datakey])
    const data = stash.data.map(datum => {
     // if(this.state.timeframe === "1D")
      let timeKey;
      if(this.state.timeframe === "1d"){
        timeKey = datum.minute;
      } else {
        timeKey = datum.date;
      }
     return{
       time: timeKey,
       price: datum.close,
       change: datum.change,
       percentageChange: datum.changePercent
     };
   });
    this.setState({
      data: data
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
      }


    }

rendertooltip(e){

  if (e.payload.length>0){
    document.getElementById("price-label").innerHTML = e.payload[0].payload.price;

    document.getElementById("change-label").innerHTML = `${e.payload[0].payload.change} (${e.payload[0].payload.percentageChange}%)`;
    // this.setState({price: e.payload[0].payload.price});
    // if(){
    // }
    // document.getElementById("change-label").addclass("change")
    return(
      <div>{e.payload[0].payload.time}</div>
    );
  }
}

render(){
  const data = this.state.data;
  let stroke;
if(data && data[0].price > data[data.length-1].price){
  stroke = 'red';
} else{
  stroke = 'green';
}
return(
  <div>
    <LineChart
    width={650}
    height={200}
    onMouseEnter={this.clearPriceInterval}
    onMouseLeave={this.setPriceInterval}
    data={data}
    margin={{ top: 0, right: 0, left: 0, bottom: 0 }}
  >
    <XAxis dataKey="time" domain={['dataMin', 'dataMax']} hide={true}/>
    <Tooltip content={this.rendertooltip}/>
<YAxis datakey="price" domain={['dataMin', 'dataMax']} hide={true} />
    <Line dot={false} type="linear" dataKey="price" stroke={stroke} yAxisId={0}/>
  </LineChart>
  <div className="chart-button-container">
    <button className="chart-button" onClick={() => this.handleClick("1d")}>1D</button>
    <button className="chart-button" onClick={() => this.handleClick("1m")}>1M</button>
    <button className="chart-button" onClick={() => this.handleClick("3m")}>3M</button>
    <button className="chart-button" onClick={() => this.handleClick("1y")}>1Y</button>
    <button className="chart-button" onClick={() => this.handleClick("5y")}>5Y</button>
  </div>
</div>
);
}
}

// <Line type="monotone" dataKey="time" stroke="#ff7300" yAxisId={0} />


export default Chart;
