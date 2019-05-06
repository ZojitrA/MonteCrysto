import React from 'react';
import { withRouter } from 'react-router';
import axios from 'axios';
import {LineChart, Line, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, LinearGradient} from 'recharts';
import Radium from 'radium';


class Item extends React.Component {
  constructor(props) {
    super(props);
    this.state = {data: null, price: null};

    this.handleClick = this.handleClick.bind(this);
    this.getChart = this.getChart.bind(this);
    this.getPrice = this.getPrice.bind(this);
    }

  componentDidMount() {
    this.getPrice();
    this.getChart();
    this.intervalId = setInterval(this.getPrice, 1000);

  }
  //
  componentWillUnmount() {
    // clear out this.intervalId
    clearInterval(this.intervalId);
  }


  getPrice(){

    const url = `https://api.iextrading.com/1.0//tops/last?symbols=${this.props.ticker}`;

    axios.get(url)
    .then( data => {

      // const keyz = Object.keys(data[this.state.datakey])
      const price = data.data[0].price;
      this.setState({
        price: price,
      });
    });

  }


  getChart(){
    const url = `https://api.iextrading.com/1.0/stock/${this.props.ticker}/chart/1y?chartInterval=20`;

    // `https://www.alphavantage.co/query?${this.state.func}&symbol=${this.state.symb}${this.state.interval}&apikey=ZRQW53GP2UJEJ1UK`

    axios.get(url)
    .then( chartdata => {
      // const keyz = Object.keys(data[this.state.datakey])
      const data = chartdata.data.map(datum => {
       // if(this.state.timeframe === "1D")
       return{
         time: datum.date,
         price: datum.close
       };
     });
      this.setState({
        data: data,
      });
    });
  }


      // componentDidUpdate(prevProps){
      //
      //   if(prevProps.timeframe !== this.props.timeframe){
      //     this.getStuff();
      //   }
      // }
    handleClick() {
        this.props.history.push(`/stock/${this.props.ticker}`);
    }

render(){
  const data = this.state.data;
  let stroke;
  let className;
if(data && data[0].price > data[data.length-1].price){
  stroke = 'red';
} else{
  stroke = 'green';
}

if(data && data[data.length-1].price > data[data.length-2].price){
  className = "green-price";
}
if(data && data[data.length-1].price < data[data.length-2].price){
  className = "red-price";
}
else {
  className = "gray-price";
}

// let className
// if(data && data[data.length-1].price > data[data.length-2].price){
//   className = "splash-watchlist-price-red"
// }
// return(
//   <div>
//     <LineChart
//     width={650}
//     height={200}
//     data={data}
//     margin={{ top: 0, right: 0, left: 0, bottom: 0 }}
//   >
//     <XAxis dataKey="time" domain={['dataMin', 'dataMax']} hide={true}/>
//     <Tooltip content={this.rendertooltip}/>
// <YAxis datakey="price" domain={['dataMin', 'dataMax']} hide={true} />
//     <Line dot={false} type="linear" dataKey="price" stroke={stroke} yAxisId={0}/>
//   </LineChart>
// </div>
// );
// }
  return(
    <div className="watchlist-item">
      <ul>
        <li style={stroke === 'red'? {':hover' : { color: "red", fontWeight: 600}} : {':hover' : { color: "green", fontWeight: 600}}} className="watchlist-ticker" onClick={this.handleClick}>{this.props.ticker}</li>
        <li style={stroke === 'red'? {color: "red"} : {color: "green"}}>{this.state.price}</li>
        <br/>
        <br/>
      </ul>
      <LineChart width={50} height={30} data={data}>
        <XAxis dataKey="time" domain={['dataMin', 'dataMax']} hide={true}/>
        <YAxis datakey="price"  hide={true} />
        <Line dot={false} type='monotone' dataKey='price' stroke={stroke} strokeWidth={1} yAxisId={0} />
      </LineChart>
    </div>
  );



}
}


export default Radium(Item);
