import React, { Component } from 'react';
import axios from 'axios';
import {LineChart, Line, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, LinearGradient} from 'recharts';


class reChart extends Component {

  constructor(props){
    super(props);
    this.state = {
      data: null,
      price: null,
      timeframe: "1m"
    };

  this.handleClick = this.handleClick.bind(this);

  this.getStuff = this.getStuff.bind(this);
    // this.rendertooltip = this.rendertooltip.bind(this)

  }



  componentDidMount() {
    this.getStuff();
}

getStuff(){

let url;
  if(this.state.timeframe === "1d"){
    url = `https://api.iextrading.com/1.0/stock/${this.props.ticker}/chart/1d?chartInterval=5`;
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
      data: data,
      price: data[data.length-1].price
    });
  });
}




    handleClick(timeframe){

        if(timeframe === "1d"){
          this.setState({
          timeframe: "1d"
        }, this.getStuff);
      } else if (timeframe === "1m"){
        this.setState({
          timeframe: "1m"
        }, this.getStuff);
      } else if (timeframe === "3m"){
        this.setState({
          timeframe: "3m"
        }, this.getStuff);
      } else if (timeframe === "1y"){
        this.setState({
          timeframe: "1y"
        }, this.getStuff);
      }else if (timeframe === "5y"){
        this.setState({
          timeframe: "5y"
        }, this.getStuff);
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


export default reChart;
