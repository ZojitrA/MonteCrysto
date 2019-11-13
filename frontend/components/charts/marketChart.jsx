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
      ETHdata: null,
      LTCdata: null,
      price: null,
      previousPrice: null,
      previousETHPrice: null,
      previousLTCPrice: null,
      timeframe: "1d",
      ETHprice: null,
      LTCprice: null
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

  // componentDidUpdate(prevProps) {
  //   if(prevProps.ticker !== this.props.ticker)
  //   this.getChart();
  //   this.clearPriceInterval()
  //   this.setPriceInterval();
  // }
  //
  componentWillUnmount() {

    this.clearPriceInterval();
  }

getPrice(){


  const url = `https://min-api.cryptocompare.com/data/price?fsym=USD&tsyms=BTC,ETH,LTC&api_key={28d3b41970a81c30692ae9e00cc7174860d55306f66aa7c6f26a0f2bc7d2f6cd}`


  axios.get(url)
  .then( data => {
    // const keyz = Object.keys(data[this.state.datakey])
    if(this.state.price !== (1/data.data.BTC).toFixed(3)){

      let ETHprice = (1/data.data.ETH).toFixed(3);
      let LTCprice = (1/data.data.LTC).toFixed(3);
      const price = (1/data.data.BTC).toFixed(3);



      const previousPrice = this.state.price;
      const previousETHPrice = this.state.ETHprice;
      const previousLTCPrice = this.state.LTCprice;

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
        previousETHPrice: previousETHPrice,
        previousLTCPrice: previousLTCPrice,
        percentageChange: percentageChange,
        ETHprice: ETHprice,
        LTCprice: LTCprice
      });
    }
  })

}

getChart(){

let url;
let url2;
let url3;
  if(this.state.timeframe === "1d"){
    url = `https://min-api.cryptocompare.com/data/histohour?fsym=BTC&tsym=USD&limit=24`;
    url2 = `https://min-api.cryptocompare.com/data/histohour?fsym=ETH&tsym=USD&limit=24`;
    url3 = `https://min-api.cryptocompare.com/data/histohour?fsym=LTC&tsym=USD&limit=24`;
  }
  else if(this.state.timeframe === "1m"){
    url = `https://min-api.cryptocompare.com/data/histoday?fsym=BTC&tsym=USD&limit=30&api_key={28d3b41970a81c30692ae9e00cc7174860d55306f66aa7c6f26a0f2bc7d2f6cd}`;
    url2 = `https://min-api.cryptocompare.com/data/histoday?fsym=ETH&tsym=USD&limit=30&api_key={28d3b41970a81c30692ae9e00cc7174860d55306f66aa7c6f26a0f2bc7d2f6cd}`;
    url3 = `https://min-api.cryptocompare.com/data/histoday?fsym=LTC&tsym=USD&limit=30&api_key={28d3b41970a81c30692ae9e00cc7174860d55306f66aa7c6f26a0f2bc7d2f6cd}`;
  }
  else if(this.state.timeframe === "3m"){
    url = `https://min-api.cryptocompare.com/data/histoday?fsym=BTC&tsym=USD&limit=90&api_key={28d3b41970a81c30692ae9e00cc7174860d55306f66aa7c6f26a0f2bc7d2f6cd}`;
    url2 = `https://min-api.cryptocompare.com/data/histoday?fsym=ETH&tsym=USD&limit=90&api_key={28d3b41970a81c30692ae9e00cc7174860d55306f66aa7c6f26a0f2bc7d2f6cd}`;
    url3 = `https://min-api.cryptocompare.com/data/histoday?fsym=LTC&tsym=USD&limit=90&api_key={28d3b41970a81c30692ae9e00cc7174860d55306f66aa7c6f26a0f2bc7d2f6cd}`;
  }
  else if(this.state.timeframe === "1y"){
    url = `https://min-api.cryptocompare.com/data/histoday?fsym=BTC&tsym=USD&limit=360&api_key={28d3b41970a81c30692ae9e00cc7174860d55306f66aa7c6f26a0f2bc7d2f6cd}`;
    url2 = `https://min-api.cryptocompare.com/data/histoday?fsym=ETH&tsym=USD&limit=360&api_key={28d3b41970a81c30692ae9e00cc7174860d55306f66aa7c6f26a0f2bc7d2f6cd}`;
    url3 = `https://min-api.cryptocompare.com/data/histoday?fsym=LTC&tsym=USD&limit=360&api_key={28d3b41970a81c30692ae9e00cc7174860d55306f66aa7c6f26a0f2bc7d2f6cd}`;
  }
  else if(this.state.timeframe === "5y"){
    url = `https://min-api.cryptocompare.com/data/histoday?fsym=BTC&tsym=USD&limit=1441&api_key={28d3b41970a81c30692ae9e00cc7174860d55306f66aa7c6f26a0f2bc7d2f6cd}`;
    url2 = `https://min-api.cryptocompare.com/data/histoday?fsym=ETH&tsym=USD&limit=1441&api_key={28d3b41970a81c30692ae9e00cc7174860d55306f66aa7c6f26a0f2bc7d2f6cd}`;
    url3 = `https://min-api.cryptocompare.com/data/histoday?fsym=LTC&tsym=USD&limit=1441&api_key={28d3b41970a81c30692ae9e00cc7174860d55306f66aa7c6f26a0f2bc7d2f6cd}`;
  }
  // `https://www.alphavantage.co/query?${this.state.func}&symbol=${this.state.symb}${this.state.interval}&apikey=ZRQW53GP2UJEJ1UK`
  axios.get(url).then( stash => {
    // const keyz = Object.keys(data[this.state.datakey])
    if(!stash.data.Data){
      this.getChart()
      throw new Error('btc')
    }
      const data = stash.data.Data.map((datum, idx) => {
        if(idx === 0){
          return datum
        }

        return{
          time: datum.time,
          close: (datum.close - stash.data.Data[0].close) / stash.data.Data[0].close * 100
          // percentageChange: datum.changePercent
        };
      });

      this.setState({
        data: data.slice(1),
        savedData: stash.data.Data
      });

  }).then(axios.get(url2).then(stash => {
    let data = this.state.data

    for(let i = 0; i< stash.data.Data.length -1; i++){

      if(!data || !data[i]){
        this.getChart()
        throw new Error('eth')
      }
      data[i].ETHtime = stash.data.Data[i+1].time
      data[i].ETHclose = (stash.data.Data[i+1].close - stash.data.Data[0].close) / stash.data.Data[0].close * 100
    }




  this.setState({
    data: data
  });
})).then(axios.get(url3).then(stash => {
  let data = this.state.data

  for(let i = 0; i< stash.data.Data.length -1; i++){

    if(!data || !data[i]){
      this.getChart()
      throw new Error('ltc')
    }

    data[i].LTCtime = stash.data.Data[i+1].time
    data[i].LTCclose = (stash.data.Data[i+1].close - stash.data.Data[0].close) / stash.data.Data[0].close * 100
  }




this.setState({
  data: data
});
}))
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
      let ETHpayload = e.payload[1].payload;
      let LTCpayload = e.payload[2].payload;
      const price = payload.close;
      const ETHprice = ETHpayload.ETHclose;
      const LTCprice = LTCpayload.LTCclose;
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
      document.getElementById("price-label").innerHTML = price.toFixed(3)+ " %";
      document.getElementById("ethprice-label").innerHTML = ETHprice.toFixed(3)+ " %";
      document.getElementById("ltcprice-label").innerHTML = LTCprice.toFixed(3)+ " %";

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
  document.getElementById("price-label").innerHTML = this.state.price + " btc"
  document.getElementById("ethprice-label").innerHTML = this.state.ETHprice + " eth"
  document.getElementById("ltcprice-label").innerHTML = this.state.LTCprice + " ltc"
}


render(){
  let data
if(this.state.data){
  data = this.state.data;
}

  let stroke;

if(data && data[0].close > data[data.length-1].close){
  stroke = '#f45531';
} else{
  stroke = '#21ce99';
}


let topPadding= "100px 0px 20px";


let focusStyle = {":focus":{
  color: stroke,

}}


let name = "Performance Benchmark";
var price = <div className="loader">
    <ReactLoading type="spinningBubbles" color="#21ce99" height={33} width={33} />
  </div>
;

    var linechart = <div className="loader-container">
      <div className="loader">
        <ReactLoading type="spinningBubbles" color="#21ce99" height={250} width={250} />
      </div>
    </div>;

    let ethPrice
    let ltcPrice

if(data && this.state.price && data[0].ETHclose && data[0].LTCclose){


    ethPrice = this.state.ETHprice + " eth"
    ltcPrice = this.state.LTCprice + " ltc"
    price = this.state.price + " btc";

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
  <Line animationDuration={850} dataKey="close" stroke={"gold"} dot={false} strokeWidth={2} />
  <Line animationDuration={850} dataKey="ETHclose" stroke={"purple"} dot={false} strokeWidth={2} />
  <Line animationDuration={850} dataKey="LTCclose" stroke={"silver"} dot={false} strokeWidth={2} />

</LineChart>;





   }

return(
  <div>

  <ul className="info-top" style={{padding: topPadding}}>

    <li style={{color:stroke}} className="companyName">
      {name}
    </li>
    <li style={{color: "gold"}}className="price-label" id="price-label">{price}</li>
    <li style={{color: "purple"}}className="price-label" id="ethprice-label">{ethPrice}</li>
    <li style={{color: "silver"}}className="price-label" id="ltcprice-label">{ltcPrice}</li>
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
