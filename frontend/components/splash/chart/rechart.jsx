import React, { Component } from 'react';
import axios from 'axios';
import {LineChart, Line, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, LinearGradient} from 'recharts';


class reChart extends Component {

  constructor(props){
    super(props);
    this.state = {
      data: null,
      price: null
    };



    this.rendertooltip = this.rendertooltip.bind(this)

  }



  componentDidMount() {
    this.getStuff();
}

getStuff(){
  const url = `https://api.iextrading.com/1.0/stock/${this.props.ticker}/chart/${this.props.timeframe}`;

  // `https://www.alphavantage.co/query?${this.state.func}&symbol=${this.state.symb}${this.state.interval}&apikey=ZRQW53GP2UJEJ1UK`

  axios.get(url)
  .then( stash => {
    // const keyz = Object.keys(data[this.state.datakey])
    const data = stash.data.map(datum => {
     // if(this.state.timeframe === "1D")
     return{
       time: datum.date,
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


    componentDidUpdate(prevProps){

      if(prevProps.timeframe !== this.props.timeframe){
        this.getStuff();
      }
    }



rendertooltip(e){

  if (e.payload.length>0){
    // document.getElementById("price-label").innerHTML = e.payload[0].payload.price;
    //
    // document.getElementById("change-label").innerHTML = `${e.payload[0].payload.change} (${e.payload[0].payload.percentageChange}%)`;
    this.setState({price: e.payload[0].payload.price})
    // if(){
    // }
    // document.getElementById("change-label").addclass("change")
    return(
      <div>{e.payload[0].payload.time}</div>
    );
  } else {

    this.getStuff();

  }
}

render(){
  const data = this.state.data;
  let stroke;
if(data && data[0]["price"] > data[data.length-1]["price"]){
  stroke = 'red';
} else{
  stroke = 'green';
}
return(
  <div>
    <li>
      {this.state.price}
    </li>
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
</div>
);
}
}

// <Line type="monotone" dataKey="time" stroke="#ff7300" yAxisId={0} />


export default reChart;
